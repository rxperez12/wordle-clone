import React, { useState } from "react";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * call list
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
    <div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="keyboard-row"
        >
          {row.map((key) => (
            <button
              className="btn"
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
