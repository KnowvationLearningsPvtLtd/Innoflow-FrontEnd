export default function ComponentsDocumentLoadersPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Document Loader Components</h1>

      <p className="mb-4">
        Document loaders are essential components for ingesting and processing various types of documents in Innoflow.
      </p>

      <h2 id="what-are-document-loaders" className="text-2xl font-semibold mt-8 mb-4">
        What are Document Loaders?
      </h2>
      <p className="mb-4">
        Document loaders are specialized components that read, parse, and process documents from various sources and
        formats. They convert raw documents into structured data that can be used by other components in your flow.
      </p>

      <h2 id="supported-formats" className="text-2xl font-semibold mt-8 mb-4">
        Supported Formats
      </h2>
      <p className="mb-4">Innoflow's document loaders support a wide range of file formats:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Text Files:</strong> Plain text (.txt)
        </li>
        <li>
          <strong>Office Documents:</strong> Word (.docx), PowerPoint (.pptx), Excel (.xlsx)
        </li>
        <li>
          <strong>PDFs:</strong> Adobe PDF documents (.pdf)
        </li>
        <li>
          <strong>Markdown:</strong> Markdown files (.md)
        </li>
        <li>
          <strong>HTML:</strong> Web pages and HTML documents
        </li>
        <li>
          <strong>CSV/JSON:</strong> Structured data formats
        </li>
      </ul>

      <h2 id="document-processing" className="text-2xl font-semibold mt-8 mb-4">
        Document Processing
      </h2>
      <p className="mb-4">Document loaders perform several processing steps:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Loading:</strong> Reading the document from its source
        </li>
        <li>
          <strong>Parsing:</strong> Extracting text and metadata
        </li>
        <li>
          <strong>Chunking:</strong> Dividing documents into manageable pieces
        </li>
        <li>
          <strong>Cleaning:</strong> Removing irrelevant content or formatting
        </li>
        <li>
          <strong>Metadata Extraction:</strong> Identifying titles, authors, dates, etc.
        </li>
      </ul>

      <h2 id="document-loader-node" className="text-2xl font-semibold mt-8 mb-4">
        Document Loader Node
      </h2>
      <p className="mb-4">
        The Document Loader node in Innoflow provides a visual interface for configuring document ingestion. It can be
        connected to vector stores, text splitters, and other components to create complete document processing
        pipelines.
      </p>

      <h2 id="use-cases" className="text-2xl font-semibold mt-8 mb-4">
        Use Cases
      </h2>
      <p className="mb-4">Document loaders enable several powerful applications:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Document Q&A:</strong> Build systems that can answer questions about specific documents
        </li>
        <li>
          <strong>Knowledge Base Creation:</strong> Convert document collections into searchable knowledge bases
        </li>
        <li>
          <strong>Content Summarization:</strong> Generate summaries of long documents
        </li>
        <li>
          <strong>Data Extraction:</strong> Pull structured information from unstructured documents
        </li>
      </ul>
    </div>
  )
}
