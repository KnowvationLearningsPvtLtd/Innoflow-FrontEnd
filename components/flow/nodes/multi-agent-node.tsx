"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"

export function MultiAgentNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [agents, setAgents] = useState(
    data.agents || [
      { name: "Researcher", role: "Finds information" },
      { name: "Writer", role: "Creates content" },
    ],
  )

  const addAgent = () => {
    setAgents([...agents, { name: "", role: "" }])
  }

  const removeAgent = (index: number) => {
    setAgents(agents.filter((_, i) => i !== index))
  }

  return (
    <div className="min-w-[240px] rounded-md border border-fuchsia-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-fuchsia">
      <div className="border-b border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-fuchsia-500/20 text-xs text-fuchsia-500">
          M
        </div>
        <span>{data.label || "Multi-Agent System"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-xs text-white/70">Agents ({agents.length})</label>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={addAgent}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
            {agents.map((agent, index) => (
              <div key={index} className="rounded border border-white/10 bg-white/5 p-2 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <Input
                    value={agent.name}
                    onChange={(e) => {
                      const newAgents = [...agents]
                      newAgents[index].name = e.target.value
                      setAgents(newAgents)
                    }}
                    className="h-6 text-xs bg-transparent border-0 p-0 text-white"
                    placeholder="Agent name"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                    onClick={() => removeAgent(index)}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
                <Input
                  value={agent.role}
                  onChange={(e) => {
                    const newAgents = [...agents]
                    newAgents[index].role = e.target.value
                    setAgents(newAgents)
                  }}
                  className="h-6 text-xs bg-transparent border-0 p-0 text-white/70"
                  placeholder="Agent role"
                />
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
        className="w-3 h-3 bg-fuchsia-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-fuchsia-500 border-2 border-black node-handle"
      />
    </div>
  )
}
