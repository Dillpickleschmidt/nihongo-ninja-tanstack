import { For, Show, createMemo, createSignal } from "solid-js"
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { Button } from "@/components/ui/button"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { SmoothCardLink } from "@/features/learn-page/components/shared/SmoothCard"
import { Search } from "lucide-solid"
import { cn } from "@/utils"

import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { Route as RootRoute } from "@/routes/__root"

import { getModulesBySessionType } from "@/data/utils/core"
import type { DynamicModule, TextbookIDEnum } from "@/data/types"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/features/learn-page/utils/loader-helpers"

export const Route = createFileRoute("/_home/practice/sentence-practice/")({
  component: RouteComponent,
})

type EnrichedSentenceModule = {
  id: string
  title: string
  description?: string
  linkTo: string
  iconClass: string
}

/**
 * Convert a dynamic module entry into a UI-friendly card model
 */
function enrich(mod: { id: string } & DynamicModule): EnrichedSentenceModule {
  const strippedId = mod.id.replace(/^sentence-practice-/, "")
  return {
    id: mod.id,
    title: mod.title,
    description: mod.instructions || mod.description,
    linkTo: `/practice/sentence-practice/${strippedId}`,
    iconClass: getModuleIconClasses("sentence-practice"),
  }
}

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  const [search, setSearch] = createSignal("")

  // All sentence-practice modules for the active textbook
  const allModules = createMemo(() => {
    const activeTb = settingsQuery.data?.["active-textbook"] as
      | TextbookIDEnum
      | undefined
    if (!activeTb) return []
    return getModulesBySessionType(activeTb, "sentence-practice").map(enrich)
  })

  // Simple search by title/description or id
  const filteredModules = createMemo(() => {
    const q = search().trim().toLowerCase()
    if (!q) return allModules()
    return allModules().filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        (m.description || "").toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q),
    )
  })

  // Keep icon consistent with Learn page styling
  const ModuleIcon = getModuleIcon("sentence-practice")

  return (
    <>
      <Show when={settingsQuery.data}>
        <div class="fixed inset-0 -z-1">
          <TextbookChapterBackgrounds
            textbook={settingsQuery.data!["active-textbook"]}
            chapter={settingsQuery.data!["active-deck"]}
            showGradient={false}
            blur="4px"
            class="opacity-35"
          />
        </div>
      </Show>

      <div class="mx-auto w-full max-w-6xl px-4 pt-10 pb-28 lg:pt-16">
        {/* Header */}
        <div class="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div class="mb-1">
              <span class="text-xs font-medium tracking-wide text-yellow-500/90 uppercase">
                Vocab + Grammar
              </span>
            </div>
            <h1 class="font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl">
              Sentence Practice
            </h1>
            <p class="text-muted-foreground mt-1 max-w-prose text-sm md:text-base">
              Practice building and understanding sentences with guided prompts.
              Your available sets come from the currently selected textbook and
              learning path.
            </p>
          </div>

          {/* Search */}
          <div class="w-full sm:w-80">
            <TextField class="w-full">
              <div class="relative">
                <Search class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <TextFieldInput
                  placeholder="Search sentence sets..."
                  value={search()}
                  onInput={(e) => setSearch(e.currentTarget.value)}
                  class="pl-9"
                />
              </div>
            </TextField>
          </div>
        </div>

        {/* Content */}
        <Show
          when={!settingsQuery.isPending}
          fallback={
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              <For each={Array.from({ length: 6 })}>
                {() => (
                  <div class="border-card-foreground/40 bg-card/60 h-[130px] animate-pulse rounded-2xl border" />
                )}
              </For>
            </div>
          }
        >
          <Show
            when={allModules().length > 0}
            fallback={
              <div class="text-muted-foreground">
                No sentence practice modules found for this textbook.
              </div>
            }
          >
            <div class="flex flex-col items-center">
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <For each={filteredModules()}>
                  {(m) => (
                    <SmoothCardLink
                      to={m.linkTo}
                      width={360}
                      height={130}
                      cornerRadius={22}
                      cornerSmoothing={0.8}
                      scales={{ sm: 0.9, md: 0.95, lg: 1, xl: 1, "2xl": 1 }}
                      border
                      borderClass="stroke-yellow-500/30"
                      focusRing
                      focusRingClass="stroke-yellow-500/50"
                      focusStrokeWidth={2.5}
                      class={cn(
                        "relative overflow-hidden",
                        "via-card bg-gradient-to-br from-yellow-500/10 to-yellow-600/5",
                        "backdrop-blur-sm",
                        "ease-instant-hover-150 hover:scale-[0.985]",
                      )}
                    >
                      {/* subtle radial highlight */}
                      <div class="pointer-events-none absolute -top-8 -right-8 size-24 rounded-full bg-yellow-400/10 blur-2xl" />

                      <div class="relative flex h-full items-stretch justify-between p-4.5">
                        <div class="min-w-0 pr-3">
                          <h3 class="line-clamp-2 text-base leading-snug font-semibold">
                            {m.title}
                          </h3>
                          <Show when={m.description}>
                            <p class="text-muted-foreground mt-1 line-clamp-2 text-xs">
                              {m.description}
                            </p>
                          </Show>

                          <div class="mt-3">
                            <Button
                              size="sm"
                              variant="ghost"
                              class="border-card-foreground/40 h-7 rounded-full border px-3 text-xs font-medium text-yellow-600 hover:bg-yellow-500/10 hover:text-yellow-500 dark:text-yellow-500"
                              tabindex="-1"
                            >
                              Explore
                            </Button>
                          </div>
                        </div>

                        <div class="flex items-end">
                          <div class="flex size-10 items-center justify-center rounded-xl bg-yellow-500/10">
                            <ModuleIcon class={cn(m.iconClass, "size-5")} />
                          </div>
                        </div>
                      </div>
                    </SmoothCardLink>
                  )}
                </For>
              </div>
            </div>
            {/* Empty-state for search specifically */}
            <Show
              when={filteredModules().length === 0 && allModules().length > 0}
            >
              <div class="text-muted-foreground mt-6 text-sm">
                No results for “{search()}”. Try a different search.
              </div>
            </Show>
          </Show>
        </Show>
      </div>
    </>
  )
}
