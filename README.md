# RareDx AI
## Rare Disease Discovery & Diagnostic Intelligence Platform

**RareDx AI** is an explainable AI-powered system that helps physicians identify rare diseases by analyzing symptoms, clinical notes, laboratory reports, imaging summaries, genetic data, family history, and biomedical literature.

The platform is designed to reduce diagnostic delay, improve clinical decision-making, and provide transparent evidence-based reasoning instead of black-box predictions.

## Architecture & Tech Stack

This repository contains the Minimum Viable Architecture (MVA) scaffolding for the platform:

*   **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS, ShadCN UI
*   **Backend**: FastAPI, Python, LangGraph, LangChain
*   **Databases**: Neo4j (Graph), Qdrant (Vector), PostgreSQL (Relational), Redis (Cache)
*   **Infrastructure**: Docker Compose

## Features (Stubs & Implementations)

*   **Multi-Agent Workflow (LangGraph)**:
    *   Clinical Intake Agent (NLP)
    *   Genomics Agent (VCF Parsing)
    *   Knowledge Graph Retrieval Agent
    *   Biomedical Literature Agent
    *   Differential Diagnosis Agent
    *   Explainability Agent
*   **Biomedical Knowledge Graph**: Schema and mock data ingestion scripts for Neo4j.
*   **GraphRAG**: Hybrid search logic and Diagnostic Confidence Score calculation.
*   **Clinical Dashboards**:
    *   Main Analysis Intake
    *   Knowledge Graph Explorer
    *   Patient Longitudinal Timeline
    *   Diagnostic Confidence Breakdown

## Running Locally

1.  **Start Databases** (Neo4j, Qdrant, Postgres, Redis):
    ```bash
    docker-compose up -d
    ```

2.  **Start Backend API**:
    ```bash
    cd backend
    pip install -r requirements.txt
    uvicorn main:app --reload
    ```

3.  **Start Frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

4.  **Access the Platform**: Navigate to `http://localhost:3000`

## Future Development

To evolve this into a production system, you will need to:
1.  Integrate real ETL pipelines for Orphanet, OMIM, PubMed, and HPO.
2.  Add OpenAI / LLM API Keys to power the LangChain agents.
3.  Deploy the Dockerized stack to a Kubernetes cluster.
