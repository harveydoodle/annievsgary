import React, { useState } from "react";

import composedHOC from "./leaderboardhoc";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const [type, setType] = useState("all");
  const { scoreData } = props;
  const data =
    type === "all" ? scoreData : scoreData.filter((row) => row.type === type);
  const totalScore = data?.reduce((acc, obj) => acc + obj.score, 0);
  const options = ["all", "puyo", "tetris", "battleship"];
  return (
    <div className="leaderboard-wrapper">
      {/* menu */}
      <div className="leaderboard-menu">
        <h2>who's better</h2>
        <ul>
          {options.map((cat) => (
            <li>
              <button onClick={() => setType(cat)}>{cat}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="leaderboard-graph">
        {data.map((user) => {
          const height = 350 * (user.score / totalScore);
          const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;
          return (
            <div
              className="leaderboard-graph-bar"
              style={{ height, backgroundColor: randomColor }}
            >
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
