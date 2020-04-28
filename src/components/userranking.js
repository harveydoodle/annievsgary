import React from "react";

import "../styles/userranking.css";

const UserRanking = ({ username, rank, score }) => {
  return (
    <tr className="row-wrapper" id={username}>
      <td>{rank}</td>
      <td>{username}</td>
      <td>{score}</td>
    </tr>
  );
};

export default UserRanking;
