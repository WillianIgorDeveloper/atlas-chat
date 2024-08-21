import { supabase } from "@/services/supabase-client"
import { Session } from "@supabase/supabase-js"
import { useState } from "react"

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  async function signUpWithEmail() {
    await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
    })
  }

  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: import.meta.env.VITE_SUPABASE_REDIRECT_URL,
      },
    })
  }

  async function getSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    setSession(session)
    setLoading(false)
    return session
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return { signUpWithEmail, signInWithGithub, getSession, signOut }
}
