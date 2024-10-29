from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/word/")
def get_random_word():
