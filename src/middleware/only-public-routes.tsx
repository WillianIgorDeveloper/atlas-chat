import { useAuth } from "@contexts/auth"
import { ROUTES } from "@/utils/routes"
import { Navigate, Outlet } from "react-router-dom"

export function OnlyPublicRoutes() {
  const { checkingSession, session } = useAuth()

  if (checkingSession) return <div>Loading...</div>
  return session ? <Navigate to={ROUTES.APP} replace={true} /> : <Outlet />
}
