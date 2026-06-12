from fastapi import FastAPI
from pydantic import BaseModel
from agents.workflow import diagnostic_workflow

app = FastAPI(title="RareDx AI Backend", version="1.0.0")

class DiagnosticRequest(BaseModel):
    symptoms: str
    age: int
    gender: str

@app.get("/")
def read_root():
    return {"message": "Welcome to RareDx AI Backend"}

@app.post("/api/diagnose")
def analyze_case(request: DiagnosticRequest):
    # Run the langgraph workflow
    initial_state = {
        "symptoms": request.symptoms,
        "vcf_data": "",
        "extracted_terms": [],
        "mutations": [],
        "disease_candidates": [],
        "literature_evidence": [],
        "final_differentials": [],
        "explainability_tree": ""
    }
    
    result = diagnostic_workflow.invoke(initial_state)
    
    return {
        "status": "success",
        "differentials": result["final_differentials"],
        "explanation": result["explainability_tree"]
    }
