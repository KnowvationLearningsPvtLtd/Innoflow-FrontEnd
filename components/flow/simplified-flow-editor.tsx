"use client"

import { useState, useEffect } from "react"
import { ComponentSidebar } from "@/components/flow/component-sidebar"
import { PlaygroundPanel } from "@/components/flow/playground-panel"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Play, Save, Trash, ZoomIn, ZoomOut, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample node data for visualization
const getNodesForFlow = (flowId: string) => {
  // Basic Prompting flow
  if (flowId === "1") {
    return [
      {
        id: "1",
        type: "text-input",
        label: "Chat Input",
        position: { x: 250, y: 100 },
      },
      {
        id: "2",
        type: "openai",
        label: "OpenAI",
        position: { x: 250, y: 250 },
      },
      {
        id: "3",
        type: "text-output",
        label: "Chat Output",
        position: { x: 250, y: 400 },
      },
    ]
  }

  // Vector Store RAG flow
  if (flowId === "2") {
    return [
      {
        id: "1",
        type: "text-input",
        label: "Chat Input",
        position: { x: 250, y: 50 },
      },
      {
        id: "2",
        type: "prompt-template",
        label: "Prompt",
        position: { x: 100, y: 200 },
      },
      {
        id: "3",
        type: "openai",
        label: "OpenAI",
        position: { x: 400, y: 200 },
      },
      {
        id: "4",
        type: "openai",
        label: "OpenAI",
        position: { x: 250, y: 350 },
      },
      {
        id: "5",
        type: "text-output",
        label: "Chat Output",
        position: { x: 250, y: 500 },
      },
    ]
  }

  // Simple Agent flow
  if (flowId === "3") {
    return [
      {
        id: "1",
        type: "text-input",
        label: "Chat Input",
        position: { x: 250, y: 100 },
      },
      {
        id: "2",
        type: "agent",
        label: "Agent",
        position: { x: 250, y: 250 },
      },
      {
        id: "3",
        type: "text-output",
        label: "Chat Output",
        position: { x: 250, y: 400 },
      },
    ]
  }

  return []
}

// Get node color based on type
const getNodeColor = (type: string) => {
  switch (type) {
    case "text-input":
      return "border-blue-500/30 bg-blue-500/10 text-blue-500"
    case "openai":
      return "border-teal-500/30 bg-teal-500/10 text-teal-500"
    case "text-output":
      return "border-purple-500/30 bg-purple-500/10 text-purple-500"
    case "prompt-template":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-500"
    case "agent":
      return "border-rose-500/30 bg-rose-500/10 text-rose-500"
    default:
      return "border-gray-500/30 bg-gray-500/10 text-gray-500"
  }
}

// Get node icon based on type
const getNodeIcon = (type: string) => {
  switch (type) {
    case "text-input":
      return "T"
    case "openai":
      return "AI"
    case "text-output":
      return "O"
    case "prompt-template":
      return "P"
    case "agent":
      return "A"
    default:
      return "?"
  }
}

export function SimplifiedFlowEditor({ flowId }: { flowId: string }) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [showPlayground, setShowPlayground] = useState(false)
  const [activeTab, setActiveTab] = useState("canvas")
  const [nodes, setNodes] = useState(getNodesForFlow(flowId))
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading flow data
    const timer = setTimeout(() => {
      setIsLoading(false)
      setNodes(getNodesForFlow(flowId))
      toast({
        title: "Flow loaded",
        description: "You can now edit your flow",
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [flowId, toast])

  const handleSaveFlow = () => {
    toast({
      title: "Flow Saved",
      description: "Your flow has been saved successfully",
    })
  }

  const handleOpenPlayground = () => {
    setShowPlayground(true)
    setActiveTab("playground")
  }

  const handleAddNode = () => {
    toast({
      title: "Add Component",
      description: "Drag components from the sidebar to add them to your flow",
    })
  }

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
              onClick={() => setShowPlayground(true)}
            >
              <Zap className="mr-1 h-4 w-4" />
              Playground
            </TabsTrigger>
          </TabsList>

          <TabsContent value="canvas" className="flex-1 flex mt-0 p-0">
            <div className="flex-1 flex relative">
              {/* Simplified Flow Canvas */}
              <div className="flex-1 bg-[#050505] relative overflow-auto">
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
                    onClick={handleOpenPlayground}
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
                    onClick={handleSaveFlow}
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                </div>

                {/* Simplified Flow Nodes */}
                <div className="w-full h-full p-10">
                  <div className="relative w-full h-full">
                    {nodes.map((node) => (
                      <div
                        key={node.id}
                        className={`absolute min-w-[240px] rounded-md border bg-black/80 shadow-lg backdrop-blur-sm ${
                          selectedNode === node.id ? "ring-2 ring-primary" : ""
                        } ${getNodeColor(node.type)}`}
                        style={{
                          left: `${node.position.x}px`,
                          top: `${node.position.y}px`,
                        }}
                        onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
                      >
                        <div className={`border-b px-4 py-2 text-sm font-medium flex items-center gap-2`}>
                          <div className="flex h-5 w-5 items-center justify-center rounded text-xs">
                            {getNodeIcon(node.type)}
                          </div>
                          <span>{node.label}</span>
                        </div>
                        <div className="p-4">
                          <div className="text-xs text-white/70">
                            {node.type === "text-input" && "Input node for text"}
                            {node.type === "openai" && "OpenAI language model"}
                            {node.type === "text-output" && "Output node for text"}
                            {node.type === "prompt-template" && "Template for prompts"}
                            {node.type === "agent" && "Agent with tools"}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Connection lines (simplified) */}
                    {flowId === "1" && (
                      <>
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                          <path
                            d="M250,160 C250,190 250,220 250,250"
                            stroke="rgba(149, 76, 233, 0.6)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                          />
                          <path
                            d="M250,310 C250,340 250,370 250,400"
                            stroke="rgba(149, 76, 233, 0.6)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                          />
                        </svg>
                      </>
                    )}

                    {/* Add Node Button */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-4 left-4 bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
                      onClick={handleAddNode}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Node Properties Panel (simplified) */}
              {selectedNode && (
                <div className="w-80 border-l border-white/10 bg-black/90 flex flex-col h-full">
                  <div className="flex items-center justify-between border-b border-white/10 p-4">
                    <h3 className="font-medium text-white">Node Properties</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedNode(null)}
                      className="text-white/70 hover:bg-white/10"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1 overflow-auto p-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Node Type</label>
                      <div className="rounded-md border border-white/10 bg-white/5 p-2 text-white">
                        {nodes.find((n) => n.id === selectedNode)?.type || "Unknown"}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Label</label>
                      <div className="rounded-md border border-white/10 bg-white/5 p-2 text-white">
                        {nodes.find((n) => n.id === selectedNode)?.label || "Unnamed"}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-white/70">Position</label>
                      <div className="rounded-md border border-white/10 bg-white/5 p-2 text-white">
                        X: {nodes.find((n) => n.id === selectedNode)?.position.x || 0}, Y:{" "}
                        {nodes.find((n) => n.id === selectedNode)?.position.y || 0}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 p-4">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">Save Changes</Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="playground" className="flex-1 flex mt-0 p-0">
            {showPlayground && <PlaygroundPanel />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
