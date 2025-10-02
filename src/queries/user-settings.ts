// queries/user-settings.ts
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
 * Query options for combined user settings (device-specific + user-specific)
 * - Device-specific fields (routes, tour, device-type): cookie only
 * - User-specific fields (everything else): cookie + DB sync
 */
export const userSettingsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["user-settings", userId],
    queryFn: async () => {
      // Try to load from cookie first (fast path)
      const cookieValue = getCookie(USER_SETTINGS_COOKIE)
      if (cookieValue) {
        try {
          const parsed = JSON.parse(cookieValue)
          const result = UserSettingsSchema.safeParse(parsed)
          if (result.success) return result.data
        } catch {}
      }

      // If no cookie or invalid, load user-specific settings from DB (if logged in)
      if (userId) {
        const supabase = createSupabaseClient()
        const { data, error } = await supabase
          .from("profiles")
          .select("user_preferences")
          .eq("user_id", userId)
          .single()

        if (!error && data?.user_preferences) {
          // Merge DB data with default device settings
          const defaults = UserSettingsSchema.parse({})
          return UserSettingsSchema.parse({
            ...defaults,
            ...data.user_preferences,
          })
        }
      }

      // Fallback to defaults
      return UserSettingsSchema.parse({})
    },
    placeholderData: UserSettingsSchema.parse({}),
    staleTime: Infinity,
    gcTime: Infinity,
  })

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
    const currentSettings = queryClient.getQueryData<UserSettings>([
      "user-settings",
      userId,
    ])

    const newSettings = { ...currentSettings, ...settings } as UserSettings

    // Update cookie
    setCookie(USER_SETTINGS_COOKIE, JSON.stringify(newSettings), {
      httpOnly: false,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    // Sync to DB if logged in
    if (user) {
      const supabase = createSupabaseClient()
      await supabase
        .from("profiles")
        .update({
          user_preferences: {
            "service-preferences": newSettings["service-preferences"],
            "active-textbook": newSettings["active-textbook"],
            "active-deck": newSettings["active-deck"],
            "completed-tours": newSettings["completed-tours"],
            "override-settings": newSettings["override-settings"],
            "conjugation-practice": newSettings["conjugation-practice"],
            "dismissed-position-prompts":
              newSettings["dismissed-position-prompts"],
            timestamp: Date.now(),
          },
        })
        .eq("user_id", user.id)
    }

    return newSettings
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
  onSuccess: (newSettings) => {
    queryClient.setQueryData(["user-settings", userId], newSettings)
  },
})
