// src/features/fsrs-import/importJpdbReviewsServerFn.ts

import { createServerFn } from "@tanstack/solid-start"
import { createEmptyCard, FSRS, type Card } from "ts-fsrs"
import { getUser } from "@/features/supabase/getUser"
import {
  batchUpsertFSRSCardsForUser,
  getFSRSCardsByKeys,
  type UpsertFSRSCardArgs,
} from "@/features/supabase/db/utils"
import { getWaniKaniMapper } from "./wanikaniMapper"
import { simulateFSRSReviews } from "./fsrsProcessor"
import type {
  JpdbJsonData,
  JpdbVocabularyCard,
  JpdbKanjiCard,
  WaniKaniSubjectMapping,
  DBPracticeItemType,
} from "./types"

// Regex to check for CJK Unified Ideographs (Kanji)
const KANJI_REGEX = /[\u4e00-\u9faf\u3400-\u4dbf]/

// Configuration for processing different card types
const CARD_TYPE_CONFIG = [
  {
    name: "vocabulary (JP->EN)",
    cards: (data: JpdbJsonData) => data.cards_vocabulary_jp_en,
    getSearchTerm: (card: JpdbVocabularyCard | JpdbKanjiCard) =>
      (card as JpdbVocabularyCard).spelling,
  },
  {
    name: "vocabulary (EN->JP)",
    cards: (data: JpdbJsonData) => data.cards_vocabulary_en_jp,
    getSearchTerm: (card: JpdbVocabularyCard | JpdbKanjiCard) =>
      (card as JpdbVocabularyCard).spelling,
  },
  {
    name: "kanji (keyword->char)",
    cards: (data: JpdbJsonData) => data.cards_kanji_keyword_char,
    getSearchTerm: (card: JpdbVocabularyCard | JpdbKanjiCard) =>
      (card as JpdbKanjiCard).character,
  },
  {
    name: "kanji (char->keyword)",
    cards: (data: JpdbJsonData) => data.cards_kanji_char_keyword,
    getSearchTerm: (card: JpdbVocabularyCard | JpdbKanjiCard) =>
      (card as JpdbKanjiCard).character,
  },
] as const

type BatchUpsertData = UpsertFSRSCardArgs

/**
 * Validates the jpdb JSON data structure
 */
function validateJpdbData(data: unknown): JpdbJsonData {
  console.log("Type of data: ", typeof data)
  if (typeof data !== "object" || data === null) {
    throw new Error("Invalid import data: Must be an object.")
  }

  const jpdbData = data as JpdbJsonData

  if (!Array.isArray(jpdbData.cards_vocabulary_jp_en)) {
    console.error("Missing cards_vocabulary_jp_en:", jpdbData)
    throw new Error("Invalid import data: Missing vocabulary (JP->EN) array.")
  }

  return jpdbData
}

/**
 * Determines the practice mode based on item type and content
 */
function determineMode(
  practiceItemType: DBPracticeItemType,
  originalSpelling: string,
): "readings" | "kana" {
  if (practiceItemType === "kanji" || practiceItemType === "radical") {
    return "readings"
  }

  // For vocabulary, check if it contains kanji
  return KANJI_REGEX.test(originalSpelling) ? "readings" : "kana"
}

/**
 * Batch upsert FSRS cards to the database
 */
async function batchUpsertFSRSCards(
  batchData: BatchUpsertData[],
): Promise<void> {
  if (batchData.length === 0) return

  console.log(`[Import] Batch upserting ${batchData.length} cards...`)
  await batchUpsertFSRSCardsForUser({ data: batchData })
  console.log(`[Import] Successfully batch upserted ${batchData.length} cards`)
}

/**
 * Fetch existing cards in chunks to handle query limits
 */
async function fetchExistingCardsMap(
  userId: string,
  practiceItemKeys: Set<string>,
  cardTypeName: string,
): Promise<Map<string, any>> {
  const existingCardsMap = new Map<string, any>()

  if (practiceItemKeys.size > 0) {
    const CHUNK_SIZE = 100
    const keyArray = Array.from(practiceItemKeys)

    for (let i = 0; i < keyArray.length; i += CHUNK_SIZE) {
      const chunk = keyArray.slice(i, i + CHUNK_SIZE)
      console.log(
        `[Import] ${cardTypeName}: Looking up chunk ${Math.floor(i / CHUNK_SIZE) + 1}/${Math.ceil(keyArray.length / CHUNK_SIZE)}`,
      )

      try {
        const existingCards = await getFSRSCardsByKeys(userId, chunk)
        existingCards.forEach((card) => {
          const key = `${card.practice_item_key}-${card.type}`
          existingCardsMap.set(key, card)
        })
      } catch (error) {
        console.error(
          `[Import] ${cardTypeName}: Error looking up chunk ${Math.floor(i / CHUNK_SIZE) + 1}:`,
          error,
        )
        // Continue with other chunks
      }
    }

    console.log(
      `[Import] ${cardTypeName}: Found ${existingCardsMap.size} existing cards`,
    )
  }

  return existingCardsMap
}

