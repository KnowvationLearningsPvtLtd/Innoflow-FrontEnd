"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-0.2px border-white/10 bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
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
          <div className="hidden md:flex md:gap-6">
            <Link href="/docs" className="text-sm text-white/70 transition-colors hover:text-white">
              Docs
            </Link>
            <a
              href="https://github.com/KnowvationLearningsPvtLtd/Innoflow-FrontEnd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Resources
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm text-white/70 transition-colors hover:text-white">Community</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuGroup>
                  
                  <DropdownMenuItem asChild>
                    <a href="https://discord.gg/innoflow" target="_blank" rel="noopener noreferrer">
                      Discord
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://www.linkedin.com/company/innoflow-ai" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <a
                      href="https://github.com/KnowvationLearningsPvtLtd/Innoflow-FrontEnd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://x.com/innoflow_ai" target="_blank" rel="noopener noreferrer">
                      X
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="https://github.com/KnowvationLearningsPvtLtd/Innoflow-FrontEnd" target="_blank">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/signup">
            <Button className="relative rounded-md px-3.5 py-2 m-1 overflow-hidden group cursor-pointer border-2 font-medium border-black text-white bg-primary hover:bg-primary/90">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-white ease">Get Started</span>
            </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem asChild>
                  <Link href="/docs">Docs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/KnowvationLearningsPvtLtd/Innoflow-FrontEnd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resources
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://discord.gg/innoflow" target="_blank" rel="noopener noreferrer">
                    Community
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/KnowvationLearningsPvtLtd/Innoflow-FrontEnd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signup">Get Started</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}