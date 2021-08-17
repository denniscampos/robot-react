import axios from "axios";
import React, { useState } from "react";

const Button = ({ className, Register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "https://mondo-robot-art-api.herokuapp.com/auth/register";
  const API_KEY = process.env.REACT_APP_API_KEY;

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
      .catch((err) => console.log(err));

    console.log(user);
  }

  return (
    <div>
      <form onSubmit={register}>
        <label htmlFor="Name">Name</label>
        <input
          type="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Button;
