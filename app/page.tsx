"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { FeatureBoard } from "@/components/landing/notebook-section"
import { CTASection } from "@/components/landing/cta-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react";
import { Code, Database, Cpu, MessageSquare, Brain, Workflow } from "lucide-react";

// Enhanced component items - added more AI workflow components
const items = [
  {
    id: "api",
    icon: Code,
    title: "API Connector",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "llm",
    icon: Cpu,
    title: "LLM Process",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "chat",
    icon: MessageSquare,
    title: "Chat Interface",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "brain",
    icon: Brain,
    title: "AI Agent",
    color: "from-pink-500 to-red-500"
  },
  {
    id: "database",
    icon: Database,
    title: "Database",
    color: "from-emerald-500 to-teal-500"
  }
];

// Define interfaces for our types
interface Position {
  x: number;
  y: number;
}

interface Node {
  id: string;
  type: string;
  position: Position;
}

interface Connection {
  id: string;
  from: string;
  to: string;
  fromPos: Position;
  toPos: Position;
}

// Enhanced WorkflowAnimation Component with clearer animation
const WorkflowAnimation = () => {
  // Animation states
  const [animationStep, setAnimationStep] = useState(0);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [deploymentActive, setDeploymentActive] = useState(false);
  const [deploymentComplete, setDeploymentComplete] = useState(false);
  const [deploymentMessage, setDeploymentMessage] = useState("");
  
  // Animation loop timing
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 18); // Extended to 18 steps for clearer animation
    }, 1200); // Slowed down to 1.2 seconds per step for better visibility
    
    return () => clearInterval(animationInterval);
  }, []);
  
  // Handle the animation steps
  useEffect(() => {
    switch(animationStep) {
      case 0: // Reset animation
        setNodes([]);
        setConnections([]);
        setDeploymentActive(false);
        setDeploymentComplete(false);
        setDeploymentMessage("");
        break;
      case 1: // Add API component
        setNodes([{
          id: "node-1",
          type: "api",
          position: { x: 120, y: 180 },
        }]);
        break;
      case 3: // Add Chat Interface
        setNodes(prev => [...prev, {
          id: "node-2",
          type: "chat",
          position: { x: 280, y: 100 },
        }]);
        break;
      case 5: // Add LLM component
        setNodes(prev => [...prev, {
          id: "node-3",
          type: "llm",
          position: { x: 440, y: 180 },
        }]);
        break;
      case 7: // Add AI Agent
        setNodes(prev => [...prev, {
          id: "node-4",
          type: "brain",
          position: { x: 600, y: 100 },
        }]);
        break;
      case 9: // Add Database component
        setNodes(prev => [...prev, {
          id: "node-5",
          type: "database",
          position: { x: 600, y: 260 },
        }]);
        break;
      case 10: // Add first connection: API to Chat
        setConnections(prev => [...prev, {
          id: "conn-1-2",
          from: "node-1",
          to: "node-2",
          fromPos: { x: 120, y: 180 },
          toPos: { x: 280, y: 100 }
        }]);
        break;
      case 11: // Add second connection: Chat to LLM
        setConnections(prev => [...prev, {
          id: "conn-2-3",
          from: "node-2",
          to: "node-3",
          fromPos: { x: 280, y: 100 },
          toPos: { x: 440, y: 180 }
        }]);
        break;
      case 12: // Add third connection: LLM to Agent
        setConnections(prev => [...prev, {
          id: "conn-3-4",
          from: "node-3",
          to: "node-4",
          fromPos: { x: 440, y: 180 },
          toPos: { x: 600, y: 100 }
        }]);
        break;
      case 13: // Add fourth connection: LLM to Database
        setConnections(prev => [...prev, {
          id: "conn-3-5",
          from: "node-3",
          to: "node-5",
          fromPos: { x: 440, y: 180 },
          toPos: { x: 600, y: 260 }
        }]);
        break;
      case 14: // Show deployment starting
        setDeploymentActive(true);
        setDeploymentMessage("Starting deployment...");
        break;
      case 15: // Show deployment progress
        setDeploymentMessage("Validating workflow...");
        break;
      case 16: // Show deployment progress
        setDeploymentMessage("Provisioning resources...");
        break;
      case 17: // Show deployment complete
        setDeploymentComplete(true);
        setDeploymentMessage("Deployment complete!");
        break;
      default:
        break;
    }
  }, [animationStep]);

  return (
    <div className="flex flex-col h-full">
      {/* Components area - improved layout */}
      <div className="flex justify-center space-x-4 mb-4 p-2 bg-black/20 rounded-t-lg border-b border-purple-500/20">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`bg-gradient-to-r ${item.color} p-3 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2`}
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: animationStep === items.findIndex(i => i.id === item.id) + 1 ? 1.1 : 1,
              boxShadow: animationStep === items.findIndex(i => i.id === item.id) + 1 
                ? "0 0 15px rgba(255, 255, 255, 0.5)" 
                : "0 0 0px rgba(255, 255, 255, 0)"
            }}
          >
            <item.icon className="w-5 h-5 text-white" />
            <span className="text-white text-xs font-medium hidden sm:inline">{item.title}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Canvas area - adjusted for better visibility of complete animation */}
      <div 
        className="relative flex-1 bg-gradient-to-r from-purple-900/90 to-purple-800/90 rounded-lg overflow-hidden"
        style={{ height: "450px" }}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", 
          backgroundSize: "25px 25px" 
        }} />
        
        {/* Decorative gradient blobs */}
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl" 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }}
        />
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Animated connections */}
          {connections.map((connection, index) => {
            const from = connection.fromPos;
            const to = connection.toPos;
            
            // Calculate control points for the curve
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            
            return (
              <motion.path
                key={connection.id}
                d={`M ${from.x} ${from.y} Q ${midX} ${midY}, ${to.x} ${to.y}`}
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                filter={deploymentActive ? "url(#glow)" : ""}
                fill="none"
                strokeLinecap="round"
                className="opacity-0"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ 
                  opacity: 0.8, 
                  pathLength: 1,
                  strokeDasharray: deploymentActive ? "5,5" : "0,0",
                  strokeWidth: deploymentActive ? 4 : 3,
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.3
                }}
              />
            );
          })}
        </svg>
        
        {/* Nodes */}
        <AnimatePresence>
          {nodes.map((node) => {
            const nodeItem = items.find(item => item.id === node.type);
            if (!nodeItem) return null;
            
            return (
              <motion.div
                key={node.id}
                className={`absolute bg-gradient-to-r ${nodeItem.color} p-3 px-4 rounded-lg shadow-lg`}
                style={{
                  left: node.position.x,
                  top: node.position.y,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: deploymentActive ? "0 0 20px rgba(255, 255, 255, 0.3)" : "0 0 10px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ type: "spring", damping: 12 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                {/* Input connector */}
                <motion.div
                  className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    boxShadow: deploymentActive ? "0 0 10px rgba(255, 255, 255, 0.8)" : "none"
                  }}
                  transition={{ delay: 0.3 }}
                />
                
                {/* Output connector */}
                <motion.div
                  className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    boxShadow: deploymentActive ? "0 0 10px rgba(255, 255, 255, 0.8)" : "none"
                  }}
                  transition={{ delay: 0.3 }}
                />

                <div className="flex items-center gap-2">
                  <nodeItem.icon className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium whitespace-nowrap">{nodeItem.title}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Enhanced Deployment animation overlay */}
        {deploymentActive && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Deployment progress pulse effect */}
            <motion.div 
              className={`absolute inset-0 ${deploymentComplete ? 'bg-green-500/5' : 'bg-blue-500/5'}`}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [0.95, 1, 0.95]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Deployment status message */}
            <motion.div 
              className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
                deploymentComplete ? 'bg-green-500/20' : 'bg-blue-500/20'
              } px-6 py-3 rounded-full`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 12 }}
            >
              <div className="flex items-center gap-2">
                {deploymentComplete ? (
                  <>
                    <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-100 font-medium">{deploymentMessage}</span>
                  </>
                ) : (
                  <>
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-blue-400"
                      animate={{ 
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    />
                    <span className="text-blue-100 font-medium">{deploymentMessage}</span>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Empty state message - only shows at the beginning of animation */}
        {nodes.length === 0 && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white/70 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: animationStep === 0 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <p className="text-sm text-white/70">
                Watch how easy it is to<br />
                build and deploy your AI workflows
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />

      {/* Pinned and animated sections */}
      <PinnedSections />

      <IntegrationSection />
      <FeatureBoard />
      <CTASection />
      <Footer />
    </main>
  )
}

function PinnedSections() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // First section stays fully visible
  const firstSectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 1]
  );

  // Second section fades in and stays
  const secondSectionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [0, 1]
  );

  // First section stays in place
  const firstSectionY = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["0%", "0%"]
  );

  // Second section slides up more gradually
  const secondSectionY = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["100%", "0%"]
  );

  // Adjusted scale animations
  const firstSectionScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [1, 1, 0.98]
  );

  const secondSectionScale = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    [0.98, 1]
  );

  // Z-index transitions happen earlier
  const firstSectionZIndex = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35],
    [2, 2, 1]
  );

  const secondSectionZIndex = useTransform(
    scrollYProgress,
    [0.3, 0.35],
    [1, 2]
  );

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      {/* Sticky container for pinned sections */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* First Section - Workflow Builder Animation */}
        <motion.div
          style={{
            opacity: firstSectionOpacity,
            y: firstSectionY,
            scale: firstSectionScale,
            zIndex: firstSectionZIndex,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="relative flex h-[85vh] flex-col gap-y-6 overflow-hidden rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:flex-row lg:items-center lg:gap-x-20 dragdrop-bg">
              {/* Modified layout - Heading at top, full animation below */}
              <div className="w-full h-full flex flex-col items-center">
                {/* Heading at the top */}
                <h2 className="text-5xl font-bold text-white mb-8 text-center">
                  Drag.
                  Drop.
                  Deploy.
                </h2>
                
                {/* Animation container - full width, proper height to fit without cropping */}
                <div className="w-full flex-1 flex justify-center">
                  <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 rounded-xl p-4 border border-purple-700/30 shadow-lg w-full max-w-3xl">
                    <div className="h-full rounded-lg overflow-hidden">
                      <WorkflowAnimation />
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Section - API Section - Kept the same as original */}
        <motion.div
          style={{
            opacity: secondSectionOpacity,
            y: secondSectionY,
            scale: secondSectionScale,
            zIndex: secondSectionZIndex,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="relative flex h-[80vh] flex-col gap-y-6 overflow-hidden rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:flex-row lg:items-center lg:gap-x-20 dragdrop-bg">
              {/* FlowApiSection content */}
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Left side - Text content */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-5xl font-bold text-white mb-4">
                      Powerful API.<br />
                      Simple Interface.
                    </h2>

                    <p className="text-lg text-purple-100 mb-8">
                      Create complex AI workflows with an intuitive drag-and-drop interface. Connect
                      components, visualize data flow, and iterate rapidly.
                    </p>

                    {/* Feature list with checkmarks */}
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="text-purple-100">
                          <span className="font-semibold">Visual Flow Builder</span> - Connect APIs and components visually
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="text-purple-100">
                          <span className="font-semibold">Component Marketplace</span> - Add pre-built AI components to your workflow
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-purple-300 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="text-purple-100">
                          <span className="font-semibold">One-click Deployment</span> - Deploy AI agents with zero infrastructure setup
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Code visualization */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 rounded-xl p-2 border border-purple-700/30 shadow-lg">
                      <div className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 rounded-lg overflow-hidden">
                        {/* Code editor mockup */}
                        <div className="bg-[#1e1e2e] p-4 font-mono text-xs">
                          <div className="flex items-center gap-2 text-purple-300 mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2">// component.js</span>
                          </div>

                          <pre className="text-green-400">import</pre>
                          <pre className="text-white">{'{'} <span className="text-blue-400">useState</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'react'</span></pre>
                          <pre className="text-white">{'{'} <span className="text-blue-400">OpenAI</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'langchain/llms/openai'</span></pre>
                          <pre className="text-white">{'{'} <span className="text-blue-400">PromptTemplate</span> {'}'} <span className="text-green-400">from</span> <span className="text-yellow-300">'langchain/prompts'</span></pre>
                          <pre className="text-white mt-4">
                            <span className="text-green-400">// Initialize the model</span>
                          </pre>
                          <pre className="text-white">
                            <span className="text-green-400">const</span> model = <span className="text-blue-400">new</span> OpenAI({'{'}
                          </pre>
                          <pre className="text-white ml-4">
                            temperature: 0.7,
                          </pre>
                          <pre className="text-white ml-4">
                            modelName: <span className="text-yellow-300">"gpt-4"</span>,
                          </pre>
                          <pre className="text-white">{'}'});</pre>
                          <div className="mt-4 flex items-center">
                            <div className="bg-purple-700 text-white px-3 py-1 rounded text-xs font-sans">
                              OpenAI
                            </div>
                            <div className="h-px w-8 bg-purple-500"></div>
                            <div className="bg-indigo-600 text-white px-3 py-1 rounded text-xs font-sans">
                              Prompt
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}