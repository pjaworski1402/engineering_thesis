"use client";

import {
  Container,
  ProfileImg,
  Username,
  MessageContent,
} from "./Message.styled";
import {apiVars} from "../../../api/strapiQueries"

const Message = ({ message, myMessage, lastUserMess, firstUserMess }) => {
  if (message.user.data) {
    return (
      <Container myMessage={myMessage}>
        {firstUserMess && (
          <Username myMessage={myMessage}>
            {message.user.data.attributes.username}
          </Username>
        )}
        <div className="messageWrapper">
          {lastUserMess && (
            <ProfileImg
              src={`${apiVars.API_URL}${message.user.data.attributes.profile?.data?.attributes.url}`}
            />
          )}
          <MessageContent lastUserMess={lastUserMess} myMessage={myMessage}>
            {message.content}
          </MessageContent>
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Message;
