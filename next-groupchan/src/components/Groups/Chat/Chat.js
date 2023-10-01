"use client";

import { Container, Title,MessagesWrapper,MessageInputWrapper } from "./Chat.styled";
import Message from "./Message";

const Chat = ({groupname}) => {
    const groupnameDecode = decodeURI(groupname)
    const handleTextareaChange = (event) => {
        // Aktualizuj wysokość textarea na podstawie wysokości zawartości
        event.target.style.height = '24px';
        event.target.style.height = `${event.target.scrollHeight}px`;
      };
  return (
    <Container>
      <Title>{groupnameDecode} - Rozmowa</Title>
      <MessagesWrapper>
      </MessagesWrapper>
      <MessageInputWrapper>
        <textarea onChange={handleTextareaChange} placeholder="Wyślij wiadomość..." />
        <button>Wyślij</button>
      </MessageInputWrapper>
    </Container>
  );
};

export default Chat;
