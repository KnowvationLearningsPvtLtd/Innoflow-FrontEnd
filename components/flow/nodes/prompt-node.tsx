"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"

export function PromptNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [template, setTemplate] = useState(data.template || "Write a response about {{topic}}")

  useEffect(() => {
    if (data.template) {
      setTemplate(data.template)
    }
  }, [data.template])
  
  // Extract variables from template
  const variables = template.match(/\{\{([^}]+)\}\}/g)?.map((v: string) => v.replace(/\{\{|\}\}/g, "")) || []

  return (
    <div className="min-w-[240px] rounded-md border border-yellow-500/40 bg-black/80 shadow-lg backdrop-blur-sm glow glow-yellow">
      <div className="border-b border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-500 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-yellow-500/20 text-xs text-yellow-500">
            P
          </div>
          <span>{data.label || "Prompt Template"}</span>
        </div>
        {data.onEdit && (
          <button 
            onClick={data.onEdit}
            className="text-xs text-yellow-500/70 hover:text-yellow-500"
          >
            Edit
          </button>
        )}
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-white/70">Template</label>
            <div className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white min-h-[60px] max-h-[100px] overflow-auto whitespace-pre-wrap">
              {template}
            </div>
          </div>

          {variables.length > 0 && (
            <div className="space-y-1">
              <label className="text-xs text-white/70">Variables</label>
              <div className="flex flex-wrap gap-2">
                {variables.map((variable: string, index: number) => (
                  <div 
                    key={index} 
                    className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs text-yellow-500"
                  >
                    {variable}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {variables.length > 0 && (
            <div className="text-xs text-white/50 pt-1">
              {variables.length} variable{variables.length !== 1 ? 's' : ''} available
            </div>
          )}
        </div>
      </div>
      
      <Handle
        type="target"
        position={Position.Top}
        id="in"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-yellow-500 border-2 border-black node-handle"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="out"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-yellow-500 border-2 border-black node-handle"
      />
    </div>
  )
}