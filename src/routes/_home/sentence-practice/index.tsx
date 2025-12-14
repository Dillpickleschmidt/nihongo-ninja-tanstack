import { For, Show, createMemo, createSignal, onMount, onCleanup } from "solid-js"
import { createFileRoute, Link } from "@tanstack/solid-router"
import { useMutation } from "convex-solidjs"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Search, PencilLine, ChevronRight, BookOpen } from "lucide-solid"
import { cn } from "@/utils"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { dynamic_modules, type DynamicModule } from "@/data/dynamic_modules"
import { chapters, type LearningPathChapter } from "@/data/chapters"
import { textbooks } from "@/data/textbooks"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { getUser } from '@/lib/auth'
import { useConvexQuery, convexQuery } from "@/lib/convex-query"
import { useQueryClient } from '@tanstack/solid-query'
import { queryKeys } from "~/query/query-keys"
import { api } from "../../../../convex/_generated/api"
import { getInitialAnimationStyles, observeElementForAnimation } from "@/utils/animations"

export const Route = createFileRoute("/_home/sentence-practice/")({
  loader: ({ context }) => {
    // Prefetch user profile for instant data on navigation
    context.queryClient.prefetchQuery(
      convexQuery(api.api.profiles.getProfile, {})
    )
  },
  component: SentencePracticeList,
})

type ChapterGroup = {
  chapter: LearningPathChapter
  modules: EnrichedSentenceModule[]
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
  const activeLearningPath = () =>
    profileQuery.data()?.userPreferences?.activeLearningPath || "genki_1"

  // Mutation to update learning path
  const updateLearningPath = useMutation(api.api.profiles.updatePreferenceField)

  // Available textbooks for selector
  const availableTextbooks = createMemo(() =>
    Object.entries(textbooks)
      .filter(([textbookId]) => textbookId !== "getting_started")
      .map(([id, textbook]) => ({ id, name: textbook.short_name || textbook.name }))
  )

  // Group modules by chapter
  const groupedByChapter = createMemo((): ChapterGroup[] => {
    const learningPath = activeLearningPath()
    const textbookChapters = chapters[learningPath as keyof typeof chapters]
    if (!textbookChapters) return []

    const groups: ChapterGroup[] = []

    Object.entries(textbookChapters).forEach(([chapterSlug, chapter]) => {
      const chapterModules: EnrichedSentenceModule[] = []

      chapter.learning_path_item_ids.forEach((itemId) => {
        if (itemId.startsWith("sentence-practice-")) {
          const module = dynamic_modules[itemId]
          if (module) {
            chapterModules.push(enrichModule({ id: itemId, ...module }, chapterSlug))
          }
        }
      })

      if (chapterModules.length > 0) {
        groups.push({ chapter, modules: chapterModules })
      }
    })

    return groups
  })

  // Filter modules based on search
  const filteredGroups = createMemo((): ChapterGroup[] => {
    const q = search().trim().toLowerCase()
    if (!q) return groupedByChapter()

    return groupedByChapter()
      .map(group => ({
        ...group,
        modules: group.modules.filter(
          (m) =>
            m.title.toLowerCase().includes(q) ||
            (m.description || "").toLowerCase().includes(q) ||
            m.id.toLowerCase().includes(q),
        )
      }))
      .filter(group => group.modules.length > 0)
  })

  const totalModules = createMemo(() =>
    groupedByChapter().reduce((acc, g) => acc + g.modules.length, 0)
  )

  return (
    <div class="flex">
      <div class="sticky top-0 -mt-16 self-start 2xl:fixed 2xl:mt-0">
        <Sidebar animated={false} />
      </div>
      <div class="2xl:pl-12" />
      <div class="relative mx-auto mt-10 w-full max-w-5xl px-4 pb-28 lg:pt-16">
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
        <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div class="mb-2 flex items-center gap-2">
              <PencilLine class="size-4 text-amber-400" />
              <span class="text-xs font-semibold tracking-widest text-amber-400/90 uppercase">
                Sentence Practice
              </span>
            </div>
            <h1 class="font-japanese text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              文型練習
            </h1>
            <p class="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed md:text-base">
              Master sentence patterns chapter by chapter. Build your understanding progressively.
            </p>
          </div>

          {/* Search */}
          <div class="w-full sm:w-72">
            <TextField class="w-full">
              <div class="relative">
                <Search class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 z-10 -translate-y-1/2" />
                <TextFieldInput
                  placeholder="Search patterns..."
                  value={search()}
                  onInput={(e) => setSearch(e.currentTarget.value)}
                  class="bg-card/40 border-card-foreground/20 pl-9 backdrop-blur-sm focus-visible:ring-amber-500/50"
                />
              </div>
            </TextField>
          </div>
        </div>

        {/* Content */}
        <Show
          when={!profileQuery.isLoading()}
          fallback={
            <div class="space-y-8">
              <For each={Array.from({ length: 3 })}>
                {() => (
                  <div class="space-y-3">
                    <div class="bg-card/40 h-8 w-48 animate-pulse rounded-lg" />
                    <div class="bg-card/40 h-24 animate-pulse rounded-xl" />
                  </div>
                )}
              </For>
            </div>
          }
        >
          <Show
            when={totalModules() > 0}
            fallback={
              <div class="text-muted-foreground py-12 text-center">
                <BookOpen class="mx-auto mb-3 size-12 opacity-50" />
                <p>No sentence practice modules found for this textbook.</p>
              </div>
            }
          >
            {/* Chapter groups */}
            <div class="space-y-6">
              <For each={filteredGroups()}>
                {(group) => <ChapterGroupItem group={group} />}
              </For>
            </div>

            {/* Empty search results */}
            <Show when={filteredGroups().length === 0 && totalModules() > 0}>
              <div class="text-muted-foreground py-12 text-center">
                <Search class="mx-auto mb-3 size-10 opacity-50" />
                <p>No results for "{search()}"</p>
                <p class="mt-1 text-sm opacity-70">Try a different search term</p>
              </div>
            </Show>
          </Show>
        </Show>
      </div>
    </div>
  )
}

