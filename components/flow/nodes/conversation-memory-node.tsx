"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"

export function ConversationMemoryNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [maxTokens, setMaxTokens] = useState(data.maxTokens || 1000)
  const [memoryType, setMemoryType] = useState(data.memoryType || "buffer")
  const [memoryPreview, setMemoryPreview] = useState<string[]>([])

  useEffect(() => {
    // Generate shorter memory preview based on type
    let preview: string[] = []
    
    switch (memoryType) {
      case "buffer":
        preview = [
          "User: Hello there",
          "Assistant: Hi! How can I help today?",
          "User: Tell me about conversation memory",
          "Assistant: It helps me remember our chat history"
        ]
        break
      case "summary":
        preview = [
          "System: [SUMMARY] User asked about memory",
          "User: Do all AIs use the same memory?",
          "Assistant: No, there are different approaches"
        ]
        break
      case "vector":
        preview = [
          "Memory[0.92]: User asked about memory types",
          "Memory[0.87]: Discussion on token limits",
          "User: Vector memory helps with retrieval?",
          "Assistant: Yes, it enables semantic search"
        ]
        break
    }
    
    setMemoryPreview(preview)
  }, [memoryType])

  const handleMaxTokensChange = (value: number[]) => {
    setMaxTokens(value[0])
    if (data.onMaxTokensChange) {
      data.onMaxTokensChange(value[0])
    }
  }

  return (
    <div className="w-60 rounded-md border border-sky-500/30 bg-black/80 shadow-lg backdrop-blur-sm">
      <div className="border-b border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-500 flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-sky-500/20 text-xs text-sky-500">C</div>
        <span>Conversation Memory</span>
      </div>

      <div className="space-y-2 p-3">
        <div className="space-y-1">
          <div className="flex justify-between">
            <label className="text-xs text-white/70">Memory Type</label>
          </div>
          <select
            value={memoryType}
            onChange={(e) => setMemoryType(e.target.value)}
            className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
          >
            <option value="buffer">Buffer</option>
            <option value="summary">Summary</option>
            <option value="vector">Vector</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <label className="text-xs text-white/70">Max Tokens</label>
            <span className="text-xs text-white/70">{maxTokens}</span>
          </div>
          <Slider
            min={100}
            max={4000}
            step={100}
            value={[maxTokens]}
            onValueChange={handleMaxTokensChange}
            className="[&>span]:bg-sky-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">Memory Preview</label>
          <div className="rounded border border-white/10 bg-black/60 px-2 py-1 text-xs text-white/50 h-20 overflow-auto">
            {memoryPreview.map((line, index) => {
              if (line.startsWith("User:")) {
                return <div key={index} className="text-xs text-white/80">{line}</div>
              } else if (line.startsWith("Assistant:")) {
                return <div key={index} className="text-xs text-sky-400/80">{line}</div>
              } else if (line.startsWith("System:")) {
                return <div key={index} className="text-xs text-emerald-400/70 italic">{line}</div>
              } else if (line.startsWith("Memory[")) {
                return <div key={index} className="text-xs text-amber-400/70 pl-1">{line}</div>
              }
            })}
          </div>
        </div>
        
        <div className="text-xs text-white/50">
          {memoryType === "buffer" && "Stores history up to token limit"}
          {memoryType === "summary" && "Condenses history into summaries"}
          {memoryType === "vector" && "Indexes for semantic search"}
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-sky-500 border-2 border-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-sky-500 border-2 border-black"
      />
    </div>
  )
}