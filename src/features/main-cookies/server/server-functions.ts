// features/user-settings/server/server-functions.ts
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"
import { z } from "zod"
import {
  getUserPreferencesFromDB,
  updateUserPreferencesInDB,
} from "@/features/supabase/db/user-preferences-operations"
import { UserPreferencesSchema } from "../schemas/user-preferences"
import {
  _getUserPreferencesCookie,
  _setUserPreferencesCookie,
  _getDefaultPreferences,
  _addTimestamp,
} from "./cookie-utils"

// Common validation schema
const preferencesValidator = z.object({ preferences: UserPreferencesSchema })

// Server function for immediate response: returns cookie data only (no DB wait)
export const getInitialUserPreferencesFromCookieServerFn = createServerFn({
  method: "GET",
}).handler(async () => {
  const { user } = await getUser()
  if (!user) return _getDefaultPreferences()

  const cookieData = _getUserPreferencesCookie()
  return cookieData || _getDefaultPreferences()
})

// Server function for background revalidation: returns DB data only
export const getUserPreferencesFromDBServerFn = createServerFn({
  method: "GET",
}).handler(async () => {
  const { user } = await getUser()
  if (!user) return _getDefaultPreferences()

  return await getUserPreferencesFromDB(user.id)
})

// Server function to revalidate HttpOnly cookie (for when client detects newer DB data)
export const revalidateUserPreferencesCookieServerFn = createServerFn({
  method: "POST",
})
  .validator((input: any) => preferencesValidator.parse(input))
  .handler(async ({ data }) => {
    const { user } = await getUser()
    if (!user) return { success: true }

    _setUserPreferencesCookie(data.preferences)
    return { success: true }
  })

// Server function to mutate user preferences (user-initiated changes)
export const mutateUserPreferencesServerFn = createServerFn({
  method: "POST",
})
  .validator((input: any) => preferencesValidator.parse(input))
  .handler(async ({ data }) => {
    const { user } = await getUser()
    const preferencesWithTimestamp = _addTimestamp(data.preferences)

    if (!user) {
      return { preferences: preferencesWithTimestamp }
    }

    // Update database
    await updateUserPreferencesInDB(user.id, preferencesWithTimestamp).catch(
      (error) =>
        console.error(
          "💾 Database update failed (continuing with cookie):",
          error,
        ),
    )

    _setUserPreferencesCookie(preferencesWithTimestamp)
    return { preferences: preferencesWithTimestamp }
  })
