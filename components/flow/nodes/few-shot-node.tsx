"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus, Trash, Play } from "lucide-react"

export function FewShotNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [examples, setExamples] = useState(
    data.examples || [
      { input: "What is the capital of France?", output: "The capital of France is Paris." },
      { input: "Who wrote Romeo and Juliet?", output: "William Shakespeare wrote Romeo and Juliet." },
    ],
  )
  
  const [selectedExample, setSelectedExample] = useState("example-1")

  const addExample = () => {
    setExamples([...examples, { input: "", output: "" }])
  }

  const removeExample = (index: number) => {
    setExamples(examples.filter((_: any, i: number) => i !== index))
  }

  return (
    <div className="min-w-[240px] max-w-[320px] rounded-md border border-emerald-500/30 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/20 text-xs text-emerald-500">📋</div>
        <span>{data.label || "Few-Shot Examples"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-emerald-400 hover:bg-emerald-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Few-Shot!') }}
          aria-label="Run Few-Shot"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <Label className="text-xs text-white/70">Example Selection</Label>
          <Select value={selectedExample} onValueChange={setSelectedExample}>
            <SelectTrigger className="h-8 bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select example" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              {examples.map((_: any, index: number) => (
                <SelectItem key={index} value={`example-${index + 1}`}>Example {index + 1}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Label className="text-xs text-white/70">Examples ({examples.length})</Label>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={addExample}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs text-white/70">Preview</Label>
          <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[80px] overflow-auto">
            {examples.map((example: any, index: number) => (
              selectedExample === `example-${index + 1}` && (
                <div key={index} className="text-xs">
                  <div className="text-white/90 truncate">{example.input || "Input example..."}</div>
                  <div className="text-emerald-400/80 truncate mt-1">{example.output || "Output example..."}</div>
                </div>
              )
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-white/50">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full mr-1 bg-emerald-500"></div>
            <span>{examples.length} Examples</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
            onClick={() => removeExample(parseInt(selectedExample.split('-')[1]) - 1)}
          >
            <Trash className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-emerald-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-emerald-500 border-2 border-black node-handle"
      />
    </div>
  )
}