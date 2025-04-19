"use client"

import { Handle, Position } from "reactflow"

export function VectorStoreNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  return (
    <div className="min-w-[240px] rounded-md border border-green-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-green">
      <div className="border-b border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-green-500/20 text-xs text-green-500">
          V
        </div>
        <span>{data.label || "Vector Store"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Store Name</label>
          <input
            type="text"
            value={data.storeName || ""}
            onChange={(e) => data.onChange({ storeName: e.target.value })}
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-green-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-green-500 border-2 border-black node-handle"
      />
    </div>
  )
}