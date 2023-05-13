"use client";
import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .communityImage {
    position: absolute;
    left: 0px;
    bottom: calc(-100% + 64px);
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: var(--dark);
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.2px;
  color: var(--dark);
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

export const SwitchMode = styled.div`
  margin-top: 6px;
  color: #383838;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  a{
    color: var(--contrast);
    &.forgotPass{
        font-weight: 700;
        margin-top: -24px;
        display: block;
    }
  }
`;