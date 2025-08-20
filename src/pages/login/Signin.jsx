import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
    <form onSubmit={handleSignIn} className="signin_card" action="">
      <h2 className="signin_title">Prihlásiť sa</h2>

      <div className="signin_inputs">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <label className="remember_me">
          <input type="checkbox" /> Remember me
        </label>

        <button className="signin_btn" type="submit" disabled={loading}>
          Prihlásiť sa
        </button>
        <div className="signin_options">
          <a href="#" className="forgot_link">
            Forgot your password?
          </a>
        </div>

        {error && <p className="signin_error">{error}</p>}
      </div>
    </form>
    </div>
  );
};

export default Signin;