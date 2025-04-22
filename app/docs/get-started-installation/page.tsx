import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function InstallationPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Get started", href: "/docs" },
          { label: "Install Innoflow", href: "/docs/get-started-installation" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-black dark:text-white">Install Innoflow</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Install Innoflow with pip or pipx</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Install with uv</h3>
            <CodeBlock language="bash" code="uv pip install innoflow" />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Install with pip</h3>
            <CodeBlock language="bash" code="python -m pip install innoflow" />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Install with pipx (Python 3.10)</h3>
            <CodeBlock language="bash" code="pipx install innoflow --python python3.10" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Run Innoflow</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Run with uv</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              To run Innoflow with uv, enter the following command.
            </p>
            <CodeBlock language="bash" code="uv run innoflow run" />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Run with pip</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              To run Innoflow with pip, enter the following command.
            </p>
            <CodeBlock language="bash" code="python -m innoflow run" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Prerequisites</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Python 3.10 or higher</li>
          <li>pip or pipx package manager</li>
          <li>For GPU acceleration: CUDA-compatible GPU (optional)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Manage Innoflow versions</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To update Innoflow to the latest version, use the following command:
        </p>
        <CodeBlock language="bash" code="pip install --upgrade innoflow" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Flowstax Innoflow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          For a fully managed cloud experience, you can use Flowstax Innoflow. This provides:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          <li>No installation required</li>
          <li>Automatic updates</li>
          <li>Scalable infrastructure</li>
          <li>Enterprise support</li>
        </ul>
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          Sign up for Flowstax Innoflow
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Common installation issues</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Python version compatibility</h3>
            <p className="text-gray-700 dark:text-gray-300">
              If you encounter errors related to Python version, ensure you're using Python 3.10 or higher. Some
              dependencies may not work with older versions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-black dark:text-white">Dependency conflicts</h3>
            <p className="text-gray-700 dark:text-gray-300">
              If you encounter dependency conflicts, consider using a virtual environment or pipx to isolate Innoflow's
              dependencies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
