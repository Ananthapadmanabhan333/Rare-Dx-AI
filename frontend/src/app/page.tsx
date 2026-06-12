import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-8">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            RareDx AI
          </h1>
          <p className="text-gray-400 mt-2">Diagnostic Intelligence Platform</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            Patient Timeline
          </button>
          <button className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            New Analysis
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="col-span-2 space-y-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Clinical Intake</h2>
            <div className="h-48 bg-black/30 rounded-xl flex items-center justify-center border border-dashed border-white/20">
              <p className="text-gray-500">Drop patient notes, genomics, or labs here...</p>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Biomedical Knowledge Graph</h2>
            <div className="h-64 bg-black/30 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/10">
              {/* Mock graph visualization area */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-black to-black"></div>
              <p className="text-indigo-400 z-10">Neo4j Integration Pending</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-indigo-900/40 to-black/40 border border-indigo-500/30 backdrop-blur-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-indigo-100">Differential Diagnosis</h2>
            <ul className="space-y-4">
              <li className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-medium">Fabry Disease</h3>
                  <p className="text-sm text-gray-400">GLA Mutation Match</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-bold">89%</span>
                </div>
              </li>
              <li className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-medium">Gaucher Disease</h3>
                  <p className="text-sm text-gray-400">Phenotype overlap</p>
                </div>
                <div className="text-right">
                  <span className="text-amber-400 font-bold">42%</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
