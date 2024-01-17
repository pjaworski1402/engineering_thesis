import React from "react";

import { Container } from "./GroupSearch.styled";
import NoGroup from "./NoGroup";
import PublicGroups from "./PublicGroups";
import { useUser } from "@/context/UserContext";

const GroupSearch = () => {
  const user = useUser();
  const groupsJoined = user?.group_users;
  return (
    <Container>
      <div />
      <div className="wrapper">
        {groupsJoined?.length==0&&<NoGroup />}
        <PublicGroups groupsJoined={groupsJoined} />
      </div>
    </Container>
  );
};

export default GroupSearch;
