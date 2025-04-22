"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FlowApiSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-4">Flow as an API</h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto">
            Use a free, production-grade cloud to deploy your flow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <Image
                src="/images/flow.jpg"
                alt="Python API Example"
                width={800}
                height={400}
                className="rounded-md object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Instant API Endpoints</h3>
              <p className="text-white/70">
                Turn any flow into a production-ready API endpoint with a single click. No backend engineering required.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Serverless Deployment</h3>
              <p className="text-white/70">
                Deploy your flows to a serverless infrastructure that scales automatically with your usage.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">SDK Integration</h3>
              <p className="text-white/70">
                Integrate your flows into any application with our Python, JavaScript, and REST API clients.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
