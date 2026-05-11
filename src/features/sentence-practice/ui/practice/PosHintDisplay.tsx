// PosHintDisplay - shows colored POS boxes for the model answer structure

import { For, Show, type Component } from "solid-js"
import PosHintBox from "./PosHintBox"
import { getPosCategory, getWidthForCategory } from "../common/posHelpers"

interface PosHintDisplayProps {
  pos: string[][] | undefined
}

/**
 * Displays POS hint boxes for the model answer.
 * Shows colored boxes with fixed widths based on POS category
 * to provide visual structure hint without revealing actual text.
 */
const PosHintDisplay: Component<PosHintDisplayProps> = (props) => {
  return (
    <Show when={props.pos && props.pos.length > 0}>
      <div
        class="mb-3 flex flex-wrap items-center gap-0.5"
        role="status"
        aria-label="Part of speech hint"
      >
        <For each={props.pos}>
          {(pos) => {
            const category = getPosCategory(pos)
            const width = getWidthForCategory(category)
            return <PosHintBox pos={pos} width={width} />
          }}
        </For>
      </div>
    </Show>
  )
}

export default PosHintDisplay
