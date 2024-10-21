'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Upload, ArrowLeft } from "lucide-react"

export function EasyUploadComponent() {
  const [uploadType, setUploadType] = useState<"text" | "file" | null>(null)

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
        <h1 className="text-3xl font-bold text-[#3D52A0] mb-6">Easy Upload</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#3D52A0] mb-4">Choose your upload method</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              onClick={() => setUploadType("text")}
              className={`flex-1 ${
                uploadType === "text" ? "bg-[#3D52A0] text-[#EDE8F5]" : "bg-[#ADBDDA] text-[#3D52A0]"
              } hover:bg-[#7091E6]`}
            >
              Enter Text
            </Button>
            <Button
              onClick={() => setUploadType("file")}
              className={`flex-1 ${
                uploadType === "file" ? "bg-[#3D52A0] text-[#EDE8F5]" : "bg-[#ADBDDA] text-[#3D52A0]"
              } hover:bg-[#7091E6]`}
            >
              Upload File
            </Button>
          </div>
          {uploadType === "text" && (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Textarea
                placeholder="Enter your event details here..."
                className="w-full h-40 p-2 border border-[#ADBDDA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
              />
              <Button type="submit" className="w-full bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
                Extract Events
              </Button>
            </form>
          )}
          {uploadType === "file" && (
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#ADBDDA] border-dashed rounded-lg cursor-pointer bg-[#EDE8F5] hover:bg-[#ADBDDA] transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-[#3D52A0]" />
                    <p className="mb-2 text-sm text-[#3D52A0]">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-[#8697C4]">Supported file types: TXT, PDF, DOC, DOCX</p>
                  </div>
                  <Input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <Button type="submit" className="w-full bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
                Extract Events
              </Button>
            </form>
          )}
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
