import { useAuth } from "@contexts/auth"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { Label } from "@ui/label"
import { Separator } from "@ui/separator"
import { GithubIcon, Loader2Icon, Wand2Icon } from "lucide-react"
import { Link } from "react-router-dom"

export function LoginPage() {
  const { signInWithGithub, signUpWithEmail, signInLoading } = useAuth()

  function handleLoginWithEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string

    signUpWithEmail(email)
  }

  return (
    <div className="h-screen flex">
      <div className="lg:flex-1 bg-primary flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-background/25 dark:bg-zinc-800/25 backdrop-blur-sm" />
      </div>
      <div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative animate-fade-right">
        {signInLoading && (
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-background z-20">
            <Loader2Icon size={48} className="animate-spin" />
          </div>
        )}
        <form
          onSubmit={handleLoginWithEmail}
          className="w-full flex flex-col items-center justify-center space-y-3 max-w-sm mx-auto"
        >
          <legend className="self-start text-2xl font-semibold">Atlas Chat</legend>
          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <Button className="w-full hover:opacity-80 gap-3">
            Login with magic link <Wand2Icon />
          </Button>
        </form>
        <Separator className="my-3 max-w-sm mx-auto" />
        <Button onClick={signInWithGithub} className="w-full gap-3 max-w-sm">
          Login with github <GithubIcon />
        </Button>
        <div className="w-full flex items-center justify-between p-3 bg-muted rounded my-3 max-w-sm mx-auto">
          <div className="flex gap-3 items-center">
            <img src="./icon.png" alt="Hades" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Atlas</p>
              <span className="text-xs sm:text-sm">Enter without an account</span>
            </div>
          </div>
          <Button size="sm">Login</Button>
        </div>
        <Link to="/signup">
          <Button variant="link" className="w-full">
            Don't have an account? Sign up
          </Button>
        </Link>
      </div>
    </div>
  )
}
