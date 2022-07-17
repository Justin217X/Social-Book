import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import App from "./App";

// const ROLES = {
//     'User': 2001,
// }

// replace number 2001 below with ROLES.User

const SocialBook = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[2001]} />}>
          <Route path="/" element={<App />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default SocialBook;
