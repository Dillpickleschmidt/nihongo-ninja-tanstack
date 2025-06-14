// vocab-practice/logic/data-initialization.ts
import { createEmptyCard } from "ts-fsrs"
import type { RichVocabItem, VocabularyCollection } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type {
  PracticeCard,
  PracticeSessionState,
  PracticeMode,
  FSRSInfo,
} from "../types"
import { addKanaAndRuby } from "@/data/utils/vocab"

export function initializePracticeSession(
  vocabulary: RichVocabItem[],
  moduleFSRSCards: FSRSCardData[],
  dueFSRSCards: FSRSCardData[],
  sessionPracticeMode: PracticeMode,
  globalVocabCollection: VocabularyCollection,
): PracticeSessionState {
  const cardMap = new Map<string, PracticeCard>()
  const moduleQueue: string[] = []
  const reviewQueue: string[] = []

  const existingFSRSMap = new Map<string, FSRSCardData>()

  moduleFSRSCards.forEach((card) => {
    existingFSRSMap.set(card.practice_item_key, card)
  })

  dueFSRSCards.forEach((card) => {
    if (!existingFSRSMap.has(card.practice_item_key)) {
      existingFSRSMap.set(card.practice_item_key, card)
    }
  })

  // Process vocabulary items (module cards)
  vocabulary.forEach((vocab) => {
    const key = vocab.word
    const existingFSRSData = existingFSRSMap.get(key)

    const fsrsData: FSRSCardData = existingFSRSData || {
      practice_item_key: key,
      fsrs_card: createEmptyCard(new Date()),
      fsrs_logs: [],
      mode: sessionPracticeMode, // New cards get the session's practice mode
    }

    const fsrsInfo: FSRSInfo = {
      card: fsrsData.fsrs_card,
      logs: fsrsData.fsrs_logs || [],
    }

    // Use the session's mode for these new cards
    const { prompt, validAnswers } = getAnswersForMode(
      vocab,
      sessionPracticeMode,
    )

    const practiceCard: PracticeCard = {
      key,
      vocab,
      fsrs: fsrsInfo,
      sessionStyle: "multiple-choice",
      practiceMode: sessionPracticeMode, // Assign the mode to the card
      prompt,
      validAnswers,
    }

    cardMap.set(key, practiceCard)
    moduleQueue.push(key)
    existingFSRSMap.delete(key)
  })

  // Process remaining due FSRS cards (non-module review cards)
  existingFSRSMap.forEach((fsrsData, key) => {
    let vocab: RichVocabItem

    const baseVocab = globalVocabCollection[key]
    vocab = addKanaAndRuby([baseVocab])[0]

    const fsrsInfo: FSRSInfo = {
      card: fsrsData.fsrs_card,
      logs: fsrsData.fsrs_logs || [],
    }

    // Use the mode from the DB
    const cardPracticeMode = fsrsData.mode
    const { prompt, validAnswers } = getAnswersForMode(vocab, cardPracticeMode)

    const practiceCard: PracticeCard = {
      key,
      vocab,
      fsrs: fsrsInfo,
      sessionStyle: "flashcard",
      practiceMode: cardPracticeMode,
      prompt,
      validAnswers,
    }

    cardMap.set(key, practiceCard)
    reviewQueue.push(key)
  })

  return {
    cardMap,
    moduleQueue,
    reviewQueue,
    activeQueue: [],
    isFinished: false,
  }
}

function getAnswersForMode(vocab: RichVocabItem, mode: PracticeMode) {
  let prompt: string
  let validAnswers: string[]

  if (mode === "readings") {
    prompt = vocab.word
    validAnswers = [...vocab.english]
  } else {
    prompt = vocab.english.join(", ")

    // Accept both the original word (kanji) and the hiragana version.
    const answers = new Set([...vocab.hiragana, vocab.word])
    validAnswers = Array.from(answers)
  }

  return { prompt, validAnswers }
}
