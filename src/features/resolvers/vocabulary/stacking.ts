// src/features/resolvers/vocabulary/stacking.ts
import type { VocabularyItem } from "@/data/types"
import type { Stack } from "@/features/resolvers/types"
import { vocabulary } from "@/data/vocabulary"
import { loadJsonSources as loadJsonSourcesGeneric } from "@/features/resolvers/shared/json-loader"
import { getVocabForDeck } from "@/features/supabase/db/deck"
import { DEFAULT_VOCABULARY_STACKS } from "@/features/main-cookies/schemas/user-settings"

type PartialVocabularyProperties = Partial<VocabularyItem>

// Type for injectable JSON data loader
type JsonDataLoader = (
  stacks: Stack[],
) => Promise<Map<string, Map<string, PartialVocabularyProperties>>>

/**
 * Resolves multiple vocabulary entries by traversing stacks and merging properties
 * @param terms Array of vocabulary terms to look up
 * @param stacks Priority-ordered array of stacks (lower priority number = higher precedence)
 * @param jsonLoader Optional JSON data loader (defaults to loadJsonSources)
 * @param deck_id Optional deck ID for user deck lookup
 * @returns Map of term to resolved vocabulary item (excludes items not found)
 */
export async function resolveVocabularyEntries(
  terms: string[],
  stacks: Stack[],
  jsonLoader: JsonDataLoader = loadJsonSources,
  deck_id?: number,
): Promise<Map<string, VocabularyItem>> {
  if (terms.length === 0) return new Map()

  // Batch load all data sources
  const [vocabularyCache, jsonCaches, userDeckCache] = await Promise.all([
    loadVocabularyData(terms),
    jsonLoader(stacks),
    deck_id ? loadUserDeckData(terms, deck_id) : Promise.resolve(new Map()),
  ])

  // Process all terms in parallel
  const sortedStacks = [...stacks].sort((a, b) => b.priority - a.priority)
  const resultMap = new Map<string, VocabularyItem>()

  await Promise.all(
    terms.map(async (term) => {
      const mergedProps = mergePropertiesFromStacks(
        term,
        sortedStacks,
        jsonCaches,
        vocabularyCache,
        userDeckCache,
      )

      if (!hasAnyProperties(mergedProps)) return

      const finalItem = createFinalItem(term, mergedProps)
      resultMap.set(term, finalItem)
    }),
  )

  return resultMap
}

/**
 * Loads vocabulary data for requested terms from the built-in vocabulary collection
 */
async function loadVocabularyData(
  terms: string[],
): Promise<Map<string, VocabularyItem>> {
  const cache = new Map<string, VocabularyItem>()
  for (const term of terms) {
    const item = vocabulary[term]
    if (item) {
      cache.set(term, item)
    }
  }
  return cache
}

/**
 * Loads user deck vocabulary data for requested terms
 */
async function loadUserDeckData(
  terms: string[],
  deck_id: number,
): Promise<Map<string, VocabularyItem>> {
  const cache = new Map<string, VocabularyItem>()
  try {
    const deckVocab = await getVocabForDeck(deck_id)
    for (const item of deckVocab) {
      if (terms.includes(item.word)) {
        cache.set(item.word, item)
      }
    }
  } catch (error) {
    console.error("Failed to fetch vocabulary from user deck:", error)
  }
  return cache
}

/**
 * Loads all JSON sources needed by the stacks (wrapper around shared utility)
 */
async function loadJsonSources(
  stacks: Stack[],
): Promise<Map<string, Map<string, PartialVocabularyProperties>>> {
  return loadJsonSourcesGeneric(
    stacks,
    (item: VocabularyItem) => item as PartialVocabularyProperties,
    (item: VocabularyItem) => item.word,
  )
}

/**
 * Merges properties from all enabled stacks for a term
 */
function mergePropertiesFromStacks(
  term: string,
  sortedStacks: Stack[],
  jsonCaches: Map<string, Map<string, PartialVocabularyProperties>>,
  vocabularyCache: Map<string, VocabularyItem>,
  userDeckCache: Map<string, VocabularyItem>,
): PartialVocabularyProperties {
  let props: PartialVocabularyProperties = {}

  for (const stack of sortedStacks) {
    if (!stack.enabled) continue

    let stackProps: PartialVocabularyProperties | null = null
    if (stack.sourceId === "vocabulary.ts") {
      stackProps = vocabularyCache.get(term) || null
    } else if (stack.sourceId === "user-decks") {
      stackProps = userDeckCache.get(term) || null
    } else if (stack.sourceId.endsWith(".json")) {
      stackProps = jsonCaches.get(stack.sourceId)?.get(term) || null
    }

    if (stackProps) {
      props = mergeVocabularyProperties(props, stackProps)
    }
  }

  return props
}

function hasAnyProperties(props: PartialVocabularyProperties): boolean {
  return Object.keys(props).length > 0
}

function createFinalItem(
  term: string,
  props: PartialVocabularyProperties,
): VocabularyItem {
  return {
    // Start with defaults for required fields
    word: term,
    furigana: term,
    english: [],
    // Apply stack properties
    ...props,
  }
}

/**
 * Merges vocabulary properties, with override taking precedence over base
 */
function mergeVocabularyProperties(
  base: PartialVocabularyProperties,
  override: PartialVocabularyProperties,
): PartialVocabularyProperties {
  return {
    ...base,
    ...override,
    // Handle complex mnemonics merging
    mnemonics: override.mnemonics
      ? { ...base.mnemonics, ...override.mnemonics }
      : base.mnemonics,
  }
}
