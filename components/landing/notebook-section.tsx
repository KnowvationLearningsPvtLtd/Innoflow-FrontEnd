"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Sparkles, Zap, GitBranch, BarChart3, Rocket } from "lucide-react"

interface Hotspot {
  id: string
  title: string
  description: string
  position: { x: string; y: string }
  icon: React.ReactNode
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "step-one",
    title: "Host Anywhere",
    description: "Deploy yourself or sign up for our cloud platform to get started.",
    position: { x: "15%", y: "40%" },
    icon: <Rocket size={24} />
  },
  {
    id: "step-two",
    title: "Deploy & Scale",
    description: "Use our secure cloud platform to deploy and scale your application easily.",
    position: { x: "38%", y: "30%" },
    icon: <Zap size={24} />
  },
  {
    id: "step-three",
    title: "Connect Components",
    description: "Draw connections between building blocks to create powerful AI workflows.",
    position: { x: "62%", y: "30%" },
    icon: <GitBranch size={24} />
  },
  {
    id: "step-four",
    title: "Test & Iterate",
    description: "Test and improve your application with powerful analytics and insights.",
    position: { x: "85%", y: "40%" },
    icon: <BarChart3 size={24} />
  },
  {
    id: "step-five",
    title: "Go Live",
    description: "Launch your application and monitor performance in real-time.",
    position: { x: "50%", y: "70%" },
    icon: <Sparkles size={24} />
  }
]

export function FeatureBoard() {
  const [activeHotspot, setActiveHotspot] = useState<string>(HOTSPOTS[0].id)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  
  // Auto-advance hotspots
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveHotspot(current => {
        const currentIndex = HOTSPOTS.findIndex(h => h.id === current)
        const nextIndex = (currentIndex + 1) % HOTSPOTS.length
        return HOTSPOTS[nextIndex].id
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Get active hotspot index
  const activeIndex = HOTSPOTS.findIndex(h => h.id === activeHotspot)

  // Removed star animation variables

  return (
    <section 
      ref={sectionRef}
      className="py-12 relative bg-black overflow-hidden"
    >
      {/* Background animated particles removed */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-4 text-center text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From Notebook to Production
          </motion.h2>
          <motion.p
            className="text-center text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Publishing your AI application shouldn't be a headache.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-xl p-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Gradient background with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-indigo-900/40 border border-white/10 rounded-xl">
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          </div>

          {/* Hotspots with connector lines */}
          <div className="absolute inset-0">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" strokeLinecap="round">
              {/* Line from step 1 to step 2 */}
              <motion.line 
                x1="15%" 
                y1="40%" 
                x2="38%" 
                y2="30%" 
                stroke={activeIndex >= 0 ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)"} 
                strokeWidth="2" 
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex >= 1 ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Line from step 2 to step 3 */}
              <motion.line 
                x1="38%" 
                y1="30%" 
                x2="62%" 
                y2="30%" 
                stroke={activeIndex >= 1 ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)"} 
                strokeWidth="2" 
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex >= 2 ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Line from step 3 to step 4 */}
              <motion.line 
                x1="62%" 
                y1="30%" 
                x2="85%" 
                y2="40%" 
                stroke={activeIndex >= 2 ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)"} 
                strokeWidth="2" 
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex >= 3 ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Line from step 4 to step 5 */}
              <motion.line 
                x1="85%" 
                y1="40%" 
                x2="50%" 
                y2="70%" 
                stroke={activeIndex >= 3 ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)"} 
                strokeWidth="2" 
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex >= 4 ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Line from step 5 back to step 1 to complete the loop */}
              <motion.line 
                x1="50%" 
                y1="70%" 
                x2="15%" 
                y2="40%" 
                stroke={activeIndex >= 4 ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)"} 
                strokeWidth="2" 
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex === 4 ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Hotspot icons */}
            {HOTSPOTS.map((hotspot, index) => {
              const isActive = activeHotspot === hotspot.id
              const isPast = HOTSPOTS.findIndex(h => h.id === activeHotspot) > index
              
              return (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{
                    left: hotspot.position.x,
                    top: hotspot.position.y,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <motion.div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-500 cursor-pointer
                      ${isActive ? "bg-purple-600" : isPast ? "bg-purple-900" : "bg-gray-800"}
                      ${isActive ? "shadow-lg shadow-purple-500/30" : ""}
                    `}
                    onClick={() => {
                      setActiveHotspot(hotspot.id)
                      setIsAutoPlaying(false)
                    }}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isActive ? 1.1 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="text-white" role="img" aria-hidden="true">
                      {hotspot.icon}
                    </span>
                    
                    {/* Active indicator pulse */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-600"
                        initial={{ opacity: 0.3, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.5 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>
          
          {/* Active hotspot information */}
          <AnimatePresence mode="wait">
            {HOTSPOTS.map(hotspot => {
              if (hotspot.id !== activeHotspot) return null;
              
              return (
                <motion.div
                  key={hotspot.id}
                  className="absolute bottom-6 left-0 right-0 mx-auto w-full max-w-sm bg-black/60 backdrop-blur-md rounded-lg p-2 border border-purple-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 rounded-full p-2 mr-4 text-white">
                      {hotspot.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{hotspot.title}</h3>
                      <p className="text-white/70 text-sm">{hotspot.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
          
          {/* Step indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
            {HOTSPOTS.map((hotspot, index) => {
              const isActive = activeHotspot === hotspot.id;
              const isPast = HOTSPOTS.findIndex(h => h.id === activeHotspot) > index;
              
              return (
                <button
                  key={hotspot.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${isActive ? "bg-purple-500 w-6" : isPast ? "bg-purple-500/50" : "bg-white/20"}`}
                  onClick={() => {
                    setActiveHotspot(hotspot.id);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`View step ${index + 1}: ${hotspot.title}`}
                />
              )
            })}
          </div>
          
          {/* Controls */}
          <div className="absolute top-4 right-4">
            <button
              className={`
                p-2 rounded-full transition-colors
                ${isAutoPlaying ? "bg-purple-500/20 text-purple-400" : "bg-white/10 text-white/60"}
                hover:bg-purple-500/30
              `}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              title={isAutoPlaying ? "Pause" : "Auto-play"}
            >
              {isAutoPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}