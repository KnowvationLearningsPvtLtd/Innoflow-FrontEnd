"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VectorStoreNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [dimensions, setDimensions] = useState(data.dimensions || 1536)
  const [similarity, setSimilarity] = useState(data.similarity || "cosine")
  
  const handleChange = (updates: Record<string, any>) => {
    if (data.onChange) {
      data.onChange({...updates})
    }
  }
  
  return (
    <div className="w-64 rounded-md border border-indigo-500/40 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500 flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-indigo-500/20 text-xs text-indigo-500">
          📚
        </div>
        <span>Vector Store</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-indigo-400 hover:bg-indigo-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Vector Store!') }}
          aria-label="Run Vector Store"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-2 p-3">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Store Name</label>
          <input
            type="text"
            value={data.storeName || ""}
            placeholder="my-vector-store"
            onChange={(e) => handleChange({ storeName: e.target.value })}
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs text-white/70">Model</label>
          <select
            value={data.model || "text-embedding-ada-002"}
            onChange={(e) => handleChange({ model: e.target.value })}
            className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
          >
            <option value="text-embedding-ada-002">Ada-002</option>
            <option value="text-embedding-3-small">Embedding 3 Small</option>
            <option value="text-embedding-3-large">Embedding 3 Large</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        
        <div className="flex space-x-2">
          <div className="space-y-1 w-1/2">
            <div className="flex justify-between">
              <label className="text-xs text-white/70">Dimensions</label>
              <span className="text-xs text-white/70">{dimensions}</span>
            </div>
            <Slider
              min={128}
              max={4096}
              step={128}
              value={[dimensions]}
              onValueChange={(value) => {
                setDimensions(value[0])
                handleChange({ dimensions: value[0] })
              }}
              className="[&>span]:bg-indigo-500"
            />
          </div>
          
          <div className="space-y-1 w-1/2">
            <label className="text-xs text-white/70">Similarity</label>
            <select
              value={similarity}
              onChange={(e) => {
                setSimilarity(e.target.value)
                handleChange({ similarity: e.target.value })
              }}
              className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            >
              <option value="cosine">Cosine</option>
              <option value="euclidean">Euclidean</option>
              <option value="dot">Dot Product</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-xs text-white/70">Chunk Size</label>
          <div className="flex space-x-2">
            <input
              type="number" 
              min={100}
              max={4000}
              value={data.chunkSize || 512}
              onChange={(e) => handleChange({ chunkSize: parseInt(e.target.value) })}
              className="w-1/2 rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
            />
            <select
              value={data.chunkOverlap || 0}
              onChange={(e) => handleChange({ chunkOverlap: parseInt(e.target.value) })}
              className="w-1/2 rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            >
              <option value="0">No Overlap</option>
              <option value="50">50 tokens</option>
              <option value="100">100 tokens</option>
              <option value="200">200 tokens</option>
            </select>
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-indigo-500 border-2 border-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-indigo-500 border-2 border-black"
      />
    </div>
  )
}