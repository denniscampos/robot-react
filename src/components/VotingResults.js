import React, { useState } from "react";
import "../components/VotingResults.css";

const ResultsBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <div className="vote-results">
      <div className="vote-bar" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default ResultsBar;
