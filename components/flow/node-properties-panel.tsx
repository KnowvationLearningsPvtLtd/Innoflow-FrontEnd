"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface NodePropertiesPanelProps {
  nodeId: string
  nodeData: any
  onClose: () => void
  onUpdate: (nodeId: string, newData: any) => void
}

export function NodePropertiesPanel({ nodeId, nodeData, onClose, onUpdate }: NodePropertiesPanelProps) {
  const [data, setData] = useState(nodeData || {})
  const nodeType = nodeId.includes("-") ? nodeId.split("-")[0] : "unknown"

  useEffect(() => {
    setData(nodeData || {})
  }, [nodeData])

  const handleChange = (key: string, value: any) => {
    setData((prev: any) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSave = () => {
    onUpdate(nodeId, data)
  }

  const renderPropertiesForType = () => {
    switch (nodeType) {
      case "openai":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Select value={data.model || "gpt-4o-mini"} onValueChange={(value) => handleChange("model", value)}>
                <SelectTrigger id="model" className="border-white/10 bg-white/5">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
                  <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                  <SelectItem value="claude-3-opus">claude-3-opus</SelectItem>
                  <SelectItem value="claude-3-sonnet">claude-3-sonnet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="temperature">Temperature</Label>
                <span className="text-xs text-white/70">{data.temperature || 0.7}</span>
              </div>
              <Slider
                id="temperature"
                min={0}
                max={1}
                step={0.01}
                value={[data.temperature || 0.7]}
                onValueChange={(value) => handleChange("temperature", value[0])}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-white/50">
                <span>Precise</span>
                <span>Creative</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="systemMessage">System Message</Label>
              <Textarea
                id="systemMessage"
                value={data.systemMessage || ""}
                onChange={(e) => handleChange("systemMessage", e.target.value)}
                placeholder="You are a helpful assistant..."
                className="h-24 resize-none border-white/10 bg-white/5"
              />
            </div>
          </>
        )

      case "text-input":
      case "chat-input":
        return (
          <div className="space-y-2">
            <Label htmlFor="defaultText">Default Text</Label>
            <Textarea
              id="defaultText"
              value={(data.inputs && data.inputs.text) || ""}
              onChange={(e) => handleChange("inputs", { text: e.target.value })}
              placeholder="Enter default text..."
              className="h-24 resize-none border-white/10 bg-white/5"
            />
          </div>
        )

      case "prompt-template":
        return (
          <div className="space-y-2">
            <Label htmlFor="template">Template</Label>
            <Textarea
              id="template"
              value={data.template || ""}
              onChange={(e) => handleChange("template", e.target.value)}
              placeholder="Write a {{style}} about {{topic}}..."
              className="h-24 resize-none border-white/10 bg-white/5"
            />
            <p className="text-xs text-white/50">Use {{ variable }} syntax for dynamic variables</p>
          </div>
        )

      case "agent":
        return (
          <div className="space-y-2">
            <Label htmlFor="instructions">Agent Instructions</Label>
            <Textarea
              id="instructions"
              value={data.instructions || ""}
              onChange={(e) => handleChange("instructions", e.target.value)}
              placeholder="You are a helpful assistant that..."
              className="h-24 resize-none border-white/10 bg-white/5"
            />
          </div>
        )

      default:
        return <p className="text-white/50 text-sm">No editable properties available for this node type.</p>
    }
  }

  return (
    <div className="w-80 border-l border-white/10 bg-black/90 flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <h3 className="font-medium text-white">Node Properties</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white/70 hover:bg-white/10">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="label">Label</Label>
          <Input
            id="label"
            value={data.label || ""}
            onChange={(e) => handleChange("label", e.target.value)}
            className="border-white/10 bg-white/5"
          />
        </div>

        {renderPropertiesForType()}
      </div>

      <div className="border-t border-white/10 p-4">
        <Button className="w-full bg-primary text-white hover:bg-primary/90" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  )
}
