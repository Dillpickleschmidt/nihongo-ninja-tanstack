// src/features/resolvers/vocabulary/stacking.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest"
import type { VocabularyItem } from "@/data/types"
import type { Stack } from "@/features/resolvers/types"
import { resolveVocabularyEntries } from "./stacking"
import { DEFAULT_VOCABULARY_STACKS } from "@/features/main-cookies/schemas/user-settings"

// Mock the vocabulary import
vi.mock("@/data/vocabulary", () => ({
  vocabulary: {
    こんにちは: {
      word: "こんにちは",
      furigana: "こんにちは",
      english: ["hello", "good afternoon"],
      part_of_speech: "Expression",
    },
    水: {
      word: "水",
      furigana: "水[みず]",
      english: ["water"],
      part_of_speech: "Noun",
      info: ["Basic vocabulary"],
    },
  },
}))

// Mock the getVocabForDeck import
vi.mock("@/features/supabase/db/deck", () => ({
  getVocabForDeck: vi.fn(),
}))

import { getVocabForDeck } from "@/features/supabase/db/deck"
const mockGetVocabForDeck = vi.mocked(getVocabForDeck)

describe("Vocabulary Stacking", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // Create a mock JSON data loader for testing
  const createMockJsonLoader = (
    mockData: Map<string, Map<string, Partial<VocabularyItem>>>,
  ) => {
    return async (stacks: Stack[]) => {
      const jsonCaches = new Map<string, Map<string, Partial<VocabularyItem>>>()

      for (const stack of stacks) {
        if (stack.sourceId.endsWith(".json")) {
          jsonCaches.set(
            stack.sourceId,
            mockData.get(stack.sourceId) || new Map(),
          )
        }
      }

      return jsonCaches
    }
  }

  describe("resolveVocabularyEntries", () => {
    it("should return empty map for empty input", async () => {
      const result = await resolveVocabularyEntries([], [])
      expect(result).toEqual(new Map())
    })

    it("should resolve single term with built-in vocabulary fallback", async () => {
      const stacks: Stack[] = [
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(["こんにちは"], stacks)

      expect(result.size).toBe(1)
      const resolved = result.get("こんにちは")
      expect(resolved).toEqual({
        word: "こんにちは",
        furigana: "こんにちは",
        english: ["hello", "good afternoon"],
        part_of_speech: "Expression",
      })
    })

    it("should process multiple terms in batch", async () => {
      const stacks: Stack[] = [DEFAULT_VOCABULARY_STACKS[1]] // Built-in Vocabulary stack

      const result = await resolveVocabularyEntries(
        ["こんにちは", "水"],
        stacks,
      )

      expect(result.size).toBe(2)
      expect(result.get("こんにちは")).toBeDefined()
      expect(result.get("水")).toBeDefined()
      expect(result.get("水")?.english).toEqual(["water"])
    })

    it("should respect stack priority (lower number = higher precedence)", async () => {
      const mockJsonData = new Map([
        [
          "custom-vocab.json",
          new Map([
            [
              "こんにちは",
              {
                word: "こんにちは",
                furigana: "こんにちは",
                english: ["hello", "hi", "good day"],
                mnemonics: {
                  kanji: ["Custom kanji mnemonic"],
                  reading: ["Custom reading mnemonic"],
                },
              },
            ],
          ]),
        ],
      ])

      const mockJsonLoader = createMockJsonLoader(mockJsonData)

      const stacks: Stack[] = [
        {
          name: "High Priority JSON",
          enabled: true,
          locked: false,
          sourceId: "custom-vocab.json",
          priority: 100,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["こんにちは"],
        stacks,
        mockJsonLoader,
      )
      const resolved = result.get("こんにちは")

      expect(resolved).toBeDefined()
      expect(resolved?.english).toEqual(["hello", "hi", "good day"]) // From JSON (higher priority)
      expect(resolved?.part_of_speech).toBe("Expression") // From vocabulary.ts (fallback)
      expect(resolved?.mnemonics?.kanji).toEqual(["Custom kanji mnemonic"]) // From JSON only
    })

    it("should merge all properties across stacks without early termination", async () => {
      const mockJsonData = new Map([
        [
          "custom-vocab.json",
          new Map([
            [
              "水",
              {
                word: "水",
                furigana: "水[みず]",
                english: ["water", "H2O"],
                info: ["Chemical compound"],
                mnemonics: {
                  kanji: ["Water kanji mnemonic"],
                },
              },
            ],
          ]),
        ],
      ])

      const mockJsonLoader = createMockJsonLoader(mockJsonData)

      const stacks: Stack[] = [
        {
          name: "Custom JSON",
          enabled: true,
          locked: false,
          sourceId: "custom-vocab.json",
          priority: 100,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["水"],
        stacks,
        mockJsonLoader,
      )
      const resolved = result.get("水")

      expect(resolved).toBeDefined()
      expect(resolved?.english).toEqual(["water", "H2O"]) // From JSON (higher priority)
      expect(resolved?.info).toEqual(["Chemical compound"]) // From JSON (higher priority)
      expect(resolved?.mnemonics?.kanji).toEqual(["Water kanji mnemonic"]) // From JSON
      expect(resolved?.part_of_speech).toBe("Noun") // Same in both sources
    })

    it("should handle complex mnemonics merging", async () => {
      const mockJsonData = new Map([
        [
          "partial-mnemonics.json",
          new Map([
            [
              "こんにちは",
              {
                mnemonics: {
                  kanji: ["Custom kanji mnemonic"],
                  reading: ["Custom reading mnemonic"],
                },
              },
            ],
          ]),
        ],
      ])

      const mockJsonLoader = createMockJsonLoader(mockJsonData)

      const stacks: Stack[] = [
        {
          name: "JSON with partial mnemonics",
          enabled: true,
          locked: false,
          sourceId: "partial-mnemonics.json",
          priority: 200,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["こんにちは"],
        stacks,
        mockJsonLoader,
      )
      const resolved = result.get("こんにちは")

      expect(resolved?.mnemonics).toEqual({
        kanji: ["Custom kanji mnemonic"],
        reading: ["Custom reading mnemonic"],
      })
    })

    it("should skip disabled stacks", async () => {
      const mockJsonData = new Map([
        [
          "disabled-vocab.json",
          new Map([
            [
              "こんにちは",
              {
                english: ["should not appear"],
                mnemonics: {
                  kanji: ["Should not appear"],
                },
              },
            ],
          ]),
        ],
      ])

      const mockJsonLoader = createMockJsonLoader(mockJsonData)

      const stacks: Stack[] = [
        {
          name: "Disabled Stack",
          enabled: false,
          locked: false,
          sourceId: "disabled-vocab.json",
          priority: 100,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["こんにちは"],
        stacks,
        mockJsonLoader,
      )
      const resolved = result.get("こんにちは")

      expect(resolved?.english).toEqual(["hello", "good afternoon"]) // Only from vocabulary.ts
      expect(resolved?.mnemonics).toBeUndefined() // Not from disabled JSON stack
    })

    it("should handle missing data gracefully", async () => {
      const mockJsonLoader = createMockJsonLoader(new Map())

      const stacks: Stack[] = [
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["非存在"],
        stacks,
        mockJsonLoader,
      )
      expect(result.size).toBe(0) // Term not found in any source
    })

    it("should handle empty JSON sources gracefully", async () => {
      const mockJsonLoader = createMockJsonLoader(new Map())

      const stacks: Stack[] = [
        {
          name: "Empty JSON",
          enabled: true,
          locked: false,
          sourceId: "empty.json",
          priority: 100,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["こんにちは"],
        stacks,
        mockJsonLoader,
      )
      expect(result.size).toBe(0) // Term not found in empty JSON
    })

    it("should create final items with defaults for partial data", async () => {
      const mockJsonData = new Map([
        [
          "partial-vocab.json",
          new Map([
            [
              "test",
              {
                word: "test",
                english: ["test meaning"],
              },
            ],
          ]),
        ],
      ])

      const mockJsonLoader = createMockJsonLoader(mockJsonData)

      const stacks: Stack[] = [
        {
          name: "Partial JSON",
          enabled: true,
          locked: false,
          sourceId: "partial-vocab.json",
          priority: 100,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["test"],
        stacks,
        mockJsonLoader,
      )
      const resolved = result.get("test")

      expect(resolved?.word).toBe("test")
      expect(resolved?.furigana).toBe("test") // Default fallback
      expect(resolved?.english).toEqual(["test meaning"])
    })
  })

  describe("User Decks Integration", () => {
    it("should resolve user deck vocabulary when deck_id is provided", async () => {
      const mockDeckVocab: VocabularyItem[] = [
        {
          word: "テスト",
          furigana: "テスト",
          english: ["test", "exam"],
          part_of_speech: "Noun",
          info: ["From user deck"],
        },
        {
          word: "こんにちは",
          furigana: "こんにちは",
          english: ["hello from deck"],
          part_of_speech: "Expression",
        },
      ]

      mockGetVocabForDeck.mockResolvedValueOnce(mockDeckVocab)

      const stacks: Stack[] = [
        {
          name: "User Decks",
          enabled: true,
          locked: true,
          sourceId: "user-decks",
          priority: 0,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["テスト", "こんにちは"],
        stacks,
        createMockJsonLoader(new Map()),
        123,
      )

      expect(mockGetVocabForDeck).toHaveBeenCalledWith(123)
      expect(result.size).toBe(2)

      // User deck should override built-in vocabulary
      const greeting = result.get("こんにちは")
      expect(greeting?.english).toEqual(["hello from deck"]) // From user deck, not built-in

      // User deck provides new vocabulary
      const test = result.get("テスト")
      expect(test?.english).toEqual(["test", "exam"])
      expect(test?.info).toEqual(["From user deck"])
    })

    it("should skip user deck lookup when no deck_id provided", async () => {
      const stacks: Stack[] = [
        {
          name: "User Decks",
          enabled: true,
          locked: true,
          sourceId: "user-decks",
          priority: 0,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["こんにちは"],
        stacks,
        createMockJsonLoader(new Map()),
      )

      expect(mockGetVocabForDeck).not.toHaveBeenCalled()
      expect(result.size).toBe(1)

      // Should fall back to built-in vocabulary
      const greeting = result.get("こんにちは")
      expect(greeting?.english).toEqual(["hello", "good afternoon"])
    })

    it("should handle user deck errors gracefully", async () => {
      mockGetVocabForDeck.mockRejectedValueOnce(new Error("Database error"))

      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

      const stacks: Stack[] = [
        {
          name: "User Decks",
          enabled: true,
          locked: true,
          sourceId: "user-decks",
          priority: 0,
        },
        {
          name: "Built-in Vocabulary",
          enabled: true,
          locked: true,
          sourceId: "vocabulary.ts",
          priority: 999,
        },
      ]

      const result = await resolveVocabularyEntries(
        ["こんにちは"],
        stacks,
        createMockJsonLoader(new Map()),
        123,
      )

      expect(consoleSpy).toHaveBeenCalledWith(
        "Failed to fetch vocabulary from user deck:",
        expect.any(Error),
      )
      expect(result.size).toBe(1)

      // Should fall back to built-in vocabulary
      const greeting = result.get("こんにちは")
      expect(greeting?.english).toEqual(["hello", "good afternoon"])

      consoleSpy.mockRestore()
    })
  })
})
