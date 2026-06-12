import React from 'react';

export default function KnowledgeGraphExplorer() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-400">Knowledge Graph Explorer</h1>
      <div className="h-[600px] bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
        {/* Mock graph visualization */}
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 top-1/4 left-1/4"></div>
        <div className="absolute w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-1/4 right-1/4"></div>
        
        <div className="text-center z-10">
          <p className="text-xl font-semibold mb-2">Neo4j Database Connected</p>
          <p className="text-gray-400">3 Nodes, 3 Relationships visualised</p>
          
          <div className="mt-8 flex gap-8 justify-center items-center">
             <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.6)]">GLA</div>
             <div className="h-1 w-24 bg-white/20"></div>
             <div className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center shadow-[0_0_20px_rgba(5,150,105,0.6)]">Fabry Disease</div>
             <div className="h-1 w-24 bg-white/20"></div>
             <div className="w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.6)]">Angiokeratoma</div>
          </div>
        </div>
      </div>
    </div>
  );
}
