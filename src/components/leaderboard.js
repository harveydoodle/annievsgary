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
        <span className="ranking-header">
          <h2 style={{flex:1}}>Rank</h2>
          <h2 style={{flex:6}}>Name</h2>
          <h2 style={{flex:1}}>Top Score</h2>
        </span>
        {map(scoreData, (each, id) => (
          <span key={id}>
            <UserRanking {...each} />
          </span>
        ))}
      </div>
    </div>
  );
};

const Leaderboard = composedHOC(LeaderboardComponent);
export default Leaderboard;
