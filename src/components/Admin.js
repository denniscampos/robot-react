import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Admin.css";
import Navigation from "./Navigation";

const Admin = () => {
  const [robots, setRobots] = useState(null);

  const url = "https://mondo-robot-art-api.herokuapp.com/robots";
  const API_KEY = process.env.REACT_APP_API_KEY;

  // grab user token
  const userToken = window.localStorage.getItem("user-token");

  // grab robots
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          "x-robot-art-api-key": API_KEY,
          Authorization: "Bearer " + userToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRobots(res.data);
      });
  }, [url, API_KEY, userToken]);

  const robotsInformation = robots?.map((robot, i) => {
    return (
      <div className="robots-card" key={i}>
        <h2>{robot.name[0].toUpperCase() + robot.name.slice(1)}</h2>
        <img className="robots-img" src={robot.url} alt="Robots" />
        <div className="btn">
          <button className="btn-vote">Edit</button>
          <button className="btn-vote">Delete</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <Navigation />
      <div className="robots-page">
        <div className="robots">
          <h1>Admin</h1>
          <div className="robots-container">{robotsInformation}</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
