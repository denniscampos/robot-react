import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import mondoRobotLogo from "./assets/mondo-robot-logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  // const { setIsAuthenticated } = useContext(AuthContext);

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
    // localStorage.getItem("user-token");

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
        // setIsAuthenticated(true);
        history.push("/robots");
      })
      .catch((err) => {
        // if error, redirect user to error page
        if (err.response.status) {
          history.push("/error");
        }
        console.log(err);
      });
  };

  // gets register page route.
  function handleClick() {
    history.push("/register");
  }

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
