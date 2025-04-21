"use client"

import { useState, useRef, useCallback } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FileInputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [fileType, setFileType] = useState(data.fileType || "pdf")
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = useCallback((file: File) => {
    if (!file) return
    
    
    const extension = file.name.split('.').pop()?.toLowerCase()
    if (extension !== fileType.toLowerCase()) {
      alert(`Please upload a ${fileType.toUpperCase()} file`)
      return
    }
    
    setFileName(file.name)
    
   
    if (data.onFileChange) {
      data.onFileChange(file)
    }
  }, [fileType, data])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }, [handleFileChange])

  const handleClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [])

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0])
    }
  }, [handleFileChange])

  return (
    <div className="min-w-[240px] rounded-md border border-amber-500/30 bg-black/80 shadow-lg backdrop-blur-sm glow glow-amber">
      <div className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-500 flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/20 text-xs text-amber-500">F</div>
        <span>{data.label || "File Input"}</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <label className="text-xs text-white/70">File Type</label>
          <Select value={fileType} onValueChange={(value) => {
            setFileType(value)
            setFileName("") 
          }}>
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

        <div 
          className={`rounded border ${isDragging ? 'border-amber-500/50 bg-amber-500/10' : 'border-white/10 bg-white/5'} 
            px-3 py-2 text-sm text-white/50 cursor-pointer transition-colors`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            className="hidden"
            accept={`.${fileType}`} 
            onChange={handleFileInputChange}
          />
          
          <div className="flex items-center justify-center h-12">
            {fileName ? (
              <div className="text-center">
                <div className="text-xs text-white flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {fileName}
                </div>
                <div className="text-xs text-white/50 mt-1">
                  Click to change file
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-xs text-white/70">Drop files here or click to upload</div>
                <div className="text-xs text-white/50 mt-1">Supported formats: {fileType.toUpperCase()}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-amber-500 border-2 border-black node-handle"
      />
    </div>
  )
}