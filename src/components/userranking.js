import React from "react";

import "../styles/userranking.css";

const UserRanking = ({ name, rank, score }) => {
  return (
    <span className="row-wrapper">
      <span>{rank}</span>
      <span>{name}</span>
      <span>{score}</span>
    </span>
  );
};

export default UserRanking;
