import React from "react";

export function FlowApiSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-white mb-4">
            Powerful API.<br />
            Simple Interface.
          </h2>
          
          <p className="text-lg text-purple-100 mb-8">
            Create complex AI workflows with an intuitive drag-and-drop interface. Connect
            components, visualize data flow, and iterate rapidly.
          </p>
          
          {/* Feature list with checkmarks */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="text-purple-100">
                <span className="font-semibold">Visual Flow Builder</span> - Connect APIs and components visually
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="text-purple-100">
                <span className="font-semibold">Component Marketplace</span> - Add pre-built AI components to your workflow
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="text-purple-100">
                <span className="font-semibold">One-click Deployment</span> - Deploy AI agents with zero infrastructure setup
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Visual representation */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 rounded-xl p-2 border border-purple-700/30 shadow-lg">
            <div className="relative bg-gradient-to-r from-purple-900/90 to-purple-800/90 rounded-lg overflow-hidden h-96">
              {/* Split view: Flow diagram on left, Code on right */}
              <div className="absolute inset-0 flex">
                {/* Visual flow side */}
                <div className="w-1/2 h-full p-4 flex items-center justify-center">
                  {/* Flow diagram visualization */}
                  <div className="relative w-full h-4/5">
                    {/* Node 1 */}
                    <div className="absolute top-4 left-10 bg-purple-700/80 p-3 rounded-lg w-28 text-center text-white text-sm shadow-md">
                      API Connector
                    </div>
                    
                    {/* Connection line */}
                    <div className="absolute top-16 left-24 h-12 w-px bg-purple-400"></div>
                    
                    {/* Node 2 */}
                    <div className="absolute top-28 left-10 bg-indigo-600/80 p-3 rounded-lg w-28 text-center text-white text-sm shadow-md">
                      LLM Process
                    </div>
                    
                    {/* Connection line */}
                    <div className="absolute top-40 left-24 h-12 w-px bg-purple-400"></div>
                    
                    {/* Node 3 */}
                    <div className="absolute top-52 left-10 bg-violet-700/80 p-3 rounded-lg w-28 text-center text-white text-sm shadow-md">
                      Database
                    </div>
                    
                    {/* Node 4 with arrow from Node 2 */}
                    <div className="absolute top-28 right-10 bg-purple-600/80 p-3 rounded-lg w-28 text-center text-white text-sm shadow-md">
                      Vector Store
                    </div>
                    
                    {/* Horizontal connection line */}
                    <div className="absolute top-32 left-38 w-20 h-px bg-purple-400"></div>
                  </div>
                </div>
                
                {/* Code view side */}
                <div className="w-1/2 h-full bg-[#1e1e2e] p-4 font-mono text-xs overflow-hidden">
                  <div className="text-purple-300 mb-2">// Flow configuration</div>
                  <pre className="text-green-400">import</pre>
                  <pre className="text-white">{'{'} <span className="text-blue-400">OpenAI</span>, <span className="text-blue-400">Database</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'innoflow/components'</span></pre>
                  <pre className="text-white mt-4">
                    <span className="text-green-400">const</span> flow = <span className="text-blue-400">createFlow</span>({'{'}
                  </pre>
                  <pre className="text-white ml-4">
                    <span className="text-purple-400">components</span>: {'{'}
                  </pre>
                  <pre className="text-white ml-8">
                    <span className="text-green-400">llm</span>: <span className="text-blue-400">new</span> OpenAI(),
                  </pre>
                  <pre className="text-white ml-8">
                    <span className="text-green-400">db</span>: <span className="text-blue-400">new</span> Database(),
                  </pre>
                  <pre className="text-white ml-4">
                    {'}'},
                  </pre>
                  <pre className="text-white ml-4">
                    <span className="text-purple-400">connections</span>: {'['}
                  </pre>
                  <pre className="text-white ml-8">
                    {'{'} <span className="text-green-400">from</span>: <span className="text-yellow-300">'input'</span>, <span className="text-green-400">to</span>: <span className="text-yellow-300">'llm'</span> {'}'},
                  </pre>
                  <pre className="text-white ml-8">
                    {'{'} <span className="text-green-400">from</span>: <span className="text-yellow-300">'llm'</span>, <span className="text-green-400">to</span>: <span className="text-yellow-300">'db'</span> {'}'},
                  </pre>
                  <pre className="text-white ml-4">
                    {']'}
                  </pre>
                  <pre className="text-white">{'}'});</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}