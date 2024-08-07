import LetterRow from "./LetterRow";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * call list
 */
function LetterRowList({ word, guesses }) {
  const guesses = new Array(guesses);
  return (
    <div>
      {guesses.map((guess) => (
        <LetterRow guess={guess} />
      ))}
    </div>
  );
}

export default LetterRowList;
