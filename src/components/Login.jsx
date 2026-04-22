import React, { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const { login } = useAuth();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    login(userData.username);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Please login to continue</p>

        <label>Username</label>
        <input
          placeholder="Enter your username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />

        <label>Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;