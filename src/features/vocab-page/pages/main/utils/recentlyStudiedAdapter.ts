/**
 * Transforms user practice sessions into recently studied deck display format
 */
import { resolveModuleToUserDeck } from "../../../utils/learningPathToDeckAdapter"

/**
 * Recently studied deck with session metadata
 */
export interface RecentlyStudiedDeck extends UserDeck {
  lastPracticed: Date
  durationSeconds: number
  questionsAnswered: number
}

/**
 * Groups practice sessions by module_path and gets the most recent one per deck
 * Returns decks sorted by most recent first
 */
export function transformSessionsToDeck(
  sessions: PracticeSession[],
  decks: UserDeck[],
  limit: number = 10,
): RecentlyStudiedDeck[] {
  if (sessions.length === 0) {
    return []
  }

  // Group sessions by module_path and aggregate stats
  const sessionsByDeck = new Map<
    string,
    {
      totalDurationSeconds: number
      totalQuestionsAnswered: number
      mostRecentDate: Date
    }
  >()

  sessions.forEach((session) => {
    const modulePath = session.module_path
    const existing = sessionsByDeck.get(modulePath)

    const sessionDate = new Date(session.last_updated_at)
    const durationSeconds = session.duration_seconds || 0
    const questionsAnswered = session.questions_answered || 0

    if (existing) {
      // Aggregate: sum duration and questions, keep most recent date
      sessionsByDeck.set(modulePath, {
        totalDurationSeconds: existing.totalDurationSeconds + durationSeconds,
        totalQuestionsAnswered:
          existing.totalQuestionsAnswered + questionsAnswered,
        mostRecentDate:
          sessionDate > existing.mostRecentDate
            ? sessionDate
            : existing.mostRecentDate,
      })
    } else {
      // First session for this module
      sessionsByDeck.set(modulePath, {
        totalDurationSeconds: durationSeconds,
        totalQuestionsAnswered: questionsAnswered,
        mostRecentDate: sessionDate,
      })
    }
  })

  // Transform to recently studied format
  const recentlyStudied: RecentlyStudiedDeck[] = Array.from(
    sessionsByDeck.entries(),
  )
    .map(([modulePath, stats]) => {
      const deck = resolveModuleToUserDeck(modulePath, decks)
      if (!deck) return null

      return {
        ...deck,
        lastPracticed: stats.mostRecentDate,
        durationSeconds: stats.totalDurationSeconds,
        questionsAnswered: stats.totalQuestionsAnswered,
      }
    })
    .filter((d): d is RecentlyStudiedDeck => d !== null)
    // Sort by most recent first
    .sort((a, b) => b.lastPracticed.getTime() - a.lastPracticed.getTime())
    // Limit to specified number
    .slice(0, limit)

  return recentlyStudied
}

/**
 * Format last practiced date as human-readable string
 */
export function formatLastPracticed(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`

  return date.toLocaleDateString()
}

/**
 * Format duration in seconds to human-readable string
 */
export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  if (mins < 60) return `${mins}m`
  const hours = Math.floor(mins / 60)
  return `${hours}h ${mins % 60}m`
}
