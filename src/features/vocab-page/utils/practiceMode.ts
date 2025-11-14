// features/vocab-page/utils/practiceMode.ts

/**
 * Utility functions for handling practice mode logic
 */

export type PracticeAction = 'direct-meanings' | 'direct-spellings' | 'show-modal'

/**
 * Determines the appropriate action based on a deck's allowed practice modes
 * @param allowedModes Array of allowed practice modes for the deck
 * @returns The action to take when practice button is clicked
 */
export function getPracticeAction(allowedModes: PracticeModeEnum[]): PracticeAction {
  if (allowedModes.length === 0) {
    // This shouldn't happen, but default to showing modal
    return 'show-modal'
  }

  if (allowedModes.length === 1) {
    // Only one mode allowed, navigate directly
    return allowedModes[0] === 'meanings' ? 'direct-meanings' : 'direct-spellings'
  }

  // Multiple modes allowed, show selection modal
  return 'show-modal'
}

