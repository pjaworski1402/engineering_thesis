import styled from 'styled-components';
import Image from "next/image";
import device from '@/styles/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
  align-items: start;
    
  }
`;

export const GroupImage = styled.button`
  border: none;
  background-color: transparent;
  display: block;
`;

export const ImageStyled = styled(Image)`
  border-radius: 50%;
`;