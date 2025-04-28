"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Github } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { useUser } from "@/components/context/user-context"

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreeToTerms: false,
  })
  const router = useRouter()
  const { toast } = useToast()
  const { setUser } = useUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms to continue",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Update user context with signup data
      setUser({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        username: formData.email.split('@')[0], // Use email prefix as username
        company: "Knowvation Learning Pvt Ltd", // Set default company name
        bio: "New Innoflow user" // Default bio
      })

      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Success",
        description: "Your account has been created successfully!",
      })

      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  const handleOAuthSignup = async (provider: string) => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Success",
        description: `Successfully signed in with ${provider}!`,
      })

      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to sign in with ${provider}. Please try again.`,
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full border-white/20 text-white hover:bg-white/10"
          disabled={isLoading}
          onClick={() => handleOAuthSignup("GitHub")}
        >
          <Github className="mr-2 h-4 w-4" />
          Sign Up with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-full border-white/20 text-white hover:bg-white/10"
          disabled={isLoading}
          onClick={() => handleOAuthSignup("Google")}
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign Up with Google
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-black/50 px-2 text-white/50">OR</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Company Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-primary"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={handleCheckboxChange}
            className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          <label htmlFor="terms" className="text-sm leading-none text-white/70">
            I agree to Innoflow's{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Notice
            </a>
            ,{" "}
            <a href="#" className="text-primary hover:underline">
              MSA
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
          </label>
        </div>

        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  )
}
