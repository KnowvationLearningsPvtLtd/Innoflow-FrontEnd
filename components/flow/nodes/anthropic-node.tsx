"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"

export function AnthropicNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [settings, setSettings] = useState({
    model: data.model || "claude-3-opus",
    temperature: data.temperature || 0.7,
    maxTokens: data.maxTokens || 1024,
    topK: data.topK || 0.5,
    systemPrompt: data.systemPrompt || "",
    useExtendedThinking: data.useExtendedThinking || false
  })

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    if (data.onSettingsChange) {
      data.onSettingsChange({ ...settings, [key]: value })
    }
  }

  return (
    <div className="w-60 rounded-md border border-teal-500/40 bg-black/80 shadow-md backdrop-blur-sm">
      <div className="border-b border-teal-500/30 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-400 flex items-center gap-2">
        🗄️
        <span>{data.label || "Anthropic"}</span>
      </div>

      <div className="p-3 space-y-2">
        <div>
          <label className="text-xs text-white/70 block mb-1">Model</label>
          <Select 
            value={settings.model} 
            onValueChange={(value) => updateSetting("model", value)}
          >
            <SelectTrigger className="h-8 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
              <SelectItem value="claude-3.5-sonnet">Claude 3.5 Sonnet</SelectItem>
              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
              <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
              <SelectItem value="claude-3.7-sonnet">Claude 3.7 Sonnet</SelectItem>
              <SelectItem value="claude-2">Claude 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/70">Temperature</label>
            <span className="text-xs text-white/70">{settings.temperature.toFixed(2)}</span>
          </div>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[settings.temperature]}
            onValueChange={(value) => updateSetting("temperature", value[0])}
            className="[&>span]:bg-teal-500"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/70">Max Tokens</label>
            <span className="text-xs text-white/70">{settings.maxTokens}</span>
          </div>
          <Slider
            min={100}
            max={4096}
            step={100}
            value={[settings.maxTokens]}
            onValueChange={(value) => updateSetting("maxTokens", value[0])}
            className="[&>span]:bg-teal-500"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="text-xs text-white/70">Extended Thinking</label>
          <Toggle
            size="sm"
            pressed={settings.useExtendedThinking}
            onPressedChange={(value) => updateSetting("useExtendedThinking", value)}
            className="data-[state=on]:bg-teal-600 h-5 w-9"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-teal-500 border border-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-teal-500 border border-black"
      />
    </div>
  )
}