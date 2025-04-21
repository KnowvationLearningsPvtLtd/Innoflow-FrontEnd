"use client"
import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"

export function InputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [inputText, setInputText] = useState("")
  const [isClient, setIsClient] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedMessageType, setSelectedMessageType] = useState("User Message")

  const messageTypes = ["User Message", "System Instruction", "API Request", "System Response"]

  useEffect(() => {
    setInputText((data.inputs && data.inputs.text) || "")
    setIsClient(true)
  }, [data])

  const handleTextChange = (e) => {
    const newText = e.target.value
    setInputText(newText)
    
    // Update the node data to persist changes
    if (data.onInputChange) {
      data.onInputChange('text', newText)
    }
  }

  const selectMessageType = (type) => {
    setSelectedMessageType(type)
    setShowDropdown(false)
    
    // Update the node data to persist changes
    if (data.onInputChange) {
      data.onInputChange('messageType', type)
    }
  }

  return (
    <div className="min-w-[240px] rounded-md border border-blue-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-blue">
      <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-xs text-blue-500">T</div>
        <span>{data.label || "Input"}</span>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-white/70">Text</label>
            <textarea
              value={inputText}
              onChange={handleTextChange}
              placeholder="Enter your message here"
              className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white min-h-[60px] max-h-[100px] overflow-auto resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-white/70">Message Type</label>
            <div className="relative">
              <div 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between rounded border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/50 cursor-pointer"
              >
                <span>{selectedMessageType}</span>
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
                <div className="absolute z-10 w-full mt-1 bg-black/95 border border-white/10 rounded shadow-lg">
                  {messageTypes.map((type) => (
                    <div
                      key={type}
                      className="px-3 py-1.5 text-sm text-white/70 hover:bg-white/10 cursor-pointer"
                      onClick={() => selectMessageType(type)}
                    >
                      {type}
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
          type="source"
          position={Position.Bottom}
          id="out"
          isConnectable={isConnectable}
          className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
        />
      )}
    </div>
  )
}