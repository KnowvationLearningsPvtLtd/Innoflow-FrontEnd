export default function ConceptsNodesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nodes</h1>

      <p className="mb-4">
        Nodes are the fundamental building blocks in Innoflow. Each node represents a specific function or operation in
        your workflow.
      </p>

      <h2 id="what-are-nodes" className="text-2xl font-semibold mt-8 mb-4">
        What are Nodes?
      </h2>
      <p className="mb-4">
        Nodes are self-contained components that perform specific tasks within a flow. They can process inputs,
        transform data, and produce outputs that can be connected to other nodes.
      </p>

      <h2 id="node-types" className="text-2xl font-semibold mt-8 mb-4">
        Node Types
      </h2>
      <p className="mb-4">Innoflow provides several types of nodes for different purposes:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Model Nodes:</strong> Interface with AI models like GPT-4, Claude, or Llama
        </li>
        <li>
          <strong>Prompt Nodes:</strong> Define templates for generating text
        </li>
        <li>
          <strong>Tool Nodes:</strong> Provide specific capabilities like web search or calculation
        </li>
        <li>
          <strong>Memory Nodes:</strong> Store and retrieve conversation history
        </li>
        <li>
          <strong>Input/Output Nodes:</strong> Handle data entering and leaving the flow
        </li>
      </ul>

      <h2 id="node-connections" className="text-2xl font-semibold mt-8 mb-4">
        Node Connections
      </h2>
      <p className="mb-4">
        Nodes can be connected in multiple directions (top, bottom, left, right) to create complex workflows. Each node
        has connection points called "handles" that allow it to receive inputs and send outputs.
      </p>

      <h2 id="node-configuration" className="text-2xl font-semibold mt-8 mb-4">
        Node Configuration
      </h2>
      <p className="mb-4">
        Each node type has specific configuration options that can be adjusted in the properties panel. These settings
        control how the node processes data and interacts with other nodes in the flow.
      </p>
    </div>
  )
}
