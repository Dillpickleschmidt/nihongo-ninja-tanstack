import { JSX } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { cn } from "@/utils"

interface ImportOptionCardProps {
  title: string
  description: string
  icon: (props: { class?: string }) => JSX.Element
  to: string
}

export function ImportOptionCard(props: ImportOptionCardProps) {
  return (
    <Link
      to={props.to}
      class={cn(
        "group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
        "transition-all duration-200",
        "hover:bg-dynamic-accent/10 hover:border-dynamic-accent/30",
      )}
    >
      <div class="flex size-12 items-center justify-center rounded-xl bg-dynamic-accent/15">
        <props.icon class="size-6 text-dynamic-accent" />
      </div>

      <div class="flex-1">
        <h3 class="mb-1 text-lg font-semibold text-white">{props.title}</h3>
        <p class="text-sm text-white/50 leading-relaxed">{props.description}</p>
      </div>

      <div class="flex items-center gap-1.5 text-sm font-medium text-dynamic-accent opacity-0 transition-opacity group-hover:opacity-100">
        <span>Continue</span>
        <svg
          class="size-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </Link>
  )
}
