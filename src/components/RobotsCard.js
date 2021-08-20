import React, { useState, useEffect } from "react";
import voteService from "../api/VoteService";

const RobotsCard = ({ robot, i, currentRobot, setCurrentRobot }) => {
  const [buttonEnabled, setButtonEnabled] = useState(null);
  const [voteLoading, setVoteLoading] = useState(false);

  useEffect(() => {
    setButtonEnabled(currentRobot !== robot.id);
  }, [currentRobot]);

  const voteId = localStorage.getItem("vote-id");

  const vote = async (e) => {
    try {
      e.preventDefault();
      setVoteLoading(true);
      setButtonEnabled(false);
      if (currentRobot) {
        await voteService.deleteVote(voteId);
      }

      const voteResponse = await voteService.castVote(robot.id);

      setVoteLoading(false);
      localStorage.setItem("vote-id", voteResponse.data.id);
      localStorage.setItem("current-robot", voteResponse.data.robot);
      setCurrentRobot(voteResponse.data.robot);
    } catch (err) {
      console.log(err);
      setVoteLoading(false);
      setButtonEnabled(currentRobot !== robot.id);
    }
  };

  return (
    <div className="robots-card" key={i}>
      <h2>{robot.name[0].toUpperCase() + robot.name.slice(1)}</h2>
      <img className="robots-img" src={robot.url} alt="Robots" />
      <button
        className={!buttonEnabled ? "btn-vote-casted" : "btn-vote"}
        disabled={!buttonEnabled}
        onClick={(e) => vote(e)}
      >
        {!buttonEnabled ? (voteLoading ? "Voting..." : "Vote Casted") : "Vote"}
      </button>
    </div>
  );
};

export default RobotsCard;
