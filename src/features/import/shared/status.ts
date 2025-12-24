export type ItemStatus = "learning" | "decent" | "mastered" | null

export const STATUS_CONFIG = {
  learning: { label: "Learning", color: "amber" },
  decent: { label: "Decent", color: "sky" },
  mastered: { label: "Mastered", color: "emerald" },
} as const

export function calculateItemStatus(fsrsCard: {
  state: number
  scheduled_days: number
}): ItemStatus {
  if (fsrsCard.state === 0) return null
  if (fsrsCard.state === 1 || fsrsCard.state === 3) return "learning"
  if (fsrsCard.state === 2) {
    return fsrsCard.scheduled_days >= 21 ? "mastered" : "decent"
  }
  return null
}
