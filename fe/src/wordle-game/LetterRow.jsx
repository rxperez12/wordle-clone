import GuessLetter from "./GuessLetter";
import "./LetterRow.css";

/** AppComponent for summary
 *
 * Props:
 * -guess - array with letter objects that contain with letter and category options
 *
 * State:
 * - Noone
 *
 * LetterRow -> Letter
 */

function LetterRow({ guess }) {
  return (
    <div className="LetterRow d-flex p-2 justify-content-center">
      {guess.map((letterChoice) => (
        <GuessLetter
          letter={letterChoice.letter}
          letterCategory={letterChoice.category}
        />
      ))}
    </div>
  );
}

export default LetterRow;
