import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { addLocalCompletion } from "@/features/module-completion/localStorage"

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
 * Get all completed modules for a user
 */
export async function getUserModuleCompletions(
  userId: string,
  options?: {
    orderBy?: "completed_at"
    ascending?: boolean
  },
): Promise<ModuleProgress[]> {
  const supabase = createSupabaseClient()

  const orderBy = options?.orderBy || "completed_at"
  const ascending = options?.ascending ?? false

  const { data, error } = await supabase
    .from("user_module_progress")
    .select()
    .eq("user_id", userId)
    .order(orderBy, { ascending })

  if (error) throw error
  return data
}

/**
 * Mark a module as completed.
 * If userId is null, saves to localStorage; otherwise saves to database.
 */
export async function markModuleCompleted(
  userId: string | null,
  moduleId: string,
): Promise<ModuleProgress | null> {
  if (!userId) {
    addLocalCompletion(moduleId)
    return null
  }

  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("user_module_progress")
    .upsert(
      {
        user_id: userId,
        module_path: moduleId,
        completed_at: new Date().toISOString(),
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

// ============================================
// Session Management
// ============================================

/**
 * Create a new practice session.
 * If userId is null, returns null (no session tracking for logged-out users).
 */
export async function createSession(
  userId: string | null,
  moduleId: string,
  moduleType: string,
  data?: {
    durationSeconds?: number
    questionsAnswered?: number
  },
): Promise<PracticeSession | null> {
  if (!userId) {
    return null
  }

  const supabase = createSupabaseClient()

  const now = new Date().toISOString()
  const { data: session, error } = await supabase
    .from("user_practice_sessions")
    .insert({
      user_id: userId,
      module_path: moduleId,
      module_type: moduleType,
      created_at: now,
      last_updated_at: now,
      duration_seconds: data?.durationSeconds ?? 0,
      questions_answered: data?.questionsAnswered ?? 0,
    } satisfies PracticeSessionInsert)
    .select()
    .single()

  if (error) throw error
  return session
}

/**
 * Update an existing session (for incremental saves during vocab practice)
 */
export async function updateSession(
  sessionId: string,
  data: {
    durationSeconds: number
    questionsAnswered: number
  },
): Promise<void> {
  const supabase = createSupabaseClient()

  const { error } = await supabase
    .from("user_practice_sessions")
    .update({
      duration_seconds: data.durationSeconds,
      questions_answered: data.questionsAnswered,
      last_updated_at: new Date().toISOString(),
    } satisfies PracticeSessionUpdate)
    .eq("session_id", sessionId)

  if (error) throw error
}

/**
 * Get all-time daily practice aggregates for a user
 * Returns a record mapping dates (YYYY-MM-DD) to total seconds practiced
 */
export async function getUserDailyAggregates(
  userId: string,
): Promise<Record<string, number>> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase.rpc("get_user_daily_aggregates", {
    user_id_param: userId,
  })

  if (error) throw error
  return data || {}
}

/**
 * Get paginated practice sessions for a user
 * Optionally filter by module type (e.g., 'vocab-practice', 'sentence-practice')
 */
export async function getSessionsPaginated(
  userId: string,
  offset: number,
  limit: number,
  moduleType?: string,
): Promise<PracticeSession[]> {
  const supabase = createSupabaseClient()

  let query = supabase
    .from("user_practice_sessions")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1)

  if (moduleType) {
    query = query.eq("module_type", moduleType)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}
