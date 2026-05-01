import type { Doc } from "../_generated/dataModel"
import type { QueryCtx } from "../_generated/server"
import type { KanjiEntry, PracticeMode, RadicalEntry, VocabularyItem } from "../validators"
import { resolveDeckById, type UnifiedDeck } from "./decks"
import { getDueFSRSCards, getFSRSCardsForItems } from "./fsrs"
import { buildDeckHierarchy, extractHierarchyKeys, type DeckHierarchyResult } from "./hierarchy"
import { fetchKanjiAndRadicals } from "./kanji"
import { fetchDeckVocab, fetchVocabItemsByKeys } from "./vocabulary"

export type PracticeSessionItemData = {
  vocabulary: VocabularyItem[]
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
  fsrsCards: Doc<"userFsrsCards">[]
}

export type DeckPracticeSessionData = {
  deck: UnifiedDeck
  hierarchy: DeckHierarchyResult
  moduleData: PracticeSessionItemData
  reviewData: PracticeSessionItemData
}

export type ReviewOnlySessionData = {
  reviewData: PracticeSessionItemData
}

export async function getDeckPracticeSessionData(
  ctx: QueryCtx,
  deckId: string,
  mode: PracticeMode,
): Promise<DeckPracticeSessionData | null> {
  const deck = await resolveDeckById(ctx, deckId)
  if (!deck) return null

  const vocabulary = await fetchDeckVocab(ctx, deck.id, deck.source)
  const hierarchy = await buildDeckHierarchy(ctx, vocabulary)
  const keys = extractHierarchyKeys(hierarchy)

  const [moduleFsrsByType, dueReviewFsrs] = await Promise.all([
    keys.length > 0
      ? getFSRSCardsForItems(ctx, keys, mode)
      : { vocabulary: [], kanji: [], radical: [] },
    getDueFSRSCards(ctx, mode, 50),
  ])

  const moduleData: PracticeSessionItemData = {
    vocabulary: hierarchy.vocabulary,
    kanji: mode === "meanings" ? hierarchy.kanji : [],
    radicals: mode === "meanings" ? hierarchy.radicals : [],
    fsrsCards: flattenFsrsBuckets(moduleFsrsByType),
  }

  const filteredReviewFsrs = filterOutModuleCards(dueReviewFsrs, hierarchy)
  const reviewData = await buildReviewData(ctx, filteredReviewFsrs, mode)

  return { deck, hierarchy, moduleData, reviewData }
}

export async function getReviewOnlySessionData(
  ctx: QueryCtx,
  mode: PracticeMode,
): Promise<ReviewOnlySessionData> {
  const reviewFsrs = await getDueFSRSCards(ctx, mode)
  const reviewData = await buildReviewData(ctx, reviewFsrs, mode)
  return { reviewData }
}

function flattenFsrsBuckets(fsrsByType: {
  vocabulary: Doc<"userFsrsCards">[]
  kanji: Doc<"userFsrsCards">[]
  radical: Doc<"userFsrsCards">[]
}) {
  return [
    ...fsrsByType.vocabulary,
    ...fsrsByType.kanji,
    ...fsrsByType.radical,
  ]
}

function filterOutModuleCards(
  reviewFsrs: Doc<"userFsrsCards">[],
  hierarchy: DeckHierarchyResult,
) {
  const moduleKeys = {
    vocabulary: new Set(hierarchy.vocabulary.map((item) => item.word)),
    kanji: new Set(hierarchy.kanji.map((item) => item.kanji)),
    radical: new Set(hierarchy.radicals.map((item) => item.radical)),
  }

  return reviewFsrs.filter((card) => !moduleKeys[card.type].has(card.practiceItemKey))
}

async function buildReviewData(
  ctx: QueryCtx,
  fsrsCards: Doc<"userFsrsCards">[],
  mode: PracticeMode,
): Promise<PracticeSessionItemData> {
  const vocabKeys = uniqueInOrder(
    fsrsCards
      .filter((card) => card.type === "vocabulary")
      .map((card) => card.practiceItemKey),
  )

  const kanjiChars =
    mode === "meanings"
      ? uniqueInOrder(
          fsrsCards
            .filter((card) => card.type === "kanji")
            .map((card) => card.practiceItemKey),
        )
      : []

  const radicalChars =
    mode === "meanings"
      ? uniqueInOrder(
          fsrsCards
            .filter((card) => card.type === "radical")
            .map((card) => card.practiceItemKey),
        )
      : []

  const [vocabulary, symbols] = await Promise.all([
    resolveReviewVocabulary(ctx, vocabKeys),
    mode === "meanings"
      ? fetchKanjiAndRadicals(ctx, kanjiChars, radicalChars)
      : Promise.resolve({
          kanji: [] as KanjiEntry[],
          radicals: [] as RadicalEntry[],
          skippedKanji: [],
          skippedRadicals: [],
        }),
  ])

  return {
    vocabulary,
    kanji: symbols.kanji,
    radicals: symbols.radicals,
    fsrsCards,
  }
}

async function resolveReviewVocabulary(
  ctx: QueryCtx,
  vocabKeys: string[],
): Promise<VocabularyItem[]> {
  if (vocabKeys.length === 0) return []

  const coreItems = await fetchVocabItemsByKeys(ctx, vocabKeys, null)
  const resolved = new Map<string, VocabularyItem>()

  for (const key of vocabKeys) {
    const item = coreItems[encodeURIComponent(key)]
    if (item) {
      resolved.set(key, item)
    }
  }

  const missingKeys = vocabKeys.filter((key) => !resolved.has(key))
  if (missingKeys.length === 0) {
    return vocabKeys
      .map((key) => resolved.get(key))
      .filter((item): item is VocabularyItem => item !== undefined)
  }

  const identity = await ctx.auth.getUserIdentity()
  if (!identity) {
    return vocabKeys
      .map((key) => resolved.get(key))
      .filter((item): item is VocabularyItem => item !== undefined)
  }

  const ownedDecks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect()

  const missingKeySet = new Set(missingKeys)
  const deckItemsByDeck = await Promise.all(
    ownedDecks.map((deck) =>
      ctx.db
        .query("deckVocabularyItems")
        .withIndex("by_deck", (q) => q.eq("deckId", deck._id))
        .collect(),
    ),
  )

  for (const items of deckItemsByDeck) {
    if (missingKeySet.size === 0) break

    for (const item of items) {
      if (!missingKeySet.has(item.word)) continue

      resolved.set(item.word, {
        key: item.word,
        word: item.word,
        furigana: item.furigana ?? "",
        english: item.english,
        info: item.info,
        mnemonics: item.mnemonics,
        exampleSentences: item.exampleSentences,
        videos: item.videos,
        particles: item.particles,
      } as VocabularyItem)
      missingKeySet.delete(item.word)
    }
  }

  return vocabKeys
    .map((key) => resolved.get(key))
    .filter((item): item is VocabularyItem => item !== undefined)
}

function uniqueInOrder(values: string[]) {
  return [...new Set(values)]
}
