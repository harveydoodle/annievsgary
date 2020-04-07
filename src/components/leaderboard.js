import React, { Component } from "react";
import { map } from "lodash";

import "../styles/leaderboard.css";

import UserRanking from "./userranking";

const mockData = {
  1: { id: 1, name: "name1", rank: 1, score: 100 },
  2: { id: 2, name: "name2", rank: 2, score: 50 },
  3: { id: 3, name: "name3", rank: 4, score: 1 },
  4: { id: 4, name: "name4", rank: 3, score: 14 },
};

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: mockData,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="wrapper">
        <div>Leaderboard</div>
        <div>
          {map(data, (each) => (
            <UserRanking {...each} />
          ))}
        </div>
      </div>
    );
  }
}

export default Leaderboard;
