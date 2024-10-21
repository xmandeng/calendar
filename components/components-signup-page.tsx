'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft } from "lucide-react"

export function SignupPageComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#EDE8F5]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#7091E6] shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <Calendar className="h-6 w-6 text-[#EDE8F5]" />
          <span className="ml-2 font-bold text-lg text-[#EDE8F5]">CalendarTool</span>
        </Link>
      </header>
      <main className="flex-1 container max-w-md mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#3D52A0] hover:text-[#7091E6] mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-[#3D52A0] mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#3D52A0] mb-1">Name</label>
            <Input 
              id="name" 
              name="name"
              type="text" 
              placeholder="Your name" 
              required 
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#3D52A0] mb-1">Email</label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="Your email" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#3D52A0] mb-1">Password</label>
            <Input 
              id="password" 
              name="password"
              type="password" 
              placeholder="Create a password" 
              required 
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className="w-full bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-[#8697C4]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3D52A0] hover:underline">
            Log in
          </Link>
        </p>
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