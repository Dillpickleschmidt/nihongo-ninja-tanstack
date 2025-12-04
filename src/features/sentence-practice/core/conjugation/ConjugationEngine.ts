// core/conjugation/ConjugationEngine.ts
import { conjugate as baseConjugate } from "@/features/conjugation-practice/utils/conjugationUtils"
import { extractHiragana } from "@/data/utils/text/furigana"
import { ConjugationRules } from "./ConjugationRules"
import type { ConjugatedWord } from "./types"
import { KanjiProcessor } from "../text/KanjiProcessor"

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
  ): string[][] {
    return segments.map((segment, index) => {
      // Handle special standalone words (copulas, etc.)
      if (typeof segment === "string") {
        const specialForm = this.rules.getSpecialWordForm(segment, politeForm)
        return specialForm ? [specialForm] : [segment]
      }

      const nextWord = segments[index + 1] as string | undefined

      // Handle word-level politeness constraints
      if (this.rules.shouldForceCasual(segment)) {
        return this.conjugateWord(segment, nextWord, false)
      }

      if (this.rules.shouldForcePolite(segment)) {
        return this.conjugateWord(segment, nextWord, true)
      }

      // Regular conjugation
      return this.conjugateWord(segment, nextWord, politeForm)
    })
  }

  private conjugateWord(
    word: ConjugatedWord,
    nextWord: string | undefined,
    politeForm: boolean,
  ): string[] {
    try {
      const dictionaryHiragana = extractHiragana(word.word)
      const options = this.rules.getConjugationOptions(
        word,
        nextWord,
        politeForm,
      )

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
