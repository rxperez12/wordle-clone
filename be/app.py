from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import word_logic

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']


@app.get('/wordle')
def get_word():
    """Return wordle word to user"""

    return jsonify(word_logic.get_wordle_word())


@app.get('/wordle/search')
def check_word_exists():
    """Return true or false if guess is a valid word"""

    guess = request.args.get('guess')

    return jsonify(word_logic.check_guess_word(guess))
