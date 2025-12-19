import { Show } from "solid-js"
import { Link } from "@tanstack/solid-router"

interface ImportPageHeaderProps {
  title: string
  subtitle?: string
  backTo?: string
  backLabel?: string
}

export function ImportPageHeader(props: ImportPageHeaderProps) {
  return (
    <div class="mb-8">
      <Show when={props.backTo}>
        <Link
          to={props.backTo!}
          class="mb-4 inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white group"
        >
          <svg
            class="size-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          <span>{props.backLabel || "Back"}</span>
        </Link>
      </Show>

      <h1 class="text-2xl font-bold text-white sm:text-3xl">{props.title}</h1>

      <Show when={props.subtitle}>
        <p class="mt-2 text-white/50">{props.subtitle}</p>
      </Show>
    </div>
  )
}
