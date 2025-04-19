import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegrationsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Integrations", href: "/docs/integrations" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-4 text-white">Integrations</h1>

      <section className="mb-10">
        <p className="text-lg mb-4 text-gray-200">
          Innoflow integrates with a wide range of AI models, tools, and services to help you build powerful AI
          applications. This guide provides an overview of available integrations and how to set them up.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Language Model Providers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">
                <Link href="/docs/integrations-openai" className="hover:underline">
                  OpenAI
                </Link>
              </CardTitle>
              <CardDescription className="text-white/60">GPT-4, GPT-3.5 Turbo, and embeddings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Integrate with OpenAI's powerful language models for text generation, chat, and embeddings.
              </p>
              <Button asChild variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                <Link href="/docs/integrations-openai">View Integration</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">
                <Link href="/docs/integrations-huggingface" className="hover:underline">
                  Hugging Face
                </Link>
              </CardTitle>
              <CardDescription className="text-white/60">Open-source models and Inference API</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Access thousands of open-source models for various NLP tasks through Hugging Face's ecosystem.
              </p>
              <Button asChild variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                <Link href="/docs/integrations-huggingface">View Integration</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Anthropic</CardTitle>
              <CardDescription className="text-white/60">Claude models for safe, helpful AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Integrate with Anthropic's Claude models, known for their helpfulness and safety features.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Cohere</CardTitle>
              <CardDescription className="text-white/60">Specialized models for enterprise use</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Use Cohere's models optimized for enterprise applications and specialized tasks.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Frameworks & Libraries</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">
                <Link href="/docs/integrations-langchain" className="hover:underline">
                  LangChain
                </Link>
              </CardTitle>
              <CardDescription className="text-white/60">Framework for LLM application development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Leverage LangChain's components for building complex LLM applications with chains, agents, and tools.
              </p>
              <Button asChild variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                <Link href="/docs/integrations-langchain">View Integration</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">LlamaIndex</CardTitle>
              <CardDescription className="text-white/60">Data framework for LLM applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Connect custom data sources to LLMs with LlamaIndex's data structures and retrieval mechanisms.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Vector Databases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Pinecone</CardTitle>
              <CardDescription className="text-white/60">Managed vector database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Store and search vector embeddings at scale with Pinecone's managed vector database.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Chroma</CardTitle>
              <CardDescription className="text-white/60">Open-source embedding database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Use Chroma for storing and retrieving embeddings with an easy-to-use open-source solution.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Weaviate</CardTitle>
              <CardDescription className="text-white/60">Vector search engine</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Implement semantic search with Weaviate's vector search capabilities and GraphQL API.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Milvus</CardTitle>
              <CardDescription className="text-white/60">Open-source vector database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Scale your vector search with Milvus's distributed architecture and advanced features.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Tools & Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Serper</CardTitle>
              <CardDescription className="text-white/60">Google Search API</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Add web search capabilities to your agents and flows with Serper's Google Search API.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-white/10 hover:bg-black/60 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Unstructured</CardTitle>
              <CardDescription className="text-white/60">Document processing API</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">
                Extract and structure data from various document formats with Unstructured's API.
              </p>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary text-white hover:bg-primary/90">
          <Link href="/docs/integrations-openai">Get Started with OpenAI</Link>
        </Button>
        <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10">
          <Link href="/docs">Back to Documentation</Link>
        </Button>
      </div>
    </div>
  )
}
