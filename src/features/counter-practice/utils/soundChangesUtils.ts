import type { CounterPattern } from "../types"

const DIGITS = [
  "いち",
  "に",
  "さん",
  "よん",
  "ご",
  "ろく",
  "なな",
  "はち",
  "きゅう",
  "じゅう",
]

function handleCompoundNumber(
  numberReading: string,
  transform: (part: string, baseReading: string) => string,
  baseReading: string,
): string {
  for (const digit of DIGITS) {
    if (numberReading.endsWith(digit)) {
      const prefix = numberReading.slice(0, -digit.length)
      return prefix + transform(digit, baseReading)
    }
  }
  return transform(numberReading, baseReading)
}

function replaceInitialH(
  reading: string,
  target: "p" | "b",
): string {
  const map =
    target === "p"
      ? { は: "ぱ", ひ: "ぴ", ふ: "ぷ", へ: "ぺ", ほ: "ぽ" }
      : { は: "ば", ひ: "び", ふ: "ぶ", へ: "べ", ほ: "ぼ" }
  const first = reading[0] as keyof typeof map
  return first in map ? map[first] + reading.slice(1) : reading
}

function replaceInitialK(reading: string): string {
  const map = { か: "が", き: "ぎ", く: "ぐ", け: "げ", こ: "ご" } as const
  const first = reading[0] as keyof typeof map
  return first in map ? map[first] + reading.slice(1) : reading
}

function replaceInitialS(reading: string): string {
  const map = { さ: "ざ", し: "じ", す: "ず", せ: "ぜ", そ: "ぞ" } as const
  const first = reading[0] as keyof typeof map
  return first in map ? map[first] + reading.slice(1) : reading
}

function withSmallTsu(part: string): string {
  return part.slice(0, -1) + "っ"
}

const SMALL_TSU_FOUR = ["いち", "ろく", "はち", "じゅう"]
const SMALL_TSU_THREE = ["いち", "はち", "じゅう"]

export function getFullCounterReading(
  numberReading: string,
  pattern: CounterPattern,
): string {
  switch (pattern.soundChangeType) {
    case "generic": {
      const readings: Record<string, string> = {
        いち: "ひとつ",
        に: "ふたつ",
        さん: "みっつ",
        よん: "よっつ",
        ご: "いつつ",
        ろく: "むっつ",
        なな: "ななつ",
        はち: "やっつ",
        きゅう: "ここのつ",
        じゅう: "とお",
      }
      return readings[numberReading] || numberReading + "つ"
    }

    case "dates": {
      const readings: Record<string, string> = {
        いち: "ついたち",
        に: "ふつか",
        さん: "みっか",
        よん: "よっか",
        ご: "いつか",
        ろく: "むいか",
        なな: "なのか",
        はち: "ようか",
        きゅう: "ここのか",
        じゅう: "とおか",
        じゅうよん: "じゅうよっか",
        にじゅう: "はつか",
        にじゅうよん: "にじゅうよっか",
      }
      return readings[numberReading] || numberReading + "にち"
    }

    case "hToP":
      return handleCompoundNumber(
        numberReading,
        (part, base) => {
          const needsTsu = SMALL_TSU_FOUR.includes(part)
          const convertToP =
            needsTsu || part === "さん" || part === "よん"
          const first = needsTsu ? withSmallTsu(part) : part
          return convertToP ? first + replaceInitialH(base, "p") : first + base
        },
        pattern.baseReading,
      )

    case "hToP/B":
      return handleCompoundNumber(
        numberReading,
        (part, base) => {
          if (part === "さん") return part + replaceInitialH(base, "b")
          const needsTsu = SMALL_TSU_FOUR.includes(part)
          const first = needsTsu ? withSmallTsu(part) : part
          return needsTsu ? first + replaceInitialH(base, "p") : first + base
        },
        pattern.baseReading,
      )

    case "kToG":
      return handleCompoundNumber(
        numberReading,
        (part, base) =>
          part === "さん" ? part + replaceInitialK(base) : part + base,
        pattern.baseReading,
      )

    case "sToZ":
      return handleCompoundNumber(
        numberReading,
        (part, base) =>
          part === "さん" ? part + replaceInitialS(base) : part + base,
        pattern.baseReading,
      )

    case "p":
    case "k":
      return handleCompoundNumber(
        numberReading,
        (part, base) => {
          const needsTsu = SMALL_TSU_FOUR.includes(part)
          return (needsTsu ? withSmallTsu(part) : part) + base
        },
        pattern.baseReading,
      )

    case "s":
    case "t":
      return handleCompoundNumber(
        numberReading,
        (part, base) => {
          const needsTsu = SMALL_TSU_THREE.includes(part)
          return (needsTsu ? withSmallTsu(part) : part) + base
        },
        pattern.baseReading,
      )

    default:
      return numberReading + pattern.baseReading
  }
}
