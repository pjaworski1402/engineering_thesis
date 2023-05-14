import styled from 'styled-components';
import checkIco from "@/static/icons/check.svg"

export const Container = styled.label`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border: 1px solid var(--contrast);
  border-radius: 4px;
  margin:0 12px 0 0;
  cursor: pointer;

  &:checked {
    background-color: var(--contrast);
    border-color: var(--contrast);
    background-image: url(${checkIco.src});
    background-repeat:no-repeat;
    background-position:center;
}
`;

export const Label = styled.span`
  flex-basis: calc(100% - 32px);
  font-size: 16px;
  font-weight: 400;
  font-size: 14px;
  a{
    color:var(--contrast);
  }
`;