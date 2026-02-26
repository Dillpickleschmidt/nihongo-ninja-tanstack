// src/features/kana-quiz/hooks/useKanaQuiz.ts
import { type Accessor, createEffect, createSignal } from "solid-js"
import type { VocabularyItem } from "convex/validators"

export type KanaItem = {
  hiragana: string
  romaji: string[]
}

export function vocabularyToKana(vocabulary: VocabularyItem[]): KanaItem[] {
  return vocabulary.map((item) => ({
    hiragana: item.word,
    romaji: item.english,
  }))
}

type CharacterBoxState = KanaItem & {
  userInput: string
  isCorrect: boolean
}

export const useKanaQuiz = (kana: Accessor<KanaItem[] | undefined>) => {
  const [showResults, setShowResults] = createSignal(false)
  const [numCorrect, setNumCorrect] = createSignal(0)
  const [characterBoxes, setCharacterBoxes] = createSignal<
    CharacterBoxState[] | undefined
  >()

  // Initialize character boxes when kana arrives (set-once)
  createEffect(() => {
    const items = kana()
    if (!items || characterBoxes()) return
    setCharacterBoxes(
      items.map((kanaItem) => ({
        ...kanaItem,
        userInput: "",
        isCorrect: false,
      })),
    )
  })

  const inputRefs: HTMLInputElement[] = []

  const registerRef = (index: number, el: HTMLInputElement) => {
    inputRefs[index] = el
  }

  const handleSubmit = () => {
    const boxes = characterBoxes()
    if (!boxes) return
    const scored = boxes.map((box, i) => {
      const userInput = inputRefs[i]?.value ?? ""
      return {
        ...box,
        userInput,
        isCorrect: box.romaji.includes(userInput.toLowerCase()),
      }
    })
    setCharacterBoxes(scored)
    setNumCorrect(scored.filter((b) => b.isCorrect).length)
    setShowResults(true)
  }

  const handleRetry = () => {
    const items = kana()
    if (!items) return
    const shuffledKana = [...items].sort(() => Math.random() - 0.5)
    for (const ref of inputRefs) {
      if (ref) ref.value = ""
    }
    setShowResults(false)
    setNumCorrect(0)
    setCharacterBoxes(
      shuffledKana.map((kanaItem) => ({
        ...kanaItem,
        userInput: "",
        isCorrect: false,
      })),
    )
  }

  return {
    characterBoxes,
    showResults,
    numCorrect,
    registerRef,
    handleSubmit,
    handleRetry,
  }
}
