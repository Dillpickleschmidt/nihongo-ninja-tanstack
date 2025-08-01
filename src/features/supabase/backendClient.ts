// backendClient.ts
import { createServerClient, parseCookieHeader } from "@supabase/ssr"
import { getRequestHeader } from "@tanstack/solid-start/server"
import { serverOnly } from "@tanstack/solid-start"
import { Resource } from "sst"

export const createBackendClient = serverOnly(() => {
  const supabaseUrl = Resource.SUPABASE_URL.value
  const supabaseAnonKey = Resource.SUPABASE_ANON_KEY.value

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL or Anon Key is not defined (from SST Resources).",
    )
  }

  const cookieHeader = getRequestHeader("Cookie") ?? ""

  // let logged = false

  const clientInstance = createServerClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          const allCookies = parseCookieHeader(cookieHeader)
          const supabaseCookies = allCookies.map((cookie) => {
            return {
              name: cookie.name,
              value: cookie.value ?? "",
            }
          })
          return supabaseCookies
        },
        setAll() {
          // do not let Supabase SSR client set or clear cookies
        },
      },
    },
  )

  return clientInstance
})
