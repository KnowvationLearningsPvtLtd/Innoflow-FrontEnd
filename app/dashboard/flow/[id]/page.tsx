"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import dynamic from "next/dynamic"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { FlowSidebar } from "@/components/flow/flow-sidebar"
import { PlaygroundPanel } from "@/components/flow/playground-panel"
import { ApiCodespacePanel } from "@/components/flow/api-codespace-panel"

const FlowEditor = dynamic(() => import("@/components/flow/flow-editor").then((mod) => mod.FlowEditor), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        <p className="mt-4 text-white/70">Loading flow editor...</p>
      </div>
    </div>
  ),
})

export default function FlowPage() {
  const params = useParams()
  const flowId = params.id as string
  const normalizedFlowId = flowId.startsWith("flow-") ? flowId : `flow-${flowId}`
  const [activePanel, setActivePanel] = useState<"editor" | "playground" | "api">("editor")

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <DashboardHeader showAutoSave={true} />
      <div className="flex flex-1 overflow-hidden pt-16">
        <FlowSidebar
          onAddComponent={(componentId, componentName) => {
            const flowEditor = document.getElementById("flow-editor")
            if (flowEditor) {
              const addNodeEvent = new CustomEvent("addNode", {
                detail: { componentId, componentName },
              })
              flowEditor.dispatchEvent(addNodeEvent)
            }
          }}
        />
        <div className="flex-1 flex">
          {activePanel === "editor" && (
            <FlowEditor
              flowId={normalizedFlowId}
              onOpenPlayground={() => setActivePanel("playground")}
              onOpenApiCodespace={() => setActivePanel("api")}
              onAddNodeReady={(addNodeToFlow) => {
                // Example: Add a node of type 'text-input' with name 'New Node'
                const addButton = document.getElementById("add-node-button")
                if (addButton) {
                  addButton.onclick = () => addNodeToFlow("text-input", "New Node")
                }
              }}
            />
          )}
          {activePanel === "playground" && <PlaygroundPanel onClose={() => setActivePanel("editor")} />}
          {activePanel === "api" && <ApiCodespacePanel onClose={() => setActivePanel("editor")} />}
        </div>
      </div>
    </div>
  )
}
