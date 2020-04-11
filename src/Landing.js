import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles/landing.css";

import { extractUrlPath } from "./utils/navigation";

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
    const { location } = props;
    // TODO: refactor out
    let tabData = mockTabData;
    if (
      extractUrlPath(location.pathname) &&
      extractUrlPath(location.pathname) !== mockTabData.active_tab_id
    ) {
      tabData = {
        ...mockTabData,
        active_tab_id: extractUrlPath(location.pathname),
      };
    }
    this.state = tabData;
  }

  handleTabSwitch = (id) => {
    this.setState(
      (prevState) => {
        return { ...prevState, active_tab_id: id };
      },
      () => {
        this.props.history.push(`/${id}`);
      }
    );
  };

  render() {
    return (
      <div className="landing">
        <header className="landing-header">Header Text</header>
        <Tabs handleTabSwitch={this.handleTabSwitch} tabData={this.state} />
        <Leaderboard tabData={this.state} />
      </div>
    );
  }
}

export default withRouter(LandingPage);
