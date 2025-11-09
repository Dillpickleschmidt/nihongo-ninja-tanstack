import { For, Show, createMemo, createSignal } from "solid-js"
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { SmoothCardLink } from "@/components/SmoothCard"
import { Search } from "lucide-solid"
import { cn } from "@/utils"
import FindMoreHereSvg from "@/features/homepage/shared/assets/find-more-here.svg?component-solid"

import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"
import { queryKeys } from "@/query/utils/query-keys"
import { Route as RootRoute } from "@/routes/__root"
import { textbooks } from "@/data/textbooks"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { DynamicModule, TextbookIDEnum, Textbook } from "@/data/types"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/features/stats-page/loader-helpers"
import { Sidebar } from "@/features/homepage/shared/components/Sidebar"

export const Route = createFileRoute("/_home/sentence-practice/")({
  loader: ({ context }) => {
    // Set background settings for sentence practice page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      // blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
  onLeave: ({ context }) => {
    // Reset background settings to defaults
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: undefined,
      backgroundOpacityOffset: 0,
      showGradient: true,
    })
  },
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
    linkTo: `/sentence-practice/${strippedId}`,
    iconClass: getModuleIconClasses("sentence-practice"),
  }
}

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  const [search, setSearch] = createSignal("")

  // Get available textbooks for selection (exclude getting_started)
  const availableTextbooks = createMemo(() =>
    Object.entries(textbooks)
      .filter(([textbookId]) => textbookId !== "getting_started")
      .map(
        ([id, textbook]: [string, Textbook]) =>
          [
            id,
            {
              id,
              name: textbook.name,
              short_name: textbook.short_name,
            },
          ] as const,
      ),
  )

  // All sentence-practice modules for the active textbook
  const allModules = createMemo(() => {
    let activeTb = settingsQuery.data?.["active-learning-path"] as
      | TextbookIDEnum
      | undefined
    if (!activeTb) return []
    if (activeTb === "getting_started") {
      activeTb = "genki_1" // fallback for onboarding
    }

    // Get all sentence-practice modules from dynamic_modules
    const sentencePracticeModules = Object.entries(dynamic_modules)
      .filter(([moduleId]) => moduleId.startsWith("sentence-practice-"))
      .map(([id, module]) => ({ id, ...module }))

    return sentencePracticeModules.map(enrich)
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
    <div class="flex">
      <div class="sticky top-0 -mt-16 self-start 2xl:fixed 2xl:mt-0">
        <Sidebar user={context().user?.id || null} isActive={() => false} />
      </div>
      <div class="2xl:pl-12" />
      <div class="relative mx-auto mt-10 w-full max-w-6xl px-4 pb-28 lg:pt-16">
        <div class="absolute -top-14 right-4 flex items-center gap-1 lg:top-16">
          <Show when={settingsQuery.data}>
            <FindMoreHereSvg class="w-44 text-neutral-400" />
            <Select
              value={settingsQuery.data!["active-learning-path"]}
              onChange={async (value) => {
                await applyUserSettingsUpdate(
                  context().user?.id || null,
                  queryClient,
                  {
                    "active-learning-path": value as TextbookIDEnum,
                  },
                )
              }}
              options={availableTextbooks().map(([id]) => id)}
              placeholder="Select textbook"
              itemComponent={(props) => (
                <SelectItem item={props.item}>
                  {availableTextbooks().find(
                    ([id]) => id === props.item.rawValue,
                  )?.[1].short_name ||
                    availableTextbooks().find(
                      ([id]) => id === props.item.rawValue,
                    )?.[1].name}
                </SelectItem>
              )}
            >
              <SelectTrigger class="bg-background/40 w-[180px]">
                <SelectValue<string>>
                  {(state) =>
                    availableTextbooks().find(
                      ([id]) => id === state.selectedOption(),
                    )?.[1].short_name ||
                    availableTextbooks().find(
                      ([id]) => id === state.selectedOption(),
                    )?.[1].name
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent class="bg-background border-card-foreground/70" />
            </Select>
          </Show>
        </div>
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
    </div>
  )
}
