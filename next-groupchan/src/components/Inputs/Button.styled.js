import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  color: ${({invert})=>invert?"var(--contrast)":"var(--primary)"};
  background-color: ${({invert})=>invert?"var(--primary)":"var(--contrast)"};
  border: ${({invert})=>invert?"1px solid var(--contrast)":"none"};
  border-radius: 5px;
  padding: 15px 40px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.2px;
`;
