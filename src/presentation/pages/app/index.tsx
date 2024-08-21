import { Button } from "@/presentation/components/ui/button"
import { useAuth } from "@/presentation/hooks/auth"

export function AppPage() {
  const { signOut } = useAuth()
  return (
    <>
      <Button onClick={signOut}>Logout</Button>
      <h1>app</h1>
    </>
  )
}
