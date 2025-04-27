"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { ProjectsView } from "@/components/dashboard/projects-view"
import { useState } from "react"

export default function DashboardPage() {
  const [selectedFolder, setSelectedFolder] = useState<string | undefined>(undefined)
  const [showTemplates, setShowTemplates] = useState(false)
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar setSelectedFolder={setSelectedFolder} setShowTemplates={setShowTemplates} />
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-16 p-4 md:p-6">
          <ProjectsView selectedFolder={selectedFolder} showTemplates={showTemplates} setShowTemplates={setShowTemplates} />
        </main>
      </div>
    </div>
  )
}