function ChapterGroupItem(props: { group: ChapterGroup }) {
  let ref: HTMLDivElement | undefined

  onMount(() => {
    if (ref) {
      const cleanup = observeElementForAnimation(ref, {
        initialPosition: "down",
        startVisible: false,
        noExit: true,
        screenBottomOffset: 15,
        screenTopOffset: 15,
      })
      onCleanup(cleanup)
    }
  })

  return (
    <div ref={ref} style={getInitialAnimationStyles("down")}>
      {/* Chapter header */}
      <div class="mb-1.5 flex items-center gap-2">
        <div class="flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-xs font-bold text-amber-400">
          {getChapterDisplayNumber(props.group.chapter.slug)}
        </div>
        <span class="text-muted-foreground/60 text-xs">
          · {props.group.modules.length} {props.group.modules.length === 1 ? "pattern" : "patterns"}
        </span>
      </div>

      {/* Module list */}
      <ul class="relative ml-[7px] border-l-2 border-card-foreground/10">
        <For each={props.group.modules}>
          {(m, index) => (
            <li class={cn("relative", index() !== props.group.modules.length - 1 && "pb-1")}>
              <Link
                to={m.linkTo}
                class={cn(
                  "group flex items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 transition-all duration-150",
                  "hover:bg-amber-500/5",
                  "focus-visible:outline-none focus-visible:bg-amber-500/10"
                )}
              >
                {/* Timeline dot - vertically centered */}
                <div class="absolute left-[-7px] top-1/2 -translate-y-1/2 size-3 rounded-full border-2 border-card-foreground/20 bg-background transition-colors group-hover:border-amber-500 group-hover:bg-amber-500" />

                <div class="min-w-0 flex-1">
                  <h3 class="text-sm font-medium leading-tight transition-colors group-hover:text-amber-400">
                    {m.title}
                  </h3>
                  <Show when={m.description}>
                    <p class="text-muted-foreground mt-0.5 line-clamp-1 text-xs">
                      {m.description}
                    </p>
                  </Show>
                </div>

                <ChevronRight class="size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-amber-400" />
              </Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

type EnrichedSentenceModule = {
  id: string
  title: string
  description?: string
  linkTo: string
  chapterSlug?: string
}

function enrichModule(mod: { id: string } & DynamicModule, chapterSlug?: string): EnrichedSentenceModule {
  const strippedId = mod.id.replace(/^sentence-practice-/, "")
  return {
    id: mod.id,
    title: mod.title,
    description: mod.instructions || mod.description,
    linkTo: `/sentence-practice/${strippedId}`,
    chapterSlug,
  }
}
