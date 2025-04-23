"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function IntegrationSection() {
  const integrations = [
    "Pinecone",
    "Upstash",
    "Intercom",
    "Stripe",
    "Dropbox",
    "Notion",
    "Google Drive",
    "HuggingFace",
    "DuckDuckGo",
    "Serper",
    "Cohere",
    "Confluence",
    "Sysn",
    "Amazon Bedrock",
    "Suzy API",
    "Anthropic",
    "Google Cloud",
    "Wolfram Alpha",
    "Azure",
    "Evernote",
    "Crewai AI",
    "Vectara",
    "Weaviate",
    "Cassandra",
    "Yahoo Finance",
    "Vertex AI",
    "Bing",
    "NVIDIA",
    "Airbyto",
    "Ollama",
    "Bubble",
    "MongoDB",
    "OpenAI",
  ] as const

  type Integration = typeof integrations[number]

  const integrationLinks: Record<Integration, string> = {
    Pinecone: "https://www.pinecone.io/",
    Upstash: "https://upstash.com/",
    Intercom: "https://www.intercom.com/",
    Stripe: "https://stripe.com/",
    Dropbox: "https://www.dropbox.com/",
    Notion: "https://www.notion.so/",
    "Google Drive": "https://www.google.com/drive/",
    HuggingFace: "https://huggingface.co/",
    DuckDuckGo: "https://duckduckgo.com/",
    Serper: "https://serper.dev/",
    Cohere: "https://cohere.ai/",
    Confluence: "https://www.atlassian.com/software/confluence",
    Sysn: "https://www.sysn.com/",
    "Amazon Bedrock": "https://aws.amazon.com/bedrock/",
    "Suzy API": "https://suzy.com/",
    Anthropic: "https://www.anthropic.com/",
    "Google Cloud": "https://cloud.google.com/",
    "Wolfram Alpha": "https://www.wolframalpha.com/",
    Azure: "https://azure.microsoft.com/",
    Evernote: "https://evernote.com/",
    "Crewai AI": "https://crewai.com/",
    Vectara: "https://vectara.com/",
    Weaviate: "https://weaviate.io/",
    Cassandra: "https://cassandra.apache.org/",
    "Yahoo Finance": "https://finance.yahoo.com/",
    "Vertex AI": "https://cloud.google.com/vertex-ai/",
    Bing: "https://www.bing.com/",
    NVIDIA: "https://www.nvidia.com/",
    Airbyto: "https://airbyte.com/",
    Ollama: "https://ollama.com/",
    Bubble: "https://bubble.io/",
    MongoDB: "https://www.mongodb.com/",
    OpenAI: "https://openai.com/",
  }

  // Split integrations into three rows
  const rowOneIntegrations = integrations.slice(0, Math.ceil(integrations.length / 3))
  const rowTwoIntegrations = integrations.slice(Math.ceil(integrations.length / 3), Math.ceil(2 * integrations.length / 3))
  const rowThreeIntegrations = integrations.slice(Math.ceil(2 * integrations.length / 3))

  // Create references to the section and rows
  const sectionRef = useRef<HTMLElement>(null)
  const rowOneRef = useRef<HTMLDivElement>(null)
  const rowTwoRef = useRef<HTMLDivElement>(null)
  const rowThreeRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, { once: false, amount: 0.1, margin: "100px" })
  
  // States to store row widths for calculating animation duration
  const [rowOneWidth, setRowOneWidth] = useState(0)
  const [rowTwoWidth, setRowTwoWidth] = useState(0)
  const [rowThreeWidth, setRowThreeWidth] = useState(0)

  // Animation controls for each row
  const rowOneControls = useAnimation()
  const rowTwoControls = useAnimation()
  const rowThreeControls = useAnimation()

  // States to track if any row is being hovered
  const [isRowOneHovered, setIsRowOneHovered] = useState(false)
  const [isRowTwoHovered, setIsRowTwoHovered] = useState(false)
  const [isRowThreeHovered, setIsRowThreeHovered] = useState(false)

  // Measure the width of the rows after rendering
  useEffect(() => {
    if (rowOneRef.current) {
      const width = rowOneRef.current.scrollWidth / 2
      setRowOneWidth(width)
    }
    
    if (rowTwoRef.current) {
      const width = rowTwoRef.current.scrollWidth / 2
      setRowTwoWidth(width)
    }

    if (rowThreeRef.current) {
      const width = rowThreeRef.current.scrollWidth / 2
      setRowThreeWidth(width)
    }
  }, [])

  // Calculate animation duration based on row width
  const pixelsPerSecond = 25
  const rowOneDuration = rowOneWidth > 0 ? rowOneWidth / pixelsPerSecond : 60
  const rowTwoDuration = rowTwoWidth > 0 ? rowTwoWidth / pixelsPerSecond : 60
  const rowThreeDuration = rowThreeWidth > 0 ? rowThreeWidth / pixelsPerSecond : 60

  // Start or pause animations based on viewport visibility and hover state
  useEffect(() => {
    if (isInView) {
      // Row One: Right to Left
      if (!isRowOneHovered) {
        rowOneControls.start({
          x: [`0%`, `-${rowOneWidth}px`],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: rowOneDuration,
              ease: "linear",
            }
          }
        })
      } else {
        // Pause animation when hovered
        rowOneControls.stop()
      }
      
      // Row Two: Left to Right
      if (!isRowTwoHovered) {
        rowTwoControls.start({
          x: [`-${rowTwoWidth}px`, `0%`],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: rowTwoDuration,
              ease: "linear",
            }
          }
        })
      } else {
        // Pause animation when hovered
        rowTwoControls.stop()
      }
      
      // Row Three: Right to Left (like Row One)
      if (!isRowThreeHovered) {
        rowThreeControls.start({
          x: [`0%`, `-${rowThreeWidth}px`],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: rowThreeDuration,
              ease: "linear",
            }
          }
        })
      } else {
        // Pause animation when hovered
        rowThreeControls.stop()
      }
    } else {
      // Stop all animations when not in view
      rowOneControls.stop()
      rowTwoControls.stop()
      rowThreeControls.stop()
    }
  }, [
    isInView, 
    isRowOneHovered, 
    isRowTwoHovered, 
    isRowThreeHovered, 
    rowOneControls, 
    rowTwoControls, 
    rowThreeControls, 
    rowOneWidth, 
    rowTwoWidth, 
    rowThreeWidth, 
    rowOneDuration, 
    rowTwoDuration, 
    rowThreeDuration
  ])

  return (
    <section className="py-16 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white">Connect your existing tools</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Choose from hundreds of data sources, models, or vector stores. If you don't find what you're looking for,
            build your own custom component.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Scrolling container with increased width */}
          <div className="w-full max-w-5.5xl mx-auto">
            {/* Row One - scrolls right to left */}
            <div 
              className="overflow-hidden mb-3 relative"
              onMouseEnter={() => setIsRowOneHovered(true)}
              onMouseLeave={() => setIsRowOneHovered(false)}
            >
              <div className="flex py-1" style={{ width: "100%" }}>
                <motion.div
                  ref={rowOneRef}
                  className="flex gap-3 whitespace-nowrap"
                  animate={rowOneControls}
                  initial={{ x: 0 }}
                >
                  {/* First set of items */}
                  {rowOneIntegrations.map((integration, index) => (
                    <motion.a
                      key={`row1-${index}`}
                      href={integrationLinks[integration]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {integration}
                    </motion.a>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {rowOneIntegrations.map((integration, index) => (
                    <motion.a
                      key={`row1-dup-${index}`}
                      href={integrationLinks[integration]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {integration}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Row Two - scrolls left to right */}
            <div 
              className="overflow-hidden mb-3 relative"
              onMouseEnter={() => setIsRowTwoHovered(true)}
              onMouseLeave={() => setIsRowTwoHovered(false)}
            >
              <div className="flex py-1" style={{ width: "100%" }}>
                <motion.div
                  ref={rowTwoRef}
                  className="flex gap-3 whitespace-nowrap"
                  animate={rowTwoControls}
                  initial={{ x: `-${rowTwoWidth}px` }}
                >
                  {/* First set of items */}
                  {rowTwoIntegrations.map((integration, index) => (
                    <motion.a
                      key={`row2-${index}`}
                      href={integrationLinks[integration]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {integration}
                    </motion.a>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {rowTwoIntegrations.map((integration, index) => (
                    <motion.a
                      key={`row2-dup-${index}`}
                      href={integrationLinks[integration]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {integration}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Row Three - scrolls right to left */}
            <div 
              className="overflow-hidden relative"
              onMouseEnter={() => setIsRowThreeHovered(true)}
              onMouseLeave={() => setIsRowThreeHovered(false)}
            >
              <div className="flex py-1" style={{ width: "100%" }}>
                <motion.div
                  ref={rowThreeRef}
                  className="flex gap-3 whitespace-nowrap"
                  animate={rowThreeControls}
                  initial={{ x: 0 }}
                >
                  {/* First set of items */}
                  {rowThreeIntegrations.map((integration, index) => (
                    <motion.a
                      key={`row3-${index}`}
                      href={integrationLinks[integration]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {integration}
                    </motion.a>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {rowThreeIntegrations.map((integration, index) => (
                    <motion.a
                      key={`row3-dup-${index}`}
                      href={integrationLinks[integration]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                      {integration}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}