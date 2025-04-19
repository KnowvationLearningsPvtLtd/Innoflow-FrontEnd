"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComplexityControl } from "./complexity-control"
import { SwapCompare } from "./swap-compare"
import { PythonCode } from "./python-code"

export function FeatureShowcase() {
  return (
    <Card className="bg-[#0a0a0a] border-[#2a2a2a] text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Ditch the Black Boxes</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <ComplexityControl />
          <div className="text-lg font-medium">Control the complexity</div>
          <p className="text-sm text-gray-400">
            Fine-tune model parameters and customize your AI workflows with precision.
          </p>
        </div>

        <div className="space-y-4">
          <SwapCompare />
          <div className="text-lg font-medium">Swap and compare</div>
          <p className="text-sm text-gray-400">
            Easily switch between different models and compare their performance in real-time.
          </p>
        </div>

        <div className="space-y-4">
          <PythonCode />
          <div className="text-lg font-medium">Python under the hood</div>
          <p className="text-sm text-gray-400">
            Access and customize the underlying Python code for maximum flexibility and control.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
