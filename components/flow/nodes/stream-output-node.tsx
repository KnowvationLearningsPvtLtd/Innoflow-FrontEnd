"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StreamOutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [isStreaming, setIsStreaming] = useState(data.streaming !== false)
  const [bufferSize, setBufferSize] = useState(data.bufferSize || 1024)
  const [format, setFormat] = useState(data.format || "text")
  
  return (
    <div className="min-w-[240px] max-w-[320px] rounded-md border border-purple-500/30 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </div>
        <span>{data.label || "Stream Output"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-purple-400 hover:bg-purple-500/10"
          onClick={() => {}}
          aria-label="Run Stream Output"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="streaming" className="text-xs text-white/70">
            Enable Streaming
          </Label>
          <Switch 
            id="streaming" 
            checked={isStreaming} 
            onCheckedChange={setIsStreaming} 
          />
        </div>

        {isStreaming && (
          <>
            <div className="space-y-1">
              <Label className="text-xs text-white/70">Output Format</Label>
              <Select value={format} onValueChange={setFormat}>
                <SelectTrigger className="h-8 bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10 text-white">
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="binary">Binary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-white/70">Buffer Size</Label>
                <span className="text-xs text-white/50">{bufferSize}</span>
              </div>
              <Slider 
                value={[bufferSize]} 
                min={256} 
                max={8192} 
                step={256}
                onValueChange={(value) => setBufferSize(value[0])}
                className="py-1"
              />
            </div>
          </>
        )}

        <div className="space-y-1">
          <Label className="text-xs text-white/70">Preview</Label>
          <div className={`rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[80px] overflow-auto ${!isStreaming && "opacity-50"}`}>
            {isStreaming ? (
              <>
                <div className="flex space-x-1 mb-1">
                  <div className="h-2 w-2 rounded-full bg-purple-500/80 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-purple-500/80 animate-pulse delay-150"></div>
                  <div className="h-2 w-2 rounded-full bg-purple-500/80 animate-pulse delay-300"></div>
                </div>
                <div className="text-xs font-mono">
                  {format === "json" ? '{"status":"streaming"}' : format === "binary" ? "01001100 01001001 01010110 01000101" : "Live streaming..."}
                </div>
              </>
            ) : (
              <div className="text-xs">Output disabled</div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-white/50">
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-1 ${isStreaming ? "bg-green-500" : "bg-gray-500"}`}></div>
            <span>{isStreaming ? "Active" : "Inactive"}</span>
          </div>
          <div>{format === "json" ? "application/json" : format === "binary" ? "application/octet-stream" : "text/plain"}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500 border-2 border-black"
      />
    </div>
  )
}