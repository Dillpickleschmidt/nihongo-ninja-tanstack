import type { JSX } from "solid-js"
import { cn } from "@/utils"

export default function SectionLabel(props: {
  children: JSX.Element
  class?: string
}) {
  return (
    <div
      class={cn(
        "text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted-foreground/70 dark:text-white/30",
        props.class,
      )}
    >
      {props.children}
    </div>
  )
}
