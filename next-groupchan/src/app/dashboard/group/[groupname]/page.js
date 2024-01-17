"use client";

import { getPostsAndGroup } from "@/api/strapiQueries";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Post from "@/components/Groups/Post/Post";
import Chat from "@/components/Groups/Chat/Chat";
import { ChatButton, Icon } from "@/components/Groups/Chat/Chat.styled";
import chatIco from "@/static/icons/messages.svg"
import Button from "@/components/Inputs/Button";
const Group = ({ params }) => {
  const { data } = useSession();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPost, setIsLastPost] = useState(false)

  const handleClickNext = async ()=>{
    setCurrentPage(currentPage+1)
    try {
      if (data?.jwt) {
        const fetchedPosts = await getPostsAndGroup(
          data.jwt,
          params.groupname,
          currentPage
        );
        if(fetchedPosts.data[0].attributes.posts.data.length==0){
          setIsLastPost(true)
        }else{
          setPosts([...posts, ...fetchedPosts.data[0].attributes.posts.data]);
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (data?.jwt) {
          const fetchedPosts = await getPostsAndGroup(
            data.jwt,
            params.groupname,
            currentPage
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
      <>
        <div className="container dashboardGroupContainer">
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              marginTop: "32px",
              marginBottom: "32px",
              width: "100%",
            }}
          >
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
            {!isLastPost&&(<Button onClick={handleClickNext}>Dalej</Button>)}
          </main>
        <ChatButton onClick={()=>setShowMessages(true)}>
          <Icon src={chatIco} alt="messages" width={32} height={32} />
        </ChatButton>
          <Chat setShowMessages={setShowMessages} showMessages={showMessages} groupname={params.groupname} />
        </div>
      </>
    );
  } else {
    return <main></main>;
  }
};

export default Group;
