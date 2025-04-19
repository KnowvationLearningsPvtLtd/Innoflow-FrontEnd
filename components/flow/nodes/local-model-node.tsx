"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

export function LocalModelNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [temperature, setTemperature] = useState(data.temperature || 0.7)
  const [modelName, setModelName] = useState(data.modelName || "llama3:latest")

  return (
    <div className="min-w-[240px] rounded-md border border-emerald-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-emerald">
      <div className="border-b border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/20 text-xs text-emerald-500">
          L
        </div>
        <span>{data.label || "Local Model"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Model Name</label>
          <Input
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className="h-7 text-xs bg-black/30 border-white/10"
            placeholder="llama3:latest"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <label className="text-xs text-white/70">Temperature</label>
            <span className="text-xs text-white/70">{temperature.toFixed(2)}</span>
          </div>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[temperature]}
            onValueChange={(value) => setTemperature(value[0])}
            className="[&>span]:bg-emerald-500"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-emerald-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-emerald-500 border-2 border-black node-handle"
      />
    </div>
  )
}
