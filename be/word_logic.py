import random

answers_file_path = './wordle-La.txt'
choices_file_path = './wordle-Ta.txt'


def read_words_from_file(file_path):
    """Given a file path to txt file, read words in file and return in list"""
    with open(file_path, 'r') as file:
        words = file.readlines()
    words = [word.strip() for word in words]
    return words


def get_wordle_word():
    """Return random valid word for wordle game"""
    words = read_words_from_file(answers_file_path)
    return random.choice(words)


def check_guess_word(word):
    """Check if word exists in wordle dictionary"""

    words = set(read_words_from_file(
        answers_file_path) + read_words_from_file(choices_file_path))

    return (word in words)
