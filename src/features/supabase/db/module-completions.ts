import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

/**
 * Add a module completion for a user
 */
export async function addModuleCompletion(
  userId: string,
  moduleId: string,
): Promise<ModuleCompletion> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_module_completions")
    .insert({
      user_id: userId,
      module_path: moduleId,
    } satisfies ModuleCompletionInsert)
    .select()
    .single()

  if (error) {
    // If duplicate key error (module already completed), return existing
    if (error.code === "23505") {
      const existing = await getModuleCompletion(userId, moduleId)
      if (!existing)
        throw new Error("Module completion not found after duplicate key error")
      return existing
    }
    throw error
  }

  return data
}

/**
 * Get a specific module completion
 */
async function getModuleCompletion(
  userId: string,
  moduleId: string,
): Promise<ModuleCompletion | null> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_module_completions")
    .select()
    .eq("user_id", userId)
    .eq("module_path", moduleId)
    .maybeSingle()

  if (error) throw error
  return data
}

/**
 * Get all module completions for a user, sorted by most recent first
 */
export async function getUserModuleCompletions(
  userId: string,
): Promise<ModuleCompletion[]> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_module_completions")
    .select()
    .eq("user_id", userId)
    .order("completed_at", { ascending: false })

  if (error) throw error
  return data
}

/**
 * Check if a specific module is completed by a user
 */
export async function isModuleCompleted(
  userId: string,
  moduleId: string,
): Promise<boolean> {
  const completion = await getModuleCompletion(userId, moduleId)
  return completion !== null
}
