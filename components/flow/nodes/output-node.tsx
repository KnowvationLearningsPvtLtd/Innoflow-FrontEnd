"use client"

import { useEffect, useState } from "react"
import { Handle, Position } from "reactflow"

export function OutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [isClient, setIsClient] = useState(false)
  const [outputFormat, setOutputFormat] = useState("text")
  const [showDropdown, setShowDropdown] = useState(false)
  const [outputPreview, setOutputPreview] = useState("Waiting for input...")

  // Output format options
  const formatOptions = ["Text", "JSON", "HTML", "Markdown"];

  useEffect(() => {
    setIsClient(true)
    
    // Initialize with data if available
    if (data.outputFormat) {
      setOutputFormat(data.outputFormat)
    }
  }, [])

  // Update preview when input data changes
  useEffect(() => {
    if (data.inputs && data.inputs.content) {
      let preview = data.inputs.content;
      
      // Format preview based on selected output format
      if (outputFormat.toLowerCase() === "json" && typeof preview === "string") {
        try {
          // Try to parse and format JSON for display
          const parsed = JSON.parse(preview)
          preview = JSON.stringify(parsed, null, 2).substring(0, 150) + (JSON.stringify(parsed).length > 150 ? "..." : "")
        } catch (e) {
          preview = "Invalid JSON content"
        }
      } else if (typeof preview === "string") {
        // Truncate long text previews
        preview = preview.substring(0, 150) + (preview.length > 150 ? "..." : "")
      }
      
      setOutputPreview(preview || "Empty content")
    } else {
      setOutputPreview("Waiting for input...")
    }
  }, [data.inputs, outputFormat])

  const handleFormatSelect = (format) => {
    setOutputFormat(format)
    setShowDropdown(false)
    
    // Update node data
    if (data.onChange) {
      data.onChange({ outputFormat: format })
    }
  }

  return (
    <div className="min-w-[240px] rounded-md border border-purple-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-purple">
      <div className="border-b border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-500">
          O
        </div>
        <span>{data.label || "Output"}</span>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-white/70">Output Preview</label>
            <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 min-h-[60px] max-h-[100px] overflow-auto">
              {outputPreview}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">Output Format</label>
            <div className="relative">
              <div 
                className="flex items-center justify-between rounded border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/50 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>{outputFormat}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-white/50 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M3 5L6 8L9 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 rounded border border-white/10 bg-black/90 shadow-md">
                  {formatOptions.map((format) => (
                    <div
                      key={format}
                      className="px-3 py-1.5 text-sm text-white/70 hover:bg-purple-500/20 cursor-pointer transition-colors"
                      onClick={() => handleFormatSelect(format)}
                    >
                      {format}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isClient && (
        <Handle
          type="target"
          position={Position.Top}
          id="in"
          isConnectable={isConnectable}
          className="w-3 h-3 bg-purple-500 border-2 border-black node-handle"
        />
      )}
    </div>
  )
}