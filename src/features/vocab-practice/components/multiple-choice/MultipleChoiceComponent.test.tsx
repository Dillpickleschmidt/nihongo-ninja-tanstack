// vocab-practice/components/multiple-choice/MultipleChoiceComponent.test.tsx
import { describe, it, expect, beforeEach, vi } from "vitest"
import { render, screen, fireEvent } from "@solidjs/testing-library"
import { Rating } from "ts-fsrs"

import MultipleChoiceComponent from "./MultipleChoiceComponent"
import type { PracticeCard } from "../../types"
import type { PartOfSpeech } from "@/data/types"

// Mock external dependencies
vi.mock("../../context/VocabPracticeContext")
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}))

// Import mocked function
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"

const mockUseVocabPracticeContext = useVocabPracticeContext as ReturnType<
  typeof vi.fn
>

const createMockCard = (
  key: string,
  validAnswers: string[],
  partOfSpeech?: PartOfSpeech,
  practiceItemType: "vocabulary" | "kanji" = "vocabulary",
  practiceMode: "meanings" | "spellings" = "meanings",
): PracticeCard => ({
  key,
  vocab: {
    word: key.split(":")[1] || "test",
    furigana: "test",
    hiragana: ["テスト"],
    rubyText: ["テスト"],
    english: validAnswers,
    part_of_speech: partOfSpeech,
  },
  fsrs: { card: {} as any, logs: [] },
  practiceMode,
  practiceItemType,
  sessionStyle: "multiple-choice",
  prompt: validAnswers.join(", "),
  validAnswers,
  sessionScope: "module",
  mnemonics: {
    kanji: ["mock meaning mnemonic"],
    reading: ["mock reading mnemonic"],
  },
})

