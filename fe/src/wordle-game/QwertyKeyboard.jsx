import React, { useState } from "react";
import "./QwertyKeyboard.css";
import { getAllGuessedLetters } from "../gameLogic";

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
function QwertyKeyboard({ value, onKeyPress, guesses }) {
  const handleKeyPress = (key) => {
    console.log(`button pressed: ${key}, value: ${value}`);
    onKeyPress(`${value}${key}`);
  };

  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  const lettersGuessed = getAllGuessedLetters(guesses);

  /** Changes button color based on whether the letter is part of correct */
  function changeColorModifier(key) {
    if (lettersGuessed[key] === "correct") {
      return "btn-success";
    }

    if (lettersGuessed[key] === "exists") {
      return "btn-warning";
    }

    if (lettersGuessed[key] === "") {
      return "btn-dark";
    }

    return "btn-secondary";
  }

  return (
    <div className="QwertyKeyboard  d-flex flex-column align-items-center">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="keyboard-row m-1 "
        >
          {row.map((key) => (
            <button
              className={`QwertyKeyButton btn ${changeColorModifier(key)} m-1`}
              key={key}
              onClick={(e) => {
                e.preventDefault();
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
