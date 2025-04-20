"use client"

import type React from "react"
import { useCallback, useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Code, Play, Save, Trash, ZoomIn, ZoomOut, Bug } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ModelNode } from "@/components/flow/nodes/model-node"
import { InputNode } from "@/components/flow/nodes/input-node"
import { OutputNode } from "@/components/flow/nodes/output-node"
import { AgentNode } from "@/components/flow/nodes/agent-node"
import { PromptNode } from "@/components/flow/nodes/prompt-node"
import { NodePropertiesPanel } from "@/components/flow/node-properties-panel"
import { AnthropicNode } from "@/components/flow/nodes/anthropic-node"
import { HuggingFaceNode } from "@/components/flow/nodes/huggingface-node"
import { LocalModelNode } from "@/components/flow/nodes/local-model-node"
import { FileInputNode } from "@/components/flow/nodes/file-input-node"
import { StreamOutputNode } from "@/components/flow/nodes/stream-output-node"
import { FileOutputNode } from "@/components/flow/nodes/file-output-node"
import { FewShotNode } from "@/components/flow/nodes/few-shot-node"
import { ToolNode } from "@/components/flow/nodes/tool-node"
import { MultiAgentNode } from "@/components/flow/nodes/multi-agent-node"
import { ConversationMemoryNode } from "@/components/flow/nodes/conversation-memory-node"
import { BufferMemoryNode } from "@/components/flow/nodes/buffer-memory-node"
import { SequentialChainNode } from "@/components/flow/nodes/sequential-chain-node"
import { RouterChainNode } from "@/components/flow/nodes/router-chain-node"
import { VectorStoreNode } from "@/components/flow/nodes/vectorstore-node"
import { DocumentLoaderNode } from "@/components/flow/nodes/document-loader-node"
import { TextSplitterNode } from "@/components/flow/nodes/text-splitter-node"
import APIInputNode from "@/components/flow/nodes/API-input-node"

import type { Node, Edge, Connection, NodeTypes, NodeChange, EdgeChange } from "reactflow"

import "reactflow/dist/style.css"

const MarkerType = {
  Arrow: "arrow",
  ArrowClosed: "arrowClosed", 
} as const

const ConnectionLineTypes = {
  Bezier: "bezier",
  Straight: "straight",
  Step: "step",
  SmoothStep: "smoothstep", 
} as const

const BackgroundVariant = {
  Dots: "dots", 
  Lines: "lines",
  None: "none",
} as const

const ReactFlow = dynamic(() => import("reactflow").then((mod) => mod.ReactFlow), { ssr: false })

const Background = dynamic(() => import("reactflow").then((mod) => mod.Background), { ssr: false })
const Controls = dynamic(() => import("reactflow").then((mod) => mod.Controls), { ssr: false })
const MiniMap = dynamic(() => import("reactflow").then((mod) => mod.MiniMap), { ssr: false })
const Panel = dynamic(() => import("reactflow").then((mod) => mod.Panel), { ssr: false })

interface FlowEditorProps {
  flowId: string
  onOpenPlayground: () => void
  onOpenApiCodespace: () => void
}

const nodeTypes: NodeTypes = {
  openai: ModelNode,
  anthropic: AnthropicNode,
  huggingface: HuggingFaceNode,
  "local-model": LocalModelNode,
  "text-input": InputNode,
  "file-input": FileInputNode,
  "text-output": OutputNode,
  "stream-output": StreamOutputNode,
  "file-output": FileOutputNode,
  "prompt-template": PromptNode,
  "few-shot": FewShotNode,
  agent: AgentNode,
  tool: ToolNode,
  "multi-agent": MultiAgentNode,
  "conversation-memory": ConversationMemoryNode,
  "buffer-memory": BufferMemoryNode,
  "sequential-chain": SequentialChainNode,
  "router-chain": RouterChainNode,
  "vector-store": VectorStoreNode,
  "document-loader": DocumentLoaderNode,
  "text-splitter": TextSplitterNode,
  "API-input": APIInputNode
}


