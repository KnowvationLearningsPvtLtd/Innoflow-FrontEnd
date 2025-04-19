"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"

export function ConversationMemoryNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [maxTokens, setMaxTokens] = useState(data.maxTokens || 1000)

  return (
    <div className="min-w-[240px] rounded-md border border-sky-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-sky">
      <div className="border-b border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-sky-500/20 text-xs text-sky-500">C</div>
        <span>{data.label || "Conversation Memory"}</span>
      </div>

      <div className="space-y-3 p-4">
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
            onValueChange={(value) => setMaxTokens(value[0])}
            className="[&>span]:bg-sky-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">Memory Preview</label>
          <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[100px] overflow-auto">
            <div className="text-xs text-white/70">User: Hello</div>
            <div className="text-xs text-sky-400/80">Assistant: Hi there! How can I help you today?</div>
            <div className="text-xs text-white/70">User: What can you do?</div>
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-sky-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-sky-500 border-2 border-black node-handle"
      />
    </div>
  )
}
