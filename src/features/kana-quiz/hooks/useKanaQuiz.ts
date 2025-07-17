// src/features/kana-quiz/hooks/useKanaQuiz.ts
import { createSignal } from "solid-js"

export type KanaItem = {
  hiragana: string
  romaji: string[]
}

type CharacterBoxState = KanaItem & {
  userInput: string
  isCorrect: boolean
}

export const useKanaQuiz = (kana: KanaItem[]) => {
  const [showResults, setShowResults] = createSignal(false)
  const [numCorrect, setNumCorrect] = createSignal(0)

  const [characterBoxes, setCharacterBoxes] = createSignal<CharacterBoxState[]>(
    kana.map((kanaItem) => ({
      ...kanaItem,
      userInput: "",
      isCorrect: false,
    })),
  )

  const handleInputChange = (index: number, newUserInput: string) => {
    setCharacterBoxes((prevCharacterBoxes) => {
      const newCharacterBoxes = [...prevCharacterBoxes]
      newCharacterBoxes[index].userInput = newUserInput
      newCharacterBoxes[index].isCorrect = newCharacterBoxes[
        index
      ].romaji.includes(newUserInput.toLowerCase())
      setNumCorrect(newCharacterBoxes.filter((box) => box.isCorrect).length)
      return newCharacterBoxes
    })
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleRetry = () => {
    // Shuffle the kana array for a new order
    const shuffledKana = [...kana].sort(() => Math.random() - 0.5)

    // Reset all state back to initial values with shuffled order
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
    handleInputChange,
    handleSubmit,
    handleRetry,
  }
}
