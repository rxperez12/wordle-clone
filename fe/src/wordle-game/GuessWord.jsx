import GuessLetter from "./GuessLetter";
import "./GuessWord.css";

/** GuessWord component
 *
 * Props:
 * -guess - array with letter objects that contain with letter and category options
 *
 * State:
 * - None
 *
 * LetterRow -> Letter
 */

function GuessWord({ guess }) {
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

export default GuessWord;
