import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import type { TextbookIDEnum } from "@/data/types"

/**
 * Get the current learning position for a user in a specific textbook
 */
export async function getUserTextbookProgress(
  userId: string,
  textbookId: TextbookIDEnum,
): Promise<UserTextbookProgress | null> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_textbook_progress")
    .select()
    .eq("user_id", userId)
    .eq("textbook_id", textbookId)
    .maybeSingle()

  if (error) throw error
  return data
}

/**
 * Update (or insert) the current learning position for a user in a textbook
 */
export async function updateUserTextbookProgress(
  userId: string,
  textbookId: TextbookIDEnum,
  moduleId: string,
): Promise<UserTextbookProgress> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_textbook_progress")
    .upsert(
      {
        user_id: userId,
        textbook_id: textbookId,
        current_module_id: moduleId,
        updated_at: new Date().toISOString(),
      } satisfies UserTextbookProgressInsert,
      {
        onConflict: "user_id,textbook_id",
      },
    )
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Get all textbook progress for a user
 */
export async function getAllUserTextbookProgress(
  userId: string,
): Promise<UserTextbookProgress[]> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_textbook_progress")
    .select()
    .eq("user_id", userId)

  if (error) throw error
  return data
}
