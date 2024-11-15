from flask import Flask
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']


@app.get('/words')
def get_word():
    """Return wordle word to user"""

    return 'hello'
