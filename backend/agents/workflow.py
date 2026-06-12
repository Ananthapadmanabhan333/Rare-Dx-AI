from typing import TypedDict, List
from langgraph.graph import StateGraph, END
from agents.document_ai import process_medical_document
from agents.genomics import parse_vcf_file

# Define the state for the LangGraph
class DiagnosticState(TypedDict):
    symptoms: str
    vcf_data: str
    extracted_terms: List[str]
    mutations: List[dict]
    disease_candidates: List[dict]
    literature_evidence: List[str]
    final_differentials: List[dict]
    explainability_tree: str

# 1. Clinical Intake Agent
def clinical_intake_node(state: DiagnosticState):
    doc_results = process_medical_document(state["symptoms"])
    state["extracted_terms"] = doc_results["extracted_symptoms"]
    return state

# 2. Genomics Agent
def genomics_node(state: DiagnosticState):
    if state.get("vcf_data"):
        genomics_results = parse_vcf_file(state["vcf_data"])
        state["mutations"] = genomics_results["mutations_found"]
    return state

# 3. Knowledge Graph Retrieval Agent
def kg_retrieval_node(state: DiagnosticState):
    state["disease_candidates"] = [
        {"disease": "Fabry Disease", "score": 0.8},
        {"disease": "Gaucher Disease", "score": 0.3}
    ]
    return state

# 4. Biomedical Literature Agent
def literature_node(state: DiagnosticState):
    state["literature_evidence"] = ["PubMed ID 12345: GLA mutation causes Fabry."]
    return state

# 5. Differential Diagnosis Agent
def differential_diagnosis_node(state: DiagnosticState):
    candidates = sorted(state["disease_candidates"], key=lambda x: x["score"], reverse=True)
    state["final_differentials"] = candidates
    return state

# 6. Explainability Agent
def explainability_node(state: DiagnosticState):
    state["explainability_tree"] = f"Diagnosed {state['final_differentials'][0]['disease']} based on symptoms {state.get('extracted_terms')} and mutations {state.get('mutations')}."
    return state

# Build the graph
def build_workflow():
    workflow = StateGraph(DiagnosticState)

    # Add nodes
    workflow.add_node("intake", clinical_intake_node)
    workflow.add_node("genomics", genomics_node)
    workflow.add_node("kg_retrieval", kg_retrieval_node)
    workflow.add_node("literature", literature_node)
    workflow.add_node("differential_diagnosis", differential_diagnosis_node)
    workflow.add_node("explainability", explainability_node)

    # Add edges
    workflow.set_entry_point("intake")
    workflow.add_edge("intake", "genomics")
    workflow.add_edge("genomics", "kg_retrieval")
    workflow.add_edge("kg_retrieval", "literature")
    workflow.add_edge("literature", "differential_diagnosis")
    workflow.add_edge("differential_diagnosis", "explainability")
    workflow.add_edge("explainability", END)

    return workflow.compile()

diagnostic_workflow = build_workflow()
