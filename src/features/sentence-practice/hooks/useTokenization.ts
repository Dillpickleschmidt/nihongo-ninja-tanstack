// useTokenization - reactive hook for Kagome tokenization

import { createEffect, onCleanup } from "solid-js"
import { getKagomeWorker } from "../kagome/kagomeWorkerManager"
import { usePractice } from "../store/PracticeContext"
import { createTokenizationSession } from "../services/tokenizationSession"

/**
 * Sets up reactive tokenization effects for model answer and user input.
 * Call this in the component that needs tokenization (e.g., FullInput).
 */
export function useTokenization() {
  const { store, actions, computed } = usePractice()
  const tokenizationSession = createTokenizationSession(getKagomeWorker())

  // Initialize kagome worker on mount
  createEffect(() => {
    tokenizationSession.waitForReady().then(() => {
      actions.setKagomeReady(true)
    })
  })

  // Tokenize user input when it changes (debounced)
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  createEffect(() => {
    // Access the reactive value to track it
    const userInput = store.answerText

    // Clear previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    // Clear tokens if input is empty
    if (!userInput || userInput.trim() === "") {
      actions.clearUserInputTokens()
      return
    }

    // Don't tokenize if kagome isn't ready
    if (!store.kagomeReady) return

    // Debounce tokenization (150ms)
    debounceTimer = setTimeout(async () => {
      const question = computed.getCurrentQuestion()
      if (!question) return

      try {
        const result = await tokenizationSession.tokenizeUserInput(
          userInput,
          question,
        )
        if (result === undefined) return
        if (result === null) {
          actions.clearUserInputTokens()
          return
        }
        actions.setUserInputTokens(result.tokens, result.overlay)
      } catch (error) {
        console.error("[useTokenization] Tokenization failed:", error)
      }
    }, 150)
  })

  // Cleanup debounce timer
  onCleanup(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
  })
}
