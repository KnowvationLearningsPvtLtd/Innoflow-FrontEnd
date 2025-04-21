"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash, Check, X, Edit2 } from "lucide-react"

export function SequentialChainNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [steps, setSteps] = useState(data.steps || ["Process input", "Generate response", "Format output"])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editValue, setEditValue] = useState("")
  const [newStepEditing, setNewStepEditing] = useState(false)
  const [newStepValue, setNewStepValue] = useState("New step")

  const addStep = () => {
    setNewStepEditing(true)
    setNewStepValue("New step")
  }

  const confirmAddStep = () => {
    if (newStepValue.trim()) {
      setSteps([...steps, newStepValue.trim()])
      setNewStepEditing(false)
      setNewStepValue("New step")
      
      if (data.onStepsChange) {
        data.onStepsChange([...steps, newStepValue.trim()])
      }
    }
  }

  const cancelAddStep = () => {
    setNewStepEditing(false)
  }

  const removeStep = (index: number) => {
    const updatedSteps = steps.filter((_, i) => i !== index)
    setSteps(updatedSteps)
    
    if (data.onStepsChange) {
      data.onStepsChange(updatedSteps)
    }
  }

  const startEditing = (index: number) => {
    setEditingIndex(index)
    setEditValue(steps[index])
  }

  const saveEdit = () => {
    if (editingIndex !== null && editValue.trim()) {
      const updatedSteps = [...steps]
      updatedSteps[editingIndex] = editValue.trim()
      setSteps(updatedSteps)
      setEditingIndex(null)
      
      if (data.onStepsChange) {
        data.onStepsChange(updatedSteps)
      }
    }
  }

  const cancelEdit = () => {
    setEditingIndex(null)
  }

  const handleKeyPress = (e: React.KeyboardEvent, action: 'edit' | 'add') => {
    if (e.key === 'Enter') {
      action === 'edit' ? saveEdit() : confirmAddStep()
    } else if (e.key === 'Escape') {
      action === 'edit' ? cancelEdit() : cancelAddStep()
    }
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
            {!newStepEditing && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white/70 hover:bg-white/10 hover:text-white"
                onClick={addStep}
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded border border-white/10 bg-white/5 p-2 text-xs flex items-center justify-between"
              >
                {editingIndex === index ? (
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20 text-xs text-blue-500">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, 'edit')}
                      className="flex-1 bg-black/40 border border-blue-500/30 rounded px-2 py-1 text-white/90 focus:outline-none focus:border-blue-500/50"
                      autoFocus
                    />
                    <div className="flex items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 w-5 p-0 text-green-500/70 hover:bg-green-500/10 hover:text-green-500"
                        onClick={saveEdit}
                      >
                        <Check className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                        onClick={cancelEdit}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20 text-xs text-blue-500">
                        {index + 1}
                      </div>
                      <span className="text-white/90">{step}</span>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                        onClick={() => startEditing(index)}
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                        onClick={() => removeStep(index)}
                      >
                        <Trash className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {newStepEditing && (
              <div className="rounded border border-white/10 bg-white/5 p-2 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20 text-xs text-blue-500">
                    {steps.length + 1}
                  </div>
                  <input
                    type="text"
                    value={newStepValue}
                    onChange={(e) => setNewStepValue(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, 'add')}
                    className="flex-1 bg-black/40 border border-blue-500/30 rounded px-2 py-1 text-white/90 focus:outline-none focus:border-blue-500/50"
                    autoFocus
                  />
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 text-green-500/70 hover:bg-green-500/10 hover:text-green-500"
                      onClick={confirmAddStep}
                    >
                      <Check className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                      onClick={cancelAddStep}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
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