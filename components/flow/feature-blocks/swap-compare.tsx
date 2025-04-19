"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, RefreshCw } from "lucide-react"

export function SwapCompare() {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <Card className="bg-[#121212] border-[#2a2a2a] text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Model</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative pt-6 pb-2">
          <div className="absolute top-0 left-0 w-full flex justify-between">
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-xs">A</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-xs">B</span>
            </div>
          </div>
          <Slider
            min={0}
            max={100}
            step={1}
            value={[sliderValue]}
            onValueChange={(value) => setSliderValue(value[0])}
            className="[&>span]:bg-purple-600"
          />
        </div>

        <div className="flex justify-center gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
          >
            <ArrowLeftRight className="h-4 w-4 mr-2" />
            Swap
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
