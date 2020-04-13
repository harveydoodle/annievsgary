import React, { useState } from "react";

import "../styles/modal.css";

const Modal = ({ handleClose, show, handleSubmit }) => {
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
          <a onClick={handleClose}>close</a>
          <form onSubmit={onSubmit}>
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
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
      </section>
    </div>
  );
};

export default Modal;
