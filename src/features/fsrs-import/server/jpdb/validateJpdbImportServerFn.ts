import { createServerFn } from "@tanstack/solid-start"
import { getWaniKaniService, type WaniKaniSubject } from "../../services/wanikani-service"
import { type NormalizedCard } from "../../shared/types/import-data-models"
import {
  type JpdbValidationResponse,
  type MatchedKanjiRadical,
  type UnmatchedKanjiRadical,
  JpdbValidationResponseSchema,
} from "../../adapters/jpdb/jpdb-validation-types"
import { z } from "zod"

const ValidateJpdbImportInputSchema = z.object({
  cards: z.array(z.unknown()),
})
type ValidateJpdbImportInput = z.infer<typeof ValidateJpdbImportInputSchema>

export const validateJpdbImportServerFn = createServerFn({
  method: "POST",
})
  .inputValidator((input: any): ValidateJpdbImportInput => {
    return ValidateJpdbImportInputSchema.parse(input)
  })
  .handler(async ({ data }): Promise<JpdbValidationResponse> => {
    const cards = data.cards as NormalizedCard[]

    // Separate vocabulary from kanji/radicals
    const kanjiRadicalCards: NormalizedCard[] = []
    let vocabularyCount = 0

    for (const card of cards) {
      // Cards with sources containing "kanji" are kanji/radicals
      if (card.source.includes("kanji")) {
        kanjiRadicalCards.push(card)
      } else {
        vocabularyCount++
      }
    }

    // Only do WaniKani lookup for kanji/radicals
    if (kanjiRadicalCards.length === 0) {
      return JpdbValidationResponseSchema.parse({
        matched: [],
        unmatched: [],
        vocabularyCount,
      })
    }

    const waniKaniService = getWaniKaniService()
    const searchTerms = kanjiRadicalCards.map((card) => card.searchTerm)
    const waniKaniResults =
      await waniKaniService.batchFindSubjects(searchTerms)

    const matched: MatchedKanjiRadical[] = []
    const unmatched: UnmatchedKanjiRadical[] = []

    for (const card of kanjiRadicalCards) {
      const subjects = waniKaniResults.get(card.searchTerm) || []

      if (subjects.length > 0) {
        // Character found in WaniKani - use subject slug as meaning placeholder
        const subject: WaniKaniSubject = subjects[0]
        const meaning = subject.slug

        matched.push({
          character: card.searchTerm,
          meaning,
          source: card.source,
        })
      } else {
        unmatched.push({
          character: card.searchTerm,
          source: card.source,
        })
      }
    }

    return JpdbValidationResponseSchema.parse({
      matched,
      unmatched,
      vocabularyCount,
    })
  })
