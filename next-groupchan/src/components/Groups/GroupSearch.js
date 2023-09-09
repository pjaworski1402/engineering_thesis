import React from "react";

import { Container } from "./GroupSearch.styled";
import NoGroup from "./NoGroup";
import PublicGroups from "./PublicGroups";

const GroupSearch = () => {
  return (
    <Container>
      <div />
      <div className="wrapper">
        <NoGroup />
        <PublicGroups />
      </div>
    </Container>
  );
};

export default GroupSearch;
