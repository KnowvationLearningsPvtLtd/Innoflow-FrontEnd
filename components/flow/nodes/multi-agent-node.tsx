"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MultiAgentNode({ data, isConnectable, updateNodeData }: { 
  data: any; 
  isConnectable?: boolean;
  updateNodeData?: (id: string, data: any) => void;
}) {
  const [agents, setAgents] = useState(
    data.agents || [
      { name: "Researcher", role: "Finds information" },
      { name: "Writer", role: "Creates content" },
    ]
  )
  
  // Update parent flow data when agents change
  useEffect(() => {
    if (updateNodeData && data.id) {
      updateNodeData(data.id, { ...data, agents })
    }
  }, [agents])

  const addAgent = () => {
    setAgents([...agents, { name: "", role: "" }])
  }

  const removeAgent = (index: number) => {
    setAgents(agents.filter((_, i) => i !== index))
  }

  const updateAgent = (index: number, field: string, value: string) => {
    const newAgents = [...agents]
    newAgents[index] = { ...newAgents[index], [field]: value }
    setAgents(newAgents)
  }

  return (
    <div className="min-w-[240px] rounded-md border border-red-500/30 bg-black/80 shadow-lg backdrop-blur-sm">
      <div className="border-b border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-red-500/20 text-xs text-red-500">
          🤖
        </div>
        <span>{data.label || "Multi-Agent System"}</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Agents ({agents.length})</label>
          <div className="flex justify-end">
            <Button 
              variant="ghost" 
              size="sm"
              className="h-6 w-6 p-0 text-red-500 hover:bg-red-500/20" 
              onClick={addAgent}
            >
              <Plus size={14} />
            </Button>
          </div>
        </div>
        
        {agents.map((agent, index) => (
          <div key={index} className="space-y-1 bg-black/30 rounded border border-red-500/10 p-2 mb-2">
            <div className="flex items-center justify-between">
              <Input
                value={agent.name}
                onChange={(e) => updateAgent(index, "name", e.target.value)}
                className="h-7 text-xs bg-black/30 border-white/10"
                placeholder="Agent name"
              />
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-red-500 hover:bg-red-500/20 ml-1"
                onClick={() => removeAgent(index)}
              >
                <Trash size={12} />
              </Button>
            </div>
            <Input
              value={agent.role}
              onChange={(e) => updateAgent(index, "role", e.target.value)}
              className="h-7 text-xs bg-black/30 border-white/10"
              placeholder="Agent role"
            />
          </div>
        ))}
        
        <div className="space-y-1 pt-2 border-t border-red-500/20">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50">{agents.length} Agents Connected</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-red-500 hover:bg-red-500/20"
            >
              <Settings size={12} />
            </Button>
          </div>
        </div>
      </div>
      
      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-red-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-red-500 border-2 border-black node-handle"
      />
    </div>
  )
}