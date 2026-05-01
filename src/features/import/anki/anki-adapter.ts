import {
  getDueCards,
  getAllSeenCards,
  getWeekSeenCards,
  extractJapaneseTextFromCard,
  type AnkiCardInfo,
} from "./anki-connect-client"
import { containsKanji } from "@/data/utils/text/japanese"
import { ANKI_MODELS } from "./anki-models"

export interface AnkiDueCount {
  total: number
  meanings: number
  spellings: number
}

export interface AnkiSeenStats {
  vocab: number
  kanji: number
  vocabWeek: number
  kanjiWeek: number
}

function isSingleKanji(text: string): boolean {
  return text.length === 1 && containsKanji(text)
}

function classifySeenCards(cards: AnkiCardInfo[]): {
  vocab: number
  kanji: number
} {
  let vocab = 0
  let kanji = 0
  for (const card of cards) {
    const text = extractJapaneseTextFromCard(card)
    if (isSingleKanji(text)) {
      kanji++
    } else {
      vocab++
    }
  }
  return { vocab, kanji }
}

export function getRecognizedPracticeMode(
  card: AnkiCardInfo,
): "meanings" | "spellings" | null {
  if (
    card.modelName === ANKI_MODELS.vocabMeanings.modelName ||
    card.modelName === ANKI_MODELS.symbolMeanings.modelName
  ) {
    return "meanings"
  }

  if (card.modelName === ANKI_MODELS.spellings.modelName) {
    return "spellings"
  }

  return null
}

export async function getAnkiDueCount(): Promise<AnkiDueCount> {
  const cards = await getDueCards()
  let meanings = 0
  let spellings = 0

  for (const card of cards) {
    if (!card.fields.NnKey) continue

    const mode = getRecognizedPracticeMode(card)
    if (mode === "meanings") meanings++
    if (mode === "spellings") spellings++
  }

  return { total: meanings + spellings, meanings, spellings }
}

export async function getAnkiSeenStats(): Promise<AnkiSeenStats> {
  const [allCards, weekCards] = await Promise.all([
    getAllSeenCards(),
    getWeekSeenCards(),
  ])

  const all = classifySeenCards(allCards)
  const week = classifySeenCards(weekCards)

  return {
    vocab: all.vocab,
    kanji: all.kanji,
    vocabWeek: week.vocab,
    kanjiWeek: week.kanji,
  }
}
