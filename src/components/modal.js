import React from "react";

import "../styles/modal.css";

const Modal = ({ handleClose, show, type }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let content = <div />;
  if (type) {
    content = (
      <div>
        <p>ADD NEW SCORE</p>
        <p>dropdown</p>
        <p>username</p>
        <p>SCORE</p>
        <p>ok btn</p>
      </div>
    );
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">{content}</section>
    </div>
  );
};

export default Modal;
