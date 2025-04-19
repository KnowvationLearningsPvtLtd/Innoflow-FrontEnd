"use client"

import { Handle, Position } from "reactflow"

export function DocumentLoaderNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  return (
    <div className="min-w-[240px] rounded-md border border-blue-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-blue">
      <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-xs text-blue-500">
          D
        </div>
        <span>{data.label || "Document Loader"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Document Path</label>
          <input
            type="text"
            value={data.documentPath || ""}
            onChange={(e) => data.onChange({ documentPath: e.target.value })}
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
      />
    </div>
  )
}