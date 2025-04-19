"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl text-center"
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
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
              >
                Get Started For Free
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Explore Innoflow
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
