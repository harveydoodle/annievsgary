import React, { Component } from "react";
import { map } from "lodash";

import composedHOC from "./leaderboardhoc";
import UserRanking from "./userranking";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const { scoreData, tabData } = props;
  const { active_tab_id, tabs } = tabData;
  return (
    <div className="leaderboard-wrapper">
      <div>Leaderboard for {tabs[active_tab_id].name}</div>
      <div>
        {map(scoreData, (each) => (
          <UserRanking {...each} />
        ))}
      </div>
    </div>
  );
};

const Leaderboard = composedHOC(LeaderboardComponent);
export default Leaderboard;
