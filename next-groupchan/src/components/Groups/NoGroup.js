import React from "react";
import { Container, Title, Text, AdventureMap } from "./NoGroup.styled";
import adventureMap from "@/static/images/adventure_map.svg";
import Button from "../Inputs/Button";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const NoGroup = () => {
  const router = useRouter();
  const user = useUser();
  const handleCreate = ()=>{
    router.push("/dashboard/create-group");
  }
  return (
    <Container className="container">
      <div className="left">
        <Title>Witaj w Groupchan {user?.username && user?.username}!</Title>
        <Text>
          Obecnie nie należysz do żadnej grupy. Możesz dołączyć do istniejącej
          grupy lub stworzyć swoją własną.
        </Text>
        <div className="buttonWrapper">
          <Button>Dołącz</Button>
          <Button invert="true" onClick={handleCreate}>Stwórz</Button>
        </div>
      </div>
      <div>
        <AdventureMap src={adventureMap} alt="adventure map image" priority />
      </div>
    </Container>
  );
};

export default NoGroup;
