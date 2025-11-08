import { describe, it, expect } from "vitest"
import {
  createLearningPath,
  type ExtractedData,
  type VocabWord,
} from "./generation"

describe("Learning path generation", () => {
  describe("chunkVocabularyByCategory", () => {
    it("distributes vocabulary evenly across chunks", () => {
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

      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          ...Array.from({ length: 50 }, (_, i) =>
            createVocabWord(`verb${i}`, "動詞", i),
          ),
        ],
        transcript: [],
      }

      const result = createLearningPath(data, "genki_1")

      // 50 verbs with target of 15 → 3 chunks: [17, 17, 16]
      const verbDecks = result.vocabularyDecks.filter(
        (d) => d.posTag === "動詞",
      )
      expect(verbDecks.length).toBe(3)
      expect(verbDecks[0]!.words.length).toBe(17)
      expect(verbDecks[1]!.words.length).toBe(17)
      expect(verbDecks[2]!.words.length).toBe(16)
    })

    it("separates verbs from non-verbs", () => {
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

      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [
          createVocabWord("verb1", "動詞", 0),
          createVocabWord("noun1", "名詞", 1),
          createVocabWord("verb2", "動詞", 2),
          createVocabWord("adj1", "形容詞", 3),
        ],
        transcript: [],
      }

      const result = createLearningPath(data, "genki_1")

      const verbDecks = result.vocabularyDecks.filter(
        (d) => d.posTag === "動詞",
      )
      const nonVerbDecks = result.vocabularyDecks.filter(
        (d) => d.posTag !== "動詞",
      )

      expect(verbDecks.length).toBe(1)
      expect(verbDecks[0]!.words.length).toBe(2)
      expect(nonVerbDecks.length).toBeGreaterThan(0)
    })
  })

  describe("createLearningPath integration", () => {
    it("includes always-included modules", () => {
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [],
        transcript: [],
      }

      const result = createLearningPath(data, "genki_1")

      const alwaysIncluded = [
        "welcome-overview",
        "japanese-pronunciation",
        "writing-systems",
        "hiragana",
      ]

      alwaysIncluded.forEach((moduleId) => {
        expect(result.grammarModules.some((m) => m.moduleId === moduleId)).toBe(
          true,
        )
      })
    })

    it("unchecks completed modules", () => {
      const data: ExtractedData = {
        grammarPatterns: [],
        vocabulary: [],
        transcript: [],
      }

      const completedIds = ["welcome-overview", "japanese-pronunciation"]
      const result = createLearningPath(data, "genki_1", completedIds)

      const checkedModules = result.grammarModules.filter(
        (m) => completedIds.includes(m.moduleId) && m.checked,
      )

      expect(checkedModules.length).toBe(0)
    })
  })
})
