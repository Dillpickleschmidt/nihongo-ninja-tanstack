import { Link } from "@tanstack/solid-router"
import { Show, For } from "solid-js"
import { Dynamic } from "solid-js/web"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import type { DashboardCard as DashboardCardType } from "./dashboard-cards-data"

interface DashboardCardProps {
  card: DashboardCardType
  index: number
  vocabDueCount?: () => number | undefined
}

export function DashboardCard(props: DashboardCardProps) {
  const dueLabel = () => {
    const type = props.card.dueCountType
    if (type === "sentences") return "–" // not tracked yet
    if (type === "vocab") {
      const count = props.vocabDueCount?.()
      return count !== undefined ? String(count) : "–"
    }
    return undefined
  }

  return (
    <Link
      to={props.card.href}
      class="group relative block overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-colors duration-300 hover:border-(--landing-accent)/20 animate-fade-up opacity-0"
      style={{ "animation-delay": `${props.index * 75}ms` }}
    >
      <div class="relative aspect-[16/10] overflow-hidden">
        <img
          src={props.card.image}
          alt={props.card.title}
          class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-(--landing-accent)/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Due count badge */}
        <Show when={props.card.dueCountType}>
          <div class="absolute top-3 right-3 rounded-full border border-(--landing-accent)/20 bg-background/80 px-2.5 py-1 text-xs font-medium text-(--landing-accent)">
            {dueLabel()} due
          </div>
        </Show>

        {/* Tags */}
        <Show when={props.card.tags?.length}>
          <div class="absolute right-2 bottom-2 flex flex-wrap justify-end gap-1">
            <For each={props.card.tags}>
              {(tag) => (
                <span class="rounded-full bg-background/80 px-1.5 py-0.5 text-[10px] text-white/60">
                  {tag}
                </span>
              )}
            </For>
          </div>
        </Show>

        {/* Title and description */}
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <div class="flex items-center gap-2">
            <Show when={props.card.moduleType}>
              {(moduleType) => (
                <Dynamic
                  component={getModuleIcon(moduleType())}
                  class={`size-4 ${getModuleIconClasses(moduleType())}`}
                />
              )}
            </Show>
            <h3 class="font-semibold text-white transition-colors group-hover:text-(--landing-accent)">
              {props.card.title}
            </h3>
          </div>
          <p class="mt-1 text-sm text-white/50 line-clamp-2">
            {props.card.description}
          </p>
        </div>
      </div>

    </Link>
  )
}
