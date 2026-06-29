# Guida Completa: Da PostgreSQL a ChromaDB

Guida passo passo per creare un database vettoriale con ChromaDB partendo da PostgreSQL.

---

## 📑 Indice

- [Guida Completa: Da PostgreSQL a ChromaDB](#guida-completa-da-postgresql-a-chromadb)
  - [📑 Indice](#-indice)
  - [1. 📋 Prerequisiti](#1--prerequisiti)
  - [2. 📊 Passo 1: Analisi del Database PostgreSQL](#2--passo-1-analisi-del-database-postgresql)
  - [3. 🎯 Passo 2: Scegliere i Dati da Vettorizzare](#3--passo-2-scegliere-i-dati-da-vettorizzare)
  - [4. 🔄 Passo 3: Installazione e Setup ChromaDB](#4--passo-3-installazione-e-setup-chromadb)
  - [5. ✨ Passo 4: Preparazione dei Dati per ChromaDB](#5--passo-4-preparazione-dei-dati-per-chromadb)
  - [6. 📥 Passo 5: Inserimento Dati in ChromaDB](#6--passo-5-inserimento-dati-in-chromadb)
  - [7. 🔍 Passo 6: Test delle Ricerche](#7--passo-6-test-delle-ricerche)
  - [8. 🔄 Passo 7: Sincronizzazione PostgreSQL ↔ ChromaDB](#8--passo-7-sincronizzazione-postgresql--chromadb)
  - [9. 🎨 Passo 8: Integrazione Avanzata](#9--passo-8-integrazione-avanzata)
  - [10. 📊 Passo 9: Monitoraggio e Manutenzione](#10--passo-9-monitoraggio-e-manutenzione)
  - [11. 🔐 Passo 10: Backup e Sicurezza](#11--passo-10-backup-e-sicurezza)
  - [12. 🚀 Script Completo](#12--script-completo)
  - [13. 💡 Consigli Finali](#13--consigli-finali)
  - [14. 🎯 Modello Economico per Sperimentazione](#14--modello-economico-per-sperimentazione)
    - [Modelli Economici](#modelli-economici)
    - [Script per Modello Economico](#script-per-modello-economico)
    - [Test Performance Modelli Economici](#test-performance-modelli-economici)
    - [Vantaggi del Modello Economico](#vantaggi-del-modello-economico)
  - [📝 Note Finali](#-note-finali)

---

## 1. 📋 Prerequisiti

Installa le librerie necessarie:

```bash
pip install chromadb psycopg2-binary sentence-transformers pandas
```

[🔼 Torna all'indice](#-indice)

---

## 2. 📊 Passo 1: Analisi del Database PostgreSQL

Esplora il tuo database per capire quali dati vettorizzare:

```python
import psycopg2
import pandas as pd

# Connessione a PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="tuo_db",
    user="tuo_user",
    password="tua_password"
)

# Esempio: vedi le tabelle e i dati
query = """
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
"""
tables = pd.read_sql(query, conn)
print(tables)
```

[🔼 Torna all'indice](#-indice)

---

## 3. 🎯 Passo 2: Scegliere i Dati da Vettorizzare

Identifica quali colonne/text vuoi trasformare in vettori:

```python
# Esempio: estrai i dati da una tabella specifica
query = """
SELECT id, titolo, descrizione, categoria 
FROM articoli 
WHERE descrizione IS NOT NULL;
"""

data = pd.read_sql(query, conn)
print(f"Hai {len(data)} record da vettorizzare")
```

[🔼 Torna all'indice](#-indice)

---

## 4. 🔄 Passo 3: Installazione e Setup ChromaDB

```python
import chromadb
from chromadb.utils import embedding_functions
import uuid

# Inizializza ChromaDB (persistente)
client = chromadb.PersistentClient(path="./chroma_db")

# Crea una collezione con un embedding function
embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"  # Modello efficiente
)

collection = client.create_collection(
    name="articoli_vectors",
    embedding_function=embedding_fn,
    metadata={"description": "Articoli vettorizzati da PostgreSQL"}
)
```

[🔼 Torna all'indice](#-indice)

---

## 5. ✨ Passo 4: Preparazione dei Dati per ChromaDB

```python
# Prepara i metadati e i documenti
documents = []
metadatas = []
ids = []

for _, row in data.iterrows():
    # Crea un documento combinato (testo da vettorizzare)
    doc_text = f"Titolo: {row['titolo']}. Descrizione: {row['descrizione']}"
    documents.append(doc_text)
    
    # Metadati per il filtro
    metadatas.append({
        "id_postgres": str(row['id']),
        "categoria": row['categoria'] if pd.notna(row['categoria']) else "senza_categoria"
    })
    
    # ID univoco per ChromaDB
    ids.append(str(uuid.uuid4()))

print(f"Preparati {len(documents)} documenti")
```

[🔼 Torna all'indice](#-indice)

---

## 6. 📥 Passo 5: Inserimento Dati in ChromaDB

```python
# Inserimento batch (per performance)
batch_size = 100

for i in range(0, len(documents), batch_size):
    end = min(i + batch_size, len(documents))
    
    collection.add(
        documents=documents[i:end],
        metadatas=metadatas[i:end],
        ids=ids[i:end]
    )
    
    print(f"Inseriti {end} documenti...")

print(f"✅ Inseriti {collection.count()} documenti in ChromaDB")
```

[🔼 Torna all'indice](#-indice)

---

## 7. 🔍 Passo 6: Test delle Ricerche

```python
# Funzione di ricerca
def search_similar(query_text, n_results=5, filter_category=None):
    # Prepara i filtri
    where_filter = None
    if filter_category:
        where_filter = {"categoria": filter_category}
    
    results = collection.query(
        query_texts=[query_text],
        n_results=n_results,
        where=where_filter
    )
    
    return results

# Test
results = search_similar("tecnologie innovative per l'ambiente", n_results=3)

for i, (doc, metadata, distance) in enumerate(zip(
    results['documents'][0],
    results['metadatas'][0],
    results['distances'][0]
)):
    print(f"\n📝 Risultato {i+1}:")
    print(f"Documento: {doc[:100]}...")
    print(f"Metadati: {metadata}")
    print(f"Distanza: {distance:.4f}")  # Più bassa = più simile
```

[🔼 Torna all'indice](#-indice)

---

## 8. 🔄 Passo 7: Sincronizzazione PostgreSQL ↔ ChromaDB

```python
def sync_db_to_chroma():
    """Sincronizza nuovi dati da PostgreSQL a ChromaDB"""
    
    # Ottieni gli ID già presenti in ChromaDB
    existing_ids = [item['id_postgres'] for item in collection.get()['metadatas']]
    
    # Query per i nuovi record
    query = f"""
    SELECT id, titolo, descrizione, categoria 
    FROM articoli 
    WHERE id NOT IN ({','.join(['%s']*len(existing_ids))})
    """
    
    # Esegui la query per nuovi record
    # ... (logica di inserimento come sopra)
    pass

# Programma un sync periodico (es. con APScheduler)
```

[🔼 Torna all'indice](#-indice)

---

## 9. 🎨 Passo 8: Integrazione Avanzata

```python
# 1. Ricerca ibrida (testuale + vettoriale)
def hybrid_search(query_text, postgres_where=None):
    # Ricerca vettoriale
    vector_results = collection.query(query_texts=[query_text], n_results=10)
    
    # Ricerca testuale in PostgreSQL
    postgres_query = f"""
    SELECT id, titolo, descrizione 
    FROM articoli 
    WHERE to_tsvector('italian', titolo || ' ' || descrizione) @@ to_tsquery('italian', %s)
    LIMIT 5
    """
    
    # Combina i risultati...
    return combined_results

# 2. Gestione degli aggiornamenti
def update_vector(id_postgres, new_text):
    # Trova il vecchio vector
    results = collection.get(where={"id_postgres": str(id_postgres)})
    
    if results['ids']:
        # Aggiorna
        collection.update(
            ids=results['ids'],
            documents=[new_text]
        )

# 3. Eliminazione
def delete_vector(id_postgres):
    results = collection.get(where={"id_postgres": str(id_postgres)})
    if results['ids']:
        collection.delete(ids=results['ids'])
```

[🔼 Torna all'indice](#-indice)

---

## 10. 📊 Passo 9: Monitoraggio e Manutenzione

```python
# Statistiche della collezione
def get_collection_stats():
    count = collection.count()
    metadata = collection.metadata
    
    print(f"📊 Statistiche ChromaDB:")
    print(f"Documenti totali: {count}")
    print(f"Metadati collezione: {metadata}")
    
    # Esempio di distribuzione categorie
    all_metadatas = collection.get()['metadatas']
    categories = {}
    for meta in all_metadatas:
        cat = meta.get('categoria', 'unknown')
        categories[cat] = categories.get(cat, 0) + 1
    
    print("\n📈 Distribuzione categorie:")
    for cat, count in categories.items():
        print(f"  {cat}: {count}")

get_collection_stats()
```

[🔼 Torna all'indice](#-indice)

---

## 11. 🔐 Passo 10: Backup e Sicurezza

```python
# Backup di ChromaDB
import shutil
from datetime import datetime

def backup_chroma():
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = f"./backups/chroma_backup_{timestamp}"
    shutil.copytree("./chroma_db", backup_path)
    print(f"✅ Backup salvato in {backup_path}")

# Caricare da backup
def restore_chroma(backup_path):
    shutil.rmtree("./chroma_db")
    shutil.copytree(backup_path, "./chroma_db")
    print("✅ Restore completato")
```

[🔼 Torna all'indice](#-indice)

---

## 12. 🚀 Script Completo

Ecco uno script completo per eseguire tutto il processo:

```python
# migrate_to_chroma.py

import psycopg2
import chromadb
from chromadb.utils import embedding_functions
import pandas as pd
import uuid

def main():
    # 1. Connessione PostgreSQL
    conn = psycopg2.connect(
        host="localhost",
        database="tuo_db",
        user="tuo_user",
        password="tua_password"
    )
    
    # 2. Estrai dati
    query = "SELECT id, titolo, descrizione, categoria FROM articoli"
    data = pd.read_sql(query, conn)
    conn.close()
    
    # 3. Setup ChromaDB
    client = chromadb.PersistentClient(path="./chroma_db")
    embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction()
    
    # Rimuovi collezione esistente se vuoi ricreare
    try:
        client.delete_collection("articoli_vectors")
    except:
        pass
    
    collection = client.create_collection(
        name="articoli_vectors",
        embedding_function=embedding_fn
    )
    
    # 4. Prepara e inserisci
    documents = []
    metadatas = []
    ids = []
    
    for _, row in data.iterrows():
        documents.append(f"Titolo: {row['titolo']}. Descrizione: {row['descrizione']}")
        metadatas.append({
            "id_postgres": str(row['id']),
            "categoria": str(row['categoria'])
        })
        ids.append(str(uuid.uuid4()))
    
    # Inserimento batch
    batch_size = 100
    for i in range(0, len(documents), batch_size):
        end = min(i + batch_size, len(documents))
        collection.add(
            documents=documents[i:end],
            metadatas=metadatas[i:end],
            ids=ids[i:end]
        )
    
    print(f"✅ Migrazione completata: {collection.count()} documenti")

if __name__ == "__main__":
    main()
```

[🔼 Torna all'indice](#-indice)

---

## 13. 💡 Consigli Finali

1. **Scegli il modello giusto**: 
   - `all-MiniLM-L6-v2`: veloce, leggero
   - `all-mpnet-base-v2`: più preciso ma più lento
   - Modelli multilingua per l'italiano

2. **Ottimizza le performance**:
   - Usa batch per gli inserimenti
   - Indici su PostgreSQL per le query
   - Memoria sufficiente per ChromaDB

3. **Manutenzione**:
   - Fai backup regolari
   - Monitora lo spazio su disco
   - Aggiorna gli embedding se cambi modello

4. **Scalabilità**:
   - Per grandi dataset, considera ChromaDB in modalità server
   - Usa sharding per dataset enormi

[🔼 Torna all'indice](#-indice)

---

## 14. 🎯 Modello Economico per Sperimentazione

Per sperimentazione, usa il modello più leggero disponibile:

### Modelli Economici

| Modello | Dimensione | Velocità | Accuratezza | Uso RAM |
|---------|-----------|----------|-------------|---------|
| **all-MiniLM-L6-v2** | 80MB | Alta | Buona | ~500MB |
| **paraphrase-MiniLM-L3-v2** | 22MB | Molto Alta | Discreta | ~200MB |
| **DefaultEmbeddingFunction** | Incluso | Alta | Base | ~300MB |

### Script per Modello Economico

```python
import chromadb
from chromadb.utils import embedding_functions
import pandas as pd
import psycopg2
import uuid

# Modello più economico
embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="paraphrase-MiniLM-L3-v2"  # Solo 22MB!
)

# Inizializza ChromaDB
client = chromadb.PersistentClient(path="./chroma_db")

try:
    client.delete_collection("articoli_vectors")
except:
    pass

collection = client.create_collection(
    name="articoli_vectors",
    embedding_function=embedding_fn
)

# Connessione PostgreSQL (usa LIMIT per test)
conn = psycopg2.connect(
    host="localhost",
    database="tuo_db",
    user="tuo_user",
    password="tua_password"
)

query = "SELECT id, titolo, descrizione FROM articoli LIMIT 100"  # Solo 100 record
data = pd.read_sql(query, conn)
conn.close()

print(f"📊 Trovati {len(data)} record")

# Preparazione e inserimento
documents = []
metadatas = []
ids = []

for _, row in data.iterrows():
    documents.append(f"{row['titolo']}. {row['descrizione']}")
    metadatas.append({"id_postgres": str(row['id'])})
    ids.append(str(uuid.uuid4()))

collection.add(
    documents=documents,
    metadatas=metadatas,
    ids=ids
)

print(f"✅ Inseriti {collection.count()} documenti")

# Test rapido
test_query = "tecnologia"
results = collection.query(
    query_texts=[test_query],
    n_results=2
)

print(f"\n🔍 Ricerca per '{test_query}':")
for i, doc in enumerate(results['documents'][0]):
    print(f"  {i+1}. {doc[:50]}...")
```

### Test Performance Modelli Economici

```python
import time

def test_performance():
    # Test velocità
    start = time.time()
    
    embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="paraphrase-MiniLM-L3-v2"
    )
    
    # Test con 10 testi
    testi = ["testo " + str(i) for i in range(10)]
    embeddings = embedding_fn(testi)
    
    print(f"⏱️ Tempo: {time.time() - start:.2f} secondi")
    print(f"📐 Dimensione vettore: {len(embeddings[0])}")

test_performance()
```

### Vantaggi del Modello Economico

- ✅ **Memoria ridotta**: ~200MB di RAM
- ✅ **Velocità**: 2-3x più veloce
- ✅ **Accuratezza**: Sufficiente per test e prototipi
- ✅ **Download rapido**: Solo 22MB

[🔼 Torna all'indice](#-indice)

---

## 📝 Note Finali

- Questa guida è ottimizzata per sperimentazione e sviluppo
- Per produzione, considera modelli più grandi e risorse dedicate
- ChromaDB supporta anche modalità server per deploy scalabili

---

*Documentazione creata il 29 Giugno 2026*