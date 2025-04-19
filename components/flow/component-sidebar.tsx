"use client"

import type React from "react"

import { useState } from "react"
import { Layers, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

type ComponentCategory = {
  id: string
  name: string
  components: {
    id: string
    name: string
    description: string
    icon: React.ReactNode
  }[]
}

export function ComponentSidebar() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")

  const categories: ComponentCategory[] = [
    {
      id: "inputs",
      name: "Inputs",
      components: [
        {
          id: "text-input",
          name: "Chat Input",
          description: "Get chat inputs from the Playground",
          icon: (
              <div className="flex h-6 w-6 items-center justify-center rounded bg-yellow-500/20 text-xs text-yellow-500">
              T
            </div>
          ),
        },
        {
          id: "file-input",
          name: "File Input",
          description: "Upload and process files",
          icon: (
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-500">
              F
            </div>
          ),
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
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-500">
              O
            </div>
          ),
        },
        {
          id: "chat-output",
          name: "Stream Output",
          description: "Stream responses to the Playground",
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-pink-500/20 text-xs text-pink-500">
              C
            </div>
          ),
        },
      ],
    },
    {
      id: "prompts",
      name: "Prompts",
      components: [
        {
          id: "prompt-template",
          name: "Prompt",
          description: "Create a prompt template with dynamic variables",
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-yellow-500/20 text-xs text-yellow-500">
              P
            </div>
          ),
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
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-teal-500/20 text-xs text-teal-500">
              AI
            </div>
          ),
        },
        {
          id: "huggingface",
          name: "HuggingFace",
          description: "Use models from HuggingFace",
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-cyan-500/20 text-xs text-cyan-500">
              HF
            </div>
          ),
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
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500/20 text-xs text-indigo-500">
              V
            </div>
          ),
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
          icon: (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-rose-500/20 text-xs text-rose-500">
              A
            </div>
          ),
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

  const handleCreateCustomComponent = () => {
    toast({
      title: "Coming Soon",
      description: "Custom component creation will be available soon!",
    })
  }

  return (
    <div className="w-64 border-r border-white/10 bg-black/90 flex flex-col h-full">
      {/* Add the Innoflow icon/header */}
      <div className="p-3 border-b border-white/10 flex items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="h-6 w-6 rounded-md bg-green-600 flex items-center justify-center">
            <Layers className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-semibold text-white">Innoflow</span>
        </Link>
      </div>

      <div className="p-3 flex items-center justify-between border-b border-white/10">
        <h3 className="font-medium text-white">Components</h3>
      </div>
      <div className="p-3 border-b border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
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
            <button className="mt-2 text-sm text-primary hover:underline" onClick={handleCreateCustomComponent}>
              Create custom component
            </button>
          </div>
        ) : (
          <Accordion type="multiple" defaultValue={filteredCategories.map((cat) => cat.id)} className="w-full">
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
                        className="flex cursor-grab items-center gap-2 rounded-md border border-white/10 bg-white/5 p-2 hover:border-primary/50 hover:bg-white/10 transition-all"
                        draggable
                        onDragStart={(e) => handleDragStart(e, component.id, component.name)}
                      >
                        {component.icon}
                        <div className="flex flex-col">
                          <span className="text-sm text-white">{component.name}</span>
                          <span className="text-xs text-white/50">{component.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
      <div className="border-t border-white/10 p-3">
        <button
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
          onClick={handleCreateCustomComponent}
        >
          New Custom Component
        </button>
      </div>
    </div>
  )
}
