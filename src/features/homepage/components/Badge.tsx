type BadgeProps = {
  children: string
  variant?: "default" | "pulse"
  pulse?: boolean
}

export default function Badge(props: BadgeProps) {
  if (props.variant === "pulse" || props.pulse) {
    return (
      <div class="border-border/60 bg-background/60 text-foreground/90 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
        <span
          class={`bg-primary block h-2 w-2 rounded-full ${props.pulse ? "animate-pulse" : ""}`}
        />
        <span>{props.children}</span>
      </div>
    )
  }

  return (
    <div class="border-border/60 bg-background/60 text-foreground/90 rounded-full border px-3 py-1 text-xs">
      {props.children}
    </div>
  )
}
