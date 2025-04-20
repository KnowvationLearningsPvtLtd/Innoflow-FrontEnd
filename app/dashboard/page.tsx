import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProjectsView } from "@/components/dashboard/projects-view";

export default function DashboardPage() {
  return (
    <div className="bg-black">
      <DashboardHeader />
      <main className="p-4 md:p-6">
        <ProjectsView />
      </main>
    </div>
  );
}
