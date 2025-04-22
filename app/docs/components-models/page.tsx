import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function ComponentsModelsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Components", href: "/docs/components-models" },
          { label: "Models", href: "/docs/components-models" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Model Components</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Model components in Innoflow allow you to integrate with various large language models (LLMs) and other AI
          models. These components form the core of most AI applications, providing the intelligence needed to generate
          text, answer questions, summarize content, and more.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Available model components</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Innoflow supports integration with many popular model providers:
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">OpenAI Models</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Connect to OpenAI's powerful language models including GPT-4o and GPT-3.5-Turbo.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Supported models:</span>
                <span className="text-gray-600 dark:text-gray-400">gpt-4o, gpt-4o-mini, gpt-3.5-turbo, and more</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">API key required:</span>
                <span className="text-gray-600 dark:text-gray-400">Yes</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Anthropic Models</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Integrate with Anthropic's Claude models, known for their long context windows and reasoning capabilities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Supported models:</span>
                <span className="text-gray-600 dark:text-gray-400">claude-3-opus, claude-3-sonnet, claude-3-haiku</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">API key required:</span>
                <span className="text-gray-600 dark:text-gray-400">Yes</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Hugging Face Models</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Access thousands of open-source models from the Hugging Face Hub.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Supported models:</span>
                <span className="text-gray-600 dark:text-gray-400">Mistral, Llama, Gemma, Phi, and many more</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">API key required:</span>
                <span className="text-gray-600 dark:text-gray-400">Optional (required for some models)</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Local Models</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Run models locally using Ollama, enabling privacy and reducing API costs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Supported models:</span>
                <span className="text-gray-600 dark:text-gray-400">Any model supported by Ollama</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">API key required:</span>
                <span className="text-gray-600 dark:text-gray-400">No</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Custom Model</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create your own model component for any API or service not natively supported by Innoflow.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Common configuration parameters</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Model components typically require several configuration parameters:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Parameter
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Description
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  API Key
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Authentication key for the model provider
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">sk-...</code>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Model Name
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Specific model to use from the provider
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">gpt-4o</code>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Temperature
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Controls randomness in output (0.0-1.0)
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">0.7</code>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Max Tokens
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Maximum length of the generated response
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">1000</code>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  System Message
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  Instructions to guide the model's behavior
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                    You are a helpful assistant...
                  </code>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">Stop Sequences</td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  Strings that will stop the model from generating more text
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">["###", "END"]</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Using the OpenAI component</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The OpenAI component is one of the most commonly used model components. Here's how to configure it:
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-black dark:text-white">Step 1: Add the component</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Drag and drop the OpenAI component from the Models section of the component library onto your canvas.
          </p>

          <h3 className="text-lg font-medium text-black dark:text-white">Step 2: Configure API access</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Enter your OpenAI API key in the component settings. You can either add it directly to the component or set
            it as a global variable.
          </p>
          <CodeBlock
            language="python"
            code='# You can set the API key as an environment variable
import os
os.environ["OPENAI_API_KEY"] = "your-api-key-here"'
          />

          <h3 className="text-lg font-medium text-black dark:text-white">Step 3: Select model and parameters</h3>
          <p className="text-gray-700 dark:text-gray-300">Choose the model variant and adjust generation parameters:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Model: Select the specific OpenAI model (e.g., gpt-4o, gpt-3.5-turbo)</li>
            <li>Temperature: Set between 0.0 (deterministic) and 1.0 (creative)</li>
            <li>Max Tokens: Limit the length of the generated response</li>
            <li>System Message: Provide instructions to guide the model's behavior</li>
          </ul>

          <h3 className="text-lg font-medium text-black dark:text-white">Step 4: Connect inputs and outputs</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Connect an input component (such as a Text Input or Prompt Template) to the OpenAI component's input, and
            connect the OpenAI component's output to an output component (such as a Text Output).
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/images/example.jpg"
            alt="OpenAI Component Configuration"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Example of an OpenAI component configured in the Innoflow interface
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Tips for using model components</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Use system messages effectively</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The system message is a powerful way to control the behavior of the model. Clear, specific instructions in
              the system message can greatly improve the quality and consistency of the model's outputs.
            </p>
            <CodeBlock
              language="text"
              code="You are a technical documentation writer. Respond in a clear, concise manner. Format code examples using proper markdown. When unsure, ask for clarification rather than making assumptions."
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">
              Adjust temperature based on your use case
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Lower temperature values (0.0-0.3) are better for factual, consistent outputs like Q&A systems. Higher
              values (0.7-1.0) produce more creative, varied outputs suitable for content generation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Manage token usage</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Be mindful of token limits and costs, especially when using models with large context windows. Use the
              Text Splitter component to chunk large documents before processing with models.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Consider fallback models</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Set up fallback paths in your flow to handle cases where the primary model might fail or timeout. This
              improves the robustness of your application.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Next steps</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Now that you understand model components, consider exploring these related topics:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/docs/components-prompts" className="text-primary hover:underline">
              Prompt Components
            </a>{" "}
            - Learn how to structure inputs to models
          </li>
          <li>
            <a href="/docs/components-embedding-models" className="text-primary hover:underline">
              Embedding Models
            </a>{" "}
            - Understand how to create vector representations of text
          </li>
          <li>
            <a href="/docs/components-agents" className="text-primary hover:underline">
              Agent Components
            </a>{" "}
            - Build systems that can reason and use tools
          </li>
          <li>
            <a href="/docs/configuration-api-keys" className="text-primary hover:underline">
              API Key Management
            </a>{" "}
            - Best practices for handling model provider credentials
          </li>
        </ul>
      </section>
    </div>
  )
}
