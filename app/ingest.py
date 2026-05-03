import os
from pathlib import Path
from dotenv import load_dotenv
from pypdf import PdfReader
import chromadb
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
chroma_client = chromadb.PersistentClient(path="chroma_db")
collection = chroma_client.get_or_create_collection(name="documents")


def load_pdf(path: str) -> list[str]:
    reader = PdfReader(path)
    chunks = []
    for page in reader.pages:
        text = page.extract_text()
        if text:
            chunks.append(text.strip())
    return chunks


def ingest_document(path: str):
    print(f"[*] Procesando {path}...")
    chunks = load_pdf(path)

    for i, chunk in enumerate(chunks):
        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=chunk
        )
        embedding = response.data[0].embedding

        collection.add(
            documents=[chunk],
            embeddings=[embedding],
            ids=[f"{Path(path).stem}_page_{i}"]
        )
        print(f"[✓] Página {i+1}/{len(chunks)} indexada")

    print(f"[✓] {path} procesado correctamente")


def ingest_all(docs_folder: str = "docs"):
    folder = Path(docs_folder)
    pdfs = list(folder.glob("*.pdf"))
    if not pdfs:
        print("[!] No se encontraron PDFs en la carpeta docs/")
        return
    for pdf in pdfs:
        ingest_document(str(pdf))
    print(f"\n[✓] {len(pdfs)} documento(s) procesado(s)")


if __name__ == "__main__":
    ingest_all()