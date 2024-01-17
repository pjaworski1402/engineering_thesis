"use client";

import styled from "styled-components";

export const Container = styled.div`
margin-right: 12px;
  .messageWrapper {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-direction: ${({ myMessage }) => (myMessage ? "row-reverse" : "row")};
  }
`;
export const Username = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-left: ${({ myMessage }) =>
    myMessage ? "0" : "calc(32px + 4px + 5px)"};
  margin-right: ${({ myMessage }) =>
    myMessage ? "calc(32px + 4px + 5px)" : "0"};
  text-align: ${({ myMessage }) => (myMessage ? "right" : "left")};
  margin-bottom: 3px;
`;
export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
export const MessageContent = styled.div`
  border-radius: 16px;
  background: ${({ myMessage }) => (myMessage ? "var(--contrast)" : "#d9d9d9")};
  padding: 8px 14px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ myMessage }) => (myMessage ? "white" : "black")};
  max-width: calc(100% - 48px - 32px);
  word-wrap: break-word;
  margin-right: ${({lastUserMess,myMessage})=>lastUserMess && myMessage ?"0":"38px"};
  margin-left: ${({lastUserMess,myMessage})=> !lastUserMess && !myMessage ?"38px":"0"};
`;
