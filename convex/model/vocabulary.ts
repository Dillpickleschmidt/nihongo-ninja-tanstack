import { MutationCtx, QueryCtx } from "../_generated/server"
import { Id } from "../_generated/dataModel"
import { type VocabularyItem, type DeckVocabItemInput } from "../validators"
import { dynamic_modules } from "../../src/data/dynamic_modules"
import { isBuiltInTextbook } from "../../src/data/utils/textbooks"
import { getChaptersByTextbook } from "../../src/data/utils/chapters"
import * as Decks from "./decks"
import { getDescendantFolderIds } from "./folders"

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
export async function getUserDeckVocabItems(
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
 * Scoped vocab index: returns search terms per deck + optional ordered keys for IK ranking.
 * Scoped to a learning path, folder, or unsorted decks based on scopeId.
 */
export async function getVocabIndex(
  ctx: QueryCtx,
  scopeId: string,
): Promise<{
  deckTerms: { deckId: string; terms: string[] }[]
  orderedKeys?: string[]
}> {
  // Branch 1: Built-in textbook learning path
  if (isBuiltInTextbook(scopeId)) {
    return getBuiltInTextbookIndex(ctx, scopeId)
  }

  // Branch 2: Unsorted (no folder)
  if (scopeId === "") {
    return getUnsortedIndex(ctx)
  }

  // Branch 3: Folder (may or may not be a learning path)
  return getFolderIndex(ctx, scopeId)
}

async function getBuiltInTextbookIndex(
  ctx: QueryCtx,
  textbookId: string,
): Promise<{
  deckTerms: { deckId: string; terms: string[] }[]
  orderedKeys: string[]
}> {
  const chapters = getChaptersByTextbook(textbookId)

  // Collect all unique set IDs for batch fetch
  const allSetIds = new Set<string>()
  for (const chapter of chapters) {
    for (const moduleId of chapter.learning_path_item_ids) {
      const module = dynamic_modules[moduleId]
      if (module?.vocab_set_ids) {
        for (const setId of module.vocab_set_ids) allSetIds.add(setId)
      }
    }
  }

  const allSets = await fetchSetsByIds(ctx, [...allSetIds])

  // Batch-fetch all vocab items once
  const allKeys = new Set<string>()
  for (const keys of Object.values(allSets)) {
    for (const key of keys) allKeys.add(key)
  }
  const itemsMap = await fetchVocabItemsByKeys(ctx, [...allKeys], null)

  // Build orderedKeys preserving learning path order (first occurrence wins)
  const seenKeys = new Set<string>()
  const orderedKeys: string[] = []
  for (const chapter of chapters) {
    for (const moduleId of chapter.learning_path_item_ids) {
      const module = dynamic_modules[moduleId]
      if (!module?.vocab_set_ids) continue
      for (const setId of module.vocab_set_ids) {
        const keys = allSets[setId]
        if (!keys) continue
        for (const key of keys) {
          if (!seenKeys.has(key)) {
            seenKeys.add(key)
            orderedKeys.push(key)
          }
        }
      }
    }
  }

  // Build deckTerms for vocab-practice modules only (these are the searchable decks)
  const deckTerms: { deckId: string; terms: string[] }[] = []
  for (const chapter of chapters) {
    for (const moduleId of chapter.learning_path_item_ids) {
      const module = dynamic_modules[moduleId]
      if (module?.module_type !== "vocab-practice") continue
      const deckSetIds = module.vocab_set_ids ?? [moduleId]
      const terms: string[] = []
      for (const setId of deckSetIds) {
        const keys = allSets[setId]
        if (!keys) continue
        for (const key of keys) {
          const item = itemsMap[encodeURIComponent(key)]
          if (!item) continue
          terms.push(item.word.toLowerCase())
          for (const eng of item.english) terms.push(eng.toLowerCase())
        }
      }
      deckTerms.push({ deckId: moduleId, terms })
    }
  }

  return { deckTerms, orderedKeys }
}

async function getUnsortedIndex(
  ctx: QueryCtx,
): Promise<{ deckTerms: { deckId: string; terms: string[] }[] }> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return { deckTerms: [] }

  const userDecks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect()

  const unsortedDecks = userDecks.filter((d) => !d.folderId)

  const deckTerms = await Promise.all(
    unsortedDecks.map(async (deck) => {
      const vocab = await fetchDeckVocab(ctx, deck._id, "user")
      return { deckId: deck._id, terms: extractTerms(vocab) }
    }),
  )

  return { deckTerms }
}

