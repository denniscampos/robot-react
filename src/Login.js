import React, { useState, useEffect } from "react";
import "./Login.css";
import mondoRobotLogo from "./assets/mondo-robot-logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const URL = "https://mondo-robot-art-api.herokuapp.com/auth/session";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      history.push("/robots");
    }
  }, [history]);

  localStorage.getItem("user-token");

  const login = async () => {
    const userInfo = { email, password };

    await axios
      .post(URL, userInfo, {
        headers: {
          accept: "application/json",
          "x-robot-art-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("user-token", res.data.token);
        localStorage.setItem("user-email", email);
        // setIsAuthenticated(true);
        history.push("/robots");
      })
      .catch((err) => {
        if (err.response.status) {
          history.push("/error");
        }
        console.log(err);
      });
  };

  // goes register page route.
  const handleClick = () => {
    history.push("/register");
  };

  return (
    <div className="register-page">
      <div className="login-page">
        <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
        <div className="login-form">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
