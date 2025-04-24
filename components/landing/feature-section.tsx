"use client"

import { motion } from "framer-motion"
import { useState } from "react";

export function FeatureSection() {
  const [temperature, setTemperature] = useState(0.5);
  const [showOutput, setShowOutput] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 w-full h-full flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Ditch the Black Boxes
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div
            className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition"
            variants={item}>
            <div className="mb-4 h-40 overflow-hidden rounded-md border border-emerald-500/20 bg-black/50">
              <div className="p-4 h-full flex flex-col">
                <div className="text-white mb-2">Model</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Temperature</span>
                    <span className="text-white/70 text-sm">{temperature.toFixed(2)}</span>
                  </div>
                  <div className="relative h-2 w-full rounded-full bg-white/10">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
                    />
                    <div
                      className="absolute h-2 rounded-full bg-emerald-500"
                      style={{ width: `${temperature * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="px-4 py-1 bg-white/10 text-white rounded text-sm hover:bg-white/20 transition-colors">
                      Save
                    </button>
                    <button
                      className="px-4 py-1 bg-transparent border border-white/20 text-white/70 rounded text-sm hover:bg-white/5 "
                      onClick={() => setTemperature(0.5)}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mb-2 text-xl font-semibold text-white">Control the complexity</h3>
            <p className="text-white/70">Fine-tune model parameters and customize your AI workflows with precision.</p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition"
            variants={item}>
            <div className="mb-4 h-40 overflow-hidden rounded-md border border-emerald-500/20 bg-black/50">
              <div className="p-4 h-full flex flex-col">
                <div className="text-white mb-2 flex items-center">
                  <div className="h-4 w-4 rounded-full bg-purple-500 mr-2"></div>
                  <span>Model</span>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full h-2 bg-white/10 rounded-full relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/3 h-4 w-4 rounded-full bg-purple-500"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-2/3 h-4 w-4 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Swap and compare</h3>
            <p className="text-white/70">
              Easily switch between different models and compare their performance in real-time.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition"
            variants={item}>
            <div
              className="mb-4 h-40 overflow-hidden rounded-md border border-emerald-500/20 bg-black/50 cursor-pointer group"
              onClick={() => setShowOutput(!showOutput)}>
              <div className="p-4 h-full flex flex-col relative">
                {showOutput ? (
                  <div className="relative w-full h-full bg-black/50 rounded-md flex items-center justify-center">
                    <div className="w-96 h-48 bg-black/90 rounded-lg border border-white/10 p-4 flex items-center justify-center relative overflow-hidden">
                      <img
                        src="/images/chat-input-output.png"
                        alt="Chat Input Output"
                        className="max-w-full max-h-full object-contain rounded transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        Click to view code
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full w-full">
                    <pre className="text-xs text-green-400 font-mono h-full">
                      <code>
                        {`class TextInputComponent(TextComponent):
              display_name = "Text Input"
              description = "Get text inputs from the Playground."
              icon = "type"
              name = "TextInput"`}
                      </code>
                    </pre>
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      Click to show output
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Python under the hood</h3>
            <p className="text-white/70">
              Access and customize the underlying Python code for maximum flexibility and control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}