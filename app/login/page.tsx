"use client"

import { Suspense, useEffect } from "react"
import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { LoginContent } from "@/components/login-content"
import { Loader2 } from "lucide-react"
import { Preloader } from "@/components/preloader"

export default function LoginPage() {
  useEffect(() => {
    // Prevent scrolling when login page is mounted
    document.body.classList.add('no-scroll')
    document.documentElement.classList.add('no-scroll')
    
    // Cleanup: remove no-scroll class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll')
      document.documentElement.classList.remove('no-scroll')
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
      <Background />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          }
        >
          <LoginContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
