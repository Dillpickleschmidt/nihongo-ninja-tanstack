import type { Component } from "solid-js"
import { ClickableTooltip } from "@/components/ClickableTooltip"

interface NeutralPosBoxProps {
  text: string
  tooltip?: string
}

const NeutralPosBox: Component<NeutralPosBoxProps> = (props) => {
  return (
    <ClickableTooltip content={props.tooltip ?? "Not POS-tagged"}>
      <span class="font-japanese inline-block rounded-md bg-white/20 px-1 py-0.5 text-base font-medium text-white/80">
        {props.text}
      </span>
    </ClickableTooltip>
  )
}

export default NeutralPosBox
