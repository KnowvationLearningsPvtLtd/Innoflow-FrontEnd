"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Send, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PlaygroundPanelProps {
  onClose?: () => void
}

export function PlaygroundPanel({ onClose }: PlaygroundPanelProps) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

  
    setTimeout(() => {
      const assistantMessage = {
        role: "assistant" as const,
        content: `This is a simulated response to your message: "${input}". In a real implementation, this would be connected to the flow you've designed.`,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-[#050505] relative">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-white">Playground</h3>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-[180px] h-8 text-sm border-white/10 bg-white/5">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
              <SelectItem value="gpt-4o">gpt-4o</SelectItem>
              <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
              <SelectItem value="claude-3-opus">claude-3-opus</SelectItem>
              <SelectItem value="claude-3-sonnet">claude-3-sonnet</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-white/70 hover:bg-white/10"
            onClick={() => {
              setMessages([])
              toast({
                title: "Conversation cleared",
                description: "All messages have been removed",
              })
            }}
          >
            Clear
          </Button>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white/70 hover:bg-white/10">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-6">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md text-center">
              <h3 className="text-xl font-medium text-white mb-2">Test your flow</h3>
              <p className="text-white/50">
                Send a message to interact with your AI workflow. Your flow will process the input and generate a
                response.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user" ? "bg-primary/20 text-white" : "bg-white/10 text-white"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-4 bg-white/10 text-white">
              <div className="flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-primary/50 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-primary/50 animate-pulse delay-150"></div>
                <div className="h-2 w-2 rounded-full bg-primary/50 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-white/10 p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 min-h-[60px] max-h-[200px] resize-none border border-white/10 bg-white/5 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-primary/50 focus:outline-none focus:ring-0"
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="h-[60px] w-[60px] bg-primary text-white hover:bg-primary/90 rounded-md"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
