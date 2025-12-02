// vocab-practice/logic/data-initialization.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest"
import { createEmptyCard, Rating, State } from "ts-fsrs"
import type { VocabularyItem } from "@/data/types"
import type {
  VocabHierarchy,
  VocabRelationship,
  KanjiRelationship,
  KanjiEntry,
  RadicalEntry,
} from "@/features/resolvers/util/hierarchy-builder"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"

// Mock resolvers to prevent server function imports
vi.mock("@/features/resolvers/vocabulary", () => ({
  getVocabulary: vi.fn(),
}))
vi.mock("@/features/resolvers/kanji", () => ({
  getKanjiDetails: vi.fn(),
}))

import {
  initializePracticeSession,
  type PracticeItemData,
} from "./data-initialization"

// --- Mock Data Factory Functions ---
// These are used to consistently build the base test data structures.
const createMockRadical = (
  radical: string,
  meanings: string[],
): RadicalEntry => ({
  radical,
  meanings,
  meaning_mnemonic: `Mnemonic for ${radical}`,
})

const createMockKanji = (
  kanji: string,
  meanings: string[],
  radicalComponents: string[],
): KanjiEntry => ({
  kanji,
  meanings,
  radicalComponents,
  meaning_mnemonic: `Mnemonic for ${kanji} meaning`,
  reading_mnemonic: `Mnemonic for ${kanji} reading`,
})

const createMockVocabRelationship = (
  word: string,
  kanjiComponents: string[],
): VocabRelationship => ({
  word,
  kanjiComponents,
})

const createMockKanjiRelationship = (
  kanji: string,
  radicalComponents: string[],
): KanjiRelationship => ({
  kanji,
  radicalComponents,
})

// --- Data for FSRS Card Creation ---
const createMockFSRSCard = (
  key: string,
  mode: "meanings" | "spellings",
  type: "vocabulary" | "kanji" | "radical",
  state: State = State.New,
): FSRSCardData => ({
  user_id: "test-user",
  practice_item_key: key,
  fsrs_card: { ...createEmptyCard(new Date()), state },
  mode,
  type,
  fsrs_logs:
    state === State.Review
      ? [
          {
            rating: Rating.Good,
            state: State.Review,
            due: new Date(),
            stability: 3,
            difficulty: 5,
            elapsed_days: 0,
            last_elapsed_days: 0,
            scheduled_days: 3,
            review: new Date(),
            learning_steps: 0,
          },
        ]
      : [],
})

// --- Core Mock Data Definitions ---

// Display data (for PracticeItemData)
const mockRadicalEntries: RadicalEntry[] = [
  createMockRadical("人", ["person", "human"]),
  createMockRadical("口", ["mouth"]),
  createMockRadical("水", ["water"]),
]

const mockKanjiEntries: KanjiEntry[] = [
  createMockKanji("食", ["food", "meal"], ["人", "口"]),
  createMockKanji("飲", ["drink"], ["水"]),
  createMockKanji("見", ["see", "look"], ["人"]),
  createMockKanji("写", ["copy", "be photographed"], []),
  createMockKanji("真", ["true", "reality"], []),
]

// Hierarchy relationships (lightweight)
const mockVocabRelationships: VocabRelationship[] = [
  createMockVocabRelationship("食べる", ["食"]),
  createMockVocabRelationship("飲む", ["飲"]),
  createMockVocabRelationship("見る", ["見"]),
]

const mockKanjiRelationships: KanjiRelationship[] = [
  createMockKanjiRelationship("食", ["人", "口"]),
  createMockKanjiRelationship("飲", ["水"]),
  createMockKanjiRelationship("見", ["人"]),
  createMockKanjiRelationship("写", []),
  createMockKanjiRelationship("真", []),
]

const mockHierarchy: VocabHierarchy = {
  vocabulary: mockVocabRelationships,
  kanji: mockKanjiRelationships,
  radicals: ["人", "口", "水"], // Just the radical characters
}

const mockVocabularyItems: VocabularyItem[] = [
  { word: "食べる", furigana: "食[た]べる", english: ["to eat", "eat"] },
  { word: "飲む", furigana: "飲[の]む", english: ["to drink", "drink"] },
  {
    word: "見る",
    furigana: "見[み]る",
    english: ["to see", "to watch", "see", "watch"],
  },
  { word: "due1", furigana: "due1", english: ["due1_meaning"] },
  { word: "due2", furigana: "due2", english: ["due2_meaning"] },
  { word: "写", furigana: "写", english: ["copy", "be photographed"] },
  { word: "真", furigana: "真", english: ["true", "reality"] },
]

