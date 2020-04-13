import React, { useState } from "react";

import TextInput from "./textinput";

import "../styles/addscoremodal.css";

const AddScoreModal = ({ handleClose, show, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [type, setType] = useState("Skribbl");
  const onSubmit = (e) => {
    e.preventDefault();
    const time = new Date(); // TODO - update for BE?
    handleSubmit({ username, score, type, time });
  };
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <a onClick={handleClose} className="close-btn">
          X
        </a>
        <form onSubmit={onSubmit} className="form">
          <p>ADD NEW SCORE</p>
          <select
            id="types"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="Puyo">Puyo</option>
            <option value="Tetris">Tetris</option>
            <option value="Skribbl">Skribbl</option>
          </select>
          <TextInput value={username} onChange={(val) => setUsername(val)} />
          <TextInput value={score} onChange={(val) => setScore(val)} />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default AddScoreModal;
