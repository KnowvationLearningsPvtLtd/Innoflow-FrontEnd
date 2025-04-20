"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, FileText, HelpCircle, Search, Settings } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"

const mockProjects = [
  {
    id: 1,
    name: "Customer Support Bot",
    description: "AI assistant for customer support",
    lastModified: "2 hours ago",
  },
  {
    id: 2,
    name: "Data Processing Pipeline",
    description: "ETL workflow for data processing",
    lastModified: "1 day ago",
  },
  { id: 3, name: "Content Generator", description: "Automated content creation tool", lastModified: "3 days ago" },
  { id: 4, name: "Sentiment Analysis", description: "Analyze customer feedback sentiment", lastModified: "1 week ago" },
  {
    id: 5,
    name: "Document Summarizer",
    description: "Summarize long documents automatically",
    lastModified: "2 weeks ago",
  },
]

export function DashboardHeader({ showAutoSave = false }: { showAutoSave?: boolean }) {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [searchQuery, setSearchQuery] = useState("")
  const [lastSaved, setLastSaved] = useState<string | null>("Just now")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<typeof mockProjects>([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    const filteredProjects = mockProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setSearchResults(filteredProjects)
    setShowSearchResults(true)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setShowSearchResults(searchQuery.trim() !== "")
  }

  const handleProjectClick = (projectId: number) => {
    console.log("Navigating to project:", projectId)
    router.push(`/dashboard/flow/${projectId}`)
    setSearchQuery("")
    setShowSearchResults(false)
  }

  const handleClickOutside = () => {
    setShowSearchResults(false)
  }

  useEffect(() => {
    if (showSearchResults) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [showSearchResults])

  return (
    <header
      className={`fixed top-0 right-0 z-10 h-16 border-b border-white/10 bg-black/90 backdrop-blur-md ${
        isMobile ? "left-0" : "left-64"
      } transition-all duration-300`}
    >
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        {isMobile ? (
          isSearchOpen ? (
            <div className="flex-1 flex items-center">
              <form onSubmit={handleSearch} className="w-full relative">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                  <Input
                    placeholder="Search projects..."
                    className="h-9 w-full rounded-full border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                {showSearchResults && searchResults.length > 0 && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 bg-black/95 border border-white/10 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {searchResults.map((project) => (
                      <div
                        key={project.id}
                        className="p-3 hover:bg-white/10 cursor-pointer border-b border-white/5 last:border-0"
                        onClick={() => handleProjectClick(project.id)}
                      >
                        <div className="font-medium text-white">{project.name}</div>
                        <div className="text-sm text-white/60">{project.description}</div>
                        <div className="text-xs text-white/40 mt-1">Last modified: {project.lastModified}</div>
                      </div>
                    ))}
                  </div>
                )}

                {showSearchResults && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-black/95 border border-white/10 rounded-md shadow-lg z-50 p-4 text-center">
                    <p className="text-white/60">No projects found matching "{searchQuery}"</p>
                  </div>
                )}
              </form>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 text-white/70 hover:bg-white/10 hover:text-white"
                onClick={() => setIsSearchOpen(false)}
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 ml-8 md:ml-0">{/* Spacer for mobile */}</div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-white"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          )
        ) : (
          <div className="relative w-64">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <Input
                placeholder="Search projects..."
                className="h-9 w-full rounded-full border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />

              {showSearchResults && searchResults.length > 0 && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 bg-black/95 border border-white/10 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {searchResults.map((project) => (
                    <div
                      key={project.id}
                      className="p-3 hover:bg-white/10 cursor-pointer border-b border-white/5 last:border-0"
                      onClick={() => handleProjectClick(project.id)}
                    >
                      <div className="font-medium text-white">{project.name}</div>
                      <div className="text-sm text-white/60">{project.description}</div>
                      <div className="text-xs text-white/40 mt-1">Last modified: {project.lastModified}</div>
                    </div>
                  ))}
                </div>
              )}

              {showSearchResults && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-black/95 border border-white/10 rounded-md shadow-lg z-50 p-4 text-center">
                  <p className="text-white/60">No projects found matching "{searchQuery}"</p>
                </div>
              )}
            </form>
          </div>
        )}

        {showAutoSave && !isSearchOpen && (
          <div className="hidden md:block text-white/50 text-sm">
            {lastSaved ? `Last saved: ${lastSaved}` : "Unsaved changes"}
          </div>
        )}

        <div className="flex items-center gap-2 md:gap-4">
          {!isSearchOpen && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-white hidden md:flex"
                onClick={() => router.push("/docs")}
              >
                <FileText className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-white hidden md:flex"
                onClick={() => router.push("/help")}
              >
                <HelpCircle className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-white hidden md:flex"
                onClick={() => router.push("/dashboard/settings")}
              >
                <Settings className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:bg-white/10 hover:text-white"
                    onClick={() => router.push("/dashboard/notifications")}
                  >
                    <Bell className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 border-white/10">
                  <DropdownMenuLabel className="text-white">Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <div className="max-h-[300px] overflow-auto">
                    <DropdownMenuItem className="flex flex-col items-start text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10">
                      <span className="font-medium">Flow deployed successfully</span>
                      <span className="text-xs text-white/50">2 minutes ago</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10">
                      <span className="font-medium">New team member added</span>
                      <span className="text-xs text-white/50">1 hour ago</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10">
                      <span className="font-medium">API usage limit reached 80%</span>
                      <span className="text-xs text-white/50">Yesterday</span>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem
                    className="text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10"
                    onClick={() => router.push("/dashboard/notifications")}
                  >
                    View all notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black/90 border-white/10">
              <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem
                className="text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10"
                onClick={() => router.push("/dashboard/profile")}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10"
                onClick={() => router.push("/dashboard/settings")}
              >
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10"
                onClick={() => router.push("/dashboard/notifications")}
              >
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem
                className="text-white/70 hover:text-white focus:text-white hover:bg-white/10 focus:bg-white/10"
                onClick={() => router.push("/")}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
