// src/features/resolvers/kanji/index.ts
import { createServerFn } from "@tanstack/solid-start"
import { buildVocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type {
  VocabHierarchy,
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"
import type { OverrideSettings } from "@/features/resolvers/types"
import { resolveKanjiEntries } from "./stacking"
import { DEFAULT_KANJI_STACKS } from "@/features/main-cookies/schemas/user-preferences"

/**
 * Get vocabulary hierarchy with kanji and radical dependencies
 */
export const getVocabHierarchy = createServerFn({ method: "GET" })
  .validator(
    (data: { slugs: string[]; userOverrides?: OverrideSettings }) => data,
  )
  .handler(
    async ({
      data: { slugs, userOverrides },
    }): Promise<VocabHierarchy | null> => {
      if (!slugs || slugs.length === 0) return null

      try {
        // For now, use existing hierarchy builder
        // TODO: Integrate stacking system into hierarchy building process
        const cleanHierarchy = await buildVocabHierarchy(slugs)
        return cleanHierarchy
      } catch (error) {
        console.error("Failed to build vocab hierarchy:", error)
        return null
      }
    },
  )

/**
 * Get detailed kanji and radical information by slugs with stacking support
 */
export const getKanjiDetails = createServerFn({ method: "GET" })
  .validator(
    (data: {
      kanji: string[]
      radicals: string[]
      userOverrides?: OverrideSettings
    }) => data,
  )
  .handler(
    async ({
      data: { kanji, radicals, userOverrides },
    }): Promise<{ kanji: KanjiEntry[]; radicals: RadicalEntry[] }> => {
      // Use stacking system with user overrides or default stacks
      const effectiveStacks =
        userOverrides?.kanjiOverrides ?? DEFAULT_KANJI_STACKS

      // Batch resolve all characters at once
      const allCharacters = [...kanji, ...radicals]
      const resolvedItems = await resolveKanjiEntries(
        allCharacters,
        effectiveStacks,
      )

      const resolvedKanji: KanjiEntry[] = []
      const resolvedRadicals: RadicalEntry[] = []

      // Process requested kanji characters
      for (const kanjiChar of kanji) {
        const item = resolvedItems.get(kanjiChar)
        if (item && "radicalComponents" in item) {
          resolvedKanji.push(item as KanjiEntry)
        } else if (item) {
          // If stacking returned a radical but we requested a kanji,
          // create a kanji entry (defaults to kanji if not found in WaniKani)
          resolvedKanji.push({
            kanji: kanjiChar,
            radicalComponents: [],
            meanings: item.meanings,
            meaning_mnemonic: item.meaning_mnemonic,
            reading_mnemonic: undefined, // RadicalEntry doesn't have reading_mnemonic
          })
        }
      }

      // Process requested radical characters
      for (const radicalChar of radicals) {
        const item = resolvedItems.get(radicalChar)
        if (item && !("radicalComponents" in item)) {
          resolvedRadicals.push(item as RadicalEntry)
        } else if (item) {
          // If stacking returned a kanji but we requested a radical,
          // create a radical entry from it
          resolvedRadicals.push({
            radical: radicalChar,
            meanings: item.meanings,
            meaning_mnemonic: item.meaning_mnemonic,
          })
        }
      }

      return {
        kanji: resolvedKanji,
        radicals: resolvedRadicals,
      }
    },
  )
