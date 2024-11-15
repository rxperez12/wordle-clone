import { useForm, FormProvider } from "react-hook-form";
import GuessEnterForm from "./GuessEnterForm";

/** Guess Provider for GuessEnterForm
 *
 * Provides RHF context for GuessEnterForm
 *
 * Props:
 * -handleGuess
 *
 * State:
 * -useForm
 *
 * WordleGame -> GuessProvider -> {FormProvider, GuessEnterForm}
 */
function GuessProvider({ handleGuess, guesses }) {
  const methods = useForm({
    criteriaMode: "all",
    defaultValues: {
      word: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <GuessEnterForm
        handleGuess={handleGuess}
        guesses={guesses}
      />
    </FormProvider>
  );
}

export default GuessProvider;
