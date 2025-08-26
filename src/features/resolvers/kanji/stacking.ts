// src/features/resolvers/kanji/stacking.ts
import type {
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"
import type { Stack } from "@/features/resolvers/types"
import { getWKItemsBySlugs } from "@/data/wanikani/utils"
import { loadJsonSources as loadJsonSourcesGeneric } from "@/features/resolvers/shared/json-loader"

type KanjiItem = KanjiEntry | RadicalEntry

type JsonKanjiRadicalItem = {
  character: string
  meanings?: string[]
  meaning_mnemonic?: string
  reading_mnemonic?: string
}

type PartialKanjiRadicalProperties = {
  meanings?: string[]
  meaning_mnemonic?: string
  reading_mnemonic?: string
}

// Type for injectable JSON data loader
type JsonDataLoader = (
  stacks: Stack[],
) => Promise<Map<string, Map<string, PartialKanjiRadicalProperties>>>

/**
 * Resolves multiple kanji or radical entries by traversing stacks and merging properties
 * @param characters Array of kanji/radical characters to look up
 * @param stacks Priority-ordered array of stacks (lower priority number = higher precedence)
 * @param jsonLoader Optional JSON data loader (defaults to loadJsonSources)
 * @returns Map of character to resolved kanji/radical item (excludes items not found)
 */
export async function resolveKanjiEntries(
  characters: string[],
  stacks: Stack[],
  jsonLoader: JsonDataLoader = loadJsonSources,
): Promise<Map<string, KanjiItem>> {
  if (characters.length === 0) return new Map()

  // Batch load all data sources
  const [waniKaniCache, jsonCaches] = await Promise.all([
    loadWaniKaniData(characters),
    jsonLoader(stacks),
  ])

  // Process all characters in parallel
  const sortedStacks = [...stacks].sort((a, b) => b.priority - a.priority)
  const resultMap = new Map<string, KanjiItem>()

  await Promise.all(
    characters.map(async (character) => {
      const mergedProps = mergePropertiesFromStacks(
        character,
        sortedStacks,
        jsonCaches,
      )
      const wkItem = waniKaniCache.get(character)

      if (!hasAnyProperties(mergedProps) && !wkItem) return

      const finalItem = createFinalItem(character, mergedProps, wkItem)
      resultMap.set(character, finalItem)
    }),
  )

  return resultMap
}

/**
 * Loads WaniKani data for all characters in a single batch call
 */
async function loadWaniKaniData(
  characters: string[],
): Promise<Map<string, KanjiItem>> {
  const cache = new Map<string, KanjiItem>()
  try {
    const result = await getWKItemsBySlugs({
      data: { kanji: characters, radicals: characters },
    })
    result.kanji.forEach((item) => cache.set(item.kanji, item))
    result.radicals.forEach(
      (item) => !cache.has(item.radical) && cache.set(item.radical, item),
    )
  } catch (error) {
    console.error("Failed to fetch kanji/radicals from WaniKani:", error)
  }
  return cache
}

/**
 * Loads all JSON sources needed by the stacks (wrapper around shared utility)
 */
async function loadJsonSources(
  stacks: Stack[],
): Promise<Map<string, Map<string, PartialKanjiRadicalProperties>>> {
  return loadJsonSourcesGeneric(
    stacks,
    (item: JsonKanjiRadicalItem) => ({
      meanings: item.meanings,
      meaning_mnemonic: item.meaning_mnemonic,
      reading_mnemonic: item.reading_mnemonic,
    }),
    (item: JsonKanjiRadicalItem) => item.character,
  )
}

/**
 * Merges properties from all enabled stacks for a character
 */
function mergePropertiesFromStacks(
  character: string,
  sortedStacks: Stack[],
  jsonCaches: Map<string, Map<string, PartialKanjiRadicalProperties>>,
): PartialKanjiRadicalProperties {
  let props: PartialKanjiRadicalProperties = {}

  for (const stack of sortedStacks) {
    if (!stack.enabled) continue

    let stackProps: PartialKanjiRadicalProperties | null = null
    if (stack.sourceId === "user-decks") {
      // TODO: Implement user deck lookup
    } else if (stack.sourceId.endsWith(".json")) {
      stackProps = jsonCaches.get(stack.sourceId)?.get(character) || null
    }

    if (stackProps) {
      props = {
        meanings: stackProps.meanings ?? props.meanings,
        meaning_mnemonic: stackProps.meaning_mnemonic ?? props.meaning_mnemonic,
        reading_mnemonic: stackProps.reading_mnemonic ?? props.reading_mnemonic,
      }
      if (props.meanings && props.meaning_mnemonic && props.reading_mnemonic)
        break
    }
  }

  return props
}

function hasAnyProperties(props: PartialKanjiRadicalProperties): boolean {
  return !!(props.meanings || props.meaning_mnemonic || props.reading_mnemonic)
}

function createFinalItem(
  character: string,
  props: PartialKanjiRadicalProperties,
  wkItem: KanjiItem | undefined,
): KanjiItem {
  const isKanji = wkItem && "radicalComponents" in wkItem

  return isKanji
    ? {
        kanji: character,
        radicalComponents: (wkItem as KanjiEntry).radicalComponents || [],
        meanings: props.meanings ?? (wkItem?.meanings || []),
        meaning_mnemonic: props.meaning_mnemonic ?? wkItem?.meaning_mnemonic,
        reading_mnemonic:
          props.reading_mnemonic ?? (wkItem as KanjiEntry)?.reading_mnemonic,
      }
    : {
        radical: character,
        meanings: props.meanings ?? (wkItem?.meanings || []),
        meaning_mnemonic: props.meaning_mnemonic ?? wkItem?.meaning_mnemonic,
      }
}

/**
 * Merges kanji/radical properties, with override taking precedence over base
 * @param base Base kanji/radical item
 * @param override Partial override properties
 * @returns Merged kanji/radical item
 */
export function mergeKanjiProperties<T extends KanjiItem>(
  base: T,
  override: Partial<T>,
): T {
  return {
    ...base,
    ...override,
    meanings: override.meanings ?? base.meanings,
    // Handle radicalComponents only for KanjiEntry
    ...("radicalComponents" in base &&
      "radicalComponents" in override && {
        radicalComponents: override.radicalComponents ?? base.radicalComponents,
      }),
  }
}
