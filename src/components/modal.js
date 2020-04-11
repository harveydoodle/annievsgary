import React from "react";

import '../styles/modal.css'

const Modal = ({ handleClose, show, children }) => {
    console.log('show',show)
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;