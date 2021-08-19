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
        <div className="btn-admin">
          <button className="btn-edit">Edit</button>
          <button className="btn-delete">Delete</button>
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
          <div className="robots-container">
            <div className="admin-card">
              <h2>Add Robot</h2>
              <label className="name-label" htmlFor="name">
                Name
              </label>
              <input className="name-input" type="Name" />
              <button className="btn-upload">Select image to upload</button>
              <div className="admin-btn">
                <button>Clear</button>
                <button>Add Robot</button>
              </div>
            </div>
            {robotsInformation}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
