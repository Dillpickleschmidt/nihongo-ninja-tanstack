import { ConvexProvider, setupConvex } from 'convex-solidjs'
import type { JSXElement } from 'solid-js'
import { fetchAuth } from '@/lib/server'

const CONVEX_URL = import.meta.env.VITE_CONVEX_URL
if (!CONVEX_URL) {
  console.error('missing envar CONVEX_URL')
}

export const convexClient = setupConvex(CONVEX_URL)
convexClient.setAuth(async () => (await fetchAuth()).token)

export default function AppConvexProvider(props: { children: JSXElement }) {
  return <ConvexProvider client={convexClient}>{props.children}</ConvexProvider>
}
