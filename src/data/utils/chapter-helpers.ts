/**
 * Extract chapter number from slug
 * @param slug - Chapter slug (e.g., "chapter-0", "chapter-1", "chapter-12")
 * @returns Chapter number (0, 1, 2, ...) or null if invalid
 */
export function getChapterNumber(slug: string): number | null {
  const match = slug.match(/^chapter-(\d+)$/)
  return match ? parseInt(match[1], 10) : null
}

/**
 * Get display string for chapter number
 * @param slug - Chapter slug
 * @returns Display number ("0", "1", "2", ...) or empty string if invalid
 *
 * Examples:
 * - "chapter-0" → "0"
 * - "chapter-1" → "1"
 * - "chapter-01" → "1" (leading zero removed)
 */
export function getChapterDisplayNumber(slug: string): string {
  const num = getChapterNumber(slug)
  return num !== null ? num.toString() : ""
}

/**
 * Check if this is the introductory chapter (chapter-0)
 */
export function isIntroductoryChapter(slug: string): boolean {
  return slug === "chapter-0"
}