const getInitialNodes = (flowId: string): Node[] => {

  if (flowId === "flow-1") {
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

  
  if (flowId === "flow-2") {
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


  if (flowId === "flow-3") {
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
  
  if (flowId === "flow-1") {
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


  if (flowId === "flow-2") {
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

  if (flowId === "flow-3") {
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

export function FlowEditor({ flowId, onOpenPlayground, onOpenApiCodespace }: FlowEditorProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null)
  const [isReactFlowLoaded, setIsReactFlowLoaded] = useState(false)
  const { toast } = useToast()

 
  const [reactFlowUtils, setReactFlowUtils] = useState<{
    onNodesChange?: any
    onEdgesChange?: any
    addEdge?: any
  }>({})


  useEffect(() => {
    let isMounted = true

    import("reactflow").then((reactflow) => {
      if (!isMounted) return

      setReactFlowUtils({
        onNodesChange: reactflow.applyNodeChanges,
        onEdgesChange: reactflow.applyEdgeChanges,
        addEdge: reactflow.addEdge,
      })

     
      setNodes(getInitialNodes(flowId))
      setEdges(getInitialEdges(flowId))
      setIsReactFlowLoaded(true)
    })

    return () => {
      isMounted = false
    }
  }, [flowId])


  useEffect(() => {
    if (isReactFlowLoaded) {
      setNodes(getInitialNodes(flowId))
      setEdges(getInitialEdges(flowId))
    }
  }, [flowId, isReactFlowLoaded])

  const onConnect = useCallback(
    (params: Connection) => {
      if (!reactFlowUtils.addEdge) return


      const edgeId = `e${params.source}-${params.target}`


      const edgeExists = edges.some((edge) => edge.id === edgeId)
      if (edgeExists) {
        toast({
          title: "Connection already exists",
          description: "These nodes are already connected",
          variant: "destructive",
        })
        return
      }

    
      const sourceNode = nodes.find((node) => node.id === params.source)
      const targetNode = nodes.find((node) => node.id === params.target)

      if (sourceNode && targetNode) {
        
        console.log(`Connecting: ${sourceNode.type} -> ${targetNode.type}`)

       
        if (sourceNode.type?.includes("output") && targetNode.type?.includes("input")) {
          toast({
            title: "Invalid connection",
            description: "Cannot connect output nodes to input nodes",
            variant: "destructive",
          })
          return
        }

        
        if (params.source === params.target) {
          toast({
            title: "Invalid connection",
            description: "Cannot connect a node to itself",
            variant: "destructive",
          })
          return
        }

        if (
          (sourceNode.type === "sequential-chain" && targetNode.type === "sequential-chain") ||
          (sourceNode.type === "router-chain" && targetNode.type === "router-chain")
        ) {
         
          const tempEdges = [...edges, { id: edgeId, source: params.source || "", target: params.target || "" }]
          const tempNodes = [...nodes]
          const circularPaths = findCircularPaths(tempNodes, tempEdges)

          if (circularPaths.length > 0) {
            toast({
              title: "Invalid connection",
              description: "This would create a circular dependency",
              variant: "destructive",
            })
            return
          }
        }
      }

     
      let edgeColor = "rgba(149, 76, 233, 0.6)" 

      if (sourceNode) {
        switch (sourceNode.type) {
          case "openai":
            edgeColor = "rgba(16, 185, 129, 0.8)" 
            break
          case "anthropic":
            edgeColor = "rgba(99, 102, 241, 0.8)" 
            break
          case "huggingface":
            edgeColor = "rgba(6, 182, 212, 0.8)" 
            break
          case "agent":
          case "multi-agent":
            edgeColor = "rgba(239, 68, 68, 0.8)" 
            break
          case "few-shot":
            edgeColor = "rgba(132, 204, 22, 0.8)" 
            break
          case "conversation-memory":
          case "buffer-memory":
            edgeColor = "rgba(124, 58, 237, 0.8)" 
            break
        }
      }

      setEdges((eds) =>
        reactFlowUtils.addEdge(
          {
            ...params,
            id: edgeId,
            animated: true,
            style: { stroke: edgeColor, strokeWidth: 2 },
            markerEnd: {
              type: MarkerType.ArrowClosed, 
              color: edgeColor,
            },
          },
          eds,
        ),
      )

      toast({
        title: "Connection created",
        description: "Flow updated and saved automatically",
      })
    },
    [edges, nodes, reactFlowUtils.addEdge, toast],
  )

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      if (!reactFlowUtils.onNodesChange) return

      
      const selectChange = changes.find((change) => change.type === "select" && change.selected === true)
      if (selectChange && "id" in selectChange) {
        const nodeId = selectChange.id as string
        const node = nodes.find((n) => n.id === nodeId)
        if (node) {
          setSelectedNode(nodeId)
          setSelectedNodeData(node.data)
        }
      }

      setNodes((nds) => reactFlowUtils.onNodesChange(changes, nds))
    },
    [nodes, reactFlowUtils.onNodesChange],
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      if (!reactFlowUtils.onEdgesChange) return

      const removeChange = changes.find((change) => change.type === "remove")
      if (removeChange) {
        toast({
          title: "Connection removed",
          description: "Flow updated and saved automatically",
        })
      }

      setEdges((eds) => reactFlowUtils.onEdgesChange(changes, eds))
    },
    [reactFlowUtils.onEdgesChange, toast],
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
            ...(type === "openai" && { model: "gpt-4o-mini", temperature: 0.7 }),
            ...(type === "text-input" && { inputs: { text: "" } }),
            ...(type === "prompt-template" && { template: "Write a response about {{topic}}" }),
            ...(type === "agent" && { instructions: "You are a helpful assistant." }),
            ...(type === "API-input" && { apiUrl: "", method: "GET", headers: "", body: "" }),
          },
        }

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

   
    setSelectedNode(null)
    setSelectedNodeData(null)

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

  const handleNodeDataUpdate = (nodeId: string, newData: any) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              ...newData,
            },
          }
        }
        return node
      }),
    )

    
    if (nodeId === selectedNode) {
      setSelectedNodeData({
        ...selectedNodeData,
        ...newData,
      })
    }

    toast({
      title: "Node Updated",
      description: "Changes saved automatically",
    })
  }

 
  const debugFlow = useCallback(() => {
    console.log("Current Nodes:", nodes)
    console.log("Current Edges:", edges)

   
    const orphanedNodes = nodes.filter(
      (node) => !edges.some((edge) => edge.source === node.id || edge.target === node.id),
    )

    
    const danglingEdges = edges.filter(
      (edge) => !nodes.some((node) => node.id === edge.source) || !nodes.some((node) => node.id === edge.target),
    )

 
    const circularPaths = findCircularPaths(nodes, edges)


    if (orphanedNodes.length > 0) {
      console.warn("Orphaned nodes detected:", orphanedNodes)
    }

    if (danglingEdges.length > 0) {
      console.warn("Dangling edges detected:", danglingEdges)
    }

    if (circularPaths.length > 0) {
      console.warn("Circular dependencies detected:", circularPaths)
    }

    toast({
      title: "Flow Debugged",
      description: `${nodes.length} nodes, ${edges.length} edges
    ${orphanedNodes.length > 0 ? `⚠️ ${orphanedNodes.length} orphaned nodes` : "✅ No orphaned nodes"}
    ${danglingEdges.length > 0 ? `⚠️ ${danglingEdges.length} dangling edges` : "✅ No dangling edges"}
    ${circularPaths.length > 0 ? `⚠️ ${circularPaths.length} circular paths` : "✅ No circular paths"}`,
    })
  }, [nodes, edges, toast])


  const findCircularPaths = (nodes: Node[], edges: Edge[]) => {
    const adjacencyList: Record<string, string[]> = {}


    nodes.forEach((node) => {
      adjacencyList[node.id] = []
    })

    edges.forEach((edge) => {
      if (adjacencyList[edge.source]) {
        adjacencyList[edge.source].push(edge.target)
      }
    })

    const visited: Record<string, boolean> = {}
    const recStack: Record<string, boolean> = {}
    const circularPaths: string[][] = []

    const dfs = (nodeId: string, path: string[] = []) => {
      if (!visited[nodeId]) {
        visited[nodeId] = true
        recStack[nodeId] = true
        path.push(nodeId)

        for (const neighbor of adjacencyList[nodeId] || []) {
          if (!visited[neighbor] && dfs(neighbor, [...path])) {
            return true
          } else if (recStack[neighbor]) {
            
            const cycleStart = path.indexOf(neighbor)
            circularPaths.push(path.slice(cycleStart))
            return true
          }
        }
      }

      recStack[nodeId] = false
      return false
    }

   
    for (const node of nodes) {
      if (!visited[node.id]) {
        dfs(node.id)
      }
    }

    return circularPaths
  }

  if (!isReactFlowLoaded) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#050505]">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <p className="mt-4 text-white/70">Loading flow editor...</p>
        </div>
      </div>
    )
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
          style: { stroke: "rgba(149, 76, 233, 0.8)", strokeWidth: 3 },
          animated: true,
          markerEnd: {
            type: MarkerType.ArrowClosed, 
            color: "rgba(149, 76, 233, 0.8)",
          },
        }}
        connectionLineType={ConnectionLineTypes.SmoothStep} 
        connectionLineStyle={{
          stroke: "rgba(149, 76, 233, 0.8)",
          strokeWidth: 3,
          strokeDasharray: "5,5",
        }}
        deleteKeyCode={["Backspace", "Delete"]}
        selectionKeyCode={["Control", "Meta"]}
        multiSelectionKeyCode={["Shift"]}
      >
        <Background
          color="rgba(255, 255, 255, 0.1)"
          gap={20}
          size={1.5}
          variant={BackgroundVariant.Dots} 
          style={{ backgroundColor: "#030303" }}
        />
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
        <Panel position="top-right" className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={onOpenPlayground}
          >
            <Play className="mr-2 h-4 w-4" />
            Playground
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={onOpenApiCodespace}
          >
            <Code className="mr-2 h-4 w-4" />
            API
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={handleSaveFlow}
          >
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={handleDeleteSelected}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-black/50 border-white/10 text-white hover:bg-white/10 shadow-lg"
            onClick={debugFlow}
          >
            <Bug className="mr-2 h-4 w-4" />
            Debug
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

      {selectedNode && (
        <NodePropertiesPanel
          nodeId={selectedNode}
          nodeData={selectedNodeData}
          onClose={() => {
            setSelectedNode(null)
            setSelectedNodeData(null)
          }}
          onUpdate={handleNodeDataUpdate}
        />
      )}
    </div>
  )
}
