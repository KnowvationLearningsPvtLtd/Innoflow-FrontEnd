"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FileOutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [fileType, setFileType] = useState(data.fileType || "pdf")
  const [fileName, setFileName] = useState(data.fileName || "output")

  return (
    <div className="min-w-[240px] max-w-[320px] rounded-md border border-purple-500/30 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        </div>
        <span>{data.label || "File Output"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-purple-400 hover:bg-purple-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run File Output!') }}
          aria-label="Run File Output"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <Label className="text-xs text-white/70">File Type</Label>
          <Select value={fileType} onValueChange={(value) => {
            setFileType(value)
            if (data.onInputChange) {
              data.onInputChange('fileType', value)
            }
          }}>
            <SelectTrigger className="h-8 bg-white/5 border-white/10 text-white">
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
          <Label className="text-xs text-white/70">File Name</Label>
          <Input
            value={fileName}
            onChange={(e) => {
              setFileName(e.target.value)
              if (data.onInputChange) {
                data.onInputChange('fileName', e.target.value)
              }
            }}
            className="h-8 bg-white/5 border-white/10 text-white"
            placeholder="output"
          />
        </div>

        <div className="space-y-1">
          <Label className="text-xs text-white/70">Preview</Label>
          <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[80px] overflow-auto">
            <div className="flex space-x-1 mb-1">
              <div className="h-2 w-2 rounded-full bg-purple-500/80"></div>
              <div className="h-2 w-2 rounded-full bg-purple-500/80"></div>
              <div className="h-2 w-2 rounded-full bg-purple-500/80"></div>
            </div>
            <div className="text-xs font-mono">
              {fileType === "json" 
                ? `{"filename": "${fileName}.json"}`
                : fileType === "pdf"
                ? `Document: ${fileName}.pdf`
                : `File: ${fileName}.${fileType}`}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-white/50">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full mr-1 bg-purple-500"></div>
            <span>Ready</span>
          </div>
          <div>
            {fileType === "pdf" ? "application/pdf" : 
             fileType === "docx" ? "application/docx" :
             fileType === "json" ? "application/json" :
             fileType === "csv" ? "text/csv" : "text/plain"}
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500 border-2 border-black node-handle"
      />
    </div>
  )
}