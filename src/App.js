import React, { Component } from "react";
import "./App.css";

import Leaderboard from "./components/leaderboard";
import Tabs from "./components/tabwrapper";

const mockTabData = {
  active_tab_id: "tetris",
  tabs: [
    { id: "puyo", name: "puyo puyo" },
    { id: "tetris", name: "tetris battle" },
    { id: "skribbl", name: "skribbl" },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabData: mockTabData,
    };
  }
  render() {
    const {tabData} = this.state;
    return (
      <div className="App">
        <header className="App-header">header data~</header>
        <Tabs tabData={tabData} />
        <Leaderboard tabData={tabData} />
      </div>
    );
  }
}

export default App;
