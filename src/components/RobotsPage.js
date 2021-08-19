import React from "react";

const RobotsPage = ({ title, robotsInformation }) => {
  return (
    <div className="robots-page">
      <div className="robots">
        <h1>{title}</h1>
        <div className="robots-container">{robotsInformation}</div>
      </div>
    </div>
  );
};

export default RobotsPage;
