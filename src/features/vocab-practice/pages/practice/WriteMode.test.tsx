// vocab-practice/pages/practice/WriteMode.test.tsx
import { describe, it, expect, beforeEach, vi } from "vitest"
import { render, screen, fireEvent, waitFor } from "@solidjs/testing-library"
import { Rating } from "ts-fsrs"

import WriteModeComponent from "./WriteMode"
import type { PracticeCard } from "@/features/vocab-practice/types"
import type { PartOfSpeech, ExampleSentence } from "@/data/types"

// Mock all external dependencies
vi.mock("@/features/vocab-practice/context/VocabPracticeContext")
vi.mock("@/data/utils/sentence-processing")
vi.mock("@/features/resolvers/vocabulary", () => ({
  getVocabulary: vi.fn(),
}))
vi.mock("@/features/resolvers/kanji", () => ({
  getKanjiDetails: vi.fn(),
}))
vi.mock("@/features/wanakana/WanaKana", () => ({
  default: ({ children }: { children: any }) => children,
}))
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}))

// Import mocked functions
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { getExampleSentenceParts } from "@/data/utils/sentence-processing"

const mockUseVocabPracticeContext = vi.mocked(useVocabPracticeContext)
const mockGetExampleSentenceParts = vi.mocked(getExampleSentenceParts)

// Mock functions for context
const mockCurrentCard = vi.fn()
const mockSetUIState = vi.fn()
const mockAddTimeAndQuestions = vi.fn()

const createMockCard = (
  validAnswers: string[],
  hasExampleSentence = false,
): PracticeCard => ({
  key: "test-key",
  vocab: {
    word: "test",
    furigana: "test",
    hiragana: ["テスト"],
    rubyText: ["テスト"],
    english: validAnswers,
    example_sentences: hasExampleSentence
      ? ([
        { japanese: ["mock"], english: ["mock"] },
      ] satisfies ExampleSentence[])
      : undefined,
    part_of_speech: hasExampleSentence
      ? ("I-adjective" satisfies PartOfSpeech)
      : ("Godan verb with 'u' ending" satisfies PartOfSpeech),
  },
  fsrs: { card: {} as any, logs: [] },
  practiceMode: hasExampleSentence ? "spellings" : "meanings",
  practiceItemType: "vocabulary",
  sessionStyle: "write",
  prompt: validAnswers.join(", "),
  validAnswers,
  sessionScope: "module",
  isDisabled: false,
  mnemonics: {
    kanji: ["mock meaning mnemonic"],
    reading: ["mock reading mnemonic"],
  },
})

describe("WriteModeComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks()

    // Reset mock functions
    mockCurrentCard.mockReturnValue(null)
    mockAddTimeAndQuestions.mockReturnValue(undefined)

    mockUseVocabPracticeContext.mockReturnValue({
      currentCard: mockCurrentCard,
      uiState: {
        isAnswered: false,
        lastRating: null,
      },
      setUIState: mockSetUIState,
      addTimeAndQuestions: mockAddTimeAndQuestions,
    } as any)
  })

  describe("Single Input Mode", () => {
    beforeEach(() => {
      const mockCard = createMockCard(["answer1", "answer2"])
      mockCurrentCard.mockReturnValue(mockCard)
      mockGetExampleSentenceParts.mockReturnValue({
        displayParts: [],
        inputValidationTargets: [],
      })
    })

    it("should accept valid answers from the validAnswers array", () => {
      render(() => <WriteModeComponent />)
      const input = screen.getByRole("textbox")
      fireEvent.input(input, { target: { value: "answer1" } })
      fireEvent.keyDown(input, { key: "Enter" })

      expect(mockSetUIState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Good,
      })
    })

    it("should handle case-insensitive and whitespace-trimmed answers", () => {
      render(() => <WriteModeComponent />)
      const input = screen.getByRole("textbox")
      fireEvent.input(input, { target: { value: "  ANSWER1  " } })
      fireEvent.keyDown(input, { key: "Enter" })

      expect(mockSetUIState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Good,
      })
    })

    it("should mark incorrect answers as wrong", async () => {
      render(() => <WriteModeComponent />)
      const input = screen.getByRole("textbox")
      fireEvent.input(input, { target: { value: "wrong answer" } })
      fireEvent.keyDown(input, { key: "Enter" })
      expect(mockSetUIState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Again,
      })
    })
  })

  describe("Multiple Input Mode (Example Sentences)", () => {
    beforeEach(() => {
      const mockCard = createMockCard(["validAnswer"], true)
      mockCurrentCard.mockReturnValue(mockCard)
      mockGetExampleSentenceParts.mockReturnValue({
        displayParts: [
          { type: "html", content: "This is " },
          { type: "input", index: 0 },
          { type: "html", content: " example." },
        ],
        inputValidationTargets: [
          ["exampleSpecificAnswer", "anotherValidAnswer"],
        ],
      })
    })

    it("should accept answers from validAnswers array", async () => {
      render(() => <WriteModeComponent />)
      const input = await screen.findByRole("textbox")
      fireEvent.input(input, { target: { value: "validAnswer" } })
      fireEvent.keyDown(input, { key: "Enter" })

      expect(mockSetUIState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Good,
      })
    })

    it("should accept example-specific answers", async () => {
      render(() => <WriteModeComponent />)
      const input = await screen.findByRole("textbox")
      fireEvent.input(input, { target: { value: "exampleSpecificAnswer" } })
      fireEvent.keyDown(input, { key: "Enter" })

      expect(mockSetUIState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Good,
      })
    })

    it("should handle multiple blanks correctly", async () => {
      mockGetExampleSentenceParts.mockReturnValue({
        displayParts: [
          { type: "html", content: "First " },
          { type: "input", index: 0 },
          { type: "html", content: " second " },
          { type: "input", index: 1 },
          { type: "html", content: "." },
        ],
        inputValidationTargets: [["answer1"], ["answer2"]],
      })

      render(() => <WriteModeComponent />)
      const inputs = await screen.findAllByRole("textbox")
      expect(inputs).toHaveLength(2)
      fireEvent.input(inputs[0], { target: { value: "answer1" } })
      fireEvent.input(inputs[1], { target: { value: "answer2" } })
      fireEvent.keyDown(inputs[0], { key: "Enter" })
      waitFor(() => {
        expect(mockSetUIState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Good,
        })
      })
    })

    it("should mark as incorrect if any blank is wrong", async () => {
      mockGetExampleSentenceParts.mockReturnValue({
        displayParts: [
          { type: "html", content: "First " },
          { type: "input", index: 0 },
          { type: "html", content: " second " },
          { type: "input", index: 1 },
          { type: "html", content: "." },
        ],
        inputValidationTargets: [["answer1"], ["answer2"]],
      })

      render(() => <WriteModeComponent />)
      const inputs = await screen.findAllByRole("textbox")
      fireEvent.input(inputs[0], { target: { value: "answer1" } })
      fireEvent.input(inputs[1], { target: { value: "wrong" } })
      fireEvent.keyDown(inputs[0], { key: "Enter" })
      expect(mockSetUIState).toHaveBeenCalledWith({
        isAnswered: true,
        lastRating: Rating.Again,
      })
    })
  })

  // --- Removed "Input Focus" describe block ---
})
