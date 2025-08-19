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
    <form onSubmit={handleSignIn} className="form_signin" action="">
      <h2>Sign in</h2>
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
        <button className="signin_submit_btn" type="submit" disabled={loading}>
          Sign in
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </form>
  );
};

export default Signin;
