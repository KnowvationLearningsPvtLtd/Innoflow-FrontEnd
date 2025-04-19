export default function ConceptsEdgesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edges</h1>

      <p className="mb-4">
        Edges are the connections between nodes in a flow, defining how data moves through your application.
      </p>

      <h2 id="what-are-edges" className="text-2xl font-semibold mt-8 mb-4">
        What are Edges?
      </h2>
      <p className="mb-4">
        Edges represent the paths that data follows as it moves from one node to another. They connect the output of one
        node to the input of another, creating a directed graph that defines your workflow.
      </p>

      <h2 id="edge-types" className="text-2xl font-semibold mt-8 mb-4">
        Edge Types
      </h2>
      <p className="mb-4">Innoflow supports different types of edges:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Standard Edges:</strong> Direct connections between nodes
        </li>
        <li>
          <strong>Conditional Edges:</strong> Connections that only activate when certain conditions are met
        </li>
        <li>
          <strong>Animated Edges:</strong> Visual indicators showing data flow in real-time
        </li>
      </ul>

      <h2 id="edge-direction" className="text-2xl font-semibold mt-8 mb-4">
        Edge Direction
      </h2>
      <p className="mb-4">Edges in Innoflow can connect nodes in multiple directions:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Top-to-Bottom:</strong> Traditional flow direction
        </li>
        <li>
          <strong>Left-to-Right:</strong> Horizontal flow
        </li>
        <li>
          <strong>Multi-directional:</strong> Complex connections in any direction
        </li>
      </ul>

      <h2 id="edge-styling" className="text-2xl font-semibold mt-8 mb-4">
        Edge Styling
      </h2>
      <p className="mb-4">Edges can be styled to convey additional information:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Color:</strong> Indicates the type of data or connection
        </li>
        <li>
          <strong>Thickness:</strong> Can represent the volume or importance of data
        </li>
        <li>
          <strong>Animation:</strong> Shows active data flow during execution
        </li>
      </ul>

      <h2 id="edge-configuration" className="text-2xl font-semibold mt-8 mb-4">
        Edge Configuration
      </h2>
      <p className="mb-4">
        Edges can be configured with various properties to control how data flows between nodes, including
        transformation functions, filters, and validation rules.
      </p>
    </div>
  )
}
