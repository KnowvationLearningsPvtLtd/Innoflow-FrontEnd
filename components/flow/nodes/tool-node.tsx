"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ToolNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [toolType, setToolType] = useState(data.toolType || "custom")
  const [description, setDescription] = useState(data.description || "This tool helps with...")

  return (
    <div className="min-w-[240px] rounded-md border border-red-500/30 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-red-500/20 text-xs text-red-500">
          🛠️
        </div>
        <span>{data.label || "Tool"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-red-500 hover:bg-red-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Tool!') }}
          aria-label="Run Tool"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Tool Type</label>
          <Select value={toolType} onValueChange={setToolType}>
            <SelectTrigger className="h-7 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select tool type" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              <SelectItem value="custom">Custom Tool</SelectItem>
              <SelectItem value="search">Web Search</SelectItem>
              <SelectItem value="calculator">Calculator</SelectItem>
              <SelectItem value="weather">Weather</SelectItem>
              <SelectItem value="database">Database Query</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">Description</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-16 min-h-0 text-xs bg-black/30 border-white/10 resize-none"
            placeholder="Describe what this tool does..."
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-red-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-red-500 border-2 border-black node-handle"
      />
    </div>
  )
}
