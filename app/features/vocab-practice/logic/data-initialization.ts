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

/**
 * Creates a unified PracticeCard from various data sources.
 */
function createPracticeCard(
  item: VocabHierarchy | Kanji | Radical,
  type: "vocabulary" | "kanji" | "radical",
  fsrsData: FSRSCardData | null,
  sessionPracticeMode: PracticeMode,
  globalVocabCollection: VocabularyCollection,
): PracticeCard {
  const key = `${type}:${item.slug}`
  const existingFSRS = fsrsData?.fsrs_card
  const practiceMode = fsrsData?.mode || sessionPracticeMode

  const fsrsInfo: FSRSInfo = {
    card: existingFSRS || createEmptyCard(new Date()),
    logs: fsrsData?.fsrs_logs || [],
  }

  let vocabItem: VocabularyItem

  if (type === "vocabulary") {
    // For vocabulary, the source of truth is the global collection.
    vocabItem = globalVocabCollection[item.slug]
  } else {
    // For Kanji and Radicals, we construct a temporary vocab-like item.
    // The key is to use the `meanings` property from the typed `item`.
    const typedItem = item as Kanji | Radical
    vocabItem = {
      word: typedItem.characters || typedItem.slug,
      furigana: typedItem.characters || typedItem.slug,
      english: typedItem.meanings, // Use the authoritative meanings.
      chapter: 0,
    }
  }

  const richVocab = addKanaAndRuby([vocabItem])[0]

  let prompt: string
  let validAnswers: string[]

  if (practiceMode === "readings") {
    prompt = richVocab.word
    validAnswers = [...richVocab.english]
  } else {
    prompt = richVocab.english.join(", ")
    const answers = new Set([...richVocab.hiragana, richVocab.word])
    validAnswers = Array.from(answers)
  }

  let sessionStyle: "multiple-choice" | "flashcard" | "write" =
    "multiple-choice"
  if (fsrsInfo.card.state === State.Review) {
    // Core vocab in review state is still part of the main lesson.
    if (type === "vocabulary") {
      sessionStyle = "multiple-choice"
    }
    // Dependencies or due reviews in review state should be quick flashcards.
    else {
      sessionStyle = "flashcard"
    }
  }

  return {
    key,
    vocab: richVocab,
    fsrs: fsrsInfo,
    sessionScope: "module", // Default scope for hierarchy items
    practiceMode,
    practiceItemType: type,
    sessionStyle, // Use the new determined style
    prompt,
    validAnswers,
  }
}

/**
 * Initializes a practice session from hierarchical data and separate due reviews.
 */
export function initializePracticeSession(
  hierarchy: FullHierarchyData,
  moduleFSRSCards: FSRSCardData[],
  allDueFSRSCards: FSRSCardData[],
  sessionPracticeMode: PracticeMode,
  globalVocabCollection: VocabularyCollection,
): PracticeSessionState {
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
  // The createPracticeCard function now correctly sets the initial sessionStyle.
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
    )
    cardMap.set(key, card)
  })

  // --- Phase 2: Process Standalone Due Reviews ---
  const pureDueReviewCards = allDueFSRSCards.filter(
    (card) => !moduleFSRSMap.has(card.practice_item_key),
  )

  pureDueReviewCards.forEach((fsrsData) => {
    const key = `${fsrsData.type}:${fsrsData.practice_item_key}`
    if (cardMap.has(key)) return

    const vocab = globalVocabCollection[fsrsData.practice_item_key]
    const richVocab = addKanaAndRuby([vocab])[0]

    const reviewCard: PracticeCard = {
      key,
      vocab: richVocab,
      fsrs: { card: fsrsData.fsrs_card, logs: fsrsData.fsrs_logs || [] },
      sessionScope: "review",
      practiceMode: fsrsData.mode,
      practiceItemType: fsrsData.type,
      sessionStyle: "flashcard", // Due reviews are always flashcards
      prompt: richVocab.word,
      validAnswers: [...richVocab.english],
    }
    cardMap.set(key, reviewCard)
    reviewQueue.push(key)
  })

  // --- Phase 3: Build Dependencies (All Cards Now Exist) ---
  allHierarchyItems.forEach((item) => {
    const type =
      "kanji" in item ? "vocabulary" : "radicals" in item ? "kanji" : "radical"
    const key = `${type}:${item.slug}`

    const prerequisites =
      type === "vocabulary"
        ? (item as VocabHierarchy).kanji
        : type === "kanji"
          ? (item as Kanji).radicals
          : []

    prerequisites.forEach((prereq) => {
      const prereqType = "radicals" in prereq ? "kanji" : "radical"
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
  // This loop is now simpler. It only checks for dependencies.
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
