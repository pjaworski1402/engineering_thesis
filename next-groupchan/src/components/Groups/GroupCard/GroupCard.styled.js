import device from "@/styles/device";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  background: #fefefe;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  @media ${device.laptop} {
    flex-basis: calc(33.3333% - 12px);
}
  .top {
    display: flex;
    .groupInfo {
      margin-left: 10px;
    }
  }
`;

export const GroupIco = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
`;

export const GroupName = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Members = styled.div`
  display: flex;
  color: var(--primary);
  font-size: 12px;
  .memberVar {
    background: #e76227;
    padding: 4px;
  }
  .memberText {
    background: var(--contrast);
    padding: 4px;
    text-transform: uppercase;
  }
`;

export const Description = styled.div`
min-height: 95px;
margin-top: 6px;
font-size: 14px;
`;
