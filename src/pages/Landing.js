import React from "react";
import { useNavigate } from "react-router-dom";

function Landing({ darkMode }) {
  const navigate = useNavigate();

  return (
    <div className={darkMode ? "landing dark" : "landing light"}>

      <div className="landing-content">
        <h1>Welcome to <span className="highlight"> My Portfolio </span></h1>

        <p>
          <h2>Curious by nature,<span className="highlight"> analytical</span> by training</h2> 
          <h4>Explore my work and journey</h4>
        </p>

        <button
          className="btn"
          onClick={() => navigate("/home")}
        >
          Enter ➜
        </button>
      </div>

    </div>
  );
}

export default Landing;