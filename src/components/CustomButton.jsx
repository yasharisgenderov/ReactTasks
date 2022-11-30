import React, { useState } from "react";
import "./CustomButton.css";

export default function CustomButton(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="btnText">
      <button
        className="btn"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={
          props.warnMessage
            ? (e) => alert(`this is alert message : ${props.warnMessage}`)
            : null
        }
        style={
          props.warnMessage
            ? { border: "2px solid red", color: "white" }
            : { border: "none" }
        }
      >
        {props.text}
      </button>
      <div className={hovered ? "hintOff" : "hintText"}>
        {props.text}
        <div className="sc"></div>
      </div>
    </div>
  );
}
