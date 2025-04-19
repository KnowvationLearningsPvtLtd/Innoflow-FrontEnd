"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ComplexityControl() {
  const [temperature, setTemperature] = useState(0.5)
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini")

  return (
    <Card className="bg-[#121212] border-[#2a2a2a] text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Model</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-white/70">Model</label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#333] text-white">
              <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
              <SelectItem value="gpt-4o">GPT-4o</SelectItem>
              <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
              <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
              <SelectItem value="llama-3-70b">Llama 3 70B</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm text-white/70">Temperature</label>
            <span className="text-sm text-white/70">{temperature.toFixed(2)}</span>
          </div>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[temperature]}
            onValueChange={(value) => setTemperature(value[0])}
            className="[&>span]:bg-emerald-500"
          />
        </div>

        <div className="flex justify-between pt-2">
          <Button
            variant="outline"
            className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
          >
            Save
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
