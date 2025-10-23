// ui/practice/UserInputPosDisplay.tsx
import { For, Show, type Component } from "solid-js"
import type { PosCategory } from "./PosHintBox"
import type { KagomeToken } from "../../kagome/types/kagome"
import type { OverlayResult } from "../../core/text/KanaToKanjiOverlay"

interface UserInputPosDisplayProps {
  tokens?: KagomeToken[]
  overlayResult?: OverlayResult
  originalInput: string
}

/**
 * Helper to determine category for POS coloring
 */
function getPosCategory(pos: string[]): PosCategory {
  const mainPos = pos[0]
  if (mainPos === "名詞" || mainPos === "形容動詞") return "orange"
  if (mainPos === "動詞" || mainPos === "形容詞") return "green"
  return "blue"
}

/**
 * Maps POS category to Tailwind background color class
 */
function getCategoryColorClass(category: PosCategory): string {
  const colors: Record<PosCategory, string> = {
    orange: "bg-orange-400 dark:bg-orange-500",
    green: "bg-green-400 dark:bg-green-500",
    blue: "bg-blue-400 dark:bg-blue-500",
  }
  return colors[category]
}

/**
 * Displays POS boxes for user's input with original kana text
 * Shows variable-width colored boxes based on POS category
 * Provides visual comparison with model answer structure
 */
const UserInputPosDisplay: Component<UserInputPosDisplayProps> = (props) => {
  /**
   * Extract original text for a token using proportional segment mapping
   */
  const getOriginalText = (token: KagomeToken): string => {
    // If no overlay, tokens are from original input (user typed with kanji)
    if (!props.overlayResult) {
      return token.surface
    }

    // Find segment containing this token's start position
    const segment = props.overlayResult.segmentMappings.find(
      (s) => token.start >= s.overlaidStart && token.start < s.overlaidEnd,
    )

    if (!segment) {
      return token.surface // Fallback
    }

    // Calculate proportional position within segment
    const offsetInSegment = token.start - segment.overlaidStart
    const tokenLength = token.end - token.start

    const overlaidSegmentLength = segment.overlaidEnd - segment.overlaidStart
    const userSegmentLength = segment.userEnd - segment.userStart

    // Proportionally map to user text
    const userStart =
      segment.userStart +
      Math.floor((offsetInSegment * userSegmentLength) / overlaidSegmentLength)

    const userLength = Math.ceil(
      (tokenLength * userSegmentLength) / overlaidSegmentLength,
    )

    return props.originalInput.substring(userStart, userStart + userLength)
  }

  return (
    <Show when={props.tokens && props.tokens.length > 0}>
      <div
        class="mb-2 flex min-h-[28px] flex-wrap items-center gap-1"
        role="status"
        aria-label="User input part of speech"
      >
        <For each={props.tokens}>
          {(token) => {
            const category = getPosCategory(token.pos)
            const originalText = getOriginalText(token)
            const colorClass = getCategoryColorClass(category)

            return (
              <span
                class={`${colorClass} inline-block rounded px-1 py-0.5 text-sm`}
                title={`${category}: ${token.pos.join(", ")}`}
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
