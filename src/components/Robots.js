import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Robots.css";
import Navigation from "./Navigation";

const Robots = () => {
  const [robots, setRobots] = useState(null);
  const [robot, setVotes] = useState(null);

  const url = "https://mondo-robot-art-api.herokuapp.com/robots";
  const voteURL = "https://mondo-robot-art-api.herokuapp.com/votes";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const TOKEN = process.env.REACT_APP_TOKEN;

  // grab user token
  const userToken = window.localStorage.getItem("user-token");

  //grab robots
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
  }, [url, API_KEY, TOKEN]);

  //create votes
  function vote(e) {
    e.preventDefault();

    // grabs ID
    const robotVotes = { robot };

    axios
      .post(voteURL, robotVotes, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + userToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  const robotsInformation = robots?.map((robot, i) => {
    return (
      <div className="robots-card" key={i}>
        <h2>{robot.name[0].toUpperCase() + robot.name.slice(1)}</h2>
        <img className="robots-img" src={robot.url} alt="Robots" />
        <form onSubmit={vote}>
          <button
            className="btn-vote"
            onClick={() => {
              setVotes(robot.id);
            }}
          >
            Vote
          </button>
        </form>
      </div>
    );
  });

  return (
    <div className="robots-page">
      <Navigation />
      <div className="robots">
        <h1>Robots</h1>
        <div className="robots-container">{robotsInformation}</div>
      </div>
    </div>
  );
};

export default Robots;
