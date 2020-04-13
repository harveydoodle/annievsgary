import React, { useState } from "react";
import "../styles/dropdown.css";

const Dropdown = ({ value, onChange, id }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleOnChange = (value) => {
    onChange(value);
    setShowOptions(false);
  };
  return (
    <div className="dropdown-container">
      <span className="selected-value" onClick={() => setShowOptions(!showOptions)}>{value}</span>
      {showOptions && (
        <ul className="dropdown-options-container">
          <li onClick={() => handleOnChange("Puyo")} value="Puyo">
            Puyo
          </li>
          <li onClick={() => handleOnChange("Tetris")} value="Tetris">
            Tetris
          </li>
          <li onClick={() => handleOnChange("Skribbl")} value="Skribbl">
            Skribbl
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
