"use client"

import Link from "next/link"
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  
} from "@/components/ui/sidebar"
import {  Home } from "lucide-react"
import Image from "next/image"

export default function DashboardIcon(){
    return(
    <>
      <SidebarProvider defaultOpen>
      <Sidebar className="fixed inset-y-0 left-0 z-20 w-60 bg-black border-r border-white/10 ">
        <SidebarHeader className="flex items-center p-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Innoflow Logo"
              width={50}
              height={50}
              className="text-primary"
            />
            <span className="text-xl font-bold text-white">Innoflow</span>
          </Link>
        </SidebarHeader>

         <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link href="/dashboard" className="flex items-center gap-2 py-2">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          </Sidebar>
          </SidebarProvider>
    </>
    )
}