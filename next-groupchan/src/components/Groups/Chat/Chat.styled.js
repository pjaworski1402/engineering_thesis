"use client";

import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 72px;
  z-index: 50;
  height: calc(100vh - 72px);
  padding: 32px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-basis: 45%;
`;

export const Title = styled.h3``;

export const MessagesWrapper = styled.div``;

export const MessageInputWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background: #f9f9f9;
  display: flex;
  position: absolute;
  bottom: 12px;
  width: calc(100% - 64px);
  textarea {
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
