import { createQuote } from "./actions/createQuote"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NewQuote() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 mx-auto">

    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-10">
      Create a new quote
    </h4>
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>New quote</CardTitle>
        <CardDescription>
          Create a quote and save in your db. Is easy!
        </CardDescription>
      </CardHeader>
      <form action={createQuote} className="space-y-4">
      <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="quote">Quote</Label>
<Input name="quote" placeholder="Write your quote..." required />
            </div>
                 <div className="grid gap-2">
              <div className="flex flex-col gap-6">
                <Label htmlFor="kind">Kind</Label>
      <Select name="kind">
        <SelectTrigger>
          <SelectValue placeholder="Select kind" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Fact">Fact</SelectItem>
          <SelectItem value="Opinion">Opinion</SelectItem>
        </SelectContent>
      </Select>
    
                  </div>
            </div>
          </div>
        
         </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Create
        </Button>
      </CardFooter>
    </form>
    </Card>
  </div>
  )
}
