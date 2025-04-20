"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  Book,
  ChevronDown,
  ChevronRight,
  FileText,
  Home,
  Layers,
  Menu,
  Package,
  Settings,
  PenToolIcon as Tool,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarLink {
  title: string
  href: string
  icon?: React.ReactNode
  submenu?: SidebarLink[]
}

const sidebarLinks: SidebarLink[] = [
  {
    title: "Introduction",
    href: "/docs",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Getting Started",
    href: "#",
    icon: <Book className="h-4 w-4" />,
    submenu: [
      {
        title: "Installation",
        href: "/docs/get-started-installation",
      },
      {
        title: "Quickstart",
        href: "/docs/get-started-quickstart",
      },
    ],
  },
  {
    title: "Core Concepts",
    href: "#",
    icon: <Layers className="h-4 w-4" />,
    submenu: [
      {
        title: "Overview",
        href: "/docs/concepts-overview",
      },
      {
        title: "Nodes",
        href: "/docs/concepts-nodes",
      },
      {
        title: "Edges",
        href: "/docs/concepts-edges",
      },
      {
        title: "Flows",
        href: "/docs/concepts-flows",
      },
    ],
  },
  {
    title: "Components",
    href: "#",
    icon: <Package className="h-4 w-4" />,
    submenu: [
      {
        title: "Models",
        href: "/docs/components-models",
      },
      {
        title: "Prompts",
        href: "/docs/components-prompts",
      },
      {
        title: "Tools",
        href: "/docs/components-tools",
      },
      {
        title: "Vector Stores",
        href: "/docs/components-vector-stores",
      },
      {
        title: "Document Loaders",
        href: "/docs/components-document-loaders",
      },
    ],
  },
  {
    title: "Starter Projects",
    href: "#",
    icon: <FileText className="h-4 w-4" />,
    submenu: [
      {
        title: "Basic Prompting",
        href: "/docs/starter-projects-basic-prompting",
      },
      {
        title: "Simple Agent",
        href: "/docs/starter-projects-simple-agent",
      },
      {
        title: "Vector Store RAG",
        href: "/docs/starter-projects-vector-store-rag",
      },
      {
        title: "Blog Writer",
        href: "/docs/blog-writer",
      },
    ],
  },
  {
    title: "Configuration",
    href: "#",
    icon: <Settings className="h-4 w-4" />,
    submenu: [
      {
        title: "Environment Variables",
        href: "/docs/configuration-environment-variables",
      },
      {
        title: "API Keys",
        href: "/docs/configuration-api-keys",
      },
    ],
  },
  {
    title: "Tools & Integrations",
    href: "#",
    icon: <Tool className="h-4 w-4" />,
    submenu: [
      {
        title: "OpenAI",
        href: "/docs/integrations-openai",
      },
      {
        title: "Hugging Face",
        href: "/docs/integrations-huggingface",
      },
      {
        title: "Langchain",
        href: "/docs/integrations-langchain",
      },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

 
  useEffect(() => {
    if (pathname) {
      const newExpandedSections: Record<string, boolean> = {}

      sidebarLinks.forEach((link) => {
        if (link.submenu) {
          const isActive = link.submenu.some((sublink) => pathname === sublink.href)
          if (isActive) {
            newExpandedSections[link.title] = true
          }
        }
      })

      setExpandedSections((prev) => ({ ...prev, ...newExpandedSections }))
    }
  }, [pathname])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const isLinkActive = (href: string) => pathname === href

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-40 lg:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {/* Sidebar overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out dark:bg-black dark:border-r dark:border-gray-800 lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-lg">Innoflow Docs</span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] pb-10">
          <div className="px-4 py-6">
            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <div key={link.title} className="mb-2">
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSection(link.title)}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                          expandedSections[link.title]
                            ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {link.icon}
                          {link.title}
                        </span>
                        {expandedSections[link.title] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {expandedSections[link.title] && (
                        <div className="mt-1 space-y-1 pl-10">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className={`block rounded-md px-3 py-2 text-sm ${
                                isLinkActive(sublink.href)
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                              }`}
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                        isLinkActive(link.href)
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                      }`}
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </aside>
    </>
  )
}
