import { createMemo } from "solid-js"
import { createFuriganaGroupRegex } from "@/data/utils/text/furigana"
import {
  convertToRuby,
  removeFurigana,
} from "../../core/textProcessor"
import type { ErrorRange } from "../../core/types"

interface FuriganaTextProps {
  text: string
  showFurigana?: boolean
  errors?: ErrorRange[]
  highlightClass?: string
  class?: string
}

export default function FuriganaText(props: FuriganaTextProps) {
  const processedHtml = createMemo(() => {
    const text = props.text

    // If no furigana, just return plain text (possibly with error highlighting)
    if (!props.showFurigana) {
      const plainText = removeFurigana(text)
      if (!props.errors?.length) {
        return plainText
      }
      return highlightErrors(plainText, props.errors, props.highlightClass)
    }

    // Convert to ruby HTML
    const rubyHtml = convertToRuby(text)
    if (!props.errors?.length) {
      return rubyHtml
    }

    // Apply plain-text error ranges onto display units so ruby groups stay intact.
    return highlightErrorsInRuby(text, props.errors, props.highlightClass)
  })

  return <span class={props.class} innerHTML={processedHtml()} />
}

// Highlight errors in plain text
function highlightErrors(
  text: string,
  errors: ErrorRange[],
  highlightClass?: string,
): string {
  if (!errors.length) return text

  const sortedErrors = [...errors].sort((a, b) => a.start - b.start)
  let result = ""
  let lastEnd = 0

  for (const error of sortedErrors) {
    if (error.start > lastEnd) {
      result += text.slice(lastEnd, error.start)
    }
    const errorText = text.slice(error.start, error.end)
    result += `<span class="${highlightClass || ""}">${errorText}</span>`
    lastEnd = error.end
  }

  if (lastEnd < text.length) {
    result += text.slice(lastEnd)
  }

  return result
}

interface DisplayToken {
  plainStart: number
  plainEnd: number
  html: string
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function tokenizeDisplayUnits(text: string): DisplayToken[] {
  const tokens: DisplayToken[] = []
  const furiganaRegex = createFuriganaGroupRegex()
  let lastIndex = 0
  let plainPos = 0

  const pushPlainText = (segment: string) => {
    for (const char of segment) {
      if (/\s/.test(char) || char === "\x1F") continue

      tokens.push({
        plainStart: plainPos,
        plainEnd: plainPos + 1,
        html: escapeHtml(char),
      })
      plainPos += 1
    }
  }

  for (const match of text.matchAll(furiganaRegex)) {
    const fullMatch = match[0]
    const baseText = removeFurigana(fullMatch).replace(/\s+/g, "")
    const matchIndex = match.index ?? 0

    pushPlainText(text.slice(lastIndex, matchIndex))

    tokens.push({
      plainStart: plainPos,
      plainEnd: plainPos + baseText.length,
      html: convertToRuby(fullMatch),
    })
    plainPos += baseText.length
    lastIndex = matchIndex + fullMatch.length
  }

  pushPlainText(text.slice(lastIndex))

  return tokens
}

// Highlight errors in text with furigana by mapping plain text positions to display units.
function highlightErrorsInRuby(
  text: string,
  errors: ErrorRange[],
  highlightClass?: string,
): string {
  if (!errors.length) return convertToRuby(text)

  const sortedErrors = [...errors].sort((a, b) => a.start - b.start)
  const tokens = tokenizeDisplayUnits(text)

  let result = ""
  let isHighlightOpen = false

  for (const token of tokens) {
    const isHighlighted = sortedErrors.some(
      (error) => token.plainStart < error.end && token.plainEnd > error.start,
    )

    if (isHighlighted && !isHighlightOpen) {
      result += `<span class="${highlightClass || ""}">`
      isHighlightOpen = true
    }

    if (!isHighlighted && isHighlightOpen) {
      result += "</span>"
      isHighlightOpen = false
    }

    result += token.html
  }

  if (isHighlightOpen) {
    result += "</span>"
  }

  return result
}
