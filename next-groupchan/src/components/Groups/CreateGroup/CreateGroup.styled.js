import styled from 'styled-components';
import { Form } from "formik";
import device from '@/styles/device';

export const Container = styled.div`
  margin: 48px 0;
`;

export const Title = styled.h2`
font-size: 24px;
font-weight: 700;
margin-bottom: 12px;
`;

export const Subtitle = styled.div`
font-size: 16px;
font-weight: 400;
margin-bottom: 24px;
`;

export const FormStyled = styled(Form)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .buttons{
    display: flex;
    flex-direction: column;
    gap:16px;
  }
  @media ${device.laptop} {
    max-width: 612px;
  }
`;