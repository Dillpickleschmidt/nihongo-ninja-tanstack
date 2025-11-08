// Pure text utility functions with no external dependencies
// These can be safely imported in test environments

/**
 * Extracts hiragana readings from furigana notation.
 * @param furigana - A string or array of strings containing kanji with furigana in brackets (e.g., "食[た]べる")
 * @returns The hiragana reading(s) with brackets removed and no spaces
 */
export function extractHiragana<T extends string | string[]>(
  furigana: T,
): T extends string[] ? string[] : string {
  const extract = (text: string): string => {
    let reading = text.replace(/([一-龯ぁ-んァ-ン]+)\[(.+?)\]/g, "$2")
    return reading.replace(/\s/g, "")
  }

  if (Array.isArray(furigana)) {
    return furigana.map(extract) as T extends string[] ? string[] : string
  } else {
    return extract(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Converts furigana string(s) to HTML ruby text.
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @param furiganaSize - The font size for the furigana text (default: "0.75rem").
 * @returns An HTML string or array of HTML strings with ruby tags for furigana display,
 *          depending on the input type.
 */
export function convertFuriganaToRubyHtml<T extends string | string[]>(
  furigana: T,
  furiganaSize = "0.75rem",
): T extends string[] ? string[] : string {
  const convert = (text: string): string => {
    if (!text) return ""
    const sizeStyle = ` style="font-size: ${furiganaSize}; user-select: none; position: relative; z-index: 1;"`
    // Convert furigana to ruby HTML
    let convertedHtml = text.replace(
      /([一-龯ぁ-んァ-ン]+)\[(.+?)\]/g,
      `<ruby>$1<rp>(</rp><rt><span${sizeStyle}>$2</span></rt><rp>)</rp></ruby>`,
    )

    // Strip spaces from the text, preserving tags
    convertedHtml = convertedHtml.replace(/<[^>]+>|\s/g, (match) =>
      match.startsWith("<") ? match : "",
    )

    return convertedHtml
  }

  if (Array.isArray(furigana)) {
    return furigana.map(convert) as T extends string[] ? string[] : string
  } else {
    return convert(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Parses a furigana string and returns both base and kana forms
 * @param furigana - A string containing kanji with furigana in brackets (e.g., "人[ひと]", "食[た]べ 物[もの]")
 * @returns An object with base (kanji without brackets/spaces) and kana (hiragana reading) properties
 */
export function parseFuriganaString(furigana: string): {
  base: string
  kana: string
} {
  // Extract base form by removing furigana brackets and spaces
  const base = furigana.replace(/\[(.+?)\]/g, "").replace(/\s/g, "")

  // Extract kana form using existing function
  const kana = extractHiragana(furigana)

  return { base, kana }
}

/**
 * Extracts and concatenates plain text from an array of segments
 * @param items - Array of strings or rich text objects ({ t: string })
 * @returns The concatenated plain text string
 */
export function extractSegmentText(items: (string | { t: string })[]): string {
  if (!items || items.length === 0) return ""
  return items
    .map((item) => (typeof item === "string" ? item : item.t || ""))
    .join("")
}
