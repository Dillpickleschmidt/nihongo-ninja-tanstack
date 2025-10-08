import { ConjugatedWord } from "../conjugation/types"

// core/text/KanjiProcessor.ts
export class KanjiProcessor {
  restoreKanji(
    originalWord: ConjugatedWord,
    conjugatedHiragana: string,
  ): string {
    // Handle special verbs directly using their POS
    if (originalWord.pos === "Kuru verb - special class") {
      return this.handleKuruVerb(conjugatedHiragana)
    }

    // Regular kanji processing
    const kanjiMatches = [
      ...originalWord.word.matchAll(/([^[\]]+)\[([^\]]+)\]/g),
    ]
    if (kanjiMatches.length === 0) return conjugatedHiragana

    let result = conjugatedHiragana
    for (const [_, kanji, reading] of kanjiMatches) {
      result = result.replace(reading, `${kanji}[${reading}]`)
    }

    return result
  }

  private handleKuruVerb(hiraganaForm: string): string {
    const kuruReadings: Record<string, string> = {
      き: "来[き]",
      く: "来[く]",
      こ: "来[こ]",
      か: "来[か]",
    }

    const baseChar = hiraganaForm[0]
    return kuruReadings[baseChar]
      ? hiraganaForm.replace(baseChar, kuruReadings[baseChar])
      : hiraganaForm
  }
}
