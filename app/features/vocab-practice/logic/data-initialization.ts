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
  practiceMode: PracticeMode,
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

    // Create or use existing FSRS data
    const fsrsData: FSRSCardData = existingFSRSData || {
      practice_item_key: key,
      fsrs_card: createEmptyCard(new Date()),
      fsrs_logs: [],
    }

    const fsrsInfo: FSRSInfo = {
      card: fsrsData.fsrs_card,
      logs: fsrsData.fsrs_logs || [],
    }

    const { prompt, validAnswers } = getAnswersForMode(vocab, practiceMode)

    const practiceCard: PracticeCard = {
      key,
      vocab,
      fsrs: fsrsInfo, // Use the correctly transformed object
      sessionStyle: "multiple-choice",
      prompt,
      validAnswers,
    }

    cardMap.set(key, practiceCard)
    moduleQueue.push(key)
    existingFSRSMap.delete(key)
  })

  // Process remaining due FSRS cards (non-module cards)
  existingFSRSMap.forEach((fsrsData, key) => {
    let vocab: RichVocabItem

    const baseVocab = globalVocabCollection[key]
    vocab = addKanaAndRuby([baseVocab])[0]

    // --- FIX: Explicitly transform FSRSCardData to FSRSInfo ---
    const fsrsInfo: FSRSInfo = {
      card: fsrsData.fsrs_card,
      logs: fsrsData.fsrs_logs || [],
    }

    const { prompt, validAnswers } = getAnswersForMode(vocab, practiceMode)

    const practiceCard: PracticeCard = {
      key,
      vocab,
      fsrs: fsrsInfo, // Use the correctly transformed object
      sessionStyle: "flashcard",
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
  const prompt = vocab.word
  let validAnswers: string[]

  if (mode === "readings") {
    validAnswers = [...vocab.english]
  } else {
    validAnswers = [...vocab.hiragana]
  }

  return { prompt, validAnswers }
}
