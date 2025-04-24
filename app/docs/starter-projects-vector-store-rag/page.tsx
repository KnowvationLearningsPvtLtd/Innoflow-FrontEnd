import Link from "next/link"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function VectorStoreRAGPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Starter Projects", href: "/docs/starter-projects-basic-prompting" },
          { label: "Vector Store RAG", href: "/docs/starter-projects-vector-store-rag" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Vector Store RAG</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Vector Store RAG (Retrieval Augmented Generation) template allows you to build a system that answers
          questions based on your own documents. This powerful approach combines the knowledge retrieval capabilities of
          vector databases with the generation abilities of language models.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          RAG systems enhance language models by first retrieving relevant information from a knowledge base before
          generating a response. This template includes components for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Loading and processing documents</li>
          <li>Creating vector embeddings of the documents</li>
          <li>Storing these embeddings in a vector database</li>
          <li>Retrieving relevant information based on user queries</li>
          <li>Generating a response using a language model and the retrieved information</li>
        </ul>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/images/rag.jpg"
            alt="Vector Store RAG Flow"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Vector Store RAG flow with document loading, embedding, and retrieval components
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">When to use this template</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">The Vector Store RAG template is ideal for:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Creating a chatbot that can answer questions about your company's documentation</li>
          <li>Building a research assistant that can search through academic papers or reports</li>
          <li>Developing a customer support system based on your product knowledge base</li>
          <li>Creating a personal assistant that can reference your notes or documents</li>
          <li>Any application where you need to ground AI responses in specific knowledge</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Creating the flow</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">1. Document Processing</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Set up the document processing chain:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Add a <strong>Document Loader</strong> component from the Data section
              </li>
              <li>
                Connect it to a <strong>Text Splitter</strong> component to chunk your documents
              </li>
              <li>
                Add an <strong>Embedding Model</strong> component (e.g., OpenAIEmbeddings)
              </li>
              <li>
                Connect the Text Splitter to a <strong>Vector Store</strong> component
              </li>
              <li>Also connect the Embedding Model to the Vector Store</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">2. Query Processing</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Set up the query processing chain:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Add an <strong>Input</strong> component for user queries
              </li>
              <li>
                Connect the Input to a <strong>Prompt Template</strong> component
              </li>
              <li>Connect the Vector Store to the Prompt Template</li>
              <li>
                Add an <strong>OpenAI</strong> component
              </li>
              <li>Connect the Prompt Template to the OpenAI component</li>
              <li>
                Add an <strong>Output</strong> component
              </li>
              <li>Connect the OpenAI component to the Output</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">3. Configure the components</h3>
            <p className="text-gray-700 dark:text-gray-300">Configure each component with appropriate settings:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Document Loader</strong>: Select your file type (PDF, Word, etc.) and upload your documents
              </li>
              <li>
                <strong>Text Splitter</strong>: Set chunk size (e.g., 1000) and overlap (e.g., 100)
              </li>
              <li>
                <strong>Vector Store</strong>: Choose a vector database (e.g., Pinecone, Chroma, Weaviate)
              </li>
              <li>
                <strong>Prompt Template</strong>: Create a template that includes the retrieved information
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">Example prompt template:</p>
            <CodeBlock
              language="text"
              code="Use the following context to answer the question. If the answer is not in the context, say you don't know.

Context:
{{context}}

Question: {{question}}

Answer:"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Testing the flow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">To test your Vector Store RAG flow:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>First, run the document processing chain to load your documents into the vector store</li>
          <li>Click the "Playground" button in the top right corner</li>
          <li>Enter a question related to your documents (e.g., "What is the company's refund policy?")</li>
          <li>Press Enter or click the Send button</li>
          <li>The system will retrieve relevant information and use it to generate a response</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Advanced configurations</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You can enhance your Vector Store RAG template with these advanced configurations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Add a <strong>Reranker</strong> component to improve the relevance of retrieved documents
          </li>
          <li>
            Implement <strong>Conversation Memory</strong> to maintain context across multiple user queries
          </li>
          <li>
            Add a <strong>Router Chain</strong> to handle different types of questions (e.g., factual vs. generative)
          </li>
          <li>
            Integrate <strong>Metadata Filtering</strong> to search within specific document categories or date ranges
          </li>
          <li>
            Add <strong>Document Processor</strong> components for more sophisticated text extraction from complex
            documents
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Performance optimization</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To optimize your RAG system's performance, consider these tips:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Experiment with different chunk sizes to find the optimal balance for your documents</li>
          <li>
            Adjust the number of retrieved documents based on your use case (more for comprehensive answers, fewer for
            concise responses)
          </li>
          <li>Use a more powerful embedding model for better semantic search results</li>
          <li>Implement caching to speed up repeated queries</li>
          <li>Consider using a hybrid search approach (combining vector search with keyword search)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Next steps</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Once you've mastered the Vector Store RAG template, consider exploring these related flows:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <Link href="/docs/document-qa" className="text-primary hover:underline">
              Document Q&A
            </Link>{" "}
            - A specialized RAG flow for question answering on specific documents
          </li>
          <li>
            <Link href="/docs/memory-chatbot" className="text-primary hover:underline">
              Memory Chatbot
            </Link>{" "}
            - A chatbot with conversation memory for contextual responses
          </li>
          <li>
            <Link href="/docs/starter-projects-simple-agent" className="text-primary hover:underline">
              Simple Agent
            </Link>{" "}
            - Add agent capabilities to your RAG system for more complex reasoning
          </li>
        </ul>
      </section>
    </div>
  )
}
