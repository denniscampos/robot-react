import React from "react";
import Navigation from "../components/Navigation";

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

{
  /* <div className="robots-page">
<Navigation />
<div className="robots">
  <h1>Robots</h1>
  <div className="robots-container">{robotsInformation}</div>
</div>
</div> */
}
