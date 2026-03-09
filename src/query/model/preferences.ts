import { getCookie, setCookie } from "@/features/cookies"
import type { QueryClient } from "@tanstack/solid-query"
import type { Infer } from "convex/values"
import { DEFAULT_USER_PREFERENCES, userPreferencesValidator } from "convex/validators"
import { queryKeys } from "../query-keys"

const PREFERENCES_COOKIE = "user_preferences"

export type StoredPreferences = Infer<typeof userPreferencesValidator>

export function parsePreferencesCookie(): StoredPreferences {
  const raw = getCookie(PREFERENCES_COOKIE) as string | null
  if (!raw) return DEFAULT_USER_PREFERENCES
  try {
    return { ...DEFAULT_USER_PREFERENCES, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_USER_PREFERENCES
  }
}

export function updatePreferenceCookie<
  K extends keyof StoredPreferences,
>(queryClient: QueryClient, field: K, value: StoredPreferences[K]) {
  updatePreferencesCookie(queryClient, { [field]: value })
}

export function updatePreferencesCookie(
  queryClient: QueryClient,
  updates: Partial<StoredPreferences>,
) {
  const current =
    queryClient.getQueryData<StoredPreferences>(queryKeys.preferences()) ??
    DEFAULT_USER_PREFERENCES
  const updated = { ...current, ...updates, timestamp: Date.now() }
  setCookie(PREFERENCES_COOKIE, JSON.stringify(updated))
  queryClient.setQueryData(queryKeys.preferences(), updated)
}

export function syncPreferencesFromProfile(
  queryClient: QueryClient,
  userPreferences: StoredPreferences,
) {
  setCookie(PREFERENCES_COOKIE, JSON.stringify(userPreferences))
  queryClient.setQueryData(queryKeys.preferences(), userPreferences)
}
