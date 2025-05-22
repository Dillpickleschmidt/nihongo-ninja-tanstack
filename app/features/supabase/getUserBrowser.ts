// features/supabase/getUserBrowser.ts

export async function getUserBrowser() {
  const res = await fetch("/api/auth/refresh", {
    method: "POST",
    credentials: "include",
  })
  if (!res.ok) return { user: null, error: "Not authenticated" }
  return await res.json() // { user, error }
}
