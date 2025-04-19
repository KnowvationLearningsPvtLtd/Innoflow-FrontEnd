import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"

export default function BlogWriterPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Sample Flows", href: "/docs" },
          { label: "Blog Writer", href: "/docs/blog-writer" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Blog Writer Flow</h1>

      <section className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Blog Writer flow is a specialized application that generates well-structured blog posts based on user-provided topics and parameters. This flow demonstrates how to create a content generation system with fine-grained control over the output format and style.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This flow allows users to specify a blog topic, target audience, tone, and desired length. It then generates a complete blog post with title, introduction, multiple sections, and a conclusion. The Blog Writer uses advanced prompt engineering techniques to ensure the content is well-structured and matches the specified parameters.
        </p>

        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 my-6">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Blog Writer Flow"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The Blog Writer flow with input parameters, prompt template, and structured output generation
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Key components</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Input Form</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Collects user specifications for the blog post, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Blog topic or main idea</li>
              <li>Target audience</li>
              <li>Tone (professional, casual, educational, etc.)</li>
              <li>Desired length (short, medium, long)</li>
              <li>Key points to include (optional)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Structure Planner</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A prompt template that creates an outline for the blog post, determining:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Catchy title</li>
              <li>Introduction approach</li>
              <li>Main sections (3-5 typically)</li>
              <li>Conclusion strategy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Content Generator</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A powerful language model (typically GPT-4o or Claude) that transforms the outline into a complete, well-written blog post.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Formatter</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ensures the output is properly formatted with headers, paragraphs, and potentially HTML or Markdown formatting.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Implementation steps</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">1. Create the input form</h3>
            <p className="text-gray-700 dark\
