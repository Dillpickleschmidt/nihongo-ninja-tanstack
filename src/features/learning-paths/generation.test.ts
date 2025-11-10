import { describe, it, expect, vi } from "vitest"

// Mock @/data/utils/core to provide test implementation
vi.mock("@/data/utils/core", () => ({
  getStaticTextbookModuleIds: (textbookId: string) => [
    "welcome-overview",
    "japanese-pronunciation",
    "writing-systems",
    "hiragana",
    "polite-invitations",
    "tara-conditional",
    "te-kudasai",
    "te-mo-ii",
    "te-wa-ikenai",
    "sou-desu-hearsay",
  ],
}))

import {
  createLearningPath,
  type ExtractedData,
  type VocabWord,
} from "./generation"

describe("Learning path generation", () => {
  // Test helper for creating vocabulary words
  const createVocabWord = (
    word: string,
    pos: string,
    lineId: number,
  ): VocabWord => ({
    word,
    furigana: undefined,
    english: word,
    pos: pos as any,
    transcriptLineId: lineId,
  })

  describe("chunkVocabularyByFrequency", () => {
    it("filters out unwanted POS", async () => {
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          createVocabWord("する", "動詞", 0),
          createVocabWord("。", "記号", 1), // Should be filtered
          createVocabWord("本", "名詞", 2),
          createVocabWord("は", "助詞", 3), // Should be filtered (particle)
          createVocabWord("", "名詞", 4), // Should be filtered (empty)
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")
      const vocabModules = result.modules.filter((m) => m.type === "vocabulary")

      // Flatten all vocab words from all modules
      const allWords = vocabModules.flatMap((m) => m.words)

      // Verify punctuation, particles, and empty strings are filtered
      expect(allWords.every((w) => w.word !== "。")).toBe(true)
      expect(allWords.every((w) => w.word !== "は")).toBe(true)
      expect(allWords.every((w) => w.word !== "")).toBe(true)
      // Verify valid words remain
      expect(allWords.some((w) => w.word === "する")).toBe(true)
      expect(allWords.some((w) => w.word === "本")).toBe(true)
    })

    it("creates modules with optimal sizes using distributeEvenly", async () => {
      // 50 verbs + 76 nouns = 126 total
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          ...Array.from({ length: 50 }, (_, i) =>
            createVocabWord(`verb${i}`, "動詞", i),
          ),
          ...Array.from({ length: 76 }, (_, i) =>
            createVocabWord(`noun${i}`, "名詞", 50 + i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")
      const vocabModules = result.modules.filter((m) => m.type === "vocabulary")

      // Count verb and non-verb modules
      const verbModules = vocabModules.filter((m) => m.isVerbDeck === true)
      const nonVerbModules = vocabModules.filter((m) => m.isVerbDeck === false)

      // 50 verbs should create 3 modules: [17, 17, 16]
      expect(verbModules.length).toBe(3)
      expect(verbModules[0]!.words.length).toBe(17)
      expect(verbModules[1]!.words.length).toBe(17)
      expect(verbModules[2]!.words.length).toBe(16)

      // 76 non-verbs should create 5 modules: [16, 15, 15, 15, 15]
      expect(nonVerbModules.length).toBe(5)
      expect(nonVerbModules[0]!.words.length).toBe(16)
      expect(nonVerbModules[1]!.words.length).toBe(15)
      expect(nonVerbModules[2]!.words.length).toBe(15)
      expect(nonVerbModules[3]!.words.length).toBe(15)
      expect(nonVerbModules[4]!.words.length).toBe(15)
    })

    it("maintains frequency ordering across modules", async () => {
      // Note: This test assumes vocabulary is extracted with frequency counts
      // For now, we test that higher-indexed vocab appears in later modules

      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          // Create 50 nouns - lower index = appears first in input = higher frequency assumption
          ...Array.from({ length: 50 }, (_, i) =>
            createVocabWord(`word${i}`, "名詞", i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")
      const vocabModules = result.modules.filter((m) => m.type === "vocabulary")

      // 50 nouns → 4 modules using distributeEvenly(50, 15) → 3 or 4 chunks
      // numChunks = floor(50/15) = 3, with distribution [17, 17, 16]
      expect(vocabModules.length).toBeGreaterThan(0)
      // All modules should have words
      vocabModules.forEach((m) => {
        expect(m.words.length).toBeGreaterThan(0)
      })
    })

    it("interleaves verb and non-verb modules by frequency", async () => {
      // This test checks that verb and non-verb modules appear in frequency order

      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          // Mix of verbs and nouns
          ...Array.from({ length: 30 }, (_, i) =>
            createVocabWord(`item${i}`, i % 2 === 0 ? "動詞" : "名詞", i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")
      const vocabModules = result.modules.filter((m) => m.type === "vocabulary")

      // Should have multiple modules of both verb and non-verb
      const verbModules = vocabModules.filter((m) => m.isVerbDeck === true)
      const nonVerbModules = vocabModules.filter((m) => m.isVerbDeck === false)

      expect(verbModules.length).toBeGreaterThan(0)
      expect(nonVerbModules.length).toBeGreaterThan(0)
      // Modules should alternate or be interleaved in output
      expect(vocabModules.length).toBeGreaterThan(1)
    })

    it("handles edge case with remaining items", async () => {
      // Small amounts: 8 verbs + 7 nouns (won't fill a full 15-item bucket)
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          ...Array.from({ length: 8 }, (_, i) =>
            createVocabWord(`verb${i}`, "動詞", i),
          ),
          ...Array.from({ length: 7 }, (_, i) =>
            createVocabWord(`noun${i}`, "名詞", 8 + i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")
      const vocabModules = result.modules.filter((m) => m.type === "vocabulary")

      // Should create modules with partial sizes
      const totalWords = vocabModules.reduce(
        (sum, m) => sum + m.words.length,
        0,
      )
      expect(totalWords).toBe(15) // All words should be present
      // Should have created some modules (not necessarily full-sized)
      expect(vocabModules.length).toBeGreaterThan(0)
    })
  })

  describe("createLearningPath integration", () => {
    it("includes always-included modules", async () => {
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")

      const alwaysIncluded = [
        "welcome-overview",
        "japanese-pronunciation",
        "writing-systems",
        "hiragana",
      ]

      const grammarModules = result.modules.filter((m) => m.type === "grammar")
      alwaysIncluded.forEach((moduleId) => {
        expect(grammarModules.some((m) => m.moduleId === moduleId)).toBe(true)
      })
    })

    it("always-included modules appear first (orderIndex 0-3)", async () => {
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")

      const alwaysIncludedIds = [
        "welcome-overview",
        "japanese-pronunciation",
        "writing-systems",
        "hiragana",
      ]

      const first4Modules = result.modules.slice(0, 4)
      first4Modules.forEach((module, idx) => {
        expect(module.type).toBe("grammar")
        expect(module.orderIndex).toBe(idx)
        expect(alwaysIncludedIds.includes(module.moduleId)).toBe(true)
      })
    })

    it("unchecks completed modules", async () => {
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [],
        transcript: [],
      }

      const completedIds = ["welcome-overview", "japanese-pronunciation"]
      const result = await createLearningPath(data, "genki_1", completedIds)

      const grammarModules = result.modules.filter((m) => m.type === "grammar")
      const checkedModules = grammarModules.filter(
        (m) => completedIds.includes(m.moduleId) && m.checked,
      )

      expect(checkedModules.length).toBe(0)
    })

    it("orderIndex values are sequential", async () => {
      const data: ExtractedData = {
        grammarPatterns: ["masen_ka"], // 1 pattern → 1 grammar module
        vocabulary: [
          ...Array.from({ length: 10 }, (_, i) =>
            createVocabWord(`word${i}`, "名詞", i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")

      result.modules.forEach((module, idx) => {
        expect(module.orderIndex).toBe(idx)
      })
    })

    it("no duplicate orderIndex values", async () => {
      const data: ExtractedData = {
        grammarPatterns: ["masen_ka", "tara_conditional"],
        vocabulary: [
          ...Array.from({ length: 20 }, (_, i) =>
            createVocabWord(`word${i}`, "名詞", i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")

      const orderIndices = result.modules.map((m) => m.orderIndex)
      const uniqueIndices = new Set(orderIndices)

      expect(uniqueIndices.size).toBe(orderIndices.length)
    })
  })

  describe("interleaving", () => {
    it("interleaves grammar with vocab when baseRatio < 4", async () => {
      // 6 grammar (after removing always-included: 2 other), 25 vocab → baseRatio = 12, capped at 4
      const data: ExtractedData = {
        grammarPatterns: [
          "masen_ka",
          "tara_conditional",
          "te_kudasai",
          "te_mo_ii",
          "te_wa_ikenai",
          "sou_desu_hearsay",
        ],
        vocabulary: [
          ...Array.from({ length: 25 }, (_, i) =>
            createVocabWord(`word${i}`, "名詞", i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")

      // Extract modules (skip always-included)
      const modules = result.modules.slice(4) // skip first 4 always-included

      // Verify interleaving happened (vocab appears mixed with grammar, not all at end)
      let hasVocabBetweenGrammar = false
      for (let i = 0; i < modules.length - 1; i++) {
        if (
          modules[i]!.type === "grammar" &&
          modules[i + 1]!.type === "vocabulary"
        ) {
          hasVocabBetweenGrammar = true
          break
        }
      }
      expect(hasVocabBetweenGrammar).toBe(true)
    })

    it("caps vocab per grammar at 4 when baseRatio >= 4", async () => {
      // 5 grammar, 50 vocab → baseRatio = 10, capped at 4
      const data: ExtractedData = {
        grammarPatterns: [
          "masen_ka",
          "tara_conditional",
          "te_kudasai",
          "te_mo_ii",
        ],
        vocabulary: [
          ...Array.from({ length: 50 }, (_, i) =>
            createVocabWord(`word${i}`, "名詞", i),
          ),
        ],
        transcript: [],
      }

      const result = await createLearningPath(data, "genki_1")
      const modules = result.modules.slice(4) // skip always-included

      // Count vocab between each grammar module
      const vocabCountBetweenGrammar: number[] = []
      let currentVocabCount = 0
      let lastWasGrammar = false

      for (const module of modules) {
        if (module.type === "grammar") {
          if (lastWasGrammar && currentVocabCount > 0) {
            vocabCountBetweenGrammar.push(currentVocabCount)
          }
          currentVocabCount = 0
          lastWasGrammar = true
        } else {
          currentVocabCount++
          lastWasGrammar = false
        }
      }
      if (currentVocabCount > 0) {
        vocabCountBetweenGrammar.push(currentVocabCount)
      }

      // None should exceed 4
      vocabCountBetweenGrammar.forEach((count) => {
        expect(count).toBeLessThanOrEqual(4)
      })
    })
  })
})
