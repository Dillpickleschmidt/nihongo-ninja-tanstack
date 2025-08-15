// vocab-practice/components/write/WriteModeComponent.test.tsx
import { describe, it, expect, beforeEach, vi } from "vitest"
import { render, screen, fireEvent, waitFor } from "@solidjs/testing-library"
import { Rating } from "ts-fsrs"

import WriteModeComponent from "./WriteModeComponent"
import type { PracticeCard } from "../../types"
import type { PartOfSpeech, ExampleSentence } from "@/data/types"

// Mock all external dependencies
vi.mock("../../context/VocabPracticeContext")
vi.mock("@/data/utils/vocab")
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
vi.mock("@/components/ui/text-field", () => ({
  TextField: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  TextFieldInput: ({ onInput, onKeyDown, ...props }: any) => (
    <input
      {...props}
      onInput={onInput}
      onKeyDown={onKeyDown}
      data-testid="text-field-input"
    />
  ),
  TextFieldDescription: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}))

// Import mocked functions
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { getExampleSentenceParts } from "@/data/utils/vocab"

const mockUseVocabPracticeContext = useVocabPracticeContext as ReturnType<
  typeof vi.fn
>
const mockGetExampleSentenceParts = getExampleSentenceParts as ReturnType<
  typeof vi.fn
>

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
  practiceMode: hasExampleSentence ? "kana" : "readings",
  practiceItemType: "vocabulary",
  sessionStyle: "write",
  prompt: validAnswers.join(", "),
  validAnswers,
  sessionScope: "module",
  mnemonics: {
    kanji: ["mock meaning mnemonic"],
    reading: ["mock reading mnemonic"],
  },
})

describe("WriteModeComponent", () => {
  const mockSetState = vi.fn()

  let defaultMockState: {
    manager: { getCardFromMap: ReturnType<typeof vi.fn> }
    activeQueue: string[]
    isAnswered: boolean
    lastRating: Rating | null
    currentCard: PracticeCard | null
  }

  // Focus/select mocks are no longer needed if the "Input Focus" tests are removed,

  beforeEach(() => {
    vi.clearAllMocks()
    // Initialize defaultMockState before each test
    defaultMockState = {
      manager: { getCardFromMap: vi.fn() },
      activeQueue: ["test-key"],
      isAnswered: false,
      lastRating: null,
      currentCard: null,
    }

    mockUseVocabPracticeContext.mockReturnValue({
      state: defaultMockState,
      setState: mockSetState,
    })
    // Removed `mockClear()` calls for focus/select as those mocks are effectively removed or no longer directly used by these tests.
  })

  describe("Single Input Mode", () => {
    beforeEach(() => {
      const mockCard = createMockCard(["answer1", "answer2"])
      defaultMockState.manager.getCardFromMap.mockReturnValue(mockCard)
      defaultMockState.currentCard = mockCard
      mockGetExampleSentenceParts.mockReturnValue({
        displayParts: [],
        inputValidationTargets: [],
      })
    })

    it("should accept valid answers from the validAnswers array", async () => {
      render(() => <WriteModeComponent />)
      const input = await screen.findByTestId("text-field-input")
      fireEvent.input(input, { target: { value: "answer1" } })
      fireEvent.keyDown(input, { key: "Enter" })
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Good,
        })
      })
    })

    it("should handle case-insensitive and whitespace-trimmed answers", async () => {
      render(() => <WriteModeComponent />)
      const input = await screen.findByTestId("text-field-input")
      fireEvent.input(input, { target: { value: "  ANSWER1  " } })
      fireEvent.keyDown(input, { key: "Enter" })
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Good,
        })
      })
    })

    it("should mark incorrect answers as wrong", async () => {
      render(() => <WriteModeComponent />)
      const input = await screen.findByTestId("text-field-input")
      fireEvent.input(input, { target: { value: "wrong answer" } })
      fireEvent.keyDown(input, { key: "Enter" })
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Again,
        })
      })
    })
  })

  describe("Multiple Input Mode (Example Sentences)", () => {
    beforeEach(() => {
      const mockCard = createMockCard(["validAnswer"], true)
      defaultMockState.manager.getCardFromMap.mockReturnValue(mockCard)
      defaultMockState.currentCard = mockCard
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
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Good,
        })
      })
    })

    it("should accept example-specific answers", async () => {
      render(() => <WriteModeComponent />)
      const input = await screen.findByRole("textbox")
      fireEvent.input(input, { target: { value: "exampleSpecificAnswer" } })
      fireEvent.keyDown(input, { key: "Enter" })
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Good,
        })
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
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
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
      await waitFor(() => {
        expect(mockSetState).toHaveBeenCalledWith({
          isAnswered: true,
          lastRating: Rating.Again,
        })
      })
    })
  })

  // --- Removed "Input Focus" describe block ---
})
