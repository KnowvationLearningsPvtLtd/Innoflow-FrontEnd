"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const boxControls = useAnimation();
  
  // Simulate scroll detection
  useEffect(() => {
    boxControls.start({
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8
      }
    });
  }, [boxControls]);

  return (
    <section className="py-20 min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto w-5/6 text-center p-10 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 70 }}
          animate={boxControls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: isHovered 
              ? "linear-gradient(145deg, rgba(35, 0, 70, 0.7), rgba(70, 0, 120, 0.5))"
              : "linear-gradient(145deg, rgba(30, 0, 60, 0.6), rgba(60, 0, 90, 0.4))",
            backdropFilter: "blur(10px)",
            border: isHovered
              ? "1px solid rgba(158, 63, 246, 0.3)"
              : "1px solid rgba(138, 43, 226, 0.2)",
            boxShadow: isHovered 
              ? "0 0 60px rgba(158, 63, 246, 0.4)"
              : "0 0 40px rgba(138, 43, 226, 0.2)",
            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}
        >
          {/* Animated background layers */}
          <motion.div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "radial-gradient(circle at center, rgba(138, 43, 226, 0.15) 0%, transparent 70%)",
              opacity: isHovered ? 0.8 : 0.3,
              transition: "opacity 0.5s ease-out"
            }}
            animate={{
              scale: isHovered ? [1, 1.05, 1] : [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Edge border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: isHovered 
                ? "inset 0 0 15px rgba(158, 63, 246, 0.3)" 
                : "inset 0 0 10px rgba(138, 43, 226, 0.1)",
              transition: "box-shadow 0.5s ease-out"
            }}
          />
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 rounded-2xl z-0 overflow-hidden"
            style={{
              background: "linear-gradient(45deg, rgba(138, 43, 226, 0.1), transparent 60%)",
              opacity: 0
            }}
            animate={{
              opacity: isHovered ? 0.6 : 0,
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut"
            }}
          />
          
                   
          <motion.h2 
            className="mb-6 text-4xl font-bold relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: "linear-gradient(120deg, #fff, #e0b0ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            Create your first flow
          </motion.h2>
          
          <motion.p 
            className="mb-8 text-white/70 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join thousands of developers constructing their AI workflows.
            <br />
            Start your first Innoflow project now.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/signup">
              <motion.div
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button 
                  size="lg"
                  className="relative rounded-md px-8 py-4 overflow-hidden cursor-pointer border-none text-white text-lg font-medium"
                  style={{
                    background: isButtonHovered 
                      ? "linear-gradient(45deg, #8e2de2, #b800ff)" 
                      : "linear-gradient(45deg, #6a11cb, #9442fe)",
                    boxShadow: isButtonHovered
                      ? "0 8px 20px rgba(138, 43, 226, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
                      : "0 4px 15px rgba(106, 17, 203, 0.4)",
                    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  }}
                >
                  <motion.span 
                    className="relative z-10"
                    animate={{ 
                      textShadow: isButtonHovered 
                        ? "0 0 8px rgba(255, 255, 255, 0.6)" 
                        : "0 0 0px rgba(255, 255, 255, 0)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Get Started For Free
                  </motion.span>

                  {/* Button shine effect */}
                  <motion.span 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    style={{
                      transform: "skewX(-20deg)",
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ 
                      x: isButtonHovered ? "100%" : "-100%"
                    }}
                    transition={{ 
                      duration: isButtonHovered ? 0.8 : 0.0,
                      ease: "easeOut",
                      repeat: isButtonHovered ? Infinity : 0,
                      repeatDelay: 1.5
                    }}
                  />

                  {/* Button pulse effect */}
                  {isButtonHovered && (
                    <motion.span
                      className="absolute inset-0 rounded-md"
                      initial={{ opacity: 0.7, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.2 }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity
                      }}
                      style={{
                        background: "linear-gradient(45deg, #6a11cb, #9442fe)",
                        filter: "blur(4px)"
                      }}
                    />
                  )}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}