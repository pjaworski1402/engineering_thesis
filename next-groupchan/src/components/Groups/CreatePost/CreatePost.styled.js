"use client";
import device from "@/styles/device";
import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 40px 32px;
  @media ${device.laptop} {
    max-width: 700px;
  }
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 32px;
`;

export const CloseButton = styled.button``;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .buttons{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;