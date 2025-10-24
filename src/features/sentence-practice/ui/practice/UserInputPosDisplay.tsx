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
    orange: "bg-orange-400 dark:bg-amber-400 text-black",
    green: "bg-emerald-400 dark:bg-green-400 text-black",
    blue: "bg-sky-400 dark:bg-teal-400 text-black",
  }
  return colors[category]
}

/**
 * Maps POS category to user-friendly description for tooltip
 */
function getCategoryDescription(category: PosCategory): string {
  const descriptions: Record<PosCategory, string> = {
    orange: "Noun or な-Adjective",
    green: "Verb or い-Adjective",
    blue: "Particle, copula, etc.",
  }
  return descriptions[category]
}

/**
 * Displays POS boxes for user's input with original kana text
 * Shows variable-width colored boxes based on POS category
 * Provides visual comparison with model answer structure
 */
const UserInputPosDisplay: Component<UserInputPosDisplayProps> = (props) => {
  /**
   * Extract original text for a token using character boundary mappings
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
        class="mb-2 flex min-h-[28px] flex-wrap items-center gap-0.5"
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
                class={`${colorClass} font-japanese inline-block rounded-md px-1 py-0.5 text-base font-medium`}
                title={getCategoryDescription(category)}
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
