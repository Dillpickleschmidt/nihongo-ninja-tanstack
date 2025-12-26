import {
  fetchSession,
  getCookieName,
} from "@convex-dev/better-auth/react-start"
import { createServerFn } from "@tanstack/solid-start"
import { getCookie, getRequest } from "@tanstack/solid-start/server"
import { api } from "../../convex/_generated/api"
import { fetchMutation } from "./auth-server"

// Get auth information for SSR using available cookies
export const fetchAuth = createServerFn({ method: "GET" }).handler(async () => {
  const { createAuth } = await import("../../convex/auth")
  const request = getRequest()
  const { session } = await fetchSession(request)
  const sessionCookieName = getCookieName(createAuth)
  const token = getCookie(sessionCookieName)

  return {
    session,
    token,
  }
})

// Create profile after signup
export const createProfile = createServerFn({ method: "POST" }).handler(
  async () => {
    return await fetchMutation(api.api.profiles.ensureProfile, {})
  },
)
