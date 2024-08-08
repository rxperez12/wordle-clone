import "./GuessLetter.css";

/** AppComponent for summary
 *
 * Props:
 * - letter
 * - letterCategory:
 *
 * State:
 * -None
 *
 * LetterRow -> Letter
 */

function GuessLetter({ letter, letterCategory }) {
  return <div className={`GuessLetter ${letterCategory}`}>{letter}</div>;
}

export default GuessLetter;
