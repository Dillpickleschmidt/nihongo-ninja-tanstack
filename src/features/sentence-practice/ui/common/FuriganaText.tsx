// ui/common/FuriganaText.tsx
import { createMemo } from "solid-js"
import { TextProcessor } from "../../core/text/TextProcessor"

const textProcessor = new TextProcessor()

interface FuriganaTextProps {
  text: string
  errors?: Array<{ start: number; end: number }>
  highlightClass?: string
  furiganaSize?: string
  class?: string
}

export default function FuriganaText(props: FuriganaTextProps) {
  const processText = createMemo(() => {
    if (!props.errors?.length) {
      return textProcessor.convertToRuby(props.text, props.furiganaSize)
    }

    const words = props.text.split(/\s+/)
    const parts: Array<{ html: string; isError: boolean }> = []
    let currentPosition = 0

    for (const word of words) {
      const normalizedWord = textProcessor.normalize(word)
      const { baseToOriginal } = textProcessor.calculatePositionMappings(word)
      const wordLength = textProcessor.removeFurigana(normalizedWord).length

      // Adjust error positions based on normalized text
      const wordErrors = props.errors
        .filter((error) => {
          const errorStart = error.start - currentPosition
          const errorEnd = error.end - currentPosition
          return errorStart < wordLength && errorEnd > 0
        })
        .map((error) => ({
          start: Math.max(0, error.start - currentPosition),
          end: Math.min(wordLength, error.end - currentPosition),
        }))

      if (wordErrors.length > 0) {
        let lastEnd = 0
        for (const { start, end } of wordErrors) {
          const originalStart = baseToOriginal.get(start) ?? 0
          const originalEnd = baseToOriginal.get(end) ?? word.length

          if (originalStart > lastEnd) {
            parts.push({
              html: textProcessor.convertToRuby(
                word.slice(lastEnd, originalStart),
                props.furiganaSize,
              ),
              isError: false,
            })
          }

          parts.push({
            html: textProcessor.convertToRuby(
              word.slice(originalStart, originalEnd),
              props.furiganaSize,
            ),
            isError: true,
          })

          lastEnd = originalEnd
        }

        if (lastEnd < word.length) {
          parts.push({
            html: textProcessor.convertToRuby(
              word.slice(lastEnd),
              props.furiganaSize,
            ),
            isError: false,
          })
        }
      } else {
        parts.push({
          html: textProcessor.convertToRuby(word, props.furiganaSize),
          isError: false,
        })
      }

      currentPosition += wordLength
    }

    return parts
      .map((part) =>
        part.isError
          ? `<span class="${props.highlightClass}">${part.html}</span>`
          : part.html,
      )
      .join("")
  })

  return <span class={props.class} innerHTML={processText()} />
}
