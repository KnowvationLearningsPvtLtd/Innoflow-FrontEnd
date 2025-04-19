"use client"

import { motion } from "framer-motion"

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
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
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

        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {integrations.map((integration, index) => (
            <motion.a
              key={index}
              href={
                {
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
                }[integration] || "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
            >
              {integration}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
