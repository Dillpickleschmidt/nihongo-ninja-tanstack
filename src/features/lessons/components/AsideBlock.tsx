import type { JSX } from "solid-js"
import { Show } from "solid-js"
import SectionLabel from "./SectionLabel"

export default function AsideBlock(props: {
  children: JSX.Element
  label?: string
}) {
  return (
    <div
      class="border-l-2 pl-5"
      style={{
        "border-color":
          "color-mix(in srgb, var(--dynamic-accent) 50%, transparent)",
      }}
    >
      <Show when={props.label}>
        <SectionLabel class="mb-1 text-dynamic-accent">{props.label}</SectionLabel>
      </Show>
      {props.children}
    </div>
  )
}
