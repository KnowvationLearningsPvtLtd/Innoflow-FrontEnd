import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"

export default function ComponentsDocumentLoadersPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Components", href: "/docs/components" },
          { label: "Document Loaders", href: "/docs/components-document-loaders" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Document Loader Components</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Document loaders are essential components for ingesting and processing various types of documents in Innoflow. These specialized components enable you to work with different file formats and transform raw documents into structured data that can be used throughout your workflows.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Document loaders read, parse, and process documents from various sources and formats. They serve as the foundation for document-based applications by converting raw documents into structured data that can be used by other components in your flow.
        </p>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/images/blog-writer.jpg"
            alt="Document Loader Components"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Document loaders ingest content from various file formats for use throughout your Innoflow applications
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Supported Formats</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Innoflow's document loaders support a wide range of file formats to accommodate different use cases:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Text Formats</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Plain text (.txt)</li>
              <li>Markdown (.md)</li>
              <li>HTML (.html, .htm)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Office Documents</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Microsoft Word (.docx, .doc)</li>
              <li>Microsoft PowerPoint (.pptx, .ppt)</li>
              <li>Microsoft Excel (.xlsx, .xls)</li>
              <li>OpenDocument formats (.odt, .ods, .odp)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">PDF Documents</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Adobe PDF documents (.pdf)</li>
              <li>PDF with OCR capability for scanned documents</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Structured Data</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>CSV files (.csv)</li>
              <li>JSON documents (.json)</li>
              <li>XML files (.xml)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Document Processing Pipeline</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Document loaders perform several processing steps to transform raw documents into usable data:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">1. Loading</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Reading the document from its source (file system, URL, database, etc.)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">2. Parsing</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Extracting text content and metadata from the document structure
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">3. Chunking</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Dividing documents into manageable pieces based on configurable parameters
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">4. Cleaning</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Removing irrelevant content, formatting, or noise from the extracted text
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">5. Metadata Extraction</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Identifying and extracting key metadata like titles, authors, dates, and document structure
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Configuration Options</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Document loaders provide various configuration options to fine-tune the ingestion process:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Source Selection</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Choose between local files, URLs, cloud storage, or database sources
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Chunking Parameters</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Configure how documents are split (by character count, token count, page, paragraph, etc.)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Metadata Filters</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Specify which metadata to extract and include with each document chunk
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Text Cleaning Rules</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Define patterns or rules for cleaning and normalizing extracted text
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Use Cases</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Document loaders enable several powerful applications within Innoflow:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Document Q&A Systems</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Build intelligent systems that can answer questions about specific documents or document collections
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Knowledge Base Creation</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Convert document collections into searchable knowledge bases with semantic search capabilities
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Content Summarization</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Generate concise summaries of long documents or document collections
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Data Extraction</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Pull structured information from unstructured documents for analysis or database population
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Document Classification</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Automatically categorize and tag documents based on their content
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Integration with Other Components</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Document loaders seamlessly integrate with other Innoflow components to create complete document processing pipelines:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Connect to <strong>Vector Stores</strong> for semantic search and retrieval</li>
          <li>Use with <strong>Text Splitters</strong> for advanced chunking strategies</li>
          <li>Pair with <strong>Embeddings</strong> to convert text into vector representations</li>
          <li>Feed into <strong>LLM Chains</strong> for sophisticated document analysis</li>
          <li>Connect to <strong>Output Formatters</strong> for structured responses</li>
        </ul>
      </section>
    </div>
  )
}