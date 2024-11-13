import React, { useState } from "react";
import "./QwertyKeyboard.css";

/** AppComponent for summary
 *
 * Props:
 * -value
 * -onKeyPress
 *
 *
 * State:
 * -
 *
 *
 */
function QwertyKeyboard({ value, onKeyPress }) {
  const handleKeyPress = (key) => {
    console.log(`button pressed: ${key}, value: ${value}`);
    onKeyPress(`${value}${key}`);
  };

  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  return (
    <div className="QwertyKeyboard d-flex flex-column align-items-center">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="keyboard-row m-1 "
        >
          {row.map((key) => (
            <button
              className={`QwertyKeyButton btn m-1 `}
              key={key}
              onClick={(e) => {
                e.preventDefault();
                console.log(e);
                handleKeyPress(key);
              }}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default QwertyKeyboard;
