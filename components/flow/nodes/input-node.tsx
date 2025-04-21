"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"

export function InputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [inputText, setInputText] = useState("")
  const [isClient, setIsClient] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedMessageType, setSelectedMessageType] = useState("User Message")
  
  const messageTypes = [
    { id: "user", name: "User Message" },
    { id: "system", name: "System Instruction" },
    { id: "api", name: "API Request" },
    { id: "code", name: "Code Snippet" }
  ]

  useEffect(() => {
    setIsClient(true)
    
    // Initialize with data if available
    if (data && data.inputs) {
      setInputText(data.inputs.text || "")
      setSelectedMessageType(data.inputs.messageType || "User Message")
    }
  }, [])

  // Update when data changes
  useEffect(() => {
    if (data && data.inputs) {
      setInputText(data.inputs.text || "")
      setSelectedMessageType(data.inputs.messageType || "User Message")
    }
  }, [data])

  const handleTextChange = (e) => {
    const newText = e.target.value
    setInputText(newText)
    
    // Update the node data to persist changes
    if (data && data.onInputChange) {
      data.onInputChange('text', newText)
    }
  }

  const selectMessageType = (type) => {
    setSelectedMessageType(type.name)
    setShowDropdown(false)
    
    // Update the node data to persist changes
    if (data && data.onInputChange) {
      data.onInputChange('messageType', type.name)
    }
  }
  
  const handleSendMessage = () => {
    if (inputText.trim() && data && data.onSend) {
      data.onSend()
    }
  }

  const handleClickOutside = (e) => {
    if (showDropdown && !e.target.closest('.message-type-dropdown')) {
      setShowDropdown(false)
    }
  }
  
  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDropdown])

  // If not client-side yet, render a placeholder or nothing
  if (!isClient) {
    return <div className="w-[240px] h-[200px] bg-black/80 rounded-md border border-blue-500/40"></div>
  }

  return (
    <div className="w-[240px] rounded-md border border-blue-500/40 bg-black/80 shadow-lg backdrop-blur-sm">
      <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-xs text-blue-400">
          📝
        </div>
        <span>{data?.label || "Chat Input"}</span>
      </div>
      
      <div className="p-3 space-y-3">
        <div className="space-y-1">
          <label className="text-xs text-blue-400">Text</label>
          <input
            type="text"
            value={inputText}
            onChange={handleTextChange}
            placeholder="Enter your message here"
            className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs text-blue-400">Message Type</label>
          <div className="relative message-type-dropdown">
            <div 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between rounded border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 cursor-pointer"
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
                    key={type.id}
                    className="px-3 py-1.5 text-sm text-white/70 hover:bg-blue-500/10 cursor-pointer"
                    onClick={() => selectMessageType(type)}
                  >
                    {type.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-2 flex items-center justify-center">
          <div 
            onClick={handleSendMessage}
            className="flex flex-col items-center justify-center w-full h-20 border border-white/10 rounded bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="text-blue-400 mb-1"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <p className="text-xs text-blue-400">Drop message here or click to browse</p>
          </div>
        </div>
      </div>
      
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable !== false}
        className="w-3 h-3 bg-blue-500 border-2 border-black"
      />
    </div>
  )
}