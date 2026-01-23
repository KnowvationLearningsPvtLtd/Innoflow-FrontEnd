"use client";

import { useState , useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Plus, Puzzle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Project } from "@/app/api/project/route"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TemplateGallery } from "@/components/dashboard/template-gallery";



export function ProjectsView({ selectedFolder, showTemplates, setShowTemplates }: { selectedFolder?: string, showTemplates: boolean, setShowTemplates: (show: boolean) => void }) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("flows");
  const [projects, setProjects] = useState<Project[]>([]);

  
 useEffect(() => {
  const loadProjects = async () => {
    try {
      const res = await fetch("/api/project")
      if (!res.ok) throw new Error("Failed to fetch")
      setProjects(await res.json())
    } catch (err) {
      toast({
        title: "Error",
        description: "Unable to load projects",
        variant: "destructive",
      })
    }
  }

  loadProjects()
}, [])


  const filteredProjects = projects.filter(
    (project) =>
      (activeTab === "all" || project.type === activeTab.slice(0, -1)) &&
      (!selectedFolder || selectedFolder === "My Flows" || project.folder === selectedFolder)
  );

  const handleSelectTemplate = (templateId: string, templateName: string) => {
    toast({
      title: "Template Selected",
      description: `Creating new flow from "${templateName}" template`,
    });

    setShowTemplates(false);

    const newProject: Project = {
      id: `flow-${Date.now()}`,
      name: `New ${templateName}`,
      description: `Created from ${templateName} template.`,
      updatedAt: "Just now",
      color: "from-purple-500/20 to-blue-500/20",
      type: "flow",
      folder: "AI Assistants",
    };

    setProjects([newProject, ...projects]);
  };

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden pt-16">
      <div className="flex items-center justify-between"> 
        <div>
          <h1 className="text-2xl font-bold text-white">My Projects</h1>
          <p className="text-white/70">Create and manage your AI workflows</p>
        </div>

        <Dialog open={showTemplates} onOpenChange={setShowTemplates}>
          <DialogTrigger asChild>
            <Button onClick={() => setShowTemplates(true)} className="bg-primary text-white hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Choose a Template</DialogTitle>
              <DialogDescription>Start with a pre-built template or create from scratch</DialogDescription>
            </DialogHeader>

            <TemplateGallery onSelectTemplate={handleSelectTemplate} />

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowTemplates(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="flows" value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden">
        <TabsList className="mb-3 bg-black border border-white/10">
          <TabsTrigger value="flows" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
            Flows
          </TabsTrigger>
          <TabsTrigger value="components" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
            Components
          </TabsTrigger>
          <TabsTrigger value="all" className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
            All
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="flex-1 pt-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-4 max-h-[70vh] overflow-y-auto pr-2 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/dashboard/flow/${project.id}`}>
                <Card className="h-52 border-white/10 bg-black/50 transition-colors hover:border-primary/50 hover:bg-white/5">
                  <CardHeader className="py-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{project.name}</CardTitle>
                      {project.type === "component" && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                          <Puzzle className="h-3 w-3 text-white/70" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-white/70">{project.description}</p>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className={`h-16 rounded-md bg-gradient-to-br ${project.color}`}></div>
                  </CardContent>
                  <CardFooter className="py-2">
                    <div className="flex items-center text-sm text-white/50">
                      <Clock className="mr-2 h-4 w-4" />
                      Updated {project.updatedAt}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}

            <button
              onClick={() => setShowTemplates(true)}
              className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg transition-transform transform hover:scale-105 hover:border-primary/50 hover:from-gray-700 hover:to-gray-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-md">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <p className="mt-4 text-center text-lg font-semibold text-white">Create New Project</p>
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

/*
<style jsx global>{`
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
`}</style>
*/
