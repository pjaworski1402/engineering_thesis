import React from "react";
import {
  Container,
  GroupIco,
  GroupName,
  Members,
  Description,
} from "./GroupCard.styled";
import { apiVars } from "@/api/strapiQueries";
import Button from "@/components/Inputs/Button";
import { joinGroup } from "@/api/strapiQueries";
import { useSession } from "next-auth/react";

const GroupCard = ({ attributes,groupsJoined,groupId }) => {
  const isInGroup = groupsJoined?.filter((group)=>group.id==groupId).length;
  const { data } = useSession();

const handleJoinGroup = ()=>{
  joinGroup(data?.jwt, groupId).then((res)=>{
console.log(res)
  })
}

  return (
    <Container>
      <div className="top">
        <GroupIco
          src={`${apiVars.API_URL}${attributes?.icon?.data?.attributes?.url}`}
        />
        <div className="groupInfo">
          <GroupName>{attributes.name}</GroupName>
          <Members>
            <div className="memberVar">{attributes?.users?.data?.length}</div>
            <div className="memberText">
              {attributes?.users?.data?.length === 1 ? "członek" : "członków"}
            </div>
          </Members>
        </div>
      </div>
      <Description>{attributes.description}</Description>
      {(isInGroup==0)&&<Button onClick={handleJoinGroup}>Dołącz</Button>}
    </Container>
  );
};

export default GroupCard;
