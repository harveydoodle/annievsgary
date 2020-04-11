import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles/landing.css";

import Leaderboard from "./components/leaderboard";
import Tabs from "./components/tabwrapper";

const mockTabData = {
  active_tab_id: "tetris",
  tabs: {
    puyo: { id: "puyo", name: "puyo puyo" },
    tetris: { id: "tetris", name: "tetris battle" },
    skribbl: { id: "skribbl", name: "skribbl.io" },
  },
};

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabData: mockTabData,
    };
  }

  handleTabSwitch = (id) => {
    this.setState(
      (prevState) => {
        return {
          tabData: { ...prevState.tabData, active_tab_id: id },
        };
      },
      () => {
        this.props.history.push({
          state: { view: id },
        });
      }
    );
  };

  render() {
    const { tabData } = this.state;
    return (
      <div className="landing">
        <header className="landing-header">Header Text</header>
        <Tabs handleTabSwitch={this.handleTabSwitch} tabData={tabData} />
        <Leaderboard tabData={tabData} />
      </div>
    );
  }
}

export default withRouter(LandingPage);
