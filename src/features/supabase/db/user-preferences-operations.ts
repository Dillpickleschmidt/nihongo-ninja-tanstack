import { createBackendClient } from "@/features/supabase/backendClient"
import {
  UserPreferencesSchema,
  type UserPreferencesCookieData,
} from "@/features/user-settings/schemas/user-preferences"

export async function getUserPreferencesFromDB(
  userId: string,
): Promise<UserPreferencesCookieData | null> {
  const supabase = createBackendClient()

  const { data, error } = await supabase
    .from("profiles")
    .select("user_preferences")
    .eq("user_id", userId)
    .single()

  if (error || !data) {
    return null
  }

  try {
    const result = UserPreferencesSchema.safeParse(data.user_preferences)
    return result.success ? result.data : null
  } catch {
    return null
  }
}

export async function updateUserPreferencesInDB(
  userId: string,
  preferences: UserPreferencesCookieData,
): Promise<boolean> {
  const supabase = createBackendClient()

  const { error } = await supabase.from("profiles").upsert({
    user_id: userId,
    user_preferences: preferences,
    updated_at: new Date().toISOString(),
  })

  return !error
}

