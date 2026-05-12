// PosHintDisplay - shows colored POS boxes for the model answer structure

import { For, Show, type Component } from "solid-js"
import PosHintBox from "./PosHintBox"
import NeutralPosBox from "./NeutralPosBox"
import { getPosCategory, getWidthForCategory } from "../common/posHelpers"
import { isNeutralPosText } from "../../core/textProcessor"
import type { SentenceAnswerToken } from "../../../../../convex/validators"

interface PosHintDisplayProps {
  tokens: SentenceAnswerToken[] | undefined
}

/**
 * Displays POS hint boxes for the model answer.
 * Shows colored boxes with fixed widths based on POS category
 * to provide visual structure hint without revealing actual text.
 */
const PosHintDisplay: Component<PosHintDisplayProps> = (props) => {
  return (
    <Show when={props.tokens && props.tokens.length > 0}>
      <div
        class="mb-3 flex flex-wrap items-center gap-0.5"
        role="status"
        aria-label="Part of speech hint"
      >
        <For each={props.tokens}>
          {(token) => {
            if (isNeutralPosText(token.t)) {
              return <NeutralPosBox text={token.t} />
            }

            const category = getPosCategory(token.p)
            const width = getWidthForCategory(category)
            return <PosHintBox pos={token.p} width={width} />
          }}
        </For>
      </div>
    </Show>
  )
}

export default PosHintDisplay
