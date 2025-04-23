"use client"

import { motion } from "framer-motion"

export function DragDropSection() {
  return (
    <section className="py-20 w-full h-full flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-4">Drag. Drop. Deploy.</h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto">
            Don't let boilerplate code slow you down. Visual data flows, reusable components, and rapid iteration let
            you focus on creating AI magic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <div className="aspect-video rounded-md border border-white/10 bg-black/50 p-4 relative overflow-hidden">
                {/* Code editor mockup */}
                <div className="absolute left-4 top-4 right-4 bottom-4 bg-black/80 rounded overflow-hidden">
                  <pre className="text-xs text-green-400 font-mono p-4">
                    <code>
                      {`import { useState } from 'react'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

// Initialize the model
const model = new OpenAI({
  temperature: 0.7,
  modelName: 'gpt-4o-mini',
  openAIApiKey: process.env.OPENAI_API_KEY,
})

// Create a prompt template
const template = \`You are a helpful assistant.
Question: {question}
Answer: \`

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ['question'],
})

// Generate a response
const response = await model.call(
  await promptTemplate.format({
    question: "What is AI?",
  })
)`}
                    </code>
                  </pre>
                </div>

                {/* Node component mockup */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-md border border-purple-500/30 bg-black/80 shadow-lg backdrop-blur-sm">
                  <div className="border-b border-purple-500/30 bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-500">
                    OpenAI
                  </div>
                  <div className="p-2 text-xs text-white/70">
                    <div>Temperature: 0.7</div>
                    <div>Model: gpt-4o-mini</div>
                  </div>
                </div>

                {/* Connection line */}
                <div className="absolute right-[160px] top-1/2 w-20 h-1 bg-purple-500/50"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Visual Flow Builder</h3>
              <p className="text-white/70">
                Create complex AI workflows with an intuitive drag-and-drop interface. Connect components, visualize
                data flow, and iterate rapidly.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Reusable Components</h3>
              <p className="text-white/70">
                Build once, use everywhere. Create custom components that can be shared across projects and teams.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Instant Deployment</h3>
              <p className="text-white/70">
                Deploy your AI workflows with a single click. No complex infrastructure setup required.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}