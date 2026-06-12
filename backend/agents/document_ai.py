def process_medical_document(document_text: str):
    # Mock OCR and Entity Extraction
    print("Processing medical document via BioBERT/ClinicalBERT...")
    return {
        "extracted_symptoms": ["Pain in extremities", "Decreased sweating"],
        "extracted_history": "Patient reports pain starting in childhood.",
        "biomarkers": []
    }
