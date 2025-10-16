// features/vocab-practice/components/pages/start-page/utils/preview-cards.ts
import { createEmptyCard } from "ts-fsrs"
import type {
  PracticeMode,
  PracticeCard,
} from "@/features/vocab-practice/types"

/**
 * Builds simplified preview cards progressively as data becomes available.
 * Used on the start page to show what will be practiced.
 */
export function buildPreviewCards(
  vocabulary: any[] | undefined,
  hierarchy: any | undefined,
  fsrsCards: any[] | undefined,
  mode: PracticeMode,
  flipVocabQA: boolean,
  flipKanjiRadicalQA: boolean,
  prerequisitesEnabled: boolean,
): PracticeCard[] {
  if (!vocabulary) return []

  const cards: PracticeCard[] = []
  const fsrsMap = new Map(
    fsrsCards?.map((card) => [
      `${card.type}:${card.practice_item_key}`,
      card,
    ]) || [],
  )

  // Helper to create basic card structure
  const createBasicCard = (
    word: string,
    type: "vocabulary" | "kanji" | "radical",
    prompt: string,
    validAnswers: string[],
  ): PracticeCard => {
    const key = `${type}:${word}`
    const fsrsData = fsrsMap.get(key)
    const fsrsCard = fsrsData?.fsrs_card
    const fsrsLogs = fsrsData?.fsrs_logs || []

    const now = new Date()

    return {
      key,
      prompt,
      validAnswers,
      practiceMode: mode,
      practiceItemType: type,
      sessionStyle: "multiple-choice",
      sessionScope: "module",
      isDisabled: false,
      fsrs: { card: fsrsCard || createEmptyCard(new Date()), logs: fsrsLogs },
      vocab: { word, furigana: word, english: validAnswers } as any,
      mnemonics: undefined,
    }
  }

  // Build cards based on available data
  if (hierarchy) {
    // Phase 2: Full hierarchy available - build all cards with proper ordering
    hierarchy.vocabulary.forEach((v: any) => {
      const vocabItem = vocabulary.find((item: any) => item.word === v.word)
      if (!vocabItem) return

      const prompt =
        mode === "meanings" && !flipVocabQA
          ? vocabItem.word
          : vocabItem.english?.join(", ") || ""
      const validAnswers =
        mode === "meanings" && !flipVocabQA
          ? vocabItem.english || []
          : [vocabItem.word]

      cards.push(
        createBasicCard(vocabItem.word, "vocabulary", prompt, validAnswers),
      )
    })

    if (prerequisitesEnabled) {
      // Add kanji cards
      hierarchy.kanji.forEach((k: any) => {
        const prompt = flipKanjiRadicalQA ? k.meanings.join(", ") : k.kanji
        const validAnswers = flipKanjiRadicalQA ? [k.kanji] : k.meanings
        cards.push(createBasicCard(k.kanji, "kanji", prompt, validAnswers))
      })

      // Add radical cards
      hierarchy.radicals.forEach((r: any) => {
        const prompt = flipKanjiRadicalQA ? r.meanings.join(", ") : r.radical
        const validAnswers = flipKanjiRadicalQA ? [r.radical] : r.meanings
        cards.push(createBasicCard(r.radical, "radical", prompt, validAnswers))
      })
    }
  } else {
    // Phase 1: Only vocabulary available - show basic vocab cards
    vocabulary.forEach((vocabItem: any) => {
      const prompt =
        mode === "meanings" && !flipVocabQA
          ? vocabItem.word
          : vocabItem.english?.join(", ") || ""
      const validAnswers =
        mode === "meanings" && !flipVocabQA
          ? vocabItem.english || []
          : [vocabItem.word]

      cards.push(
        createBasicCard(vocabItem.word, "vocabulary", prompt, validAnswers),
      )
    })
  }

  // Mark cards as disabled based on FSRS data (if available)
  if (fsrsCards && prerequisitesEnabled && hierarchy) {
    const now = new Date()
    cards.forEach((card) => {
      if (
        card.practiceItemType === "kanji" ||
        card.practiceItemType === "radical"
      ) {
        const isDue =
          !card.fsrs?.card?.due || new Date(card.fsrs.card.due) <= now
        if (!isDue) {
          card.isDisabled = true
        }
      }
    })
  }

  return cards
}
