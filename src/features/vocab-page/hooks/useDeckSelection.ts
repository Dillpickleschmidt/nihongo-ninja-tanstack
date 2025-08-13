// features/vocab-page/hooks/useDeckSelection.ts
import { createSignal } from "solid-js"
import type { VocabBuiltInDeck } from "../types"
import type { NavTabId } from "../center-panel/CenterNavBar"

export function useDeckSelection(onTabChange: (tabId: NavTabId) => void) {
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )
  const [selectedBuiltInDeck, setSelectedBuiltInDeck] =
    createSignal<VocabBuiltInDeck | null>(null)

  const handleUserDeckSelect = (deck: UserDeck) => {
    setSelectedBuiltInDeck(null) // Clear built-in selection
    setSelectedUserDeck(deck)
    onTabChange("vocab-cards")
  }

  const handleBuiltInDeckSelect = (deck: VocabBuiltInDeck) => {
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

