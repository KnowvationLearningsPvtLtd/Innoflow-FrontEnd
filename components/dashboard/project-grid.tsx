"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Project = {
  id: string
  name: string
  description: string
  updatedAt: string
  color: string
}

export function ProjectGrid() {
  const { toast } = useToast()
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Basic Prompting",
      description: "Perform basic prompting with an OpenAI model.",
      updatedAt: "2 days ago",
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      id: "2",
      name: "Vector Store RAG",
      description: "Load your data for chat context with Retrieval Augmented Generation.",
      updatedAt: "1 week ago",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "3",
      name: "Simple Agent",
      description: "A simple but powerful starter agent.",
      updatedAt: "3 days ago",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ])

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateProject = () => {
    if (!newProject.name) {
      toast({
        title: "Error",
        description: "Project name is required",
        variant: "destructive",
      })
      return
    }

    const colors = [
      "from-purple-500/20 to-blue-500/20",
      "from-blue-500/20 to-cyan-500/20",
      "from-emerald-500/20 to-teal-500/20",
      "from-rose-500/20 to-pink-500/20",
      "from-amber-500/20 to-yellow-500/20",
    ]

    const project: Project = {
      id: Math.random().toString(36).substring(7),
      name: newProject.name,
      description: newProject.description || "No description provided",
      updatedAt: "Just now",
      color: colors[Math.floor(Math.random() * colors.length)],
    }

    setProjects([...projects, project])
    setNewProject({ name: "", description: "" })
    setIsDialogOpen(false)

    toast({
      title: "Success",
      description: "Project created successfully",
    })
  }

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Card className="flex h-2 cursor-pointer flex-col items-center justify-center border-dashed border-white/10 bg-black/50 p-6 transition-colors hover:border-primary/50 hover:bg-white/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-4 text-center text-lg font-medium text-white">Create New Project</p>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>Create a new AI workflow project to get started.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                placeholder="My AI Project"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="A brief description of your project"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateProject}>Create Project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {projects.map((project) => (
        <Link key={project.id} href={`/dashboard/flow/${project.id}`}>
          <Card className="h-64 border-white/10 bg-black/50 transition-colors hover:border-primary/50 hover:bg-white/5">
            <CardHeader>
              <CardTitle className="text-white">{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`h-20 rounded-md bg-gradient-to-br ${project.color}`}></div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm text-white/50">
                <Clock className="mr-2 h-4 w-4" />
                Updated {project.updatedAt}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
