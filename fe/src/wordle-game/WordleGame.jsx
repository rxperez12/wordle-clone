import LetterRow from "./LetterRow";

const practiceGuess = [
  {
    letter: "a",
    category: "found",
  },
  {
    letter: "p",
    category: "contain",
  },
];

const CURRENT_GUESSES = 5;
/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * App -> WordleGame -> LetterRow
 */

function WordleGame({ word }) {
  const guesses = new Array(CURRENT_GUESSES);
  return (
    <div className="WordleGame m-3">
      <LetterRow guess={practiceGuess} />
    </div>
  );
}

export default WordleGame;
