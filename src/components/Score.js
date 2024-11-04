import React from "react";

function Scoreboard({ score }) {
  return (
    <div style={{ position: "absolute", top: "20px", right: "20px" }}>
      <h2>Score: {score}</h2>
    </div>
  );
}

export default Scoreboard;
