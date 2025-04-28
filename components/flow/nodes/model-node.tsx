"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, Play } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function ModelNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [settings, setSettings] = useState({
    model: data.model || "gpt-4o-mini",
    temperature: data.temperature || 0.7,
    maxTokens: data.maxTokens || 1024,
    topP: data.topP || 1.0
  })

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    if (data.onSettingsChange) {
      data.onSettingsChange({ ...settings, [key]: value })
    }
  }

  return (
    <div className="w-64 rounded-md border border-green-500/40 bg-black/80 shadow-md backdrop-blur-sm">
      <div className="border-b border-teal-500/30 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-500 flex items-center gap-2">
        🗄️
        <span>{data.label || "OpenAI"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-teal-400 hover:bg-teal-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Model!') }}
          aria-label="Run Model"
        >
          <Play className="w-4 h-4" />
        </Button>
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
            <SelectContent className="bg-black/90 border-white/10 text-white max-h-48">
              <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
              <SelectItem value="gpt-4o">GPT-4o</SelectItem>
              <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
              <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
              <SelectItem value="llama-3-70b">Llama 3 70B</SelectItem>
              <SelectItem value="llama-3-8b">Llama 3 8B</SelectItem>
              <SelectItem value="mistral-medium">Mistral Medium</SelectItem>
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
            max={2}
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
            min={16}
            max={4096}
            step={16}
            value={[settings.maxTokens]}
            onValueChange={(value) => updateSetting("maxTokens", value[0])}
            className="[&>span]:bg-teal-500"
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