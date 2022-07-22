import { Avatar } from "@material-ui/core";
import { Comment, ThumbUp } from "@material-ui/icons";
import React from "react";
import "./css/Post.css";

const PostNEW = ({ profilePic, creator, timestamp, content }) => {
  const date = new Date();
  timestamp = date.toLocaleString();
  return (
    <div className="post">
      <div className="post-top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post-top-info">
          <h3>{creator}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post-bottom">
        <div className="post-message">
          <p>{content}</p>
        </div>

        <div className="post-options">
          <div className="post-option">
            <ThumbUp />
            <p>Like</p>
          </div>

          <div className="post-option">
            <Comment />
            <p>Comment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNEW;
