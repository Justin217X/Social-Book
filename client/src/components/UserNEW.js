import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/AllUsers.css";

const UserNEW = ({ profilePic, userName }) => {
  return (
    <div className="user">
      <div className="avatar">{profilePic || <Avatar />}</div>
      <div className="username">{userName}</div>
    </div>
  );
};

export default UserNEW;
