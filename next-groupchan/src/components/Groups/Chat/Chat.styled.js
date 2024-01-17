"use client";

import device from "@/styles/device";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: ${({ showMessages }) => (showMessages ? "block" : "none")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--primary);
  width: 100%;
  height: 100%;
  padding-bottom: 64px;
  @media ${device.laptopL} {
    display: block;
    position: sticky;
    top: 72px;
    z-index: 50;
    height: calc(100vh - 72px);
    padding: 24px 32px 32px 32px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-basis: 800px;
    width: 800px;
  }
`;

export const Title = styled.h3`
  height: 72px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 0 24px;
  justify-content: space-between;
  gap: 12px;
  @media ${device.laptopL} {
    height: auto;
    box-shadow: none;
    display: block;
    padding: 0;
  }
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: calc(100% - (56px + 12px + 0px));
  overflow-y: auto;
  height: 100%;
  /* Stylizacja scrollbarów WebKit */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #808080;
  }
`;

export const MessageInputWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background: #f9f9f9;
  display: flex;
  width: calc(100% - 16px);
  margin: 0 auto;
  margin-top: 6px;
  @media ${device.laptopL} {
    width: calc(100% - 64px);
    position: absolute;
    bottom: 12px;
    margin: auto;
  }
  textarea {
    height: 40px;
    border: none;
    background: none;
    resize: none;
    width: calc(100% - 20px);
    padding: 12px;
    min-height: 24px; /* Ustaw minimalną wysokość */
    max-height: 200px; /* Ustaw minimalną wysokość */
    overflow-y: auto; /* Ukryj pionowy pasek przewijania */
  }
  button {
    color: var(--contrast);
    font-size: 14px;
    font-weight: 700;
    border: none;
    background: none;
    padding-right: 20px;
    margin-left: 20px;
  }
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 8px;
  right: 8px;
  background: #e8e8e8;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: none;
  @media ${device.laptopL} {
    display: none;
  }
`;
export const Icon = styled(Image)``;

export const CloseChatButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.laptopL} {
    display: none;
  }
`;
