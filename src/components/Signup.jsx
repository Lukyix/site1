import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
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
    <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24" action="">
      <h2 className="font-bold pb-2">Sigin</h2>
      <p>
        Already have accoutn <Link to="/Signin">Sign in</Link>
      </p>
      <div className="flex flex-col py-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="p-3 mt-6"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="p-3 mt-6"
          type="password"
        />
        <button type="submit" disabled={loading} className="mt-6 w-full">
          Sign up
        </button>
        {error && <p className="text-red-500 text-center pt-4">{error}</p>}
      </div>
    </form>
  );
};

export default Signup;
