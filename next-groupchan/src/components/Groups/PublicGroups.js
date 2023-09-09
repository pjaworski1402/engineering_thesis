import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  GroupWrapper,
  Pagination,
} from "./PublicGroups.styled";
import { getPublicGroups } from "@/api/strapiQueries";
import { useSession } from "next-auth/react";
import GroupCard from "./GroupCard/GroupCard";

const PublicGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data } = useSession();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (data?.jwt) {
          const fetchedGroups = await getPublicGroups(data.jwt);
          setGroups(fetchedGroups);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchGroups();
  }, [data]);

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Wystąpił błąd: {error.message}</div>;
  }
  const pages = [...Array(groups.pageCount).keys()].map((num) => num + 1);
  return (
    <Container className="container">
      <Title>Publiczne grupy</Title>
      <GroupWrapper>
        {groups.data.map((group) => (
          <GroupCard key={group.id} attributes={group.attributes} />
        ))}
      </GroupWrapper>
      <Pagination>
        <button className="first">Pierwsza</button>
        {pages.map((page) => (
          <button className="pageVar">{page}</button>
        ))}
        <button className="next">Dalej</button>
      </Pagination>
    </Container>
  );
};

export default PublicGroups;
