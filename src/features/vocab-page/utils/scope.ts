import type { UnifiedDeck } from "convex/model/decks"
import type { UnifiedFolder } from "convex/model/folders"

/**
 * Derives the scopeId for a deck by walking its folder tree to the root.
 * Returns the root folder's ID (server detects whether it's a textbook or user folder).
 * Returns "" for unsorted decks (no folder).
 */
export function resolveDeckScopeId(
  deckId: string,
  decks: UnifiedDeck[],
  folders: UnifiedFolder[],
): string {
  const deck = decks.find((d) => d.id === deckId)
  if (!deck?.folderId) return ""

  let current = folders.find((f) => f.id === deck.folderId)
  while (current?.parentFolderId) {
    const parent = folders.find((f) => f.id === current!.parentFolderId)
    if (!parent) break
    current = parent
  }

  return current?.id ?? ""
}
