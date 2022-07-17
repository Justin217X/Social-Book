import React from "react";
import "./css/Unauthorized.css";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="box">
      <div className="unauthorized">
        <h1>Unauthorized</h1>
        <br />
        <p>You do not have access to go to the requested page.</p>
        <div>
          <button className="goBackBtn" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
