import { ConvexProvider, setupConvex } from 'convex-solidjs'
import type { JSXElement } from 'solid-js'
import { fetchAuth } from '@/lib/server'

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL
if (!CONVEX_URL) {
  console.error('missing envar CONVEX_URL')
}

export default function AppConvexProvider(props: { children: JSXElement }) {
  const convexClient = setupConvex(CONVEX_URL)
  convexClient.setAuth(async () => {
    const { token } = await fetchAuth()
    return token
  })
  return <ConvexProvider client={convexClient}>{props.children}</ConvexProvider>
}