/**
 * Processes a batch of jpdb cards with full optimization
 */
async function processCardBatch(
  userId: string,
  cards: Array<JpdbVocabularyCard | JpdbKanjiCard>,
  getSearchTerm: (card: JpdbVocabularyCard | JpdbKanjiCard) => string,
  waniKaniMapper: ReturnType<typeof getWaniKaniMapper>,
  cardTypeName: string,
): Promise<void> {
  if (cards.length === 0) {
    console.log(`[Import] No cards to process for ${cardTypeName}`)
    return
  }

  console.log(`[Import] Processing ${cards.length} ${cardTypeName} cards...`)

  // Create shared FSRS instance for this batch
  const fsrsInstance = new FSRS({
    request_retention: 0.8,
  })

  // Phase 1: Collect all search terms and valid cards
  const searchTerms: string[] = []
  const validCards: Array<{
    card: JpdbVocabularyCard | JpdbKanjiCard
    searchTerm: string
  }> = []

  for (const card of cards) {
    const searchTerm = getSearchTerm(card)
    if (searchTerm?.trim()) {
      const trimmedTerm = searchTerm.trim()
      searchTerms.push(trimmedTerm)
      validCards.push({ card, searchTerm: trimmedTerm })
    } else {
      console.warn(`Skipping jpdb card with empty search term:`, card)
    }
  }

  if (validCards.length === 0) {
    console.log(`[Import] No valid cards to process for ${cardTypeName}`)
    return
  }

  console.log(
    `[Import] ${cardTypeName}: ${validCards.length} valid cards, looking up WaniKani subjects...`,
  )

  // Phase 2: Batch WaniKani lookups
  const waniKaniResults = waniKaniMapper.batchFindSubjects(searchTerms)

  // Phase 3: Collect all practice item keys and processing tasks
  const allPracticeItemKeys = new Set<string>()
  const processingTasks: Array<{
    jpdbCard: JpdbVocabularyCard | JpdbKanjiCard
    searchTerm: string
    waniKaniSubjects: WaniKaniSubjectMapping[]
  }> = []

  let foundSubjectsCount = 0
  let notFoundCount = 0

  for (const { card, searchTerm } of validCards) {
    const waniKaniSubjects = waniKaniResults.get(searchTerm) || []

    if (waniKaniSubjects.length === 0) {
      notFoundCount++
      continue
    }

    foundSubjectsCount++
    processingTasks.push({
      jpdbCard: card,
      searchTerm,
      waniKaniSubjects,
    })

    // Collect keys for batch existing card lookup
    waniKaniSubjects.forEach((subject) => {
      allPracticeItemKeys.add(subject.slug)
    })
  }

  console.log(
    `[Import] ${cardTypeName}: Found ${foundSubjectsCount} matches, ${notFoundCount} not found`,
  )

  if (processingTasks.length === 0) {
    console.log(`[Import] ${cardTypeName}: No WaniKani matches found`)
    return
  }

  // Phase 4: Batch lookup existing cards
  console.log(
    `[Import] ${cardTypeName}: Looking up ${allPracticeItemKeys.size} existing cards...`,
  )
  const existingCardsMap = await fetchExistingCardsMap(
    userId,
    allPracticeItemKeys,
    cardTypeName,
  )

  // Phase 5: Process all cards and collect batch data
  const batchData: BatchUpsertData[] = []
  let processedCount = 0
  let skippedCount = 0

  console.log(`[Import] ${cardTypeName}: Processing FSRS simulations...`)

  for (const { jpdbCard, searchTerm, waniKaniSubjects } of processingTasks) {
    // Pre-calculate values that are the same for all subjects of this jpdb card
    const originalSpelling =
      "spelling" in jpdbCard ? jpdbCard.spelling : searchTerm
    const reviews = jpdbCard.reviews // Use directly - jpdb guarantees chronological order

    for (const waniKaniSubject of waniKaniSubjects) {
      const { slug: practiceItemKey, type: practiceItemType } = waniKaniSubject
      const mode = determineMode(practiceItemType, originalSpelling)

      // Use pre-fetched existing card
      const existingCardKey = `${practiceItemKey}-${practiceItemType}`
      const existingCard = existingCardsMap.get(existingCardKey)
      const initialCard: Card =
        existingCard?.fsrs_card ??
        createEmptyCard(new Date("2000-01-01T00:00:00Z"))

      const { finalCard, logs } = simulateFSRSReviews(
        initialCard,
        reviews, // Use reviews directly without copying/sorting
        fsrsInstance, // Pass shared FSRS instance
      )

      // Skip "never-forget" cards
      if (finalCard.stability === Infinity) {
        console.log(`[Import] Skipping 'never-forget' item: ${practiceItemKey}`)
        skippedCount++
        continue
      }

      // Validate due date before adding to batch
      if (finalCard.due && isNaN(finalCard.due.getTime())) {
        console.error(
          `[Import] Invalid due date for ${practiceItemKey}:`,
          finalCard.due,
        )
        // Set to a default date
        finalCard.due = new Date()
      }

      batchData.push({
        practice_item_key: practiceItemKey,
        type: practiceItemType,
        fsrs_card: finalCard,
        mode: mode,
        fsrs_logs: logs,
        lesson_id: null,
      })

      processedCount++
    }
  }

  // Phase 6: Handle duplicates by keeping highest stability
  const keyGroups = new Map<
    string,
    Array<{ item: BatchUpsertData; jpdbSource: string }>
  >()

  for (const item of batchData) {
    const uniqueKey = `${item.practice_item_key}-${item.type}`

    if (!keyGroups.has(uniqueKey)) {
      keyGroups.set(uniqueKey, [])
    }

    // Find which jpdb card this came from for debugging
    const jpdbSource =
      processingTasks.find((task) =>
        task.waniKaniSubjects.some(
          (subject) =>
            subject.slug === item.practice_item_key &&
            subject.type === item.type,
        ),
      )?.searchTerm || "unknown"

    keyGroups.get(uniqueKey)!.push({ item, jpdbSource })
  }

  // Select best item from each group and log duplicates
  const deduplicatedBatchData: BatchUpsertData[] = []
  let duplicatesRemoved = 0

  for (const [uniqueKey, items] of keyGroups.entries()) {
    if (items.length > 1) {
      // Find item with highest stability
      const bestItem = items.reduce((best, current) => {
        const bestStability = best.item.fsrs_card.stability || 0
        const currentStability = current.item.fsrs_card.stability || 0
        return currentStability > bestStability ? current : best
      })

      console.log(
        `[Import] ${cardTypeName}: DUPLICATE ${uniqueKey} - kept source '${bestItem.jpdbSource}' (stability: ${bestItem.item.fsrs_card.stability}) over ${items.length - 1} others`,
      )
      deduplicatedBatchData.push(bestItem.item)
      duplicatesRemoved += items.length - 1
    } else {
      deduplicatedBatchData.push(items[0].item)
    }
  }

  if (duplicatesRemoved > 0) {
    console.log(
      `[Import] ${cardTypeName}: Removed ${duplicatesRemoved} duplicates, kept ${deduplicatedBatchData.length} unique cards`,
    )
  }

  // Phase 7: Single batch upsert
  if (deduplicatedBatchData.length > 0) {
    await batchUpsertFSRSCards(deduplicatedBatchData)
    console.log(
      `[Import] ${cardTypeName}: Successfully processed ${deduplicatedBatchData.length} cards, skipped ${skippedCount}`,
    )
  } else {
    console.log(
      `[Import] ${cardTypeName}: No cards to upsert (${skippedCount} skipped)`,
    )
  }
}

