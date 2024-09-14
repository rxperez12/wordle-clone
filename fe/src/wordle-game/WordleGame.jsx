import LetterRow from "./GuessWord.jsx";
import GuessEnterForm from "./GuessEnterForm";
import { useState } from "react";
import { compareWordandAnswer } from "../gameLogic.js";
import GuessWordList from "./GuessWordList.jsx";

const CURRENT_GUESSES = 5;
/** WordleGame component
 *
 * State:
 * - guesses: array of guesses like:
 *    [
 *      [{letter: str, category: str}, ...],
 *      [{letter: str, category: str}, ...],
 *    ...]
 *
 *    where each array represents user guess and contains objects for each letter
 *    of guess with keys "letter" for string letter and "category" that is an empty
 *    string if letter does not exits, 'correct' if letter in correct position,
 *    or 'exists' if letter in word but not correct position.
 *
 * Props:
 *
 *
 * App -> WordleGame -> LetterRow, GuessEnterForm
 */

function WordleGame({ answer }) {
  const [guesses, setGuesses] = useState([]);

  /* Handles guess input from user and add guess to state*/
  function handleGuess(word) {
    //TODO: word validation
    console.log("input word", word);
    const guess = compareWordandAnswer(answer, word);
    console.log("guess data structure", guess);
    setGuesses([...guesses, guess]);
  }

  return (
    <div className="WordleGame m-3">
      <GuessWordList guesses={guesses} />
      <GuessEnterForm handleGuess={handleGuess} />
    </div>
  );
}

export default WordleGame;
