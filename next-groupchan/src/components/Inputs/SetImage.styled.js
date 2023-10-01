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

export const SetImageButton = styled.button`
  border: 1px dashed black;
  background-color: transparent;
  display: block;
  width: 100%;
  padding: 48px 0;
  border-radius: 6px;
`;

export const ImageStyled = styled(Image)`
margin-bottom: 6px;
&.selectedImage{
  width: 100%;
  height: 100%;
}
`;
export const AddImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;