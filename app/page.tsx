import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Trading Services</CardTitle>
          <CardDescription>Professional skill worker services platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </main>
  )
}