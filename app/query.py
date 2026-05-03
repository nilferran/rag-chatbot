import os
from dotenv import load_dotenv
import chromadb
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
chroma_client = chromadb.PersistentClient(path="chroma_db")
collection = chroma_client.get_or_create_collection(name="documents")


def query(question: str, n_results: int = 3) -> str:
    # Convertir la pregunta en vector
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=question
    )
    question_embedding = response.data[0].embedding

    # Buscar los fragmentos más relevantes
    results = collection.query(
        query_embeddings=[question_embedding],
        n_results=n_results
    )

    context = "\n\n".join(results["documents"][0])

    # Pasar el contexto al LLM
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "Eres un asistente útil. Responde solo basándote en el contexto proporcionado. Si la respuesta no está en el contexto, dilo claramente."
            },
            {
                "role": "user",
                "content": f"Contexto:\n{context}\n\nPregunta: {question}"
            }
        ]
    )

    return completion.choices[0].message.content


if __name__ == "__main__":
    while True:
        question = input("\nPregunta (o 'salir'): ")
        if question.lower() == "salir":
            break
        answer = query(question)
        print(f"\nRespuesta: {answer}")