// core/conjugation/ConjugationEngine.ts
import { conjugate as baseConjugate } from "@/features/conjugation-practice/utils/conjugationUtils"
import { extractHiragana } from "@/data/utils/text/furigana"
import { ConjugationRules } from "./ConjugationRules"
import { KanjiProcessor } from "./KanjiProcessor"
import type { ConjugatedWord } from "./types"

export class ConjugationEngine {
  private rules: ConjugationRules
  private kanjiProcessor: KanjiProcessor

  constructor() {
    this.rules = new ConjugationRules()
    this.kanjiProcessor = new KanjiProcessor()
  }

  conjugateSegments(
    segments: (string | ConjugatedWord)[],
    politeForm: boolean,
    forceMode?: "polite" | "casual",
  ): string[][] {
    const effectivePolite =
      forceMode === "polite"
        ? true
        : forceMode === "casual"
          ? false
          : politeForm

    return segments.map((segment) => {
      // Handle special standalone words (copulas, etc.)
      if (typeof segment === "string") {
        const specialForm = this.rules.getSpecialWordForm(
          segment,
          effectivePolite,
        )
        return specialForm !== undefined ? [specialForm] : [segment]
      }

      return this.conjugateWord(segment, effectivePolite)
    })
  }

  private conjugateWord(word: ConjugatedWord, politeForm: boolean): string[] {
    try {
      const dictionaryHiragana = extractHiragana(word.word)
      const options = this.rules.getConjugationOptions(word, politeForm)

      const conjugatedHiraganaForms = baseConjugate(
        dictionaryHiragana,
        word.pos,
        this.rules.normalizeForm(word.form),
        options,
      )

      // Restore kanji for each conjugated form
      return conjugatedHiraganaForms.map((hiragana) =>
        this.kanjiProcessor.restoreKanji(word, hiragana),
      )
    } catch (error) {
      console.error("Error conjugating word:", { word, error })
      throw error
    }
  }
}
