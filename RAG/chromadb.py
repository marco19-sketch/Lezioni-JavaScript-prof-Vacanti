import chromadb
from chromadb.utils import embedding_functions
import uuid

# Inizializza ChromaDB (persistente)
client = chromadb.PersistentClient(path='./chroma_db')

# Crea una collezione con un embedding function
embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"  # Modello efficiente
)

collection = client.create_collection(
    name='scarpe_vectors',
    embedding_function=embedding_fn,
    metadata={'description': 'Articoli vettorizzati da PostgreSQL'}
)