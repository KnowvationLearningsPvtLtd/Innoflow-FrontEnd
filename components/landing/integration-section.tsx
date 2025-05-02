"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function IntegrationSection() {
  const integrations = [
    "Pinecone", "Upstash", "Intercom", "Stripe", "Dropbox", "Notion", "Google Drive", "HuggingFace",
    "DuckDuckGo", "Serper", "Cohere", "Confluence", "Sysn", "Amazon Bedrock", "Suzy API", "Anthropic",
    "Google Cloud", "Wolfram Alpha", "Azure", "Evernote", "Crewai AI", "Vectara", "Weaviate", "Cassandra",
    "Yahoo Finance", "Vertex AI", "Bing", "NVIDIA", "Airbyto", "Ollama", "Bubble", "MongoDB", "OpenAI",
  ] as const

  type Integration = typeof integrations[number]

  const integrationLinks: Record<Integration, string> = {
    Pinecone: "https://www.pinecone.io/", Upstash: "https://upstash.com/", Intercom: "https://www.intercom.com/",
    Stripe: "https://stripe.com/", Dropbox: "https://www.dropbox.com/", Notion: "https://www.notion.so/",
    "Google Drive": "https://www.google.com/drive/", HuggingFace: "https://huggingface.co/", DuckDuckGo: "https://duckduckgo.com/",
    Serper: "https://serper.dev/", Cohere: "https://cohere.ai/", Confluence: "https://www.atlassian.com/software/confluence",
    Sysn: "https://www.sysn.com/", "Amazon Bedrock": "https://aws.amazon.com/bedrock/", "Suzy API": "https://suzy.com/",
    Anthropic: "https://www.anthropic.com/", "Google Cloud": "https://cloud.google.com/", "Wolfram Alpha": "https://www.wolframalpha.com/",
    Azure: "https://azure.microsoft.com/", Evernote: "https://evernote.com/", "Crewai AI": "https://crewai.com/",
    Vectara: "https://vectara.com/", Weaviate: "https://weaviate.io/", Cassandra: "https://cassandra.apache.org/",
    "Yahoo Finance": "https://finance.yahoo.com/", "Vertex AI": "https://cloud.google.com/vertex-ai/", Bing: "https://www.bing.com/",
    NVIDIA: "https://www.nvidia.com/", Airbyto: "https://airbyte.com/", Ollama: "https://ollama.com/", Bubble: "https://bubble.io/",
    MongoDB: "https://www.mongodb.com/", OpenAI: "https://openai.com/",
  }

  const rowOne = integrations.slice(0, Math.ceil(integrations.length / 2))
  const rowTwo = integrations.slice(Math.ceil(integrations.length / 2))

  // Animation controls
  const rowOneControls = useAnimation()
  const rowTwoControls = useAnimation()

  useEffect(() => {
    rowOneControls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
        ease: "linear",
      },
    })

    rowTwoControls.start({
      x: "100%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
        ease: "linear",
      },
    })
  }, [rowOneControls, rowTwoControls])

  const handleRowOneHoverStart = () => rowOneControls.stop()
  const handleRowOneHoverEnd = () => {
    rowOneControls.start({
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    })
  }

  const handleRowTwoHoverStart = () => rowTwoControls.stop()
  const handleRowTwoHoverEnd = () => {
    rowTwoControls.start({
      x: "100%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    })
  }

  return (
    <section className="py-16 overflow-hidden relative">
      <div className="max-w-[100vw] mx-auto px-0">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Connect your existing tools</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Choose from hundreds of data sources, models, or vector stores. If you don't find what you're looking for,
            build your own custom component.
          </p>
        </div>

        {/* First Row: scrolls leftward from center */}
        <div className="relative h-24 mb-1 overflow-hidden w-full">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="absolute left-1/2 top-0 flex gap-6 whitespace-nowrap -translate-x-1/2"
            animate={rowOneControls}
            onMouseEnter={handleRowOneHoverStart}
            onMouseLeave={handleRowOneHoverEnd}
          >
            {[...rowOne, ...rowOne].map((integration, index) => (
              <a
                key={`row1-${index}`}
                href={integrationLinks[integration]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/5 px-6 py-3 text-white/80 
                  transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/10 
                  hover:text-white integration-hover-glow"
              >
                {integration}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Second Row: scrolls rightward from center */}
        <div className="relative h-24 overflow-hidden w-full">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="absolute right-1/2 top-0 flex gap-6 whitespace-nowrap -translate-x-[90%]"
            animate={rowTwoControls}
            onMouseEnter={handleRowTwoHoverStart}
            onMouseLeave={handleRowTwoHoverEnd}
          >
            {[...rowTwo, ...rowTwo].map((integration, index) => (
              <a
                key={`row2-${index}`}
                href={integrationLinks[integration]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/5 px-6 py-3 text-white/80 
                  transition-all duration-200 cursor-pointer whitespace-nowrap border border-white/10 
                  hover:text-white integration-hover-glow"
              >
                {integration}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