async function getFolderIndex(
  ctx: QueryCtx,
  scopeId: string,
): Promise<{
  deckTerms: { deckId: string; terms: string[] }[]
  orderedKeys?: string[]
}> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return { deckTerms: [] }

  let folder
  try {
    folder = await ctx.db.get(scopeId as Id<"userDeckFolders">)
  } catch {
    return { deckTerms: [] }
  }
  if (!folder || folder.userId !== identity.subject) return { deckTerms: [] }

  // 3a: Folder with learningPathId → custom learning path
  if (folder.learningPathId) {
    return getCustomLearningPathIndex(ctx, folder.learningPathId, identity.subject)
  }

  // 3b: Regular folder → collect all decks in folder + descendants
  return getRegularFolderIndex(ctx, scopeId as Id<"userDeckFolders">, identity.subject)
}

async function getCustomLearningPathIndex(
  ctx: QueryCtx,
  learningPathId: Id<"learningPathTranscripts">,
  userId: string,
): Promise<{
  deckTerms: { deckId: string; terms: string[] }[]
  orderedKeys: string[]
}> {
  const moduleSources = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path", (q) => q.eq("pathId", learningPathId))
    .collect()

  moduleSources.sort((a, b) => a.orderIndex - b.orderIndex)

  const vocabSources = moduleSources.filter(
    (s) => s.sourceType === "vocabulary",
  )

  const seenKeys = new Set<string>()
  const orderedKeys: string[] = []
  const deckTerms: { deckId: string; terms: string[] }[] = []

  for (const source of vocabSources) {
    const vocab = await fetchUserDeckVocab(
      ctx,
      source.moduleId as Id<"userDecks">,
    )
    const terms: string[] = []
    for (const item of vocab) {
      if (!seenKeys.has(item.word)) {
        seenKeys.add(item.word)
        orderedKeys.push(item.word)
      }
      terms.push(item.word.toLowerCase())
      for (const eng of item.english) terms.push(eng.toLowerCase())
    }
    deckTerms.push({ deckId: source.moduleId, terms })
  }

  return { deckTerms, orderedKeys }
}

async function getRegularFolderIndex(
  ctx: QueryCtx,
  folderId: Id<"userDeckFolders">,
  userId: string,
): Promise<{ deckTerms: { deckId: string; terms: string[] }[] }> {
  const descendantIds = await getDescendantFolderIds(ctx, folderId)
  descendantIds.add(folderId)

  const userDecks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .collect()

  const folderDecks = userDecks.filter(
    (d) => d.folderId && descendantIds.has(d.folderId),
  )

  const deckTerms = await Promise.all(
    folderDecks.map(async (deck) => {
      const vocab = await fetchDeckVocab(ctx, deck._id, "user")
      return { deckId: deck._id, terms: extractTerms(vocab) }
    }),
  )

  return { deckTerms }
}

function extractTerms(vocab: VocabularyItem[]): string[] {
  const terms: string[] = []
  for (const item of vocab) {
    terms.push(item.word.toLowerCase())
    for (const eng of item.english) {
      terms.push(eng.toLowerCase())
    }
  }
  return terms
}

/**
 * Fetch vocab for a user deck (via deckId), normalized to VocabularyItem shape
 */
async function fetchUserDeckVocab(
  ctx: QueryCtx,
  deckId: Id<"userDecks">,
): Promise<VocabularyItem[]> {
  const deckItems = await getUserDeckVocabItems(ctx, deckId)
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
