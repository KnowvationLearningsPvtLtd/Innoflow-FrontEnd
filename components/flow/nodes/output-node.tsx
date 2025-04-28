"use client"

import { useEffect, useState, useRef } from "react"
import { Handle, Position } from "reactflow"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [isClient, setIsClient] = useState(false)
  const [outputFormat, setOutputFormat] = useState("text")
  const [showDropdown, setShowDropdown] = useState(false)
  const [outputPreview, setOutputPreview] = useState("Waiting for input...")
  const [isNewData, setIsNewData] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  
  // Output format options
  const formatOptions = ["Text", "JSON", "HTML", "Markdown"];

  useEffect(() => {
    setIsClient(true)
    
    // Initialize with data if available
    if (data && data.outputFormat) {
      setOutputFormat(data.outputFormat)
    }
  }, [])

  // Update preview when input data changes
  useEffect(() => {
    if (data && data.inputs && data.inputs.content) {
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
      } else if (preview === null || preview === undefined) {
        preview = "Empty content"
      }
      
      // Only trigger animation if content has changed
      if (preview !== outputPreview) {
        setOutputPreview(preview)
        setIsNewData(true)
        
        // Reset animation trigger after animation completes
        setTimeout(() => setIsNewData(false), 600)
      }
    } else {
      setOutputPreview("Waiting for input...")
    }
  }, [data?.inputs, outputFormat])

  const handleFormatSelect = (format: string) => {
    setOutputFormat(format)
    setShowDropdown(false)
    
    // Update node data
    if (data && data.onChange) {
      data.onChange({ outputFormat: format })
    }
  }

  return (
    <div className="w-[240px] rounded-md border border-purple-500/40 bg-black/80 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-purple-500/20">
      <div className="border-b border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-500/20 text-xs text-purple-400 transition-transform duration-300 hover:rotate-6">
          📤
        </div>
        <span>{data?.label || "Output"}</span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-purple-400 hover:bg-purple-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run Output!') }}
          aria-label="Run Output"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-3 space-y-3">
        <div className="space-y-1">
          <label className="text-xs text-purple-400">Output Preview</label>
          <div 
            ref={previewRef}
            className={`rounded border ${isNewData ? 'border-purple-400/60' : 'border-white/10'} bg-white/5 px-3 py-2 text-sm text-white min-h-[60px] max-h-[100px] overflow-auto transition-all duration-300 ${isNewData ? 'bg-purple-500/10' : ''}`}
          >
            <div className={`transition-opacity duration-300 ${isNewData ? 'animate-pulse' : ''}`}>
              {outputPreview}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-purple-400">Output Format</label>
          <div className="relative">
            <div 
              className="flex items-center justify-between rounded border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 cursor-pointer hover:bg-purple-500/5 transition-colors duration-150"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{outputFormat}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-white/50 transition-transform duration-150 ease-in-out ${showDropdown ? 'rotate-180' : ''}`}
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
              <div className="absolute z-10 w-full mt-1 bg-black/95 border border-white/10 rounded shadow-lg animate-fadeIn">
                {formatOptions.map((format) => (
                  <div
                    key={format}
                    className="px-3 py-1.5 text-sm text-white/70 hover:bg-purple-500/10 cursor-pointer transition-colors duration-150"
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
      {isClient && (
        <Handle
          type="target"
          position={Position.Top}
          id="in"
          isConnectable={isConnectable}
          className="w-3 h-3 bg-purple-500 border-2 border-black transition-all duration-200 hover:scale-110"
        />
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 0.6s ease-in-out;
        }
      `}</style>
    </div>
  )
}