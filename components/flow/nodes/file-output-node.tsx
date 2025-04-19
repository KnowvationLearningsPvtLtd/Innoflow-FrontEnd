"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function FileOutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [fileType, setFileType] = useState(data.fileType || "pdf")
  const [fileName, setFileName] = useState(data.fileName || "output")

  return (
    <div className="min-w-[240px] rounded-md border border-orange-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-orange">
      <div className="border-b border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-orange-500/20 text-xs text-orange-500">
          F
        </div>
        <span>{data.label || "File Output"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">File Type</label>
          <Select value={fileType} onValueChange={setFileType}>
            <SelectTrigger className="h-7 text-xs bg-black/30 border-white/10">
              <SelectValue placeholder="Select file type" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="docx">DOCX</SelectItem>
              <SelectItem value="txt">TXT</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">File Name</label>
          <Input
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="h-7 text-xs bg-black/30 border-white/10"
            placeholder="output"
          />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-orange-500 border-2 border-black node-handle"
      />
    </div>
  )
}
