import React from "react";

import "../styles/userranking.css";

const UserRanking = ({ username, rank, score }) => {
  return (
    <span className="row-wrapper">
      <h2 style={{flex:1}}>{rank}</h2>
      <h2 style={{flex:6,textAlign:'left'}}>{username}</h2>
      <h2 style={{flex:1}}>{score}</h2>
    </span>
  );
};

export default UserRanking;
