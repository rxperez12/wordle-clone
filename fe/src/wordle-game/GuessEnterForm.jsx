import { useState } from "react";

/** AppComponent for GuessEnterField
 *
 * Props:
 *
 * State:
 * -formData
 *
 * LetterRow -> GuessLetter
 */

function GuessEnterForm({ handleGuess }) {
  const [formData, setFormData] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange() {}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Word:</label>
        <input
          name="word"
          className="form-control"
          value={formData}
          onChange={handleChange}
          required
        ></input>
      </form>
    </div>
  );
}

export default GuessEnterForm;
