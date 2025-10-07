// createSupabaseClient.ts
import { createIsomorphicFn } from "@tanstack/solid-start"
import { createBrowserClient } from "@supabase/ssr"
import { createBackendClient } from "./backendClient"

export const createSupabaseClient = createIsomorphicFn()
  .server(() => createBackendClient())
  .client(() =>
    createBrowserClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_OR_ANON_KEY,
    ),
  )
