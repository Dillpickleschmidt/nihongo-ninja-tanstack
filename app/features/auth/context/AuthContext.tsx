// features/auth/context/AuthContext.tsx
import { createContext, useContext } from "solid-js"
import { createResource } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { getUser } from "@/features/supabase/getUser"

type AuthContextType = {
  user: () => any | null | undefined
  loading: () => boolean
  refetch: () => void
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>()

export function AuthProvider(props: { children: any }) {
  const [user, { refetch, mutate }] = createResource(() => getUser())
  const navigate = useNavigate()

  const signOut = async () => {
    try {
      // Call your logout API (clears cookies)
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })

      // Clear user from context immediately
      mutate(() => ({ user: null, error: null }))

      // Navigate to learn page
      navigate({ to: "/learn" })
    } catch (error) {
      console.error("Logout failed:", error)
      // Still clear user locally even if API call fails
      mutate(() => ({ user: null, error: null }))
      navigate({ to: "/learn" })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: () => user()?.user || null,
        loading: () => user.loading,
        refetch,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
