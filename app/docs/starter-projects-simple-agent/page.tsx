import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"
import Link from "next/link"

export default function SimpleAgentPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Starter Projects", href: "/docs" },
          { label: "Simple Agent", href: "/docs/starter-projects-simple-agent" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Simple Agent</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Simple Agent template enables you to create an AI system that can use tools, make decisions, and perform
          complex tasks. Unlike standard language model flows, agents can reason about how to solve a problem and take
          appropriate actions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          An agent combines a language model with tools and a decision-making framework. The Simple Agent template
          provides:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>An agent executor that manages the reasoning and action process</li>
          <li>A set of tools the agent can use to accomplish tasks</li>
          <li>A language model that powers the agent's reasoning</li>
          <li>Input and output components for interacting with the agent</li>
        </ul>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img src="/images/agent.jpg" alt="Simple Agent Flow" className="w-full rounded-md mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Simple Agent flow with Agent, Tools, and LLM components
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">When to use this template</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">The Simple Agent template is ideal for:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Creating assistants that can search the web for information</li>
          <li>Building systems that can perform calculations or data analysis</li>
          <li>Developing agents that can interact with APIs or databases</li>
          <li>Creating workflow automation tools that make decisions</li>
          <li>Any task that requires reasoning and the use of external tools</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Creating the flow</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">1. Set up the components</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From your dashboard, create a new flow and add these components:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Drag an <strong>Input</strong> component from the I/O section
              </li>
              <li>
                Drag an <strong>Agent</strong> component from the Agents section
              </li>
              <li>
                Drag an <strong>OpenAI</strong> component from the Models section
              </li>
              <li>
                Add several <strong>Tool</strong> components from the Agents section
              </li>
              <li>
                Drag an <strong>Output</strong> component from the I/O section
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">2. Connect the components</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Connect the components in this order:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Connect <strong>Input</strong> → <strong>Agent</strong>
              </li>
              <li>
                Connect <strong>OpenAI</strong> → <strong>Agent</strong>
              </li>
              <li>
                Connect each <strong>Tool</strong> → <strong>Agent</strong>
              </li>
              <li>
                Connect <strong>Agent</strong> → <strong>Output</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">3. Configure the Agent</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Click on the Agent component and configure it in the right sidebar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Set the agent type (e.g., "ReAct" for Reasoning and Action)</li>
              <li>Add agent instructions to guide its behavior</li>
              <li>Configure the maximum number of iterations</li>
              <li>Set the agent verbose mode to track reasoning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">4. Configure the Tools</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">For each Tool component, set up:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Tool name (e.g., "search", "calculator", "weather")</li>
              <li>Tool description (explain what the tool does and when to use it)</li>
              <li>Tool function (the Python code that implements the tool)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">Example search tool function:</p>
            <CodeBlock
              language="python"
              code={`async def search(query: str) -> str:
    """Search the web for information on a topic."""
    import requests
    
    url = f"https://api.search.com/search?q={query}"
    response = requests.get(url, headers={"Authorization": "Bearer " + API_KEY})
    results = response.json()
    
    return "\\n".join([result["snippet"] for result in results["items"][:3]])
`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">5. Configure the OpenAI component</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Set the model configuration:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Choose a powerful model (e.g., gpt-4o is recommended for agents)</li>
              <li>Set temperature (0.0-0.3 is usually best for reasoning tasks)</li>
              <li>Set maximum tokens as needed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Testing the agent</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">To test your Simple Agent flow:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Click the "Playground" button in the top right corner</li>
          <li>
            Enter a task that requires reasoning and tool use (e.g., "What is the current weather in New York and should
            I pack an umbrella for my trip tomorrow?")
          </li>
          <li>Press Enter or click the Send button</li>
          <li>Watch as the agent works through the problem, using tools as needed</li>
          <li>Review the final response, which should include both the answer and the reasoning process</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Common tools to add</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Consider adding these useful tools to your agent:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Search Tool</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Allows the agent to search the web for up-to-date information.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Calculator Tool</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Enables the agent to perform mathematical calculations.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Weather Tool</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Retrieves current weather information for specified locations.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Calendar Tool</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Allows checking dates, scheduling, and time-based calculations.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Database Tool</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Enables querying a database to retrieve or update information.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-medium text-black dark:text-white mb-2">Document Tool</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Retrieves information from your document knowledge base.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Agent troubleshooting</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If your agent isn't performing as expected, check these common issues:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Tool descriptions are unclear</strong>: Make sure each tool has a clear, specific description that
            explains when to use it
          </li>
          <li>
            <strong>Agent loops</strong>: If your agent keeps repeating actions, increase the maximum iterations and
            check if tools are returning useful information
          </li>
          <li>
            <strong>Model limitations</strong>: Some models may not be powerful enough for complex reasoning; try using
            a more capable model like gpt-4o
          </li>
          <li>
            <strong>Too many tools</strong>: Having too many tools can confuse the agent; start with a few essential
            tools and add more as needed
          </li>
          <li>
            <strong>Tool errors</strong>: Make sure your tool functions handle exceptions and return helpful error
            messages
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Advanced agent techniques</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To enhance your agent's capabilities, consider these advanced techniques:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Chain of Thought</strong>: Configure your agent to show its reasoning step by step
          </li>
          <li>
            <strong>Memory</strong>: Add conversation memory to enable the agent to remember previous interactions
          </li>
          <li>
            <strong>Plan-and-Execute</strong>: Use a planning agent to break down complex tasks into subtasks
          </li>
          <li>
            <strong>Multi-agent systems</strong>: Create specialized agents that work together to solve complex problems
          </li>
          <li>
            <strong>Reflection</strong>: Implement a reflection mechanism where the agent evaluates its own performance
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Next steps</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          After mastering the Simple Agent template, explore these more advanced agent flows:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <Link href="/docs/sequential-agent" className="text-primary hover:underline">
              Sequential Agent
            </Link>
            {" - A more structured agent workflow with defined steps"}
          </li>
          <li>
            <Link href="/docs/math-agent" className="text-primary hover:underline">
              Math Agent
            </Link>
            {" - Specialized agent for solving complex mathematical problems"}
          </li>
          <li>
            <Link href="/docs/travel-planning-agent" className="text-primary hover:underline">
              Travel Planning Agent
            </Link>
            {" - A practical example of an agent for travel planning tasks"}
          </li>
          <li>
            <Link href="/docs/agents-tool-calling-agent-component" className="text-primary hover:underline">
              Tool Calling Agent
            </Link>
            {" - Learn about the more advanced tool calling API for modern LLMs"}
          </li>
        </ul>
      </section>
    </div>
  )
}
