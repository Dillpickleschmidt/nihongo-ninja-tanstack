import type { ModuleWithCurrent } from "@/query/query-options"
import { getUserModuleProgress } from "@/features/supabase/db/module-progress"

type ModuleProgress = Awaited<ReturnType<typeof getUserModuleProgress>>[number]

/**
 * Calculate the distance (number of modules) between two modules in a learning path
 * Returns -1 if either module is not found in the learning path
 */
export function getModuleDistance(
  moduleId1: string,
  moduleId2: string,
  learningPathItems: string[],
): number {
  const index1 = learningPathItems.findIndex(
    (moduleId) => moduleId === moduleId1,
  )
  const index2 = learningPathItems.findIndex(
    (moduleId) => moduleId === moduleId2,
  )

  if (index1 === -1 || index2 === -1) {
    return -1
  }

  return Math.abs(index2 - index1)
}

/**
 * Check if a completed module is within ±2 modules of the current position
 * Returns true if the completion should auto-update the position
 */
export function shouldUpdatePosition(
  completionModuleId: string,
  currentPosition: string | null,
  learningPathItems: string[],
): boolean {
  if (!currentPosition) {
    return true
  }

  const distance = getModuleDistance(
    completionModuleId,
    currentPosition,
    learningPathItems,
  )

  // Don't update if already at this position
  if (distance === 0) {
    return false
  }

  // Auto-update if within ±2 modules
  return distance !== -1 && distance <= 2
}

/**
 * Detect if recent completions show a sequential pattern far from current position
 * This indicates the user has jumped to a new section and should be prompted to update
 *
 * Returns:
 * - shouldPrompt: true if user should be asked to update position
 * - suggestedModuleId: the module to suggest as new position (most recent completion)
 */
export function detectSequentialJump(
  recentCompletions: ModuleProgress[],
  currentPosition: string | null,
  learningPathItems: string[],
): { shouldPrompt: boolean; suggestedModuleId: string | null } {
  // Need at least 2 completions to detect a pattern
  if (recentCompletions.length < 2) {
    return { shouldPrompt: false, suggestedModuleId: null }
  }

  const [mostRecent, secondMostRecent] = recentCompletions

  // Check if they are sequential in the learning path
  const mostRecentIndex = learningPathItems.findIndex(
    (moduleId) => moduleId === mostRecent.module_path,
  )
  const secondRecentIndex = learningPathItems.findIndex(
    (moduleId) => moduleId === secondMostRecent.module_path,
  )

  // If either module not found in path, don't prompt
  if (mostRecentIndex === -1 || secondRecentIndex === -1) {
    return { shouldPrompt: false, suggestedModuleId: null }
  }

  // Check if they are sequential (within 1-2 modules of each other)
  const areSequential = Math.abs(mostRecentIndex - secondRecentIndex) <= 2

  if (!areSequential) {
    return { shouldPrompt: false, suggestedModuleId: null }
  }

  // Check if this sequential pair is far from current position (more than 2 modules away)
  if (!currentPosition) {
    return { shouldPrompt: false, suggestedModuleId: null }
  }

  const distanceFromCurrent = getModuleDistance(
    mostRecent.module_path,
    currentPosition,
    learningPathItems,
  )

  if (distanceFromCurrent > 2) {
    return {
      shouldPrompt: true,
      suggestedModuleId: mostRecent.module_path,
    }
  }

  return { shouldPrompt: false, suggestedModuleId: null }
}

export function getModuleIndex(
  moduleId: string,
  learningPathItems: string[],
): number {
  return learningPathItems.findIndex((id) => id === moduleId)
}

/**
 * Get upcoming modules starting from a given position
 * Returns the next N modules after the current position
 */
export function getUpcomingModules(
  currentModuleId: string,
  learningPathItems: string[],
  count: number = 10,
): ModuleWithCurrent[] {
  const currentIndex = getModuleIndex(currentModuleId, learningPathItems)

  if (currentIndex === -1) {
    // If current module not found, return first N modules
    return learningPathItems.slice(0, count).map((id) => ({ id }))
  }

  // Return next N modules after current position
  return learningPathItems
    .slice(currentIndex + 1, currentIndex + 1 + count)
    .map((id) => ({ id }))
}
