import { NextResponse } from "next/server"
import type { Node, Edge } from "reactflow"


const getFlowData = (flowId: string) => {
  let nodes: Node[] = []
  let edges: Edge[] = []

//Basic prompting
if (flowId === "flow-1") {
    nodes = [
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
    edges = [
     {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "rgba(149, 76, 233, 0.6)", strokeWidth: 2 },
        markerEnd: {
          type: "arrowclosed" as any,
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
          type: "arrowclosed" as any,
          color: "rgba(149, 76, 233, 0.6)",
        },
      },
    ]
  }
// Vector Store RAG
if (flowId === "flow-2") {
nodes = [
        {
        id: "1",
        type: "text-input",
        position: { x: 100, y: 100 },
        data: { label: "User Query", inputs: { text: "" } },
      },
      {
        id: "2",
        type: "vector-store",
        position: { x: 300, y: 100 },
        data: { label: "Vector Store", vectorDB: "pinecone", dimension: 1536 },
      },
      {
        id: "3",
        type: "openai",
        position: { x: 500, y: 100 },
        data: { label: "OpenAI", model: "gpt-4o-mini", temperature: 0.7 },
      },
      {
        id: "4",
        type: "text-output",
        position: { x: 700, y: 100 },
        data: { label: "Response" },
      },

]
edges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
      { id: "e3-4", source: "3", target: "4", animated: true },

]
}
// Simple Agent
if (flowId === "flow-3") {
    nodes = [
      {
        id: "1",
        type: "text-input",
        position: { x: 100, y: 100 },
        data: { label: "User Query", inputs: { text: "" } },
      },
      {
        id: "2",
        type: "agent",
        position: { x: 300, y: 100 },
        data: { label: "Agent", instructions: "You are a helpful agent." },
      },
      {
        id: "3",
        type: "text-output",
        position: { x: 500, y: 100 },
        data: { label: "Agent Output" },
      },
   ]
   edges = [
   { id: "e1-2", source: "1", target: "2", animated: true },
   { id: "e2-3", source: "2", target: "3", animated: true },

]
}

// Data Cleaner
if (flowId === "flow-4") {
    nodes = [
      {
        id: "1",
        type: "file-input",
        position: { x: 100, y: 100 },
        data: { label: "Upload Data", acceptedTypes: ".csv,.xlsx" },
      },
      {
        id: "2",
        type: "text-splitter",
        position: { x: 300, y: 100 },
        data: { label: "Data Splitter" },
      },
      {
        id: "3",
        type: "text-output",
        position: { x: 500, y: 100 },
        data: { label: "Cleaned Data" },
      },
    ]
    edges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
    ]
}
// PDF to Text Converter
  if (flowId === "flow-5") {
    nodes = [
      {
        id: "1",
        type: "file-input",
        position: { x: 100, y: 100 },
        data: { label: "PDF Upload", acceptedTypes: ".pdf" },
      },
      {
        id: "2",
        type: "document-loader",
        position: { x: 300, y: 100 },
        data: { label: "Document Loader" },
      },
      {
        id: "3",
        type: "text-output",
        position: { x: 500, y: 100 },
        data: { label: "Extracted Text" },
      },
    ]
    edges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
    ]
}
// Customer Support Chatbot
  if (flowId === "flow-6") {
    nodes =[
      {
        id: "1",
        type: "text-input",
        position: { x: 100, y: 100 },
        data: { label: "Customer Message", inputs: { text: "" } },
      },
      {
        id: "2",
        type: "openai",
        position: { x: 300, y: 100 },
        data: { label: "Chatbot (OpenAI)", model: "gpt-4o-mini", temperature: 0.5 },
      },
      {
        id: "3",
        type: "text-output",
        position: { x: 500, y: 100 },
        data: { label: "Bot Reply" },
      },
    ]
    edges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
    ]
  }
  // Task Automation Bot
  if (flowId === "flow-7") {
    nodes = [
      {
        id: "1",
        type: "api-input",
        position: { x: 100, y: 100 },
        data: { label: "API Trigger", apiUrl: "", method: "POST" },
      },
      {
        id: "2",
        type: "tool",
        position: { x: 300, y: 100 },
        data: { label: "Automation Tool", functionName: "runTask" },
      },
      {
        id: "3",
        type: "text-output",
        position: { x: 500, y: 100 },
        data: { label: "Task Result" },
      },
    ]
    edges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
    ]
  }
  // Team Knowledge Base
  if (flowId === "shared-1") {
    nodes = [
      {
        id: "1",
        type: "text-input",
        position: { x: 100, y: 100 },
        data: { label: "Team Question", inputs: { text: "" } },
      },
      {
        id: "2",
        type: "vector-store",
        position: { x: 300, y: 100 },
        data: { label: "Team Vector Store", vectorDB: "pinecone" },
      },
      {
        id: "3",
        type: "openai",
        position: { x: 500, y: 100 },
        data: { label: "Team LLM", model: "gpt-4o-mini" },
      },
      {
        id: "4",
        type: "text-output",
        position: { x: 700, y: 100 },
        data: { label: "Team Answer" },
      },
    ]
    edges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
      { id: "e3-4", source: "3", target: "4", animated: true },
    ]
  }
  // Collaboration Dashboard
  if (flowId === "shared-2") {
    nodes =[
      {
        id: "1",
        type: "file-input",
        position: { x: 100, y: 100 },
        data: { label: "Upload Document", acceptedTypes: ".docx,.pdf" },
      },
      {
        id: "2",
        type: "document-loader",
        position: { x: 300, y: 100 },
        data: { label: "Document Loader" },
      },
      {
        id: "3",
        type: "agent",
        position: { x: 500, y: 100 },
        data: { label: "Reviewer Agent", instructions: "Review and comment on the document." },
      },
      {
        id: "4",
        type: "text-output",
        position: { x: 700, y: 100 },
        data: { label: "Review Output" },
      },
    ]
    edges = [
     { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
      { id: "e3-4", source: "3", target: "4", animated: true },
    ]
  }

  return { nodes, edges }
}


export async function GET(
  request: Request,
  { params }: { params: Promise<{ flowId: string }> }
) {
  const { flowId } = await params
  const data = getFlowData(flowId)

  return NextResponse.json(data)
}