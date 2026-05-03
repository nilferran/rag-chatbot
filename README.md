# 🤖 RAG Chatbot

Chatbot que responde preguntas sobre tus propios documentos PDF usando RAG (Retrieval-Augmented Generation) con OpenAI y ChromaDB.

---

## ¿Qué es RAG?

RAG permite al chatbot responder basándose únicamente en tus documentos. En vez de responder de memoria, busca los fragmentos más relevantes de tus PDFs y los usa para generar la respuesta.

---

## Características

- Sube tus propios PDFs y hazles preguntas
- Búsqueda semántica con embeddings de OpenAI
- Base de datos vectorial con ChromaDB
- API REST con FastAPI
- Respuestas basadas solo en tus documentos, sin alucinaciones

---

## Instalación

1. Clona el repositorio:
   git clone https://github.com/nilferran/rag-chatbot.git
   cd rag-chatbot

2. Crea el entorno virtual:
   python -m venv venv
   venv\Scripts\activate

3. Instala las dependencias:
   pip install -r requirements.txt

4. Crea el archivo .env con tu API key de OpenAI:
   OPENAI_API_KEY=tu_api_key_aqui

---

## Uso

1. Mete tus PDFs en la carpeta docs/

2. Procesa los documentos:
   python -m app.ingest

3. Arranca el servidor:
   uvicorn app.main:app --reload

4. Abre el navegador en:
   http://127.0.0.1:8000/docs

---

## Tecnologías

- OpenAI API (embeddings + GPT-4o-mini)
- ChromaDB
- FastAPI
- pypdf



# 🤖 RAG Chatbot

Chatbot that answers questions based on your own PDF documents using RAG (Retrieval-Augmented Generation) with OpenAI and ChromaDB.

---

## What is RAG?

RAG allows the chatbot to answer based only on your documents. Instead of answering from memory, it searches the most relevant fragments from your PDFs and uses them to generate the response.

---

## Features

- Upload your own PDFs and ask questions about them
- Semantic search with OpenAI embeddings
- Vector database with ChromaDB
- REST API with FastAPI
- Answers based only on your documents, no hallucinations

---

## Installation

1. Clone the repository:
   git clone https://github.com/nilferran/rag-chatbot.git
   cd rag-chatbot

2. Create virtual environment:
   python -m venv venv
   venv\Scripts\activate

3. Install dependencies:
   pip install -r requirements.txt

4. Create .env file with your OpenAI API key:
   OPENAI_API_KEY=your_api_key_here

---

## Usage

1. Put your PDFs inside the docs/ folder

2. Process the documents:
   python -m app.ingest

3. Start the server:
   uvicorn app.main:app --reload

4. Open the browser at:
   http://127.0.0.1:8000/docs

---

## Tech stack

- OpenAI API (embeddings + GPT-4o-mini)
- ChromaDB
- FastAPI
- pypdf