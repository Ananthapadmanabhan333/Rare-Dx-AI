import React from 'react';

export default function DiagnosticConfidence() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-400">Diagnostic Confidence Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-black/40 border border-indigo-500/30">
          <h2 className="text-2xl font-semibold mb-6 flex justify-between items-center">
            Fabry Disease
            <span className="text-emerald-400 text-3xl font-black">89%</span>
          </h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Genetic Match (GLA mutation)</span>
                <span className="text-indigo-300 font-medium">99%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '99%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Symptom Match</span>
                <span className="text-indigo-300 font-medium">85%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Literature Support (GraphRAG)</span>
                <span className="text-indigo-300 font-medium">75%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
           <h3 className="text-xl font-semibold mb-4 text-gray-200">Explainable Evidence Tree</h3>
           <ul className="list-disc pl-5 space-y-2 text-gray-400">
             <li><strong className="text-indigo-300">Biomarker:</strong> Decreased alpha-galactosidase A activity</li>
             <li><strong className="text-indigo-300">Genomics:</strong> c.901C&gt;T mutation is known to be pathogenic (ClinVar).</li>
             <li><strong className="text-indigo-300">Literature:</strong> 43 recent papers support this symptom cluster for Fabry.</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
