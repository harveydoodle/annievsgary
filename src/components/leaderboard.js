import React from "react";
import { map } from "lodash";

import composedHOC from "./leaderboardhoc";
import UserRanking from "./userranking";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const { scoreData } = props;
  return (
    <div className="leaderboard-wrapper">
      <h1 style={{ textAlign: "left" }}>Leaderboard</h1>
      <div>
        <span className="ranking-header">
          <h2 style={{ flex: 1 }}>Rank</h2>
          <h2 style={{ flex: 6, textAlign: "left" }}>Username</h2>
          <h2 style={{ flex: 2 }}>Top Score</h2>
        </span>
        {map(scoreData, (each, id) => (
          <span key={id}>
            <UserRanking {...each} />
          </span>
        ))}
        <span onClick={props.toggleModal}>Add a new score</span>
      </div>
    </div>
  );
};

const Leaderboard = composedHOC(LeaderboardComponent);
export default Leaderboard;
