// vocab-practice/logic/data-initialization.ts
import { createEmptyCard, State } from "ts-fsrs"
import type { VocabularyCollection, VocabularyItem } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type {
  PracticeCard,
  PracticeSessionState,
  PracticeMode,
  FSRSInfo,
  SessionCardStyle,
} from "../types"
import { addKanaAndRuby } from "@/data/utils/vocab"
import type {
  FullHierarchyData,
  Kanji,
  Radical,
  VocabHierarchy,
} from "@/data/wanikani/types"
import {
  getKanjiDetailsBySlug,
  getRadicalDetailsBySlug,
} from "@/data/wanikani/utils"

/**
 * Creates a unified PracticeCard from various data sources.
 */
function createPracticeCard(
  item: VocabHierarchy | Kanji | Radical,
  type: DBPracticeItemType,
  fsrsData: FSRSCardData | null,
  sessionPracticeMode: PracticeMode,
  globalVocabCollection: VocabularyCollection,
  flipVocabQA: boolean,
  flipKanjiRadicalQA: boolean,
): PracticeCard {
  const key = `${type}:${item.slug}`
  const existingFSRS = fsrsData?.fsrs_card
  const practiceMode = fsrsData?.mode || sessionPracticeMode

  const fsrsInfo: FSRSInfo = {
    card: existingFSRS || createEmptyCard(new Date()),
    logs: fsrsData?.fsrs_logs || [],
  }

  let vocabItem: VocabularyItem
  let characterForKanjiRadical: string = ""
  let meaningsForKanjiRadical: string[] = []
  let itemMeaningMnemonic: string = ""
  let itemReadingMnemonic: string | undefined

  if (type === "vocabulary") {
    // For vocabulary, the source of truth is the global collection.
    vocabItem = globalVocabCollection[item.slug]
  } else {
    // For Kanji and Radicals, construct a temporary vocab-like item.
    const typedItem = item as Kanji | Radical
    characterForKanjiRadical = typedItem.characters || typedItem.slug // TODO: Fix to use img (definitely not the slug)
    meaningsForKanjiRadical = typedItem.meanings

    // Assign mnemonics for Kanji and Radicals
    itemMeaningMnemonic = typedItem.meaning_mnemonic
    if (type === "kanji") {
      itemReadingMnemonic = (typedItem as Kanji).reading_mnemonic
    }

    // Create a pseudo-vocabItem for Kanji/Radical for consistent `addKanaAndRuby`
    vocabItem = {
      word: characterForKanjiRadical,
      furigana: characterForKanjiRadical,
      english: meaningsForKanjiRadical,
      chapter: 0, // Placeholder TODO: remove
    }
  }

  const richVocab = addKanaAndRuby([vocabItem])[0]

  let prompt: string
  let validAnswers: string[]

  if (type === "vocabulary") {
    if (practiceMode === "readings") {
      if (flipVocabQA) {
        // Flipped: English prompt, Japanese word answer
        prompt = richVocab.english.join(", ")
        validAnswers = [richVocab.word]
      } else {
        // Original: Japanese word prompt, English answer
        prompt = richVocab.word
        validAnswers = [...richVocab.english]
      }
    } else {
      // "kana" mode
      if (flipVocabQA) {
        // Flipped: Hiragana/Kana prompt, English answer
        prompt = richVocab.hiragana.join(", ") || richVocab.word
        validAnswers = [...richVocab.english]
      } else {
        // Original: English prompt, Hiragana/Kana answer
        prompt = richVocab.english.join(", ")
        const answers = new Set([...richVocab.hiragana])
        validAnswers = Array.from(answers)
      }
    }
  } else {
    // Logic for Kanji and Radicals
    if (flipKanjiRadicalQA) {
      // Flipped: Meanings prompt, Character answer
      prompt = meaningsForKanjiRadical.join(", ")
      validAnswers = [characterForKanjiRadical]
    } else {
      // Original: Character prompt, Meanings answer
      prompt = characterForKanjiRadical
      validAnswers = meaningsForKanjiRadical
    }
  }

  let sessionStyle: SessionCardStyle = "multiple-choice" // Default style

  const isKanjiOrRadical = type === "kanji" || type === "radical"

  if (isKanjiOrRadical && fsrsInfo.card.state === State.New) {
    // If it's a new Kanji or Radical, start with an introduction phase
    sessionStyle = "introduction"
  } else if (fsrsInfo.card.state === State.Review) {
    if (type === "vocabulary" && !flipVocabQA) {
      sessionStyle = "multiple-choice"
    } else {
      // Dependencies or due reviews in review state should be quick flashcards.
      sessionStyle = "flashcard"
    }
  }

  return {
    key,
    vocab: richVocab,
    fsrs: fsrsInfo,
    sessionScope: "module",
    practiceMode,
    practiceItemType: type,
    sessionStyle, // This now reflects the new 'introduction' logic
    prompt,
    validAnswers,
    meaningMnemonic: itemMeaningMnemonic,
    readingMnemonic: itemReadingMnemonic,
  }
}

