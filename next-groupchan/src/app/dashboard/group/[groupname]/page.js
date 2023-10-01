"use client";

import { getPostsAndGroup } from "@/api/strapiQueries";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Post from "@/components/Groups/Post/Post";
import Chat from "@/components/Groups/Chat/Chat";

const Group = ({ params }) => {
  const { data } = useSession();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (data?.jwt) {
          const fetchedPosts = await getPostsAndGroup(
            data.jwt,
            params.groupname
          );
          console.log(fetchedPosts);
          setPosts(fetchedPosts.data[0].attributes.posts.data);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [data]);
  if (posts.length > 0) {
    return (
      <div
          className="container dashboardGroupContainer"
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
        <Chat groupname={params.groupname} />
      </div>
    );
  } else {
    return <main>{params.groupname}</main>;
  }
};

export default Group;
