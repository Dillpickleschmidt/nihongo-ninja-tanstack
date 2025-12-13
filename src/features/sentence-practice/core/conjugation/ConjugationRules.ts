// core/conjugation/ConjugationRules.ts
import type { ConjugatedWord, ConjugationOptions } from "./types"

type SpecialWordFunction = (polite: boolean) => string

export class ConjugationRules {
  private readonly SPECIAL_WORDS: Record<string, SpecialWordFunction> = {
    です: (polite) => (polite ? "です" : "だ"),
    か: (polite) => (polite ? "か" : "？"),
    たら: () => "ら",
  } as const

  getSpecialWordForm(word: string, polite: boolean): string | undefined {
    const specialWord = this.SPECIAL_WORDS[word]
    return specialWord ? specialWord(polite) : undefined
  }

  getConjugationOptions(
    word: ConjugatedWord,
    politeForm: boolean,
  ): ConjugationOptions {
    return {
      polite: politeForm,
      negative: word.polarity === "negative",
      past: word.tense === "past",
      adverb: this.isAdverbialForm(word.form, word.pos),
    }
  }

  isAdverbialForm(form: string, pos: string): boolean {
    return (
      ((pos === "I-adjective" || pos === "Na-adjective") &&
        form === "adverb") ||
      form === "tai-adv-form" ||
      form === "potential-adv-form"
    )
  }

  normalizeForm(form: string): string {
    switch (form) {
      case "tai-adv-form":
        return "tai-form"
      case "potential-adv-form":
        return "potential"
      case "adverb":
        return "normal" // adverb form uses "normal" with adverb: true option
      default:
        return form
    }
  }
}
