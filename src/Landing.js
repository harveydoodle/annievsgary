import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./styles/landing.css";

import scoreService from "./services/scoreService";

import Leaderboard from "./components/leaderboard";
import Tabs from "./components/tabwrapper";
import Modal from "./components/addscoremodal";

const LandingPage = ({ location, history }) => {
  const [showModal, toggleModal] = useState(false);
  const handleAddScore = async (data) => {
    // TODO REFACTOR THIS OUT TO A MODAL HOC
    // TODO: figure out optimistic loading here - using context?
    let newScore = await scoreService.createNewScore(data);
    toggleModal(false);
  };
  return (
    <div className="landing">
      <Leaderboard toggleModal={(val) => toggleModal(val)} tabData={{}} />
      <Modal
        show={showModal}
        handleClose={() => toggleModal(false)}
        handleSubmit={(data) => handleAddScore(data)}
      />
    </div>
  );
};

export default withRouter(LandingPage);
