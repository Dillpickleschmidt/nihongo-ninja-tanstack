import {
  getDueCards,
  getAllSeenCards,
  getWeekSeenCards,
  extractJapaneseTextFromCard,
  type AnkiCardInfo,
} from "./anki-connect-client"
import { containsKanji } from "@/data/utils/text/japanese"

export interface AnkiDueCount {
  total: number
  vocab: number
  kanji: number
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

function classifyCards(cards: AnkiCardInfo[]): {
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

export async function getAnkiDueCount(): Promise<AnkiDueCount> {
  const cards = await getDueCards()
  const { vocab, kanji } = classifyCards(cards)
  return { total: vocab + kanji, vocab, kanji }
}

export async function getAnkiSeenStats(): Promise<AnkiSeenStats> {
  const [allCards, weekCards] = await Promise.all([
    getAllSeenCards(),
    getWeekSeenCards(),
  ])

  const all = classifyCards(allCards)
  const week = classifyCards(weekCards)

  return {
    vocab: all.vocab,
    kanji: all.kanji,
    vocabWeek: week.vocab,
    kanjiWeek: week.kanji,
  }
}
