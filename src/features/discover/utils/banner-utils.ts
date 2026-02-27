/**
 * Extract RGB values from a hex color string
 * @param hex - Hex color string (e.g., "#FF5733" or "FF5733")
 * @returns Object with r, g, b values or null if invalid
 */
export function hexToRgb(
  hex: string | null | undefined,
): { r: number; g: number; b: number } | null {
  if (!hex) return null

  // Remove # if present
  hex = hex.replace("#", "")

  // Validate hex format
  if (!/^[0-9A-F]{6}$/i.test(hex)) return null

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

/**
 * Calculate perceived brightness of a color (0-255)
 * Uses relative luminance formula from WCAG
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Brightness value (0-255)
 */
export function calculateBrightness(r: number, g: number, b: number): number {
  // WCAG relative luminance formula
  return (r * 299 + g * 587 + b * 114) / 1000
}

/**
 * Get contrasting text color (black or white) based on background brightness
 * @param hex - Hex color string
 * @returns "white" or "black"
 */
export function getContrastTextColor(
  hex: string | null | undefined,
): "white" | "black" {
  const rgb = hexToRgb(hex)
  if (!rgb) return "white"

  const brightness = calculateBrightness(rgb.r, rgb.g, rgb.b)
  return brightness > 128 ? "black" : "white"
}

/**
 * Format hex color for CSS custom properties
 * @param hex - Hex color string
 * @returns Object with CSS variable values
 */
export function formatColorForCSS(hex: string | null | undefined): {
  hex: string
  r: number
  g: number
  b: number
} {
  const rgb = hexToRgb(hex)

  if (!rgb) {
    return {
      hex: "#ffffff",
      r: 255,
      g: 255,
      b: 255,
    }
  }

  return {
    hex: `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g.toString(16).padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`,
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
  }
}

/**
 * Clean HTML from description text
 * @param html - HTML string
 * @returns Plain text
 */
export function stripHtml(html: string | null | undefined): string {
  if (!html) return ""
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\n/g, " ")
    .trim()
}

/**
 * Format episode count with user progress if available
 * @param media - Media object with episodes and mediaListEntry
 * @returns Formatted string (e.g., "12 Episodes" or "5 / 12 Episodes")
 */
export function formatEpisodeCount(media: any): string {
  const total = media?.episodes
  const progress = media?.mediaListEntry?.progress

  if (!total) {
    const duration = media?.duration
    if (duration) return `${duration} minutes`
    return ""
  }

  if (progress && progress > 0) {
    return `${progress} / ${total} episodes`
  }

  return `${total} episodes`
}

/**
 * Format score as percentage
 * @param score - Score from 0-100
 * @returns Formatted string (e.g., "85%")
 */
export function formatScore(score: number | null | undefined): string {
  if (!score) return ""
  return `${Math.round(score)}%`
}

/**
 * Get score color based on value
 * @param score - Score from 0-100
 * @returns Tailwind color class
 */
export function getScoreColor(score: number | null | undefined): string {
  if (!score) return "text-white/80"
  if (score >= 75) return "text-green-700"
  if (score >= 65) return "text-orange-400"
  return "text-red-500"
}

/**
 * Format season string (capitalize)
 * @param season - Season string (e.g., "spring", "SPRING")
 * @returns Capitalized string (e.g., "Spring")
 */
export function formatSeason(season: string | null | undefined): string {
  if (!season) return ""
  return season.charAt(0).toUpperCase() + season.slice(1).toLowerCase()
}

/**
 * Format status string
 * @param status - Status string (e.g., "FINISHED_AIRING")
 * @returns Formatted string (e.g., "Finished Airing")
 */
export function formatStatus(status: string | null | undefined): string {
  if (!status) return ""
  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

/**
 * Format format string
 * @param format - Format string (e.g., "TV", "MOVIE")
 * @returns Formatted string (e.g., "TV")
 */
export function formatFormat(format: string | null | undefined): string {
  if (!format) return ""
  if (format === "TV") return "TV"
  if (format === "TV_SHORT") return "TV Short"
  if (format === "OVA") return "OVA"
  if (format === "ONA") return "ONA"
  if (format === "SPECIAL") return "Special"
  if (format === "MOVIE") return "Movie"
  if (format === "MUSIC") return "Music"
  return format
}

/**
 * Selects 5 random anime indices that have banner images
 */
export function generateBannerIndices(
  media: { bannerImage?: string | null }[],
): number[] {
  const validIndices: number[] = []
  media.forEach((item, index) => {
    if (item?.bannerImage) {
      validIndices.push(index)
    }
  })

  for (let i = validIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[validIndices[i], validIndices[j]] = [validIndices[j], validIndices[i]]
  }

  return validIndices.slice(0, 5)
}
