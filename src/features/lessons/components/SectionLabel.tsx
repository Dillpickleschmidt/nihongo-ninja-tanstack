import type { JSX } from "solid-js"

export default function SectionLabel(props: {
  children: JSX.Element
  class?: string
}) {
  return (
    <div
      class={`text-[0.6rem] font-bold uppercase tracking-[0.25em] ${props.class ?? "text-white/30"}`}
    >
      {props.children}
    </div>
  )
}
