import { describe, test, expect } from 'vitest';
import { compareWordandAnswer, checkCorrectAnswer } from './gameLogic';

describe('compareWordandAnswer', () => {
  test('success: returns correct answer when words match', () => {
    const answer = [
      { letter: 's', category: 'correct' },
      { letter: 't', category: 'correct' },
      { letter: 'a', category: 'correct' },
      { letter: 'r', category: 'correct' },
      { letter: 'e', category: 'correct' },
    ];
    expect(compareWordandAnswer('stare', 'stare')).toEqual(answer);
  });

  test('success: returns correct answer when words do not match', () => {
    const answer = [
      { letter: 's', category: '' },
      { letter: 't', category: '' },
      { letter: 'a', category: 'exists' },
      { letter: 'r', category: '' },
      { letter: 'e', category: 'correct' },
    ];
    expect(compareWordandAnswer('apple', 'stare')).toEqual(answer);
  });

  test('success: returns correct answer when answer word has ', () => {
    const answer = [
      { letter: 'm', category: '' },
      { letter: 'a', category: 'exists' },
      { letter: 'p', category: 'correct' },
      { letter: 'l', category: 'correct' },
      { letter: 'e', category: 'correct' },
    ];
    expect(compareWordandAnswer('apple', 'maple')).toEqual(answer);
  });
});

describe('checkCorrectAnswer', () => {
  test('success: returns correct answer when words match', () => {
    const answer = [
      { letter: 's', category: 'correct' },
      { letter: 't', category: 'correct' },
      { letter: 'a', category: 'correct' },
      { letter: 'r', category: 'correct' },
      { letter: 'e', category: 'correct' },
    ];
    expect(checkCorrectAnswer(answer)).toBe(true);
  });

  test('success: returns correct answer when words do not match', () => {
    console.log(compareWordandAnswer('stare', 'stare'));
    const answer = [
      { letter: 's', category: '' },
      { letter: 't', category: '' },
      { letter: 'a', category: 'exists' },
      { letter: 'r', category: '' },
      { letter: 'e', category: 'correct' },
    ];
    expect(checkCorrectAnswer(answer)).toBe(false);
  });

});