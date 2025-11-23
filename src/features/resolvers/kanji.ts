// src/features/resolvers/kanji.ts
import { createServerFn } from "@tanstack/solid-start"
import { buildVocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import { getWanikaniItems } from "@/data/wanikani/utils"
import type {
  VocabHierarchy,
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"

/**
 * Fetches kanji from WaniKani database
 * Future: Add user preference to choose between WaniKani/RTK
 */
export async function getKanjiFromDB(
  kanji: string[],
  radicals: string[],
): Promise<{ kanji: KanjiEntry[]; radicals: RadicalEntry[] }> {
  return getWanikaniItems({ data: { kanji, radicals } })
}

/**
 * Get vocabulary hierarchy with kanji and radical dependencies
 */
export const getVocabHierarchy = createServerFn({ method: "POST" })
  .inputValidator((data: { slugs: string[] }) => data)
  .handler(
    async ({ data: { slugs } }): Promise<VocabHierarchy | null> => {
      if (!slugs || slugs.length === 0) return null

      try {
        const cleanHierarchy = await buildVocabHierarchy(slugs)
        return cleanHierarchy
      } catch (error) {
        console.error("Failed to build vocab hierarchy:", error)
        return null
      }
    },
  )

/**
 * Get detailed kanji and radical information by slugs
 */
export const getKanjiDetails = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      kanji: string[]
      radicals: string[]
    }) => data,
  )
  .handler(
    async ({
      data: { kanji, radicals },
    }): Promise<{ kanji: KanjiEntry[]; radicals: RadicalEntry[] }> => {
      // Batch resolve all characters at once
      const resolvedItems = await getKanjiFromDB(kanji, radicals)

      const resolvedKanji: KanjiEntry[] = []
      const resolvedRadicals: RadicalEntry[] = []

      // Process requested kanji characters
      for (const kanjiChar of kanji) {
        const item = resolvedItems.kanji.find((k) => k.kanji === kanjiChar)
        if (item) {
          resolvedKanji.push(item)
        } else {
          // If not found, create a minimal entry
          resolvedKanji.push({
            kanji: kanjiChar,
            radicalComponents: [],
            meanings: [],
            meaning_mnemonic: undefined,
            reading_mnemonic: undefined,
          })
        }
      }

      // Process requested radical characters
      for (const radicalChar of radicals) {
        const item = resolvedItems.radicals.find(
          (r) => r.radical === radicalChar,
        )
        if (item) {
          resolvedRadicals.push(item)
        } else {
          // If not found, create a minimal entry
          resolvedRadicals.push({
            radical: radicalChar,
            meanings: [],
            meaning_mnemonic: undefined,
          })
        }
      }

      return {
        kanji: resolvedKanji,
        radicals: resolvedRadicals,
      }
    },
  )
