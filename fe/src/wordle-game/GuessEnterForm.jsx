import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Guess:</label>
        <input
          {...register("word", {
            required: "This is required.",
            maxLength: {
              value: 5,
              message: `Guess must be a ${WORD_LENGTH} letter word`,
            },
            minLength: {
              value: 5,
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
