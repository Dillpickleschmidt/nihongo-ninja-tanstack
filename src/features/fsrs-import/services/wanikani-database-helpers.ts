// src/features/fsrs-import/wanikaniHelpers.ts

import { type DBPracticeItemType } from "../core/schemas"

export type WaniKaniSubjectMapping = {
  id: number
  slug: string
  type: DBPracticeItemType
}

export type WaniKaniApiSubjectRow = {
  id: number
  object: "radical" | "kanji" | "vocabulary" | "kana_vocabulary"
  characters: string | null
  slug: string
}

/**
 * Maps WaniKani subject 'object' type to the DBPracticeItemType enum.
 */
export function mapWaniKaniObjectToDBType(
  objectType: WaniKaniApiSubjectRow["object"],
): DBPracticeItemType {
  switch (objectType) {
    case "vocabulary":
    case "kana_vocabulary":
      return "vocabulary"
    case "kanji":
      return "kanji"
    case "radical":
      return "radical"
    default:
      console.warn(
        `[WaniKaniMapper] Unknown WaniKani object type: ${objectType}. Defaulting to 'vocabulary'.`,
      )
      return "vocabulary"
  }
}

/**
 * Removes duplicate subjects based on slug + type combination.
 * Maintains original order for unique subjects.
 */
export function deduplicateSubjects(
  subjects: WaniKaniSubjectMapping[],
): WaniKaniSubjectMapping[] {
  const seen = new Set<string>()
  const deduplicated: WaniKaniSubjectMapping[] = []

  for (const subject of subjects) {
    const key = `${subject.slug}-${subject.type}`

    if (!seen.has(key)) {
      seen.add(key)
      deduplicated.push(subject)
    }
  }

  return deduplicated
}

/**
 * Prepares batch query placeholders and parameters for multiple search terms.
 * Creates SQL placeholders and parameter array repeated for each table.
 */
export function prepareBatchQuery(terms: string[]): {
  placeholders: string
  parameters: string[]
} {
  if (terms.length === 0) {
    return {
      placeholders: "",
      parameters: [],
    }
  }

  // Create placeholders for the terms (?,?,?)
  const placeholders = terms.map(() => "?").join(",")

  // Create parameters repeated for each table (vocabulary, kana_vocabulary, kanji, radicals)
  const parameters = [
    ...terms, // for vocabulary
    ...terms, // for kana_vocabulary
    ...terms, // for kanji
    ...terms, // for radicals
  ]

  return {
    placeholders,
    parameters,
  }
}

/**
 * Groups database results by search term and applies deduplication.
 * Maps WaniKani API objects to subject mappings.
 */
export function groupSubjectsBySearchTerm(
  searchTerms: string[],
  dbResults: (WaniKaniApiSubjectRow & { characters: string })[],
): Map<string, WaniKaniSubjectMapping[]> {
  const grouped = new Map<string, WaniKaniSubjectMapping[]>()

  // Initialize empty arrays for all search terms
  for (const term of searchTerms) {
    grouped.set(term, [])
  }

  // Group results by characters field
  for (const row of dbResults) {
    const subjects = grouped.get(row.characters)

    if (subjects) {
      const mappedSubject: WaniKaniSubjectMapping = {
        id: row.id,
        slug: row.slug,
        type: mapWaniKaniObjectToDBType(row.object),
      }

      subjects.push(mappedSubject)
    }
  }

  // Deduplicate within each group
  for (const [term, subjects] of grouped.entries()) {
    grouped.set(term, deduplicateSubjects(subjects))
  }

  return grouped
}
