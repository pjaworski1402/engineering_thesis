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
  .buttonsWrapper{
    margin: 6px 0;
    display: flex;
    gap: 12px;
  }
  @media ${device.laptop} {
    max-width: 700px;
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

export const CommentsWrapper = styled.div``;

export const ShowAllComments = styled(Link)``;
