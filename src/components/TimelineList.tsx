import { For, Show, type Component, type JSX } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import { cn } from "@/utils"

// ===== TimelineList =====

interface TimelineListProps<T> {
  each: T[]
  children: (item: T, index: () => number) => JSX.Element
  class?: string
}

export function TimelineList<T>(props: TimelineListProps<T>) {
  return (
    <ul
      class={cn(
        "relative ml-[7px] border-l-2 border-card-foreground/10",
        props.class,
      )}
    >
      <For each={props.each}>
        {(item, index) => (
          <li
            class={cn(
              "relative",
              index() !== props.each.length - 1 && "pb-1",
            )}
          >
            {props.children(item, index)}
          </li>
        )}
      </For>
    </ul>
  )
}

// ===== TimelineItem =====

interface TimelineItemProps {
  title: string
  description?: string
  linkTo: string
  icon?: Component<{ size?: string; class?: string }>
  iconClass?: string
  disabled?: boolean
  onSelect?: () => void
  class?: string
  style?: JSX.CSSProperties
  dotClass?: string
  hideDot?: boolean
}

export function TimelineItem(props: TimelineItemProps) {
  const content = (
    <>
      {!props.hideDot && (
        <div
          class={cn(
            "absolute left-[-7px] top-1/2 -translate-y-1/2 size-3 rounded-full border-2 bg-background transition-colors",
            "border-card-foreground/20 group-hover:border-white/50 group-hover:bg-white/50",
            props.dotClass,
          )}
        />
      )}

      <div class="min-w-0 flex-1">
        <h3 class="flex items-center gap-1.5 text-sm font-medium leading-tight">
          {props.title}
          <Show when={props.icon}>
            {(Icon) => {
              const Comp = Icon()
              return (
                <Comp size="16px" class={cn("shrink-0", props.iconClass)} />
              )
            }}
          </Show>
        </h3>
        <Show when={props.description}>
          <p class="text-muted-foreground mt-0.5 text-xs line-clamp-2">
            {props.description}
          </p>
        </Show>
      </div>

      <ChevronRight class="size-4 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-70" />
    </>
  )

  const baseClasses = cn(
    "group flex items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 transition-all duration-150",
    "text-white/70 hover:text-white hover:bg-white/5",
    "focus-visible:outline-none focus-visible:bg-white/10",
    props.disabled && "cursor-not-allowed opacity-50",
    props.class,
  )

  return props.onSelect ? (
    <button
      type="button"
      onClick={() => props.onSelect!()}
      class={cn(baseClasses, "w-full text-left")}
      style={props.style}
    >
      {content}
    </button>
  ) : (
    <Link to={props.linkTo} class={baseClasses} style={props.style}>
      {content}
    </Link>
  )
}
