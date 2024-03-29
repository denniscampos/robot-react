import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import "./Admin.css";
import Navigation from "./components/Navigation";

const Admin = () => {
  const [robots, setRobots] = useState(null);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const url = "https://mondo-robot-art-api.herokuapp.com/robots";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const userToken = window.localStorage.getItem("user-token");

  const uploadImage = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("name", imageName);
    bodyFormData.append("image", image);

    await axios
      .post(url, bodyFormData, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + userToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const clearForm = () => {
    setImageName("");
    setImage(null);
  };

  const deleteRobot = async (id) => {
    await axios
      .delete(`${url}/${id}`, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
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
        <h2>{robot.name}</h2>
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
                required
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
              <div className="admin-btn">
                <button type="reset" className="btn-clear" onClick={clearForm}>
                  Clear
                </button>
                <button type="submit" className="btn-add" onClick={uploadImage}>
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
