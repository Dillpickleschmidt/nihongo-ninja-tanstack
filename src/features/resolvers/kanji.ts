// src/features/resolvers/kanji.ts
import { buildVocabHierarchy } from "@/features/resolvers/util/hierarchy-builder"
import { getWanikaniItems } from "@/features/supabase/db/wanikani"
import type {
  VocabHierarchy,
  KanjiEntry,
  RadicalEntry,
} from "@/features/resolvers/util/hierarchy-builder"

/**
 * Ensure all requested kanji entries exist, creating minimal entries if not found
 */
function ensureKanjiEntries(
  requestedChars: string[],
  foundEntries: KanjiEntry[],
): KanjiEntry[] {
  return requestedChars.map((char) => {
    const found = foundEntries.find((k) => k.kanji === char)
    return (
      found ?? {
        kanji: char,
        radicalComponents: [],
        meanings: [],
        meaning_mnemonic: "",
      }
    )
  })
}

/**
 * Ensure all requested radical entries exist, creating minimal entries if not found
 */
function ensureRadicalEntries(
  requestedChars: string[],
  foundEntries: RadicalEntry[],
): RadicalEntry[] {
  return requestedChars.map((char) => {
    const found = foundEntries.find((r) => r.radical === char)
    return (
      found ?? {
        radical: char,
        meanings: [],
        meaning_mnemonic: "",
      }
    )
  })
}

/**
 * Get vocabulary hierarchy with kanji and radical dependencies
 * Returns both the lightweight hierarchy (for dependency tracking)
 * and full display data (for rendering)
 */
export async function getVocabHierarchy(slugs: string[]): Promise<{
  hierarchy: VocabHierarchy
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
} | null> {
  if (!slugs || slugs.length === 0) return null

  try {
    return await buildVocabHierarchy(slugs)
  } catch (error) {
    console.error("Failed to build vocab hierarchy:", error)
    return null
  }
}

/**
 * Get detailed kanji and radical information by characters
 */
export async function getKanjiDetails(
  kanji: string[],
  radicals: string[],
): Promise<{ kanji: KanjiEntry[]; radicals: RadicalEntry[] }> {
  // Batch resolve all characters at once
  const resolvedItems = await getWanikaniItems(kanji, radicals)

  return {
    kanji: ensureKanjiEntries(kanji, resolvedItems.kanji),
    radicals: ensureRadicalEntries(radicals, resolvedItems.radicals),
  }
}
