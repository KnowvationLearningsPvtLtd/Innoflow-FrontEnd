import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/docs/code-block"

export default function LangChainIntegrationPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <DocsBreadcrumb
        items={[
          { label: "Home", href: "/docs" },
          { label: "Integrations", href: "/docs/integrations-openai" },
          { label: "LangChain", href: "/docs/integrations-langchain" },
        ]}
      />

      <h1 className="text-4xl font-bold mt-6 mb-4 text-white">LangChain Integration</h1>

      <section className="mb-10">
        <p className="text-lg mb-4 text-gray-200">
          Innoflow provides deep integration with LangChain, allowing you to leverage its powerful abstractions and
          tools for building complex AI applications. This guide will help you use LangChain components within Innoflow.
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
            <h2 className="text-2xl font-semibold text-white">Setting up LangChain</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Innoflow installed and configured</li>
                <li>Basic familiarity with LangChain concepts</li>
                <li>API keys for any language models you plan to use</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Installation</h3>
              <p className="text-gray-300">
                Innoflow comes with LangChain pre-installed, but you can also install it separately:
              </p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <CodeBlock language="bash" code={`pip install langchain langchain-openai`} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Configuration</h3>
              <p className="text-gray-300">
                Set up your environment variables for any LLM providers you plan to use with LangChain:
              </p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <CodeBlock
                  language="bash"
                  code={`# Add to your .env file
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
HUGGINGFACEHUB_API_TOKEN=your_huggingface_token_here`}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Using LangChain Components</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Available Components</h3>
              <p className="text-gray-300">Innoflow supports the following LangChain components:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Chains</h4>
                  <p className="text-sm text-gray-400">Sequential, Router, Transform chains</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Memory</h4>
                  <p className="text-sm text-gray-400">Conversation, Buffer, Summary memory</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Agents</h4>
                  <p className="text-sm text-gray-400">ReAct, OpenAI Functions, Tool-using agents</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Tools</h4>
                  <p className="text-sm text-gray-400">Web search, calculators, custom tools</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Retrievers</h4>
                  <p className="text-sm text-gray-400">Vector stores, contextual compression</p>
                </div>
                <div className="rounded-lg border border-gray-800 p-4 bg-gray-900">
                  <h4 className="font-medium text-white">Document Loaders</h4>
                  <p className="text-sm text-gray-400">PDF, CSV, web page loaders</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Adding LangChain Nodes</h3>
              <p className="text-gray-300">To use LangChain components in your flow:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Drag the appropriate LangChain node from the sidebar to your canvas</li>
                <li>Configure the node with the required parameters</li>
                <li>Connect it to other nodes in your flow</li>
              </ol>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <h4 className="text-lg font-medium text-white mb-4">Common LangChain Nodes</h4>
                <div className="space-y-3">
                  <div className="p-3 border border-gray-700 rounded-md">
                    <p className="font-medium text-white">Sequential Chain</p>
                    <p className="text-sm text-gray-400">Chains multiple LLM calls together in sequence</p>
                  </div>
                  <div className="p-3 border border-gray-700 rounded-md">
                    <p className="font-medium text-white">Conversation Memory</p>
                    <p className="text-sm text-gray-400">Stores and retrieves conversation history</p>
                  </div>
                  <div className="p-3 border border-gray-700 rounded-md">
                    <p className="font-medium text-white">Agent</p>
                    <p className="text-sm text-gray-400">Autonomous agent that can use tools to complete tasks</p>
                  </div>
                  <div className="p-3 border border-gray-700 rounded-md">
                    <p className="font-medium text-white">Vector Store</p>
                    <p className="text-sm text-gray-400">Stores and retrieves vector embeddings for semantic search</p>
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
              <h3 className="text-xl font-medium text-white">Conversational Agent with Tools</h3>
              <p className="text-gray-300">
                A flow that creates a conversational agent with access to tools like web search and a calculator.
              </p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <img
                  src="/images/convo.jpg"
                  alt="Conversational Agent Flow"
                  className="w-full rounded-md mb-4"
                />
                <CodeBlock
                  language="python"
                  code={`from innoflow import Flow, TextInput, TextOutput
from innoflow.langchain import Agent, ConversationMemory, Tool

# Create a new flow
flow = Flow("Conversational Agent")

# Add nodes
text_input = TextInput(default="What's the weather in New York? And can you calculate 234 * 456?")
conversation_memory = ConversationMemory()
agent = Agent(
    llm="gpt-3.5-turbo",
    tools=["web-search", "calculator"],
    verbose=True
)
text_output = TextOutput()

# Connect nodes
flow.connect(text_input, agent)
flow.connect(conversation_memory, agent)
flow.connect(agent, text_output)
flow.connect(agent, conversation_memory)

# Run the flow
flow.run()`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Document QA with RAG</h3>
              <p className="text-gray-300">
                A flow that implements Retrieval Augmented Generation for answering questions about documents.
              </p>

              <div className="rounded-lg border border-gray-800 p-6 bg-gray-900">
                <img
                  src="/images/doc.jpg"
                  alt="Document QA Flow"
                  className="w-full rounded-md mb-4"
                />
                <CodeBlock
                  language="python"
                  code={`from innoflow import Flow, TextInput, TextOutput, FileInput
from innoflow.langchain import DocumentLoader, VectorStore, SequentialChain

# Create a new flow
flow = Flow("Document QA")

# Add nodes
file_input = FileInput(accept=".pdf,.txt,.docx")
document_loader = DocumentLoader()
vector_store = VectorStore(embedding_model="openai")
question_input = TextInput(default="What are the key points in this document?")
qa_chain = SequentialChain(
    chain_type="stuff",
    llm="gpt-4",
    verbose=True
)
text_output = TextOutput()

# Connect nodes
flow.connect(file_input, document_loader)
flow.connect(document_loader, vector_store)
flow.connect(vector_store, qa_chain, input_map={"vector_store": "retriever"})
flow.connect(question_input, qa_chain, input_map={"text": "question"})
flow.connect(qa_chain, text_output)

# Run the flow
flow.run()`}
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Advanced Techniques</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900">
            <h3 className="font-medium text-white">Custom Tools</h3>
            <p className="text-gray-300">Create custom tools for your agents by implementing the Tool interface:</p>
            <CodeBlock
              language="python"
              code={`from langchain.tools import BaseTool
from pydantic import BaseModel, Field

class CalculatorInput(BaseModel):
    expression: str = Field(description="Mathematical expression to evaluate")

class CalculatorTool(BaseTool):
    name = "calculator"
    description = "Useful for performing mathematical calculations"
    args_schema = CalculatorInput
    
    def _run(self, expression: str):
        try:
            return eval(expression)
        except Exception as e:
            return f"Error: {str(e)}"
            
    async def _arun(self, expression: str):
        return self._run(expression)`}
            />
          </div>

          <div className="p-4 rounded-lg border border-gray-800 bg-gray-900">
            <h3 className="font-medium text-white">Custom Chains</h3>
            <p className="text-gray-300">Build custom chains by combining existing chains or creating new ones:</p>
            <CodeBlock
              language="python"
              code={`from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

# Create a summarization chain
summary_prompt = PromptTemplate(
    input_variables=["text"],
    template="Summarize the following text:\n\n{text}\n\nSummary:"
)
summary_chain = LLMChain(
    llm=ChatOpenAI(temperature=0),
    prompt=summary_prompt
)

# Create an analysis chain
analysis_prompt = PromptTemplate(
    input_variables=["summary"],
    template="Analyze the key points in this summary:\n\n{summary}\n\nAnalysis:"
)
analysis_chain = LLMChain(
    llm=ChatOpenAI(temperature=0),
    prompt=analysis_prompt
)

# Combine them in Innoflow
from innoflow import Flow, TextInput, TextOutput
from innoflow.langchain import CustomChain

flow = Flow("Custom Chain Example")
text_input = TextInput()
custom_summary_chain = CustomChain(chain=summary_chain)
custom_analysis_chain = CustomChain(chain=analysis_chain)
text_output = TextOutput()

flow.connect(text_input, custom_summary_chain, input_map={"text": "text"})
flow.connect(custom_summary_chain, custom_analysis_chain, input_map={"text": "summary"})
flow.connect(custom_analysis_chain, text_output)`}
            />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Best Practices</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300">
          <li>
            Use the appropriate chain type for your use case (e.g., "stuff" for small documents, "map_reduce" for large
            ones)
          </li>
          <li>Implement proper error handling in custom tools and chains</li>
          <li>Set verbose=True during development to see detailed execution logs</li>
          <li>Use memory components to maintain context in conversational applications</li>
          <li>Consider using structured outputs with output parsers for more reliable results</li>
        </ul>
      </section>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary text-white hover:bg-primary/90">
          <Link href="/docs/components-vector-stores">Next: Vector Stores</Link>
        </Button>
        <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10">
          <Link href="/docs/integrations-huggingface">Previous: Hugging Face Integration</Link>
        </Button>
      </div>
    </div>
  )
}
