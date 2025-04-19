"use client"

import { Handle, Position } from "reactflow"

export function TextSplitterNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  return (
    <div className="min-w-[240px] rounded-md border border-purple-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-purple">
      <div className="border-b border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-500">
          T
        </div>
        <span>{data.label || "Text Splitter"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Split Character</label>
          <input
            type="text"
            value={data.splitChar || ""}
            onChange={(e) => data.onChange({ splitChar: e.target.value })}
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500 border-2 border-black node-handle"
      />
    </div>
  )
}