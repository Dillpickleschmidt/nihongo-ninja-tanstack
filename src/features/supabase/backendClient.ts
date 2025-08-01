// backendClient.ts
import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr"
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/solid-start/server"
import { serverOnly } from "@tanstack/solid-start"
import { Resource } from "sst"

export const createBackendClient = serverOnly(() => {
  const supabaseUrl = Resource.SUPABASE_URL.value
  const supabaseAnonKey = Resource.SUPABASE_PUBLISHABLE_OR_ANON_KEY.value

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL or Anon Key is not defined (from SST Resources).",
    )
  }

  const cookieHeader = getRequestHeader("Cookie") ?? ""

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
        setAll(cookiesToSet) {
          const cookieHeaders = cookiesToSet.map(({ name, value, options }) => {
            return serializeCookieHeader(name, value, {
              ...options,
              httpOnly: false, // Auth tokens need to be accessible to getClaims()
              secure: true,
              sameSite: "lax",
            })
          })

          // Set all cookies as an array
          if (cookieHeaders.length > 0) {
            setResponseHeader("Set-Cookie", cookieHeaders)
          }
        },
      },
    },
  )

  return clientInstance
})
