"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

interface Template {
  id: string
  name: string
  description: string
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  image: string
}

interface TemplateGalleryProps {
  onSelectTemplate: (templateId: string, templateName: string) => void
}

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const templates: Template[] = [
    {
      id: "template-1",
      name: "Simple Chatbot",
      description: "A basic chatbot using OpenAI's GPT model",
      category: "chatbots",
      difficulty: "beginner",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-2",
      name: "Document Q&A",
      description: "Answer questions based on document content",
      category: "rag",
      difficulty: "intermediate",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-3",
      name: "Multi-Agent System",
      description: "Multiple agents working together to solve complex tasks",
      category: "agents",
      difficulty: "advanced",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-4",
      name: "Text Summarizer",
      description: "Summarize long documents automatically",
      category: "text-processing",
      difficulty: "beginner",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-5",
      name: "Data Analysis Assistant",
      description: "Analyze and visualize data with AI assistance",
      category: "data",
      difficulty: "intermediate",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-6",
      name: "Content Generator",
      description: "Generate blog posts, social media content, and more",
      category: "content",
      difficulty: "beginner",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-7",
      name: "Custom Knowledge Base",
      description: "Build a RAG system with your own knowledge base",
      category: "rag",
      difficulty: "intermediate",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: "template-8",
      name: "Blank Flow",
      description: "Start from scratch with an empty flow",
      category: "other",
      difficulty: "beginner",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  const categories = Array.from(new Set(templates.map((t) => t.category)))

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="py-4">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card
            key={template.id}
            className="h-52 border-white/10 bg-black/50 transition-colors hover:border-primary/50 hover:bg-white/5 cursor-pointer flex flex-col justify-between"
            onClick={() => onSelectTemplate(template.id, template.name)}
          >
            <CardHeader className="py-3">
              <CardTitle className="text-white text-lg">{template.name}</CardTitle>
              <CardDescription className="text-white/70 text-sm">{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="py-2 flex-1 flex items-center justify-center">
              {/* Optionally add an image or icon here if desired */}
            </CardContent>
            <CardFooter className="py-2">
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                  template.difficulty === "beginner"
                    ? "bg-green-500 text-green-900"
                    : template.difficulty === "intermediate"
                    ? "bg-yellow-500 text-yellow-900"
                    : "bg-red-500 text-red-900"
                }`}
              >
                {template.difficulty}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
