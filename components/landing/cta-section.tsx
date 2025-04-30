"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center p-10 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-white">Create your first flow</h2>
          <p className="mb-8 text-white/70">
            Join thousands of developers constructing their AI workflows.
            <br />
            Start your first Innoflow project now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/docs">
            <Button className="relative rounded-md px-3.5 py-2 m-1 overflow-hidden group cursor-pointer border-2 font-medium border-black text-white bg-black hover:bg-black">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gradient-to-r from-black to-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-black ease">Explore</span>
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}