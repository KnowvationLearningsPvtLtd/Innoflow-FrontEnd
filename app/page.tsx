"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { NotebookSection } from "@/components/landing/notebook-section"
import { CTASection } from "@/components/landing/cta-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { FlowApiSection } from "@/components/landing/flow-api-section"
import { DragDropSection } from "@/components/landing/drag-drop-section"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />

      {/* Pinned and animated sections */}
      <PinnedSections />

      <IntegrationSection />
      <NotebookSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function PinnedSections() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Keep first section opacity at 1
  const firstSectionOpacity = useTransform(
    scrollYProgress,
    [0, 1], // Apply across the whole scroll range
    [1, 1]  // Keep opacity at 1
  );

  // Keep second section opacity at 1 during its active range
  const secondSectionOpacity = useTransform(
    scrollYProgress,
    [0.35, 1], // From when it starts animating to the end of the container
    [1, 1]     // Keep opacity at 1
  );

  // Adjusted Y transform for the first section to keep it static
  const firstSectionY = useTransform(
    scrollYProgress,
    [0, 1], // Apply across the whole scroll range of the container
    ["0%", "0%"] // Keep the Y position at 0%
  );

  // Y transform for the second section to slide up
  const secondSectionY = useTransform(
    scrollYProgress,
    [0.35, 0.75], // Slide up during this scroll range
    ["100%", "0%"] // Start from 100% (below) and end at 0% (in place)
  );

  // Scale adjustments for depth effect remain the same
  const firstSectionScale = useTransform(
    scrollYProgress,
    [0, 0.55, 0.7],
    [1, 1, 0.97]
  );

  const secondSectionScale = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    [0.97, 1]
  );

  // Z-index control for proper layering remains the same
  const firstSectionZIndex = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [2, 2, 1]
  );

  const secondSectionZIndex = useTransform(
    scrollYProgress,
    [0.5, 0.6],
    [1, 2]
  );

  return (
    // Container that defines the scrollable area for the pinned sections
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container to keep the sections in the viewport during scroll */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* First Section - Stays in place, does NOT fade out */}
        <motion.div
          style={{
            opacity: firstSectionOpacity, // This will now stay at 1
            y: firstSectionY, // This will now stay at 0%
            scale: firstSectionScale,
            zIndex: firstSectionZIndex,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Content of your first section (DragDropSection) */}
          <div className="container max-w-6xl mx-auto px-4">
            <div className="relative flex h-full flex-col gap-y-6 overflow-hidden rounded-[17px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:flex-row lg:items-center lg:gap-x-20 max-h-[80vh] overflow-y-auto dragdrop-bg">
              {/* DragDropSection content */}
              <div className="container mx-auto px-4 py-12">
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
                          <pre className="text-white">{'}'});
                          </pre>
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
            </div>
          </div>
        </motion.div>

        {/* Second Section - Slides up and overlaps the first */}
        <motion.div
          style={{
            opacity: secondSectionOpacity, // This will now stay at 1 during its animation
            y: secondSectionY, // This will animate from 100% to 0%
            scale: secondSectionScale,
            zIndex: secondSectionZIndex,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Content of your second section (FlowApiSection) */}
          <div className="container max-w-6xl mx-auto px-4">
            <div className="relative flex h-full flex-col gap-y-6 overflow-hidden rounded-[17px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:flex-row lg:items-center lg:gap-x-20 max-h-[80vh] overflow-y-auto dragdrop-bg">
              {/* FlowApiSection content */}
              <div className="container mx-auto px-4 py-12">
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
