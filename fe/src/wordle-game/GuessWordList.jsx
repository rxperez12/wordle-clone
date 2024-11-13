import GuessWord from "./GuessWord";
import "./GuessWordList.css";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * WordleGame -> GuessWordList -> GuessWord
 */
function GuessWordList({ guesses }) {
  console.debug("GuessWordList", "guesses=", guesses);
  return (
    <div className="GuessWordList">
      {guesses.map((guess) => (
        <GuessWord guess={guess} />
      ))}
    </div>
  );
}

export default GuessWordList;
