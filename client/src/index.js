import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
// import App from "./App";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import RouteSwitch from './components/RouteSwitch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthProvider";
import SocialBook from "./SocialBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<SocialBook />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
