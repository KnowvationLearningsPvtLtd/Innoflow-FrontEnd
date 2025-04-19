"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PythonCode() {
  return (
    <Card className="bg-[#121212] border-[#2a2a2a] text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Python under the hood</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="text-xs bg-[#1a1a1a] p-3 rounded-md overflow-auto text-emerald-400">
          {`def process_input(text):
    tokens = tokenize(text)
    return {
        "tokens": tokens,
        "length": len(tokens)
    }`}
        </pre>
      </CardContent>
    </Card>
  )
}
