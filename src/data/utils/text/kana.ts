import { containsKanji } from "./japanese"

export function toHiraganaIfNeeded(word: string, reading: string): string {
  if (containsKatakana(word)) return reading
  return katakanaToHiragana(reading)
}

export function buildBracketFurigana(word: string, reading: string): string {
  if (!word) return word
  if (!reading) return word

  const normalizedReading = toHiraganaIfNeeded(word, reading)

  if (!containsKanji(word)) {
    return normalizedReading
  }

  let result = ""
  let readingIndex = 0

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (isKana(char)) {
      result += char
      if (normalizedReading[readingIndex] === char) {
        readingIndex++
      }
      continue
    }

    let spanEnd = i + 1
    while (spanEnd < word.length && !isKana(word[spanEnd])) {
      spanEnd++
    }

    const kanjiSpan = word.slice(i, spanEnd)
    const nextKana = word[spanEnd]

    let readingEnd = normalizedReading.length
    if (nextKana && isKana(nextKana)) {
      const nextKanaIndex = normalizedReading.indexOf(nextKana, readingIndex)
      if (nextKanaIndex !== -1) {
        readingEnd = nextKanaIndex
      }
    }

    const readingSpan = normalizedReading.slice(readingIndex, readingEnd)
    result += readingSpan ? `${kanjiSpan}[${readingSpan}]` : kanjiSpan
    readingIndex = readingEnd
    i = spanEnd - 1
  }

  if (readingIndex < normalizedReading.length) {
    result += `[${normalizedReading.slice(readingIndex)}]`
  }

  return result
}

function katakanaToHiragana(text: string): string {
  return text.replace(/[\u30A1-\u30F6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  )
}

function containsKatakana(text: string): boolean {
  return /[\u30A0-\u30FF]/.test(text)
}

function isKana(char: string): boolean {
  return /[\u3040-\u309F\u30A0-\u30FF]/.test(char)
}
