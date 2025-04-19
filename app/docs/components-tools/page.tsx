export default function ComponentsToolsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tool Components</h1>

      <p className="mb-4">
        Tool components extend the capabilities of language models by providing them with access to external functions
        and services.
      </p>

      <h2 id="what-are-tools" className="text-2xl font-semibold mt-8 mb-4">
        What are Tools?
      </h2>
      <p className="mb-4">
        Tools are functions that language models can use to perform actions beyond text generation. They allow models to
        access external data, perform calculations, call APIs, and interact with the world in various ways.
      </p>

      <h2 id="built-in-tools" className="text-2xl font-semibold mt-8 mb-4">
        Built-in Tools
      </h2>
      <p className="mb-4">Innoflow provides several built-in tools:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Web Search:</strong> Search the internet for information
        </li>
        <li>
          <strong>Calculator:</strong> Perform mathematical calculations
        </li>
        <li>
          <strong>Weather:</strong> Get current weather conditions and forecasts
        </li>
        <li>
          <strong>Wikipedia:</strong> Query Wikipedia for information
        </li>
        <li>
          <strong>File Operations:</strong> Read from and write to files
        </li>
        <li>
          <strong>Database:</strong> Query and update databases
        </li>
      </ul>

      <h2 id="custom-tools" className="text-2xl font-semibold mt-8 mb-4">
        Custom Tools
      </h2>
      <p className="mb-4">You can create custom tools by defining:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Name:</strong> A descriptive name for the tool
        </li>
        <li>
          <strong>Description:</strong> What the tool does and when to use it
        </li>
        <li>
          <strong>Parameters:</strong> What inputs the tool requires
        </li>
        <li>
          <strong>Function:</strong> The actual code that executes when the tool is called
        </li>
      </ul>

      <h2 id="tool-node" className="text-2xl font-semibold mt-8 mb-4">
        Tool Node
      </h2>
      <p className="mb-4">
        The Tool node in Innoflow allows you to configure and use tools within your flows. It can be connected to agent
        nodes to create powerful AI assistants that can perform a wide range of tasks.
      </p>

      <h2 id="tool-calling" className="text-2xl font-semibold mt-8 mb-4">
        Tool Calling
      </h2>
      <p className="mb-4">When a language model needs to use a tool, it follows this process:</p>

      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>The model determines that a tool is needed to fulfill a request</li>
        <li>It selects the appropriate tool based on the tool's description</li>
        <li>It formats the necessary parameters according to the tool's schema</li>
        <li>The tool executes with the provided parameters</li>
        <li>The result is returned to the model, which incorporates it into its response</li>
      </ol>

      <h2 id="use-cases" className="text-2xl font-semibold mt-8 mb-4">
        Use Cases
      </h2>
      <p className="mb-4">Tools enable a wide range of applications:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Research Assistants:</strong> Search for and synthesize information
        </li>
        <li>
          <strong>Data Analysis:</strong> Process and analyze data sets
        </li>
        <li>
          <strong>Automation:</strong> Perform actions in other systems via APIs
        </li>
        <li>
          <strong>Decision Support:</strong> Gather information to support decision-making
        </li>
      </ul>
    </div>
  )
}
