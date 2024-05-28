import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const result = await axios.post("http://localhost:9910/api/v1/login", {
        password,
        email,
      });

      if (result.data.success) {
        toast.success("user logged successfully");
        navigate("/");
      }
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  return (
    <div className="app__login-container">
      <div className="app__login-subcontainer">
        <div className="left">
          <div className="title-container">
            <h1>Welcome back !</h1>
            <p>You can sign in to access with your existing profile</p>
          </div>
        </div>
        <div className="right">
          <div className="app__right-subContainer">
            <div className="app__sign-title">
              <h1>Sign In</h1>
              <p>
                Please enter your login information or click here to
                registration
              </p>
            </div>
            <div className="app__form">
              <form className="form-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  type="password"
                />
              </form>
            </div>

            <div className="btn-container">
              <button onClick={handleLogin} className="btn">
                log In
              </button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
