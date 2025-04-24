import React from "react"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"


export default function ComponentsVectorStoresPage() {
  return (
    <div className="max-w-3xl mx-auto">
       <DocsBreadcrumb
              items={[
                { label: "Home", href: "/docs" },
                { label: "Components", href: "/docs/components-models" },
                { label: "Tools", href: "/docs/components-tools" },
              ]}
            />
            <br />
      <h1 className="text-3xl font-bold mb-6">Vector Store Components</h1>

      <p className="mb-4">
        Vector stores are essential components for building retrieval-augmented generation (RAG) systems and semantic
        search applications in Innoflow.
      </p>

      <h2 id="what-are-vector-stores" className="text-2xl font-semibold mt-8 mb-4">
        What are Vector Stores?
      </h2>
      <p className="mb-4">
        Vector stores are specialized databases that store and retrieve vector embeddings - numerical representations of
        text, images, or other data that capture semantic meaning. They enable similarity search based on the meaning of
        content rather than exact keyword matching.
      </p>

      <h2 id="supported-vector-stores" className="text-2xl font-semibold mt-8 mb-4">
        Supported Vector Stores
      </h2>
      <p className="mb-4">Innoflow integrates with several vector store solutions:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Pinecone:</strong> Managed vector database optimized for similarity search
        </li>
        <li>
          <strong>Chroma:</strong> Open-source embedding database for AI applications
        </li>
        <li>
          <strong>FAISS:</strong> Facebook AI Similarity Search for efficient similarity search
        </li>
        <li>
          <strong>Milvus:</strong> Open-source vector database for unstructured data
        </li>
        <li>
          <strong>Weaviate:</strong> Vector search engine with GraphQL API
        </li>
      </ul>

      <h2 id="vector-store-operations" className="text-2xl font-semibold mt-8 mb-4">
        Vector Store Operations
      </h2>
      <p className="mb-4">Vector store components in Innoflow support several key operations:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Embedding Generation:</strong> Converting text or other data into vector embeddings
        </li>
        <li>
          <strong>Storage:</strong> Persisting embeddings with associated metadata
        </li>
        <li>
          <strong>Retrieval:</strong> Finding similar vectors based on semantic similarity
        </li>
        <li>
          <strong>Filtering:</strong> Narrowing search results based on metadata
        </li>
        <li>
          <strong>Updating:</strong> Modifying existing embeddings or metadata
        </li>
      </ul>

      <h2 id="vector-store-node" className="text-2xl font-semibold mt-8 mb-4">
        Vector Store Node
      </h2>
      <p className="mb-4">
        The Vector Store node in Innoflow provides a visual interface for configuring and using vector databases within
        your flows. It can be connected to document loaders, embedding models, and LLM nodes to create complete RAG
        pipelines.
      </p>

      <h2 id="use-cases" className="text-2xl font-semibold mt-8 mb-4">
        Use Cases
      </h2>
      <p className="mb-4">Vector stores enable several powerful applications:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Document Q&A:</strong> Answer questions based on specific documents
        </li>
        <li>
          <strong>Knowledge Base Search:</strong> Find relevant information across large document collections
        </li>
        <li>
          <strong>Semantic Search:</strong> Search by meaning rather than keywords
        </li>
        <li>
          <strong>Recommendation Systems:</strong> Suggest similar items based on embeddings
        </li>
      </ul>
    </div>
  )
}
