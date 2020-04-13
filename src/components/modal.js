import React, { useState } from "react";

import "../styles/modal.css";

const Modal = ({ handleClose, show, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [type, setType] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit()
  };
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
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
            <input type="text" value={username} onChange={setUsername} />
            <input type="text" value={score} onChange={setScore} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Modal;
