import React from "react";

import composedHOC from "./leaderboardhoc";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const { scoreData } = props;
  const data = scoreData.filter((row) => row.type === "puyo");
  console.log(scoreData);
  const totalScore = data?.reduce((acc, obj) => acc + obj.score, 0);
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
        {data.map((user) => {
          console.log(user.score, totalScore);
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
