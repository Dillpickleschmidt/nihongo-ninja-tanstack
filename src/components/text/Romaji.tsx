import { JSX } from "solid-js"
import { cn } from "@/utils"

type RomajiProps = {
  children: JSX.Element
  romaji: any
  class?: string
  textShadow?: string
}

export default function Romaji(props: RomajiProps) {
  return (
    <span class="inline-flex">
      <span
        class="font-japanese block leading-none"
        style={{
          "text-shadow": props.textShadow, //"0px 4px 4px rgba(0, 0, 0, 0.25)"
        }}
      >
        {props.children}
        <span
          class={cn("block pt-0 text-center text-base", props.class)}
          style={{
            "text-shadow": props.textShadow, //"0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}
        >
          {props.romaji}
        </span>
      </span>
    </span>
  )
}
