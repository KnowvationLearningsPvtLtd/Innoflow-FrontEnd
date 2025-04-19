"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"

export function RouterChainNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [routes, setRoutes] = useState(
    data.routes || [
      { condition: "contains(input, 'weather')", destination: "Weather Chain" },
      { condition: "contains(input, 'news')", destination: "News Chain" },
      { condition: "default", destination: "Default Chain" },
    ],
  )

  const addRoute = () => {
    setRoutes([...routes, { condition: "", destination: "" }])
  }

  const removeRoute = (index: number) => {
    setRoutes(routes.filter((_, i) => i !== index))
  }

  return (
    <div className="min-w-[240px] rounded-md border border-amber-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-amber">
      <div className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/20 text-xs text-amber-500">R</div>
        <span>{data.label || "Router Chain"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-xs text-white/70">Routes ({routes.length})</label>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-white/70 hover:bg-white/10 hover:text-white"
              onClick={addRoute}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-[150px] overflow-y-auto pr-1">
            {routes.map((route, index) => (
              <div key={index} className="rounded border border-white/10 bg-white/5 p-2 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/70">Route {index + 1}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 w-5 p-0 text-white/50 hover:bg-white/10 hover:text-white"
                    onClick={() => removeRoute(index)}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
                <Input
                  value={route.condition}
                  onChange={(e) => {
                    const newRoutes = [...routes]
                    newRoutes[index].condition = e.target.value
                    setRoutes(newRoutes)
                  }}
                  className="h-6 text-xs bg-transparent border-0 p-0 text-amber-400/80"
                  placeholder="Condition"
                />
                <Input
                  value={route.destination}
                  onChange={(e) => {
                    const newRoutes = [...routes]
                    newRoutes[index].destination = e.target.value
                    setRoutes(newRoutes)
                  }}
                  className="h-6 text-xs bg-transparent border-0 p-0 text-white/90"
                  placeholder="Destination"
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
        className="w-3 h-3 bg-amber-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-amber-500 border-2 border-black node-handle"
      />
    </div>
  )
}
