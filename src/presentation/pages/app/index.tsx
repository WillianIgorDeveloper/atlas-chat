import { Button } from "@ui/button"
import { useAuth } from "@contexts/auth"
import * as Card from "@ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar"

export function AppPage() {
  const { signOut, session } = useAuth()
  return (
    <>
      <Card.Card>
        <div className="flex items-center gap-3">
          <Avatar className="size-16">
            <AvatarImage src={session?.user.user_metadata.avatar_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Card.CardHeader>
            <Card.CardTitle>{session?.user.user_metadata.name}</Card.CardTitle>
            <Card.CardDescription>
              {session?.user.user_metadata.email}
            </Card.CardDescription>
          </Card.CardHeader>
        </div>
        <Card.CardContent />
        <Card.CardFooter>
          <Button onClick={signOut}>Logout</Button>
        </Card.CardFooter>
      </Card.Card>
    </>
  )
}
