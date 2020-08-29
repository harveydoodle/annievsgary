import React, { useContext } from "react";
import { map, orderBy } from "lodash";

import ScoreContext from "../context/scoreContext";

import composedHOC from "./leaderboardhoc";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const scoreContext = useContext(ScoreContext);
  const { scoreData, tabData = {} } = props;
  const data = scoreData.filter((row) => row.type === "puyo");
  const options = ["puyo", "tetris", "battleship"];
  return (
    <div className="leaderboard-wrapper">
      {/* menu */}
      <div className="leaderboard-menu">
        <h2>who's better</h2>
        {options.map((cat) => (
          <span>{cat}</span>
        ))}
      </div>
      <div className="leaderboard-graph">
        {scoreData.map((user) => {
          const height = 800 * 0.5;
          return (
            <div className="leaderboard-graph-bar" style={{ height }}>
              {user.score}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Leaderboard = composedHOC(LeaderboardComponent);
export default Leaderboard;
