"use client"

import { useState } from "react"
import { Handle, Position } from "reactflow"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DocumentLoaderNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [loaderType, setLoaderType] = useState(data.loaderType || "file")
  
  const handleChange = (updates: Record<string, any>) => {
    if (data.onChange) {
      data.onChange({...updates})
    }
  }
  
  return (
    <div className="w-64 rounded-md border border-indigo-500/40 bg-black/80 shadow-lg backdrop-blur-sm relative">
      <div className="border-b border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-500 flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-indigo-500/20 text-xs text-indigo-500">
          📥
        </div>
        <span>Document Loader</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-indigo-400 hover:bg-indigo-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Document Loader!') }}
          aria-label="Run Document Loader"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-2 p-3">
        <div className="space-y-1">
          <label className="text-xs text-white/70">Loader Type</label>
          <select
            value={loaderType}
            onChange={(e) => {
              setLoaderType(e.target.value)
              handleChange({ loaderType: e.target.value })
            }}
            className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
          >
            <option value="file">File</option>
            <option value="directory">Directory</option>
            <option value="url">URL</option>
            <option value="database">Database</option>
            <option value="api">API</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-white/70">
            {loaderType === "file" && "File Path"}
            {loaderType === "directory" && "Directory Path"}
            {loaderType === "url" && "URL"}
            {loaderType === "database" && "Connection String"}
            {loaderType === "api" && "API Endpoint"}
          </label>
          <input
            type="text"
            value={data.path || ""}
            placeholder={
              loaderType === "file" ? "/data/documents/report.pdf" :
              loaderType === "directory" ? "/data/documents/" :
              loaderType === "url" ? "https://example.com/docs" :
              loaderType === "database" ? "postgres://user:pass@localhost/db" :
              "https://api.example.com/documents"
            }
            onChange={(e) => handleChange({ path: e.target.value })}
            className="w-full rounded-md bg-black/30 border border-white/10 text-white text-xs px-2 py-1"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs text-white/70">File Type</label>
          <select
            value={data.fileType || "auto"}
            onChange={(e) => handleChange({ fileType: e.target.value })}
            className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            disabled={loaderType !== "file" && loaderType !== "directory"}
          >
            <option value="auto">Auto Detect</option>
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
            <option value="txt">TXT</option>
            <option value="csv">CSV</option>
            <option value="md">Markdown</option>
            <option value="html">HTML</option>
            <option value="json">JSON</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs text-white/70">Recursive</label>
            <select
              value={data.recursive ? "true" : "false"}
              onChange={(e) => handleChange({ recursive: e.target.value === "true" })}
              className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
              disabled={loaderType !== "directory"}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-white/70">Metadata</label>
            <select
              value={data.includeMetadata ? "true" : "false"}
              onChange={(e) => handleChange({ includeMetadata: e.target.value === "true" })}
              className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/90"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-2 h-2 bg-indigo-500 border-2 border-black"
      />
    </div>
  )
}