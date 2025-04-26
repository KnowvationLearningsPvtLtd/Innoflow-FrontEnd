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
  const [addNodeFunction, setAddNodeFunction] = useState<((type: string, name: string) => void) | null>(null)

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <DashboardHeader showAutoSave={true} />
      <div className="flex flex-1 overflow-hidden pt-16">
        <FlowSidebar
          onAddComponent={(componentId, componentName) => {
            console.log("📥 FlowPage received onAddComponent:", { componentId, componentName });
            if (addNodeFunction) {
              console.log("➡️ FlowPage calling addNodeFunction");
              addNodeFunction(componentId, componentName);
            } else {
              console.warn("⚠️ FlowPage: addNodeFunction is not available");
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
                console.log("🔄 FlowPage: Received addNodeToFlow function");
                setAddNodeFunction(() => {
                  console.log("🔄 FlowPage: Created new addNodeFunction wrapper");
                  return addNodeToFlow;
                });
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
