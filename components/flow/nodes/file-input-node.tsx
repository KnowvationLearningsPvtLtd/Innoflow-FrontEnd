"use client"

import { useState, useRef, useCallback } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileIcon, UploadIcon, XIcon, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FileInputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [fileType, setFileType] = useState<keyof typeof fileTypes>(data.fileType || "pdf")
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState("")
  const [fileSize, setFileSize] = useState("")
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fileTypes = {
    pdf: { name: "PDF", icon: "📄", mime: "application/pdf" },
    docx: { name: "DOCX", icon: "📝", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" },
    txt: { name: "TXT", icon: "📃", mime: "text/plain" },
    csv: { name: "CSV", icon: "📊", mime: "text/csv" },
    json: { name: "JSON", icon: "🔡", mime: "application/json" },
    xlsx: { name: "XLSX", icon: "📊", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
    md: { name: "MD", icon: "📝", mime: "text/markdown" },
    html: { name: "HTML", icon: "🌐", mime: "text/html" }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " bytes"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  const handleFileChange = useCallback((file: File) => {
    if (!file) return
    
    setError("")
    const extension = file.name.split('.').pop()?.toLowerCase()
    
    if (extension !== fileType.toLowerCase()) {
      setError(`Please upload a ${fileType.toUpperCase()} file`)
      return
    }
    
    setFileName(file.name)
    setFileSize(formatFileSize(file.size))
    
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

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    setFileName("")
    setFileSize("")
    if (data.onFileChange) {
      data.onFileChange(null)
    }
  }

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0])
    }
  }, [handleFileChange])

  return (
    <div className="w-[260px] rounded-md border border-blue-500/30 bg-black/80 shadow-lg backdrop-blur-sm">
      <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileIcon size={16} className="text-blue-500" />
          <span>{data.label || "File Input"}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto p-1 w-7 h-7 text-blue-400 hover:bg-blue-500/10"
          onClick={() => { data.onRun ? data.onRun() : alert('Run File Input!') }}
          aria-label="Run File Input"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-3 space-y-3">
        <div>
          <label className="text-xs text-white/70 block mb-1">File Type</label>
          <Select value={fileType} onValueChange={(value) => {
            setFileType(value as keyof typeof fileTypes)
            setFileName("")
            setFileSize("")
            setError("")
          }}>
            <SelectTrigger className="h-8 text-sm bg-black/30 border-white/10">
              <SelectValue placeholder="Select file type" />
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/10 text-white">
              {Object.entries(fileTypes).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  <div className="flex items-center gap-2">
                    <span>{value.icon}</span>
                    <span>{value.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div 
          className={`rounded border ${isDragging ? 'border-blue-500/50 bg-blue-500/10' : 
            error ? 'border-red-500/50 bg-red-500/5' : 
            fileName ? 'border-green-500/30 bg-green-500/5' : 
            'border-white/10 bg-white/5'} 
            px-3 py-2 text-sm cursor-pointer transition-colors`}
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
          
          <div className="flex items-center justify-center min-h-[80px]">
            {error ? (
              <div className="text-center text-red-400 text-xs">
                <div className="mb-1">⚠️ {error}</div>
                <div>Try uploading again</div>
              </div>
            ) : fileName ? (
              <div className="text-center w-full">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-400 flex items-center gap-1 truncate max-w-[200px]">
                    <span>{fileTypes[fileType]?.icon || "📄"}</span>
                    <span className="truncate">{fileName}</span>
                  </div>
                  <button 
                    onClick={clearFile} 
                    className="text-white/50 hover:text-white/80"
                    title="Remove file"
                  >
                    <XIcon size={14} />
                  </button>
                </div>
                <div className="text-xs text-white/50 mt-2 flex items-center justify-between">
                  <span>{fileSize}</span>
                  <span className="text-blue-400/70">Ready to process</span>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <UploadIcon size={20} className="text-blue-500/70" />
                </div>
                <div className="text-xs text-white/70">Drop {fileType.toUpperCase()} here or click to browse</div>
                <div className="text-xs text-white/40 mt-1">Supports {fileTypes[fileType]?.name || fileType.toUpperCase()} files</div>
              </div>
            )}
          </div>
        </div>
        
        {!error && fileName && (
          <div className="bg-blue-500/5 text-xs border border-blue-500/10 rounded px-2 py-1 text-blue-300/80">
            File will be processed when flow runs
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
      />
    </div>
  )
}