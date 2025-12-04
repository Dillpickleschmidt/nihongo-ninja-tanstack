// src/features/supabase/db/anime-auth.ts
import { createServerFn } from "@tanstack/solid-start"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { getUser } from "@/features/supabase/getUser"
import type { AnimeServiceType } from "@/features/main-cookies/schemas/user-settings"

/**
 * Store anime service token in database
 * Used for cross-device sync
 */
export const storeTokenInDB = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      service: AnimeServiceType
      accessToken: string
      refreshToken?: string
      expiresAt?: string
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()

    if (!response.user) {
      throw new Error("User not authenticated")
    }

    const { service, accessToken, refreshToken = "", expiresAt } = data

    // Validate service
    if (!["anilist", "kitsu", "mal"].includes(service)) {
      throw new Error("Invalid service")
    }

    const { error } = await supabase.from("user_service_tokens").upsert(
      {
        user_id: response.user.id,
        service,
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_at: expiresAt,
      },
      {
        onConflict: "user_id,service",
      },
    )

    if (error) {
      throw new Error("Failed to store token")
    }

    return { success: true }
  })

/**
 * Get all anime service tokens from database
 * Used for cross-device token sync when cookie is empty
 * Returns null if no tokens found or all are expired
 */
export const getTokensFromDB = createServerFn({ method: "GET" }).handler(
  async () => {
    const supabase = createSupabaseClient()
    const response = await getUser()

    if (!response.user) {
      return null
    }

    const { data: tokens, error } = await supabase
      .from("user_service_tokens")
      .select("service, access_token, refresh_token, expires_at")
      .eq("user_id", response.user.id)

    if (error || !tokens) {
      return null
    }

    // Convert array to ServiceCredentials format, filtering expired tokens
    const credentials: Record<string, any> = {}
    for (const token of tokens) {
      const service = token.service as AnimeServiceType

      // Skip expired tokens
      if (token.expires_at) {
        const expiresAt = new Date(token.expires_at).getTime()
        if (expiresAt < Date.now()) {
          continue
        }
      }

      credentials[service] = {
        accessToken: token.access_token,
        refreshToken: token.refresh_token || "",
        expiresAt: token.expires_at,
      }
    }

    return Object.keys(credentials).length > 0 ? credentials : null
  },
)

/**
 * Delete anime service token from database
 * Called on logout
 */
export const deleteTokenFromDB = createServerFn({ method: "POST" })
  .inputValidator((data: { service: AnimeServiceType }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()

    if (!response.user) {
      throw new Error("User not authenticated")
    }

    const { service } = data

    // Validate service
    if (!["anilist", "kitsu", "mal"].includes(service)) {
      throw new Error("Invalid service")
    }

    const { error } = await supabase
      .from("user_service_tokens")
      .delete()
      .eq("user_id", response.user.id)
      .eq("service", service)

    if (error) {
      console.error("Error deleting token from DB:", error)
      throw new Error("Failed to delete token")
    }

    return { success: true }
  })
