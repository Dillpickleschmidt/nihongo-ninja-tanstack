/**
 * Practice navigation utilities
 * Centralizes logic for navigating to practice modes
 */

import type { NavigateOptions } from "@tanstack/solid-router"

/**
 * Navigate to practice mode for a deck
 * Handles both built-in decks (with original_deck_id) and user-created decks
 */
export function navigateToPractice(
  deck: UserDeck,
  mode: "meanings" | "spellings",
  navigate: (opts: NavigateOptions) => void,
  userId?: string,
): void {
  if (deck.original_deck_id) {
    // Built-in decks (from dynamic_modules or learning path modules) use the original route
    navigate({
      to: "/practice/$practiceID",
      params: { practiceID: deck.original_deck_id },
      search: { mode },
    })
  } else {
    // User-created decks use the new route structure with search params
    navigate({
      to: "/practice/$userID/$deckID",
      params: {
        userID: userId || "unknown",
        deckID: deck.deck_id.toString(),
      },
      search: { mode },
    })
  }
}
