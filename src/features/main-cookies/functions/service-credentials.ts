// features/main-cookies/service-credentials.ts
import { createServerFn } from "@tanstack/solid-start"
import { zodValidator } from "@tanstack/zod-adapter"
import { getCookie, setCookie } from "@/utils/cookie-utils"
import { SERVICE_CREDENTIALS_COOKIE } from "../types"
import {
  ServiceCredentialsSchema,
  type ServiceCredentials,
} from "../schemas/service-credentials"
import { getUser } from "@/features/supabase/getUser"
import { getTokensFromDB } from "@/features/supabase/db/anime-auth"

/**
 * Server-only function to read service credentials from HttpOnly cookie
 * This ensures API keys are never exposed to client-side JavaScript
 */
export const getServiceCredentials = createServerFn({
  method: "GET",
}).handler(async (): Promise<ServiceCredentials> => {
  const cookieValue = getCookie(SERVICE_CREDENTIALS_COOKIE)

  // Try cookie first
  if (cookieValue) {
    try {
      const parsed = JSON.parse(cookieValue)
      return ServiceCredentialsSchema.parse(parsed)
    } catch {
      // Fall through to DB check
    }
  }

  // Check if user is authenticated
  const userResult = await getUser()
  if (!userResult.user) {
    return ServiceCredentialsSchema.parse({})
  }

  // Try to load from DB (cross-device sync)
  try {
    const dbTokens = await getTokensFromDB()

    if (dbTokens) {
      // Merge with defaults and write to cookie
      const credentials = ServiceCredentialsSchema.parse(dbTokens)
      await updateServiceCredentials({ data: credentials })
      return credentials
    }
  } catch (error) {
    console.error("[ServiceCredentials] DB load error:", error)
  }

  return ServiceCredentialsSchema.parse({})
})

/**
 * Server-only function to update service credentials in HttpOnly cookie
 * This ensures API keys are never exposed to client-side JavaScript
 */
export const updateServiceCredentials = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(ServiceCredentialsSchema))
  .handler(async ({ data }): Promise<{ success: boolean }> => {
    setCookie(SERVICE_CREDENTIALS_COOKIE, JSON.stringify(data), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    return { success: true }
  })

/**
 * Returns anime service connection status
 */
export const getServiceConnectionStatus = createServerFn({
  method: "GET",
}).handler(
  async (): Promise<{
    anilist: boolean
    kitsu: boolean
    mal: boolean
  }> => {
    const credentials = await getServiceCredentials()

    return {
      anilist: !!credentials.anilist?.accessToken,
      kitsu: !!credentials.kitsu?.accessToken,
      mal: !!credentials.mal?.accessToken,
    }
  },
)
