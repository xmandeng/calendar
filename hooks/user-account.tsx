import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft, CreditCard, Plus } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function UserAccount() {
  const [credits, setCredits] = useState(50)
  const [isAddingCredits, setIsAddingCredits] = useState(false)
  const [creditsToAdd, setCreditsToAdd] = useState(10)

  const handleAddCredits = () => {
    setCredits(credits + creditsToAdd)
    setIsAddingCredits(false)
    // In a real application, you would make an API call here to update the user's credits
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
        <h1 className="text-3xl font-bold text-[#3D52A0] mb-6">Your Account</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john.doe@example.com</p>
              <p><strong>Member Since:</strong> January 1, 2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Credit Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-[#3D52A0] mb-4">{credits}</div>
              <p className="text-sm text-[#8697C4]">Credits available for downloads or hosting</p>
            </CardContent>
            <CardFooter>
              <Dialog open={isAddingCredits} onOpenChange={setIsAddingCredits}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
                    <Plus className="mr-2 h-4 w-4" /> Add Credits
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Credits</DialogTitle>
                    <DialogDescription>
                      Enter the number of credits you'd like to add to your account.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="credits" className="text-right">
                        Credits
                      </Label>
                      <Input
                        id="credits"
                        type="number"
                        value={creditsToAdd}
                        onChange={(e) => setCreditsToAdd(Number(e.target.value))}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleAddCredits} className="bg-[#3D52A0] text-[#EDE8F5] hover:bg-[#7091E6]">
                      Add Credits
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Calendar Download</span>
                <span className="text-[#3D52A0] font-semibold">-1 credit</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Added Credits</span>
                <span className="text-green-600 font-semibold">+10 credits</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Calendar Hosting (1 month)</span>
                <span className="text-[#3D52A0] font-semibold">-5 credits</span>
              </li>
            </ul>
          </CardContent>
        </Card>
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