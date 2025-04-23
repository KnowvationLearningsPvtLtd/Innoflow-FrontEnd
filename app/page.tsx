"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { TestimonialSection } from "@/components/landing/testimonial-section"
import { NotebookSection } from "@/components/landing/notebook-section"
import { CTASection } from "@/components/landing/cta-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { AgentsSection } from "@/components/landing/agents-section"
import { FlowApiSection } from "@/components/landing/flow-api-section"
import { motion, useScroll, useTransform } from "framer-motion"

// Import the updated versions of your components
import { FeatureSection } from "@/components/landing/feature-section"
import { DragDropSection } from "@/components/landing/drag-drop-section"

export default function Home() {
  const containerRef = useRef(null)
  
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <HeroSection />
      
      {/* Smooth scrolling section container */}
      <div ref={containerRef} className="relative">
        <TransitionSection zIndex={10} component={<FeatureSection />} />
        <TransitionSection zIndex={9} component={<DragDropSection />} />
      </div>
      
      <AgentsSection />
      <FlowApiSection />
      <IntegrationSection />
      <TestimonialSection />
      <NotebookSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function TransitionSection({ component, zIndex }: { component: React.ReactNode; zIndex: number }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["20vh", "0vh", "0vh", "-20vh"]
  )
  
  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen relative" 
      style={{ zIndex }}
    >
      <motion.div 
        style={{ 
          opacity, 
          y,
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%"
        }}
        className="flex items-center justify-center overflow-hidden"
      >
        {component}
      </motion.div>
    </div>
  )
}