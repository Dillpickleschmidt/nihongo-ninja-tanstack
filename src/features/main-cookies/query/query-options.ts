// features/main-cookies/query/query-options.ts
import { queryOptions } from "@tanstack/solid-query"
import type { MutationOptions } from "@tanstack/solid-query"
import { getCookie, setCookie } from "@/utils/cookie-utils"
import { UserSettingsSchema } from "@/features/main-cookies/schemas/user-settings"
import { USER_SETTINGS_COOKIE } from "@/features/main-cookies/types"
import { getUser } from "@/features/supabase/getUser"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { QueryClient } from "@tanstack/solid-query"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

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
 * Query options for DB-only user settings
 * - Only fetches from Supabase, doesn't touch cookies
 * - Used to track DB sync status separately from cookie query
 */
export const dbUserSettingsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["db-user-settings", userId],
    queryFn: async () => {
      if (!userId) return null
      return await fetchUserSettingsFromDB(userId)
    },
    enabled: !!userId,
  })

/**
 * Query options for combined user settings (device-specific + user-specific)
 * - Returns cookie data immediately (fast path)
 * - DB sync happens in background via fetchUserSettingsFromDB
 */
export const userSettingsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["user-settings", userId],
    queryFn: async () => {
      const cookieValue = getCookie(USER_SETTINGS_COOKIE)
      if (cookieValue) {
        try {
          const parsed = JSON.parse(cookieValue)
          const result = UserSettingsSchema.safeParse(parsed)
          if (result.success) {
            return result.data
          }
        } catch {}
      }

      return UserSettingsSchema.parse({})
    },
    placeholderData: UserSettingsSchema.parse({}),
    staleTime: Infinity,
    gcTime: Infinity,
  })

/**
 * Helper: Update user settings cookie
 */
function updateUserSettingsCookie(settings: UserSettings) {
  setCookie(USER_SETTINGS_COOKIE, JSON.stringify(settings), {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}

/**
 * Helper: Sync user settings to database
 */
async function syncUserSettingsToDb(
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
        "active-textbook": settings["active-textbook"],
        "active-deck": settings["active-deck"],
        "completed-tours": settings["completed-tours"],
        "override-settings": settings["override-settings"],
        "conjugation-practice": settings["conjugation-practice"],
        "textbook-positions": settings["textbook-positions"],
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
  const currentSettings = queryClient.getQueryData<UserSettings>([
    "user-settings",
    userId,
  ])

  const timestamp = Date.now()
  const newSettings = {
    ...currentSettings,
    ...updates,
    timestamp,
  } as UserSettings

  // Update cache
  queryClient.setQueryData(["user-settings", userId], newSettings)

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

/**
 * Mutation for updating user settings
 * - Optimistically updates cache
 * - Updates cookie and syncs to DB
 * - Rolls back on error
 */
export const updateUserSettingsMutation = (
  userId: string | null,
  queryClient: QueryClient,
): MutationOptions<
  UserSettings,
  Error,
  Partial<UserSettings>,
  { previousSettings: UserSettings | undefined }
> => ({
  mutationFn: async (settings: Partial<UserSettings>) => {
    const { user } = await getUser()
    return await applyUserSettingsUpdate(
      user?.id || null,
      queryClient,
      settings,
      { awaitDb: true }, // Mutation awaits DB
    )
  },
  onMutate: async (newSettings) => {
    await queryClient.cancelQueries({ queryKey: ["user-settings", userId] })

    const previousSettings = queryClient.getQueryData<UserSettings>([
      "user-settings",
      userId,
    ])

    queryClient.setQueryData<UserSettings>(
      ["user-settings", userId],
      (old) => ({
        ...old!,
        ...newSettings,
      }),
    )

    return { previousSettings }
  },
  onError: (_err, _vars, context) => {
    if (context?.previousSettings) {
      queryClient.setQueryData(
        ["user-settings", userId],
        context.previousSettings,
      )
    }
  },
})
