from neo4j_client import neo4j_db

def create_schema():
    print("Creating Neo4j Schema and Constraints...")
    constraints = [
        "CREATE CONSTRAINT IF NOT EXISTS FOR (d:Disease) REQUIRE d.id IS UNIQUE",
        "CREATE CONSTRAINT IF NOT EXISTS FOR (g:Gene) REQUIRE g.symbol IS UNIQUE",
        "CREATE CONSTRAINT IF NOT EXISTS FOR (s:Symptom) REQUIRE s.hpo_id IS UNIQUE",
    ]
    for constraint in constraints:
        neo4j_db.query(constraint)
    print("Schema created.")

def insert_mock_data():
    print("Inserting mock data...")
    # Mock Fabry Disease Data
    query = """
    MERGE (d:Disease {id: 'ORPHA:324', name: 'Fabry Disease', prevalence: '1/40000'})
    MERGE (g:Gene {symbol: 'GLA', name: 'galactosidase alpha'})
    MERGE (s1:Symptom {hpo_id: 'HP:0000988', name: 'Angiokeratoma'})
    MERGE (s2:Symptom {hpo_id: 'HP:0000966', name: 'Hypohidrosis'})
    MERGE (s3:Symptom {hpo_id: 'HP:0003418', name: 'Acroparesthesia'})
    MERGE (g)-[:ASSOCIATED_WITH]->(d)
    MERGE (d)-[:CAUSES]->(s1)
    MERGE (d)-[:CAUSES]->(s2)
    MERGE (d)-[:CAUSES]->(s3)
    """
    neo4j_db.query(query)
    print("Mock data inserted.")

if __name__ == "__main__":
    create_schema()
    insert_mock_data()
    neo4j_db.close()
