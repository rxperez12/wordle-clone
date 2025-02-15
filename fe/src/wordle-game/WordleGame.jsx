import { useState, useEffect } from "react";
import { compareWordandAnswer, checkCorrectAnswer } from "../gameLogic.js";
import { useQuery } from "@tanstack/react-query";
import GuessWordList from "./GuessWordList.jsx";
import GuessProvider from "./GuessProvider.jsx";
import "./WordleGame.css";

const BASE_URL = "http://localhost:5000";
const GUESSES_ALLOWED = 5;

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
  const { error, data, isLoading, refetch } = useQuery({
    queryFn: retrieveWord,
    queryKey: ["word"],
  });

  /* Retrieve guess word from API*/
  async function retrieveWord() {
    const response = await fetch(`${BASE_URL}/wordle`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  }

  /* Handle guess input from user and add guess to state*/
  function handleGuess(word) {
    console.debug("handleGuess:", word);
    // TODO: verify if word is valid from API
    const guess = compareWordandAnswer(data, word);
    setGuesses([...guesses, guess]);
  }

  /** Check lose and win condititions and return true if user input allowed and
   * false if not
   */
  function checkPlayableGame() {
    if (guesses.length === 0) return true;

    let lastGuess = guesses[guesses.length - 1];
    console.log("checkCorrectAnswer", checkCorrectAnswer(lastGuess));
    return guesses.length <= GUESSES_ALLOWED && !checkCorrectAnswer(lastGuess);
  }

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
        onClick={() => {
          refetch();
          setGuesses([]);
        }}
      >
        New Game
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          setGuesses([]);
        }}
      >
        Reset
      </button>
      <GuessWordList guesses={guesses} />
      {checkPlayableGame() && (
        <GuessProvider
          handleGuess={handleGuess}
          guesses={guesses}
        />
      )}

      {guesses.length > GUESSES_ALLOWED && (
        <div>{`You lost. Word was ${data}`}</div>
      )}
    </div>
  );
}

export default WordleGame;
