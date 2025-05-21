// features/supabase/auth.ts

import { serverOnly } from "@tanstack/solid-start"
import { createServerFn } from "@tanstack/solid-start"

export const getUser = createServerFn({
  method: "GET",
}).handler(
  serverOnly(async () => {
    const { createBackendClient } = await import("./backendClient")
    const supabase = createBackendClient()
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error) {
      console.error("Supabase getUser error:", error.message)
      return { user: null, error: error.message }
    }

    return { user: user ?? (null as any), error: null }
  }),
)
