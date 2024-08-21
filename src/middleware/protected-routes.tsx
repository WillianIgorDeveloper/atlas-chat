import { supabase } from "@/services/supabase-client"
import { ROUTES } from "@/utils/routes"
import type { Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) return <div>Loading...</div>
  return session ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
