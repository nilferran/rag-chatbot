# 🤖 RAG Chatbot

Chatbot que responde preguntas sobre tus propios documentos PDF usando RAG (Retrieval-Augmented Generation) con OpenAI y ChromaDB. Incluye interfaz web oscura con soporte de Markdown y memoria de conversación.

---

## ¿Qué es RAG?

RAG permite al chatbot responder basándose únicamente en tus documentos. En vez de responder de memoria, busca los fragmentos más relevantes de tus PDFs y los usa para generar la respuesta, evitando alucinaciones.

---

## Características

- Interfaz web oscura estilo ChatGPT
- Respuestas formateadas en Markdown (listas, negritas, títulos)
- Memoria de conversación (recuerda preguntas anteriores)
- Búsqueda semántica con embeddings de OpenAI
- Base de datos vectorial con ChromaDB
- API REST con FastAPI
- Frontend en React con Vite

---

## Requisitos

- Python 3.9+
- Node.js 20.19+
- Una API key de OpenAI (platform.openai.com)

---

## Instalación

### 1. Clona el repositorio
   git clone https://github.com/nilferran/rag-chatbot.git
   cd rag-chatbot

### 2. Crea el entorno virtual e instala dependencias Python
   python -m venv venv
   venv\Scripts\activate
   python -m ensurepip
   python -m pip install openai chromadb fastapi uvicorn python-dotenv pypdf

### 3. Crea el archivo .env en la raíz del proyecto
   Crea un archivo llamado .env y escribe dentro:
   OPENAI_API_KEY=tu_api_key_aqui

### 4. Instala las dependencias del frontend
   cd frontend
   npm install
   cd ..

---

## Uso

### 1. Añade tus PDFs
   Copia tus archivos PDF dentro de la carpeta docs/

### 2. Indexa los documentos
   Con el venv activado:
   python -m app.ingest

### 3. Arranca el servidor backend
   uvicorn app.main:app --reload

### 4. Arranca el frontend (en otra terminal)
   cd frontend
   npm run dev

### 5. Abre el navegador en
   http://localhost:5173

---

## Estructura del proyecto

   rag-chatbot/
   ├── app/
   │   ├── __init__.py
   │   ├── ingest.py       ← indexa los PDFs en ChromaDB
   │   ├── query.py        ← busca y responde usando el LLM
   │   └── main.py         ← servidor FastAPI
   ├── frontend/
   │   └── src/
   │       ├── components/
   │       │   ├── Chat.jsx
   │       │   ├── Message.jsx
   │       │   └── InputBar.jsx
   │       └── App.jsx
   ├── docs/               ← pon aquí tus PDFs
   ├── .env                ← tu API key 
   └── requirements.txt

---

## Tecnologías

- OpenAI API (embeddings + GPT-4o-mini)
- ChromaDB
- FastAPI
- React + Vite
- react-markdown


# 🤖 RAG Chatbot

Chatbot that answers questions based on your own PDF documents using RAG (Retrieval-Augmented Generation) with OpenAI and ChromaDB. Includes a dark web interface with Markdown support and conversation memory.

---

## What is RAG?

RAG allows the chatbot to answer based only on your documents. Instead of answering from memory, it searches the most relevant fragments from your PDFs and uses them to generate the response, avoiding hallucinations.

---

## Features

- Dark web interface inspired by ChatGPT
- Markdown-formatted responses (lists, bold, titles)
- Conversation memory (remembers previous questions)
- Semantic search with OpenAI embeddings
- Vector database with ChromaDB
- REST API with FastAPI
- React + Vite frontend

---

## Requirements

- Python 3.9+
- Node.js 20.19+
- An OpenAI API key (platform.openai.com)

---

## Installation

### 1. Clone the repository
   git clone https://github.com/nilferran/rag-chatbot.git
   cd rag-chatbot

### 2. Create virtual environment and install Python dependencies
   python -m venv venv
   venv\Scripts\activate
   python -m ensurepip
   python -m pip install openai chromadb fastapi uvicorn python-dotenv pypdf

### 3. Create the .env file in the project root
   Create a file called .env and write inside:
   OPENAI_API_KEY=your_api_key_here

### 4. Install frontend dependencies
   cd frontend
   npm install
   cd ..

---

## Usage

### 1. Add your PDFs
   Copy your PDF files inside the docs/ folder

### 2. Index the documents
   With the venv activated:
   python -m app.ingest

### 3. Start the backend server
   uvicorn app.main:app --reload

### 4. Start the frontend (in another terminal)
   cd frontend
   npm run dev

### 5. Open the browser at
   http://localhost:5173

---

## Project structure

   rag-chatbot/
   ├── app/
   │   ├── __init__.py
   │   ├── ingest.py       ← indexes PDFs into ChromaDB
   │   ├── query.py        ← searches and responds using LLM
   │   └── main.py         ← FastAPI server
   ├── frontend/
   │   └── src/
   │       ├── components/
   │       │   ├── Chat.jsx
   │       │   ├── Message.jsx
   │       │   └── InputBar.jsx
   │       └── App.jsx
   ├── docs/               ← put your PDFs here
   ├── .env                ← your API key (not uploaded to GitHub)
   └── requirements.txt

---

## Tech stack

- OpenAI API (embeddings + GPT-4o-mini)
- ChromaDB
- FastAPI
- React + Vite
- react-markdown