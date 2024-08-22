import { supabase } from "@/services/supabase-client"
import type { Session } from "@supabase/supabase-js"
import { createContext, useContext, useEffect, useState } from "react"

interface IAuthContext {
  checkingSession: boolean
  signInLoading: boolean
  session: Session | null
  signUpWithEmail: (email: string) => Promise<void>
  signInWithGithub: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [checkingSession, setCheckingSession] = useState(true)
  const [signInLoading, setSignInLoading] = useState(false)

  async function signUpWithEmail(email: string) {
    setSignInLoading(true)
    await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: "http://localhost:5173/app",
      },
    })
    setSignInLoading(false)
  }

  async function signInWithGithub() {
    setSignInLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: import.meta.env.VITE_SUPABASE_REDIRECT_URL,
      },
    })
    setSignInLoading(false)
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    setCheckingSession(true)

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setCheckingSession(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setCheckingSession(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        checkingSession,
        signInLoading,
        session,
        signUpWithEmail,
        signInWithGithub,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
