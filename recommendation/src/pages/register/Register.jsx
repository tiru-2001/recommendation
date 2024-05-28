import React, { useState } from "react";
import "./register.scss";
//import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  console.log(name, password, email, phone);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    console.log("Hi");
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:9910/api/v1/register", {
        name,
        password,
        email,
        phone,
      });
      console.log(result);

      if (result.data.success) {
        toast.success("user registered successfully");
        navigate("/login");
      }
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  return (
    <div className="app__register-container">
      <div className="app__register-subcontainer">
        <div className="left">
          <div className="app__left-subcontainer">
            <div className="app__signup-title">
              <h1>Sign up</h1>
              <p>Please enter your login information to register</p>
            </div>
            <div className="app__form">
              <form onSubmit={handleSubmit} className="form-container">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter the name"
                  id="name"
                  type="text"
                  value={name}
                />

                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter the email"
                  id="email"
                  type="email"
                  value={email}
                />

                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter the password"
                  id="pass"
                  type="password"
                  value={password}
                />

                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter the number"
                  id="phone"
                  type="number"
                  value={phone}
                />

                {error && <div style={{ color: "red" }}>{error}</div>}

                <div className="btn_container">
                  <button onClick={handleSubmit} className="btn">
                    Sign Up
                  </button>

                  <a
                    href="https://buy.stripe.com/test_6oE9CD8gVahp9gs4gh"
                    className="subscribe btn"
                    target="_blank"
                  >
                    Subscribe
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title-container">
            <h1>Hello & Welcome!</h1>
            <p>Service Recommendation System!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
