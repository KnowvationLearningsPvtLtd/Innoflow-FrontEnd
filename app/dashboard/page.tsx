import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { ProjectsView } from "@/components/dashboard/projects-view"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar />
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-16 p-4 md:p-6">
          <ProjectsView />
        </main>
      </div>
    </div>
  )
}
