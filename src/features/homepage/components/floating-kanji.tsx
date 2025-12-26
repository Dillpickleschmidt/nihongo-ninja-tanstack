import { cn } from "@/utils"

export function FloatingKanji(props: {
  char: string
  class?: string
  delay?: number
}) {
  return (
    <span
      class={cn(
        "absolute text-[12rem] font-japanese font-bold text-white/[0.02] select-none pointer-events-none",
        props.class,
      )}
      style={{
        "animation-delay": `${props.delay || 0}ms`,
      }}
    >
      {props.char}
    </span>
  )
}
