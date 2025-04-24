import React from "react"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"

export default function ConceptsFlowsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
                  items={[
                    { label: "Home", href: "/docs" },
                    { label: "Concepts", href: "/docs/concepts-overview" },
                    { label: "Overview", href: "/docs/concepts-overview" },
                  ]}
                />
                <br />
      <h1 className="text-3xl font-bold mb-6">Flows</h1>

      <p className="mb-4">
        Flows are the core concept in Innoflow, representing complete workflows that process data through a series of
        connected nodes.
      </p>

      <h2 id="what-are-flows" className="text-2xl font-semibold mt-8 mb-4">
        What are Flows?
      </h2>
      <p className="mb-4">
        A flow is a directed graph of connected nodes that defines how data moves and is transformed from input to
        output. Flows allow you to create complex AI applications by combining simpler components.
      </p>

      <h2 id="flow-execution" className="text-2xl font-semibold mt-8 mb-4">
        Flow Execution
      </h2>
      <p className="mb-4">
        When a flow is executed, data travels through the connected nodes in sequence. Each node processes its inputs
        and passes its outputs to the next nodes in the flow.
      </p>

      <h2 id="flow-design" className="text-2xl font-semibold mt-8 mb-4">
        Flow Design
      </h2>
      <p className="mb-4">Designing effective flows involves:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Selecting appropriate nodes</strong> for each step in your process
        </li>
        <li>
          <strong>Configuring node parameters</strong> to achieve desired behavior
        </li>
        <li>
          <strong>Connecting nodes</strong> in a logical sequence
        </li>
        <li>
          <strong>Testing and iterating</strong> to improve performance
        </li>
      </ul>

      <h2 id="flow-templates" className="text-2xl font-semibold mt-8 mb-4">
        Flow Templates
      </h2>
      <p className="mb-4">
        Innoflow provides pre-built flow templates for common use cases, which you can use as starting points for your
        own applications. These templates demonstrate best practices and common patterns.
      </p>

      <h2 id="flow-versioning" className="text-2xl font-semibold mt-8 mb-4">
        Flow Versioning
      </h2>
      <p className="mb-4">
        Flows can be versioned to track changes over time. This allows you to experiment with different approaches while
        maintaining a record of what worked in the past.
      </p>
    </div>
  )
}
