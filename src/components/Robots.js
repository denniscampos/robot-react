import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Robots.css";
import Navigation from "./Navigation";
import RobotsPage from "./RobotsPage";
import RobotsCard from "./RobotsCard";

const Robots = () => {
  const [robots, setRobots] = useState(null);

  const url = "https://mondo-robot-art-api.herokuapp.com/robots";
  const voteURL = "https://mondo-robot-art-api.herokuapp.com/votes";
  const API_KEY = process.env.REACT_APP_API_KEY;

  // grab user token
  const userToken = window.localStorage.getItem("user-token");

  // grab vote id
  window.localStorage.getItem("voter-id");

  // grab user id
  localStorage.getItem("user-id");

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
  }, [url, API_KEY, userToken, robots]);

  const createVote = async (e, robotId) => {
    try {
      e.preventDefault();

      //set button state to "saving vote..."

      // check local storage and see if there is a "voter-id"
      // if there is, call delete vote put that voter-id as a query string parameter
      // set the other robot's botton who's vote was deleted to back to active -- THIS IS CHALLENGING (need one component to talk its sibling) (lift your state up) (voter-id)

      const response = await axios.post(
        voteURL,
        { robot: robotId },
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + userToken,
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("voter-id", response.data.id);
      localStorage.setItem("user-id", response.data.user);

      // set button state to "vote casted"
    } catch (err) {
      console.log(err);
    }
  };

  // const robotsInformation = robots?.map((robot, i) => {
  //   return (
  //     <Robot name={robot.name} voter-id={voter-id} />
  //   )
  // }

  const robotsInformation = robots?.map((robot, i) => {
    return <RobotsCard key={i} robot={robot} voteFor={createVote} />;
  });

  return (
    <>
      <Navigation />
      <div>
        <RobotsPage title="Robots" robotsInformation={robotsInformation} />
      </div>
    </>
  );
};

export default Robots;
