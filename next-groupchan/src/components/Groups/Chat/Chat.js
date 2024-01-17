"use client";

import socket from "socket.io-client";
import {
  Container,
  Title,
  MessagesWrapper,
  MessageInputWrapper,
  CloseChatButton,
  Icon,
} from "./Chat.styled";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import qs from "qs";
import { apiVars } from "../../../api/strapiQueries";
import closeICO from "@/static/icons/close.svg"

const Chat = ({ groupname, showMessages,setShowMessages }) => {
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const groupnameDecode = decodeURI(groupname);
  const { data: userData } = useSession();
  const user = useUser();
  let welcome;
  const io = socket(apiVars.API_URL);
  const params = () =>
    qs.stringify({
      populate: {
        user: {
          populate: {
            profile: "*",
          },
        },
      },
      sort: "id:desc",
    });
  useEffect(() => {
    if (user?.username) {
      io.emit("join", { username: user?.username }, (error) => {
        if (error) return alert(error);
      });
      io.on("welcome", async (data, error) => {
        let welcomeMessage = {
          user: data.user,
          content: data.text,
        };
        welcome = welcomeMessage;
        setMessages([welcomeMessage]);
        await axios
          .get(`${apiVars.API_URL}/api/messages?${params()}`, {
            headers: {
              Authorization: `Bearer ${userData.jwt}`,
            },
          })
          .then(async (res) => {
            let arr = [welcome];
            res.data.data.map((one, i) => {
              arr = [one.attributes, ...arr];
              setMessages((msgs) => arr);
              setTimeout(()=>scrollDown(true),1)
            });
          }).then(()=>{
            
          })
          .catch((e) => console.log(e.message));
      });
      io.on("message", async (data, error) => {
        await axios
          .get(`${apiVars.API_URL}/api/messages?${params()}`, {
            headers: {
              Authorization: `Bearer ${userData.jwt}`,
            },
          })
          .then(async (res) => {
            let arr = [welcome];
            res.data.data.map((one, i) => {
              arr = [one.attributes, ...arr];
              setMessages((msgs) => arr);
              scrollDown(false)
            });
          })
          .catch((e) => console.log(e.message));
      });
    }
  }, [user?.username]);
  const sendMessage = () => {
    if (message) {
      io.emit(
        "sendMessage",
        { message, jwt: userData?.jwt, groupname: groupnameDecode },
        (error) => {
          // Sending the message to the backend
          if (error) {
            alert(error);
          }
        }
      );
      setMessage("");
      scrollDown(true);
    } else {
      alert("Message can't be empty");
    }
  };
  const scrollDown = (isForce) => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      const { scrollTop, scrollHeight, clientHeight } = chatBox;
  
      if (isForce) {
        chatBox.scrollTop = scrollHeight;
      } else {
        const isScrolledToBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 40;
  
        if (isScrolledToBottom) {
          chatBox.scrollTop = scrollHeight;
        }
      }
    }
  };
  const handleTextareaChange = (event) => {
    // Aktualizuj wysokość textarea na podstawie wysokości zawartości
    event.target.style.height = "24px";
    event.target.style.height = `${event.target.scrollHeight}px`;
    setMessage(event.target.value);
  };
  const sendOnEnter = (event) => {
    const { keyCode, shiftKey } = event;
    if (keyCode === 13 && !shiftKey) {
      // Wysyłanie wiadomości po naciśnięciu Enter (bez Shift)
      event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu Enter w textarea
      sendMessage();
    } else if (keyCode === 13 && shiftKey) {
      // Przechodzenie do nowej linii po naciśnięciu Shift+Enter
      event.preventDefault();
      setMessage((prevMessage) => prevMessage + "\n");
    }
  };
  return (
    <Container showMessages={showMessages}>
      <Title>
        <div>{groupnameDecode} - Rozmowa</div> 
      <CloseChatButton onClick={()=>setShowMessages(false)}><Icon src={closeICO} /></CloseChatButton>
      </Title>
      <MessagesWrapper ref={chatBoxRef}>
        {messages.map((message, iMessage) => {
          let firstUserMess = false;
          let lastUserMess = false;
          if (
            messages[iMessage - 1]?.user?.data?.id !== message?.user?.data?.id
          ) {
            firstUserMess = true;
          }
          if (
            messages[iMessage + 1]?.user?.data?.id !== message?.user?.data?.id
          ) {
            lastUserMess = true;
          }
          return (
            <Message
              firstUserMess={firstUserMess}
              lastUserMess={lastUserMess}
              message={message}
              myMessage={message?.user?.data?.id === userData?.id}
            />
          );
        })}
      </MessagesWrapper>
      <MessageInputWrapper>
        <textarea
          onChange={handleTextareaChange}
          placeholder="Wyślij wiadomość..."
          value={message}
          onKeyDown={sendOnEnter}
        />
        <button onClick={sendMessage}>Wyślij</button>
      </MessageInputWrapper>
    </Container>
  );
};

export default Chat;
