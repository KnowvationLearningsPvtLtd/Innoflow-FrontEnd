"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"


const Handle = dynamic(() => import("reactflow").then((mod) => mod.Handle), { ssr: false })
const Position = dynamic(() => import("reactflow").then((mod) => mod.Position), { ssr: false })

export function OutputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
              Waiting for input...
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">Output Format</label>
            <div className="flex items-center justify-between rounded border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/50">
              <span>Text</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/50"
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
