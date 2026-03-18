import type { JSX } from "solid-js"
import { Show } from "solid-js"
import AccentDivider from "./AccentDivider"

export function OverviewItem(props: { children: JSX.Element }) {
  return (
    <div class="flex items-baseline gap-3">
      <div class="mt-[0.35rem] size-1 shrink-0 rounded-full bg-dynamic-accent/30" />
      <span>{props.children}</span>
    </div>
  )
}

export default function LessonHeader(props: {
  chapter: string
  title: JSX.Element
  subtitle?: string
  children?: JSX.Element
}) {
  return (
    <header class="relative overflow-hidden px-8 pt-16 pb-12 sm:grid sm:grid-cols-[1fr_minmax(0,1fr)] sm:gap-x-12">
      {/* Row 1 on desktop: chapter label spans full width */}
      <div class="text-muted-foreground/60 mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] sm:col-span-2">
        {props.chapter}
      </div>
      {/* Row 2 on desktop: title left, overview right */}
      <div class="sm:order-1">
        <h1 class="font-japanese text-4xl font-bold tracking-tight">
          {props.title}
        </h1>
        <Show when={props.subtitle}>
          <p class="text-muted-foreground mt-4 leading-relaxed">
            {props.subtitle}
          </p>
        </Show>
      </div>
      {/* Divider: full width on desktop (row 3), between title and overview on mobile */}
      <div class="mt-6 sm:order-3 sm:col-span-2">
        <AccentDivider />
      </div>
      {/* Overview: beside title on desktop (row 2), below divider on mobile */}
      <div class="mt-6 flex flex-col gap-3 text-sm text-white/40 sm:order-2 sm:mt-0 sm:gap-1.5 sm:self-center">
        {props.children}
      </div>
    </header>
  )
}