/**
 * Initializes a practice session from hierarchical data and separate due reviews.
 */
export async function initializePracticeSession(
  hierarchy: FullHierarchyData,
  moduleFSRSCards: FSRSCardData[],
  allDueFSRSCards: FSRSCardData[],
  sessionPracticeMode: PracticeMode,
  globalVocabCollection: VocabularyCollection,
  flipVocabQA: boolean,
  flipKanjiRadicalQA: boolean,
  shuffle: boolean = false,
  enablePrerequisites: boolean = true,
): Promise<PracticeSessionState> {
  const cardMap = new Map<string, PracticeCard>()
  const dependencyMap = new Map<string, string[]>()
  const unlocksMap = new Map<string, string[]>()
  const lockedKeys = new Set<string>()
  let moduleQueue: string[] = []
  const reviewQueue: string[] = []

  const filteredModuleFSRSCards = moduleFSRSCards.filter(
    (card) => card.mode === sessionPracticeMode,
  )

  const moduleFSRSMap = new Map(
    filteredModuleFSRSCards.map((card) => [card.practice_item_key, card]),
  )

  // Conditionally include Kanji and Radicals for the MODULE ITEMS.
  // Review items (from allDueFSRSCards) are ALWAYS processed regardless of this flag.
  const moduleHierarchyItems: Array<VocabHierarchy | Kanji | Radical> = [
    ...hierarchy.hierarchy, // Always include vocabulary from the hierarchy
  ]

  if (enablePrerequisites) {
    // Collect kanji characters for deduplication
    const kanjiCharacters = new Set(
      hierarchy.uniqueKanji.map((k) => k.characters).filter(Boolean),
    )

    moduleHierarchyItems.push(
      ...hierarchy.uniqueKanji,
      // Filter out radicals that duplicate kanji characters
      ...hierarchy.uniqueRadicals.filter(
        (r) => r.characters && !kanjiCharacters.has(r.characters),
      ),
    )
  }

  // --- Phase 1: Create All Module Cards (No Dependencies Yet) ---
  moduleHierarchyItems.forEach((item) => {
    // Determine type based on properties, as the item might be VocabHierarchy, Kanji, or Radical
    let type: DBPracticeItemType
    if ("kanji" in item) {
      type = "vocabulary"
    } else if ("radicals" in item) {
      type = "kanji"
    } else {
      type = "radical"
    }
    const key = `${type}:${item.slug}`

    const fsrsData = moduleFSRSMap.get(item.slug) || null
    const card = createPracticeCard(
      item,
      type,
      fsrsData,
      sessionPracticeMode,
      globalVocabCollection,
      flipVocabQA,
      flipKanjiRadicalQA,
    )
    cardMap.set(key, card)
  })

  // --- Phase 2: Process Standalone Due Reviews ---
  const pureDueReviewCards = allDueFSRSCards.filter(
    // Filter out due cards that are ALREADY covered by the moduleHierarchyItems,
    (card) => !cardMap.has(`${card.type}:${card.practice_item_key}`),
  )

  // --- Use for...of loop to handle async fetching ---
  for (const fsrsData of pureDueReviewCards) {
    const key = `${fsrsData.type}:${fsrsData.practice_item_key}`
    if (cardMap.has(key)) continue // Should be caught by the filter above, but good safeguard

    let itemToPass: VocabHierarchy | Kanji | Radical | null = null

    const itemType: DBPracticeItemType = fsrsData.type

    // Look up data for review cards from global collections if not in current hierarchy
    if (itemType === "vocabulary") {
      const vocabItem = globalVocabCollection[fsrsData.practice_item_key]
      if (!vocabItem) {
        console.warn(
          `Missing vocabulary data for due review key: ${fsrsData.practice_item_key}. Skipping card.`,
        )
        continue
      }
      itemToPass = {
        id: 0, // Placeholder ID
        characters: vocabItem.word,
        slug: vocabItem.word,
        kanji: [], // Placeholder
      } as VocabHierarchy // Cast needed to satisfy type for addKanaAndRuby
    } else if (itemType === "kanji") {
      // Check if it's in the full hierarchy list first, as it's already loaded
      itemToPass =
        hierarchy.uniqueKanji.find(
          (k) => k.slug === fsrsData.practice_item_key,
        ) || (await getKanjiDetailsBySlug({ data: fsrsData.practice_item_key }))
      if (!itemToPass) {
        console.warn(
          `Could not find/fetch Kanji details for due review: ${fsrsData.practice_item_key}. Skipping card.`,
        )
        continue
      }
    } else if (itemType === "radical") {
      // Check if it's in the full hierarchy list first
      itemToPass =
        hierarchy.uniqueRadicals.find(
          (r) => r.slug === fsrsData.practice_item_key,
        ) ||
        (await getRadicalDetailsBySlug({ data: fsrsData.practice_item_key }))
      if (!itemToPass) {
        console.warn(
          `Could not find/fetch Radical details for due review: ${fsrsData.practice_item_key}. Skipping card.`,
        )
        continue
      }
    }

    if (!itemToPass) continue

    const reviewCard = createPracticeCard(
      itemToPass,
      itemType,
      fsrsData,
      fsrsData.mode,
      globalVocabCollection,
      flipVocabQA,
      flipKanjiRadicalQA,
    )
    reviewCard.sessionScope = "review"
    reviewCard.sessionStyle = "flashcard"

    cardMap.set(key, reviewCard)
    reviewQueue.push(key)
  }

  // --- Phase 3: Build Dependencies (Only if prerequisites are enabled) ---
  if (enablePrerequisites) {
    const allOriginalHierarchyItems = [
      ...hierarchy.hierarchy,
      ...hierarchy.uniqueKanji,
      ...hierarchy.uniqueRadicals,
    ]

    allOriginalHierarchyItems.forEach((item) => {
      let type: DBPracticeItemType
      if ("kanji" in item) {
        type = "vocabulary"
      } else if ("radicals" in item) {
        type = "kanji"
      } else {
        type = "radical"
      }

      const key = `${type}:${item.slug}`

      const prereqKeys =
        type === "vocabulary"
          ? (item as VocabHierarchy).kanji.map((k) => `kanji:${k.slug}`)
          : type === "kanji"
            ? (item as Kanji).radicals.map((r) => `radical:${r.slug}`)
            : []

      prereqKeys.forEach((prereqKey) => {
        const prereqCard = cardMap.get(prereqKey)
        if (!prereqCard) return

        const prereqState = prereqCard.fsrs.card.state
        if (prereqState === State.New || prereqState === State.Learning) {
          if (!dependencyMap.has(key)) dependencyMap.set(key, [])
          dependencyMap.get(key)!.push(prereqKey)

          if (!unlocksMap.has(prereqKey)) unlocksMap.set(prereqKey, [])
          unlocksMap.get(prereqKey)!.push(key)
        }
      })
    })
  }

  // --- Phase 4: Lock Cards and Populate Queues ---
  // This logic filters `cardMap` for the *final* queues.
  for (const [key, card] of cardMap.entries()) {
    if (card.sessionScope === "module") {
      // Only lock if prerequisites are enabled AND there's an actual dependency
      if (enablePrerequisites && dependencyMap.has(key)) {
        lockedKeys.add(key)
      } else {
        moduleQueue.push(key)
      }
    } else {
      // Review cards are always directly added to reviewQueue
      reviewQueue.push(key)
    }
  }

  if (shuffle) {
    moduleQueue = [...moduleQueue].sort(() => Math.random() - 0.5)
  }

  return {
    cardMap,
    dependencyMap,
    unlocksMap,
    lockedKeys,
    moduleQueue,
    reviewQueue,
    activeQueue: [],
    isFinished: false,
  }
}
