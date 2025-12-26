// useTokenization - reactive hook for Kagome tokenization

import { createEffect, onCleanup } from "solid-js"
import { getKagomeWorker } from "../kagome/kagomeWorkerManager"
import { overlayKanji } from "../core/kanaToKanjiOverlay"
import { usePractice } from "../store/PracticeContext"

/**
 * Sets up reactive tokenization effects for model answer and user input.
 * Call this in the component that needs tokenization (e.g., FullInput).
 */
export function useTokenization() {
  const { store, actions, computed } = usePractice()

  // Initialize kagome worker on mount
  createEffect(() => {
    const worker = getKagomeWorker()
    worker.waitForReady().then(() => {
      actions.setKagomeReady(true)
    })
  })

  // Tokenize model answer when question changes
  createEffect(() => {
    const question = computed.getCurrentQuestion()
    if (!question || !store.kagomeReady) return

    // Get the plain text of the first answer (model answer)
    const firstAnswer = question.answers[0]
    if (!firstAnswer) return

    const modelText = firstAnswer.map((seg) => seg.plain).join("")
    if (!modelText) return

    const worker = getKagomeWorker()
    worker
      .tokenize(modelText)
      .then((result) => {
        actions.setModelAnswerTokens(result.tokens)
      })
      .catch((error) => {
        console.error(
          "[useTokenization] Model answer tokenization failed:",
          error,
        )
      })
  })

  // Tokenize user input when it changes (debounced)
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  createEffect(() => {
    // Access the reactive value to track it
    const userInput = store.singleInput

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

      const worker = getKagomeWorker()

      // Try to overlay kanji if user typed kana
      const overlay = overlayKanji(userInput, question.answers)
      const textToTokenize = overlay?.overlaidText ?? userInput

      try {
        const result = await worker.tokenize(textToTokenize)
        actions.setUserInputTokens(result.tokens, overlay)
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
