// POS (Part of Speech) helper utilities for display components

export type PosCategory = "orange" | "green" | "blue"

/**
 * Determines the POS category based on Kagome POS array.
 * - Orange: Nouns and な-adjectives
 * - Green: Verbs and い-adjectives
 * - Blue: Particles, copulas, and everything else
 */
export function getPosCategory(pos: string): PosCategory {
  if (pos === "名詞" || pos === "形容動詞") return "orange"
  if (pos === "動詞" || pos === "形容詞") return "green"
  return "blue"
}

/**
 * Returns the fixed width (in full-width character count) for model answer POS hints.
 * - Orange (nouns/na-adj): 3 characters
 * - Green (verbs/i-adj): 4 characters
 * - Blue (particles/other): 1 character
 */
export function getWidthForCategory(category: PosCategory): number {
  const widths: Record<PosCategory, number> = {
    orange: 3,
    green: 4,
    blue: 1,
  }
  return widths[category]
}

/**
 * Returns Tailwind CSS classes for the category color.
 */
export function getCategoryColorClass(category: PosCategory): string {
  const colors: Record<PosCategory, string> = {
    orange: "bg-orange-400 dark:bg-amber-400 text-black",
    green: "bg-emerald-400 dark:bg-green-400 text-black",
    blue: "bg-sky-400 dark:bg-teal-400 text-black",
  }
  return colors[category]
}

/**
 * Returns a user-friendly description for tooltips.
 */
export function getCategoryDescription(category: PosCategory): string {
  const descriptions: Record<PosCategory, string> = {
    orange: "Noun or な-Adjective",
    green: "Verb or い-Adjective",
    blue: "Particle, copula, etc.",
  }
  return descriptions[category]
}
