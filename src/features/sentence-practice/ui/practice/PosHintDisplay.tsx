// ui/practice/PosHintDisplay.tsx
import { For, type Component } from "solid-js"
import PosHintBox, { type PosCategory } from "./PosHintBox"

interface PosHintDisplayProps {
  modelAnswerPOS: string[][]
}

/**
 * Determines the width for a POS hint box based on category
 * Orange (nouns/na-adj): 3 characters
 * Green (verbs/i-adj): 4 characters
 * Blue (particles/copulas): 1 character
 */
export function getWidthForCategory(category: PosCategory): number {
  const widths: Record<PosCategory, number> = {
    orange: 3,
    green: 4,
    blue: 1,
  }
  return widths[category]
}

/**
 * Helper to determine category for width calculation
 */
function getPosCategory(pos: string[]): PosCategory {
  const mainPos = pos[0]
  if (mainPos === "名詞" || mainPos === "形容動詞") return "orange"
  if (mainPos === "動詞" || mainPos === "形容詞") return "green"
  return "blue"
}

/**
 * Displays POS hint boxes for the model answer
 * Shows colored boxes with fixed widths based on POS category
 * Provides visual structure hint without revealing actual text
 */
const PosHintDisplay: Component<PosHintDisplayProps> = (props) => {
  return (
    <div
      id="pos-hints"
      class="mb-3 flex flex-wrap items-center gap-0.5"
      role="status"
      aria-label="Part of speech hint"
    >
      <For each={props.modelAnswerPOS}>
        {(pos, index) => {
          const category = getPosCategory(pos)
          const width = getWidthForCategory(category)
          return <PosHintBox pos={pos} width={width} />
        }}
      </For>
    </div>
  )
}

export default PosHintDisplay
