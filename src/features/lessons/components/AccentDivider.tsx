export default function AccentDivider(props: {
  opacity?: number
  class?: string
}) {
  return (
    <div
      class={`h-px w-full ${props.class ?? ""}`}
      style={{
        background: `linear-gradient(to right, var(--dynamic-accent), transparent 90%)`,
        opacity: props.opacity ?? 0.3,
      }}
    />
  )
}
