"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, CornerDownRight, GitBranch } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function RouterChainNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [routes, setRoutes] = useState(
    data.routes || [
      { condition: "contains(input, 'weather')", destination: "Weather Chain" },
      { condition: "contains(input, 'news')", destination: "News Chain" },
      { condition: "default", destination: "Default Chain" },
    ]
  )
  
  const [settings, setSettings] = useState({
    fallbackDefault: data.fallbackDefault !== undefined ? data.fallbackDefault : true,
    routeAll: data.routeAll !== undefined ? data.routeAll : false,
    conditionType: data.conditionType || "javascript"
  })

  const addRoute = () => {
    setRoutes([...routes, { condition: "", destination: "" }])
  }

  const removeRoute = (index: number) => {
    setRoutes(routes.filter((_, i) => i !== index))
  }

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    if (data.onSettingsChange) {
      data.onSettingsChange({ ...settings, [key]: value })
    }
  }

  const updateRoutes = (newRoutes: any[]) => {
    setRoutes(newRoutes)
    if (data.onRoutesChange) {
      data.onRoutesChange(newRoutes)
    }
  }

  const moveRoute = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === routes.length - 1)) return;
    
    const newRoutes = [...routes];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newRoutes[index], newRoutes[targetIndex]] = [newRoutes[targetIndex], newRoutes[index]];
    updateRoutes(newRoutes);
  }

  const conditionTypes = [
    { value: "javascript", label: "JavaScript" },
    { value: "regex", label: "RegEx" },
    { value: "llm", label: "LLM Classifier" }
  ]

  return (
    <div className="w-64 rounded-md border border-pink-500/40 bg-black/80 shadow-md backdrop-blur-sm">
      <div className="border-b border-pink-500/30 bg-pink-500/10 px-3 py-2 text-sm font-medium text-pink-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch size={14} className="text-pink-400" />
          <span>{data.label || "Router Chain"}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 text-pink-400/80 hover:text-pink-400 hover:bg-pink-500/10"
          onClick={addRoute}
          title="Add Route"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between text-xs mb-1">
          <label className="text-white/70">Condition Type</label>
          <Select 
            value={settings.conditionType} 
            onValueChange={(value) => updateSetting("conditionType", value)}
          >
            <SelectTrigger className="h-6 text-xs bg-black/30 border-white/10 w-24">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              {conditionTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center justify-between space-x-2">
            <label className="text-xs text-white/70">Use Default</label>
            <Switch
              checked={settings.fallbackDefault}
              onCheckedChange={(value) => updateSetting("fallbackDefault", value)}
              className="data-[state=checked]:bg-pink-600"
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <label className="text-xs text-white/70">Route All</label>
            <Switch
              checked={settings.routeAll}
              onCheckedChange={(value) => updateSetting("routeAll", value)}
              className="data-[state=checked]:bg-pink-600"
            />
          </div>
        </div>

        <div className="space-y-1 pt-1">
          <div className="flex items-center justify-between text-xs mb-1">
            <label className="text-white/70">Routes ({routes.length})</label>
          </div>

          <div className="space-y-1 max-h-[150px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-pink-500/20 scrollbar-track-transparent">
            {routes.map((route, index) => (
              <div key={index} className="rounded border border-white/10 bg-black/30 p-2 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <CornerDownRight size={12} className="mr-1 text-pink-500/50" />
                    <span className="text-white/70">Route {index + 1}</span>
                  </div>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => moveRoute(index, 'up')} 
                      disabled={index === 0}
                      className={`text-white/50 hover:text-white/80 ${index === 0 ? 'opacity-30' : ''}`}
                    >
                      ↑
                    </button>
                    <button 
                      onClick={() => moveRoute(index, 'down')} 
                      disabled={index === routes.length - 1}
                      className={`text-white/50 hover:text-white/80 ${index === routes.length - 1 ? 'opacity-30' : ''}`}
                    >
                      ↓
                    </button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 text-white/50 hover:bg-red-500/10 hover:text-red-400"
                      onClick={() => removeRoute(index)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Input
                  value={route.condition}
                  onChange={(e) => {
                    const newRoutes = [...routes]
                    newRoutes[index].condition = e.target.value
                    updateRoutes(newRoutes)
                  }}
                  className="h-6 mb-1 text-xs bg-black/20 border-white/5 text-pink-400/90 rounded-sm"
                  placeholder="Condition"
                />
                <Input
                  value={route.destination}
                  onChange={(e) => {
                    const newRoutes = [...routes]
                    newRoutes[index].destination = e.target.value
                    updateRoutes(newRoutes)
                  }}
                  className="h-6 text-xs bg-black/20 border-white/5 text-white/80 rounded-sm"
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
        className="w-2 h-2 bg-pink-500 border border-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-pink-500 border border-black"
      />
    </div>
  )
}