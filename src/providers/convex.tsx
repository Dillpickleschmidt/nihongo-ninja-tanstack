import { ConvexProvider, setupConvex } from "convex-solidjs"
import { createRoot } from "solid-js"
import type { JSXElement } from "solid-js"
import { authClient } from "@/lib/auth-client"
import { fetchAuth } from "@/lib/server"

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL
if (!CONVEX_URL) {
  console.error("missing envar CONVEX_URL")
}

let disposeConvexRoot: (() => void) | undefined

export const convexQueryClient = createRoot((dispose) => {
  disposeConvexRoot = dispose
  return setupConvex(CONVEX_URL)
})

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

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    disposeConvexRoot?.()
  })
}

// Exported for re-triggering auth after sign-in/sign-out
export { convexAuthProvider }

export default function AppConvexProvider(props: { children: JSXElement }) {
  return (
    <ConvexProvider client={convexQueryClient}>{props.children}</ConvexProvider>
  )
}
