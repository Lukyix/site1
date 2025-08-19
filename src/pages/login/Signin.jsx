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
    <form onSubmit={handleSignIn} className="signin_card" action="">
      <h2 className="signin_title">Sign in</h2>

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

        <div className="signin_options">
          <label className="remember_me">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot_link">
            Forgot your password?
          </a>
        </div>

        <button className="signin_btn" type="submit" disabled={loading}>
          Sign in
        </button>

        {error && <p className="signin_error">{error}</p>}
      </div>
    </form>
  );
};

export default Signin;
