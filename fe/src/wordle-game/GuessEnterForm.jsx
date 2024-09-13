import { useState } from "react";

/** AppComponent for GuessEnterForm
 *
 * Props:
 * -handleGuess
 *
 * State:
 * -formData: word for guess
 *
 * WordleGame -> GuessEnterForm
 */

function GuessEnterForm({ handleGuess }) {
  const [formData, setFormData] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      handleGuess(formData);
    } catch (err) {
      setFormErrors(err);
    }
  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

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

        {formErrors.length ? (
          <Alert
            type="danger"
            messages={formErrors}
          />
        ) : null}
      </form>
    </div>
  );
}

export default GuessEnterForm;
