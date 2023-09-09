import device from "@/styles/device";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const GroupWrapper = styled.div`
display:flex;
flex-direction: column;
gap: 16px;
@media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
}
`;

export const Pagination = styled.div`
  border: 1px solid #e8e8e8;
  display: flex;
  border-radius: 6px;
  width: fit-content;
  margin: 42px auto;
  .first,
  .next {
    border: none;
    background: #fff;
    color: var(--contrast);
    font-size: 16px;
    font-weight: 700;
    padding: 16px;
    width: 94px;
  }
  .first {
  }
  .next {
  }
  .pageVar{
    width: 47px;
    border: none;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
    background: #fff;
    color:var(--contrast);
    font-size: 16px;
    font-weight: 700;
  }
`;
