// UserInputPosDisplay - shows tokenized user input with colored POS boxes

import { For, Show, type Component } from "solid-js"
import type { KagomeToken } from "../kagome/types"
import type { OverlayResult } from "../core/kanaToKanjiOverlay"
import { getPosCategory, getCategoryColorClass, getCategoryDescription } from "./posHelpers"

interface UserInputPosDisplayProps {
  tokens: KagomeToken[] | undefined
  overlayResult: OverlayResult | null
  originalInput: string
}

/**
 * Displays POS boxes for user's input with actual tokenized text.
 * Shows variable-width colored boxes based on POS category
 * for visual comparison with model answer structure.
 */
const UserInputPosDisplay: Component<UserInputPosDisplayProps> = (props) => {
  /**
   * Extract original text for a token using character boundary mappings.
   * When user typed kana and we overlaid kanji for tokenization,
   * we need to map back to show the original kana they typed.
   */
  const getOriginalText = (token: KagomeToken): string => {
    // If no overlay, tokens are from original input (user typed with kanji)
    if (!props.overlayResult) {
      return token.surface
    }

    // Use character boundary mappings for exact lookup
    const userStart = props.overlayResult.characterMap.get(token.start)
    const userEnd = props.overlayResult.characterMap.get(token.end)

    if (userStart === undefined || userEnd === undefined) {
      return token.surface
    }

    return props.originalInput.substring(userStart, userEnd)
  }

  return (
    <Show when={props.tokens && props.tokens.length > 0}>
      <div
        class="mb-2 flex min-h-7 flex-wrap items-center gap-0.5"
        role="status"
        aria-label="User input part of speech"
      >
        <For each={props.tokens}>
          {(token) => {
            const category = getPosCategory(token.pos)
            const originalText = getOriginalText(token)
            const colorClass = getCategoryColorClass(category)
            const description = getCategoryDescription(category)

            return (
              <span
                class={`${colorClass} font-japanese inline-block rounded-md px-1 py-0.5 text-base font-medium`}
                title={description}
              >
                {originalText}
              </span>
            )
          }}
        </For>
      </div>
    </Show>
  )
}

export default UserInputPosDisplay
