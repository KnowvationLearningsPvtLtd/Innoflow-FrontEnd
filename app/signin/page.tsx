import { SigninForm } from "@/components/auth/signin-form"
import Link from "next/link"
import Image from "next/image"

export default function SigninPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-black/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/images/logo.jpg"
                  alt="Innoflow Logo"
                  width={50}
                  height={50}
                  className="text-primary"
                />
                <span className="text-2xl font-bold text-white">Innoflow</span>
              </Link>
            </div>
            <h1 className="mb-6 text-3xl font-bold text-white">Sign In to Your Account</h1>
            <SigninForm />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-3xl font-bold text-white">Building AI Apps Just got 100x Easier</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9L12 5L21 9L12 13L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 9V15L12 19L21 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Visual development for LLM and LangChain-based applications</h3>
                </div>
                <p className="text-white/70">Drag-and-drop development of AI apps by connecting prebuilt, customizable components into data flows. Instantly test and iterate. Start in the cloud or use open source.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">The Fastest way to Create and Share Powerful AI apps</h3>
                </div>
                <p className="text-white/70">Create powerful chatbots, agents, and RAG (retrieval augmented generation) apps in minutes, not months with a low-code, Python-based framework.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-6 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Prebuilt components for any Data source, database or API</h3>
                </div>
                <p className="text-white/70">Connect to any AI model, API, or database with hundreds of components. Start with an app or component template, customize and then instantly test and iterate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 