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
      <LetterRowList />
    </div>
  );
}

export default WordleGame;
