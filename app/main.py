from fastapi import FastAPI
from pydantic import BaseModel
from app.query import query

app = FastAPI()


class Question(BaseModel):
    question: str


@app.get("/")
def root():
    return {"status": "ok", "message": "RAG Chatbot funcionando"}


@app.post("/ask")
def ask(body: Question):
    answer = query(body.question)
    return {"question": body.question, "answer": answer}