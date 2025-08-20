import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { ROUTES } from "../../routes";
const Home = () => {
  return (
    <>
      <div className="cigan">Home</div>
      <button>
        {" "}
        <Link to={ROUTES.LOGIN}>Sign in</Link>
      </button>
    </>
  );
};

export default Home;
