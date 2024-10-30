import { counter } from "./utils.js";

const wordLength = 5;

/**
 * Given answer, and guess as lower case strings,
 * compares guess with answer and return array with objects for each letter of guess
 * with key 'letter' indicating the guessed letter, 'category' which is either
 * 'correct' if in correct position or 'contains' if letter is contained in word
 */
function compareWordandAnswer(answer, guess) {
  console.debug("compareWordandAnswer", answer, guess);
  const guessComparison = [];
  const answerCharCounter = counter(answer);
  // check letters for correct positions
  for (let i = 0; i < answer.length; i++) {
    console.log(answerCharCounter);
    const charComparison = { 'letter': guess[i], category: '' };
    let letterCount = answerCharCounter.get(guess[i]) || 0;

    if (guess[i] === answer[i]) {
      charComparison.category = 'correct';
      answerCharCounter.set(guess[i], --letterCount);
    }
    guessComparison.push(charComparison);
  }

  for (let i = 0; i < answer.length; i++) {
    let charComparison = guessComparison[i];
    let letterCount = answerCharCounter.get(guess[i]) || 0;

    if (letterCount > 0) {
      charComparison.category = 'exists';
      answerCharCounter.set(guess[i], --letterCount);
    }
  }
  return guessComparison;
}

/**
 * Given string guess, validates string and throws errors if string is invalid
 * entry for game of wordle. Returns true if guess is valid
 */
function checkValidEntry(guess) {
  const errs = [];
  if (guess.length !== wordLength) {
    errs.push(`Guess must have ${wordLength} characters`);
  }

  //   if (!checkWordExists(guess)) {
  //     throw new Error(`Guess must be a valid dictionary word`);
  //   }
  if (errs.length > 0) {
    throw new Error(errs);
  }
}



export { compareWordandAnswer, checkValidEntry };