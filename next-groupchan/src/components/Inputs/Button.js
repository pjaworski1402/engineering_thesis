import React from "react";
import { Container, Button as StyledButton } from "./Button.styled";

const Button = ({ children, ...props }) => {
  return (
    <Container>
      <StyledButton {...props}>{children}</StyledButton>
    </Container>
  );
};

export default Button;
