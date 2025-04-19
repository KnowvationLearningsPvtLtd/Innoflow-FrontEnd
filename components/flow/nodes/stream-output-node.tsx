"use client"

import { Handle, Position } from "reactflow"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function StreamOutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  return (
    <div className="min-w-[240px] rounded-md border border-pink-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-pink">
      <div className="border-b border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-pink-500/20 text-xs text-pink-500">S</div>
        <span>{data.label || "Stream Output"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Label htmlFor="streaming" className="text-xs text-white/70">
              Enable Streaming
            </Label>
            <Switch id="streaming" defaultChecked={data.streaming !== false} />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">Preview</label>
          <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[100px] overflow-auto">
            <div className="flex space-x-1">
              <div className="h-2 w-2 rounded-full bg-pink-500/50 animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-pink-500/50 animate-pulse delay-150"></div>
              <div className="h-2 w-2 rounded-full bg-pink-500/50 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-pink-500 border-2 border-black node-handle"
      />
    </div>
  )
}
