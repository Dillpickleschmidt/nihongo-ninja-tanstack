import type { JSX } from "solid-js"

export default function GlowBox(props: {
  children: JSX.Element
  opacity?: number
}) {
  return (
    <div class="relative">
      <div
        class="absolute -inset-px rounded-xl"
        style={{
          background: `linear-gradient(135deg, var(--dynamic-accent), transparent 50%)`,
          opacity: props.opacity ?? 0.2,
        }}
      />
      <div class="relative rounded-xl bg-card/60 p-8 backdrop-blur-sm dark:bg-white/[0.04]">
        {props.children}
      </div>
    </div>
  )
}
