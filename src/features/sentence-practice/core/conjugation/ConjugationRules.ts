// core/conjugation/ConjugationRules.ts
import type { ConjugatedWord, ConjugationOptions } from "./types"

type SpecialWordFunction = (polite: boolean) => string
type Rule =
  | Partial<ConjugationOptions>
  | ((word: ConjugatedWord) => Partial<ConjugationOptions>)

export class ConjugationRules {
  private readonly SPECIAL_WORDS: Record<string, SpecialWordFunction> = {
    です: (polite) => (polite ? "です" : "だ"),
    か: (polite) => (polite ? "か" : "？"),
    たら: () => "ら",
  } as const

  private readonly FOLLOWING_WORD_RULES: Record<string, Rule> = {
    って: { polite: false },

    // Conditional forms
    たら: { polite: false, past: true },

    // Casual conjunctions/particles
    のに: { polite: false },
    けど: { polite: false },
    し: { polite: false },

    // Nominalizers in casual constructions
    こと: { polite: false },
    もの: { polite: false },

    // Others requiring casual form
    ながら: { polite: false },
    な: { polite: false },
  } as const

  getSpecialWordForm(word: string, polite: boolean): string | undefined {
    const specialWord = this.SPECIAL_WORDS[word]
    return specialWord ? specialWord(polite) : undefined
  }

  getConjugationOptions(
    word: ConjugatedWord,
    nextWord: string | undefined,
    politeForm: boolean,
  ): ConjugationOptions {
    // Get rule if it exists
    const rule = nextWord ? this.FOLLOWING_WORD_RULES[nextWord] : null

    // Get partial options from rule
    const ruleOptions: Partial<ConjugationOptions> = rule
      ? typeof rule === "function"
        ? rule(word)
        : rule
      : {}

    // Return complete options with defaults
    return {
      polite: ruleOptions.polite ?? politeForm,
      negative: ruleOptions.negative ?? word.polarity === "negative",
      past: ruleOptions.past ?? word.tense === "past",
      adverb: ruleOptions.adverb ?? this.isAdverbialForm(word.form, word.pos),
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
      default:
        return form
    }
  }

  shouldForcePolite(word: ConjugatedWord): boolean {
    return !!word.politeOnly
  }

  shouldForceCasual(word: ConjugatedWord): boolean {
    return !!word.shortOnly
  }
}
