"use client"

import { useEffect } from "react"
import { RegisterForm } from "@/components/register-form"
import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"

export default function RegisterPage() {
  useEffect(() => {
    // Prevent scrolling when register page is mounted
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
        <RegisterForm />
      </div>
      <Footer />
    </div>
  )
}
