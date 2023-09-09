import React from "react";
import {
  Container,
  GroupIco,
  GroupName,
  Members,
  Description,
} from "./GroupCard.styled";

const GroupCard = ({ attributes }) => {
  return (
    <Container>
      <div className="top">
        <GroupIco
          src={`http://localhost:1337${attributes.icon.data.attributes.url}`}
        />
        <div className="groupInfo">
          <GroupName>{attributes.name}</GroupName>
          <Members>
            <div className="memberVar">12</div>
            <div className="memberText">członków</div>
          </Members>
        </div>
      </div>
      <Description>{attributes.description}</Description>
    </Container>
  );
};

export default GroupCard;
