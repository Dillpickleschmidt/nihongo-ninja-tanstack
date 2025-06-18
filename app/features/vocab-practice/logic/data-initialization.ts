// vocab-practice/logic/data-initialization.ts
import { createEmptyCard, State } from "ts-fsrs"
import type { VocabularyCollection, VocabularyItem } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type {
  PracticeCard,
  PracticeSessionState,
  PracticeMode,
  FSRSInfo,
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

  if (type === "vocabulary") {
    // For vocabulary, the source of truth is the global collection.
    vocabItem = globalVocabCollection[item.slug]
  } else {
    // For Kanji and Radicals, construct a temporary vocab-like item.
    const typedItem = item as Kanji | Radical
    characterForKanjiRadical = typedItem.characters || typedItem.slug // TODO: Fix to use img (definitely not the slug)
    meaningsForKanjiRadical = typedItem.meanings

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

  let sessionStyle: "multiple-choice" | "flashcard" | "write" =
    "multiple-choice"
  if (fsrsInfo.card.state === State.Review) {
    // Core vocab in review state is still part of the main lesson.
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
    sessionStyle,
    prompt,
    validAnswers,
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
): Promise<PracticeSessionState> {
  const cardMap = new Map<string, PracticeCard>()
  const dependencyMap = new Map<string, string[]>()
  const unlocksMap = new Map<string, string[]>()
  const lockedKeys = new Set<string>()
  const moduleQueue: string[] = []
  const reviewQueue: string[] = []

  const filteredModuleFSRSCards = moduleFSRSCards.filter(
    (card) => card.mode === sessionPracticeMode,
  )

  const moduleFSRSMap = new Map(
    filteredModuleFSRSCards.map((card) => [card.practice_item_key, card]),
  )

  const allHierarchyItems = [
    ...hierarchy.hierarchy,
    ...hierarchy.uniqueKanji,
    ...hierarchy.uniqueRadicals,
  ]

  // --- Phase 1: Create All Cards (No Dependencies Yet) ---
  allHierarchyItems.forEach((item) => {
    const type =
      "kanji" in item ? "vocabulary" : "radicals" in item ? "kanji" : "radical"
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
    (card) => !cardMap.has(`${card.type}:${card.practice_item_key}`),
  )

  // --- Use for...of loop to handle async fetching ---
  for (const fsrsData of pureDueReviewCards) {
    const key = `${fsrsData.type}:${fsrsData.practice_item_key}`
    if (cardMap.has(key)) continue

    let itemToPass: VocabHierarchy | Kanji | Radical | null = null

    const itemType: DBPracticeItemType = fsrsData.type

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
      }
    } else if (itemType === "kanji") {
      itemToPass = await getKanjiDetailsBySlug({
        data: fsrsData.practice_item_key,
      })
      if (!itemToPass) {
        console.warn(
          `Could not fetch Kanji details for due review: ${fsrsData.practice_item_key}. Skipping card.`,
        )
        continue
      }
    } else if (itemType === "radical") {
      itemToPass = await getRadicalDetailsBySlug({
        data: fsrsData.practice_item_key,
      })
      if (!itemToPass) {
        console.warn(
          `Could not fetch Radical details for due review: ${fsrsData.practice_item_key}. Skipping card.`,
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

  // --- Phase 3: Build Dependencies (All Cards Now Exist) ---
  allHierarchyItems.forEach((item) => {
    const type =
      "kanji" in item ? "vocabulary" : "radicals" in item ? "kanji" : "radical"
    const key = `${type}:${item.slug}`

    const prerequisites =
      type === "vocabulary"
        ? (item as VocabHierarchy & { _originalType: DBPracticeItemType }).kanji
        : type === "kanji"
          ? (item as Kanji & { _originalType: DBPracticeItemType }).radicals
          : []

    prerequisites.forEach((prereq) => {
      const prereqType: DBPracticeItemType =
        "radicals" in (prereq as Kanji) ? "kanji" : "radical" // Cast to Kanji for safe property access
      const prereqKey = `${prereqType}:${prereq.slug}`
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

  // --- Phase 4: Lock Cards and Populate Queues ---
  for (const [key, card] of cardMap.entries()) {
    if (card.sessionScope === "module") {
      if (dependencyMap.has(key)) {
        lockedKeys.add(key)
      } else {
        moduleQueue.push(key)
      }
    }
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
