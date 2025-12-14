import { For, Show, createMemo, createSignal } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { useMutation } from "convex-solidjs"
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
import { Search, PencilLine } from "lucide-solid"
import { cn } from "@/utils"
import { dynamic_modules, type DynamicModule } from "@/data/dynamic_modules"
import { chapters } from "@/data/chapters"
import { textbooks } from "@/data/textbooks"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { getUser } from '@/lib/auth'
import { useConvexQuery, convexQuery } from "@/lib/convex-query"
import { useQueryClient } from '@tanstack/solid-query'
import { queryKeys } from "~/query/query-keys"
import { api } from "../../../../convex/_generated/api"

export const Route = createFileRoute("/_home/sentence-practice/")({
  loader: ({ context }) => {
    // Prefetch user profile for instant data on navigation
    context.queryClient.prefetchQuery(
      convexQuery(api.api.profiles.getProfile, {})
    )
  },
  component: SentencePracticeList,
})

type EnrichedSentenceModule = {
  id: string
  title: string
  description?: string
  linkTo: string
}

function enrichModule(mod: { id: string } & DynamicModule): EnrichedSentenceModule {
  const strippedId = mod.id.replace(/^sentence-practice-/, "")
  return {
    id: mod.id,
    title: mod.title,
    description: mod.instructions || mod.description,
    linkTo: `/sentence-practice/${strippedId}`,
  }
}

function SentencePracticeList() {
  const user = getUser()
  const queryClient = useQueryClient()

  queryClient.setQueryData(queryKeys.backgroundSettings(), {
    blur: 16,
    opacityOffset: -0.22,
    showGradient: false,
  })

  // Fetch user profile with preferences
  const profileQuery = useConvexQuery(
    api.api.profiles.getProfile,
    {},
    () => ({ enabled: !!user() })
  )

  // Search state
  const [search, setSearch] = createSignal("")

  // Get active learning path from user preferences
  const activeLearningPath = createMemo(() => {
    return profileQuery.data()?.userPreferences?.activeLearningPath || "genki_1"
  })

  // Mutation to update learning path
  const updateLearningPath = useMutation(api.api.profiles.updatePreferenceField)

  // Available textbooks for selector
  const availableTextbooks = createMemo(() =>
    Object.entries(textbooks)
      .filter(([textbookId]) => textbookId !== "getting_started")
      .map(([id, textbook]) => ({ id, name: textbook.short_name || textbook.name }))
  )

  // Get all sentence-practice module IDs for active textbook
  const textbookSentenceModuleIds = createMemo(() => {
    const learningPath = activeLearningPath()
    const textbookChapters = chapters[learningPath as keyof typeof chapters]
    if (!textbookChapters) return []

    const moduleIds = new Set<string>()
    Object.values(textbookChapters).forEach((chapter) => {
      chapter.learning_path_item_ids.forEach((itemId) => {
        if (itemId.startsWith("sentence-practice-")) {
          moduleIds.add(itemId)
        }
      })
    })

    return Array.from(moduleIds)
  })

  // Filter dynamic_modules to only show modules for active textbook
  const allModules = createMemo(() => {
    const allowedIds = textbookSentenceModuleIds()
    return Object.entries(dynamic_modules)
      .filter(([moduleId]) => allowedIds.includes(moduleId))
      .map(([id, module]) => ({ id, ...module }))
      .map(enrichModule)
  })

  // Filter modules based on search
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

  return (
    <div class="flex">
      <div class="sticky top-0 -mt-16 self-start 2xl:fixed 2xl:mt-0">
        <Sidebar animated={false} />
      </div>
      <div class="2xl:pl-12" />
      <div class="relative mx-auto mt-10 w-full max-w-6xl px-4 pb-28 lg:pt-16">
        {/* Textbook selector (top-right) */}
        <div class="absolute -top-14 right-4 flex items-center gap-1 lg:top-16">
          <Show when={profileQuery.data}>
            <Select
              value={activeLearningPath()}
              onChange={(value) => {
                updateLearningPath.mutate({ field: "activeLearningPath", value })
              }}
              options={availableTextbooks().map(t => t.id)}
              placeholder="Select textbook"
              itemComponent={(props) => (
                <SelectItem item={props.item}>
                  {availableTextbooks().find(t => t.id === props.item.rawValue)?.name || "Select textbook"}
                </SelectItem>
              )}
            >
              <SelectTrigger class="bg-background/40 w-[180px]">
                <SelectValue<string>>
                  {(state) => {
                    const tb = availableTextbooks().find(t => t.id === state.selectedOption())
                    return tb?.name || "Select textbook"
                  }}
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
              Your available sets come from the currently selected textbook.
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
                  class="pl-9 focus-visible:ring-yellow-500"
                />
              </div>
            </TextField>
          </div>
        </div>

        {/* Content */}
        <Show
          when={!profileQuery.isLoading()}
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
                      borderClass="stroke-yellow-500/20"
                      focusRing
                      focusRingClass="stroke-yellow-500/50"
                      focusStrokeWidth={2.5}
                      class={cn(
                        "relative overflow-hidden",
                        "bg-transparent bg-gradient-to-br from-yellow-500/10 to-yellow-600/10",
                        "backdrop-blur-md shadow-lg shadow-black/20",
                        "ease-instant-hover-150 hover:scale-[1.02]",
                      )}
                    >
                      {/* Subtle radial highlight */}
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
                            <PencilLine class="size-5 text-yellow-600 dark:text-yellow-500 saturate-75" />
                          </div>
                        </div>
                      </div>
                    </SmoothCardLink>
                  )}
                </For>
              </div>
            </div>

            {/* Empty search results */}
            <Show
              when={filteredModules().length === 0 && allModules().length > 0}
            >
              <div class="text-muted-foreground mt-6 text-sm">
                No results for "{search()}". Try a different search.
              </div>
            </Show>
          </Show>
        </Show>
      </div>
    </div>
  )
}
