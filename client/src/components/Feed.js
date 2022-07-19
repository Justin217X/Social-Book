import React from "react";
import "./css/Feed.css";
import Post from "./Post";
import PostPrompt from "./PostPrompt";
import PostPromptCopy from "./PostPrompt copy";
import PostTest from "./PostTest";

const Feed = () => {
  return (
    <div className="feed">
      {/* <PostPrompt /> */}
      <PostTest />
      {/* <PostPromptCopy /> */}
      <Post />
    </div>
  );
};

export default Feed;
