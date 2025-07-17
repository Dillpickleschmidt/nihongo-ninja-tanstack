// features/auth/utils/requireAuth.ts
import { redirect } from "@tanstack/solid-router"
import { getUser } from "@/features/supabase/getUser"

export async function requireAuth() {
  const result = await getUser()
  if (!result.user) {
    throw redirect({ to: "/auth" })
  }
  return result.user
}
