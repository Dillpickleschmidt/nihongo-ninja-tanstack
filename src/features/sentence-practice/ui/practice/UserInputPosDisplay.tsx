// UserInputPosDisplay - shows tokenized user input with colored POS boxes

import { For, Show, type Component } from "solid-js"
import { ClickableTooltip } from "@/components/ClickableTooltip"
import NeutralPosBox from "./NeutralPosBox"
import type { ProcessedQuestion } from "../../core/types"
import {
  getPosCategory,
  getCategoryColorClass,
  getCategoryDescription,
} from "../common/posHelpers"
import { getUserInputPosDisplayItems } from "./selectors/userInputPosDisplayItems"

interface UserInputPosDisplayProps {
  originalInput: string
  question: ProcessedQuestion | undefined
}

/**
 * Displays POS boxes for user's input with actual tokenized text.
 * Shows variable-width colored boxes based on POS category
 * for visual comparison with model answer structure.
 */
const UserInputPosDisplay: Component<UserInputPosDisplayProps> = (props) => {
  const displayItems = () =>
    getUserInputPosDisplayItems(props.originalInput, props.question)

  return (
    <Show when={displayItems().length > 0}>
      <div
        class="mb-2 flex min-h-7 flex-wrap items-center gap-0.5"
        role="status"
        aria-label="User input part of speech"
      >
        <For each={displayItems()}>
          {(item) => {
            if (item.kind === "neutral") {
              return <NeutralPosBox text={item.text} />
            }

            const category = getPosCategory(item.pos)
            const colorClass = getCategoryColorClass(category)
            const description = getCategoryDescription(category)

            return (
              <ClickableTooltip content={description}>
                <span
                  class={`${colorClass} font-japanese inline-block rounded-md px-1 py-0.5 text-base font-medium`}
                >
                  {item.text}
                </span>
              </ClickableTooltip>
            )
          }}
        </For>
      </div>
    </Show>
  )
}

export default UserInputPosDisplay
