"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NodeData {
  label?: string;
  instructions?: string;
  tools?: string[];
  onInstructionsChange?: (instructions: string) => void;
  onToolsChange?: (tools: string[]) => void;
}

interface AgentNodeProps {
  data: NodeData;
  isConnectable?: boolean;
}

export function AgentNode({ data, isConnectable }: AgentNodeProps) {
  const [instructions, setInstructions] = useState(data.instructions || "You are a helpful assistant...")
  const [isEditingInstructions, setIsEditingInstructions] = useState(false)
  const [tools, setTools] = useState<string[]>(data.tools || ["Calculator"])
  const [newTool, setNewTool] = useState("")
  const [showAddToolInput, setShowAddToolInput] = useState(false)
  const [activeTool, setActiveTool] = useState<string | null>(null)
  
  // Calculator state
  const [calculatorInput, setCalculatorInput] = useState("")
  const [calculatorResult, setCalculatorResult] = useState("")

  useEffect(() => {
    setInstructions(data.instructions || "You are a helpful assistant...")
    if (data.tools) {
      setTools(data.tools)
    }
  }, [data])

  const handleInstructionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(e.target.value)
    if (data.onInstructionsChange) {
      data.onInstructionsChange(e.target.value)
    }
  }

  const handleSaveInstructions = () => {
    setIsEditingInstructions(false)
    if (data.onInstructionsChange) {
      data.onInstructionsChange(instructions)
    }
  }

  const handleAddTool = () => {
    if (newTool.trim()) {
      const updatedTools = [...tools, newTool.trim()]
      setTools(updatedTools)
      setNewTool("")
      setShowAddToolInput(false)
      if (data.onToolsChange) {
        data.onToolsChange(updatedTools)
      }
    }
  }

  const handleRemoveTool = (indexToRemove: number) => {
    const updatedTools = tools.filter((_: string, index: number) => index !== indexToRemove)
    setTools(updatedTools)
    if (data.onToolsChange) {
      data.onToolsChange(updatedTools)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTool()
    }
  }

  const handleToolClick = (tool: string) => {
    if (activeTool === tool) {
      setActiveTool(null)
    } else {
      setActiveTool(tool)
      if (tool === "Calculator") {
        setCalculatorInput("")
        setCalculatorResult("")
      }
    }
  }

  // Calculator functions
  const appendToCalculator = (value: string) => {
    setCalculatorInput(prev => prev + value)
  }

  const calculateResult = () => {
    try {
      // Using Function instead of eval for slightly better security
      const result = Function(`'use strict'; return (${calculatorInput})`)()
      setCalculatorResult(String(result))
    } catch (error) {
      setCalculatorResult("Error")
    }
  }

  const clearCalculator = () => {
    setCalculatorInput("")
    setCalculatorResult("")
  }

  return (
    <div className="min-w-[240px] rounded-md border border-red-500/40 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-rose-500/20 text-xs text-rose-500">🤖</div>
        <span>{data.label || "Agent"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-rose-400 hover:bg-rose-500/10"
          onClick={() => {}}
          aria-label="Run Agent"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-white/70 flex justify-between">
              <span>Agent Instructions</span>
              <button 
                onClick={() => setIsEditingInstructions(!isEditingInstructions)}
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                {isEditingInstructions ? "Cancel" : "Edit"}
              </button>
            </label>
            
            {isEditingInstructions ? (
              <div className="flex flex-col gap-2">
                <textarea
                  value={instructions}
                  onChange={handleInstructionsChange}
                  className="rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white min-h-[80px] resize-none focus:border-rose-500/50 focus:outline-none"
                  placeholder="Enter instructions for this agent..."
                  autoFocus
                />
                <button 
                  onClick={handleSaveInstructions}
                  className="self-end rounded bg-rose-500/20 px-3 py-1 text-xs text-rose-500 hover:bg-rose-500/30 transition-colors"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white min-h-[60px] max-h-[100px] overflow-auto">
                {instructions}
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-white/70">Tools</label>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool: string, index: number) => (
                <div 
                  key={index} 
                  className={`rounded-full px-2 py-1 text-xs flex items-center gap-1 group cursor-pointer ${
                    activeTool === tool 
                      ? "bg-rose-500/40 text-rose-300" 
                      : "bg-rose-500/20 text-rose-500 hover:bg-rose-500/30"
                  }`}
                  onClick={() => handleToolClick(tool)}
                >
                  {tool}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveTool(index);
                    }}
                    className="opacity-0 group-hover:opacity-100 ml-1 text-rose-400 hover:text-rose-300 transition-opacity"
                  >
                    ×
                  </button>
                </div>
              ))}
              
              {showAddToolInput ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={newTool}
                    onChange={(e) => setNewTool(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tool name"
                    className="rounded bg-white/10 px-2 py-1 text-xs text-white border border-white/20 focus:border-rose-500/50 focus:outline-none w-24"
                    autoFocus
                  />
                  <button 
                    onClick={handleAddTool}
                    className="text-rose-400 hover:text-rose-300"
                  >
                    ✓
                  </button>
                  <button 
                    onClick={() => {
                      setShowAddToolInput(false)
                      setNewTool("")
                    }}
                    className="text-white/50 hover:text-white/70"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAddToolInput(true)}
                  className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/50 hover:bg-white/15 hover:text-white/70 transition-colors"
                >
                  + Add Tool
                </button>
              )}
            </div>
          </div>
          
          {/* Calculator Tool Interface */}
          {activeTool === "Calculator" && (
            <div className="mt-3 border border-white/10 rounded bg-white/5 p-3 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/70">Calculator</span>
                <button 
                  onClick={() => setActiveTool(null)}
                  className="text-white/50 hover:text-white/70 text-xs"
                >
                  Close
                </button>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded p-2 text-right text-sm text-white mb-2">
                {calculatorInput || "0"}
                {calculatorResult && <div className="text-rose-400 text-xs">{calculatorResult}</div>}
              </div>
              
              <div className="grid grid-cols-4 gap-1">
                {["7", "8", "9", "/"].map(btn => (
                  <button 
                    key={btn} 
                    onClick={() => appendToCalculator(btn)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs py-1 rounded"
                  >
                    {btn}
                  </button>
                ))}
                {["4", "5", "6", "*"].map(btn => (
                  <button 
                    key={btn} 
                    onClick={() => appendToCalculator(btn)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs py-1 rounded"
                  >
                    {btn}
                  </button>
                ))}
                {["1", "2", "3", "-"].map(btn => (
                  <button 
                    key={btn} 
                    onClick={() => appendToCalculator(btn)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs py-1 rounded"
                  >
                    {btn}
                  </button>
                ))}
                {["0", ".", "=", "+"].map(btn => (
                  <button 
                    key={btn} 
                    onClick={() => btn === "=" ? calculateResult() : appendToCalculator(btn)}
                    className={`${btn === "=" ? "bg-rose-500/30 hover:bg-rose-500/50" : "bg-white/10 hover:bg-white/20"} text-white text-xs py-1 rounded`}
                  >
                    {btn}
                  </button>
                ))}
                <button 
                  onClick={clearCalculator}
                  className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-xs py-1 rounded col-span-4"
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-rose-500 border-2 border-black"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-rose-500 border-2 border-black"
      />
    </div>
  )
}