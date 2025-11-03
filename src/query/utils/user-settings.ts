import { setCookie } from "@/utils/cookie-utils"
import { USER_SETTINGS_COOKIE } from "@/features/main-cookies/types"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { QueryClient } from "@tanstack/solid-query"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { queryKeys } from "@/query/utils/query-keys"

/**
 * Fetches user settings from database
 * Returns null if user not found or error occurs
 */
export async function fetchUserSettingsFromDB(userId: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("profiles")
    .select("user_preferences")
    .eq("user_id", userId)
    .single()

  return !error && data?.user_preferences ? data.user_preferences : null
}

/**
 * Update user settings cookie
 */
export function updateUserSettingsCookie(settings: UserSettings) {
  setCookie(USER_SETTINGS_COOKIE, JSON.stringify(settings), {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}

/**
 * Sync user settings to database
 */
export async function syncUserSettingsToDb(
  userId: string,
  settings: UserSettings,
  timestamp: number,
) {
  const supabase = createSupabaseClient()
  const { error } = await supabase
    .from("profiles")
    .update({
      user_preferences: {
        "service-preferences": settings["service-preferences"],
        "active-learning-path": settings["active-learning-path"],
        "active-chapter": settings["active-chapter"],
        "has-completed-onboarding": settings["has-completed-onboarding"],
        tours: settings["tours"],
        "override-settings": settings["override-settings"],
        "conjugation-practice": settings["conjugation-practice"],
        "learning-path-positions": settings["learning-path-positions"],
        timestamp,
      },
    })
    .eq("user_id", userId)

  if (error) throw error
}

/**
 * Apply user settings update (cache + cookie + DB)
 * @param awaitDb - If true, awaits DB sync; if false, syncs in background
 */
export async function applyUserSettingsUpdate(
  userId: string | null,
  queryClient: QueryClient,
  updates: Partial<UserSettings>,
  options: { awaitDb: boolean } = { awaitDb: false },
): Promise<UserSettings> {
  const currentSettings = queryClient.getQueryData<UserSettings>(
    queryKeys.userSettings(userId),
  )

  const timestamp = Date.now()
  const newSettings = {
    ...currentSettings,
    ...updates,
    timestamp,
  } as UserSettings

  // Update cache
  queryClient.setQueryData(queryKeys.userSettings(userId), newSettings)

  // Update cookie
  updateUserSettingsCookie(newSettings)

  // Sync to DB
  if (userId) {
    const dbPromise = syncUserSettingsToDb(userId, newSettings, timestamp)

    if (options.awaitDb) {
      await dbPromise
    } else {
      dbPromise.catch((error) => console.error("[DB Sync Failed]", error))
    }
  }

  return newSettings
}
