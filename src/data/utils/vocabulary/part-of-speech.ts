import type { PartOfSpeech } from "convex/validators"

export type PosCategorySimplified = "verb" | "adjective" | "other"

export function getPosCategory(
  pos: PartOfSpeech | undefined,
): PosCategorySimplified {
  if (!pos) return "other"
  const lower = pos.toLowerCase()
  if (lower.includes("verb")) return "verb"
  if (lower.includes("adjective")) return "adjective"
  return "other"
}
