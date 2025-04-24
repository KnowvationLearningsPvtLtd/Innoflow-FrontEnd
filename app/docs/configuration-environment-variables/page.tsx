import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function EnvironmentVariablesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Configuration", href: "/docs/configuration-environment-variables" },
          { label: "Environment Variables", href: "/docs/configuration-environment-variables" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-white">Environment Variables</h1>

      <section className="mb-8">
        <p className="text-gray-300 mb-6">
          Innoflow uses environment variables for configuration settings. This approach separates configuration from code, making your application more secure and easier to manage across different environments.
        </p>
      </section>

      <section className="mb-8">
        <h2 id="setup" className="text-2xl font-semibold mb-4 text-white">Setup</h2>
        <p className="text-gray-300 mb-4">
          To configure environment variables for your Innoflow projects:
        </p>

        <ol className="list-decimal list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Create a .env.local file</span> - In the root directory of your project, create a file named <code className="bg-gray-700 px-1 py-0.5 rounded text-white">.env.local</code>
          </li>
          <li>
            <span className="font-medium text-white">Add your environment variables</span> - Define your environment variables in the format <code className="bg-gray-700 px-1 py-0.5 rounded text-white">KEY=value</code>
          </li>
          <li>
            <span className="font-medium text-white">Restart your development server</span> - For the changes to take effect, restart your development server
          </li>
        </ol>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Example .env.local File</h3>
          <p className="text-gray-300 mb-4">
            Here's an example of a typical .env.local file for Innoflow:
          </p>
          <CodeBlock
            language="bash"
            code={`# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/flowdb"

# External Service API Keys
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
HUGGINGFACE_API_KEY=hf_your-huggingface-key

# Storage Configuration
S3_BUCKET_NAME=your-bucket-name
S3_ACCESS_KEY=your-s3-access-key
S3_SECRET_KEY=your-s3-secret-key
S3_REGION=us-west-1

# Feature Flags
NEXT_PUBLIC_ENABLE_VECTOR_STORES=true
NEXT_PUBLIC_ENABLE_MULTI_AGENT=true

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Email Service
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@yourdomain.com

# Rate Limiting
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_MS=60000 # 1 minute in milliseconds`}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 id="variable-types" className="text-2xl font-semibold mb-4 text-white">Variable Types</h2>
        <p className="text-gray-300 mb-4">
          Innoflow uses different types of environment variables:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Prefix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">NEXT_PUBLIC_</td>
                <td className="px-6 py-4 text-sm text-gray-300">Exposed to the browser, safe to use in client-side code</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">NEXT_PUBLIC_API_URL</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">(no prefix)</td>
                <td className="px-6 py-4 text-sm text-gray-300">Server-side only, not exposed to the client</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">DATABASE_URL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="accessing-variables" className="text-2xl font-semibold mb-4 text-white">Accessing Environment Variables</h2>
        <p className="text-gray-300 mb-4">
          Innoflow provides a structured way to access environment variables in your code:
        </p>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Server-Side Access</h3>
          <p className="text-gray-300 mb-4">
            Access environment variables in server components:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { env } from "@/lib/config/environment";

export async function serverAction() {
  // Access environment variables
  const apiUrl = env.API_URL;
  const databaseUrl = env.DATABASE_URL;
  
  console.log("API URL:", apiUrl);
  
  // Use environment variables in your code
  // ...
}`}
          />
        </div>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Client-Side Access</h3>
          <p className="text-gray-300 mb-4">
            Access public environment variables in client components:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { clientEnv } from "@/lib/config/environment";

export default function ClientComponent() {
  // Access client-safe environment variables
  const apiUrl = clientEnv.API_URL;
  const enableVectorStores = clientEnv.ENABLE_VECTOR_STORES;
  
  return (
    <div>
      <p>API URL: {apiUrl}</p>
      {enableVectorStores && (
        <div>Vector store features are enabled</div>
      )}
    </div>
  );
}`}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 id="deployment-environments" className="text-2xl font-semibold mb-4 text-white">Deployment Environments</h2>
        <p className="text-gray-300 mb-4">
          Different environments require different configurations:
        </p>

        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Development</span> - Use .env.local for local development
          </li>
          <li>
            <span className="font-medium text-white">Testing</span> - Use .env.test for testing environments
          </li>
          <li>
            <span className="font-medium text-white">Production</span> - Set environment variables in your hosting platform's dashboard
          </li>
        </ul>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Hosting Platform Configuration</h3>
          <p className="text-gray-300 mb-4">
            For production environments, configure environment variables in your hosting platform:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Vercel: Settings → Environment Variables</li>
            <li>Netlify: Site settings → Build & deploy → Environment</li>
            <li>AWS Amplify: App settings → Environment variables</li>
            <li>Heroku: Settings → Config Vars</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="best-practices" className="text-2xl font-semibold mb-4 text-white">Best Practices</h2>
        
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Never commit .env files</span> - Add .env* to your .gitignore to avoid exposing sensitive information
          </li>
          <li>
            <span className="font-medium text-white">Use a template</span> - Create a .env.example file with dummy values as a template for developers
          </li>
          <li>
            <span className="font-medium text-white">Validate required variables</span> - Check for required environment variables during application startup
          </li>
          <li>
            <span className="font-medium text-white">Use TypeScript</span> - Type your environment variables for better type safety and code completion
          </li>
        </ul>
      </section>
    </div>
  )
}