// src/features/resolvers/kanji/stacking.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest"
import type {
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"
import type { Stack } from "@/features/resolvers/types"
import { resolveKanjiEntries, mergeKanjiProperties } from "./stacking"
import { DEFAULT_KANJI_STACKS } from "@/features/main-cookies/schemas/user-settings"

// Mock the WaniKani utils
vi.mock("@/data/wanikani/utils", () => ({
  getWKItemsBySlugs: vi.fn(),
}))

// Mock data constants
const MOCK_JPDB_DATA = {
  PERSON_COMPLETE: {
    character: "人",
    meanings: ["person", "human"],
    meaning_mnemonic: "JPDB person mnemonic",
    reading_mnemonic: "JPDB reading mnemonic", // Complete data for early termination test
  },
  WATER_PARTIAL: {
    character: "水",
    meanings: ["water"],
    meaning_mnemonic: "JPDB water mnemonic",
    // Partial data - no reading_mnemonic
  },
} as const

// Create mock JSON loader for tests
const createMockJsonLoader = (
  mockData: Array<{
    character: string
    meanings?: string[]
    meaning_mnemonic?: string
    reading_mnemonic?: string
  }>,
) => {
  return async (stacks: Stack[]) => {
    const result = new Map<string, Map<string, any>>()

    stacks.forEach((stack) => {
      if (stack.sourceId.endsWith(".json")) {
        const itemMap = new Map<string, any>()
        mockData.forEach((item) => {
          itemMap.set(item.character, {
            meanings: item.meanings,
            meaning_mnemonic: item.meaning_mnemonic,
            reading_mnemonic: item.reading_mnemonic,
          })
        })
        result.set(stack.sourceId, itemMap)
      }
    })

    return result
  }
}

import { getWKItemsBySlugs } from "@/data/wanikani/utils"

const mockGetWKItemsBySlugs = vi.mocked(getWKItemsBySlugs)

describe("Kanji Stacking", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("resolveKanjiEntries", () => {
    it("should return empty map for empty input", async () => {
      const result = await resolveKanjiEntries([], [])
      expect(result).toEqual(new Map())
      expect(mockGetWKItemsBySlugs).not.toHaveBeenCalled()
    })

    it("should resolve single character with WaniKani fallback", async () => {
      const mockKanjiData: KanjiEntry = {
        kanji: "人",
        radicalComponents: ["亻"],
        meanings: ["person"],
        meaning_mnemonic: "WK person mnemonic",
        reading_mnemonic: "WK reading mnemonic",
      }

      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [mockKanjiData],
        radicals: [],
      })

      const stacks: Stack[] = [
        {
          name: "WaniKani",
          enabled: true,
          locked: true,
          sourceId: "wanikani.db",
          priority: 999,
        },
      ]

      const result = await resolveKanjiEntries(["人"], stacks)

      expect(result.size).toBe(1)
      expect(result.get("人")).toEqual(mockKanjiData)
      expect(mockGetWKItemsBySlugs).toHaveBeenCalledWith({
        data: { kanji: ["人"], radicals: ["人"] },
      })
    })

    it("should process multiple characters in batch", async () => {
      const mockKanjiData: KanjiEntry = {
        kanji: "人",
        radicalComponents: ["亻"],
        meanings: ["person"],
        meaning_mnemonic: "WK person mnemonic",
        reading_mnemonic: "WK reading mnemonic",
      }

      const mockRadicalData: RadicalEntry = {
        radical: "水",
        meanings: ["water"],
        meaning_mnemonic: "WK water mnemonic",
      }

      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [mockKanjiData],
        radicals: [mockRadicalData],
      })

      const stacks: Stack[] = [DEFAULT_KANJI_STACKS[1]] // WaniKani stack only

      const result = await resolveKanjiEntries(["人", "水"], stacks)

      expect(result.size).toBe(2)
      expect(result.get("人")).toEqual(mockKanjiData)
      expect(result.get("水")).toEqual(mockRadicalData)
      expect(mockGetWKItemsBySlugs).toHaveBeenCalledOnce()
    })

    it("should respect stack priority (lower number = higher precedence)", async () => {
      const mockWKData: KanjiEntry = {
        kanji: "優",
        radicalComponents: ["亻", "憂"],
        meanings: ["gentle", "superior"], // WK data
        meaning_mnemonic: "WaniKani mnemonic for 優",
        reading_mnemonic: "WaniKani reading for 優",
      }

      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [mockWKData],
        radicals: [],
      })

      const mockJsonData = new Map([
        [
          "custom-overrides.json",
          new Map([
            [
              "優",
              {
                meanings: ["excellent", "actor"], // JSON override data
                meaning_mnemonic: "Custom mnemonic for 優",
                // Note: no reading_mnemonic - should come from WK
              },
            ],
          ]),
        ],
      ])

      const mockJsonLoader = async () => mockJsonData

      const stacks: Stack[] = [
        {
          name: "Custom Overrides",
          enabled: true,
          locked: false,
          sourceId: "custom-overrides.json",
          priority: 200, // Higher precedence than WaniKani
        },
        {
          name: "WaniKani",
          enabled: true,
          locked: true,
          sourceId: "wanikani.db",
          priority: 800, // Lower precedence
        },
      ]

      const result = await resolveKanjiEntries(["優"], stacks, mockJsonLoader)
      const resolved = result.get("優")

      expect(resolved).toBeDefined()
      // JSON data should override WK data due to higher priority
      expect(resolved?.meanings).toEqual(["excellent", "actor"]) // From JSON, not WK
      expect(resolved?.meaning_mnemonic).toBe("Custom mnemonic for 優") // From JSON
      // reading_mnemonic should come from WK since JSON doesn't provide it
      expect((resolved as KanjiEntry)?.reading_mnemonic).toBe(
        "WaniKani reading for 優",
      )
    })

    it("should merge properties across stacks and terminate early when complete", async () => {
      // Need to provide minimal WaniKani data so it knows "人" is a kanji type
      const mockKanjiData: KanjiEntry = {
        kanji: "人",
        radicalComponents: ["亻"],
        meanings: ["person"],
        meaning_mnemonic: "WK mnemonic",
        reading_mnemonic: "WK reading",
      }

      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [mockKanjiData],
        radicals: [],
      })

      const stacks: Stack[] = [
        {
          name: "Complete JSON",
          enabled: true,
          locked: false,
          sourceId: "jpdb-keywords.json",
          priority: 100,
        },
        {
          name: "Should not be reached",
          enabled: true,
          locked: false,
          sourceId: "jpdb-keywords.json",
          priority: 200,
        },
      ]

      // Create mock loader with complete JPDB data
      const mockLoader = createMockJsonLoader([MOCK_JPDB_DATA.PERSON_COMPLETE])

      const result = await resolveKanjiEntries(["人"], stacks, mockLoader)
      const resolved = result.get("人")

      expect(resolved).toBeDefined()
      expect(resolved?.meanings).toEqual(["person", "human"]) // From JPDB (higher priority)
      expect(resolved?.meaning_mnemonic).toBe("JPDB person mnemonic") // From JPDB
      expect((resolved as KanjiEntry)?.reading_mnemonic).toBe(
        "JPDB reading mnemonic",
      ) // From JPDB (complete data)
    })

    it("should determine type correctly (kanji vs radical)", async () => {
      const mockKanjiData: KanjiEntry = {
        kanji: "人",
        radicalComponents: ["亻"], // Has radicalComponents = kanji
        meanings: ["person"],
        meaning_mnemonic: "WK mnemonic",
        reading_mnemonic: "WK reading",
      }

      const mockRadicalData: RadicalEntry = {
        radical: "水",
        meanings: ["water"],
        meaning_mnemonic: "WK mnemonic",
        // No radicalComponents = radical
      }

      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [mockKanjiData],
        radicals: [mockRadicalData],
      })

      const stacks: Stack[] = [DEFAULT_KANJI_STACKS[1]] // WaniKani only

      const result = await resolveKanjiEntries(["人", "水"], stacks)

      const kanjiResult = result.get("人")
      const radicalResult = result.get("水")

      expect(kanjiResult).toBeDefined()
      expect("radicalComponents" in kanjiResult!).toBe(true) // Is kanji
      expect((kanjiResult as KanjiEntry).radicalComponents).toEqual(["亻"])

      expect(radicalResult).toBeDefined()
      expect("radicalComponents" in radicalResult!).toBe(false) // Is radical
      expect((radicalResult as RadicalEntry).radical).toBe("水")
    })

    it("should use WaniKani fallback when stacks have incomplete properties", async () => {
      const mockWKData: KanjiEntry = {
        kanji: "水",
        radicalComponents: ["氵"],
        meanings: ["water", "aqua"],
        meaning_mnemonic: "WK water mnemonic",
        reading_mnemonic: "WK water reading",
      }

      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [mockWKData],
        radicals: [],
      })

      const stacks: Stack[] = [
        {
          name: "Partial JSON",
          enabled: true,
          locked: false,
          sourceId: "jpdb-keywords.json", // Only has meanings for 水
          priority: 100,
        },
        {
          name: "WaniKani",
          enabled: true,
          locked: true,
          sourceId: "wanikani.db",
          priority: 999,
        },
      ]

      // Create mock loader with partial JPDB data (no reading_mnemonic)
      const mockLoader = createMockJsonLoader([MOCK_JPDB_DATA.WATER_PARTIAL])

      const result = await resolveKanjiEntries(["水"], stacks, mockLoader)
      const resolved = result.get("水")

      expect(resolved).toBeDefined()
      expect(resolved?.meanings).toEqual(["water"]) // From JPDB (higher priority)
      expect(resolved?.meaning_mnemonic).toBe("JPDB water mnemonic") // From JPDB
      expect((resolved as KanjiEntry)?.reading_mnemonic).toBe(
        "WK water reading",
      ) // From WK (fallback)
    })

    it("should skip disabled stacks", async () => {
      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [],
        radicals: [],
      })

      const stacks: Stack[] = [
        {
          name: "Disabled Stack",
          enabled: false, // Should be skipped
          locked: false,
          sourceId: "jpdb-keywords.json",
          priority: 100,
        },
      ]

      // Create mock loader - but it shouldn't be used since stack is disabled
      const mockLoader = createMockJsonLoader([MOCK_JPDB_DATA.PERSON_COMPLETE])

      const result = await resolveKanjiEntries(["人"], stacks, mockLoader)

      expect(result.size).toBe(0) // No results since stack was disabled
    })

    it("should handle missing data gracefully", async () => {
      mockGetWKItemsBySlugs.mockResolvedValue({
        kanji: [],
        radicals: [],
      })

      const stacks: Stack[] = [
        {
          name: "JPDB Stack",
          enabled: true,
          locked: false,
          sourceId: "jpdb-keywords.json", // Valid JSON but character not found
          priority: 100,
        },
      ]

      // Create mock loader with different characters - requested character not found
      const mockLoader = createMockJsonLoader([MOCK_JPDB_DATA.PERSON_COMPLETE])

      const result = await resolveKanjiEntries(["非存在"], stacks, mockLoader) // Character not in mock data
      expect(result.size).toBe(0) // Character not found in any source
    })
  })

  describe("mergeKanjiProperties", () => {
    it("should merge properties with override precedence", () => {
      const base: KanjiEntry = {
        kanji: "人",
        radicalComponents: ["亻"],
        meanings: ["person"],
        meaning_mnemonic: "base mnemonic",
        reading_mnemonic: "base reading",
      }

      const override: Partial<KanjiEntry> = {
        meanings: ["human", "individual"],
        meaning_mnemonic: "override mnemonic",
        // reading_mnemonic not provided - should use base
      }

      const result = mergeKanjiProperties(base, override)

      expect(result).toEqual({
        kanji: "人",
        radicalComponents: ["亻"],
        meanings: ["human", "individual"], // From override
        meaning_mnemonic: "override mnemonic", // From override
        reading_mnemonic: "base reading", // From base
      })
    })
  })
})
