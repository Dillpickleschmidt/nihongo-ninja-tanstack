import { createBackendClient } from "@/features/supabase/backendClient"
import {
  UserPreferencesSchema,
  type UserPreferencesCookieData,
} from "@/features/user-settings/schemas/user-preferences"

export async function getUserPreferencesFromDB(
  userId: string,
): Promise<UserPreferencesCookieData> {
  const supabase = createBackendClient()

  const { data, error } = await supabase
    .from("profiles")
    .select("user_preferences")
    .eq("user_id", userId)
    .single()

  if (error) {
    throw new Error(`Database query failed: ${error.message}`)
  }

  try {
    const result = UserPreferencesSchema.safeParse(data.user_preferences)
    if (!result.success) {
      throw new Error(`Schema validation failed: ${result.error.message}`)
    }
    return result.data
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error(`Failed to parse user preferences: ${error}`)
  }
}

export async function updateUserPreferencesInDB(
  userId: string,
  preferences: UserPreferencesCookieData,
): Promise<any> {
  const supabase = createBackendClient()

  const { data, error } = await supabase
    .from("profiles")
    .update({ user_preferences: preferences })
    .eq("user_id", userId)
    .select()

  if (error) {
    throw error
  }

  // Check if the update actually affected any rows
  if (!data || data.length === 0) {
    throw new Error(
      `Failed to update user preferences: No rows affected for user_id ${userId}. This could be due to RLS policies or the user not existing in the profiles table.`,
    )
  }

  return data
}
