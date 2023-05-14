"use client";
import styled from "styled-components";
import Image from "next/image";
import device from "@/styles/device";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 48px;
  @media ${device.laptop} {
    margin-top: 40px;
    margin-bottom: 0;
    justify-content: left;
  }
`;

export const HeaderLogo = styled(Image)``;
