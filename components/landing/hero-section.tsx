"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export function HeroSection() {
  const [inputText, setInputText] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [temperature, setTemperature] = useState(0.5)
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini")

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl glow-gradient-text">Supercharge your ideas with low code AI automation.</h1>
            <p className="mb-8 text-xl text-white/80">
            Low-code platform for developers to create AI agents using any API, model, or database.
            </p>
            
          </motion.div>
          <motion.div
          
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg border border-white/10 bg-black/50 p-4 shadow-xl backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 transition">          
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-white/70">Input</div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-3">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Type something..."
                      className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-white/70">Model</div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-xs text-white">
                        AI
                      </div>
                      <div className="flex rounded-md bg-black/20">
                        {[
                          { id: 'gpt-4o-mini', name: 'GPT-4o Mini' },
                          { id: 'gpt-4o', name: 'GPT-4o' },
                          { id: 'gpt-3.5-turbo', name: 'GPT-3.5' }
                        ].map((model) => (
                          <button
                            key={model.id}
                            className={`px-3 py-1 text-sm transition ${
                              selectedModel === model.id
                                ? 'bg-white/10 text-white font-medium rounded-md'
                                : 'text-white/70 hover:text-white'
                            }`}
                            onClick={() => setSelectedModel(model.id)}
                          >
                            {model.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-white/70">API Key</div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-3">
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Type something..."
                      className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-white/70">Temperature</div>
                  <div className="px-1">
                    <div className="relative h-6 w-full">
                      <Slider
                        value={[temperature]}
                        min={0}
                        max={1}
                        step={0.01}
                        onValueChange={(value) => setTemperature(value[0])}
                      />
                    </div>
                    <div className="mt-1 flex justify-between text-xs">
                      <div className="flex items-center gap-1 text-white/70">
                        <span>Precise</span>
                    
                      </div>
                      <div className="text-right text-white">{temperature.toFixed(2)}</div>
                      <div className="flex items-center gap-1 text-white/70">
                        <span>Creative</span>
                      </div>
                      <button
                      className="z-10 px-4 py-1 bg-transparent border border-white/20 text-white/70 rounded text-sm hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => setTemperature(0.5)}
                    >
                      Reset
                    </button>
                     
                    </div>
                  
                   
                  </div>
                
                </div>
               
              </div>
              
            </div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-48 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black/0"></div>
    </section>
  )
}
