// src/features/resolvers/kanji/index.ts
import { createServerFn } from "@tanstack/solid-start"
import { buildVocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import { getWKItemsBySlugs } from "@/data/wanikani/utils"
import type {
  VocabHierarchy,
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"

/**
 * Get vocabulary hierarchy with kanji and radical dependencies
 */
export const getVocabHierarchy = createServerFn({ method: "GET" })
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }): Promise<VocabHierarchy | null> => {
    if (!slugs || slugs.length === 0) return null

    try {
      // TODO: Add override stacking logic here before building hierarchy
      const cleanHierarchy = await buildVocabHierarchy(slugs)
      return cleanHierarchy
    } catch (error) {
      console.error("Failed to build vocab hierarchy:", error)
      return null
    }
  })

/**
 * Get detailed kanji and radical information by slugs
 */
export const getKanjiDetails = createServerFn({ method: "GET" })
  .validator((data: { kanji: string[]; radicals: string[] }) => data)
  .handler(
    async ({
      data,
    }): Promise<{ kanji: KanjiEntry[]; radicals: RadicalEntry[] }> => {
      // TODO: Add override stacking logic here before fetching data
      return getWKItemsBySlugs({ data })
    },
  )
