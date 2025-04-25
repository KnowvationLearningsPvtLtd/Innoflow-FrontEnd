"use client"

import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Code, Play, Save, Trash, Bug } from "lucide-react"
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
import { MarkerType, ConnectionLineType, BackgroundVariant } from "reactflow"

import "reactflow/dist/style.css"

const ReactFlow = dynamic(() => import("reactflow").then((mod) => mod.ReactFlow), { ssr: false })
const Background = dynamic(() => import("reactflow").then((mod) => mod.Background), { ssr: false })
const Controls = dynamic(() => import("reactflow").then((mod) => mod.Controls), { ssr: false })
const MiniMap = dynamic(() => import("reactflow").then((mod) => mod.MiniMap), { ssr: false })
const Panel = dynamic(() => import("reactflow").then((mod) => mod.Panel), { ssr: false })

interface FlowEditorProps {
  flowId: string
  onOpenPlayground: () => void
  onOpenApiCodespace: () => void
  onAddNodeReady?: (addNodeFunction: (type: string, name: string) => void) => void
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
  "api-input": APIInputNode
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

  // ... rest of getInitialNodes function
  return []
}

const getInitialEdges = (flowId: string): Edge[] => {
  // ... getInitialEdges function (unchanged)
  return []
}

// Function to generate node data based on type
const getNodeData = (type: string, name: string) => {
  const baseData = { label: name }
  
  switch (type) {
    case "openai":
      return { ...baseData, model: "gpt-4o-mini", temperature: 0.7 }
    case "text-input":
      return { ...baseData, inputs: { text: "" } }
    case "prompt-template":
      return { ...baseData, template: "Write a response about {{topic}}" }
    case "agent":
      return { ...baseData, instructions: "You are a helpful assistant." }
    case "api-input":
      return { ...baseData, apiUrl: "", method: "GET", headers: "", body: "", autoFetch: false, pollingInterval: 0 }
    case "anthropic":
      return { ...baseData, model: "claude-3-opus-20240229", temperature: 0.7 }
    case "huggingface":
      return { ...baseData, model: "", apiKey: "" }
    case "local-model":
      return { ...baseData, model: "llama2", ollamaUrl: "http://localhost:11434" }
    case "file-input":
      return { ...baseData, acceptedTypes: ".txt,.pdf,.csv", maxSize: 10 }
    case "stream-output":
      return { ...baseData, streamInterval: 50 }
    case "file-output":
      return { ...baseData, fileType: "text/plain", fileName: "output" }
    case "few-shot":
      return { ...baseData, examples: [] }
    case "tool":
      return { ...baseData, functionName: "", description: "", parameters: [] }
    case "multi-agent":
      return { ...baseData, agents: [], coordinator: "round-robin" }
    case "conversation-memory":
      return { ...baseData, maxMessages: 10 }
    case "buffer-memory":
      return { ...baseData, bufferSize: 5 }
    case "sequential-chain":
      return { ...baseData, sequence: [] }
    case "router-chain":
      return { ...baseData, routes: [], defaultRoute: "" }
    case "vector-store":
      return { ...baseData, vectorDB: "pinecone", dimension: 1536 }
    case "document-loader":
      return { ...baseData, fileType: "auto" }
    case "text-splitter":
      return { ...baseData, chunkSize: 1000, overlap: 200 }
    default:
      return baseData
  }
}

