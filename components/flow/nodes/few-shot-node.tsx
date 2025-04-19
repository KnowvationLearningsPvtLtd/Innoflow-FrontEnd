"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash } from "lucide-react"

export function FewShotNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [examples, setExamples] = useState(
    data.examples || [
      { input: "What is the capital of France?", output: "The capital of France is Paris." },
      { input: "Who wrote Romeo and Juliet?", output: "William Shakespeare wrote Romeo and Juliet." },
    ],
  )

  const addExample = () => {
    setExamples([...examples, { input: "", output: "" }])
  }

  const removeExample = (index: number) => {
    setExamples(examples.filter((_, i) => i !== index))
  }

  return (
    <div className="min-w-[240px] rounded-md border border-lime-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-lime">
      <div className="border-b border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm font-medium text-lime-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-lime-500/20 text-xs text-lime-500">E</div>
        <span>{data.label || "Few-Shot Examples"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-xs text-white/70">Examples ({examples.length})</label>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={addExample}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
            {examples.map((example, index) => (
              <div key={index} className="rounded border border-white/10 bg-white/5 p-2 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/70">Example {index + 1}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                    onClick={() => removeExample(index)}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
                <div className="text-white/90 truncate">{example.input || "Input example..."}</div>
                <div className="text-lime-400/80 truncate">{example.output || "Output example..."}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-lime-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-lime-500 border-2 border-black node-handle"
      />
    </div>
  )
}
