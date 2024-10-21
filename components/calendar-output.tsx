'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft, Download, Share2 } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// This would typically come from your backend
const initialCalendars = [
  { id: 1, name: "Work Schedule", events: 15 },
  { id: 2, name: "Personal Events", events: 8 },
  { id: 3, name: "Project Deadlines", events: 12 },
]

export function CalendarOutputComponent() {
  const [calendars, setCalendars] = useState(initialCalendars)

  const handleNameChange = (id: number, newName: string) => {
    setCalendars(calendars.map(cal => 
      cal.id === id ? { ...cal, name: newName } : cal
    ))
  }

  const handleDownload = (id: number) => {
    // Implement download functionality
    console.log(`Downloading calendar ${id}`)
  }

  const handleShare = (id: number) => {
    // Implement share functionality
    console.log(`Sharing calendar ${id}`)
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
        <Link href="/easy-upload" className="inline-flex items-center text-[#3D52A0] hover:text-[#7091E6] mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Upload
        </Link>
        <h1 className="text-3xl font-bold text-[#3D52A0] mb-6">Your Generated Calendars</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Calendar Name</TableHead>
                <TableHead>Events</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calendars.map((calendar) => (
                <TableRow key={calendar.id}>
                  <TableCell className="font-medium">
                    <Input
                      value={calendar.name}
                      onChange={(e) => handleNameChange(calendar.id, e.target.value)}
                      className="max-w-[250px]"
                    />
                  </TableCell>
                  <TableCell>{calendar.events}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => handleDownload(calendar.id)}
                      variant="outline"
                      size="icon"
                      className="mr-2"
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                    <Button
                      onClick={() => handleShare(calendar.id)}
                      variant="outline"
                      size="icon"
                    >
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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