// src/features/resolvers/shared/priority-utils.ts
import type { Stack } from "@/features/resolvers/types"

/**
 * Find highest available priority (0-999, lower = higher priority)
 * Can push down unlocked items if needed
 */
export function findHighestAvailablePriority(stacks: Stack[]): number {
  for (let priority = 0; priority <= 999; priority++) {
    const stackAtThisPriority = stacks.find((s) => s.priority === priority)

    if (!stackAtThisPriority || !stackAtThisPriority.locked) {
      return priority
    }
  }

  return 999
}
