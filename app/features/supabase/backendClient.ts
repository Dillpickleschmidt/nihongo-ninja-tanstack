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
  const supabaseAnonKey = Resource.SUPABASE_ANON_KEY.value

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL or Anon Key is not defined (from SST Resources).",
    )
  }

  const cookieHeader = getRequestHeader("Cookie") ?? ""
  const clientInstance = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        const allCookies = parseCookieHeader(cookieHeader)
        const supabaseCookies = allCookies.map((cookie) => {
          if (cookie.name.match(/^sb-[a-z0-9]+-auth-token\.\d+$/)) {
            return {
              name: cookie.name.replace(/-auth-token\.\d+$/, "-auth-token"),
              value: cookie.value ?? "",
            }
          }
          return {
            name: cookie.name,
            value: cookie.value ?? "",
          }
        })
        return supabaseCookies
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            setResponseHeader(
              "Set-Cookie",
              serializeCookieHeader(name, value, options),
            )
          })
        } catch (e) {
          console.warn(
            `Supabase client's setAll failed to set cookies. Error: ${e}.`,
          )
        }
      },
    },
  })

  return clientInstance
})
