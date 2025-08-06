// features/vocab-page/hooks/useImportModal.ts
import { createSignal, createEffect } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import type { ImportRequest, VocabBuiltInDeck } from "../types"

/**
 * Hook to manage import modal state and logic
 */
export function useImportModal(
  importRequest?: ImportRequest | null,
  onImportConfirm?: (deck: VocabBuiltInDeck) => void,
  setLeftPanelOpen?: (open: boolean) => void,
) {
  const navigate = useNavigate()

  // Import confirmation modal state
  const [showImportModal, setShowImportModal] = createSignal(false)
  const [pendingImportDeck, setPendingImportDeck] =
    createSignal<VocabBuiltInDeck | null>(null)

  // Extract pending import from route loader
  const pendingImport = importRequest?.deck

  // Import modal handlers
  const handleImportConfirm = () => {
    const deck = pendingImportDeck()
    if (deck && onImportConfirm) {
      onImportConfirm(deck)
    }
    setShowImportModal(false)
    setPendingImportDeck(null)
  }

  const handleImportCancel = () => {
    setShowImportModal(false)
    setPendingImportDeck(null)
  }

  const openImportModal = (deck: VocabBuiltInDeck) => {
    setPendingImportDeck(deck)
    setShowImportModal(true)
  }

  // Handle pending import from route loader
  createEffect(() => {
    if (pendingImport) {
      setPendingImportDeck(pendingImport)
      setShowImportModal(true)
      // Ensure left panel is open to show the expanded hierarchy
      if (setLeftPanelOpen) {
        setLeftPanelOpen(true)
      }
      // Clean URL
      navigate({ to: "/vocab", search: { import: undefined }, replace: true })
    }
  })

  return {
    // State
    showImportModal,
    pendingImportDeck,

    // Actions
    handleImportConfirm,
    handleImportCancel,
    openImportModal,
  }
}
