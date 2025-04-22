import Link from "next/link"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function BasicPromptingPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Starter Projects", href: "/docs" },
          { label: "Basic Prompting", href: "/docs/starter-projects-basic-prompting" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Basic Prompting</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Basic Prompting template is the simplest flow you can create with Innoflow. It demonstrates the
          fundamental concept of prompt engineering by connecting an input to a language model to generate a response.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">This template consists of three main components:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Input</strong>: Collects user queries or prompts
          </li>
          <li>
            <strong>OpenAI</strong>: Processes the input using a language model
          </li>
          <li>
            <strong>Output</strong>: Displays the generated response
          </li>
        </ul>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/images/open-ai.jpg"
            alt="Basic Prompting Flow"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Basic Prompting flow with Input, OpenAI Model, and Output components
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">When to use this template</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">The Basic Prompting template is ideal for:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Simple question-answering applications</li>
          <li>Text completion tasks</li>
          <li>Creative writing assistants</li>
          <li>Learning how to interact with language models</li>
          <li>Testing different prompt formulations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Creating the flow</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">1. Set up the components</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From your dashboard, create a new flow and add the following components:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Drag an <strong>Input</strong> component from the I/O section
              </li>
              <li>
                Drag an <strong>OpenAI</strong> component from the Models section
              </li>
              <li>
                Drag an <strong>Output</strong> component from the I/O section
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">2. Connect the components</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Connect the components by dragging from the output node of one component to the input node of the next:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Connect <strong>Input</strong> → <strong>OpenAI</strong>
              </li>
              <li>
                Connect <strong>OpenAI</strong> → <strong>Output</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">3. Configure the OpenAI component</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Click on the OpenAI component and configure it in the right sidebar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Set the model (e.g., gpt-4o-mini, gpt-4o)</li>
              <li>Adjust the temperature (0.0 for more deterministic responses, 1.0 for more creative responses)</li>
              <li>Add a system message to guide the model's behavior</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">Example system message:</p>
            <CodeBlock
              language="text"
              code="You are a helpful assistant that provides concise, accurate information to the user's questions."
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Testing the flow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">To test your Basic Prompting flow:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Click the "Playground" button in the top right corner</li>
          <li>Enter a prompt in the input field (e.g., "What is machine learning?")</li>
          <li>Press Enter or click the Send button</li>
          <li>The AI will process your input and display its response</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Enhancing the basic flow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          While the Basic Prompting template is simple, you can enhance it in several ways:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Add a{" "}
            <Link href="/docs/components-prompts" className="text-primary hover:underline">
              Prompt Template
            </Link>{" "}
            between the Input and OpenAI components to structure your prompts consistently
          </li>
          <li>
            Include a{" "}
            <Link href="/docs/components-memories" className="text-primary hover:underline">
              Conversation Memory
            </Link>{" "}
            to enable multi-turn conversations
          </li>
          <li>
            Add{" "}
            <Link href="/docs/components-embedding-models" className="text-primary hover:underline">
              Embeddings
            </Link>{" "}
            and{" "}
            <Link href="/docs/components-vector-stores" className="text-primary hover:underline">
              Vector Stores
            </Link>{" "}
            to create a retrieval-augmented generation (RAG) system
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Next steps</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Once you're comfortable with the Basic Prompting template, consider exploring these more advanced templates:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <Link href="/docs/starter-projects-vector-store-rag" className="text-primary hover:underline">
              Vector Store RAG
            </Link>{" "}
            - Build a system that answers questions based on your documents
          </li>
          <li>
            <Link href="/docs/starter-projects-simple-agent" className="text-primary hover:underline">
              Simple Agent
            </Link>{" "}
            - Create an agent that can use tools and make decisions
          </li>
          <li>
            <Link href="/docs/blog-writer" className="text-primary hover:underline">
              Blog Writer
            </Link>{" "}
            - Generate structured blog posts with customizable parameters
          </li>
        </ul>
      </section>
    </div>
  )
}
