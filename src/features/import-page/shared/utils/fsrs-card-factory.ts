import { Card, State } from "ts-fsrs"
import type { ItemStatus } from "../types"

export function createFSRSCardFromStatus(
  status: ItemStatus,
  existingCard?: Card,
  now: Date = new Date(),
): Card {
  if (status === null) {
    throw new Error("Cannot create FSRS card from null status")
  }

  const lapses = existingCard?.lapses ?? 0
  const dueDate = new Date(now)

  if (status === "learning") {
    dueDate.setDate(dueDate.getDate() + 2)
    return {
      due: dueDate,
      stability: 2,
      difficulty: 2,
      elapsed_days: 0,
      scheduled_days: 2,
      reps: 2,
      lapses,
      state: State.Learning,
      last_review: now,
      learning_steps: 0,
    }
  }

  if (status === "decent") {
    dueDate.setDate(dueDate.getDate() + 5)
    return {
      due: dueDate,
      stability: 8,
      difficulty: 4,
      elapsed_days: 0,
      scheduled_days: 8,
      reps: 5,
      lapses,
      state: State.Review,
      last_review: now,
      learning_steps: 0,
    }
  }

  if (status === "mastered") {
    dueDate.setDate(dueDate.getDate() + 30)
    return {
      due: dueDate,
      stability: 25,
      difficulty: 3,
      elapsed_days: 0,
      scheduled_days: 25,
      reps: 7,
      lapses,
      state: State.Review,
      last_review: now,
      learning_steps: 0,
    }
  }

  throw new Error(`Unknown status: ${status}`)
}
