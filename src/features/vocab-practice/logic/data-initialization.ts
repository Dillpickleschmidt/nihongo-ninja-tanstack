import { createEmptyCard, State } from 'ts-fsrs'
import type {
  VocabularyItem,
  VocabHierarchy,
  KanjiEntry,
  RadicalEntry,
  PracticeMode,
  Mnemonics,
} from 'convex/validators'
import type { TsFSRSCardData } from 'convex/model/fsrs'
import type {
  PracticeCard,
  PracticeSessionState,
  FSRSInfo,
  SessionCardStyle,
} from '../types'
import { addKanaAndRuby } from '@/data/utils/vocabulary/transforms'

/**
 * Consistent data structure for both module and non-module items
 */
export type PracticeItemData = {
  vocabulary: VocabularyItem[]
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
  fsrsCards: TsFSRSCardData[]
}

/**
 * Creates a unified PracticeCard from display data.
 * - For vocabulary: uses VocabularyItem directly
 * - For kanji/radicals: uses KanjiEntry/RadicalEntry with meanings and mnemonics
 */
function createPracticeCard(
  key: string,
  type: 'vocabulary' | 'kanji' | 'radical',
  displayData: VocabularyItem | KanjiEntry | RadicalEntry,
  fsrsData: TsFSRSCardData | null,
  sessionPracticeMode: PracticeMode,
): PracticeCard {
  const existingFSRS = fsrsData?.fsrsCard
  const practiceMode = fsrsData?.mode || sessionPracticeMode

  const fsrsInfo: FSRSInfo = {
    card: existingFSRS || createEmptyCard(new Date()),
    logs: fsrsData?.fsrsLogs || [],
  }

  let vocabItem: VocabularyItem
  let characterForKanjiRadical = ''
  let meaningsForKanjiRadical: string[] = []

  if (type === 'vocabulary') {
    vocabItem = displayData as VocabularyItem
  } else if (type === 'kanji') {
    const kanjiEntry = displayData as KanjiEntry
    characterForKanjiRadical = kanjiEntry.kanji
    meaningsForKanjiRadical = kanjiEntry.meanings

    const kanjiMnemonics: string[] = []
    const readingMnemonics: string[] = []

    if (kanjiEntry.meaningMnemonic)
      kanjiMnemonics.push(kanjiEntry.meaningMnemonic)
    if (kanjiEntry.readingMnemonic)
      readingMnemonics.push(kanjiEntry.readingMnemonic)

    let itemMnemonics: Mnemonics | undefined
    if (kanjiMnemonics.length > 0 || readingMnemonics.length > 0) {
      itemMnemonics = { kanji: kanjiMnemonics, reading: readingMnemonics }
    }

    // Create a pseudo-vocabItem for Kanji
    vocabItem = {
      key: kanjiEntry.kanji,
      word: characterForKanjiRadical,
      furigana: characterForKanjiRadical,
      english: meaningsForKanjiRadical,
      mnemonics: itemMnemonics,
    }
  } else {
    const radicalEntry = displayData as RadicalEntry
    characterForKanjiRadical = radicalEntry.radical
    meaningsForKanjiRadical = radicalEntry.meanings

    let itemMnemonics: Mnemonics | undefined
    if (radicalEntry.meaningMnemonic) {
      itemMnemonics = { kanji: [radicalEntry.meaningMnemonic], reading: [] }
    }

    // Create a pseudo-vocabItem for Radical
    vocabItem = {
      key: radicalEntry.radical,
      word: characterForKanjiRadical,
      furigana: characterForKanjiRadical,
      english: meaningsForKanjiRadical,
      mnemonics: itemMnemonics,
    }
  }

  const richVocab = addKanaAndRuby([vocabItem])[0]

  let prompt: string
  let validAnswers: string[]

  if (type === 'vocabulary') {
    if (practiceMode === 'meanings') {
      // Meanings mode: Japanese word prompt, English answer
      prompt = richVocab.word
      validAnswers = [...richVocab.english]
    } else {
      // Spellings mode: English prompt, Kana answer
      prompt = richVocab.english.join(', ')
      validAnswers = Array.from(new Set(richVocab.hiragana))
    }
  } else {
    // Kanji and Radicals: Character prompt, Meanings answer
    prompt = characterForKanjiRadical
    validAnswers = meaningsForKanjiRadical
  }

  let sessionStyle: SessionCardStyle = 'multiple-choice'
  const isKanjiOrRadical = type === 'kanji' || type === 'radical'

  if (isKanjiOrRadical && fsrsInfo.card.state === State.New) {
    // If it's a new Kanji or Radical, start with an introduction phase
    sessionStyle = 'introduction'
  } else if (fsrsInfo.card.state === State.Review) {
    if (type === 'vocabulary') {
      sessionStyle = 'multiple-choice'
    } else {
      // Dependencies or due reviews in review state should be quick flashcards.
      sessionStyle = 'flashcard'
    }
  }

  return {
    key,
    vocab: richVocab,
    fsrs: fsrsInfo,
    sessionScope: 'module',
    practiceMode,
    practiceItemType: type,
    sessionStyle,
    prompt,
    validAnswers,
    isDisabled: false,
  }
}