// Helper to create moduleData
const createModuleData = (
  vocabulary: VocabularyItem[] = mockVocabularyItems,
  kanji: KanjiEntry[] = mockKanjiEntries,
  radicals: RadicalEntry[] = mockRadicalEntries,
  fsrsCards: FSRSCardData[] = [],
): PracticeItemData => ({
  vocabulary,
  kanji,
  radicals,
  fsrsCards,
})

// Helper to create nonModuleData
const createNonModuleData = (
  vocabulary: VocabularyItem[] = [],
  kanji: KanjiEntry[] = [],
  radicals: RadicalEntry[] = [],
  fsrsCards: FSRSCardData[] = [],
): PracticeItemData => ({
  vocabulary,
  kanji,
  radicals,
  fsrsCards,
})

// --- Global Mocks for WaniKani Utils ---
vi.mock("@/data/wanikani/utils", () => {
  const internalMockRadicals: RadicalEntry[] = [
    {
      radical: "人",
      meanings: ["person", "human"],
      meaning_mnemonic: "Mnemonic for 人",
    },
    { radical: "口", meanings: ["mouth"], meaning_mnemonic: "Mnemonic for 口" },
    { radical: "水", meanings: ["water"], meaning_mnemonic: "Mnemonic for 水" },
  ]

  const internalMockKanji: KanjiEntry[] = [
    {
      kanji: "食",
      meanings: ["food", "meal"],
      radicalComponents: ["人", "口"],
      meaning_mnemonic: "Mnemonic for 食",
      reading_mnemonic: "Mnemonic for 食 reading",
    },
    {
      kanji: "飲",
      meanings: ["drink"],
      radicalComponents: ["水"],
      meaning_mnemonic: "Mnemonic for 飲",
      reading_mnemonic: "Mnemonic for 飲 reading",
    },
    {
      kanji: "見",
      meanings: ["see", "look"],
      radicalComponents: ["人"],
      meaning_mnemonic: "Mnemonic for 見",
      reading_mnemonic: "Mnemonic for 見 reading",
    },
    {
      kanji: "写",
      meanings: ["copy", "be photographed"],
      radicalComponents: [],
      meaning_mnemonic: "Mnemonic for 写",
      reading_mnemonic: "Mnemonic for 写 reading",
    },
    {
      kanji: "真",
      meanings: ["true", "reality"],
      radicalComponents: [],
      meaning_mnemonic: "Mnemonic for 真",
      reading_mnemonic: "Mnemonic for 真 reading",
    },
  ]

  const mockKanjiDetailsMap = new Map<string, KanjiEntry>(
    internalMockKanji.map((k) => [k.kanji, k]),
  )
  const mockRadicalDetailsMap = new Map<string, RadicalEntry>(
    internalMockRadicals.map((r) => [r.radical, r]),
  )

  return {
    getWKItemsBySlugs: vi.fn(async (data) => {
      return {
        kanji: (data.kanji || [])
          .map((slug: string) => mockKanjiDetailsMap.get(slug))
          .filter(Boolean),
        radicals: (data.radicals || [])
          .map((slug: string) => mockRadicalDetailsMap.get(slug))
          .filter(Boolean),
      }
    }),
  }
})

