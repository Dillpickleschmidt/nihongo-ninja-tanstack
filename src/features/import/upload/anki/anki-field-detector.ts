import { containsJapanese } from "@/data/utils/text/japanese"
import type { AnkiNote, FieldMapping } from "./anki-types"

// Heuristic: shortest non-Japanese field is likely the English meaning
export function detectWordField(fields: string[]): number {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] && containsJapanese(fields[i])) {
      return i
    }
  }
  return 0
}

export function detectEnglishField(fields: string[]): number {
  let bestIndex = -1
  let shortestLength = Infinity

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (!field || field.trim().length === 0 || containsJapanese(field)) {
      continue
    }

    if (field.length < shortestLength) {
      shortestLength = field.length
      bestIndex = i
    }
  }

  if (bestIndex === -1) {
    for (let i = 0; i < fields.length; i++) {
      if (fields[i] && !containsJapanese(fields[i])) {
        return i
      }
    }
  }

  return bestIndex !== -1 ? bestIndex : 1
}

export function autoDetectFieldMapping(sampleNote: AnkiNote): FieldMapping {
  const fields = sampleNote.flds.split("\x1f")

  return {
    wordFieldIndex: detectWordField(fields),
    englishFieldIndex: detectEnglishField(fields),
  }
}

export function isValidFieldMapping(mapping: FieldMapping, fieldCount: number): boolean {
  return (
    mapping.wordFieldIndex >= 0 &&
    mapping.wordFieldIndex < fieldCount &&
    mapping.englishFieldIndex >= 0 &&
    mapping.englishFieldIndex < fieldCount
  )
}
