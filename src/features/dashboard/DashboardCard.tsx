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
    <>
      <style>{`
        .dashboard-card {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 0 -1px 0 rgba(15, 23, 42, 0.04),
            0 10px 28px -24px rgba(15, 23, 42, 0.28);
        }

        .dark .dashboard-card,
        [data-kb-theme="dark"] .dashboard-card {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            inset 0 -1px 0 rgba(0, 0, 0, 0.55),
            0 1px 0 rgba(255, 255, 255, 0.025),
            0 16px 36px -18px rgba(0, 0, 0, 0.6);
        }
      `}</style>
      <div
        class="relative animate-fade-up opacity-0"
        style={{ "animation-delay": `${props.index * 75}ms` }}
      >
        <Link
          to={props.card.href}
          class="dashboard-card block overflow-hidden rounded-[22px] border border-border/40 dark:border-white/5"
        >
        <div class="relative aspect-[16/10] overflow-hidden">
          <img
            src={props.card.image}
            alt={props.card.title}
            class="size-full object-cover"
          />
          <div
            class="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.012) 38%, transparent 62%)`,
            }}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

          {/* Tags */}
          <Show when={props.card.tags?.length}>
            <div class="absolute right-2 bottom-2 flex flex-wrap justify-end gap-1">
              <For each={props.card.tags}>
                {(tag) => (
                  <span class="rounded-full bg-white/90 px-1.5 py-0.5 text-[10px] font-excalifont text-slate-700 shadow-sm dark:bg-background/80 dark:text-white/60 dark:shadow-none">
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
              <h3 class="font-semibold text-white">
                {props.card.title}
              </h3>
            </div>
            <p class="mt-1 text-sm text-white/75 line-clamp-2 dark:text-white/50">
              {props.card.description}
            </p>
          </div>
        </div>
      </Link>

      <Show when={props.card.dueCountType}>
        <div
          class="pointer-events-none absolute top-3 right-3 rounded-full border bg-white/90 px-2.5 py-1 text-xs font-medium shadow-sm backdrop-blur dark:bg-background/80 dark:shadow-none"
          style={{
            color: "var(--dynamic-accent)",
            "border-color":
              "color-mix(in srgb, var(--dynamic-accent) 20%, transparent)",
          }}
        >
          {dueLabel()} due
        </div>
      </Show>
      </div>
    </>
  )
}
