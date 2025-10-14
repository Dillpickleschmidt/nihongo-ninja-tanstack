import { createServerFn } from "@tanstack/solid-start"
import { getWaniKaniService } from "../services/wanikani-service"
import { type NormalizedCard } from "../core/schemas"
import {
  type JpdbValidationResponse,
  JpdbValidationResponseSchema,
} from "../core/jpdb-validation-types"
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

    const matched = []
    const unmatched = []

    for (const card of kanjiRadicalCards) {
      const subjects = waniKaniResults.get(card.searchTerm) || []

      if (subjects.length > 0) {
        // Take the first subject's meanings
        const subject = subjects[0]
        const meanings = subject.meanings?.map((m: any) => m.meaning).join(", ") || "No meaning available"

        matched.push({
          character: card.searchTerm,
          meaning: meanings,
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
