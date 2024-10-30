import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./GuessEnterForm.css";

const WORD_LENGTH = 5;

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
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  /* Handle form submit and call function from parent */
  function onSubmit(data) {
    console.log("onSubmit data", data);
    handleGuess(data.word);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Guess:</label>
        <input
          {...register("word", {
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
          })}
          aria-invalid={errors.word ? "true" : "false"}
        ></input>

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
      </form>
    </div>
  );
}

export default GuessEnterForm;