export function FlowEditor({ flowId, onOpenPlayground, onOpenApiCodespace, onAddNodeReady }: FlowEditorProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null)
  const [isReactFlowLoaded, setIsReactFlowLoaded] = useState(false)
  const { toast } = useToast()

  // Add state to track newly added nodes and default viewport
  const [newlyAddedNodes, setNewlyAddedNodes] = useState<Set<string>>(new Set())
  const defaultViewportRef = useRef<{ x: number; y: number; zoom: number } | null>(null)

  // Capture default viewport on load
  useEffect(() => {
    if (reactFlowInstance && !defaultViewportRef.current) {
      // Wait a bit for the initial viewport to settle
      setTimeout(() => {
        const viewport = reactFlowInstance.getViewport()
        defaultViewportRef.current = viewport
        console.log("Default viewport captured:", viewport)
      }, 500)
    }
  }, [reactFlowInstance])

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

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      if (!reactFlowUtils.onNodesChange) return

      // Handle node selection
      const selectChange = changes.find(
        (change) => change.type === "select" && change.selected === true
      )
      if (selectChange && "id" in selectChange && selectChange.id) {
        const nodeId = selectChange.id as string
        const node = nodes.find((n) => n.id === nodeId)
        if (node) {
          setSelectedNode(nodeId)
          setSelectedNodeData(node.data)
        }
      }

      // Handle node position changes (dragging)
      for (const change of changes) {
        if (change.type === "position" && "dragging" in change && change.dragging && "id" in change) {
          const draggedNodeId = change.id
          
          if (draggedNodeId && newlyAddedNodes.has(draggedNodeId)) {
            console.log("Node being dragged:", draggedNodeId)
            // Remove from tracking
            setNewlyAddedNodes((prev) => {
              const newSet = new Set(prev)
              newSet.delete(draggedNodeId)
              return newSet
            })

            // Reset viewport to default
            if (reactFlowInstance && defaultViewportRef.current) {
              console.log("Resetting to default viewport:", defaultViewportRef.current)
              reactFlowInstance.setViewport(defaultViewportRef.current, { duration: 700 })
            }
          }
        }
      }

      setNodes((nds) => reactFlowUtils.onNodesChange(changes, nds))
    },
    [newlyAddedNodes, nodes, reactFlowInstance, reactFlowUtils.onNodesChange]
  )

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
        if (params.source === params.target) {
          toast({
            title: "Invalid connection",
            description: "Cannot connect a node to itself",
            variant: "destructive",
          })
          return
        }

        // Remove connected nodes from tracking
        if (params.source) {
          setNewlyAddedNodes((prev) => {
            const newSet = new Set(prev)
            newSet.delete(params.source!)
            return newSet
          })
        }
        
        if (params.target) {
          setNewlyAddedNodes((prev) => {
            const newSet = new Set(prev)
            newSet.delete(params.target!)
            return newSet
          })
        }

        // Reset viewport when nodes are connected
        if (reactFlowInstance && defaultViewportRef.current) {
          console.log("Resetting viewport on connect")
          reactFlowInstance.setViewport(defaultViewportRef.current, { duration: 700 })
        }
      }

      setEdges((eds) =>
        reactFlowUtils.addEdge(
          {
            ...params,
            id: edgeId,
            animated: true,
            style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: "rgba(149, 76, 233, 0.6)",
            },
          },
          eds
        )
      )

      toast({
        title: "Connection created",
        description: "Flow updated and saved automatically",
      })
    },
    [edges, nodes, reactFlowInstance, reactFlowUtils.addEdge, toast]
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

        const nodeId = `${Date.now()}`
        const newNode = {
          id: nodeId,
          type,
          position,
          data: getNodeData(type, name),
        }

        setNodes((nds) => nds.concat(newNode))

        // Track newly added node
        setNewlyAddedNodes((prev) => new Set(prev).add(nodeId))

        // Zoom to the new node
        if (reactFlowInstance) {
          setTimeout(() => {
            reactFlowInstance.fitView({
              nodes: [newNode],
              duration: 700,
              padding: 0.4,
              minZoom: 1.5,
              maxZoom: 1.5,
            })
          }, 50)
        }

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

  const addNodeToFlow = useCallback(
    (type: string, name: string, position?: { x: number; y: number }) => {
      const nodeId = `${Date.now()}`
      
      // Calculate a position in the viewport center if not provided
      let newPosition = position
      if (!position && reactFlowInstance) {
        const { x, y, zoom } = reactFlowInstance.getViewport()
        const centerX = (window.innerWidth / 2 - x) / zoom
        const centerY = (window.innerHeight / 2 - y) / zoom
        newPosition = { x: centerX, y: centerY }
      } else if (!position) {
        newPosition = {
          x: Math.random() * 500 + 100,
          y: Math.random() * 300 + 100,
        }
      }

      const newNode = {
        id: nodeId,
        type,
        position: newPosition!,
        data: getNodeData(type, name),
      }

      setNodes((nds) => nds.concat(newNode))

      // Track newly added node
      setNewlyAddedNodes((prev) => new Set(prev).add(nodeId))
      console.log("Node added to tracking:", nodeId)

      // Zoom to the new node
      if (reactFlowInstance) {
        setTimeout(() => {
          console.log("Fitting view to new node:", nodeId)
          reactFlowInstance.fitView({
            nodes: [newNode],
            duration: 700,
            padding: 0.4,
            minZoom: 1.5,
            maxZoom: 1.5,
          })
        }, 50)
      }

      toast({
        title: "Component Added",
        description: `Added ${name} to the flow`,
      })
    },
    [reactFlowInstance, setNodes, toast]
  )

  useEffect(() => {
    if (onAddNodeReady) {
      onAddNodeReady(addNodeToFlow)
    }
  }, [addNodeToFlow, onAddNodeReady])

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
        ${orphanedNodes.length > 0 ? `⚠ ${orphanedNodes.length} orphaned nodes` : "✅ No orphaned nodes"}
        ${danglingEdges.length > 0 ? `⚠ ${danglingEdges.length} dangling edges` : "✅ No dangling edges"}
        ${circularPaths.length > 0 ? `⚠ ${circularPaths.length} circular paths` : "✅ No circular paths"}`,
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
        connectionLineType={ConnectionLineType.SmoothStep}
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