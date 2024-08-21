import { ROUTES } from "@/utils/routes"
import { Navigate, Outlet } from "react-router-dom"
import { supabase } from "@/services/supabase-client"
import type { Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { useAuth } from "@/presentation/hooks/auth"

export function OnlyPublicRoutes() {
  const { getSession } = useAuth()

  if (loading) return <div>Loading...</div>
  return session ? <Navigate to={ROUTES.APP} replace={true} /> : <Outlet />
}
