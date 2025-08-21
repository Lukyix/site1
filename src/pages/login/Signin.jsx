import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./signin.css";
import Error from "../../components/Error";
import { ROUTES } from "../../routes";
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
        navigate(ROUTES.DASHBOARD);
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

      <div className="signin_info">
        <div className="signin_inputs">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        </div>
        <label className="remember_me">
          <input type="checkbox" /> Remember me
        </label>

        <button className="signin_btn" type="submit" disabled={loading}>
          Prihlásiť sa
        </button>
        <div className="signin_options">
          <Link to={ROUTES.FORGOT_PASSWORD_EMAIL} className="forgot_link">
            Forgot your password?
          </Link>
        </div>

        {error && <Error error={error} />}
      </div>
    </form>
    </div>
  );
};

export default Signin;