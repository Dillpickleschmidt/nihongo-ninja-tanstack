/**
 * WaniKani data queries from Supabase
 * Fetches kanji and radicals for vocabulary hierarchy building
 */

import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import type {
  KanjiEntry,
  RadicalEntry,
} from "@/features/resolvers/util/hierarchy-builder"

/**
 * Fetch kanji and radicals from Supabase by characters
 * Queries for specified characters and fetches their radical components
 * @param kanji - Array of kanji characters to look up
 * @param radicals - Array of radical characters to look up (optional)
 * @returns Kanji and radical entries with their data and components
 */
export async function getWanikaniItems(
  kanji: string[],
  radicals: string[] = [],
): Promise<{ kanji: KanjiEntry[]; radicals: RadicalEntry[] }> {
  const supabase = createSupabaseClient()

  const allCharacters = [...kanji, ...radicals]
  if (allCharacters.length === 0) {
    return { kanji: [], radicals: [] }
  }

  const { data, error } = await supabase
    .from("wanikani_items")
    .select("*")
    .in("characters", allCharacters)
    .in("character_type", ["kanji", "radical"])

  if (error) {
    console.error("Error fetching WaniKani items:", error)
    return { kanji: [], radicals: [] }
  }

  const kanjiMap = new Map<string, WaniKaniItem>()
  const radicalMap = new Map<string, WaniKaniItem>()

  // Organize items by character and type
  for (const item of data) {
    if (item.character_type === "kanji" && item.characters) {
      kanjiMap.set(item.characters, item)
    } else if (item.character_type === "radical" && item.characters) {
      radicalMap.set(item.characters, item)
    }
  }

  // Fetch radical component details for each kanji
  const allComponentIds = new Set<number>()
  for (const item of kanjiMap.values()) {
    if (item.component_ids) {
      item.component_ids.forEach((id) => allComponentIds.add(id))
    }
  }

  // Fetch all radical components in one query
  const componentRadicalMap = new Map<number, string>()
  if (allComponentIds.size > 0) {
    const { data: componentData, error: componentError } = await supabase
      .from("wanikani_items")
      .select("id, characters")
      .in("id", Array.from(allComponentIds))
      .eq("character_type", "radical")

    if (componentError) {
      console.error("Error fetching radical components:", componentError)
      return { kanji: [], radicals: [] }
    }

    for (const item of componentData) {
      if (item.characters) {
        componentRadicalMap.set(item.id, item.characters)
      }
    }
  }

  // Build kanji entries
  const kanjiEntries: KanjiEntry[] = kanji
    .map((char) => {
      const item = kanjiMap.get(char)
      if (!item) return null

      const radicalComponents = (item.component_ids || [])
        .map((id) => componentRadicalMap.get(id))
        .filter((c): c is string => c !== undefined)

      return {
        kanji: char,
        radicalComponents,
        meanings: item.meanings,
        meaning_mnemonic: item.meaning_mnemonic,
        ...(item.reading_mnemonic && { reading_mnemonic: item.reading_mnemonic }),
        // fix predicate type error (don't include at all, not just undefined)
      }
    })
    .filter((entry): entry is KanjiEntry => entry !== null)

  // Build radical entries
  const radicalEntries: RadicalEntry[] = radicals
    .map((char) => {
      const item = radicalMap.get(char)
      if (!item) return null

      return {
        radical: char,
        meanings: item.meanings,
        meaning_mnemonic: item.meaning_mnemonic,
      }
    })
    .filter((entry): entry is RadicalEntry => entry !== null)

  return { kanji: kanjiEntries, radicals: radicalEntries }
}
