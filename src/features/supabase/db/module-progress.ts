import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"

/**
 * Get progress for a specific module
 */
export async function getModuleProgress(
  userId: string,
  moduleId: string,
): Promise<ModuleProgress | null> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("user_module_progress")
    .select()
    .eq("user_id", userId)
    .eq("module_path", moduleId)
    .maybeSingle()

  if (error) throw error
  return data
}

/**
 * Get all module progress for a user, with optional filters
 */
export async function getUserModuleProgress(
  userId: string,
  options?: {
    completed?: boolean // if true, only completed (100%); if false, only incomplete
    orderBy?: "updated_at" | "completed_at" | "created_at"
    ascending?: boolean
  },
): Promise<ModuleProgress[]> {
  const supabase = createSupabaseClient()

  let query = supabase
    .from("user_module_progress")
    .select()
    .eq("user_id", userId)

  if (options?.completed !== undefined) {
    if (options.completed) {
      query = query.eq("completion_percentage", 100)
    } else {
      query = query.lt("completion_percentage", 100)
    }
  }

  const orderBy = options?.orderBy || "updated_at"
  const ascending = options?.ascending ?? false
  query = query.order(orderBy, { ascending })

  const { data, error } = await query

  if (error) throw error
  return data
}

/**
 * Update module progress (for incremental updates during practice)
 */
export async function updateModuleProgress(
  userId: string,
  moduleId: string,
  updates: {
    completion_percentage?: number
    time_spent_seconds?: number
    questions_answered?: number
    completed_at?: string | null
  },
): Promise<ModuleProgress> {
  const supabase = createSupabaseClient()

  // Build update object with updated_at
  const updateData: ModuleProgressUpdate = {
    ...updates,
    updated_at: new Date().toISOString(),
  }

  // If completion_percentage reaches 100%, set completed_at
  if (updates.completion_percentage === 100 && !updates.completed_at) {
    updateData.completed_at = new Date().toISOString()
  }

  const { data, error } = await supabase
    .from("user_module_progress")
    .upsert(
      {
        user_id: userId,
        module_path: moduleId,
        ...updateData,
      } satisfies ModuleProgressInsert,
      {
        onConflict: "user_id,module_path",
      },
    )
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Mark a module as completed (convenience function)
 */
export async function markModuleCompleted(
  userId: string,
  moduleId: string,
): Promise<ModuleProgress> {
  return updateModuleProgress(userId, moduleId, {
    completion_percentage: 100,
    completed_at: new Date().toISOString(),
  })
}

/**
 * Track module activity (time spent, questions answered)
 * This increments the counters rather than setting absolute values
 */
export async function trackModuleActivity(
  userId: string,
  moduleId: string,
  activity: {
    timeSpentSeconds?: number
    questionsAnswered?: number
    completionPercentage?: number
  },
): Promise<ModuleProgress> {
  const supabase = createSupabaseClient()

  // First, get current progress or create if doesn't exist
  const existing = await getModuleProgress(userId, moduleId)

  const currentTimeSpent = existing?.time_spent_seconds || 0
  const currentQuestionsAnswered = existing?.questions_answered || 0

  return updateModuleProgress(userId, moduleId, {
    time_spent_seconds: currentTimeSpent + (activity.timeSpentSeconds || 0),
    questions_answered:
      currentQuestionsAnswered + (activity.questionsAnswered || 0),
    completion_percentage:
      activity.completionPercentage ?? existing?.completion_percentage ?? 0,
  })
}

/**
 * Check if a module is completed
 */
export async function isModuleCompleted(
  userId: string,
  moduleId: string,
): Promise<boolean> {
  const progress = await getModuleProgress(userId, moduleId)
  return progress?.completion_percentage === 100
}
