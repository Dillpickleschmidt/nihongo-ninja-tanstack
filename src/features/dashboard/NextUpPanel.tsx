import { Link } from "@tanstack/solid-router"
import { Show } from "solid-js"
import type { JSX } from "solid-js"
import { Dynamic } from "solid-js/web"
import { ChevronRight } from "lucide-solid"

import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { Skeleton } from "@/components/ui/custom/skeleton"

export type NextDashboardModule = {
  linkTo: string
  chapterTitle: string
  module: { title: string; module_type: string }
}

export function NextUpPanel(props: {
  mod: NextDashboardModule | undefined
  loading: boolean
}) {
  return (
    <Show
      when={props.mod}
      fallback={
        <div class="self-start rounded-2xl border border-border/50 bg-card/30 px-6 py-7 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <SubLabel>Next up</SubLabel>
          <Show
            when={!props.loading}
            fallback={
              <div class="mt-4">
                <Skeleton class="h-6 w-2/3 rounded bg-muted/70 dark:bg-white/5" />
                <Skeleton class="mt-3 h-4 w-1/3 rounded bg-muted/50 dark:bg-white/4" />
              </div>
            }
          >
            <p class="mt-3 text-base text-foreground/80 dark:text-white/70">
              Pick a learning path to see what's next.
            </p>
            <Link
              to="/learn"
              class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "var(--dynamic-accent)" }}
            >
              Choose a path
              <ChevronRight class="size-4" />
            </Link>
          </Show>
        </div>
      }
    >
      {(mod) => (
        <Link
          to={mod().linkTo}
          class="group block self-start rounded-2xl border border-border/50 bg-card/30 px-6 py-6 transition-colors hover:border-dynamic-accent/40 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-dynamic-accent/30"
        >
          <div class="flex items-start gap-5">
            <div
              class="grid size-12 shrink-0 place-items-center rounded-xl"
              style={{
                background:
                  "color-mix(in srgb, var(--dynamic-accent) 12%, transparent)",
              }}
            >
              <Dynamic
                component={getModuleIcon(mod().module.module_type)}
                class={`size-5 ${getModuleIconClasses(mod().module.module_type)}`}
              />
            </div>
            <div class="flex-1 min-w-0">
              <SubLabel>Next up</SubLabel>
              <h3 class="mt-1.5 text-xl font-semibold text-foreground/90 dark:text-white/90 truncate">
                {mod().module.title}
              </h3>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40 truncate">
                {mod().chapterTitle}
              </p>
            </div>
            <ChevronRight class="size-5 mt-2 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-dynamic-accent dark:text-white/30" />
          </div>

          <span
            class="mt-6 inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium text-white transition-transform group-hover:scale-[1.02]"
            style={{
              background:
                "color-mix(in srgb, var(--dynamic-accent) 80%, transparent)",
              "box-shadow":
                "0 6px 14px -6px color-mix(in srgb, var(--dynamic-accent) 35%, transparent)",
            }}
          >
            Continue lesson
            <ChevronRight class="size-3.5" />
          </span>
        </Link>
      )}
    </Show>
  )
}

function SubLabel(props: { children: JSX.Element }) {
  return (
    <div class="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted-foreground/70 dark:text-white/30">
      {props.children}
    </div>
  )
}
