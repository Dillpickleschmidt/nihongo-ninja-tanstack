export type ItemStatus = "learning" | "decent" | "mastered" | null

const STATUS_RANK: Record<NonNullable<ItemStatus> | "null", number> = {
  null: 0,
  learning: 1,
  decent: 2,
  mastered: 3,
}

/** Returns true if current status is >= target status in the hierarchy */
export function isAtOrAboveStatus(current: ItemStatus, target: ItemStatus): boolean {
  return STATUS_RANK[current ?? "null"] >= STATUS_RANK[target ?? "null"]
}

export const STATUS_CONFIG = {
  learning: {
    label: "Learning",
    color: "amber",
    tooltip: "I'm currently learning this and need regular review.",
  },
  decent: {
    label: "Decent",
    color: "sky",
    tooltip: "I've practiced this before but wouldn't mind occasional review.",
  },
  mastered: {
    label: "Mastered",
    color: "emerald",
    tooltip: "I've got a very good grip on this and rarely need review.",
  },
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
