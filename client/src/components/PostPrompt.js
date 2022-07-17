import { Avatar, Input } from "@material-ui/core";
import { PhotoLibrary } from "@material-ui/icons";
import React, { useState } from "react";
import "./css/PostPrompt.css";

const PostPrompt = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting");
  };

  return (
    <div className="postprompt">
      <div className="postprompt-top">
        <Avatar />
        <form>
          <input
            type="text"
            className="postprompt-input"
            placeholder="A penny for your thoughts?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="postprompt-file"
            value={image}
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="postprompt-button"
          >
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="postprompt-bottom">
        <div className="postprompt-option">
          <PhotoLibrary />
          <h3>Send Photo/Video</h3>
        </div>
      </div>
    </div>
  );
};
export default PostPrompt;
