"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Code, HelpCircle, Play, Save, Share, User } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function FlowHeader({ flowId }: { flowId: string }) {
  const { toast } = useToast()
  const [flowName, setFlowName] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Get flow name based on ID
  useEffect(() => {
    const flowNames: Record<string, string> = {
      "1": "Basic Prompting",
      "2": "Vector Store RAG",
      "3": "Simple Agent",
    }

    setFlowName(flowNames[flowId] || "New Flow")
  }, [flowId])

  const handleSave = () => {
    setIsSaving(true)

    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Success",
        description: "Flow saved successfully",
      })
    }, 1000)
  }

  const handlePlayground = () => {
    setIsPlaying(true)

    // Simulate playground loading
    setTimeout(() => {
      setIsPlaying(false)
      toast({
        title: "Playground Ready",
        description: "You can now test your flow",
      })
    }, 1500)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-16 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <Input
            value={flowName}
            onChange={(e) => setFlowName(e.target.value)}
            className="h-9 w-64 border-none bg-transparent text-lg font-medium text-white focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1 text-xs text-white/70 hover:bg-white/10 hover:text-white"
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-white hover:bg-white/10"
            onClick={handlePlayground}
            disabled={isPlaying}
          >
            <Play className="mr-2 h-4 w-4" />
            {isPlaying ? "Loading..." : "Playground"}
          </Button>
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
            <Code className="mr-2 h-4 w-4" />
            API
          </Button>
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <User className="h-4 w-4" />
                </div>
                <span>John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" className="flex w-full">
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
