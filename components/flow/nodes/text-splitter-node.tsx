"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TextSplitterNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [splitterType, setSplitterType] = useState(data.splitterType || "chunk")
  const [chunkSize, setChunkSize] = useState(data.chunkSize || 512)
  const [overlap, setOverlap] = useState(data.overlap || 50)
  const [keepSeparator, setKeepSeparator] = useState(data.keepSeparator || false)
  const [stripWhitespace, setStripWhitespace] = useState(data.stripWhitespace || true)
  
  // Sync local state with data prop on initial render
  useEffect(() => {
    setChunkSize(data.chunkSize || 512)
    setOverlap(data.overlap || 50)
    setKeepSeparator(data.keepSeparator || false)
    setStripWhitespace(data.stripWhitespace || true)
    setSplitterType(data.splitterType || "chunk")
  }, [])
  
  const handleChange = (updates: Record<string, any>) => {
    if (data.onChange) {
      data.onChange({...updates})
    }
  }
  
  return (
    <div className="w-64 rounded-md border border-indigo-500/40 bg-black/80 shadow-lg backdrop-blur-sm">
      <div className="border-b border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500 flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-indigo-500/20 text-xs text-indigo-500">
          🔡 
        </div>
        <span>Text Splitter</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-indigo-400 hover:bg-indigo-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Text Splitter!') }}
          aria-label="Run Text Splitter"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-2 p-3">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Splitter Type</label>
          <select
            value={splitterType}
            onChange={(e) => {
              const newType = e.target.value
              setSplitterType(newType)
              handleChange({ splitterType: newType })
            }}
            className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
          >
            <option value="chunk">Chunk</option>
            <option value="character">Character</option>
            <option value="token">Token</option>
            <option value="markdown">Markdown</option>
            <option value="html">HTML</option>
            <option value="code">Code</option>
          </select>
        </div>

        {splitterType === "character" && (
          <div className="space-y-1">
            <label className="text-xs text-white/70">Separator</label>
            <input
              type="text"
              value={data.separator || "\n\n"}
              placeholder="\n\n"
              onChange={(e) => handleChange({ separator: e.target.value })}
              className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
            />
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <div className="flex justify-between">
              <label className="text-xs text-white/70">Chunk Size</label>
              <span className="text-xs text-white/70">{chunkSize}</span>
            </div>
            <Slider
              min={100}
              max={2000}
              step={50}
              value={[chunkSize]}
              onValueChange={(value) => {
                const newSize = value[0]
                setChunkSize(newSize)
                handleChange({ chunkSize: newSize })
              }}
              className="[&>span]:bg-indigo-500"
            />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <label className="text-xs text-white/70">Overlap</label>
              <span className="text-xs text-white/70">{overlap}</span>
            </div>
            <Slider
              min={0}
              max={200}
              step={10}
              value={[overlap]}
              onValueChange={(value) => {
                const newOverlap = value[0]
                setOverlap(newOverlap)
                handleChange({ overlap: newOverlap })
              }}
              className="[&>span]:bg-indigo-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-white/70">Keep Separator</label>
            <select
              value={keepSeparator ? "true" : "false"}
              onChange={(e) => {
                const newValue = e.target.value === "true"
                setKeepSeparator(newValue)
                handleChange({ keepSeparator: newValue })
              }}
              className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-white/70">Strip Whitespace</label>
            <select
              value={stripWhitespace ? "true" : "false"}
              onChange={(e) => {
                const newValue = e.target.value === "true"
                setStripWhitespace(newValue)
                handleChange({ stripWhitespace: newValue })
              }}
              className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        
        {splitterType === "token" && (
          <div className="space-y-1">
            <label className="text-xs text-white/70">Encoding Model</label>
            <select
              value={data.encodingModel || "cl100k_base"}
              onChange={(e) => handleChange({ encodingModel: e.target.value })}
              className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            >
              <option value="cl100k_base">cl100k_base (GPT-4)</option>
              <option value="p50k_base">p50k_base (GPT-3)</option>
              <option value="r50k_base">r50k_base (Davinci)</option>
            </select>
          </div>
        )}
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id="in"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-indigo-500 border-2 border-black"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-indigo-500 border-2 border-black"
      />
    </div>
  )
}