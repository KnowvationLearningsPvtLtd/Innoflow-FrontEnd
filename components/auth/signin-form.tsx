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
import { signInWithGoogle } from "@/hooks/useFirebaseAuth"
import { useEmailAuth } from "@/hooks/useEmailAuth"
import { useAuthError } from "@/hooks/useAuthError"
import { Spinner } from "@/components/ui/spinner"

export function SigninForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rememberMe: false,
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const router = useRouter()
  const { toast } = useToast()
  const { setUser } = useUser()
  const { getErrorMessage } = useAuthError()
  const { signInWithEmail } = useEmailAuth()

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Invalid email address"
    if (!formData.password) newErrors.password = "Password is required"
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    setIsLoading(true)
    try {
      const user = await signInWithEmail(formData.email, formData.password)
      setUser({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        username: formData.email.split('@')[0],
        company: "Knowvation Learning Pvt Ltd",
        bio: "New Innoflow user"
      })
      toast({
        title: "Success",
        description: `Welcome back, ${user.displayName || user.email}!`,
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Sign-in Failed",
        description: getErrorMessage(error),
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  const handleGoogleSignin = async () => {
    setIsLoading(true)
    try {
      const user = await signInWithGoogle()
      setUser({
        name: user.displayName || "",
        email: user.email || "",
        username: user.email?.split('@')[0] || "",
        company: "Knowvation Learning Pvt Ltd",
        bio: "New Innoflow user"
      })
      toast({
        title: "Success",
        description: `Welcome, ${user.displayName || user.email}!`,
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Sign-in Failed",
        description: getErrorMessage(error),
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
          onClick={() => {}}
        >
          <Github className="mr-2 h-4 w-4" />
          Sign In with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-full border-white/20 text-white hover:bg-white/10"
          disabled={isLoading}
          onClick={handleGoogleSignin}
        >
          {isLoading ? (
            <Spinner size="sm" className="mr-2" />
          ) : (
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          )}
          Sign In with Google
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
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
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
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-primary"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            value={formData.password}
            onChange={handleChange}
            className="border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-primary"
          />
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="rememberMe"
            checked={formData.rememberMe}
            onCheckedChange={(checked) => handleCheckboxChange("rememberMe", checked as boolean)}
            className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          <label htmlFor="rememberMe" className="text-sm leading-none text-white/70">
            Remember me
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
            className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          <label htmlFor="terms" className="text-sm leading-none text-white/70">
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.agreeToTerms && <p className="text-xs text-red-500 mt-1">{errors.agreeToTerms}</p>}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner size="sm" className="mr-2" />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
      <div className="text-center text-sm text-white/70 mt-4">
        New user?{' '}
        <a href="/signup" className="text-primary hover:underline">
          Click here to sign up
        </a>
      </div>
    </div>
  )
} 