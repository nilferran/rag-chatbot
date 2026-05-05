from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.query import query

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    role: str
    content: str


class Question(BaseModel):
    question: str
    history: list[Message] = []


@app.get("/")
def root():
    return {"status": "ok", "message": "RAG Chatbot funcionando"}


@app.post("/ask")
def ask(body: Question):
    history = [{"role": m.role, "content": m.content} for m in body.history]
    answer = query(body.question, history)
    return {"question": body.question, "answer": answer}