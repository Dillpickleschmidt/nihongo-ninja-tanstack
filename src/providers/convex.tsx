import { ConvexProvider, setupConvex } from 'convex-solidjs'
import type { JSXElement } from 'solid-js'
import { authClient } from '@/lib/auth-client'
import { fetchAuth } from '@/lib/server'

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL
if (!CONVEX_URL) {
  console.error('missing envar CONVEX_URL')
}

export const convexQueryClient = setupConvex(CONVEX_URL)

// Set auth on the WebSocket client (for client-side real-time updates)
convexQueryClient.client.setAuth(async ({ forceRefreshToken }) => {
  if (forceRefreshToken) {
    // Force BetterAuth to refresh the session and get new JWT
    await authClient.getSession({ query: { disableCookieCache: true } })
  }
  const { token } = await fetchAuth()
  return token
})

export default function AppConvexProvider(props: { children: JSXElement }) {
  return <ConvexProvider client={convexQueryClient}>{props.children}</ConvexProvider>
}
