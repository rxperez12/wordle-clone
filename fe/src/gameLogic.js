import { counter } from "./utils.js";

/**
 * Given answer, and guess as lower case strings,
 * compares guess with answer and return array with objects for each letter of guess
 * with key 'letter' indicating the guessed letter, 'category' which is either
 * 'correct' if in correct position or 'contains' if letter is contained in word
 */
function compareWordandAnswer(answer, guess) {
  const guessComparison = [];
  const answerCharCounter = counter(answer);
  for (let i = 0; i < answer.length; i++) {
    console.log(answerCharCounter);
    const charComparison = { 'letter': guess[i], category: '' };
    let letterCount = answerCharCounter.get(guess[i]) || 0;

    if (guess[i] === answer[i]) {
      charComparison.category = 'correct';
      answerCharCounter.set(guess[i], --letterCount);
    } else {
      if (letterCount > 0) {
        charComparison.category = 'exists';
        answerCharCounter.set(guess[i], --letterCount);
      }
    }
    guessComparison.push(charComparison);
  }
  return guessComparison;
}

/**
 * Given string guess, validates string and throws errors if string is invalid
 * entry for game of wordle. Returns true if guess is valid
 */
function validateWord(guess) {

}

console.log(compareWordandAnswer('apple', 'alzcs'));
console.log(compareWordandAnswer('apple', 'ppexx'));
console.log(compareWordandAnswer('apple', 'ppeex'));
