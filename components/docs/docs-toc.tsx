"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

export function DocsToc() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"))
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: Number(el.tagName.substring(1)),
      }))

    setHeadings(headingElements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headingElements.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headingElements.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="hidden xl:block w-64 shrink-0 border-l border-gray-200 dark:border-gray-800 pl-6 py-10 pr-4">
      <div className="sticky top-20">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">On this page</h4>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block text-sm py-1 transition-colors",
                heading.level === 2 ? "pl-0" : "pl-4",
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