describe("Data Initialization", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  describe("hierarchy processing and card creation", () => {
    it("should create cards for all hierarchy items with correct keys and types", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false, // shuffle
        true, // enablePrerequisites
      )

      const expectedCardKeys = [
        "vocabulary:食べる",
        "vocabulary:飲む",
        "vocabulary:見る",
        "kanji:食",
        "kanji:飲",
        "kanji:見",
        "kanji:写",
        "kanji:真",
        "radical:人",
        "radical:口",
        "radical:水",
      ]

      expect(result.cardMap.size).toBe(expectedCardKeys.length)
      expectedCardKeys.forEach((key) => {
        expect(result.cardMap.has(key)).toBe(true)
      })

      expect(result.cardMap.get("vocabulary:食べる")?.practiceItemType).toBe(
        "vocabulary",
      )
      expect(result.cardMap.get("kanji:食")?.practiceItemType).toBe("kanji")
      expect(result.cardMap.get("radical:人")?.practiceItemType).toBe("radical")

      expect(result.cardMap.get("vocabulary:食べる")?.sessionScope).toBe(
        "module",
      )
    })

    it("should handle duplicate keys between module and due cards correctly", () => {
      const duplicateDueCards: FSRSCardData[] = [
        createMockFSRSCard("食べる", "meanings", "vocabulary"),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(mockVocabularyItems, [], [], duplicateDueCards),
        "meanings",
        false,
        true,
      )

      expect(result.cardMap.has("vocabulary:食べる")).toBe(true)
      expect(result.cardMap.get("vocabulary:食べる")?.sessionScope).toBe(
        "module",
      )
      expect(result.reviewQueue).not.toContain("vocabulary:食べる")
    })

    it("should process standalone due review cards", () => {
      const mockDueFSRSCards: FSRSCardData[] = [
        createMockFSRSCard("due1", "meanings", "vocabulary"),
        createMockFSRSCard("due2", "meanings", "vocabulary"),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(mockVocabularyItems, [], [], mockDueFSRSCards),
        "meanings",
        false,
        true,
      )

      expect(result.cardMap.has("vocabulary:due1")).toBe(true)
      expect(result.cardMap.has("vocabulary:due2")).toBe(true)

      expect(result.cardMap.get("vocabulary:due1")?.sessionScope).toBe("review")
      expect(result.cardMap.get("vocabulary:due2")?.sessionScope).toBe("review")

      expect(result.reviewQueue).toEqual(
        expect.arrayContaining(["vocabulary:due1", "vocabulary:due2"]),
      )
    })
  })

  describe("dependency management", () => {
    it("should build correct dependency relationships", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      expect(result.dependencyMap.get("vocabulary:食べる")).toContain(
        "kanji:食",
      )
      expect(result.dependencyMap.get("vocabulary:飲む")).toContain("kanji:飲")
      expect(result.dependencyMap.get("vocabulary:見る")).toContain("kanji:見")

      expect(result.dependencyMap.get("kanji:食")).toEqual(
        expect.arrayContaining(["radical:人", "radical:口"]),
      )
      expect(result.dependencyMap.get("kanji:飲")).toContain("radical:水")
      expect(result.dependencyMap.get("kanji:見")).toContain("radical:人")

      expect(result.unlocksMap.get("kanji:食")).toContain("vocabulary:食べる")
      expect(result.unlocksMap.get("radical:人")).toEqual(
        expect.arrayContaining(["kanji:食", "kanji:見"]),
      )
    })

    it("should lock cards with dependencies and unlock cards without", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const lockedCards = [
        "vocabulary:食べる",
        "vocabulary:飲む",
        "vocabulary:見る",
        "kanji:食",
        "kanji:飲",
        "kanji:見",
      ]
      lockedCards.forEach((key) => {
        expect(result.lockedKeys.has(key)).toBe(true)
      })

      const unlockedCards = [
        "radical:人",
        "radical:口",
        "radical:水",
        "kanji:写",
        "kanji:真",
      ]
      unlockedCards.forEach((key) => {
        expect(result.lockedKeys.has(key)).toBe(false)
      })

      expect(result.moduleQueue).toHaveLength(unlockedCards.length)
      expect(result.moduleQueue).toEqual(expect.arrayContaining(unlockedCards))
    })
  })
  describe("edge cases", () => {
    it("should handle various edge scenarios", () => {
      const edgeCases = [
        {
          name: "empty hierarchy",
          hierarchy: { vocabulary: [], kanji: [], radicals: [] },
          moduleData: createModuleData([], [], []),
          nonModuleData: createNonModuleData(),
          expectation: (result: any) => {
            expect(result.cardMap.size).toBe(0)
            expect(result.moduleQueue).toHaveLength(0)
            expect(result.reviewQueue).toHaveLength(0)
          },
        },
        {
          name: "hierarchy with no dependencies",
          hierarchy: {
            vocabulary: [],
            kanji: [],
            radicals: ["人", "口", "水"],
          },
          moduleData: createModuleData([], [], mockRadicalEntries),
          nonModuleData: createNonModuleData(),
          expectation: (result: any) => {
            expect(result.cardMap.size).toBe(3)
            expect(result.moduleQueue).toHaveLength(3)
            expect(result.lockedKeys.size).toBe(0)
          },
        },
        {
          name: "only due cards",
          hierarchy: { vocabulary: [], kanji: [], radicals: [] },
          moduleData: createModuleData([], [], []),
          nonModuleData: createNonModuleData(
            mockVocabularyItems,
            [],
            [],
            [createMockFSRSCard("due1", "meanings", "vocabulary")],
          ),
          expectation: (result: any) => {
            expect(result.cardMap.size).toBe(1)
            expect(result.reviewQueue).toContain("vocabulary:due1")
            expect(result.cardMap.get("vocabulary:due1")?.sessionStyle).toBe(
              "flashcard",
            )
          },
        },
      ]

      for (const {
        hierarchy,
        moduleData,
        nonModuleData,
        expectation,
      } of edgeCases) {
        const result = initializePracticeSession(
          hierarchy as VocabHierarchy,
          moduleData,
          nonModuleData,
          "meanings",
          false,
          true,
        )
        expectation(result)
      }
    })
  })

  describe("FSRS data handling", () => {
    it("should preserve and filter FSRS data correctly", () => {
      const mockModuleFSRSCards: FSRSCardData[] = [
        createMockFSRSCard("食べる", "meanings", "vocabulary", State.Review),
        createMockFSRSCard("食", "meanings", "kanji", State.New),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          mockModuleFSRSCards,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const vocabCard = result.cardMap.get("vocabulary:食べる")
      const kanjiCard = result.cardMap.get("kanji:食")

      expect(vocabCard?.fsrs.card).toBe(mockModuleFSRSCards[0].fsrs_card)
      expect(kanjiCard?.fsrs.card).toBe(mockModuleFSRSCards[1].fsrs_card)
      expect(vocabCard?.fsrs.logs).toHaveLength(1)
      expect(kanjiCard?.fsrs.logs).toHaveLength(0)
    })

    it("should filter incoming FSRS data by the current session mode", () => {
      const mixedModeFSRSCards: FSRSCardData[] = [
        createMockFSRSCard("食べる", "meanings", "vocabulary"),
        createMockFSRSCard("食べる", "spellings", "vocabulary"),
        createMockFSRSCard("食", "meanings", "kanji"),
        createMockFSRSCard("食", "spellings", "kanji"),
      ]

      mixedModeFSRSCards[0].fsrs_card.stability = 10
      mixedModeFSRSCards[1].fsrs_card.stability = 50
      mixedModeFSRSCards[2].fsrs_card.stability = 20
      mixedModeFSRSCards[3].fsrs_card.stability = 60

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          mixedModeFSRSCards,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const vocabCard = result.cardMap.get("vocabulary:食べる")
      const kanjiCard = result.cardMap.get("kanji:食")

      expect(vocabCard?.fsrs.card.stability).toBe(10)
      expect(kanjiCard?.fsrs.card.stability).toBe(20)
    })
  })

  describe("session style assignment", () => {
    it("should assign correct session styles based on card state and type", () => {
      const testCases = [
        {
          name: "new module cards get multiple-choice or introduction",
          moduleData: createModuleData(),
          nonModuleData: createNonModuleData(),
          expectations: [
            { key: "vocabulary:食べる", style: "multiple-choice" },
            { key: "kanji:食", style: "introduction" },
            { key: "radical:人", style: "introduction" },
          ],
        },
        {
          name: "core vocab in review state stays multiple-choice",
          moduleData: createModuleData(
            mockVocabularyItems,
            mockKanjiEntries,
            mockRadicalEntries,
            [
              createMockFSRSCard(
                "食べる",
                "meanings",
                "vocabulary",
                State.Review,
              ),
            ],
          ),
          nonModuleData: createNonModuleData(),
          expectations: [
            { key: "vocabulary:食べる", style: "multiple-choice" },
          ],
        },
        {
          name: "dependency cards in review state become flashcard",
          moduleData: createModuleData(
            mockVocabularyItems,
            mockKanjiEntries,
            mockRadicalEntries,
            [createMockFSRSCard("食", "meanings", "kanji", State.Review)],
          ),
          nonModuleData: createNonModuleData(),
          expectations: [{ key: "kanji:食", style: "flashcard" }],
        },
        {
          name: "due review cards are flashcard",
          moduleData: createModuleData(),
          nonModuleData: createNonModuleData(
            mockVocabularyItems,
            [],
            [],
            [createMockFSRSCard("due1", "meanings", "vocabulary")],
          ),
          expectations: [{ key: "vocabulary:due1", style: "flashcard" }],
        },
      ]

      for (const { moduleData, nonModuleData, expectations } of testCases) {
        const result = initializePracticeSession(
          mockHierarchy,
          moduleData,
          nonModuleData,
          "meanings",
          false,
          true,
        )

        expectations.forEach(({ key, style }) => {
          expect(result.cardMap.get(key)?.sessionStyle).toBe(style)
        })
      }
    })
  })

  describe("queue initialization", () => {
    it("should initialize queues correctly", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      // radicals + standalone kanji (写, 真) should be in moduleQueue
      expect(result.moduleQueue).toHaveLength(5)
      expect(result.moduleQueue).toEqual(
        expect.arrayContaining([
          "radical:人",
          "radical:口",
          "radical:水",
          "kanji:写",
          "kanji:真",
        ]),
      )
      expect(result.reviewQueue).toHaveLength(0)
      expect(result.activeQueue).toHaveLength(0)
      expect(result.isFinished).toBe(false)
    })

    it("should handle cards already in Review state", () => {
      const reviewStateFSRS: FSRSCardData[] = [
        createMockFSRSCard("人", "meanings", "radical", State.Review),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          reviewStateFSRS,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const reviewCard = result.cardMap.get("radical:人")
      expect(reviewCard?.sessionStyle).toBe("flashcard")
      expect(result.moduleQueue).toContain("radical:人")
    })
  })
  describe("card disabling functionality", () => {
    it("should mark cards as disabled when prerequisites aren't due", () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 1)

      const fsrsCardsWithFutureDates: FSRSCardData[] = [
        {
          ...createMockFSRSCard("人", "meanings", "radical", State.Review),
          fsrs_card: {
            ...createMockFSRSCard("人", "meanings", "radical", State.Review)
              .fsrs_card,
            due: futureDate,
          },
        },
        {
          ...createMockFSRSCard("口", "meanings", "radical", State.Review),
          fsrs_card: {
            ...createMockFSRSCard("口", "meanings", "radical", State.Review)
              .fsrs_card,
            due: futureDate,
          },
        },
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          fsrsCardsWithFutureDates,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      expect(result.cardMap.get("radical:人")?.isDisabled).toBe(true)
      expect(result.cardMap.get("radical:口")?.isDisabled).toBe(true)
      expect(result.cardMap.get("radical:水")?.isDisabled).toBe(false)
    })

    it("should populate unlocksMap even for disabled cards", () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 1)

      const fsrsCardsWithFutureDates: FSRSCardData[] = [
        {
          ...createMockFSRSCard("人", "meanings", "radical", State.Review),
          fsrs_card: {
            ...createMockFSRSCard("人", "meanings", "radical", State.Review)
              .fsrs_card,
            due: futureDate,
          },
        },
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          fsrsCardsWithFutureDates,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      expect(result.unlocksMap.get("radical:人")).toEqual(
        expect.arrayContaining(["kanji:食", "kanji:見"]),
      )
      expect(result.dependencyMap.get("kanji:食")).toEqual(["radical:口"])
      expect(result.dependencyMap.get("kanji:見")).toBeUndefined()
    })

    it("should exclude disabled cards from queues", () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 1)

      const fsrsCardsWithFutureDates: FSRSCardData[] = [
        {
          ...createMockFSRSCard("人", "meanings", "radical", State.Review),
          fsrs_card: {
            ...createMockFSRSCard("人", "meanings", "radical", State.Review)
              .fsrs_card,
            due: futureDate,
          },
        },
        {
          ...createMockFSRSCard("口", "meanings", "radical", State.Review),
          fsrs_card: {
            ...createMockFSRSCard("口", "meanings", "radical", State.Review)
              .fsrs_card,
            due: futureDate,
          },
        },
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          fsrsCardsWithFutureDates,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      expect(result.moduleQueue).not.toContain("radical:人")
      expect(result.moduleQueue).not.toContain("radical:口")
      expect(result.reviewQueue).not.toContain("radical:人")
      expect(result.reviewQueue).not.toContain("radical:口")

      expect(result.moduleQueue).toContain("radical:水")
      expect(result.moduleQueue).toContain("kanji:食")
      expect(result.moduleQueue).toContain("kanji:見")
    })

    it("should keep disabled cards in cardMap", () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 1)

      const fsrsCardsWithFutureDates: FSRSCardData[] = [
        {
          ...createMockFSRSCard("人", "meanings", "radical", State.Review),
          fsrs_card: {
            ...createMockFSRSCard("人", "meanings", "radical", State.Review)
              .fsrs_card,
            due: futureDate,
          },
        },
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(
          mockVocabularyItems,
          mockKanjiEntries,
          mockRadicalEntries,
          fsrsCardsWithFutureDates,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      expect(result.cardMap.has("radical:人")).toBe(true)
      expect(result.cardMap.get("radical:人")?.isDisabled).toBe(true)

      const expectedCardKeys = [
        "vocabulary:食べる",
        "vocabulary:飲む",
        "vocabulary:見る",
        "kanji:食",
        "kanji:飲",
        "kanji:見",
        "kanji:写",
        "kanji:真",
        "radical:人",
        "radical:口",
        "radical:水",
      ]
      expect(result.cardMap.size).toBe(expectedCardKeys.length)
      expectedCardKeys.forEach((key) => {
        expect(result.cardMap.has(key)).toBe(true)
      })
    })
  })

  describe("complex dependency chains", () => {
    it("should handle complex dependency chains", () => {
      const complexKanji: KanjiEntry = createMockKanji(
        "複",
        ["complex", "duplicate"],
        ["人", "口", "水"],
      )
      const complexVocabRelationship: VocabRelationship =
        createMockVocabRelationship("複雑", ["複", "食"])
      const complexKanjiRelationship: KanjiRelationship =
        createMockKanjiRelationship("複", ["人", "口", "水"])

      const complexHierarchy: VocabHierarchy = {
        vocabulary: [complexVocabRelationship],
        kanji: [...mockKanjiRelationships, complexKanjiRelationship],
        radicals: ["人", "口", "水"],
      }

      const complexVocabularyItems: VocabularyItem[] = [
        ...mockVocabularyItems,
        {
          word: "複雑",
          furigana: "複[ふく]雑[ざつ]",
          english: ["complex", "complicated"],
        },
      ]

      const complexKanjiEntries = [...mockKanjiEntries, complexKanji]

      const result = initializePracticeSession(
        complexHierarchy,
        createModuleData(
          complexVocabularyItems,
          complexKanjiEntries,
          mockRadicalEntries,
        ),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      expect(result.dependencyMap.get("vocabulary:複雑")).toEqual(
        expect.arrayContaining(["kanji:複", "kanji:食"]),
      )
      expect(result.dependencyMap.get("kanji:複")).toEqual(
        expect.arrayContaining(["radical:人", "radical:口", "radical:水"]),
      )

      expect(result.moduleQueue).toHaveLength(5)
      expect(result.lockedKeys.has("vocabulary:複雑")).toBe(true)
      expect(result.lockedKeys.has("kanji:複")).toBe(true)
      expect(result.lockedKeys.has("kanji:食")).toBe(true)
    })
  })

  describe("prompt and validAnswers correctness", () => {
    it("should set correct prompt and validAnswers for vocabulary in meanings mode", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const vocabCard = result.cardMap.get("vocabulary:食べる")
      expect(vocabCard).toBeDefined()
      expect(vocabCard!.prompt).toBe("食べる")
      expect(vocabCard!.validAnswers).toEqual(["to eat", "eat"])
    })

    it("should set correct prompt and validAnswers for vocabulary in spellings mode", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "spellings",
        false,
        false, // disable prerequisites for spellings mode
      )

      const vocabCard = result.cardMap.get("vocabulary:食べる")
      expect(vocabCard).toBeDefined()
      expect(vocabCard!.prompt).toBe("to eat, eat")
      expect(vocabCard!.validAnswers).toContain("たべる")
    })

    it("should set correct prompt and validAnswers for kanji cards", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const kanjiCard = result.cardMap.get("kanji:食")
      expect(kanjiCard).toBeDefined()
      expect(kanjiCard!.prompt).toBe("食")
      expect(kanjiCard!.validAnswers).toEqual(["food", "meal"])
    })

    it("should set correct prompt and validAnswers for radical cards", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      const radicalCard = result.cardMap.get("radical:人")
      expect(radicalCard).toBeDefined()
      expect(radicalCard!.prompt).toBe("人")
      expect(radicalCard!.validAnswers).toEqual(["person", "human"])
    })

    it("should never have prompt equal to any validAnswer", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "meanings",
        false,
        true,
      )

      for (const [key, card] of result.cardMap.entries()) {
        const promptInAnswers = card.validAnswers.includes(card.prompt)
        expect(promptInAnswers).toBe(false)
      }
    })

    it("should never have prompt equal to any validAnswer in spellings mode", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(),
        "spellings",
        false,
        false,
      )

      for (const [key, card] of result.cardMap.entries()) {
        const promptInAnswers = card.validAnswers.includes(card.prompt)
        expect(promptInAnswers).toBe(false)
      }
    })
  })

  describe("review queue filtering", () => {
    it("should filter review queue by due date and session mode", () => {
      const pastDate = new Date(Date.now() - 86400000)
      const futureDate = new Date(Date.now() + 86400000)

      const cards: FSRSCardData[] = [
        {
          ...createMockFSRSCard("due1", "meanings", "vocabulary"),
          fsrs_card: {
            ...createMockFSRSCard("due1", "meanings", "vocabulary").fsrs_card,
            due: pastDate,
          },
        },
        {
          ...createMockFSRSCard("future1", "meanings", "vocabulary"),
          fsrs_card: {
            ...createMockFSRSCard("future1", "meanings", "vocabulary")
              .fsrs_card,
            due: futureDate,
          },
        },
        {
          ...createMockFSRSCard("due2", "spellings", "vocabulary"),
          fsrs_card: {
            ...createMockFSRSCard("due2", "spellings", "vocabulary").fsrs_card,
            due: pastDate,
          },
        },
      ]

      const vocabItems = [
        ...mockVocabularyItems,
        { word: "due1", furigana: "due1", english: ["test"] },
        { word: "future1", furigana: "future1", english: ["test"] },
        { word: "due2", furigana: "due2", english: ["test"] },
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(vocabItems, [], [], cards),
        "meanings",
        false,
        true,
      )

      expect(result.reviewQueue).toEqual(["vocabulary:due1"])
      expect(result.cardMap.size).toBe(12) // 11 hierarchy + 1 review card
    })

    it("should exclude review cards when includeReviews is false", () => {
      const pastDate = new Date()
      pastDate.setDate(pastDate.getDate() - 1)

      const dueReviewCard: FSRSCardData = {
        ...createMockFSRSCard("外部", "meanings", "vocabulary"),
        fsrs_card: {
          ...createMockFSRSCard("外部", "meanings", "vocabulary").fsrs_card,
          due: pastDate,
        },
      }

      const externalVocab = {
        word: "外部",
        furigana: "外部[がいぶ]",
        english: ["external"],
      }

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(
          [...mockVocabularyItems, externalVocab],
          [],
          [],
          [dueReviewCard],
        ),
        "meanings",
        false,
        true,
        false, // includeReviews: false
      )

      expect(result.reviewQueue).toEqual([])
    })

    it("should include review cards when includeReviews is true", () => {
      const pastDate = new Date()
      pastDate.setDate(pastDate.getDate() - 1)

      const dueReviewCard: FSRSCardData = {
        ...createMockFSRSCard("外部", "meanings", "vocabulary"),
        fsrs_card: {
          ...createMockFSRSCard("外部", "meanings", "vocabulary").fsrs_card,
          due: pastDate,
        },
      }

      const externalVocab = {
        word: "外部",
        furigana: "外部[がいぶ]",
        english: ["external"],
      }

      const result = initializePracticeSession(
        mockHierarchy,
        createModuleData(),
        createNonModuleData(
          [...mockVocabularyItems, externalVocab],
          [],
          [],
          [dueReviewCard],
        ),
        "meanings",
        false,
        true,
        true, // includeReviews: true
      )

      expect(result.reviewQueue).toEqual(["vocabulary:外部"])
    })
  })
})
