"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"

export function AgentNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [instructions, setInstructions] = useState(data.instructions || "You are a helpful assistant that...")

  useEffect(() => {
    setInstructions(data.instructions || "You are a helpful assistant that...")
  }, [data])

  return (
    <div className="min-w-[240px] rounded-md border border-red-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-red">
      <div className="border-b border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-rose-500/20 text-xs text-rose-500">A</div>
        <span>{data.label || "Agent"}</span>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-white/70">Agent Instructions</label>
            <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white min-h-[60px] max-h-[100px] overflow-auto">
              {instructions}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">Tools</label>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-rose-500/20 px-2 py-1 text-xs text-rose-500">Search</div>
              <div className="rounded-full bg-rose-500/20 px-2 py-1 text-xs text-rose-500">Calculator</div>
              <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/50">+ Add Tool</div>
            </div>
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-rose-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-rose-500 border-2 border-black node-handle"
      />
    </div>
  )
}
