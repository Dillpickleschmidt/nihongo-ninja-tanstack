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
      class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-colors duration-300 hover:border-(--landing-accent)/20 animate-fade-up opacity-0"
      style={{ "animation-delay": `${props.index * 75}ms` }}
    >
      {/* Image with overlaid title/description */}
      <div class="relative aspect-[16/10] overflow-hidden">
        <img
          src={props.card.image}
          alt={props.card.title}
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        <div class="absolute inset-0 rounded-t-2xl border border-transparent transition-colors duration-300 group-hover:border-(--landing-accent)/15" />
        <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--landing-accent)/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Due count badge */}
        <Show when={props.card.dueCountType}>
          <div class="absolute top-3 right-3 rounded-full bg-neutral-950/80 px-2.5 py-1 text-xs font-medium text-(--landing-accent) border border-(--landing-accent)/20">
            {dueLabel()} due
          </div>
        </Show>

        {/* Title and description overlaid on image */}
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

      {/* Tags below image */}
      <Show when={props.card.tags?.length}>
        <div class="flex flex-wrap gap-1.5 px-4 py-3">
          <For each={props.card.tags}>
            {(tag) => (
              <span class="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/50">
                {tag}
              </span>
            )}
          </For>
        </div>
      </Show>

      {/* Noise texture */}
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </Link>
  )
}
