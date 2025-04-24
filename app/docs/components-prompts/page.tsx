import React from "react";
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"

export default function ComponentsPromptsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Components", href: "/docs/components-models" },
          { label: "Prompts", href: "/docs/components-prompts" },
        ]}
      />

<br />
      <h1 className="text-3xl font-bold mb-6">Prompt Components</h1>

      <p className="mb-4">
        Prompt components are essential building blocks for creating effective AI interactions in Innoflow.
      </p>

      <h2 id="what-are-prompts" className="text-2xl font-semibold mt-8 mb-4">
        What are Prompts?
      </h2>
      <p className="mb-4">
        Prompts are templates that define how to structure requests to language models. They provide context,
        instructions, and examples that guide the model to produce the desired output.
      </p>

      <h2 id="prompt-templates" className="text-2xl font-semibold mt-8 mb-4">
        Prompt Templates
      </h2>
      <p className="mb-4">
        Prompt templates allow you to create reusable patterns with variables that can be filled in at runtime. For
        example:
      </p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
        <code>{`Write a {{style}} about {{topic}} that is {{length}} words long.`}</code>
      </pre>

      <h2 id="prompt-techniques" className="text-2xl font-semibold mt-8 mb-4">
        Prompt Techniques
      </h2>
      <p className="mb-4">Effective prompting involves several techniques:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Few-shot learning:</strong> Providing examples of desired inputs and outputs
        </li>
        <li>
          <strong>Chain-of-thought:</strong> Guiding the model through a step-by-step reasoning process
        </li>
        <li>
          <strong>Role-based prompting:</strong> Assigning specific roles to the AI to shape its responses
        </li>
        <li>
          <strong>Structured output:</strong> Requesting responses in specific formats like JSON or markdown
        </li>
      </ul>

      <h2 id="prompt-optimization" className="text-2xl font-semibold mt-8 mb-4">
        Prompt Optimization
      </h2>
      <p className="mb-4">Innoflow provides tools for testing and optimizing prompts:</p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>A/B testing:</strong> Compare different prompt variations
        </li>
        <li>
          <strong>Version history:</strong> Track changes and improvements
        </li>
        <li>
          <strong>Performance metrics:</strong> Measure response quality, consistency, and relevance
        </li>
      </ul>

      <h2 id="prompt-node" className="text-2xl font-semibold mt-8 mb-4">
        Prompt Node
      </h2>
      <p className="mb-4">
        The Prompt node in Innoflow allows you to define, test, and optimize prompts visually within your flows. It
        supports all major prompting techniques and can be connected to various model nodes.
      </p>
    </div>
  )
}
