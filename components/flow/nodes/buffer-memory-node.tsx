"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"

export function BufferMemoryNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [bufferSize, setBufferSize] = useState(data.bufferSize || 5)

  return (
    <div className="min-w-[240px] rounded-md border border-violet-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-violet">
      <div className="border-b border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-violet-500/20 text-xs text-violet-500">
          B
        </div>
        <span>{data.label || "Buffer Memory"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="flex justify-between">
            <label className="text-xs text-white/70">Buffer Size</label>
            <span className="text-xs text-white/70">{bufferSize} messages</span>
          </div>
          <Slider
            min={1}
            max={20}
            step={1}
            value={[bufferSize]}
            onValueChange={(value) => setBufferSize(value[0])}
            className="[&>span]:bg-violet-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">Buffer Preview</label>
          <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[100px] overflow-auto">
            {Array.from({ length: Math.min(bufferSize, 5) }).map((_, i) => (
              <div key={i} className={`text-xs ${i % 2 === 0 ? "text-white/70" : "text-violet-400/80"}`}>
                {i % 2 === 0 ? "User: " : "Assistant: "}Message {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-violet-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-violet-500 border-2 border-black node-handle"
      />
    </div>
  )
}