/**
 * Initializes a practice session from hierarchical data and pre-fetched display data.
 *
 * @param hierarchy - Lightweight relationships only (vocab→kanji→radical dependencies)
 * @param moduleData - Module items with display data and FSRS cards
 * @param nonModuleData - Pre-filtered non-module review items with display data already fetched
 * @param sessionPracticeMode - The practice mode for this session
 * @param shuffle - Whether to shuffle the module queue
 * @param enablePrerequisites - Whether to enforce kanji/radical prerequisites
 * @param includeReviews - Whether to include non-module review items
 */
export function initializePracticeSession(
  hierarchy: VocabHierarchy,
  moduleData: PracticeItemData,
  nonModuleData: PracticeItemData,
  sessionPracticeMode: PracticeMode,
  shuffle = false,
  enablePrerequisites = true,
  includeReviews = true,
): PracticeSessionState {
  const cardMap = new Map<string, PracticeCard>()
  const dependencyMap = new Map<string, string[]>()
  const unlocksMap = new Map<string, string[]>()
  const lockedKeys = new Set<string>()
  let moduleQueue: string[] = []
  const reviewQueue: string[] = []

  // Create lookup maps for display data
  const vocabLookup = new Map(moduleData.vocabulary.map((v) => [v.word, v]))
  const kanjiLookup = new Map(moduleData.kanji.map((k) => [k.kanji, k]))
  const radicalLookup = new Map(moduleData.radicals.map((r) => [r.radical, r]))

  // --- Phase 1: Create Module Cards ---

  // 1a. Create vocabulary cards
  hierarchy.vocabulary.forEach((vocabRel) => {
    const key = `vocabulary:${vocabRel.word}`
    const displayData = vocabLookup.get(vocabRel.word)
    if (!displayData) return // Skip if no display data

    const fsrsData =
      moduleData.fsrsCards.find(
        (c) =>
          c.practiceItemKey === vocabRel.word &&
          c.type === 'vocabulary' &&
          c.mode === sessionPracticeMode,
      ) || null

    const card = createPracticeCard(
      key,
      'vocabulary',
      displayData,
      fsrsData,
      sessionPracticeMode,
    )
    cardMap.set(key, card)
  })

  // 1b. Create kanji cards (only if prerequisites enabled)
  if (enablePrerequisites) {
    hierarchy.kanji.forEach((kanjiRel) => {
      const key = `kanji:${kanjiRel.kanji}`
      const displayData = kanjiLookup.get(kanjiRel.kanji)
      if (!displayData) return // Skip if no display data

      const fsrsData =
        moduleData.fsrsCards.find(
          (c) =>
            c.practiceItemKey === kanjiRel.kanji &&
            c.type === 'kanji' &&
            c.mode === sessionPracticeMode,
        ) || null

      const card = createPracticeCard(
        key,
        'kanji',
        displayData,
        fsrsData,
        sessionPracticeMode,
      )
      cardMap.set(key, card)
    })

    // 1c. Create radical cards (only if prerequisites enabled)
    hierarchy.radicals.forEach((radicalChar) => {
      const key = `radical:${radicalChar}`
      const displayData = radicalLookup.get(radicalChar)
      if (!displayData) return // Skip if no display data

      const fsrsData =
        moduleData.fsrsCards.find(
          (c) =>
            c.practiceItemKey === radicalChar &&
            c.type === 'radical' &&
            c.mode === sessionPracticeMode,
        ) || null

      const card = createPracticeCard(
        key,
        'radical',
        displayData,
        fsrsData,
        sessionPracticeMode,
      )
      cardMap.set(key, card)
    })
  }

  // --- Phase 2: Create Non-Module Review Cards ---
  if (includeReviews) {
    // Create lookup maps for non-module display data
    const nonModuleVocabLookup = new Map(
      nonModuleData.vocabulary.map((v) => [v.word, v]),
    )
    const nonModuleKanjiLookup = new Map(
      nonModuleData.kanji.map((k) => [k.kanji, k]),
    )
    const nonModuleRadicalLookup = new Map(
      nonModuleData.radicals.map((r) => [r.radical, r]),
    )

    const now = new Date()

    nonModuleData.fsrsCards.forEach((fsrsData) => {
      const key = `${fsrsData.type}:${fsrsData.practiceItemKey}`

      // Skip if already in module cards
      if (cardMap.has(key)) return

      // Skip if not due or wrong mode
      const isDue =
        fsrsData.fsrsCard.due && new Date(fsrsData.fsrsCard.due) <= now
      const matchesMode = fsrsData.mode === sessionPracticeMode
      if (!isDue || !matchesMode) return

      // Find display data
      let displayData: VocabularyItem | KanjiEntry | RadicalEntry | undefined

      if (fsrsData.type === 'vocabulary') {
        displayData = nonModuleVocabLookup.get(fsrsData.practiceItemKey)
      } else if (fsrsData.type === 'kanji') {
        displayData = nonModuleKanjiLookup.get(fsrsData.practiceItemKey)
      } else if (fsrsData.type === 'radical') {
        displayData = nonModuleRadicalLookup.get(fsrsData.practiceItemKey)
      }

      if (!displayData) return // Skip if no display data available

      const reviewCard = createPracticeCard(
        key,
        fsrsData.type,
        displayData,
        fsrsData,
        sessionPracticeMode,
      )
      reviewCard.sessionScope = 'review'
      reviewCard.sessionStyle = 'flashcard'
      cardMap.set(key, reviewCard)
    })
  }

  // --- Phase 3: Build Dependencies (Only if prerequisites are enabled) ---
  if (enablePrerequisites) {
    // 3a. Process vocabulary dependencies on kanji
    hierarchy.vocabulary.forEach((vocabRel) => {
      const vocabKey = `vocabulary:${vocabRel.word}`
      if (!cardMap.has(vocabKey)) return

      vocabRel.kanjiComponents.forEach((kanjiChar) => {
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
    hierarchy.kanji.forEach((kanjiRel) => {
      const kanjiKey = `kanji:${kanjiRel.kanji}`
      if (!cardMap.has(kanjiKey)) return

      kanjiRel.radicalComponents.forEach((radicalChar) => {
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

    if (card.sessionScope === 'module') {
      // Only lock if prerequisites are enabled AND there's an actual dependency
      if (enablePrerequisites && dependencyMap.has(key)) {
        lockedKeys.add(key)
      } else {
        moduleQueue.push(key)
      }
    } else {
      // Review cards go to review queue
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
