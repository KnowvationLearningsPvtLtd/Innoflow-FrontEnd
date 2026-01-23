import { NextResponse } from "next/server"

export type Project = {
  id: string
  name: string
  description: string
  updatedAt: string
  color: string
  type: "flow" | "component"
  folder: string
}

const projects: Project[] = [
  {
    id: "flow-1",
    name: "Basic Prompting",
    description: "Perform basic prompting with an OpenAI model.",
    updatedAt: "2 days ago",
    color: "from-purple-500/20 to-blue-500/20",
    type: "flow",
    folder: "AI Assistants",
  },
  {
    id: "flow-2",
    name: "Vector Store RAG",
    description: "Load your data for chat context with RAG.",
    updatedAt: "1 week ago",
    color: "from-blue-500/20 to-cyan-500/20",
    type: "flow",
    folder: "RAG Applications",
  },
  {
      id: "flow-3",
      name: "Simple Agent",
      description: "A simple but powerful starter agent.",
      updatedAt: "3 days ago",
      color: "from-emerald-500/20 to-teal-500/20",
      type: "flow",
      folder: "AI Assistants",
    },
    {
      id: "component-1",
      name: "Custom Prompt Template",
      description: "A reusable prompt template with variables.",
      updatedAt: "5 days ago",
      color: "from-amber-500/20 to-yellow-500/20",
      type: "component",
      folder: "Templates",
    },
    {
      id: "component-2",
      name: "PDF Processor",
      description: "Extract and process text from PDF documents.",
      updatedAt: "1 week ago",
      color: "from-rose-500/20 to-pink-500/20",
      type: "component",
      folder: "Data Processing",
    },
    {
      id: "flow-4",
      name: "Data Cleaner",
      description: "Clean and preprocess your datasets automatically.",
      updatedAt: "4 days ago",
      color: "from-green-500/20 to-lime-500/20",
      type: "flow",
      folder: "Data Processing",
    },
    {
      id: "flow-5",
      name: "PDF to Text Converter",
      description: "Extract text from PDF documents for further analysis.",
      updatedAt: "2 days ago",
      color: "from-pink-500/20 to-purple-500/20",
      type: "flow",
      folder: "Document Processing",
    },
    {
      id: "flow-6",
      name: "Customer Support Chatbot",
      description: "Automated chatbot for customer support.",
      updatedAt: "1 day ago",
      color: "from-blue-500/20 to-indigo-500/20",
      type: "flow",
      folder: "Chatbots",
    },
    {
      id: "flow-7",
      name: "Task Automation Bot",
      description: "Automate repetitive tasks with this workflow.",
      updatedAt: "6 hours ago",
      color: "from-yellow-500/20 to-orange-500/20",
      type: "flow",
      folder: "Automation",
    },
    {
      id: "template-1",
      name: "Q&A Bot Template",
      description: "A template for building question-answering bots.",
      updatedAt: "3 days ago",
      color: "from-cyan-500/20 to-blue-500/20",
      type: "component",
      folder: "Templates",
    },
    {
      id: "template-2",
      name: "Document Summarizer Template",
      description: "A template for summarizing long documents.",
      updatedAt: "5 days ago",
      color: "from-purple-500/20 to-pink-500/20",
      type: "component",
      folder: "Templates",
    },
    {
      id: "archived-1",
      name: "Old Data Pipeline",
      description: "An archived project for legacy data processing.",
      updatedAt: "2 months ago",
      color: "from-gray-500/20 to-gray-700/20",
      type: "flow",
      folder: "Archived",
    },
    {
      id: "archived-2",
      name: "Retired Chatbot",
      description: "A chatbot project that is no longer in use.",
      updatedAt: "1 month ago",
      color: "from-gray-400/20 to-gray-600/20",
      type: "flow",
      folder: "Archived",
    },
    {
      id: "shared-1",
      name: "Team Knowledge Base",
      description: "A shared RAG system for the whole team.",
      updatedAt: "2 weeks ago",
      color: "from-blue-400/20 to-blue-700/20",
      type: "flow",
      folder: "Team Projects",
    },
    {
      id: "shared-2",
      name: "Collaboration Dashboard",
      description: "Collaborative workflow for document review and feedback.",
      updatedAt: "5 days ago",
      color: "from-green-400/20 to-green-700/20",
      type: "flow",
      folder: "Collaboration",
    },
]

export async function GET() {
  return NextResponse.json(projects)
}
