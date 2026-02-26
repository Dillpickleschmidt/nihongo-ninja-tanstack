import { ConvexProvider, setupConvex } from "convex-solidjs"
import type { JSXElement } from "solid-js"
import { authClient } from "@/lib/auth-client"
import { fetchAuth } from "@/lib/server"

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL
if (!CONVEX_URL) {
  console.error("missing envar CONVEX_URL")
}

export const convexQueryClient = setupConvex(CONVEX_URL)

const convexAuthProvider = async ({
  forceRefreshToken,
}: {
  forceRefreshToken: boolean
}) => {
  if (forceRefreshToken) {
    await authClient.getSession({ query: { disableCookieCache: true } })
  }
  const { token } = await fetchAuth()
  return token
}

convexQueryClient.client.setAuth(convexAuthProvider)

// Exported for re-triggering auth after sign-in/sign-out
export { convexAuthProvider }

export default function AppConvexProvider(props: { children: JSXElement }) {
  return (
    <ConvexProvider client={convexQueryClient}>{props.children}</ConvexProvider>
  )
}
