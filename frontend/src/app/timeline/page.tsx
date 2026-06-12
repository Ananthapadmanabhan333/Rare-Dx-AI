import React from 'react';

export default function PatientTimeline() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-400">Patient Longitudinal Timeline</h1>
      
      <div className="relative border-l border-white/20 ml-6 space-y-12 pb-12">
        <div className="relative pl-8">
          <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(79,70,229,0.8)]"></div>
          <p className="text-sm text-gray-400 mb-1">Age 8</p>
          <h3 className="text-xl font-semibold mb-2">Onset of Acroparesthesia</h3>
          <p className="text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">Patient reported severe burning pain in hands and feet, triggered by exercise and fever.</p>
        </div>

        <div className="relative pl-8">
          <div className="absolute w-4 h-4 bg-rose-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
          <p className="text-sm text-gray-400 mb-1">Age 15</p>
          <h3 className="text-xl font-semibold mb-2">Dermatology Consult</h3>
          <p className="text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10">Appearance of dark red spots (Angiokeratoma) clustered around the umbilicus and knees.</p>
        </div>
        
        <div className="relative pl-8">
          <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          <p className="text-sm text-gray-400 mb-1">Current</p>
          <h3 className="text-xl font-semibold mb-2">RareDx Genomic Analysis</h3>
          <p className="text-gray-300 bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30 text-emerald-100">
            Pathogenic variant detected in GLA gene (c.901C&gt;T). Correlated with historical symptoms leading to 89% confidence in Fabry Disease diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}
