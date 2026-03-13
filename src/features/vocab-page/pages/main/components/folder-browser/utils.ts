import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

export interface FolderBrowserProps {
  folders: Folder[]
  decks: Deck[]
  class?: string
}

export type MenuItem = {
  id: string
  label: string
  type: "built-in" | "learning-path" | "user" | "unsorted"
}

export type MenuGroup = {
  label: string
  options: MenuItem[]
}

export function filterDecks(
  decks: Deck[],
  matchingIds: Set<string> | null,
): Deck[] {
  if (!matchingIds) return decks
  return decks.filter((d) => matchingIds.has(d.id))
}
