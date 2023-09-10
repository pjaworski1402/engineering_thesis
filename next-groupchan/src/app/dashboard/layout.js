"use client";
import device from "@/styles/device";
import styled from "styled-components";

const Container = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 256px auto;
  }
`;

export default function RootLayout({ children }) {
  return (
    <Container>
      <div />
      {children}
    </Container>
  );
}
