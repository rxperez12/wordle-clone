import GuessWord from "./GuessWord";

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
    <div>
      {guesses.map((guess) => (
        <GuessWord guess={guess} />
      ))}
    </div>
  );
}

export default GuessWordList;
