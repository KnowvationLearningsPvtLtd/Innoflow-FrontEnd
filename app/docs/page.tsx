import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Welcome to Innoflow", href: "/docs" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-4 text-black dark:text-white">Welcome to Innoflow</h1>

      <section className="mb-10">
        <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
          Innoflow is a new, visual framework for building multi-agent and RAG applications. It is open-source,
          Python-powered, fully customizable, and LLM and vector store agnostic.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Its intuitive interface allows for easy manipulation of AI building blocks, enabling developers to quickly
          prototype and turn their ideas into powerful, real-world solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Innoflow empowers developers to rapidly prototype and build AI applications with its user-friendly interface
          and powerful features. Whether you're a seasoned AI developer or just starting out, Innoflow provides the
          tools you need to bring your AI ideas to life.
        </p>
      </section>

      <section id="visual-flow-builder" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Visual flow builder</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Innoflow is an intuitive visual flow builder. This drag-and-drop interface allows developers to create complex
          AI workflows without writing extensive code. You can easily connect different components, such as prompts,
          language models, and data sources, to build sophisticated AI applications.
        </p>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 mb-6">
          <img
            src="/images/flow-builder.jpg"
            alt="Innoflow Visual Flow Builder"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The Innoflow visual editor makes it easy to create complex AI workflows with a simple drag-and-drop
            interface.
          </p>
        </div>
      </section>

      <section id="use-cases" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Use cases</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Craft intelligent chatbots</li>
          <li>Build document analysis systems</li>
          <li>Generate compelling content</li>
          <li>Orchestrate multi-agent applications</li>
        </ul>
      </section>

      <section id="community-and-support" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Community and support</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Join Innoflow's vibrant community of developers and AI enthusiasts. See the following resources to join
          discussions, share your projects, and get support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/KnowvationLearningsPvtLtd/InnoFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Contribute to Innoflow
          </a>
          <a
            href="https://discord.gg/innoflow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12h.01M15 12h.01M8.5 19H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-.5l-4 3v-3Z" />
            </svg>
            Innoflow Discord Server
          </a>
          <a
            href="https://twitter.com/innoflow_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            @innoflow_ai
          </a>
        </div>
      </section>

      <section id="get-started-with-innoflow" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Get started with Innoflow</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-primary text-white hover:bg-primary/90">
            <Link href="/docs/get-started-installation">Install Innoflow</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/docs/get-started-quickstart">Quickstart</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
