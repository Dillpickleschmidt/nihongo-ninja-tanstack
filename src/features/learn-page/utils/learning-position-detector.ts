import type { LearningPathItem } from "@/data/types"

/**
 * Calculate the distance (number of modules) between two modules in a learning path
 * Returns -1 if either module is not found in the learning path
 */
export function getModuleDistance(
  moduleId1: string,
  moduleId2: string,
  learningPathItems: LearningPathItem[],
): number {
  const index1 = learningPathItems.findIndex((item) => item.id === moduleId1)
  const index2 = learningPathItems.findIndex((item) => item.id === moduleId2)

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
  learningPathItems: LearningPathItem[],
): boolean {
  // If no current position, this is the first completion - auto-update
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
  recentCompletions: ModuleCompletion[],
  currentPosition: string | null,
  learningPathItems: LearningPathItem[],
): { shouldPrompt: boolean; suggestedModuleId: string | null } {
  // Need at least 2 completions to detect a pattern
  if (recentCompletions.length < 2) {
    return { shouldPrompt: false, suggestedModuleId: null }
  }

  const [mostRecent, secondMostRecent] = recentCompletions

  // Check if they are sequential in the learning path
  const mostRecentIndex = learningPathItems.findIndex(
    (item) => item.id === mostRecent.module_path,
  )
  const secondRecentIndex = learningPathItems.findIndex(
    (item) => item.id === secondMostRecent.module_path,
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

  // If far from current position (> 2 modules), prompt user to update
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
  learningPathItems: LearningPathItem[],
): number {
  return learningPathItems.findIndex((item) => item.id === moduleId)
}

/**
 * Get upcoming modules starting from a given position
 * Returns the next N modules after the current position
 */
export function getUpcomingModules(
  currentModuleId: string,
  learningPathItems: LearningPathItem[],
  count: number = 10,
): LearningPathItem[] {
  const currentIndex = getModuleIndex(currentModuleId, learningPathItems)

  if (currentIndex === -1) {
    // If current module not found, return first N modules
    return learningPathItems.slice(0, count)
  }

  // Return next N modules after current position
  return learningPathItems.slice(currentIndex + 1, currentIndex + 1 + count)
}
