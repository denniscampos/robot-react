import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Robots.css";
import Navigation from "./Navigation";
import RobotsPage from "./RobotsPage";

const Robots = () => {
  const [robots, setRobots] = useState(null);

  useEffect(async () => {
    const userToken = window.localStorage.getItem("user-token");
    const url = "https://mondo-robot-art-api.herokuapp.com/robots";
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        "x-robot-art-api-key": process.env.REACT_APP_API_KEY,
        Authorization: "Bearer " + userToken,
        "Content-Type": "application/json",
      },
    });
    setRobots(response.data);
  }, []);

  return (
    <>
      <Navigation />
      <div>
        <RobotsPage title="Robots" robots={robots} />
      </div>
    </>
  );
};

export default Robots;
