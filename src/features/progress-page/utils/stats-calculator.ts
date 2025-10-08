// features/progress-page/utils/stats-calculator.ts

/**
 * Calculate current streak (consecutive days with activity starting from today)
 */
export function calculateStreak(sessions: PracticeSession[]): number {
  if (!sessions.length) return 0

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Group sessions by date
  const datesWithActivity = new Set<string>()
  sessions.forEach((session) => {
    const date = new Date(session.created_at)
    date.setHours(0, 0, 0, 0)
    datesWithActivity.add(date.toDateString())
  })

  // Count consecutive days back from today or yesterday
  let streak = 0
  const currentDate = new Date(today)

  // If no activity today, start counting from yesterday
  if (!datesWithActivity.has(currentDate.toDateString())) {
    currentDate.setDate(currentDate.getDate() - 1)
  }

  while (datesWithActivity.has(currentDate.toDateString())) {
    streak++
    currentDate.setDate(currentDate.getDate() - 1)
  }

  return streak
}

/**
 * Find the longest streak in history
 */
export function calculatePersonalBestStreak(
  sessions: PracticeSession[],
): number {
  if (!sessions.length) return 0

  // Group sessions by date
  const datesWithActivity = Array.from(
    new Set(
      sessions.map((s) => {
        const d = new Date(s.created_at)
        d.setHours(0, 0, 0, 0)
        return d.getTime()
      }),
    ),
  ).sort((a, b) => a - b)

  let maxStreak = 1
  let currentStreak = 1

  for (let i = 1; i < datesWithActivity.length; i++) {
    const dayDiff =
      (datesWithActivity[i] - datesWithActivity[i - 1]) / (1000 * 60 * 60 * 24)

    if (dayDiff === 1) {
      currentStreak++
      maxStreak = Math.max(maxStreak, currentStreak)
    } else {
      currentStreak = 1
    }
  }

  return maxStreak
}

/**
 * Normalize week data to 0-100 percentages based on max value
 */
export function normalizeWeekData(weekTimes: number[]): number[] {
  if (!weekTimes.length) return []

  const maxTime = Math.max(...weekTimes, 1) // Avoid division by 0
  return weekTimes.map((time) => Math.round((time / maxTime) * 100))
}

/**
 * Calculate percentage change between two values
 */
export function calculatePercentChange(
  current: number,
  previous: number,
): number {
  if (previous === 0) return current > 0 ? 100 : 0
  return Math.round(((current - previous) / previous) * 100)
}

/**
 * Calculate average daily time over last N days (in minutes)
 * Only counts days with actual activity
 */
export function calculateAverageDailyTime(
  sessions: PracticeSession[],
  days: number,
): number {
  if (!sessions.length) return 0

  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)

  const recentSessions = sessions.filter(
    (s) => new Date(s.created_at) >= cutoffDate,
  )

  if (!recentSessions.length) return 0

  const totalSeconds = recentSessions.reduce(
    (sum, s) => sum + s.duration_seconds,
    0,
  )

  // Count unique days with activity
  const activeDays = new Set(
    recentSessions.map((s) => {
      const d = new Date(s.created_at)
      d.setHours(0, 0, 0, 0)
      return d.toDateString()
    }),
  ).size

  return activeDays > 0 ? Math.round(totalSeconds / 60 / activeDays) : 0
}
