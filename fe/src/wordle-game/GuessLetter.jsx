import "./GuessLetter.css";

/** AppComponent for summary
 *
 * Props:
 * - letter
 * - letterCategory: str, either "correct" if letter is incorrect position,
 *    or "exists" if letter is in word but in incorrect position
 *
 * State:
 * -None
 *
 * LetterRow -> GuessLetter
 */

function GuessLetter({ letter, letterCategory }) {
  return <div className={`GuessLetter ${letterCategory}`}>{letter}</div>;
}

export default GuessLetter;
