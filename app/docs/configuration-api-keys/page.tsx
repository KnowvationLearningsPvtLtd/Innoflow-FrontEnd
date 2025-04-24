import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { CodeBlock } from "@/components/docs/code-block"

export default function ApiKeysConfigPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Configuration", href: "/docs/configuration-environment-variables" },
          { label: "API Keys", href: "/docs/configuration-api-keys" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-8 text-white">API Keys Configuration</h1>

      <section className="mb-8">
        <p className="text-gray-300 mb-6">
          Innoflow integrates with various external services that require API keys for authentication. This guide explains how to configure and manage API keys securely in your Innoflow projects.
        </p>
      </section>

      <section className="mb-8">
        <h2 id="supported-services" className="text-2xl font-semibold mb-4 text-white">Supported Services</h2>
        <p className="text-gray-300 mb-4">
          Innoflow currently supports the following services that require API keys:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Environment Variable</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Key Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">OpenAI</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">OPENAI_API_KEY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">sk-...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Anthropic</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">ANTHROPIC_API_KEY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">sk-ant-...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Hugging Face</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">HUGGINGFACE_API_KEY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">hf_...</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Pinecone</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">PINECONE_API_KEY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">varies</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Chroma</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">CHROMA_API_KEY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">varies</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Supabase</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">SUPABASE_API_KEY</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="configuration-methods" className="text-2xl font-semibold mb-4 text-white">Configuration Methods</h2>
        <p className="text-gray-300 mb-4">
          There are two main ways to configure API keys in Innoflow:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">1. Environment Variables</h3>
            <p className="text-gray-300 mb-4">
              Set API keys as environment variables in your .env.local file or hosting platform:
            </p>
            <CodeBlock
              language="bash"
              code={`# External Service API Keys
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
HUGGINGFACE_API_KEY=hf_your-huggingface-key
PINECONE_API_KEY=your-pinecone-key
CHROMA_API_KEY=your-chroma-key
SUPABASE_API_KEY=your-supabase-key`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-white">2. UI Configuration</h3>
            <p className="text-gray-300 mb-4">
              Configure API keys through the Innoflow dashboard UI:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Navigate to Dashboard → Settings → Integrations</li>
              <li>Select the service you want to configure</li>
              <li>Enter your API key in the provided field</li>
              <li>Click Save to store your API key securely</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="accessing-api-keys" className="text-2xl font-semibold mb-4 text-white">Accessing API Keys</h2>
        <p className="text-gray-300 mb-4">
          Innoflow provides a structured API for accessing and managing API keys in your code:
        </p>

        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Using the API Keys Module</h3>
          <p className="text-gray-300 mb-4">
            Import and use the API keys module in your server-side code:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { getApiKey, hasApiKey, apiKeyEnvConfig } from "@/lib/config/api-keys";

// Check if an API key is configured
if (hasApiKey('openai')) {
  // Get the API key
  const openaiKey = getApiKey('openai');
  
  // Use the API key in your code
  // ...
  
  // Get authorization headers for API requests
  const headers = apiKeyEnvConfig.getAuthorizationHeader('openai');
  // headers = { 'Authorization': 'Bearer sk-...' }
}

// Check service status
const openaiStatus = apiKeyEnvConfig.getServiceStatus('openai');
// returns 'configured', 'missing', or 'invalid'
`}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 id="securing-api-keys" className="text-2xl font-semibold mb-4 text-white">Securing API Keys</h2>
        <p className="text-gray-300 mb-4">
          API keys provide access to external services and should be handled securely:
        </p>
        
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Never expose API keys in client-side code</span> - API keys should only be used in server-side code
          </li>
          <li>
            <span className="font-medium text-white">Don't commit API keys to version control</span> - Store API keys in environment variables or secure storage
          </li>
          <li>
            <span className="font-medium text-white">Implement key rotation</span> - Periodically rotate your API keys to minimize security risks
          </li>
          <li>
            <span className="font-medium text-white">Use scoped keys</span> - When possible, create API keys with the minimum permissions required
          </li>
        </ul>
        
        <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
          <h3 className="text-lg font-medium mb-2 text-white">Key Masking</h3>
          <p className="text-gray-300 mb-4">
            When displaying API keys in the UI, use masking to protect sensitive information:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { maskApiKey } from "@/lib/config/api-keys";

// Original key: sk-abcdefghijklmnopqrstuvwxyz
const maskedKey = maskApiKey(originalKey);
// Result: sk-ab**********yz
`}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 id="troubleshooting" className="text-2xl font-semibold mb-4 text-white">Troubleshooting</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white">Common Issues</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><span className="font-medium text-white">API key not recognized</span> - Ensure the key is correctly formatted and valid</li>
              <li><span className="font-medium text-white">Authentication errors</span> - Verify the key hasn't expired or been revoked</li>
              <li><span className="font-medium text-white">Rate limiting</span> - Check if you've exceeded the service's rate limits</li>
              <li><span className="font-medium text-white">Environment variable not loading</span> - Restart your development server after adding new environment variables</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-white">Validation</h3>
            <p className="text-gray-300 mb-4">
              Use the API key validation utilities to check for configuration issues:
            </p>
            <CodeBlock
              language="typescript"
              code={`import { getMissingRequiredApiKeys } from "@/lib/config/api-keys";

// Check for missing required API keys
const missingKeys = getMissingRequiredApiKeys();
if (missingKeys.length > 0) {
  console.error("Missing required API keys:", missingKeys);
  // Handle missing keys (e.g., show warning, disable features)
}
`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="best-practices" className="text-2xl font-semibold mb-4 text-white">Best Practices</h2>
        
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="font-medium text-white">Centralize key management</span> - Use the API keys configuration module for all services
          </li>
          <li>
            <span className="font-medium text-white">Implement fallbacks</span> - Design your application to gracefully handle missing or invalid API keys
          </li>
          <li>
            <span className="font-medium text-white">Error handling</span> - Add comprehensive error handling for API calls with clear error messages
          </li>
          <li>
            <span className="font-medium text-white">Key validation</span> - Validate API keys before using them, especially when keys are provided by users
          </li>
        </ul>
      </section>
    </div>
  );
}