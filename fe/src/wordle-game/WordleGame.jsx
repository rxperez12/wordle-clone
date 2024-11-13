import { useState, useEffect } from "react";
import { compareWordandAnswer, checkCorrectAnswer } from "../gameLogic.js";
import { useQuery } from "@tanstack/react-query";
import GuessWordList from "./GuessWordList.jsx";
import GuessProvider from "./GuessProvider.jsx";
import "./WordleGame.css";

const BASE_URL = "http://localhost:8000";
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

function WordleGame() {
  const [guesses, setGuesses] = useState([]);
  const { error, data, isLoading } = useQuery({
    queryFn: retrieveWord,
    queryKey: ["word"],
  });

  /* Retrieve guess word from API*/
  async function retrieveWord() {
    const response = await fetch(`${BASE_URL}/word/`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  }

  /* Handles guess input from user and add guess to state*/
  function handleGuess(word) {
    console.debug("handleGuess:", word);
    // TODO: verify if word is valid from API
    const guess = compareWordandAnswer(data, word);
    setGuesses([...guesses, guess]);

    console.debug(guesses);
  }

  /* Handle game reset */
  function handleReset() {
    setGuesses([]);
  }

  /*Handle new game*/
  function handleNewGame() {}

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <div>An error occured: {error.message}</div>
        <div>Please try again.</div>
      </div>
    );
  }

  return (
    <div className="WordleGame m-3">
      <h1>Wordle</h1>
      <button
        className="btn btn-primary m-2"
        onClick={handleNewGame}
      >
        New Game
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={handleReset}
      >
        Reset
      </button>
      <GuessWordList guesses={guesses} />
      {guesses.length <= CURRENT_GUESSES && (
        <GuessProvider handleGuess={handleGuess} />
      )}
    </div>
  );
}

export default WordleGame;
