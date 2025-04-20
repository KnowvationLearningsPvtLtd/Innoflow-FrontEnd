"use client"

import { motion } from "framer-motion"
import { useState } from "react";

export function AgentsSection() {
  const [temperature, setTemperature] = useState(0.5);
  const [selectedModel, setSelectedModel] = useState("gpt-4o");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-4">Agents at your service</h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto">
            Run a single or fleet of agents with access to all your components as tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Agents</h3>
              <p className="text-white/70">
                Create AI agents that can reason, plan, and execute tasks autonomously using your custom tools and
                components.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Tool Integration</h3>
              <p className="text-white/70">
                Connect your agents to any API, database, or service with our extensive library of pre-built connectors.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Agent Orchestration</h3>
              <p className="text-white/70">
                Coordinate multiple agents working together to solve complex problems through collaboration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full h-96 bg-purple-950/90 rounded-lg overflow-hidden">
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                
                <path
                  d="M180,80 C220,80 240,100 280,100"
                  stroke="rgba(219, 39, 119, 0.8)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="180" cy="80" r="5" fill="#d946ef" filter="drop-shadow(0 0 6px #d946ef)" />
                <circle cx="280" cy="100" r="5" fill="#d946ef" filter="drop-shadow(0 0 6px #d946ef)" />

             
                <path
                  d="M280,100 C320,100 340,140 380,140"
                  stroke="rgba(59, 130, 246, 0.8)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="280" cy="100" r="5" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />
                <circle cx="380" cy="140" r="5" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />

                {/* Model to Agent connection */}
                <path
                  d="M180,200 C220,200 240,160 280,160"
                  stroke="rgba(124, 58, 237, 0.8)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="180" cy="200" r="5" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />
                <circle cx="280" cy="160" r="5" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />

                {/* Corrected Agent to Response connection */}
                <path
                  d="M280,160 C320,160 340,180 380,180"
                  stroke="rgba(59, 130, 246, 0.8)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="280" cy="160" r="5" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />
                <circle cx="380" cy="180" r="5" fill="#8b5cf6" filter="drop-shadow(0 0 6px #8b5cf6)" />
              </svg>

              {/* Adjusted User Input Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-8 top-8 w-40 rounded-md border border-pink-600/30 bg-black/80 shadow-lg backdrop-blur-sm"
              >
                <div className="border-b border-pink-600/30 bg-pink-600/10 px-2 py-1 text-xs font-medium text-pink-600">
                  User
                </div>
                <div className="p-2 text-xs text-white/90">
                  <div>Input: "Analyze this data"</div>
                </div>
              </motion.div>

              {/* Adjusted Model Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute left-8 top-48 w-40 rounded-md border border-violet-600/30 bg-[#1a0b2e] shadow-lg backdrop-blur-sm"
              >
                <div className="border-b border-violet-600/30 bg-violet-600/10 px-2 py-1 text-xs font-medium text-violet-600">
                  Model
                </div>
                <div className="p-2 space-y-2">
                  <div>
                    <label className="block text-white/70 text-xs mb-1">Model</label>
                    <select
                      className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="gpt-4o">GPT-4o</option>
                      <option value="claude-3.4">Claude 3.4</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs mb-1">Temperature</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-right text-white/70 text-xs">{temperature.toFixed(2)}</div>
                  </div>
                  <div className="h-1 w-full rounded bg-violet-500/30 relative overflow-hidden">
                    <div className="absolute h-full w-1/4 rounded bg-gradient-to-r from-purple-500 to-violet-700"></div>
                  </div>
                </div>
              </motion.div>

              {/* Adjusted Agent Card */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-48 rounded-md border border-purple-500/30 bg-black/80 shadow-lg backdrop-blur-sm"
              >
                <div className="border-b border-purple-500/30 bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-500">
                  Agent
                </div>
                <div className="p-2 space-y-1 text-xs text-white/90">
                  <div className="flex justify-between">
                    <span>Model:</span> 
                    <span className="text-green-400">{selectedModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Role:</span>
                    <span className="text-blue-400">Researcher</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tools:</span>
                    <span className="text-amber-400">3 enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Task:</span>
                    <span className="text-pink-400">Data Analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-yellow-400">In Progress</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button className="px-3 py-1 bg-white/10 text-white rounded text-xs hover:bg-white/20 transition-colors">
                      Save
                    </button>
                    <button
                      className="px-3 py-1 bg-transparent border border-white/20 text-white/70 rounded text-xs hover:bg-white/5 transition-colors"
                      onClick={() => setTemperature(0.5)}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Adjusted Response Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute right-8 top-1/2 w-48 rounded-md border border-blue-500/30 bg-black/80 shadow-lg backdrop-blur-sm"
              >
                <div className="border-b border-blue-500/30 bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
                  Response
                </div>
                <div className="p-2 text-xs text-white/90 space-y-2">
                  <div>Output: "Analysis complete. The data shows scalable, on-demand resources, reducing hardware costs and speeding up experimentation."</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
