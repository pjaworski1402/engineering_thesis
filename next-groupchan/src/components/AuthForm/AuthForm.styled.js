"use client";
import styled from "styled-components";
import { Form } from "formik";
import device from "@/styles/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .communityImage {
    position: absolute;
    left: 0px;
    bottom: 0;
    transform: translate(0, 100%);
    width: 100%;
    &.register {
      display: none;
    }
  }
  @media ${device.laptop} {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    /* !important for overwrite class content */
    padding: 42px !important;
    max-width: 930px !important;
    flex-direction: row;
    gap: 32px;
    justify-content: space-between;
    flex-basis: 50%;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 48px;
    .communityImage {
      position: relative;
      margin-right: calc(-42px - 32px);
      flex-basis: 40%;
      transform: translate(0, 0);
      &.register {
        display: block;
      }
    }
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
  @media ${device.laptop} {
    text-align: left;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.2px;
  color: var(--dark);
  @media ${device.laptop} {
    text-align: left;
  }
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
  a {
    color: var(--contrast);
    &.forgotPass {
      font-weight: 700;
      margin-top: -24px;
      display: block;
    }
  }
`;
