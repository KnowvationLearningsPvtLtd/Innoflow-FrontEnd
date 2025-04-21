"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Database, Trash2 } from "lucide-react"

export function BufferMemoryNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [settings, setSettings] = useState({
    bufferSize: data.bufferSize || 5,
    memoryType: data.memoryType || "buffer",
    summarize: data.summarize !== undefined ? data.summarize : false,
    includeSystemMessages: data.includeSystemMessages !== undefined ? data.includeSystemMessages : true
  })

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    if (data.onSettingsChange) {
      data.onSettingsChange({ ...settings, [key]: value })
    }
  }

  const memoryContent = data.memoryContent || [
    { role: "user", content: "Message 1" },
    { role: "assistant", content: "Message 2" },
    { role: "user", content: "Message 3" },
    { role: "assistant", content: "Message 4" },
    { role: "user", content: "Message 5" }
  ]

  const displayedMemory = memoryContent.slice(0, settings.bufferSize)

  return (
    <div className="w-60 rounded-md border border-sky-500/40 bg-black/80 shadow-md backdrop-blur-sm">
      <div className="border-b border-sky-500/30 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database size={14} className="text-sky-400" />
          <span>{data.label || "Buffer Memory"}</span>
        </div>
        <button 
          className="text-sky-400/70 hover:text-sky-400 p-1 rounded" 
          title="Clear Memory"
          onClick={() => data.onClearMemory?.()}
        >
          <Trash2 size={14} />
        </button>
      </div>

      <div className="p-3 space-y-2">
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/70">Buffer Size</label>
            <span className="text-xs text-white/70">{settings.bufferSize} messages</span>
          </div>
          <Slider
            min={1}
            max={20}
            step={1}
            value={[settings.bufferSize]}
            onValueChange={(value) => updateSetting("bufferSize", value[0])}
            className="[&>span]:bg-sky-500"
          />
        </div>

        <div>
          <label className="text-xs text-white/70 block mb-1">Memory Type</label>
          <Select 
            value={settings.memoryType} 
            onValueChange={(value) => updateSetting("memoryType", value)}
          >
            <SelectTrigger className="h-7 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select memory type" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              <SelectItem value="buffer">Buffer Window</SelectItem>
              <SelectItem value="summary">Summarization</SelectItem>
              <SelectItem value="vector">Vector</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="flex items-center justify-between space-x-2">
            <label className="text-xs text-white/70">Summarize</label>
            <Switch
              checked={settings.summarize}
              onCheckedChange={(value) => updateSetting("summarize", value)}
              className="data-[state=checked]:bg-sky-600"
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <label className="text-xs text-white/70">System Msgs</label>
            <Switch
              checked={settings.includeSystemMessages}
              onCheckedChange={(value) => updateSetting("includeSystemMessages", value)}
              className="data-[state=checked]:bg-sky-600"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-white/70 block mb-1">Buffer Preview</label>
          <div className="rounded border border-white/10 bg-black/30 px-2 py-1 min-h-[60px] max-h-[90px] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-500/20 scrollbar-track-transparent">
            {displayedMemory.length > 0 ? (
              displayedMemory.map((msg, i) => (
                <div key={i} className={`text-xs py-0.5 ${msg.role === "user" ? "text-white/70" : "text-sky-400/80"}`}>
                  <span className="font-medium">{msg.role === "user" ? "User:" : "Assistant:"}</span> {msg.content}
                </div>
              ))
            ) : (
              <div className="text-xs text-white/40 p-1">No messages in memory</div>
            )}
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-sky-500 border border-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-sky-500 border border-black"
      />
    </div>
  )
}