import axios from "axios";
import React from "react";
import "./Robots.css";
import Navigation from "./Navigation";

const Robots = () => {
  const url = "https://mondo-robot-art-api.herokuapp.com/auth/register";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const TOKEN = process.env.REACT_APP_TOKEN;

  const data = {
    name: "loki",
    email: "loki@loki.com",
    password: "loki123456",
  };

  axios.post(url, data, {
    headers: {
      accept: "application/json",
      "x-robot-art-api-key": API_KEY,
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json",
    },
  });

  return (
    <div>
      <Navigation />
      <h1>ROBOTS PAGE</h1>
      <div className="robots-card"></div>
    </div>
  );
};

export default Robots;
