import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/docs/code-block"

export default function HuggingFaceIntegrationPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Integrations", href: "/docs/integrations" },
          { label: "Hugging Face", href: "/docs/integrations-huggingface" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-4 text-white">Hugging Face Integration</h1>

      <section className="mb-10">
        <p className="text-lg mb-4 text-gray-200">
          Innoflow provides seamless integration with Hugging Face's open-source models. This guide will help you set up
          and use Hugging Face models in your Innoflow projects.
        </p>
      </section>

      <Tabs defaultValue="setup" className="mb-10">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="setup">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Setting up Hugging Face</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>A Hugging Face account</li>
                <li>A Hugging Face API token (for accessing gated models)</li>
                <li>Innoflow installed and configured</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Getting your API Token</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>
                  Log in to your Hugging Face account at{" "}
                  <a
                    href="https://huggingface.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    huggingface.co
                  </a>
                </li>
                <li>Go to your profile settings</li>
                <li>Navigate to the "Access Tokens" section</li>
                <li>Create a new token with appropriate permissions</li>
                <li>Copy the token (make sure to store it securely)</li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Configuring Innoflow</h3>
              <p className="text-gray-300">
                Add your Hugging Face API token to Innoflow by setting it in your environment variables or directly in
                the Innoflow dashboard.
              </p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <h4 className="text-lg font-medium text-white mb-4">Option 1: Environment Variables</h4>
                <CodeBlock
                  language="bash"
                  code={`# Add to your .env file
HUGGINGFACE_API_TOKEN=your_token_here`}
                />
              </div>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <h4 className="text-lg font-medium text-white mb-4">Option 2: Innoflow Dashboard</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Go to Settings → API Keys in your Innoflow dashboard</li>
                  <li>Click "Add New API Key"</li>
                  <li>Select "Hugging Face" from the provider dropdown</li>
                  <li>Paste your API token and save</li>
                </ol>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Using Hugging Face Models</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Model Types</h3>
              <p className="text-gray-300">Innoflow supports various Hugging Face model types:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Text Generation</h4>
                  <p className="text-sm text-gray-400">LLMs like Llama, Mistral, Falcon</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Text Embeddings</h4>
                  <p className="text-sm text-gray-400">Sentence transformers for vector embeddings</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Text Classification</h4>
                  <p className="text-sm text-gray-400">Sentiment analysis, topic classification</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Image Generation</h4>
                  <p className="text-sm text-gray-400">Stable Diffusion and other image models</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Adding a Hugging Face Node</h3>
              <p className="text-gray-300">To use Hugging Face in your flow:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Drag a "Hugging Face" node from the Models section to your canvas</li>
                <li>Configure the node by entering the model ID (e.g., "mistralai/Mistral-7B-Instruct-v0.1")</li>
                <li>Set any model-specific parameters</li>
                <li>Connect input nodes (like prompts) and output nodes</li>
              </ol>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <h4 className="text-lg font-medium text-white mb-4">Model Parameters</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="font-medium text-white">Model ID</p>
                    <p className="text-sm text-gray-400">The Hugging Face model identifier</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-white">Temperature</p>
                    <p className="text-sm text-gray-400">Controls randomness (0.0-2.0)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-white">Max Length</p>
                    <p className="text-sm text-gray-400">Maximum length of generated text</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-white">Top K</p>
                    <p className="text-sm text-gray-400">Limits vocabulary for next token selection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="examples">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Example Flows</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Text Generation with Mistral</h3>
              <p className="text-gray-300">A basic flow that sends a prompt to Mistral-7B and displays the response.</p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Mistral Text Generation Flow"
                  className="w-full rounded-md mb-4"
                />
                <CodeBlock
                  language="python"
                  code={`from innoflow import Flow, TextInput, HuggingFace, TextOutput

# Create a new flow
flow = Flow("Mistral Generation")

# Add nodes
text_input = TextInput(default="Explain the theory of relativity in simple terms")
mistral_model = HuggingFace(
    model_id="mistralai/Mistral-7B-Instruct-v0.1",
    temperature=0.7,
    max_length=500
)
text_output = TextOutput()

# Connect nodes
flow.connect(text_input, mistral_model)
flow.connect(mistral_model, text_output)

# Run the flow
flow.run()`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Sentiment Analysis Pipeline</h3>
              <p className="text-gray-300">
                A flow that analyzes the sentiment of input text using a Hugging Face classification model.
              </p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Sentiment Analysis Flow"
                  className="w-full rounded-md mb-4"
                />
                <CodeBlock
                  language="python"
                  code={`from innoflow import Flow, TextInput, HuggingFaceClassification, TextOutput

# Create a new flow
flow = Flow("Sentiment Analysis")

# Add nodes
text_input = TextInput(default="I really enjoyed the movie, it was fantastic!")
sentiment_model = HuggingFaceClassification(
    model_id="distilbert-base-uncased-finetuned-sst-2-english",
    task="sentiment-analysis"
)
text_output = TextOutput()

# Connect nodes
flow.connect(text_input, sentiment_model)
flow.connect(sentiment_model, text_output)

# Run the flow
flow.run()`}
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Best Practices</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300">
          <li>Choose the right model size for your use case (smaller models are faster but less capable)</li>
          <li>Use quantized models (4-bit, 8-bit) for better performance on limited hardware</li>
          <li>Consider running models locally for privacy-sensitive applications</li>
          <li>Use the Hugging Face Inference API for models that require significant resources</li>
          <li>Properly format prompts according to each model's expected format</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900">
            <h3 className="font-medium text-white">Model Loading Issues</h3>
            <p className="text-gray-300">
              If a model fails to load, check if you have sufficient RAM/VRAM and consider using a smaller or quantized
              version.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900">
            <h3 className="font-medium text-white">Access to Gated Models</h3>
            <p className="text-gray-300">
              Some models require accepting terms of use on the Hugging Face website before they can be accessed.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900">
            <h3 className="font-medium text-white">Slow Inference</h3>
            <p className="text-gray-300">
              For faster inference, consider using smaller models, enabling GPU acceleration, or using the Inference
              API.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary text-white hover:bg-primary/90">
          <Link href="/docs/integrations-langchain">Next: LangChain Integration</Link>
        </Button>
        <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10">
          <Link href="/docs/integrations-openai">Previous: OpenAI Integration</Link>
        </Button>
      </div>
    </div>
  )
}
