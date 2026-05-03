import { createServerFn } from "@tanstack/solid-start"
import { getRequest } from "@tanstack/solid-start/server"
import { api } from "../../convex/_generated/api"
import {
  fetchAuthenticatedConvexAction,
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

// Ensure user resources after signup
export const ensureAccountResources = createServerFn({ method: "POST" }).handler(
  async () => {
    await Promise.all([
      fetchAuthenticatedConvexMutation(api.api.profiles.ensureProfile, {}),
      fetchAuthenticatedConvexAction(api.api.billing.getCustomer, {}),
    ])
  },
)

export const fetchAutumnCustomer = createServerFn({ method: "GET" }).handler(
  async () => {
    return await fetchAuthenticatedConvexAction(api.api.billing.getCustomer, {})
  },
)
