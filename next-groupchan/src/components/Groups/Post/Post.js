"use client";

import React from "react";
import {
  Container,
  CommentsWrapper,
  Description,
  Likes,
  OptionsButton,
  PostButton,
  PostImage,
  ProfileImage,
  ShowAllComments,
  Username,
} from "./Post.styled";
import optionsIco from "@/static/icons/options_ico.svg";
import favoriteIco from "@/static/icons/favorite_ico.svg";
import commentsIco from "@/static/icons/comment_ico.svg";
import Image from "next/image";
// .attributes.image.data.attributes.url
const Post = ({ post }) => {
  console.log(post);
  return (
    <Container>
      <div className="topPost">
        <div className="profileInfo">
          <ProfileImage
            src={`http://localhost:1337${post?.attributes?.user?.data.attributes.profile?.data?.attributes.url}`}
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
      <PostImage
        src={`http://localhost:1337${post?.attributes?.image.data.attributes.url}`}
        alt="image post"
      />
      <div className="buttonsWrapper">
        <PostButton>
          <Image src={favoriteIco} alt="add to favorite" />
        </PostButton>
        <PostButton>
          <Image src={commentsIco} alt="add comment" />
        </PostButton>
      </div>
      <Likes>
        {post?.attributes?.like.data.length} polubień
      </Likes>
    </Container>
  );
};

export default Post;
