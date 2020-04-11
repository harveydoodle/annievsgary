import React from "react";
import { map } from "lodash";

import composedHOC from "./leaderboardhoc";
import UserRanking from "./userranking";

import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {
  const { scoreData, tabData } = props;
  const { active_tab_id, tabs } = tabData;
  return (
    <div className="leaderboard-wrapper">
      <h1 style={{textAlign:'left'}}>Leaderboard for {tabs[active_tab_id].title}</h1>
      <div>
        <span className="ranking-header">
          <h2 style={{flex:1}}>Rank</h2>
          <h2 style={{flex:6,textAlign:'left'}}>Name</h2>
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
