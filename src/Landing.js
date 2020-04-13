import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./styles/landing.css";

import { extractUrlPath } from "./utils/navigation";

import Leaderboard from "./components/leaderboard";
import Tabs from "./components/tabwrapper";
import Modal from "./components/modal";

const mockTabData = {
  active_tab_id: "tetris",
  tabs: {
    puyo: { id: 1, key: "puyo", title: "puyo puyo" },
    tetris: { id: 2, key: "tetris", title: "tetris battle" },
    skribbl: { id: 3, key: "skribbl", title: "skribbl.io" },
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
    this.state = { ...tabData, showModal: false };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      extractUrlPath(this.props.location.pathname) &&
      extractUrlPath(this.props.location.pathname) !== this.state.active_tab_id
    ) {
      let active_tab_id = extractUrlPath(this.props.location.pathname);
      this.setState({
        active_tab_id,
      });
    }
  }

  toggleModal = (val) => {
    this.setState({
      showModal: val,
    });
  };

  handleTabSwitch = (key) => {
    this.setState(
      (prevState) => {
        return { ...prevState, active_tab_id: key };
      },
      () => {
        this.props.history.push(`/${key}`);
      }
    );
  };
  handleAddScore = (data) => {
    this.toggleModal(false);
    axios
      .get("http://localhost:3002/")
      .then(function (response) {
        // handle success
        console.log('res::',response);
      })
      .catch(function (error) {
        // handle error
        console.log('err',error);
      })
      .then(function () {
        // always executed
      });
  };
  render() {
    return (
      <div className="landing">
        <Tabs handleTabSwitch={this.handleTabSwitch} tabData={this.state} />
        <Leaderboard toggleModal={this.toggleModal} tabData={this.state} />
        <Modal
          show={this.state.showModal}
          handleClose={() => this.toggleModal(false)}
          handleSubmit={(data) => this.handleAddScore(data)}
        />
      </div>
    );
  }
}

export default withRouter(LandingPage);
