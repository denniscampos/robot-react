import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Robots.css";
import Navigation from "./Navigation";

const Robots = () => {
  const [robots, setRobots] = useState(null);

  const url = "https://mondo-robot-art-api.herokuapp.com/robots";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const TOKEN = process.env.REACT_APP_TOKEN;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          "x-robot-art-api-key": API_KEY,
          Authorization: "Bearer " + TOKEN,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRobots(res.data);
      });
  }, [url, API_KEY, TOKEN]);

  const robotsInformation = robots?.map((robot, i) => {
    return (
      <div className="robots-card">
        <h2>{robot.name}</h2>
        <img className="robots-img" src={robot.url} alt="" />
        <button>Vote</button>
      </div>
    );
  });

  return (
    <div className="robots-page">
      <Navigation />
      <h1>ROBOTS PAGE</h1>
      <div className="robots-container">{robotsInformation}</div>
    </div>
  );
};

export default Robots;
