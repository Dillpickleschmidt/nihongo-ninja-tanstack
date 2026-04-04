import type { CounterPattern, VocabItem, GeneratedQuestion } from "../types"
import { getFullCounterReading } from "./soundChangesUtils"

const UNITS = [
  "",
  "いち",
  "に",
  "さん",
  "よん",
  "ご",
  "ろく",
  "なな",
  "はち",
  "きゅう",
]

const TENS = [
  "",
  "じゅう",
  "にじゅう",
  "さんじゅう",
  "よんじゅう",
  "ごじゅう",
  "ろくじゅう",
  "ななじゅう",
  "はちじゅう",
  "きゅうじゅう",
]

export function getNumberReading(num: number): string {
  if (num === 0) return "れい"
  if (num === 10) return "じゅう"
  if (num < 10) return UNITS[num]
  const unit = num % 10
  const ten = Math.floor(num / 10)
  return TENS[ten] + (unit > 0 ? UNITS[unit] : "")
}

export function getCounterReading(
  pattern: CounterPattern,
  num: number,
): string {
  const override = pattern.numberOverrides?.find((o) => o.number === num)
  if (override) return override.reading
  return getFullCounterReading(getNumberReading(num), pattern)
}

export function generateQuestion(
  patterns: CounterPattern[],
  vocab: VocabItem[],
): GeneratedQuestion {
  const vocabItem = vocab[Math.floor(Math.random() * vocab.length)]
  const pattern = patterns.find((p) => p.id === vocabItem.patternId)!
  const min = pattern.range?.[0] ?? 1
  const max = pattern.range?.[1] ?? 50
  const number = Math.floor(Math.random() * (max - min + 1)) + min
  const correctReading = getCounterReading(pattern, number)

  return { number, vocab: vocabItem, pattern, correctReading }
}
