import styled from "styled-components";
import dropdown_select from "@/static/icons/dropdown_select.svg";

export const DateSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const DateLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: var(--gray);
  flex-basis: 100%;
`;

export const DateSelect = styled.select`
  background: #f9f9f9;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 6px 12px;
  appearance: none;
  padding-right: 20px;
  background-image: url(${dropdown_select.src});
  background-repeat: no-repeat;
  background-position: calc(100% - 6px) center;
  background-size: 8px 14px;
  height: 40px;
  &[name="day"]{
    flex-basis: 25%;
  }
  &[name="month"]{
    flex-basis: 25%;
  }
  &[name="year"]{
    flex: 1;
  }
`;

export const DateOption = styled.option``;
