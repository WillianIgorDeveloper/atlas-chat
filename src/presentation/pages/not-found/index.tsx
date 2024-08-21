import { ROUTES } from "@/utils/routes"
import { Button } from "@ui/button"
import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center gap-3 text-center p-3 animate-fade-in duration-500">
      <h1 className="text-9xl font-black text-primary">404</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Button variant="link" className="inline">
        <Link to={ROUTES.HOME}>Go back to the homepage</Link>
      </Button>
    </div>
  )
}
