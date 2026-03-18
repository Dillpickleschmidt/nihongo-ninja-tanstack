// PosHintBox - displays a single colored box for model answer POS hint

import type { Component } from "solid-js"
import { ClickableTooltip } from "@/components/ClickableTooltip"
import {
  type PosCategory,
  getPosCategory,
  getCategoryColorClass,
  getCategoryDescription,
} from "../common/posHelpers"

interface PosHintBoxProps {
  pos: string[]
  width: number
}

/**
 * Displays a colored box representing a part of speech in the model answer.
 * Uses full-width spaces (　) to create visual structure without revealing text.
 */
const PosHintBox: Component<PosHintBoxProps> = (props) => {
  const category = (): PosCategory => getPosCategory(props.pos)
  const colorClass = (): string => getCategoryColorClass(category())
  const description = (): string => getCategoryDescription(category())

  // Full-width space (ideographic space) repeated for width
  const spacer = (): string => "　".repeat(props.width)

  return (
    <ClickableTooltip content={description()}>
      <span
        class={`${colorClass()} font-japanese inline-block rounded-md px-1 py-0.5 text-base font-medium`}
      >
        {spacer()}
      </span>
    </ClickableTooltip>
  )
}

export default PosHintBox
