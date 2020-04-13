import React from "react";
import "../styles/textinput.css";

const TextInput = ({ value, onChange }) => {
  return (
    <input
      className="textinput"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