/**
 * Server function to import jpdb.io review history for a user.
 */
export const importJpdbReviewsServerFn = createServerFn({
  method: "POST",
})
  .validator(validateJpdbData)
  .handler(async ({ data: jpdbJsonData }) => {
    // Authentication check
    const response = await getUser()
    if (!response.user) {
      throw new Error("Authentication required to import reviews.")
    }
    const userId = response.user.id

    console.log("[Import] Starting jpdb.io import process...")
    const startTime = Date.now()

    const waniKaniMapper = getWaniKaniMapper()

    // Process all card types in parallel for maximum speed
    const processingPromises = CARD_TYPE_CONFIG.map(async (config) => {
      const cards = config.cards(jpdbJsonData)

      if (cards.length === 0) {
        console.log(`[Import] No cards found for ${config.name}`)
        return { name: config.name, count: 0 }
      }

      await processCardBatch(
        userId,
        cards,
        config.getSearchTerm,
        waniKaniMapper,
        config.name,
      )

      return { name: config.name, count: cards.length }
    })

    // Wait for all card types to complete
    const results = await Promise.all(processingPromises)
    const totalCards = results.reduce((sum, result) => sum + result.count, 0)
    const endTime = Date.now()
    const duration = ((endTime - startTime) / 1000).toFixed(2)

    console.log(
      `[Import] Jpdb.io import process complete in ${duration}s. Processed ${totalCards} total cards.`,
    )

    // Log results summary
    results.forEach((result) => {
      if (result.count > 0) {
        console.log(`[Import] ${result.name}: ${result.count} cards`)
      }
    })

    return {
      success: true,
      message: `Jpdb.io review history imported successfully! Processed ${totalCards} cards in ${duration} seconds.`,
      stats: {
        totalCards,
        duration: `${duration}s`,
        cardTypes: results,
      },
    }
  })
