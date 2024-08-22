import { useAuth } from "@contexts/auth"
import { ROUTES } from "@/utils/routes"
import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes() {
  const { checkingSession, session } = useAuth()

  if (checkingSession) return <div>Loading...</div>
  return session ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
