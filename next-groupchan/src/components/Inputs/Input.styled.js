"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  :focus-within label {
    transform: translate(-10px, -20px) scale(0.8);
  }
  .active {
    transform: translate(-10px, -20px) scale(0.8);
  }
`;

export const InputText = styled.input`
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 10px 16px;
  height: 50px;
  background: #F9F9F9;
  ::placeholder {
    color: var(--gray);
  }
  outline: 0;
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.2px;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 28px;
  padding: 0 16px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, calc(50px /2 - 28px / 2)) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
`;