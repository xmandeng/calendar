'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"

export function AccountPage() {
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (!isLoggedIn) {
      router.push("/login")
    } else {
      const email = localStorage.getItem("userEmail")
      setUserEmail(email || "User") // Use "User" if email is not found
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#EDE8F5]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#7091E6] shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <Calendar className="h-6 w-6 text-[#EDE8F5]" />
          <span className="ml-2 font-bold text-lg text-[#EDE8F5]">CalendarTool</span>
        </Link>
      </header>
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#3D52A0] hover:text-[#7091E6] mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-[#3D52A0] mb-6">Welcome, {userEmail}!</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#3D52A0] mb-4">Your Account</h2>
          <p className="mb-4">This is your account dashboard. You can manage your calendars and settings here.</p>
          <Button onClick={handleLogout} className="bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
            Log Out
          </Button>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#8697C4] bg-[#7091E6]">
        <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-[#EDE8F5]">© 2024 CalendarTool. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4 text-[#EDE8F5]" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-[#EDE8F5]" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
