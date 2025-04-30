"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { NotebookSection } from "@/components/landing/notebook-section"
import { CTASection } from "@/components/landing/cta-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { FlowApiSection } from "@/components/landing/flow-api-section"
import { DragDropSection } from "@/components/landing/drag-drop-section"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar /> 
      <HeroSection />

      {/* Pinned and animated sections */}
      <PinnedSections />

      <IntegrationSection />
      <NotebookSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function PinnedSections() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 80%"], // Reduce scroll range
  });

  // Adjust animation ranges for a smaller scroll effect
  const firstSectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const secondSectionOpacity = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);

  const firstSectionY = useTransform(scrollYProgress, [0, 0.4], ["0vh", "-5vh"]); // Reduced movement
  const secondSectionY = useTransform(scrollYProgress, [0.4, 1], ["5vh", "0vh"]);

  const firstSectionScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]); // Subtle scaling
  const secondSectionScale = useTransform(scrollYProgress, [0.4, 1], [0.98, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]"> {/* Reduced height */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* First Section */}
        <motion.div
          style={{ opacity: firstSectionOpacity, y: firstSectionY, scale: firstSectionScale }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center dragdrop-bg transition-colors duration-1000 ease-in-out"
        >
          <div className="text-white w-full h-full flex items-center justify-center rounded-lg ">
            <DragDropSection />
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          style={{ opacity: secondSectionOpacity, y: secondSectionY, scale: secondSectionScale }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center flowapi-bg transition-colors duration-1000 ease-in-out"
        >
          <div className="text-white w-full h-full flex items-center justify-center rounded-lg ">
            <FlowApiSection />
          </div>
        </motion.div>
      </div>
    </div>
  );
}