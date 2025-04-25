"use client"

import { useState, useEffect } from "react"
import { ComponentSidebar } from "@/components/flow/component-sidebar"
import { PlaygroundPanel } from "@/components/flow/playground-panel"
import { NodePropertiesPanel } from "@/components/flow/node-properties-panel"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap } from "lucide-react"
import dynamic from "next/dynamic"

// Define a type for node data
type NodeData = Record<string, any>

const ReactFlowCanvas = dynamic(() => import("@/components/flow/react-flow-canvas"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-1 items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        <p className="mt-4 text-white/70">Loading flow editor...</p>
      </div>
    </div>
  ),
})

export function FlowEditorWrapper({ flowId }: { flowId: string }) {
  const { toast } = useToast()
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [selectedNodeData, setSelectedNodeData] = useState<NodeData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("canvas")
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Flow loaded",
        description: "You can now edit your flow",
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [flowId, toast])

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <p className="mt-4 text-white/70">Loading flow...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full overflow-hidden">
      <ComponentSidebar />
      <div className="flex-1 flex flex-col">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full border-b border-white/10">
          <TabsList className="bg-transparent border-b border-white/10 rounded-none h-10 px-4">
            <TabsTrigger
              value="canvas"
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Canvas
            </TabsTrigger>
            <TabsTrigger
              value="playground"
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              <Zap className="mr-1 h-4 w-4" />
              Playground
            </TabsTrigger>
          </TabsList>

          <TabsContent value="canvas" className="flex-1 flex mt-0 p-0">
            <div className="flex-1 flex">
              <ReactFlowCanvas
                flowId={flowId}
                onSelectNode={(nodeId: string | null, data: NodeData | null) => {
                  setSelectedNode(nodeId)
                  setSelectedNodeData(data)
                }}
                onOpenPlayground={() => {
                  setActiveTab("playground")
                }}
              />
              {selectedNode && selectedNodeData && (
                <NodePropertiesPanel
                  nodeId={selectedNode}
                  nodeData={selectedNodeData}
                  onClose={() => setSelectedNode(null)}
                  onUpdate={(nodeId: string, newData: Partial<NodeData>) => {
                    // Update the selectedNodeData state to keep it in sync
                    setSelectedNodeData((prevData) => ({
                      ...prevData,
                      ...newData
                    } as NodeData))
                    // The actual node update should be handled by ReactFlowCanvas
                    console.log("Node updated:", nodeId, newData);
                  }}
                />
              )}
            </div>
          </TabsContent>

          <TabsContent value="playground" className="flex-1 flex mt-0 p-0">
            {activeTab === "playground" && <PlaygroundPanel />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}