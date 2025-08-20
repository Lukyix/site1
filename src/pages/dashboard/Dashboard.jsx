import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { profile, session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard blog</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <h2>cau {profile?.name}</h2>
      {profile?.avatar_url ? (
        <img src={`${profile.avatar_url}`} alt="User Avatar" width={100} />
      ) : (
        <p>No avatar</p>
      )}
      <div>
        <p onClick={handleSignOut} className="">
          Sign Out
        </p>
        <Link to="./blogs/NewBlog">New Blog</Link>
      </div>
    </div>
  );
};

export default Dashboard;
