"""SQL Alchemy models for Wordle"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
dbx = db.session.execute


class GuessWord(db.Model):

    __tablename__ = 'guess_word'


class AnswerWord(db.Model):

    __tablename__ = 'answer_word'
