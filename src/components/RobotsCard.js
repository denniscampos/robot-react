import React, { useState } from "react";

const RobotsCard = ({ robot, i, voteFor }) => {
  const [disabled, setDisabled] = useState(false);

  //   function checkIfUserVoted() {
  //     if (localStorage.getItem("user-token")) {
  //       return "vote-casted";
  //     } else {
  //       return "Vote";
  //     }
  //   }

  return (
    <div className="robots-card" key={i}>
      <h2>{robot.name[0].toUpperCase() + robot.name.slice(1)}</h2>
      <img className="robots-img" src={robot.url} alt="Robots" />
      <button
        className={disabled ? "btn-vote-casted" : "btn-vote"}
        disabled={disabled}
        onClick={(e) => [voteFor(e, robot.id), setDisabled(true)]}
      >
        {disabled ? "vote-casted" : "Vote"}
      </button>
    </div>
  );
};

export default RobotsCard;
