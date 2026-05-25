import {
  For,
  Show,
  createMemo,
  createSignal,
  onMount,
  onCleanup,
} from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import type { ModuleLink } from "@/lib/module-links"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Search, PencilLine, BookOpen } from "lucide-solid"
import { TimelineList, TimelineItem } from "@/components/TimelineList"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { dynamic_modules, type DynamicModule } from "@/data/dynamic_modules"
import { chapters, type BuiltInChapter } from "@/data/chapters"
import { textbooks } from "@/data/textbooks"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { usePreferences } from "@/lib/preferences"
import { buildPathSelectionPreferences } from "@/features/learning-path/selection"
import { queryKeys } from "~/query/query-keys"
import {
  getInitialAnimationStyles,
  observeElementForAnimation,
} from "@/utils/animations"

export const Route = createFileRoute("/_home/sentence-practice/")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 16,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: SentencePracticeList,
})

type ChapterGroup = {
  chapter: BuiltInChapter
  modules: EnrichedSentenceModule[]
}

function SentencePracticeList() {
  const { preferences, setPreferences } = usePreferences()

  // Search state
  const [search, setSearch] = createSignal("")

  // Get active learning path from user preferences
  const activeLearningPath = () => preferences().activeLearningPath

  // Available textbooks for selector
  const availableTextbooks = createMemo(() =>
    Object.entries(textbooks)
      .filter(([textbookId]) => textbookId !== "getting_started")
      .map(([id, textbook]) => ({
        id,
        name: textbook.short_name || textbook.name,
      })),
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
            chapterModules.push(
              enrichModule({ id: itemId, ...module }, chapterSlug),
            )
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
      .map((group) => ({
        ...group,
        modules: group.modules.filter(
          (m) =>
            m.title.toLowerCase().includes(q) ||
            (m.description || "").toLowerCase().includes(q) ||
            m.id.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.modules.length > 0)
  })

  const totalModules = createMemo(() =>
    groupedByChapter().reduce((acc, g) => acc + g.modules.length, 0),
  )

  return (
    <div class="flex">
      {/* <div class="sticky top-0 -mt-16 self-start 2xl:fixed 2xl:mt-0"> */}
      {/*   <Sidebar animated={false} /> */}
      {/* </div> */}
      <div class="2xl:pl-12" />
      <div class="relative mx-auto mt-10 w-full max-w-5xl px-4 pb-28 lg:pt-16">
        {/* Textbook selector (top-right) */}
        <div class="absolute -top-14 right-4 flex items-center gap-1 lg:top-16">
          <Select
            value={activeLearningPath()}
            onChange={(value) => {
              if (value) setPreferences(buildPathSelectionPreferences(value))
            }}
            options={availableTextbooks().map((t) => t.id)}
            placeholder="Select textbook"
            itemComponent={(props) => (
              <SelectItem item={props.item}>
                {availableTextbooks().find((t) => t.id === props.item.rawValue)
                  ?.name || "Select textbook"}
              </SelectItem>
            )}
          >
            <SelectTrigger class="bg-background/60 w-[180px] border-border/60 backdrop-blur-sm dark:border-0 dark:bg-background/40">
              <SelectValue<string>>
                {(state) => {
                  const tb = availableTextbooks().find(
                    (t) => t.id === state.selectedOption(),
                  )
                  return tb?.name || "Select textbook"
                }}
              </SelectValue>
            </SelectTrigger>
            <SelectContent class="bg-popover border-border/70 text-popover-foreground dark:bg-background dark:border-card-foreground/70" />
          </Select>
        </div>

        {/* Header */}
        <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div class="mb-2 flex items-center gap-2">
              <PencilLine class="size-4 text-yellow-500 dark:text-amber-400" />
              <span class="text-xs font-semibold tracking-widest text-yellow-500 uppercase dark:text-amber-400/90">
                Sentence Practice
              </span>
            </div>
            <h1 class="font-japanese text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              文型練習
            </h1>
            <p class="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed md:text-base">
              Master sentence patterns chapter by chapter. Build your
              understanding progressively.
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
                  class="bg-card/70 border-border/60 pl-9 backdrop-blur-sm focus-visible:ring-yellow-500/40 dark:bg-card/40 dark:border-card-foreground/20 dark:focus-visible:ring-amber-500/50"
                />
              </div>
            </TextField>
          </div>
        </div>

        {/* Content */}
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
        <div class="flex size-6 items-center justify-center rounded-md bg-yellow-500/15 text-xs font-bold text-yellow-600 ring-1 ring-yellow-500/20 dark:bg-transparent dark:bg-gradient-to-br dark:from-amber-500/20 dark:to-orange-500/20 dark:text-amber-400 dark:ring-0">
          {getChapterDisplayNumber(props.group.chapter.slug)}
        </div>
        <span class="text-muted-foreground/60 text-xs">
          · {props.group.modules.length}{" "}
          {props.group.modules.length === 1 ? "pattern" : "patterns"}
        </span>
      </div>

      {/* Module list */}
      <TimelineList each={props.group.modules}>
        {(m) => (
          <TimelineItem
            title={m.title}
            description={m.description}
            linkTo={m.linkTo}
            class="hover:bg-yellow-500/5 hover:text-yellow-500 focus-visible:bg-yellow-500/10 dark:hover:bg-amber-500/5 dark:hover:text-amber-400 dark:focus-visible:bg-amber-500/10"
            dotClass="group-hover:border-yellow-500 group-hover:bg-yellow-500 dark:group-hover:border-amber-500 dark:group-hover:bg-amber-500"
          />
        )}
      </TimelineList>
    </div>
  )
}

type EnrichedSentenceModule = {
  id: string
  title: string
  description?: string
  linkTo: ModuleLink
  chapterSlug?: string
}

function enrichModule(
  mod: { id: string } & DynamicModule,
  chapterSlug?: string,
): EnrichedSentenceModule {
  const strippedId = mod.id.replace(/^sentence-practice-/, "")
  return {
    id: mod.id,
    title: mod.title,
    description: mod.instructions || mod.description,
    linkTo: { to: `/sentence-practice/${strippedId}` },
    chapterSlug,
  }
}
