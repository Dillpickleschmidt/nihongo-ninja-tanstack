import { createServerFn } from "@tanstack/solid-start"
import { getRequest } from "@tanstack/solid-start/server"
import { api } from "../../convex/_generated/api"
import {
  fetchAuthenticatedConvexMutation,
  fetchBetterAuthSession,
  getAuthenticatedConvexToken,
} from "./auth-server"

// Get auth information for SSR using available cookies
export const fetchAuth = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest()
  const { session } = await fetchBetterAuthSession(request)
  const token = await getAuthenticatedConvexToken()

  return {
    session,
    token: token ?? null,
    userId: session?.user.id ?? null,
  }
})

// Create profile after signup
export const createProfile = createServerFn({ method: "POST" }).handler(
  async () => {
    return await fetchAuthenticatedConvexMutation(
      api.api.profiles.ensureProfile,
      {},
    )
  },
)
