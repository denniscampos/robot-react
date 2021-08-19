import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import "./Admin.css";
import Navigation from "./components/Navigation";

const Admin = () => {
  const [robots, setRobots] = useState(null);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const url = "https://mondo-robot-art-api.herokuapp.com/robots";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  // grab user token
  const userToken = window.localStorage.getItem("user-token");

  // upload image
  function uploadImage() {
    let bodyFormData = new FormData();
    bodyFormData.append("name", imageName);
    bodyFormData.append("image", image);

    axios
      .post(url, bodyFormData, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + userToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  //clear upload form
  const clearForm = () => {
    setImageName("");
    setImage(null);
  };

  // Delete Robot
  const deleteRobot = (id) => {
    axios
      .delete(`${url}/${id}`, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // get robots
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
          <button className="btn-delete" onClick={() => deleteRobot(robot.id)}>
            Delete
          </button>
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
              <input
                className="name-input"
                type="Name"
                onChange={(e) => setImageName(e.target.value)}
              />
              <div className="upload-container">
                <label htmlFor="myInput">
                  <BsUpload className="upload-icon" type="upload" />{" "}
                  <span>Select File to Upload</span>
                </label>
                <input
                  id="myInput"
                  className="btn-upload"
                  name="file"
                  type={"file"}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              {/* <input
                className="btn-upload"
                type="file"
                name="file"
                onChange={(e) => setImage(e.target.files[0])}
              /> */}
              <div className="admin-btn">
                <button className="btn-clear" onClick={clearForm}>
                  Clear
                </button>
                <button className="btn-add" onClick={uploadImage}>
                  Add Robot
                </button>
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
