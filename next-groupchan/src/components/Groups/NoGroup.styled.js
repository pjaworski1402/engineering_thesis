import device from "@/styles/device";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 48px;
  .buttonWrapper{
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }
  @media ${device.laptop} {
    display: flex;
    gap:64px;
    .left{
        width: 40%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const Text = styled.div`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const AdventureMap = styled(Image)`
  margin: 64px auto 0 auto;
  display: block;
  @media ${device.laptop} {
    margin: 0;
  }
`;