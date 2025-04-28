"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromptNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [template, setTemplate] = useState(data.template || "Write a response about {{topic}}")
  const [temperature, setTemperature] = useState(data.temperature || 0.7)
  const [maxTokens, setMaxTokens] = useState(data.maxTokens || 1024)

  useEffect(() => {
    setTemplate(data.template || "Write a response about {{topic}}")
    setTemperature(data.temperature || 0.7)
    setMaxTokens(data.maxTokens || 1024)
  }, [data.template, data.temperature, data.maxTokens])
  
  const handleChange = (updates: Record<string, any>) => {
    if (data.onChange) {
      data.onChange({ ...data, ...updates })
    }
  }
  
  const variables = template.match(/\{\{([^}]+)\}\}/g)?.map((v: string) => v.replace(/\{\{|\}\}/g, "")) || []

  return (
    <div className="min-w-[240px] rounded-md border border-emerald-500/40 bg-black/80 shadow-lg backdrop-blur-sm">
      <div className="border-b border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-500 flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500/20 text-xs text-emerald-500">
          ⌨️
        </div>
        <span>{data.label || "Prompt Template"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-emerald-400 hover:bg-emerald-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Prompt!') }}
          aria-label="Run Prompt"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-2 p-3">
        <div className="space-y-1">
          <label className="text-xs text-white/70" htmlFor="template-textarea">Template</label>
          <textarea
            id="template-textarea"
            value={template}
            onChange={(e) => {
              setTemplate(e.target.value)
              handleChange({ template: e.target.value })
            }}
            placeholder="Write a {{style}} about {{topic}}..."
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1 min-h-[60px] max-h-[100px]"
          />
        </div>

        {variables.length > 0 && (
          <div className="space-y-1">
            <label className="text-xs text-white/70">Variables</label>
            <div className="flex flex-wrap gap-2">
              {variables.map((variable: string, index: number) => (
                <div key={index} className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-500">
                  {variable}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-1">
          <label className="text-xs text-white/70" htmlFor="model-select">Model</label>
          <select
            id="model-select"
            value={data.model || "gpt-4"}
            onChange={(e) => handleChange({ model: e.target.value })}
            className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
          >
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-4-turbo">GPT-4 Turbo</option>
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="claude-3-opus">Claude 3 Opus</option>
            <option value="claude-3-sonnet">Claude 3 Sonnet</option>
          </select>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <label className="text-xs text-white/70">Temperature</label>
            <span className="text-xs text-white/70">{temperature}</span>
          </div>
          <Slider
            min={0}
            max={2}
            step={0.1}
            value={[temperature]}
            onValueChange={(value) => {
              const temp = value[0];
              setTemperature(temp);
              handleChange({ temperature: temp });
            }}
            className="[&>span]:bg-emerald-500"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs text-white/70" htmlFor="max-tokens-input">Max Tokens</label>
          <input
            id="max-tokens-input"
            type="number"
            min={1}
            max={4096}
            value={maxTokens}
            onChange={(e) => {
              const tokens = parseInt(e.target.value);
              setMaxTokens(tokens);
              handleChange({ maxTokens: tokens });
            }}
            placeholder="1024"
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-emerald-500 border-2 border-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-emerald-500 border-2 border-black"
      />
    </div>
  )
}