"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, ChevronUp, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HuggingFaceNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const [settings, setSettings] = useState({
    modelId: data.modelId || "mistralai/Mistral-7B-Instruct-v0.2",
    temperature: data.temperature || 0.7,
    maxLength: data.maxLength || 1024,
    topP: data.topP || 0.95,
    repetitionPenalty: data.repetitionPenalty || 1.1,
    useCache: data.useCache !== undefined ? data.useCache : true
  })

  const popularModels = [
    { id: "mistralai/Mistral-7B-Instruct-v0.2", label: "Mistral 7B Instruct v0.2" },
    { id: "meta-llama/Llama-2-13b-chat-hf", label: "Llama 2 13B Chat" },
    { id: "google/gemma-7b-it", label: "Gemma 7B Instruct" },
    { id: "HuggingFaceH4/zephyr-7b-beta", label: "Zephyr 7B Beta" },
    { id: "stabilityai/stablelm-2-zephyr-1_6b", label: "StableLM Zephyr 1.6B" }
  ]

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    if (data.onSettingsChange) {
      data.onSettingsChange({ ...settings, [key]: value })
    }
  }

  return (
    <div className="w-64 rounded-md border border-teal-500/40 bg-black/80 shadow-md backdrop-blur-sm relative">
      <div className="border-b border-teal-500/30 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          🗄️
          <span>{data.label || "HuggingFace"}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto p-1 w-7 h-7 text-teal-400 hover:bg-teal-500/10"
            onClick={() => { data.onRun ? data.onRun() : alert('Run HuggingFace Model!') }}
            aria-label="Run HuggingFace Model"
          >
            <Play className="w-4 h-4" />
          </Button>
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-teal-400 hover:text-teal-300"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      <div className="p-3 space-y-2">
        <div>
          <label className="text-xs text-white/70 block mb-1">Model ID</label>
          <Select 
            value={settings.modelId} 
            onValueChange={(value) => updateSetting("modelId", value)}
          >
            <SelectTrigger className="h-8 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select model or enter ID" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              {popularModels.map(model => (
                <SelectItem key={model.id} value={model.id}>{model.label}</SelectItem>
              ))}
              <div className="px-2 pt-2 pb-1 text-xs text-white/50">Custom Model ID</div>
              <div className="px-2 pb-2">
                <Input
                  value={settings.modelId}
                  onChange={(e) => updateSetting("modelId", e.target.value)}
                  className="h-7 text-xs bg-black/30 border-white/10"
                  placeholder="org/model-name"
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
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs text-white/70">Max Length</label>
                <span className="text-xs text-white/70">{settings.maxLength}</span>
              </div>
              <Slider
                min={64}
                max={4096}
                step={64}
                value={[settings.maxLength]}
                onValueChange={(value) => updateSetting("maxLength", value[0])}
                className="[&>span]:bg-teal-500"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs text-white/70">Top P</label>
                <span className="text-xs text-white/70">{settings.topP.toFixed(2)}</span>
              </div>
              <Slider
                min={0.05}
                max={1}
                step={0.05}
                value={[settings.topP]}
                onValueChange={(value) => updateSetting("topP", value[0])}
                className="[&>span]:bg-teal-500"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs text-white/70">Repetition Penalty</label>
                <span className="text-xs text-white/70">{settings.repetitionPenalty.toFixed(2)}</span>
              </div>
              <Slider
                min={1}
                max={2}
                step={0.05}
                value={[settings.repetitionPenalty]}
                onValueChange={(value) => updateSetting("repetitionPenalty", value[0])}
                className="[&>span]:bg-teal-500"
              />
            </div>
            
            <div className="flex items-center justify-between pt-1">
              <label className="text-xs text-white/70">Use Cache</label>
              <Switch
                checked={settings.useCache}
                onCheckedChange={(value) => updateSetting("useCache", value)}
                className="data-[state=checked]:bg-teal-500"
              />
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