"use client";

import CreatePost from "@/components/Groups/CreatePost/CreatePost";

const Page = (props) => {
  return (
    <main className="container fullMobile">
      <CreatePost params={props.params} />
    </main>
  );
};

export default Page;
