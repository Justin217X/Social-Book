import React, { useRef, useState, useEffect } from "react";
import { PhotoLibrary } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./css/SignUp.css";
import axios from "./api/axios";
import useAuth from "./hooks/useAuth";

const POST_URL = "/postTest";

const PostTest = () => {
  const { auth } = useAuth();
  const creator = auth.user;

  const errRef = useRef();
  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  let file;

  const [content, setContent] = useState("");

  const [files, setFiles] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent JS hack of button

    try {
      const response = await axios.post(
        POST_URL,
        JSON.stringify({ creator, content, files }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        console.log(err.message, "No Server Response"); // server down!
      } else if (err.response?.status === 409) {
        console.log(err.message);
      } else {
        console.log(err.message, "Registration Failed");
      }
      errRef.current.focus(); // for screen readers
    }
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="postprompt-button"
          >
            Submit Post
          </button>
        </form>
      </div>

      <div className="postprompt-bottom">
        <div>
          <img src={file ? URL.createObjectURL(file) : null} alt="" />
          <div>{files}</div>
        </div>
        <div className="postprompt-option">
          <input
            className="fileInput"
            type="file"
            onChange={(e) => setFiles(e.target.value)}
            value={files}
            // style={{ display: "none" }}
            ref={fileInput}
          />
          <button className="fileBtn" onClick={selectFile}>
            <PhotoLibrary />
            <h4>Send Photo/Video</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostTest;
