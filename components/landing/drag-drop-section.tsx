import React from "react";

export function DragDropSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side - Code visualization */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 rounded-xl p-2 border border-purple-700/30 shadow-lg">
            <div className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 rounded-lg overflow-hidden">
              {/* Code editor mockup */}
              <div className="bg-[#1e1e2e] p-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2">// component.js</span>
                </div>
                
                <pre className="text-green-400">import</pre>
                <pre className="text-white">{'{'} <span className="text-blue-400">useState</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'react'</span></pre>
                <pre className="text-white">{'{'} <span className="text-blue-400">OpenAI</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'langchain/llms/openai'</span></pre>
                <pre className="text-white">{'{'} <span className="text-blue-400">PromptTemplate</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'langchain/prompts'</span></pre>
                <pre className="text-white mt-4">
                  <span className="text-green-400">// Initialize the model</span>
                </pre>
                <pre className="text-white">
                  <span className="text-green-400">const</span> model = <span className="text-blue-400">new</span> OpenAI({'{'} 
                </pre>
                <pre className="text-white ml-4">
                  temperature: 0.7,
                </pre>
                <pre className="text-white ml-4">
                  modelName: <span className="text-yellow-300">"gpt-4"</span>,
                </pre>
                <pre className="text-white">{'}'});</pre>
                
                <div className="mt-4 flex items-center">
                  <div className="bg-purple-700 text-white px-3 py-1 rounded text-xs font-sans">
                    OpenAI
                  </div>
                  <div className="h-px w-8 bg-purple-500"></div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded text-xs font-sans">
                    Prompt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-white mb-4">
            Drag. Drop. Deploy.
          </h2>
          
          <p className="text-lg text-purple-100 mb-8">
            Don't let boilerplate code slow you down. Visual data flows, reusable components, and rapid iteration
            let you focus on creating AI magic.
          </p>
          
          {/* Feature list */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="text-purple-100">
                <span className="font-semibold">Visual Flow Builder</span> - Create complex AI workflows with an intuitive drag-and-drop interface
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="text-purple-100">
                <span className="font-semibold">Reusable Components</span> - Connect components, visualize data flow, and iterate rapidly
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="text-purple-100">
                <span className="font-semibold">Quick Deployment</span> - Deploy your flows directly to production with one click
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}