import { MutationCtx, QueryCtx } from "../_generated/server"
import { Id } from "../_generated/dataModel"
import { type VocabularyItem, type DeckVocabItemInput } from "../validators"
import { dynamic_modules } from "../../src/data/dynamic_modules"
import * as Decks from "./decks"

/**
 * Unified: fetch vocab for any deck based on source
 * For built-in decks, deckId is the dynamic module ID — resolve its vocab_set_ids
 * For user decks, deckId is the Convex document ID
 */
export async function fetchDeckVocab(
  ctx: QueryCtx,
  deckId: string,
  deckSource: "user" | "built-in",
): Promise<VocabularyItem[]> {
  if (deckSource === "built-in") {
    const module = dynamic_modules[deckId]
    const setIds = module?.vocab_set_ids ?? [deckId]
    const vocabBySet = await fetchVocabBySets(ctx, setIds)
    return Object.values(vocabBySet).flat()
  }
  return fetchUserDeckVocab(ctx, deckId as Id<"userDecks">)
}

/**
 * Fetches vocabulary items organized by set IDs
 */
export async function fetchVocabBySets(
  ctx: QueryCtx,
  setIds: string[],
): Promise<Record<string, VocabularyItem[]>> {
  if (setIds.length === 0) return {}

  const sets = await fetchSetsByIds(ctx, setIds)
  const allKeys = new Set<string>()

  for (const keys of Object.values(sets)) {
    keys.forEach((key) => allKeys.add(key))
  }

  const itemsMap = await fetchVocabItemsByKeys(ctx, [...allKeys], null)

  return Object.fromEntries(
    Object.entries(sets).map(([setId, keys]) => [
      setId,
      keys.map((key) => itemsMap[encodeURIComponent(key)]).filter(Boolean),
    ]),
  )
}

/**
 * Get all vocabulary items for a deck
 */
export async function getDeckVocabItems(
  ctx: QueryCtx,
  deckId: Id<"userDecks">,
) {
  return ctx.db
    .query("deckVocabularyItems")
    .withIndex("by_deck", (q) => q.eq("deckId", deckId))
    .collect()
}

/**
 * Create vocabulary items for a deck (bulk insert)
 */
export async function createDeckVocabItems(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
  items: DeckVocabItemInput[],
) {
  const insertedIds: Id<"deckVocabularyItems">[] = []

  for (const item of items) {
    const id = await ctx.db.insert("deckVocabularyItems", {
      deckId,
      word: item.word,
      furigana: item.furigana,
      english: item.english,
      info: item.info,
      mnemonics: item.mnemonics,
      exampleSentences: item.exampleSentences,
      particles: item.particles,
      isVerb: item.isVerb,
    })
    insertedIds.push(id)
  }

  return insertedIds
}

/**
 * Delete all vocabulary items for a deck
 */
export async function deleteDeckVocabItems(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
) {
  const items = await ctx.db
    .query("deckVocabularyItems")
    .withIndex("by_deck", (q) => q.eq("deckId", deckId))
    .collect()

  for (const item of items) {
    await ctx.db.delete(item._id)
  }

  return items.length
}

/**
 * Replace all vocabulary items for a deck (delete existing + insert new)
 * Used for editing a deck's vocabulary
 */
export async function replaceDeckVocabItems(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
  items: DeckVocabItemInput[],
) {
  await deleteDeckVocabItems(ctx, deckId)
  return createDeckVocabItems(ctx, deckId, items)
}

/**
 * Lightweight search index: returns deckId + searchable terms for all visible decks.
 * Full VocabularyItem docs are fetched server-side but only word/english are returned.
 */
export async function getSearchIndex(
  ctx: QueryCtx,
): Promise<{ deckId: string; terms: string[] }[]> {
  const allDecks = await Decks.getAllDecks(ctx)

  const results = await Promise.all(
    allDecks.map(async (deck) => {
      const vocab = await fetchDeckVocab(ctx, deck.id, deck.source)
      const terms: string[] = []
      for (const item of vocab) {
        terms.push(item.word.toLowerCase())
        for (const eng of item.english) {
          terms.push(eng.toLowerCase())
        }
      }
      return { deckId: deck.id, terms }
    }),
  )

  return results
}

/**
 * Fetch vocab for a user deck (via deckId), normalized to VocabularyItem shape
 */
async function fetchUserDeckVocab(
  ctx: QueryCtx,
  deckId: Id<"userDecks">,
): Promise<VocabularyItem[]> {
  const deckItems = await getDeckVocabItems(ctx, deckId)
  return deckItems.map((item) => ({
    key: item.word,
    word: item.word,
    furigana: item.furigana ?? "",
    english: item.english,
    info: item.info,
    mnemonics: item.mnemonics,
    exampleSentences: item.exampleSentences,
    particles: item.particles,
    videos: undefined,
  })) as VocabularyItem[]
}

/**
 * Fetches vocabulary sets by IDs
 */
async function fetchSetsByIds(
  ctx: QueryCtx,
  setIds: string[],
): Promise<Record<string, string[]>> {
  if (setIds.length === 0) return {}

  const sets: Record<string, string[]> = {}

  for (const setId of setIds) {
    const set = await ctx.db
      .query("coreVocabularySets")
      .withIndex("by_setId", (q) => q.eq("setId", setId))
      .first()

    if (set) {
      sets[setId] = set.vocabularyKeys
    }
  }

  return sets
}

/**
 * Fetches vocabulary items by keys with optional deck override
 */
export async function fetchVocabItemsByKeys(
  ctx: QueryCtx,
  keys: string[],
  deckId: Id<"userDecks"> | null,
): Promise<Record<string, VocabularyItem>> {
  if (keys.length === 0) return {}

  const results: Record<string, VocabularyItem> = {}

  // Parallel fetch all vocab items
  const items = await Promise.all(
    keys.map((key) =>
      ctx.db
        .query("coreVocabularyItems")
        .withIndex("by_key", (q) => q.eq("key", key))
        .first(),
    ),
  )

  for (let i = 0; i < keys.length; i++) {
    const item = items[i]
    if (item) {
      const { _id, _creationTime, ...vocabItem } = item
      results[encodeURIComponent(keys[i])] = vocabItem
    }
  }

  if (deckId !== null) {
    const keySet = new Set(keys)
    const deckItems = await ctx.db
      .query("deckVocabularyItems")
      .withIndex("by_deck", (q) => q.eq("deckId", deckId))
      .collect()

    for (const deckItem of deckItems) {
      if (keySet.has(deckItem.word)) {
        results[encodeURIComponent(deckItem.word)] = {
          key: deckItem.word,
          word: deckItem.word,
          furigana: deckItem.furigana ?? "",
          english: deckItem.english,
          info: deckItem.info,
          mnemonics: deckItem.mnemonics,
          exampleSentences: deckItem.exampleSentences,
          videos: deckItem.videos,
          particles: deckItem.particles,
        } as VocabularyItem
      }
    }
  }

  return results
}
