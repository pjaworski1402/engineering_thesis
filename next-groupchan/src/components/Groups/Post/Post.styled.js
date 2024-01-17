import device from "@/styles/device";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  background: #f9f9f9;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 12px;
  .topPost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profileInfo {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
  .buttonsWrapper {
    margin: 6px 0;
    display: flex;
    gap: 12px;
  }
  @media ${device.laptop} {
    max-width: 700px;
  }
  .commentForm {
    display: flex;
    gap: 12px;
    margin: 12px 0;
    .inputText {
      width: 100%;
      height: 32px;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px; /* 200% */
      border-radius: 6px;
      border: 1px solid var(--contrast);
      padding: 0 8px;
    }
    button{
      border: none;
      background-color: var(--contrast);
      color:white;
      border-radius: 6px;
      padding: 0 12px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Username = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const OptionsButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 6px 0;
`;

export const PostImage = styled.img`
  width: calc(100% + 24px);
  margin: 0 -12px;
  max-height: 1200px;
  object-fit: cover;
`;

export const PostButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const Likes = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  gap: 6px;
  overflow: auto; /* Dodane, aby ukryć nadmiarowy tekst */
  max-height: 200px; /* Maksymalna wysokość komentarzy, dostosuj według potrzeb */
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
  .comment {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 20px;
    /* overflow: hidden; */
    text-overflow: ellipsis; /* Zastosuj "ellipsis" dla długich komentarzy */
  }

  .showAllComments {
    border: none;
    background-color: transparent;
    text-align: left;
    color: var(--contrast);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px; /* 200% */
    letter-spacing: 0.2px;
    padding: 0;
  }
`;
