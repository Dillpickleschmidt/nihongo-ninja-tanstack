import { createMemo } from "solid-js"
import {
  convertToRuby,
  removeFurigana,
  calculatePositionMap,
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

    // For errors with furigana, we need more complex handling
    // For now, just apply errors to the plain text positions
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

// Highlight errors in text with furigana by mapping plain text positions to original
function highlightErrorsInRuby(
  text: string,
  errors: ErrorRange[],
  highlightClass?: string,
): string {
  if (!errors.length) return convertToRuby(text)

  // Map plain text positions to original text positions (with furigana brackets)
  const plainToOriginal = calculatePositionMap(text)
  const sortedErrors = [...errors].sort((a, b) => a.start - b.start)

  let result = ""
  let lastOriginalEnd = 0

  for (const error of sortedErrors) {
    const originalStart = plainToOriginal.get(error.start) ?? 0
    const originalEnd = plainToOriginal.get(error.end) ?? text.length

    // Add non-error portion before this error
    if (originalStart > lastOriginalEnd) {
      result += convertToRuby(text.slice(lastOriginalEnd, originalStart))
    }

    // Add error portion with highlight span
    const errorSlice = text.slice(originalStart, originalEnd)
    result += `<span class="${highlightClass || ""}">${convertToRuby(errorSlice)}</span>`

    lastOriginalEnd = originalEnd
  }

  // Add remaining text after last error
  if (lastOriginalEnd < text.length) {
    result += convertToRuby(text.slice(lastOriginalEnd))
  }

  return result
}
