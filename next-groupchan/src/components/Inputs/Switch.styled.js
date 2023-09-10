import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  vertical-align: middle;
  width: fit-content;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const ToggleSwitch = styled(motion.div)`
  width: 50px;
  height: 25px;
  border: 1px solid var(--contrast);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 2px;
`;

export const Circle = styled(motion.div)`
  width: 20px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
`;

export const TextLabel = styled.div`
  color: var(--gray);
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;
