import React from "react";

import "../styles/userranking.css";

const UserRanking = ({ name, rank, score }) => {
  return (
    <span className="row-wrapper">
      <h2 style={{flex:1}}>{rank}</h2>
      <h2 style={{flex:6,textAlign:'left'}}>{name}</h2>
      <h2 style={{flex:1}}>{score}</h2>
    </span>
  );
};

export default UserRanking;
