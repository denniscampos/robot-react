import React, { useState } from "react";
import RobotsCard from "./RobotsCard";

const RobotsPage = ({ title, robots }) => {
  const [currentRobot, setCurrentRobot] = useState(
    window.localStorage.getItem("current-robot")
  );

  return (
    <div className="robots-page">
      <div className="robots">
        <h1>{title}</h1>
        <div className="robots-container">
          {robots?.map((robot, i) => {
            return (
              <RobotsCard
                key={i}
                robot={robot}
                currentRobot={currentRobot}
                setCurrentRobot={setCurrentRobot}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RobotsPage;
