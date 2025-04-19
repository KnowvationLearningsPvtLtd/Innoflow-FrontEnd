"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash } from "lucide-react"

export function SequentialChainNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [steps, setSteps] = useState(data.steps || ["Process input", "Generate response", "Format output"])

  const addStep = () => {
    setSteps([...steps, "New step"])
  }

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index))
  }

  return (
    <div className="min-w-[240px] rounded-md border border-blue-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-blue">
      <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-xs text-blue-500">S</div>
        <span>{data.label || "Sequential Chain"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-xs text-white/70">Steps ({steps.length})</label>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={addStep}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded border border-white/10 bg-white/5 p-2 text-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20 text-xs text-blue-500">
                    {index + 1}
                  </div>
                  <span className="text-white/90">{step}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                  onClick={() => removeStep(index)}
                >
                  <Trash className="h-3 w-3" />
                </Button>
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
        className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
      />
    </div>
  )
}
