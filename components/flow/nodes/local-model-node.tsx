"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"
import { Server, Settings } from "lucide-react"

export function LocalModelNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const [settings, setSettings] = useState({
    modelName: data.modelName || "llama3:latest",
    temperature: data.temperature || 0.7,
    endpoint: data.endpoint || "http://localhost:11434",
    contextWindow: data.contextWindow || 8192,
    maxTokens: data.maxTokens || 2048,
    gpuAcceleration: data.gpuAcceleration !== undefined ? data.gpuAcceleration : true,
    streamResponse: data.streamResponse !== undefined ? data.streamResponse : true
  })

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    if (data.onSettingsChange) {
      data.onSettingsChange({ ...settings, [key]: value })
    }
  }

  const popularModels = [
    { name: "llama3:latest", label: "Llama 3 (latest)" },
    { name: "llama3-8b:latest", label: "Llama 3 8B" },
    { name: "llama3-70b:latest", label: "Llama 3 70B" },
    { name: "mistral:latest", label: "Mistral (latest)" },
    { name: "phi3:latest", label: "Phi-3" },
    { name: "gemma:latest", label: "Gemma (latest)" },
    { name: "codellama:latest", label: "CodeLlama" }
  ]

  return (
    <div className="w-64 rounded-md border border-teal-500/40 bg-black/80 shadow-md backdrop-blur-sm">
      <div className="border-b border-teal-500/30 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
        🗄️
         {/*  <Server size={16} className="text-teal-400" /> */}
       <span>{data.label || "Local Model"}</span>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-teal-400 hover:text-teal-300"
        >
          <Settings size={14} />
        </button>
      </div>

      <div className="p-3 space-y-2">
        <div>
          <label className="text-xs text-white/70 block mb-1">Model Name</label>
          <Select 
            value={settings.modelName} 
            onValueChange={(value) => updateSetting("modelName", value)}
          >
            <SelectTrigger className="h-8 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select model or enter name" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              {popularModels.map(model => (
                <SelectItem key={model.name} value={model.name}>{model.label}</SelectItem>
              ))}
              <div className="px-2 pt-2 pb-1 text-xs text-white/50">Custom Model</div>
              <div className="px-2 pb-2">
                <Input
                  value={settings.modelName}
                  onChange={(e) => updateSetting("modelName", e.target.value)}
                  className="h-7 text-xs bg-black/30 border-white/10"
                  placeholder="model:tag"
                />
              </div>
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

        {expanded && (
          <>
            <div className="pt-1 pb-1">
              <label className="text-xs text-white/70 block mb-1">Endpoint URL</label>
              <Input
                value={settings.endpoint}
                onChange={(e) => updateSetting("endpoint", e.target.value)}
                className="h-7 text-xs bg-black/30 border-white/10"
                placeholder="http://localhost:11434"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs text-white/70">Max Tokens</label>
                <span className="text-xs text-white/70">{settings.maxTokens}</span>
              </div>
              <Slider
                min={128}
                max={8192}
                step={128}
                value={[settings.maxTokens]}
                onValueChange={(value) => updateSetting("maxTokens", value[0])}
                className="[&>span]:bg-teal-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-xs text-white/70">GPU Accel</label>
                <Toggle
                  pressed={settings.gpuAcceleration}
                  onPressedChange={(value) => updateSetting("gpuAcceleration", value)}
                  className="data-[state=on]:bg-teal-600 h-5 w-9"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-xs text-white/70">Stream</label>
                <Toggle
                  pressed={settings.streamResponse}
                  onPressedChange={(value) => updateSetting("streamResponse", value)}
                  className="data-[state=on]:bg-teal-600 h-5 w-9"
                />
              </div>
            </div>
          </>
        )}
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