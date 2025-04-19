import Link from "next/link"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function QuickstartPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Get started", href: "/docs" },
          { label: "Quickstart", href: "/docs/get-started-quickstart" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Quickstart</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This quickstart guide will walk you through the process of creating your first Innoflow application. In just a
          few minutes, you'll have a working AI application built with the Innoflow visual interface.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Prerequisites</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Before you begin, make sure you have the following:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>
            Innoflow installed on your system (see{" "}
            <Link href="/docs/get-started-installation" className="text-primary hover:underline">
              Installation Guide
            </Link>
            )
          </li>
          <li>API keys for any language model providers you plan to use (e.g., OpenAI, Anthropic)</li>
          <li>Basic understanding of prompt engineering concepts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Step 1: Start Innoflow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Open your terminal or command prompt and run the following command:
        </p>
        <CodeBlock language="bash" code="innoflow run" />

        <p className="text-gray-700 dark:text-gray-300 mt-4">
          This will start the Innoflow server. By default, it will be available at{" "}
          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">http://localhost:3000</code>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Step 2: Create a new flow</h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            1. Open your browser and navigate to{" "}
            <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">http://localhost:3000</code>.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            2. Click on the "New Project" button in the top right corner.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            3. Give your project a name, such as "My First Chatbot" and click "Create".
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Innoflow New Project Screen"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">Creating a new project in the Innoflow interface</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Step 3: Build a simple chatbot</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Let's create a simple chatbot that can respond to user queries. You'll need to add and connect the following
          components:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">1. Add an Input component</h3>
            <p className="text-gray-700 dark:text-gray-300">
              From the left sidebar, drag and drop an "Input" component onto the canvas. This will be where the user's
              messages enter your flow.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">2. Add a Model component</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Drag and drop an "OpenAI" component from the Models section. This will be the language model that powers
              your chatbot.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">3. Add an Output component</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Drag and drop an "Output" component. This will display the AI's responses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">4. Connect the components</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Click and drag from the output handle of the Input component to the input handle of the OpenAI component,
              then from the output handle of the OpenAI component to the input handle of the Output component.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Innoflow Simple Chatbot Flow"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A simple chatbot flow with Input, OpenAI Model, and Output components
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Step 4: Configure the OpenAI component
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Click on the OpenAI component to select it. In the right sidebar, you can now configure it:
        </p>

        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            1. Add your OpenAI API key in the "API Key" field. (You can also set this in the global settings).
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            2. Select the model you want to use (e.g., gpt-4o-mini, gpt-4o, etc.).
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            3. Set the temperature (e.g., 0.7 for a balance of creativity and coherence).
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            4. Optionally, add a system message to guide your AI's behavior, such as:
          </p>
        </div>

        <CodeBlock
          language="text"
          code="You are a helpful assistant that provides informative and concise answers to the user's questions."
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Step 5: Test your chatbot</h2>

        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            1. Click the "Playground" button in the top right corner to open the testing interface.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            2. Type a message in the input field at the bottom and press Enter.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            3. You should see the AI's response appear in the chat window.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Innoflow Playground"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">Testing the chatbot in the Innoflow Playground</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Next steps</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Congratulations! You've built your first AI application with Innoflow. Here are some suggestions for what to
          explore next:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Add a{" "}
            <Link href="/docs/components-prompts" className="text-primary hover:underline">
              Prompt Template
            </Link>{" "}
            to format user inputs consistently
          </li>
          <li>
            Add a{" "}
            <Link href="/docs/components-memories" className="text-primary hover:underline">
              Conversation Memory
            </Link>{" "}
            to make your chatbot remember previous exchanges
          </li>
          <li>
            Try our{" "}
            <Link href="/docs/starter-projects-vector-store-rag" className="text-primary hover:underline">
              Vector Store RAG template
            </Link>{" "}
            to build a chatbot that can answer questions based on your documents
          </li>
          <li>
            Explore{" "}
            <Link href="/docs/components-agents" className="text-primary hover:underline">
              Agents
            </Link>{" "}
            to build more complex AI systems that can use tools and make decisions
          </li>
        </ul>
      </section>
    </div>
  )
}
