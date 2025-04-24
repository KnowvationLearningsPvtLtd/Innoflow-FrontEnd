import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function OpenAIIntegrationPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Integrations", href: "/docs/integrations-openai" },
          { label: "OpenAI", href: "/docs/integrations-openai" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-white">OpenAI Integration</h1>

      <section className="mb-8">
        <p className="text-gray-300 mb-6">
          Innoflow provides seamless integration with OpenAI's powerful language models, allowing you to leverage
          state-of-the-art AI capabilities in your workflows.
        </p>
      </section>

      <section className="mb-8">
        <h2 id="setup" className="text-2xl font-semibold mb-4 text-white">Setup</h2>
        <p className="text-gray-300 mb-4">
          To use OpenAI models in your Innoflow projects, you'll need an OpenAI API key. Follow these steps to set up the
          integration:
        </p>

        <ol className="list-decimal list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Create an OpenAI account</span> - If you don't already have one,
            sign up at{" "}
            <a href="https://platform.openai.com/signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              platform.openai.com
            </a>
          </li>
          <li>
            <span className="font-medium text-white">Generate an API key</span> - Navigate to the API keys section in
            your OpenAI dashboard and create a new secret key
          </li>
          <li>
            <span className="font-medium text-white">Add the API key to Innoflow</span> - In your Innoflow project,
            navigate to Settings → Integrations → OpenAI and enter your API key
          </li>
        </ol>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Environment Variables</h3>
          <p className="text-gray-300 mb-4">
            You can also set your OpenAI API key as an environment variable:
          </p>
          <CodeBlock
            language="bash"
            code="OPENAI_API_KEY=your_api_key_here"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 id="available-models" className="text-2xl font-semibold mb-4 text-white">Available Models</h2>
        <p className="text-gray-300 mb-4">
          Innoflow supports all of OpenAI's language models, including:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Context Window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">gpt-4o</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Latest and most capable model</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">128K tokens</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">gpt-4o-mini</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Smaller, faster version of GPT-4o</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">128K tokens</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">gpt-3.5-turbo</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Fast and cost-effective model</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">16K tokens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="using-openai-in-flows" className="text-2xl font-semibold mb-4 text-white">Using OpenAI in Flows</h2>
        <p className="text-gray-300 mb-4">
          To use OpenAI models in your Innoflow projects:
        </p>

        <ol className="list-decimal list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Add an OpenAI component</span> - Drag the OpenAI component from the
            Models section of the component sidebar onto your canvas
          </li>
          <li>
            <span className="font-medium text-white">Configure the model</span> - Select the model, set the temperature,
            and configure other parameters as needed
          </li>
          <li>
            <span className="font-medium text-white">Connect inputs and outputs</span> - Connect the OpenAI component to
            input sources (like prompt templates) and output destinations
          </li>
        </ol>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Example: Basic Chat Completion</h3>
          <p className="text-gray-300 mb-4">
            Here's a simple example of using OpenAI for chat completion:
          </p>
          <CodeBlock
            language="javascript"
            code={`// Server Action example
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function generateResponse(prompt: string) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
    temperature: 0.7,
    maxTokens: 500,
  });
  
  return text;
}`}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 id="advanced-features" className="text-2xl font-semibold mb-4 text-white">Advanced Features</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">Streaming Responses</h3>
            <p className="text-gray-300 mb-2">
              OpenAI supports streaming responses, which can provide a more interactive user experience:
            </p>
            <CodeBlock
              language="javascript"
              code={`import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function streamResponse(prompt: string) {
  const stream = await streamText({
    model: openai("gpt-4o"),
    prompt,
    temperature: 0.7,
  });
  
  return stream;
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-white">Function Calling</h3>
            <p className="text-gray-300 mb-2">
              OpenAI models can call functions to perform actions or retrieve information:
            </p>
            <CodeBlock
              language="javascript"
              code={`import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function generateWithFunctions(prompt: string) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt,
    tools: [
      {
        name: "get_weather",
        description: "Get the current weather in a location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
          },
          required: ["location"],
        },
      }
    ],
  });
  
  return text;
}`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="best-practices" className="text-2xl font-semibold mb-4 text-white">Best Practices</h2>
        
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Use system messages</span> - Set clear instructions for the model
            using system messages to guide its behavior
          </li>
          <li>
            <span className="font-medium text-white">Optimize token usage</span> - Be mindful of context length limits
            and costs by keeping prompts concise
          </li>
          <li>
            <span className="font-medium text-white">Implement error handling</span> - Handle API errors gracefully to
            ensure your application remains responsive
          </li>
          <li>
            <span className="font-medium text-white">Cache responses</span> - For identical or similar queries, consider
            caching responses to reduce API calls
          </li>
        </ul>
      </section>
    </div>
  )
}
