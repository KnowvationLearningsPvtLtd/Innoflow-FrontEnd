import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"

export default function ConceptsOverviewPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Concepts", href: "/docs/concepts-overview" },
          { label: "Overview", href: "/docs/concepts-overview" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Concepts Overview</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Innoflow is a visual framework that enables developers to build AI applications using a flow-based approach.
          Understanding the core concepts will help you make the most of Innoflow's capabilities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Core concepts</h2>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Components</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Components are the building blocks of your AI applications. Each component performs a specific function,
              such as loading data, processing text, or generating content. Components can be connected together to
              create complex workflows.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Flows</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Flows are visual representations of your AI application logic. They consist of connected components that
              process data in a sequence. Flows can be simple chains or complex networks with branching paths and
              feedback loops.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Playground</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The Playground is an interactive environment for testing your flows. It allows you to input data, observe
              the flow's execution, and view the output in real-time. The Playground is a powerful tool for debugging and
              refining your AI applications.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Objects</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Objects are data structures that flow between components. They can be simple strings, complex documents, or
              specialized data types like embeddings or chat messages. Understanding how objects are transformed as they
              move through your flow is essential for building effective applications.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Publishing</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Publishing allows you to deploy your flows as web applications or APIs that can be accessed by users or other systems. Published flows can be integrated into websites, mobile apps, or backend services.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Innoflow architecture</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Innoflow consists of several key architectural components that work together:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Flow Editor</strong>: The visual interface for creating and editing flows</li>
          <li><strong>Component Library</strong>: A collection of pre-built components for various AI tasks</li>
          <li><strong>Runtime Engine</strong>: The system that executes flows and manages data transfer between components</li>
          <li><strong>Storage System</strong>: Handles saving and loading flows, as well as managing user data</li>
          <li><strong>API Gateway</strong>: Enables external integration with published flows</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Data flow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          In Innoflow, data flows through components in a directed graph:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Input data enters the flow through input components</li>
          <li>Data is processed and transformed by intermediate components</li>
          <li>Results are produced by output components</li>
          <li>Each component can have multiple inputs and outputs</li>
          <li>Data can follow multiple paths simultaneously</li>
        </ol>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/placeholder.svg?height=200&width=600"
            alt="Innoflow Data Flow Diagram"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Visualization of data flowing through connected components in an Innoflow application
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Component types</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Innoflow includes several categories of components:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">I/O Components</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Handle input and output operations, such as text input, file uploads, and displaying results.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Model Components</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Integrate with AI models from providers like OpenAI, Anthropic, and Hugging Face.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Data Components</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Process and manage data, including loading, splitting, and transforming documents.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Memory Components</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Store and retrieve information across multiple interactions or sessions.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Agent Components</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Create autonomous agents that can use tools and make decisions to accomplish tasks.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Logic Components</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Implement conditional logic, loops, and other control structures in your flows.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Next steps</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Now that you understand the basic concepts of Innoflow, you can explore these topics in more detail:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><a href="/docs/concepts-components" className="text-primary hover:underline">Components</a> - Learn more about the building blocks of Innoflow</li>
          <li><a href="/docs/concepts-flows" className="text-primary hover:underline">Flows</a> - Understand how to create and manage flows</li>
          <li><a href="/docs/concepts-playground" className="text-primary hover:underline">Playground</a> - Discover how to test and debug your flows</li>
          <li><a href="/docs/get-started-quickstart" className="text-primary hover:underline">Quickstart</a> - Follow a step-by-step guide to create your first flow</li>
        </ul>
      </section>
    </div>
  );
}
