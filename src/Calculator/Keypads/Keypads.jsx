import React from "react";
import "./keypads.css";
export default (props) => {
  return (
    <div className="keypad-body">
      <button
        name="+"
        className="keypad__default-key keypad__operator-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        +
      </button>
      <button
        name="-"
        className="keypad__default-key keypad__operator-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        -
      </button>
      <button
        name="*"
        className="keypad__default-key keypad__operator-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        x
      </button>
      <button
        name="/"
        className="keypad__default-key keypad__operator-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        ÷
      </button>

      <button
        name="9"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        9
      </button>
      <button
        name="8"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        8
      </button>
      <button
        name="7"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        7
      </button>
      <button
        name="6"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        6
      </button>
      <button
        name="5"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        5
      </button>
      <button
        name="4"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        4
      </button>
      <button
        name="3"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        3
      </button>
      <button
        name="2"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        2
      </button>
      <button
        name="1"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        1
      </button>
      <button
        name="0"
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        0
      </button>
      <button
        name="."
        className="keypad__default-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        .
      </button>
      <button
        name="AC"
        className="keypad__default-key keypad__ac-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        AC
      </button>
      <button
        name="="
        className="keypad__default-key keypad__equal-key"
        onClick={(e) => props.onClick(e.target.name)}
      >
        =
      </button>
    </div>
  );
};
