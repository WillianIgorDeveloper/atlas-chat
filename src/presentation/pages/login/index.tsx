import { useAuth } from "@/presentation/hooks/auth"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { Label } from "@ui/label"
import { Separator } from "@ui/separator"
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react"
import { Link } from "react-router-dom"

export function LoginPage() {
  const { signInWithGithub } = useAuth()
  return (
    <div className="h-screen flex">
      <div className="lg:flex-1 bg-primary flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-background/25 dark:bg-zinc-800/25 backdrop-blur-sm" />
      </div>
      <div className="w-full p-3 flex flex-col items-center justify-center shadow-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl relative animate-fade-right">
        {false && (
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-background z-20">
            <Loader2Icon size={48} className="animate-spin" />
          </div>
        )}
        <form className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto">
          <legend className="self-start text-2xl font-semibold">Atlas Chat</legend>
          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="w-full">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input id="password" placeholder="Enter your password" required />
              {false ? (
                <EyeIcon className="absolute right-2 top-2 text-zinc-500 dark:text-zinc-400 cursor-pointer" />
              ) : (
                <EyeOffIcon className="absolute right-2 top-2 text-zinc-500 dark:text-zinc-400 cursor-pointer" />
              )}
            </div>
          </div>
          <Button className="w-full hover:opacity-80">Sign in</Button>
        </form>
        <Separator className="my-3 max-w-sm mx-auto" />
        <Button onClick={signInWithGithub}>Login with github</Button>
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
