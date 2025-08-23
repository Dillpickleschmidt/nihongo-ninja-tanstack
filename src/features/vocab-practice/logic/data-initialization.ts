import { createEmptyCard, State } from "ts-fsrs"
import type { VocabularyItem, Mnemonics } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type {
  PracticeCard,
  PracticeSessionState,
  PracticeMode,
  FSRSInfo,
  SessionCardStyle,
} from "../types"
import { addKanaAndRuby } from "@/data/utils/vocab"
import type {
  VocabHierarchy,
  VocabEntry,
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"
import { getKanjiDetails } from "@/features/resolvers/kanji"

/**
 * Creates a unified PracticeCard from clean hierarchy entry types.
 */
function createPracticeCardFromCleanEntry(
  word: string,
  type: DBPracticeItemType,
  cleanEntry: VocabEntry | KanjiEntry | RadicalEntry | null,
  fsrsData: FSRSCardData | null,
  sessionPracticeMode: PracticeMode,
  vocabularyMap: Map<string, VocabularyItem>,
  flipVocabQA: boolean,
  flipKanjiRadicalQA: boolean,
): PracticeCard {
  const key = `${type}:${word}`
  const existingFSRS = fsrsData?.fsrs_card
  const practiceMode = fsrsData?.mode || sessionPracticeMode

  const fsrsInfo: FSRSInfo = {
    card: existingFSRS || createEmptyCard(new Date()),
    logs: fsrsData?.fsrs_logs || [],
  }

  let vocabItem: VocabularyItem
  let characterForKanjiRadical = ""
  let meaningsForKanjiRadical: string[] = []
  let itemMnemonics: Mnemonics | undefined

  if (type === "vocabulary") {
    // For vocabulary, the source of truth is the global collection.
    vocabItem = vocabularyMap.get(word)!
    itemMnemonics = vocabItem?.mnemonics
  } else {
    // For Kanji and Radicals, use the clean entry data
    if (!cleanEntry) {
      throw new Error(`Missing clean entry for ${type}:${word}`)
    }

    if (type === "kanji") {
      const kanjiEntry = cleanEntry as KanjiEntry
      characterForKanjiRadical = kanjiEntry.kanji
      meaningsForKanjiRadical = kanjiEntry.meanings

      const kanjiMnemonics: string[] = []
      const readingMnemonics: string[] = []

      if (kanjiEntry.meaning_mnemonic)
        kanjiMnemonics.push(kanjiEntry.meaning_mnemonic)
      if (kanjiEntry.reading_mnemonic)
        readingMnemonics.push(kanjiEntry.reading_mnemonic)

      if (kanjiMnemonics.length > 0 || readingMnemonics.length > 0) {
        itemMnemonics = { kanji: kanjiMnemonics, reading: readingMnemonics }
      }
    } else {
      const radicalEntry = cleanEntry as RadicalEntry
      characterForKanjiRadical = radicalEntry.radical
      meaningsForKanjiRadical = radicalEntry.meanings

      if (radicalEntry.meaning_mnemonic) {
        itemMnemonics = { kanji: [radicalEntry.meaning_mnemonic], reading: [] }
      }
    }

    // Create a pseudo-vocabItem for Kanji/Radical for consistent `addKanaAndRuby`
    vocabItem = {
      word: characterForKanjiRadical,
      furigana: characterForKanjiRadical,
      english: meaningsForKanjiRadical,
    }
  }

  const richVocab = addKanaAndRuby([vocabItem])[0]

  let prompt: string
  let validAnswers: string[]

  if (type === "vocabulary") {
    if (practiceMode === "meanings") {
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
      // "spellings" mode
      if (flipVocabQA) {
        // Flipped: Hiragana/Kana prompt, English answer
        prompt = richVocab.hiragana.join(", ") || richVocab.word
        validAnswers = [...richVocab.english]
      } else {
        // Original: English prompt, Hiragana/Kana answer
        prompt = richVocab.english.join(", ")
        validAnswers = Array.from(new Set(richVocab.hiragana))
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

  let sessionStyle: SessionCardStyle = "multiple-choice"
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
    sessionStyle,
    prompt,
    validAnswers,
    mnemonics: itemMnemonics,
    isDisabled: false,
  }
}

/**
 * Initializes a practice session from hierarchical data and separate due reviews.
 */
export async function initializePracticeSession(
  hierarchy: VocabHierarchy,
  moduleFSRSCards: FSRSCardData[],
  allDueFSRSCards: FSRSCardData[],
  sessionPracticeMode: PracticeMode,
  moduleVocabulary: VocabularyItem[],
  flipVocabQA: boolean,
  flipKanjiRadicalQA: boolean,
  shuffle = false,
  enablePrerequisites = true,
  includeReviews = true,
): Promise<PracticeSessionState> {
  const cardMap = new Map<string, PracticeCard>()
  const dependencyMap = new Map<string, string[]>()
  const unlocksMap = new Map<string, string[]>()
  const lockedKeys = new Set<string>()
  let moduleQueue: string[] = []
  const reviewQueue: string[] = []

  // Create vocabulary lookup map from available module vocabulary
  const vocabularyMap = new Map(
    moduleVocabulary.map((item) => [item.word, item]),
  )

  // --- Phase 1: Create Module Cards ---
  hierarchy.vocabulary.forEach((vocabEntry) => {
    const key = `vocabulary:${vocabEntry.word}`
    const fsrsData =
      moduleFSRSCards.find((c) => c.practice_item_key === vocabEntry.word) ||
      null
    const card = createPracticeCardFromCleanEntry(
      vocabEntry.word,
      "vocabulary",
      vocabEntry,
      fsrsData,
      sessionPracticeMode,
      vocabularyMap,
      flipVocabQA,
      flipKanjiRadicalQA,
    )
    cardMap.set(key, card)
  })

  if (enablePrerequisites) {
    hierarchy.kanji.forEach((kanjiEntry) => {
      const key = `kanji:${kanjiEntry.kanji}`
      const fsrsData =
        moduleFSRSCards.find((c) => c.practice_item_key === kanjiEntry.kanji) ||
        null
      const card = createPracticeCardFromCleanEntry(
        kanjiEntry.kanji,
        "kanji",
        kanjiEntry,
        fsrsData,
        sessionPracticeMode,
        vocabularyMap,
        flipVocabQA,
        flipKanjiRadicalQA,
      )
      cardMap.set(key, card)
    })
    hierarchy.radicals.forEach((radicalEntry) => {
      const key = `radical:${radicalEntry.radical}`
      const fsrsData =
        moduleFSRSCards.find(
          (c) => c.practice_item_key === radicalEntry.radical,
        ) || null
      const card = createPracticeCardFromCleanEntry(
        radicalEntry.radical,
        "radical",
        radicalEntry,
        fsrsData,
        sessionPracticeMode,
        vocabularyMap,
        flipVocabQA,
        flipKanjiRadicalQA,
      )
      cardMap.set(key, card)
    })
  }

  // --- Phase 2: Process Standalone Due Reviews (only if including reviews) ---
  if (includeReviews) {
    const pureDueReviewCards = allDueFSRSCards.filter(
      (card) => !cardMap.has(`${card.type}:${card.practice_item_key}`),
    )

    // const dueVocab = pureDueReviewCards.filter((c) => c.type === "vocabulary")
    const dueKanji = pureDueReviewCards.filter((c) => c.type === "kanji")
    const dueRadicals = pureDueReviewCards.filter((c) => c.type === "radical")

    // Batch fetch missing kanji/radicals
    const missingKanjiSlugs = dueKanji
      .map((c) => c.practice_item_key)
      .filter((slug) => !hierarchy.kanji.find((k) => k.kanji === slug))
    const missingRadicalSlugs = dueRadicals
      .map((c) => c.practice_item_key)
      .filter((slug) => !hierarchy.radicals.find((r) => r.radical === slug))

    let fetchedData = {
      kanji: [] as KanjiEntry[],
      radicals: [] as RadicalEntry[],
    }
    if (missingKanjiSlugs.length > 0 || missingRadicalSlugs.length > 0) {
      fetchedData = await getKanjiDetails({
        data: { kanji: missingKanjiSlugs, radicals: missingRadicalSlugs },
      })
    }

    const kanjiLookup = new Map(
      [...hierarchy.kanji, ...fetchedData.kanji].map((k) => [k.kanji, k]),
    )
    const radicalLookup = new Map(
      [...hierarchy.radicals, ...fetchedData.radicals].map((r) => [
        r.radical,
        r,
      ]),
    )

    const now = new Date()
    let skippedVocabCount = 0
    let skippedKanjiCount = 0
    let skippedRadicalCount = 0

    pureDueReviewCards.forEach((fsrsData) => {
      const isDue = fsrsData.fsrs_card.due && fsrsData.fsrs_card.due <= now
      const matchesMode = fsrsData.mode === sessionPracticeMode
      if (!isDue || !matchesMode) return

      const key = `${fsrsData.type}:${fsrsData.practice_item_key}`
      let cleanEntry: VocabEntry | KanjiEntry | RadicalEntry | null = null

      if (fsrsData.type === "vocabulary") {
        const vocabItem = vocabularyMap.get(fsrsData.practice_item_key)
        if (!vocabItem) {
          skippedVocabCount++ // Skip vocab reviews not in module vocabulary
          return
        }
        cleanEntry = { word: vocabItem.word, kanjiComponents: [] }
      } else if (fsrsData.type === "kanji") {
        cleanEntry = kanjiLookup.get(fsrsData.practice_item_key) || null
        if (!cleanEntry) {
          skippedKanjiCount++ // Skip kanji reviews not in hierarchy
          return
        }
      } else if (fsrsData.type === "radical") {
        cleanEntry = radicalLookup.get(fsrsData.practice_item_key) || null
        if (!cleanEntry) {
          skippedRadicalCount++ // Skip radical reviews not in hierarchy
          return
        }
      }

      const reviewCard = createPracticeCardFromCleanEntry(
        fsrsData.practice_item_key,
        fsrsData.type,
        cleanEntry,
        fsrsData,
        fsrsData.mode,
        vocabularyMap,
        flipVocabQA,
        flipKanjiRadicalQA,
      )
      reviewCard.sessionScope = "review"
      reviewCard.sessionStyle = "flashcard"
      cardMap.set(key, reviewCard)
    })

    if (skippedVocabCount > 0) {
      console.log(
        `[init] Skipped ${skippedVocabCount} vocab reviews (not in module vocabulary)`,
      )
    }
    if (skippedKanjiCount > 0) {
      console.log(
        `[init] Skipped ${skippedKanjiCount} kanji reviews (not in hierarchy)`,
      )
    }
    if (skippedRadicalCount > 0) {
      console.log(
        `[init] Skipped ${skippedRadicalCount} radical reviews (not in hierarchy)`,
      )
    }
  }

  // --- Phase 3: Build Dependencies (Only if prerequisites are enabled) ---
  if (enablePrerequisites) {
    // 3a. Process vocabulary dependencies on kanji
    hierarchy.vocabulary.forEach((vocabEntry) => {
      const vocabKey = `vocabulary:${vocabEntry.word}`
      vocabEntry.kanjiComponents.forEach((kanjiChar) => {
        const kanjiKey = `kanji:${kanjiChar}`
        const kanjiCard = cardMap.get(kanjiKey)
        if (!kanjiCard) return
        const now = new Date()
        const isDue = !kanjiCard.fsrs.card.due || kanjiCard.fsrs.card.due <= now
        if (!unlocksMap.has(kanjiKey)) unlocksMap.set(kanjiKey, [])
        unlocksMap.get(kanjiKey)!.push(vocabKey)
        if (isDue) {
          if (!dependencyMap.has(vocabKey)) dependencyMap.set(vocabKey, [])
          dependencyMap.get(vocabKey)!.push(kanjiKey)
        } else {
          kanjiCard.isDisabled = true
        }
      })
    })

    // 3b. Process kanji dependencies on radicals
    hierarchy.kanji.forEach((kanjiEntry) => {
      const kanjiKey = `kanji:${kanjiEntry.kanji}`
      kanjiEntry.radicalComponents.forEach((radicalChar) => {
        const radicalKey = `radical:${radicalChar}`
        const radicalCard = cardMap.get(radicalKey)
        if (!radicalCard) return
        const now = new Date()
        const isDue =
          !radicalCard.fsrs.card.due || radicalCard.fsrs.card.due <= now
        if (!unlocksMap.has(radicalKey)) unlocksMap.set(radicalKey, [])
        unlocksMap.get(radicalKey)!.push(kanjiKey)
        if (isDue) {
          if (!dependencyMap.has(kanjiKey)) dependencyMap.set(kanjiKey, [])
          dependencyMap.get(kanjiKey)!.push(radicalKey)
        } else {
          radicalCard.isDisabled = true
        }
      })
    })
  }

  // --- Phase 4: Lock Cards and Populate Queues ---
  for (const [key, card] of cardMap.entries()) {
    if (card.isDisabled) continue // Skip disabled cards
    if (card.sessionScope === "module") {
      // Only lock if prerequisites are enabled AND there's an actual dependency
      if (enablePrerequisites && dependencyMap.has(key)) {
        lockedKeys.add(key)
      } else {
        moduleQueue.push(key)
      }
    } else {
      // Review cards: if they exist in cardMap, they're already filtered and ready
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
