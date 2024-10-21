'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call your authentication API
    if ((email === "frank@example.com" && password === "test123") ||
        (email === "mandeng@gmail.com" && password === "test1234")) {
      // Simulate successful login
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userEmail", email) // Store the email for personalization
      router.push("/account")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EDE8F5]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#3D52A0]">Login</CardTitle>
          <CardDescription className="text-center text-[#8697C4]">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
              Log in
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-[#8697C4]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#3D52A0] hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
