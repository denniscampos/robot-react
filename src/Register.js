import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import mondoRobotLogo from "./assets/mondo-robot-logo.png";
import "./Register.css";

const Button = ({ className, Register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});

  const URL = "https://mondo-robot-art-api.herokuapp.com/auth/register";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  function register(e) {
    e.preventDefault();

    const user = { name, email, password };
    axios
      .post(URL, user, {
        headers: {
          accept: "application/json",
          "x-robot-art-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .then((data) => console.log(data))
      .catch((err) => {
        if (err.response.status) {
          history.push("/error");
        }
      });

    history.push("/");
  }

  // goes login page route.
  function handleClick() {
    history.push("/");
  }

  return (
    <div className="register-page">
      <div className="login-page">
        <img src={mondoRobotLogo} alt="Logo of Mondo Robot" />
        <form className="login-form">
          <label className="register-name-label" htmlFor="Name">
            Name
          </label>
          <input
            className="register-name-input"
            type="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="register-email-label" htmlFor="email">
            Email
          </label>
          <input
            className="register-email-input"
            type="email"
            name="email"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="register-password-label" htmlFor="password">
            Password
          </label>
          <input
            className="register-password-input"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn">
            <input
              className="register-btn"
              type="submit"
              value="Register"
              onClick={register}
            />
            <input
              onClick={handleClick}
              className="login-btn"
              type="submit"
              value="Back to Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Button;
