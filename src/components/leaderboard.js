import React from "react";
import { map } from "lodash";

import composedHOC from "./leaderboardhoc";
import UserRanking from "./userranking";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const { scoreData, tabData } = props;
  const data = scoreData.filter((row) => row.type === tabData.active_tab_id);
  return (
    <div className="leaderboard-wrapper">
      <h1 style={{ textAlign: "left" }}>Leaderboard</h1>
      <table>
        <thead>
          <tr className="ranking-header">
            <th>Rank</th>
            <th>Username</th>
            <th>Top Score</th>
          </tr>
        </thead>
        <tbody>
          {map(data, (each, id) => (
            <UserRanking {...each}/>
          ))}
        </tbody>
      </table>
        <span onClick={() => props.toggleModal(true)}>Add a new score</span>
    </div>
  );
};

const Leaderboard = composedHOC(LeaderboardComponent);
export default Leaderboard;
