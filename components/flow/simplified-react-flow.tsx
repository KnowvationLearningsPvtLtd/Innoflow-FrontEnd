"use client"

import { useCallback, useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Save, Trash } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import type { Node, Edge, Connection } from "reactflow"

import ReactFlow, {
  Background,
  MiniMap,
  Panel,
  MarkerType,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import {ModelNode} from "@/components/flow/nodes/model-node";
import {InputNode} from "@/components/flow/nodes/input-node";
import {OutputNode} from "@/components/flow/nodes/output-node";
import {AgentNode }from "@/components/flow/nodes/agent-node";
import {PromptNode} from "@/components/flow/nodes/prompt-node";

interface ReactFlowCanvasProps {
  flowId: string
  onSelectNode: (nodeId: string | null, data: any) => void
  onOpenPlayground: () => void
}

export default function SimplifiedReactFlow({ flowId, onSelectNode, onOpenPlayground }: ReactFlowCanvasProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const { toast } = useToast()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
  
    import("reactflow/dist/style.css")
      .then(() => setIsLoaded(true))
      .catch((err) => console.error("Failed to load ReactFlow styles:", err))
  }, [])

  useEffect(() => {
  
    if (flowId === "1") {
      setNodes([
        {
          id: "1",
          type: "text-input",
          position: { x: 250, y: 100 },
          data: { label: "Chat Input", inputs: { text: "Hello" } },
        },
        {
          id: "2",
          type: "openai",
          position: { x: 250, y: 250 },
          data: {
            label: "OpenAI",
            model: "gpt-4o-mini",
            temperature: 0.7,
            systemMessage: "You are a helpful assistant.",
          },
        },
        {
          id: "3",
          type: "text-output",
          position: { x: 250, y: 400 },
          data: { label: "Chat Output" },
        },
      ])

      setEdges([
        {
          id: "e1-2",
          source: "1",
          target: "2",
          animated: true,
          style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        },
        {
          id: "e2-3",
          source: "2",
          target: "3",
          animated: true,
          style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        },
      ])
    }
  }, [flowId])

  const onNodesChange = useCallback((changes: any) => {
    setNodes((nds) => {
      
      const newNodes = [...nds]
      changes.forEach((change: any) => {
        if (change.type === "position" && change.id) {
          const nodeIndex = newNodes.findIndex((n) => n.id === change.id)
          if (nodeIndex !== -1 && change.position) {
            newNodes[nodeIndex] = {
              ...newNodes[nodeIndex],
              position: change.position,
            }
          }
        }
      })
      return newNodes
    })
  }, [])

  const onEdgesChange = useCallback((changes: any) => {

    setEdges((eds) => [...eds])
  }, [])

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => [
      ...eds,
      {
        id: `e${params.source}-${params.target}`,
        source: params.source || "",
        target: params.target || "",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
      },
    ])
  }, [])

  const handleSaveFlow = () => {
    toast({
      title: "Flow Saved",
      description: "Your flow has been saved successfully",
    })
  }

  const handleDeleteSelected = () => {
    toast({
      title: "Deleted",
      description: "Selected items have been removed",
    })
  }

  const nodeTypes = {
    openai: ModelNode,
    "text-input": InputNode,
    "text-output": OutputNode,
    agent: AgentNode,
    "prompt-template": PromptNode,
  }

  if (!isLoaded) {
    return <div className="flex-1 flex items-center justify-center">Loading flow editor...</div>
  }

  return (
    <div className="flex-1 relative h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes as any}
        fitView
        className="bg-[#050505]"
      >
        <Background color="rgba(255, 255, 255, 0.05)" gap={20} size={1}/>
        <Controls className="bg-black/50 border border-white/10 rounded-md p-1 shadow-lg" showInteractive={false} />
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case "text-input":
                return "rgba(59, 130, 246, 0.6)"
              case "openai":
                return "rgba(16, 185, 129, 0.6)"
              case "text-output":
                return "rgba(139, 92, 246, 0.6)"
              case "prompt-template":
                return "rgba(245, 158, 11, 0.6)"
              case "agent":
                return "rgba(239, 68, 68, 0.6)"
              default:
                return "rgba(255, 255, 255, 0.2)"
            }
          }}
          maskColor="rgba(0, 0, 0, 0.7)"
          className="rounded-md border border-white/10 bg-black/50 shadow-lg"
        />
        <Panel position="top-right" className="flex gap-2 mr-16">
          <Button
            variant="outline"
            size="icon"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={onOpenPlayground}
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
            onClick={handleDeleteSelected}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </Panel>
      </ReactFlow>
    </div>
  )
}