import React, { useState, useEffect } from "react";
import "./Login.css";
import mondoRobotLogo from "./assets/mondo-robot-logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "https://mondo-robot-art-api.herokuapp.com/auth/session";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      history.push("/robots");
    }
  }, []);

  function login() {
    const userInfo = { email, password };

    axios
      .post(URL, userInfo, {
        headers: {
          accept: "application/json",
          "x-robot-art-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((res) => localStorage.setItem("user-token", res.data.token))
      .catch((err) => console.log(err));

    history.push("/robots");
  }

  // gets register page route.
  function handleClick() {
    history.push("/register");
  }

  return (
    <div className="register-page">
      <div className="login-page">
        <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
        <form className="login-form" action="">
          <label className="email-label">Email</label>
          <input
            className="email-input"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="password-label">Password</label>
          <input
            className="password-input"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="btn">
            <button className="btn-login" onClick={login} type="submit">
              Log in
            </button>
            <button
              onClick={handleClick}
              className="btn-register"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
