"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function NotebookSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-6 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          From Notebook to Production
        </motion.h2>
        <motion.p
          className="mb-12 text-center text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Publishing your AI application shouldn't be a headache.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 transition"
            variants={item}
          >
            <div className="mb-6 aspect-video rounded-md border border-white/10 bg-black/50 p-4 ">
              <Image
                src="/images/one.jpg"
                alt="Deploy yourself or sign up"
                width={320}
                height={200}
                className="object-cover w-full h-full rounded"
              />
            </div>
            <h3 className="mb-2 text-center text-lg font-medium text-white">
            Host it yourself or create a free cloud account to start.
            </h3>
            <div className="mt-4 flex justify-center gap-2">
              <Link href="/signup">
                <button className="rounded bg-white/10 px-3 py-1 text-xs text-white/70 hover:bg-white/20 transition-colors">
                  Sign up
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 transition"
          >
            <div className="mb-6 aspect-video rounded-md border border-white/10 bg-black/50 p-4">
              <Image
                src="/images/two.jpg"
                alt="Deploy and scale"
                width={320}
                height={200}
                className="object-cover w-full h-full rounded"
              />
            </div>
            <h3 className="mb-2 text-center text-lg font-medium text-white">
            Use a secure cloud platform to deploy and scale your app.
            </h3>
            <div className="mt-4 flex justify-center gap-2">
              <button className="rounded bg-white/10 px-3 py-1 text-xs text-white/70 hover:bg-white/20 transition-colors">
                Learn more
              </button>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm ring-1 ring-transparent hover:ring-emerald-500 transition"
            variants={item}
          >
            <div className="mb-6 aspect-video rounded-md border border-white/10 bg-black/50 p-4">
              <Image
                src="/images/three.jpg"
                alt="Iterate and evaluate"
                width={320}
                height={200}
                className="object-cover w-full h-full rounded"
              />
            </div>
            <h3 className="mb-2 text-center text-lg font-medium text-white">
            Test and improve your app beyond development with insights.
            </h3>
            <div className="mt-4 flex justify-center gap-2">
              <button className="rounded bg-white/10 px-3 py-1 text-xs text-white/70 hover:bg-white/20 transition-colors">
                Explore
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
