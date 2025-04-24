"use client"

import type React from "react"

import { useCallback, useRef, useState, useEffect } from "react"

import dynamic from "next/dynamic"
import type { Node, Edge, Connection, NodeTypes } from "reactflow"

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

import { ModelNode } from "@/components/flow/nodes/model-node"
import { InputNode } from "@/components/flow/nodes/input-node"
import { OutputNode } from "@/components/flow/nodes/output-node"
import { AgentNode } from "@/components/flow/nodes/agent-node"
import { PromptNode } from "@/components/flow/nodes/prompt-node"
import { Button } from "@/components/ui/button"
import { Play, Save, Trash, ZoomIn, ZoomOut } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const nodeTypes: NodeTypes = {
  openai: ModelNode,
  "text-input": InputNode,
  "text-output": OutputNode,
  agent: AgentNode,
  "prompt-template": PromptNode,
}

const getInitialNodes = (flowId: string): Node[] => {
  if (flowId === "1") {
    return [
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
    ]
  }

  if (flowId === "2") {
    return [
      {
        id: "1",
        type: "text-input",
        position: { x: 250, y: 50 },
        data: { label: "Chat Input", inputs: { text: "Tell me about climate change" } },
      },
      {
        id: "2",
        type: "prompt-template",
        position: { x: 100, y: 200 },
        data: {
          label: "Prompt",
          template: "Use the following context to answer the question: {{context}}\n\nQuestion: {{question}}",
        },
      },
      {
        id: "3",
        type: "openai",
        position: { x: 400, y: 200 },
        data: {
          label: "OpenAI",
          model: "gpt-4o-mini",
          temperature: 0.3,
        },
      },
      {
        id: "4",
        type: "openai",
        position: { x: 250, y: 350 },
        data: {
          label: "OpenAI",
          model: "gpt-4o-mini",
          temperature: 0.7,
        },
      },
      {
        id: "5",
        type: "text-output",
        position: { x: 250, y: 500 },
        data: { label: "Chat Output" },
      },
    ]
  }

  
  if (flowId === "3") {
    return [
      {
        id: "1",
        type: "text-input",
        position: { x: 250, y: 100 },
        data: { label: "Chat Input", inputs: { text: "Research the latest AI trends" } },
      },
      {
        id: "2",
        type: "agent",
        position: { x: 250, y: 250 },
        data: {
          label: "Agent",
          instructions: "You are a research assistant that helps find information.",
        },
      },
      {
        id: "3",
        type: "text-output",
        position: { x: 250, y: 400 },
        data: { label: "Chat Output" },
      },
    ]
  }

  
  return []
}

const getInitialEdges = (flowId: string): Edge[] => {
  
  if (flowId === "1") {
    return [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
    ]
  }

 
  if (flowId === "2") {
    return [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
      {
        id: "e1-3",
        source: "1",
        target: "3",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
      {
        id: "e2-4",
        source: "2",
        target: "4",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
      {
        id: "e3-4",
        source: "3",
        target: "4",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
      {
        id: "e4-5",
        source: "4",
        target: "5",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
    ]
  }

  if (flowId === "3") {
    return [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
    ]
  }

  
  return []
}

interface ReactFlowCanvasProps {
  flowId: string
  onSelectNode: (nodeId: string | null, data: any) => void
  onOpenPlayground: () => void
}

export default function ReactFlowCanvas({ flowId, onSelectNode, onOpenPlayground }: ReactFlowCanvasProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(getInitialNodes(flowId))
  const [edges, setEdges, onEdgesChange] = useEdgesState(getInitialEdges(flowId))
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
   
    import("reactflow/dist/style.css")
  }, [])

  useEffect(() => {

    setNodes(getInitialNodes(flowId))
    setEdges(getInitialEdges(flowId))
  }, [flowId, setNodes, setEdges])

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: "rgba(149, 76, 233, 0.6)",
            },
          },
          eds,
        ),
      )
    },
    [setEdges],
  )

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect()
      if (!reactFlowBounds || !reactFlowInstance) return

      const dataStr = event.dataTransfer.getData("application/reactflow")
      if (!dataStr) return

      try {
        const { type, name } = JSON.parse(dataStr)

        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        })

        const newNode = {
          id: `${Date.now()}`,
          type,
          position,
          data: {
            label: name,
            model: type === "openai" ? "gpt-4o-mini" : undefined,
            inputs: type === "text-input" ? { text: "" } : undefined,
            template: type === "prompt-template" ? "Write a response about {{topic}}" : undefined,
            instructions: type === "agent" ? "You are a helpful assistant." : undefined,
          },
        };
        // Adjusted the `data` object to include only valid properties based on the node type.

        setNodes((nds) => nds.concat(newNode))

        toast({
          title: "Component Added",
          description: `Added ${name} to the flow`,
        })
      } catch (error) {
        console.error("Error adding node:", error)
        toast({
          title: "Error",
          description: "Failed to add component to the flow",
          variant: "destructive",
        })
      }
    },
    [reactFlowInstance, setNodes, toast],
  )

  const handleDeleteSelected = () => {
    setNodes((nodes) => nodes.filter((node) => !node.selected))
    setEdges((edges) => edges.filter((edge) => !edge.selected))

    toast({
      title: "Deleted",
      description: "Selected items have been removed",
    })
  }

  const handleSaveFlow = () => {
    toast({
      title: "Flow Saved",
      description: "Your flow has been saved successfully",
    })
  }

  const handleOpenPlayground = () => {
    onOpenPlayground()
  }

  const handleNodeClick = (event: React.MouseEvent, node: Node) => {
    onSelectNode(node.id, node.data)
  }

  return (
    <div className="flex-1 relative" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
        className="bg-[#050505]"
        defaultEdgeOptions={{
          style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: "rgba(149, 76, 233, 0.6)",
          },
        }}
        onNodeClick={handleNodeClick}
        deleteKeyCode={["Backspace", "Delete"]}
      >
        <Background color="rgba(255, 255, 255, 0.05)" gap={20} size={1}  />
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
            onClick={handleDeleteSelected}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </Panel>
        <Panel position="bottom-left" className="flex gap-2 mb-16">
          <Button
            variant="outline"
            size="icon"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={() => reactFlowInstance?.zoomIn()}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={() => reactFlowInstance?.zoomOut()}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
        </Panel>
      </ReactFlow>
    </div>
  )
}
