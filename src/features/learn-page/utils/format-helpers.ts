// features/learn-page-v2/utils/format-helpers.ts

/**
 * Format duration in seconds to human-readable string
 * @example DUR(90) => "1 m"
 * @example DUR(3660) => "1 h 1 m"
 */
export function DUR(seconds: number): string {
  if (!seconds) return "0 m"
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return hours ? `${hours} h ${remainingMinutes} m` : `${minutes} m`
}

/**
 * Get today's date as a string
 */
export function todayStr(): string {
  return new Date().toDateString()
}

/**
 * Check if two dates are the same day
 */
export function sameDay(a: string | Date, b: Date): boolean {
  return new Date(a).toDateString() === b.toDateString()
}
