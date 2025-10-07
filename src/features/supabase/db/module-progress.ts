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
 * Get all completed modules for a user
 */
export async function getUserModuleProgress(
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
 * Mark a module as completed
 */
export async function markModuleCompleted(
  userId: string,
  moduleId: string,
): Promise<ModuleProgress> {
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
 * Create a new practice session
 * Can be created with initial values (static modules) or empty (vocab practice)
 * Returns session with session_id for future updates
 */
export async function createSession(
  userId: string,
  moduleId: string,
  data?: {
    durationSeconds?: number
    questionsAnswered?: number
  },
): Promise<PracticeSession> {
  const supabase = createSupabaseClient()

  const now = new Date().toISOString()
  const { data: session, error } = await supabase
    .from("user_practice_sessions")
    .insert({
      user_id: userId,
      module_path: moduleId,
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
 * Get total time spent by user on a specific date
 */
export async function getUserDailyTime(
  userId: string,
  date: Date,
): Promise<number> {
  const supabase = createSupabaseClient()

  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)

  const endOfDay = new Date(date)
  endOfDay.setHours(23, 59, 59, 999)

  const { data, error } = await supabase
    .from("user_practice_sessions")
    .select("duration_seconds")
    .eq("user_id", userId)
    .gte("created_at", startOfDay.toISOString())
    .lte("created_at", endOfDay.toISOString())

  if (error) throw error

  return data.reduce((sum, session) => sum + session.duration_seconds, 0)
}

/**
 * Get time spent on a specific module on a specific date
 */
export async function getModuleDailyTime(
  userId: string,
  moduleId: string,
  date: Date,
): Promise<number> {
  const supabase = createSupabaseClient()

  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)

  const endOfDay = new Date(date)
  endOfDay.setHours(23, 59, 59, 999)

  const { data, error } = await supabase
    .from("user_practice_sessions")
    .select("duration_seconds")
    .eq("user_id", userId)
    .eq("module_path", moduleId)
    .gte("created_at", startOfDay.toISOString())
    .lte("created_at", endOfDay.toISOString())

  if (error) throw error

  return data.reduce((sum, session) => sum + session.duration_seconds, 0)
}

/**
 * Get total time spent on a module (all-time)
 */
export async function getTotalTimeSpent(
  userId: string,
  moduleId: string,
): Promise<number> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("user_practice_sessions")
    .select("duration_seconds")
    .eq("user_id", userId)
    .eq("module_path", moduleId)

  if (error) throw error

  return data.reduce((sum, session) => sum + session.duration_seconds, 0)
}

/**
 * Get total questions answered for a module (all-time)
 */
export async function getTotalQuestionsAnswered(
  userId: string,
  moduleId: string,
): Promise<number> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("user_practice_sessions")
    .select("questions_answered")
    .eq("user_id", userId)
    .eq("module_path", moduleId)
    .not("questions_answered", "is", null)

  if (error) throw error

  return data.reduce(
    (sum, session) => sum + (session.questions_answered || 0),
    0,
  )
}

/**
 * Get all activity sessions for a user with optional date filters
 */
export async function getUserSessions(
  userId: string,
  options?: {
    startDate?: Date
    endDate?: Date
  },
): Promise<PracticeSession[]> {
  const supabase = createSupabaseClient()

  let query = supabase
    .from("user_practice_sessions")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (options?.startDate) {
    query = query.gte("created_at", options.startDate.toISOString())
  }

  if (options?.endDate) {
    query = query.lte("created_at", options.endDate.toISOString())
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

/**
 * Get all activity sessions for a specific module
 */
export async function getModuleSessions(
  userId: string,
  moduleId: string,
): Promise<PracticeSession[]> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("user_practice_sessions")
    .select()
    .eq("user_id", userId)
    .eq("module_path", moduleId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}

/**
 * Get time data for the last 7 days (optimized - single query)
 * Returns array of duration in seconds for each day [day-6, day-5, ..., today]
 */
export async function getUserWeekTimeData(userId: string): Promise<number[]> {
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 6)
  weekAgo.setHours(0, 0, 0, 0)

  const sessions = await getUserSessions(userId, { startDate: weekAgo })

  // Group sessions by day
  const dayMap = new Map<string, number>()
  sessions.forEach((session) => {
    const day = new Date(session.created_at).toDateString()
    dayMap.set(day, (dayMap.get(day) || 0) + session.duration_seconds)
  })

  // Build array for last 7 days
  const weekData: number[] = []
  const today = new Date()
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    weekData.push(dayMap.get(date.toDateString()) || 0)
  }

  return weekData
}
