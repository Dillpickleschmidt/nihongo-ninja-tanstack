import type { Card } from "ts-fsrs"
import { State } from "ts-fsrs"
import type { ItemStatus } from "../status"

/**
 * Status-based FSRS card configuration.
 * These values represent a user's self-assessed knowledge level.
 */
const STATUS_CARD_CONFIG = {
  learning: {
    scheduledDays: 2,
    stability: 2,
    difficulty: 5,
    reps: 2,
    state: State.Learning,
  },
  decent: {
    scheduledDays: 8,
    stability: 8,
    difficulty: 4,
    reps: 5,
    state: State.Review,
  },
  mastered: {
    scheduledDays: 25,
    stability: 25,
    difficulty: 3,
    reps: 7,
    state: State.Review,
  },
} as const

/**
 * Creates a ts-fsrs Card from a user-selected status.
 * Used when manually marking items as learning/decent/mastered.
 */
export function createCardFromStatus(
  status: Exclude<ItemStatus, null>,
  now: Date = new Date()
): Card {
  const config = STATUS_CARD_CONFIG[status]
  const dueDate = new Date(now)
  dueDate.setDate(dueDate.getDate() + config.scheduledDays)

  return {
    due: dueDate,
    stability: config.stability,
    difficulty: config.difficulty,
    elapsed_days: 0,
    scheduled_days: config.scheduledDays,
    reps: config.reps,
    lapses: 0,
    state: config.state,
    last_review: now,
    learning_steps: 0,
  }
}

/**
 * Convex-compatible card format (timestamps instead of Dates).
 */
export interface ConvexCard {
  dueAt: number
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  reps: number
  lapses: number
  state: number
  learning_steps?: number
}

/**
 * Creates a Convex-compatible FSRS card from a user-selected status.
 * Used for direct import without ts-fsrs Date conversion.
 */
export function createConvexCardFromStatus(
  status: Exclude<ItemStatus, null>,
  now: number = Date.now()
): ConvexCard {
  const config = STATUS_CARD_CONFIG[status]
  const dueTimestamp = now + config.scheduledDays * 24 * 60 * 60 * 1000

  return {
    dueAt: dueTimestamp,
    stability: config.stability,
    difficulty: config.difficulty,
    elapsed_days: 0,
    scheduled_days: config.scheduledDays,
    reps: config.reps,
    lapses: 0,
    state: config.state,
    learning_steps: 0,
  }
}
