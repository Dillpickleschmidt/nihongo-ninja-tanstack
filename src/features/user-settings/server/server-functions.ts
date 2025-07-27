// features/user-settings/server/server-functions.ts
import { createServerFn } from "@tanstack/solid-start"
import { getUserSSR } from "@/features/supabase/getUserSSR"
import { z } from "zod"
import {
  getUserPreferencesFromDB,
  updateUserPreferencesInDB,
} from "@/features/supabase/db/user-preferences-operations"
import {
  getUserPreferencesCookie,
  createUserPreferencesCookieHeader,
} from "../utils/settings-cookies"
import { UserPreferencesSchema } from "../schemas/user-preferences"

// Server function for immediate response: returns cookie data only (no DB wait)
export const getInitialUserPreferencesFromCookieServerFn = createServerFn({
  method: "GET",
}).handler(async () => {
  const { user } = await getUserSSR()
  if (!user) {
    // Return defaults for unauthenticated users
    return UserPreferencesSchema.parse({})
  }

  // Get stale data from cookie for immediate response (initialUserPreferenceData)
  const cookieData = getUserPreferencesCookie()
  return cookieData || UserPreferencesSchema.parse({})
})

// Server function for background revalidation: returns DB data only
export const getUserPreferencesFromDBServerFn = createServerFn({
  method: "GET",
}).handler(async () => {
  const { user } = await getUserSSR()
  if (!user) {
    // Return defaults for unauthenticated users
    return UserPreferencesSchema.parse({})
  }

  // Fetch DB data for timestamp comparison
  const dbData = await getUserPreferencesFromDB(user.id)
  return dbData || UserPreferencesSchema.parse({}) // fallback should ideally never happen but just in case...
})

// Server function to revalidate HttpOnly cookie (for when client detects newer DB data)
export const revalidateUserPreferencesCookieServerFn = createServerFn({
  method: "POST",
})
  .validator((input: any) => {
    return z.object({ preferences: UserPreferencesSchema }).parse(input)
  })
  .handler(async ({ data }) => {
    const { user } = await getUserSSR()
    if (!user) {
      // Return success without doing anything for unauthenticated users
      return {
        cookieHeader: "",
        success: true,
      }
    }

    // Update cookie to match the newer DB data
    const cookieHeader = createUserPreferencesCookieHeader(data.preferences)

    return {
      cookieHeader,
      success: true,
    }
  })

// Server function to mutate user preferences (user-initiated changes)
export const mutateUserPreferencesServerFn = createServerFn({
  method: "POST",
})
  .validator((input: any) => {
    return z.object({ preferences: UserPreferencesSchema }).parse(input)
  })
  .handler(async ({ data }) => {
    const { user } = await getUserSSR()
    if (!user) {
      // Return the input data with a new timestamp for unauthenticated users
      const preferencesWithTimestamp = {
        ...data.preferences,
        timestamp: Date.now(),
      }
      return {
        preferences: preferencesWithTimestamp,
        cookieHeader: "",
      }
    }

    // Update timestamp for conflict resolution
    const preferencesWithTimestamp = {
      ...data.preferences,
      timestamp: Date.now(),
    }

    // Update database
    const success = await updateUserPreferencesInDB(
      user.id,
      preferencesWithTimestamp,
    )

    if (!success) {
      throw new Error("Failed to update user preferences")
    }

    // Return updated preferences and cookie header
    return {
      preferences: preferencesWithTimestamp,
      cookieHeader: createUserPreferencesCookieHeader(preferencesWithTimestamp),
    }
  })
