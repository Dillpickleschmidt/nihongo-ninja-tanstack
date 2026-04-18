import { createServerFn } from "@tanstack/solid-start"
import { getRequest } from "@tanstack/solid-start/server"
import { api } from "../../convex/_generated/api"
import { fetchMutation, fetchSession, getToken } from "./auth-server"

// Get auth information for SSR using available cookies
export const fetchAuth = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest()
  const { session } = await fetchSession(request)
  const token = await getToken()

  return {
    session,
    token: token ?? null,
    userId: session?.user.id ?? null,
  }
})

// Create profile after signup
export const createProfile = createServerFn({ method: "POST" }).handler(
  async () => {
    return await fetchMutation(api.api.profiles.ensureProfile, {})
  },
)
