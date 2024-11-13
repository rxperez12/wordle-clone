import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import QwertyKeyboard from "./QwertyKeyboard";
import "./GuessEnterForm.css";

const WORD_LENGTH = 5;

const wordOptions = {
  required: "This is required.",
  maxLength: {
    value: WORD_LENGTH,
    message: `Guess must be a ${WORD_LENGTH} letter word`,
  },
  minLength: {
    value: WORD_LENGTH,
    message: `Guess must be a ${WORD_LENGTH} letter word`,
  },
  pattern: {
    value: /^[A-Za-z]+$/i,
    message: "Word must consist of only letters",
  },
};

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext({ criteriaMode: "all" });

  /* Handle form submit and call function from parent */
  function onSubmit(data) {
    console.log("onSubmit data", data);
    handleGuess(data.word);
  }

  return (
    <div className="GuessEnterForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Guess:</label>
        <Controller
          control={control}
          name="word"
          rules={wordOptions}
          render={({ field: { value, onChange } }) => (
            <input
              className="form-control"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <ErrorMessage
          className="ErrorMessage"
          errors={errors}
          name="word"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          }
        />
        <button
          className="btn btn-primary my-2"
          type="submit"
        >
          Submit
        </button>

        <Controller
          control={control}
          name="word"
          rules={wordOptions}
          render={({ field: { value, onChange } }) => (
            <QwertyKeyboard
              value={value}
              onKeyPress={onChange}
            />
          )}
        />
      </form>
    </div>
  );
}

export default GuessEnterForm;
