import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="cigan">Home</div>
      <button>
        {" "}
        <Link to="/signin">Sign in</Link>
      </button>
    </>
  );
};

export default Home;
