/** Utility function for Wordle Game */


function counter(word) {
  const counter = new Map();

  for (const char of word) {
    let currCount = counter.get(char) || 0;
    counter.set(char, ++currCount);
  }

  return counter;
}

export { counter };