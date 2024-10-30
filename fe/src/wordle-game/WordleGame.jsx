import GuessEnterForm from "./GuessEnterForm";
import { useState, useEffect } from "react";
import { compareWordandAnswer, checkValidEntry } from "../gameLogic.js";
import { useQuery } from "@tanstack/react-query";
import GuessWordList from "./GuessWordList.jsx";

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

function WordleGame({ answer }) {
  const [guesses, setGuesses] = useState([]);
  const [word, setWord] = useState("");
  const { isPending, error, data, isLoading } = useQuery({
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
    const guess = compareWordandAnswer(answer, word);
    console.log("guess data structure", guess);
    setGuesses([...guesses, guess]);
    console.debug(guesses);
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
      <GuessEnterForm handleGuess={handleGuess} />
      <GuessWordList guesses={guesses} />
    </div>
  );
}

export default WordleGame;
