import psycopg2
import pandas as pd

# Connessione a PostgreSQL
conn = psycopg2.connect(
    host="ep-little-glade-as3kfjks-pooler.c-4.eu-central-1.aws.neon.tech",
    database="neondb",
    user="neondb_owner",
    password="npg_D2lCkYwuq1eg",
)

# Esempio: vedi le tabelle e i dati
query = """
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
"""
tables = pd.read_sql(query, conn)
print(tables)

# Esempio: estrai i dati da una tabella specifica
query = """
SELECT id, nome, descrizione, categoria, materiale
FROM catalog_scarpe;
"""
data = pd.read_sql(query, conn)
print(f'Hai {len(data)} record da vettorizzare')