'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Upload, CreditCard, FileText } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EDE8F5] text-[#3D52A0]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#7091E6] shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Calendar className="h-6 w-6 text-[#EDE8F5]" />
          <span className="ml-2 font-bold text-lg text-[#EDE8F5]">CalendarTool</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#EDE8F5] hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-[#EDE8F5] hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-[#EDE8F5] hover:underline underline-offset-4" href="/easy-upload">
            Upload
          </Link>
          <Link className="text-sm font-medium hover:text-[#EDE8F5] hover:underline underline-offset-4" href="/account">
            Account
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#7091E6] to-[#ADBDDA]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#EDE8F5]">
                  Transform Text into Calendar Events
                </h1>
                <p className="mx-auto max-w-[700px] text-[#EDE8F5] md:text-xl">
                  Upload text or media, and we'll create an ICS file for you. Download once or host your calendar for ongoing access.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button className="bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#8697C4]">Get Started</Button>
                </Link>
                <Link href="#features">
                  <Button 
                    variant="outline" 
                    className="text-[#3D52A0] border-[#3D52A0] hover:bg-[#3D52A0] hover:text-[#EDE8F5]"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#EDE8F5]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#3D52A0]">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-[#ADBDDA] p-3 rounded-full">
                  <Upload className="h-8 w-8 text-[#3D52A0]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D52A0]">Easy Upload</h3>
                <p className="text-sm text-[#8697C4]">Upload text or media to extract events</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-[#ADBDDA] p-3 rounded-full">
                  <Calendar className="h-8 w-8 text-[#3D52A0]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D52A0]">Calendar Sharing</h3>
                <p className="text-sm text-[#8697C4]">Automatically create Calendars to share with friends</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-[#ADBDDA] p-3 rounded-full">
                  <CreditCard className="h-8 w-8 text-[#3D52A0]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D52A0]">Flexible Credits</h3>
                <p className="text-sm text-[#8697C4]">Buy credits for downloads or hosting</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="bg-[#ADBDDA] p-3 rounded-full">
                  <FileText className="h-8 w-8 text-[#3D52A0]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D52A0]">File Management</h3>
                <p className="text-sm text-[#8697C4]">View and manage your hosted files</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#ADBDDA]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#3D52A0]">Simple Pricing</h2>
            <div className="grid gap-10 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="flex flex-col p-6 bg-[#EDE8F5] shadow-lg rounded-lg justify-between border border-[#8697C4]">
                <div>
                  <h3 className="text-2xl font-bold text-center text-[#3D52A0]">Pay As You Go</h3>
                  <div className="mt-4 text-center text-[#8697C4]">
                    <p>Perfect for occasional use</p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="text-[#7091E6] flex-shrink-0 h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="ml-2 text-[#3D52A0]">$1 per download</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="text-[#7091E6] flex-shrink-0 h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="ml-2 text-[#3D52A0]">No subscription required</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-[#7091E6] text-[#EDE8F5] hover:bg-[#3D52A0]">Buy Credits</Button>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-[#EDE8F5] shadow-lg rounded-lg justify-between border border-[#8697C4]">
                <div>
                  <h3 className="text-2xl font-bold text-center text-[#3D52A0]">Subscription</h3>
                  <div className="mt-4 text-center text-[#8697C4]">
                    <p>Best for regular users</p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="text-[#7091E6] flex-shrink-0 h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="ml-2 text-[#3D52A0]">$10/month</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="text-[#7091E6] flex-shrink-0 h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="ml-2 text-[#3D52A0]">Unlimited downloads</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="text-[#7091E6] flex-shrink-0 h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="ml-2 text-[#3D52A0]">Host up to 10 calendars</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-[#7091E6] text-[#EDE8F5] hover:bg-[#3D52A0]">Subscribe Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#8697C4] bg-[#7091E6]">
        <p className="text-xs text-[#EDE8F5]">© 2024 CalendarTool. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-[#EDE8F5]" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-[#EDE8F5]" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
