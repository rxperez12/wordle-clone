import { counter } from "./utils.js";

const wordLength = 5;

/** TODO: rewrite to be clearer
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
    const charComparison = { 'letter': guess[i], category: '' };
    let letterCount = answerCharCounter.get(guess[i]) || 0;

    if (guess[i] === answer[i]) {
      charComparison.category = 'correct';
      answerCharCounter.set(guess[i], --letterCount);
    }
    guessComparison.push(charComparison);
    console.log(charComparison);
  }

  for (let i = 0; i < answer.length; i++) {
    let charComparison = guessComparison[i];
    let letterCount = answerCharCounter.get(guess[i]) || 0;

    if (letterCount > 0 && charComparison.category === '') {
      charComparison.category = 'exists';
      answerCharCounter.set(guess[i], --letterCount);
    }
  }
  return guessComparison;
}

/**
 * Given guess like [{ 'letter': str, category: str }, ...], checks if every
 * category is 'correct'. If so returns true, else returns false
 */
function checkCorrectAnswer(guess) {
  return guess.every(elem => elem.category === 'correct');
}

/** Given array of guesses like [{ 'letter': str, category: str }, ...], return
 * dictionary of with letters as keys and the category of correct, exists, or ''
 * as the value
 */
function getAllGuessedLetters(guesses) {
  console.log('getAllGuessedLetters', guesses);
  const guessLetters = guesses.flat();
  const lettersGuessed = {};

  for (const guessLetter of guessLetters) {
    const currentLetter = guessLetter.letter;
    if (!(currentLetter in lettersGuessed)) {
      lettersGuessed[currentLetter] = guessLetter.category;
    } else {
      const savedCategory = lettersGuessed[currentLetter];
      const currentCategory = guessLetter.category;
      if (savedCategory === '' && currentCategory !== '') {
        lettersGuessed[currentLetter] = currentCategory;
      }
      if (savedCategory === 'exists' && currentCategory === 'correct') {
        lettersGuessed[currentLetter] = currentCategory;
      }
    }
  }

  return lettersGuessed;
}


export { compareWordandAnswer, checkCorrectAnswer, getAllGuessedLetters };