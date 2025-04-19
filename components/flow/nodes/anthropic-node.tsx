"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AnthropicNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [temperature, setTemperature] = useState(data.temperature || 0.7)
  const [model, setModel] = useState(data.model || "claude-3-opus")

  return (
    <div className="min-w-[240px] rounded-md border border-indigo-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-indigo">
      <div className="border-b border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-indigo-500/20 text-xs text-indigo-500">
          C
        </div>
        <span>{data.label || "Anthropic"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Model</label>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="h-7 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
              <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
              <SelectItem value="claude-2">Claude 2</SelectItem>
            </SelectContent>
          </Select>
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
            className="[&>span]:bg-indigo-500"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500 border-2 border-black node-handle"
      />
    </div>
  )
}
