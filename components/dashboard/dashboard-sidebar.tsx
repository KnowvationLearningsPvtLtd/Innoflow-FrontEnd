"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ChevronDown, FolderPlus, Folders, Home, Layers, Settings } from "lucide-react"
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
import { useToast } from "@/components/ui/use-toast"

interface Folder {
  id: string
  name: string
  isExpanded?: boolean
  subfolders?: Folder[]
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const { toast } = useToast()
  const [folders, setFolders] = useState<Folder[]>([
    {
      id: "1",
      name: "My Flows",
      isExpanded: true,
      subfolders: [
        { id: "1-1", name: "AI Assistants" },
        { id: "1-2", name: "RAG Applications" },
        { id: "1-3", name: "Data Processing" },
      ],
    },
    {
      id: "2",
      name: "Shared Flows",
      isExpanded: false,
      subfolders: [{ id: "2-1", name: "Team Projects" }],
    },
    { id: "3", name: "Templates" },
    { id: "4", name: "Archived" },
  ])
  const [newFolderName, setNewFolderName] = useState("")

  const toggleFolder = (folderId: string) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) => (folder.id === folderId ? { ...folder, isExpanded: !folder.isExpanded } : folder)),
    )
  }

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) {
      toast({
        title: "Error",
        description: "Folder name cannot be empty",
        variant: "destructive",
      })
      return
    }

    const newFolder: Folder = {
      id: `folder-${Date.now()}`,
      name: newFolderName,
      isExpanded: false,
      subfolders: [],
    }

    setFolders([...folders, newFolder])
    setNewFolderName("")

    toast({
      title: "Success",
      description: `Folder "${newFolderName}" created successfully`,
    })
  }

  return (
    <SidebarProvider defaultOpen>
      
      <Sidebar className="fixed inset-y-0 left-0 z-20 w-60 bg-black border-r border-white/10 ">
        <SidebarHeader className="flex items-center p-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-6 w-6 rounded-md bg-green-600 flex items-center justify-center ">
              <Layers className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-semibold text-white">Innoflow</span>
          </Link>
        </SidebarHeader>

        <SidebarContent className="px-2">
          <div className="flex items-center justify-between px-2 py-2">
            <h3 className="text-sm font-medium text-white/70">Folders</h3>
            <div className="flex gap-1">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-white/50 hover:text-white hover:bg-white/10"
                  >
                    <FolderPlus className="h-3.5 w-3.5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Folder</DialogTitle>
                    <DialogDescription>Enter a name for your new folder</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Folder Name</Label>
                      <Input
                        id="name"
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                        placeholder="My New Folder"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCreateFolder}>Create Folder</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                <Link href="/dashboard" className="flex items-center gap-2 py-2">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarSeparator className="my-1" />

          <div className="space-y-1 py-1">
            {folders.map((folder) => (
              <div key={folder.id}>
                <button
                  className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                  onClick={() => toggleFolder(folder.id)}
                >
                  <div className="flex items-center gap-2">
                    <Folders className="h-4 w-4" />
                    <span>{folder.name}</span>
                  </div>
                  {folder.subfolders && folder.subfolders.length > 0 && (
                    <ChevronDown className={`h-3 w-3 transition-transform ${folder.isExpanded ? "rotate-180" : ""}`} />
                  )}
                </button>

                {folder.isExpanded && folder.subfolders && (
                  <div className="ml-6 mt-1 space-y-1">
                    {folder.subfolders.map((subfolder) => (
                      <button
                        key={subfolder.id}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                      >
                        <Folders className="h-3 w-3" />
                        <span>{subfolder.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <Button variant="outline" className="w-full border-white/10 text-white bg-black hover:bg-white/10">
            <Settings className="mr-2 h-4 w-4" />
            Workspace Settings
          </Button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
