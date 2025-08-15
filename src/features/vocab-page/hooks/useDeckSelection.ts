// features/vocab-page/hooks/useDeckSelection.ts
import { createSignal } from "solid-js"
import type { VocabBuiltInDeck } from "../types"
import type { NavTabId } from "../center-panel/CenterNavBar"
import { useSettings } from "@/context/SettingsContext"
import { parseBuiltInDeckId } from "../utils/deckIdParser"

export function useDeckSelection(onTabChange: (tabId: NavTabId) => void) {
  const { updateUserPreferences } = useSettings()
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )
  const [selectedBuiltInDeck, setSelectedBuiltInDeck] =
    createSignal<VocabBuiltInDeck | null>(null)

  const handleUserDeckSelect = (deck: UserDeck) => {
    // Auto-set active textbook/chapter for built-in sourced decks
    if (deck.source === "built-in" && deck.original_deck_id) {
      const parsed = parseBuiltInDeckId(deck.original_deck_id)
      if (parsed) {
        updateUserPreferences({
          "active-textbook": parsed.textbook,
          "active-deck": parsed.chapter,
        }).catch((error) => {
          console.error("Failed to update textbook/chapter:", error)
        })
      }
    }
    setSelectedBuiltInDeck(null) // Clear built-in selection
    setSelectedUserDeck(deck)
    onTabChange("vocab-cards")
  }

  const handleBuiltInDeckSelect = (deck: VocabBuiltInDeck) => {
    // Auto-set active textbook/chapter for built-in decks
    const parsed = parseBuiltInDeckId(deck.id)
    if (parsed) {
      updateUserPreferences({
        "active-textbook": parsed.textbook,
        "active-deck": parsed.chapter,
      }).catch((error) => {
        console.error("Failed to update textbook/chapter:", error)
      })
    }
    setSelectedUserDeck(null) // Clear user deck selection
    setSelectedBuiltInDeck(deck)
    onTabChange("vocab-cards")
  }

  const handleDeselect = () => {
    setSelectedUserDeck(null)
    setSelectedBuiltInDeck(null)
  }

  return {
    selectedUserDeck,
    selectedBuiltInDeck,
    handleUserDeckSelect,
    handleBuiltInDeckSelect,
    handleDeselect,
  }
}
