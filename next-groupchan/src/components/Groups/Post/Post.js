"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  CommentsWrapper,
  Description,
  Likes,
  OptionsButton,
  PostButton,
  PostImage,
  ProfileImage,
  Username,
} from "./Post.styled";
import optionsIco from "@/static/icons/options_ico.svg";
import favoriteIco from "@/static/icons/favorite_ico.svg";
import favoriteFillIco from "@/static/icons/Favorite_fill.svg";
import commentsIco from "@/static/icons/comment_ico.svg";
import Image from "next/image";
import { giveLike } from "@/api/strapiQueries";
import { apiVars } from "@/api/strapiQueries";
import { useSession } from "next-auth/react";
import { addComment } from "@/api/strapiQueries";

const Post = ({ post }) => {
  const { data } = useSession();
  const [commentList, setCommentList]=useState(post?.attributes?.comments?.data);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("")
  const [likesCounter, setLikesCounter] = useState(
    post?.attributes?.like.data.length
  );
  const [showAllComments, setShowAllComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const sendComment = ()=>{
    addComment(data?.jwt, post.id, commentText).then((res)=>{
      setCommentText("");
      setShowCommentInput(false);
      setCommentList([{attributes:{content:res.content, user:{data:{attributes:{username:data.user.name}}}}},...commentList])
    })
  }

  const likePost = () => {
    giveLike(data?.jwt, post.id).then((res) => {
      if (res.data.message == "Liked") {
        setIsLiked(true);
        setLikesCounter(likesCounter + 1);
      } else if (res.data.message == "Disliked") {
        setIsLiked(false);
        setLikesCounter(likesCounter - 1);
      }
    });
  };

  useEffect(() => {
    // Check if the user with id === data.id exists in the 'like' array
    const userLiked = post.attributes.like.data.some((likedUser) => {
      return likedUser.id == data.id;
    });
    // Update the state based on whether the user is liked or not
    setIsLiked(userLiked);
  }, [post, data.id]);
  return (
    <Container>
      <div className="topPost">
        <div className="profileInfo">
          <ProfileImage
            src={`${apiVars.API_URL}${post?.attributes?.user?.data.attributes.profile?.data?.attributes.url}`}
            alt="user profile"
          />
          <Username>
            {post?.attributes?.user?.data.attributes.username}
          </Username>
        </div>
        {/* <OptionsButton>
          <Image src={optionsIco} />
        </OptionsButton> */}
      </div>
      <Description>{post?.attributes?.content}</Description>
      {post?.attributes?.image?.data?.attributes?.url && (
        <PostImage
          src={`${apiVars.API_URL}${post?.attributes?.image?.data?.attributes?.url}`}
          alt="image post"
        />
      )}
      <div className="buttonsWrapper">
        <PostButton onClick={likePost}>
          <Image
            src={isLiked ? favoriteFillIco : favoriteIco}
            alt="add to favorite"
          />
        </PostButton>
        <PostButton onClick={toggleCommentInput}>
          <Image src={commentsIco} alt="add comment" />
        </PostButton>
      </div>
      <Likes>
        {likesCounter}{" "}
        {likesCounter === 1
          ? "polubienie"
          : likesCounter === 0 || (likesCounter >= 5 && likesCounter <= 21)
          ? "polubień"
          : "polubienia"}
      </Likes>
      {showCommentInput && (
        <div className="commentForm">
          <input onChange={(e)=>setCommentText(e.target.value)} value={commentText} className="inputText" type="text" placeholder="Napisz komentarz" />
          <button onClick={sendComment}>Wyślij</button>
        </div>
      )}
      <CommentsWrapper>
        {commentList
          .slice(0, showAllComments ? undefined : 2) // Wyświetl tylko dwa komentarze lub wszystkie w zależności od showAllComments
          .map((comment) => (
            <div className="comment" key={`comments_${comment.id}`}>
              <b>{comment?.attributes?.user?.data?.attributes?.username}</b>:{" "}
              {comment?.attributes?.content}
            </div>
          ))}
        {commentList.length > 2 && (
          <button className="showAllComments" onClick={toggleShowAllComments}>
            {showAllComments ? "Zwiń" : "Zobacz wszystkie"}
          </button>
        )}
      </CommentsWrapper>
    </Container>
  );
};

export default Post;
