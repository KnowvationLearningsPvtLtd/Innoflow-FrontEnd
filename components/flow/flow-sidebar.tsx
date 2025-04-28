"use client"

import type React from "react"

import { useState } from "react"
import { Search, Home, Plus, GripVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface ComponentCategory {
  id: string
  name: string
  components: {
    id: string
    name: string
    description: string
    icon: string
  }[]
}

interface FlowSidebarProps {
  onAddComponent: (componentId: string, componentName: string) => void
}

export function FlowSidebar({ onAddComponent }: FlowSidebarProps) {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["inputs", "outputs"])

  const categories: ComponentCategory[] = [
    {
      id: "inputs",
      name: "Inputs",
      components: [
        {
          id: "text-input",
          name: "Chat Input",
          description: "Get chat inputs from the Playground",
          icon: "T",
        },
        {
          id: "file-input",
          name: "File Input",
          description: "Upload and process files",
          icon: "F",
        },
        {
          id: "api-input",
          name: "API Input",
          description: "Receive data from API calls",
          icon: "A",
        },
      ],
    },
    {
      id: "outputs",
      name: "Outputs",
      components: [
        {
          id: "text-output",
          name: "Chat Output",
          description: "Display a chat message in the Playground",
          icon: "O",
        },
        {
          id: "stream-output",
          name: "Stream Output",
          description: "Stream responses to the Playground",
          icon: "S",
        },
        {
          id: "file-output",
          name: "File Output",
          description: "Generate and download files",
          icon: "F",
        },
      ],
    },
    {
      id: "prompts",
      name: "Prompts",
      components: [
        {
          id: "prompt-template",
          name: "Prompt Template",
          description: "Create a prompt template with dynamic variables",
          icon: "P",
        },
        {
          id: "few-shot",
          name: "Few-Shot Examples",
          description: "Add examples to improve model performance",
          icon: "E",
        },
      ],
    },
    {
      id: "models",
      name: "Models",
      components: [
        {
          id: "openai",
          name: "OpenAI",
          description: "Generate text using OpenAI LLMs",
          icon: "AI",
        },
        {
          id: "anthropic",
          name: "Anthropic",
          description: "Use Claude models from Anthropic",
          icon: "C",
        },
        {
          id: "huggingface",
          name: "HuggingFace",
          description: "Use models from HuggingFace",
          icon: "HF",
        },
        {
          id: "local-model",
          name: "Local Model",
          description: "Run models locally with Ollama",
          icon: "L",
        },
      ],
    },
    {
      id: "data",
      name: "Data",
      components: [
        {
          id: "vector-store",
          name: "Vector Store",
          description: "Connect to a vector database",
          icon: "V",
        },
        {
          id: "document-loader",
          name: "Document Loader",
          description: "Load and process documents",
          icon: "D",
        },
        {
          id: "text-splitter",
          name: "Text Splitter",
          description: "Split text into chunks",
          icon: "S",
        },
      ],
    },
    {
      id: "agents",
      name: "Agents",
      components: [
        {
          id: "agent",
          name: "Agent",
          description: "Create an autonomous agent with tools",
          icon: "A",
        },
        {
          id: "tool",
          name: "Tool",
          description: "Create a custom tool for agents",
          icon: "T",
        },
        {
          id: "multi-agent",
          name: "Multi-Agent System",
          description: "Coordinate multiple agents",
          icon: "M",
        },
      ],
    },
    {
      id: "memory",
      name: "Memory",
      components: [
        {
          id: "conversation-memory",
          name: "Conversation Memory",
          description: "Store and retrieve conversation history",
          icon: "C",
        },
        {
          id: "buffer-memory",
          name: "Buffer Memory",
          description: "Simple buffer for recent messages",
          icon: "B",
        },
      ],
    },
    {
      id: "chains",
      name: "Chains",
      components: [
        {
          id: "sequential-chain",
          name: "Sequential Chain",
          description: "Chain multiple components together",
          icon: "S",
        },
        {
          id: "router-chain",
          name: "Router Chain",
          description: "Route to different chains based on input",
          icon: "R",
        },
      ],
    },
  ]

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      components: category.components.filter(
        (component) =>
          component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          component.description.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.components.length > 0)

  const handleDragStart = (e: React.DragEvent, componentId: string, componentName: string) => {
    e.dataTransfer.setData("application/reactflow", JSON.stringify({ type: componentId, name: componentName }))
    e.dataTransfer.effectAllowed = "move"
  }

  const handleAddComponent = (type: string, name: string) => {
    console.log("🎯 FlowSidebar handleAddComponent called with:", { type, name });
    if (onAddComponent) {
      console.log("📤 FlowSidebar calling onAddComponent with:", { type, name });
      onAddComponent(type, name);
    } else {
      console.warn("⚠️ FlowSidebar: onAddComponent prop is not defined");
    }
  };

  const getComponentColor = (categoryId: string) => {
    switch (categoryId) {
      case "inputs":
        return "bg-blue-500/20 text-blue-500 border-blue-500/30"
      case "outputs":
        return "bg-purple-500/20 text-purple-500 border-purple-500/30"
      case "prompts":
        return "bg-emerald-500/20 text-emerald-500 border-emerald-500/30"
      case "models":
        return "bg-teal-500/20 text-teal-500 border-teal-500/30"
      case "data":
        return "bg-indigo-500/20 text-indigo-500 border-indigo-500/30"
      case "agents":
        return "bg-rose-500/20 text-rose-500 border-rose-500/30"
      case "memory":
        return "bg-sky-500/20 text-sky-500 border-sky-500/30"
      case "chains":
        return "bg-pink-500/20 text-pink-500 border-pink-500/30"
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500/30"
    }
  }

  return (
    <div className="w-64 border-r border-white/10 bg-black/90 flex flex-col">
      {/* Dashboard link at the top */}
      <Link href="/dashboard" className="flex items-center gap-2 p-4 hover:bg-white/10 transition-colors">
        <Home className="h-5 w-5 text-white" />
        <span className="text-white font-semibold text-lg">Dashboard</span>
      </Link>
      <div className="p-3 border-b border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <Input
            type="text"
            placeholder="Search components..."
            className="w-full rounded-md border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/50 focus:border-primary/50 focus:outline-none focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {filteredCategories.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center p-4">
            <p className="text-sm text-white/50">No components found</p>
          </div>
        ) : (
          <Accordion
            type="multiple"
            value={expandedCategories}
            onValueChange={setExpandedCategories}
            className="w-full"
          >
            {filteredCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border-b-0">
                <AccordionTrigger className="py-2 px-3 hover:bg-white/5 hover:no-underline">
                  <span className="text-sm font-medium text-white/70">{category.name}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-2 px-2">
                  <div className="space-y-2">
                    {category.components.map((component) => (
                      <div
                        key={component.id}
                        className="group flex items-center rounded-md border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all"
                        draggable
                        onDragStart={(e) => handleDragStart(e, component.id, component.name)}
                      >
                        {/* Drag handle with dots */}
                        <div className="w-6 flex items-center justify-center cursor-grab active:cursor-grabbing">
                          <GripVertical className="h-3 w-3 text-white/30 group-hover:text-white/50" />
                        </div>
                        
                        {/* Component content */}
                        <div className="flex-1 flex items-center gap-2 p-2 min-w-0">
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded flex-shrink-0 ${getComponentColor(category.id)}`}
                          >
                            <span className="text-xs font-medium">{component.icon}</span>
                          </div>
                          <div className="flex flex-col justify-center min-w-0">
                            <span className="text-sm text-white font-medium truncate">{component.name}</span>
                            <span className="text-xs text-white/50 truncate">{component.description}</span>
                          </div>
                        </div>
                        
                        {/* Add button */}
                        <button
                          className="w-8 flex items-center justify-center hover:bg-white/10 text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                          onClick={() => {
                            console.log("Plus button clicked for:", component.id, component.name)
                            handleAddComponent(component.id, component.name)
                          }}
                          title="Add to flow"
                        >
                          <Plus className="h-14 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  )
}