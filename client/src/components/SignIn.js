import React from "react";
import "./css/SignIn.css";
import { useRef, useState, useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "./api/axios";
const LOGIN_URL = "/auth";

const SignIn = () => {
  const { setAuth, auth } = useAuth();
  console.log(useAuth(), "AUTHHHH");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      console.log({ user, pwd, roles, accessToken }, "SignIN!");

      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        console.log(err);
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="signin">
      <div className="loginBox">
        <h1>Login</h1>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "hide"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="name"
              placeholder="Name..."
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
        <div>
          <Link to="/register" className="registerlink">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