describe("MultipleChoiceComponent", () => {
  const mockSetState = vi.fn()
  const mockGetCardMap = vi.fn()

  let defaultMockState: {
    manager: { getCardMap: ReturnType<typeof vi.fn> }
    isAnswered: boolean
    lastRating: Rating | null
    currentCard: PracticeCard | null
  }

  beforeEach(() => {
    vi.clearAllMocks()
    defaultMockState = {
      manager: { getCardMap: mockGetCardMap },
      isAnswered: false,
      lastRating: null,
      currentCard: null,
    }

    mockUseVocabPracticeContext.mockReturnValue({
      state: defaultMockState,
      setState: mockSetState,
    })
  })

  describe("Choice Generation Filtering", () => {
    it("should filter options by practice item type", () => {
      // Create cards with different practice item types
      const vocabCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
        "vocabulary",
      )
      const kanjiCard = createMockCard(
        "kanji:食",
        ["eat", "food"],
        undefined,
        "kanji",
      )
      const anotherVocabCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
        "vocabulary",
      )

      const cardMap = new Map([
        ["vocabulary:食べる", vocabCard],
        ["kanji:食", kanjiCard],
        ["vocabulary:飲む", anotherVocabCard],
      ])

      defaultMockState.currentCard = vocabCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 2 buttons: vocabulary cards only (kanji filtered out)
      expect(buttons.length).toBe(2)
    })

    it("should filter options by practice mode", () => {
      const meaningsCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
        "vocabulary",
        "meanings",
      )
      const spellingsCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
        "vocabulary",
        "spellings",
      )
      const anotherMeaningsCard = createMockCard(
        "vocabulary:見る",
        ["see"],
        "Ichidan verb",
        "vocabulary",
        "meanings",
      )

      const cardMap = new Map([
        ["vocabulary:食べる", meaningsCard],
        ["vocabulary:飲む", spellingsCard],
        ["vocabulary:見る", anotherMeaningsCard],
      ])

      defaultMockState.currentCard = meaningsCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 2 buttons: meanings cards only (spellings card filtered out)
      expect(buttons.length).toBe(2)
    })

    it("should filter options by part of speech - verbs with verbs", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const verbCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
      )
      const adjectiveCard = createMockCard(
        "vocabulary:大きい",
        ["big"],
        "I-adjective",
      )
      const anotherVerbCard = createMockCard(
        "vocabulary:見る",
        ["see"],
        "Ichidan verb",
      )

      const cardMap = new Map([
        ["vocabulary:食べる", currentCard],
        ["vocabulary:飲む", verbCard],
        ["vocabulary:大きい", adjectiveCard],
        ["vocabulary:見る", anotherVerbCard],
      ])

      defaultMockState.currentCard = currentCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 3 buttons: verb cards only (adjective filtered out)
      expect(buttons.length).toBe(3)
    })

    it("should filter options by part of speech - adjectives with adjectives", () => {
      const currentCard = createMockCard(
        "vocabulary:大きい",
        ["big"],
        "I-adjective",
      )
      const verbCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const anotherAdjectiveCard = createMockCard(
        "vocabulary:小さい",
        ["small"],
        "I-adjective",
      )
      const naAdjectiveCard = createMockCard(
        "vocabulary:静か",
        ["quiet"],
        "Na-adjective",
      )

      const cardMap = new Map([
        ["vocabulary:大きい", currentCard],
        ["vocabulary:食べる", verbCard],
        ["vocabulary:小さい", anotherAdjectiveCard],
        ["vocabulary:静か", naAdjectiveCard],
      ])

      defaultMockState.currentCard = currentCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 3 buttons: adjective cards only (verb filtered out)
      expect(buttons.length).toBe(3)
    })

    it("should exclude cards with same key", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const duplicateCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      ) // Same key
      const differentCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
      )

      const cardMap = new Map([
        ["vocabulary:食べる", currentCard],
        ["vocabulary:飲む", differentCard],
      ])

      defaultMockState.currentCard = currentCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 2 buttons: current card + different card (no duplicates in Map)
      expect(buttons.length).toBe(2)
    })

    it("should handle cards without part of speech as non-verbs", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        undefined,
      ) // No part of speech
      const verbCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Ichidan verb",
      )
      const anotherNoPoSCard = createMockCard(
        "vocabulary:本",
        ["book"],
        undefined,
      ) // No part of speech

      const cardMap = new Map([
        ["vocabulary:食べる", currentCard],
        ["vocabulary:飲む", verbCard],
        ["vocabulary:本", anotherNoPoSCard],
      ])

      defaultMockState.currentCard = currentCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 2 buttons: non-verb cards only (verb filtered out)
      expect(buttons.length).toBe(2)
    })

    it("should filter out multiple cards with different violations", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
        "vocabulary",
        "meanings",
      )
      const correctCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
        "vocabulary",
        "meanings",
      )
      const wrongPoSCard = createMockCard(
        "vocabulary:大きい",
        ["big"],
        "I-adjective",
        "vocabulary",
        "meanings",
      ) // Wrong part of speech
      const wrongModeCard = createMockCard(
        "vocabulary:見る",
        ["see"],
        "Ichidan verb",
        "vocabulary",
        "spellings",
      ) // Wrong practice mode

      const cardMap = new Map([
        ["vocabulary:食べる", currentCard],
        ["vocabulary:飲む", correctCard],
        ["vocabulary:大きい", wrongPoSCard],
        ["vocabulary:見る", wrongModeCard],
      ])

      defaultMockState.currentCard = currentCard
      mockGetCardMap.mockReturnValue(cardMap)

      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")

      // Should have exactly 2 buttons: only cards matching both PoS and mode (2 filtered out)
      expect(buttons.length).toBe(2)
    })
  })

  describe("User Interaction", () => {
    beforeEach(() => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const otherCard = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
      )

      const cardMap = new Map([
        ["vocabulary:食べる", currentCard],
        ["vocabulary:飲む", otherCard],
      ])

      defaultMockState.currentCard = currentCard
      mockGetCardMap.mockReturnValue(cardMap)
    })

    it("should mark correct answer as good rating", () => {
      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")
      const correctButton = buttons.find((button) =>
        button.textContent?.includes("eat"),
      )

      expect(correctButton).toBeDefined()
      fireEvent.click(correctButton!)

      expect(mockSetState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Good,
      })
    })

    it("should mark incorrect answer as again rating", () => {
      render(() => <MultipleChoiceComponent />)

      const buttons = screen.getAllByRole("button")
      const incorrectButton = buttons.find((button) =>
        button.textContent?.includes("drink"),
      )

      expect(incorrectButton).toBeDefined()
      fireEvent.click(incorrectButton!)

      expect(mockSetState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Again,
      })
    })
  })
})
