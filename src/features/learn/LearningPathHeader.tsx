import { For, Show, Suspense, createEffect, createMemo, createSignal } from "solid-js"
import { useMutation } from "convex-solidjs"
import { ChevronDown, RotateCcw, Wallpaper, X } from "lucide-solid"
import { api } from "convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/custom/skeleton"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import {
  clearChapterBackground,
  getChapterBackgroundId,
  type BackgroundTarget,
} from "@/features/backgrounds/overrides"
import { BackgroundAssignmentDialog } from "@/features/backgrounds/components/BackgroundAssignmentDialog"
import { BackgroundContextRow } from "@/features/backgrounds/components/BackgroundContextRow"
import { BackgroundPreviewMedia } from "@/features/backgrounds/components/BackgroundPreviewMedia"
import { resolveBackground } from "@/features/backgrounds/resolveBackground"
import { getDefaultChapterSlugForPath } from "@/features/learning-path/selection"
import { useSrs } from "@/features/srs/use-srs"
import { useLocalCompletions } from "@/lib/completions"
import { cn } from "@/utils"
import { useLearningPath } from "./context/learning-path"
import { DueCountBadge } from "./components/DueCountBadge"
import type { LearningPathChapter } from "convex/model/learning_paths"

export function LearningPathHeader() {
  const [isPathPopoverOpen, setIsPathPopoverOpen] = createSignal(false)
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const [editTarget, setEditTarget] = createSignal<BackgroundTarget | null>(null)
  const [deletingPathId, setDeletingPathId] = createSignal<string | null>(null)
  const [chaptersExpanded, setChaptersExpanded] = createSignal(false)
  const {
    query,
    preferences,
    setPreference,
    selectedPathId,
    selectedPath,
    switchPath,
  } = useLearningPath()
  const { dueCounts } = useSrs()
  const deletePathMutation = useMutation(
    api.api.learning_paths.deleteCustomLearningPath,
  )

  const dashboardData = () => query.data()
  const chapters = () => dashboardData()!.chapters
  const paths = () => dashboardData()!.paths
  const activePathId = () => preferences().activeLearningPath
  const activeChapterSlug = () => preferences().activeChapter
  const backgroundOverrides = () => preferences().backgroundOverrides
  const completedSet = createMemo(
    () => new Set(dashboardData()?.completedModules ?? []),
  )
  const localCompletions = useLocalCompletions()
  const chapterRefs = new Map<string, HTMLDivElement>()
  let chapterScrollContainer: HTMLDivElement | undefined

  const isCompleted = (moduleId: string) =>
    completedSet().has(moduleId) || moduleId in localCompletions()

  createEffect(() => {
    const data = dashboardData()
    const slug = activeChapterSlug()
    if (!data || chaptersExpanded()) return

    queueMicrotask(() => {
      const card = chapterRefs.get(slug)
      if (!card || !chapterScrollContainer) return
      chapterScrollContainer.scrollTo({
        top:
          card.offsetTop -
          chapterScrollContainer.offsetTop -
          chapterScrollContainer.clientHeight / 2 +
          card.clientHeight / 2,
        behavior: "smooth",
      })
    })
  })

  const totalModules = () =>
    chapters().reduce((sum, chapter) => sum + chapter.modules.length, 0)
  const completedModules = () =>
    chapters().reduce(
      (sum, chapter) =>
        sum +
        chapter.modules.filter((module) => isCompleted(module.moduleId)).length,
      0,
    )
  const resolvePathBackground = (pathId: string) =>
    resolveBackground(
      pathId,
      getDefaultChapterSlugForPath(pathId),
      backgroundOverrides(),
    )

  const resolveChapterBackground = (chapterSlug: string) =>
    resolveBackground(activePathId(), chapterSlug, backgroundOverrides())

  const openEditor = (target: BackgroundTarget) => {
    setEditTarget(target)
    setIsPathPopoverOpen(false)
    setIsDialogOpen(true)
  }

  const hasChapterBackground = (target: BackgroundTarget) =>
    !!getChapterBackgroundId(backgroundOverrides(), target)

  const resetChapterBackground = (target: BackgroundTarget) => {
    setPreference(
      "backgroundOverrides",
      clearChapterBackground(backgroundOverrides(), target),
    )
  }

  const getPathLabel = (pathId: string) =>
    paths().find((path) => path.id === pathId)?.shortName ?? pathId

  const getEditContextLabel = (target: BackgroundTarget) =>
    `${getPathLabel(target.pathId)} · Chapter ${getChapterDisplayNumber(target.chapterSlug)}`


  const handleDeletePath = async (
    event: MouseEvent,
    path: {
      id: string
      name: string
      shortName: string
      isUserCreated: boolean
    },
  ) => {
    event.preventDefault()
    event.stopPropagation()
    if (
      !window.confirm(
        `Delete "${path.name}"? This will also delete all vocabulary decks generated for this learning path.`,
      )
    )
      return

    setDeletingPathId(path.id)
    try {
      await deletePathMutation.mutate({ pathId: path.id })
      setIsPathPopoverOpen(false)
    } catch (error) {
      console.error("Failed to delete learning path:", error)
      alert("Failed to delete learning path. Please try again.")
    } finally {
      setDeletingPathId(null)
    }
  }

  return (
    <section class="animate-fade-up opacity-0">
      <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div class="text-xs uppercase tracking-[0.28em] text-muted-foreground dark:text-white/40">
          Learning Path
        </div>
        <DueCountBadge count={() => dueCounts().vocabTotal} />
      </div>

      <Show when={dashboardData()} fallback={<LearningPathHeaderSkeleton />}>
        <div class="flex flex-col gap-5 lg:flex-row lg:items-start">
          <div class="lg:w-56 lg:shrink-0">
            <Popover
              open={isPathPopoverOpen()}
              onOpenChange={setIsPathPopoverOpen}
            >
              <PopoverTrigger class="group relative block w-full overflow-hidden rounded-2xl border border-dynamic-accent/55 text-left shadow-[0_14px_40px_-24px_var(--dynamic-accent)] lg:w-56">
                <PathPreviewBackground pathId={activePathId()} />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div class="absolute right-2 top-2 rounded-full bg-black/35 p-1.5 text-white/80 backdrop-blur-md transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <ChevronDown class="size-3.5" />
                </div>
                <div class="absolute inset-x-0 bottom-0 p-3">
                  <div class="truncate text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    {selectedPath()?.shortName}
                  </div>
                  <div class="mt-2 text-xs text-white/60">
                    {completedModules()} / {totalModules()}
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent
                class="w-110 max-w-[calc(100vw-2rem)] max-h-[70vh] overflow-y-auto rounded-xl border border-dynamic-accent/20 p-4 text-white shadow-xl backdrop-blur-2xl"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--dynamic-accent) 12%, rgb(10 10 10 / 0.78))",
                }}
              >
                <div class="grid grid-cols-2 gap-2">
                  <For each={paths()}>
                    {(path) => (
                      <BackgroundContextRow
                        title={path.shortName}
                        aspect="16 / 9"
                        resolvedBackground={resolvePathBackground(path.id)}
                        active={selectedPathId() === path.id}
                        onSelect={() => {
                          if (path.id !== activePathId()) switchPath(path.id)
                          setIsPathPopoverOpen(false)
                        }}
                        actions={
                          <Show when={path.isUserCreated}>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              disabled={deletingPathId() === path.id}
                              onClick={(e) => void handleDeletePath(e, path)}
                              aria-label={`Delete learning path ${path.name}`}
                              class="text-white/70 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <Show
                                when={deletingPathId() === path.id}
                                fallback={<X class="size-3.5" />}
                              >
                                <span class="inline-block size-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                              </Show>
                            </Button>
                          </Show>
                        }
                      />
                    )}
                  </For>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div class="relative min-w-0 flex-1 border-border/70 lg:self-start lg:border-l lg:pl-5 dark:border-white/10">
            <div
              ref={chapterScrollContainer}
              class={cn(
                "pr-1 pb-2 transition-[max-height] duration-200",
                chaptersExpanded()
                  ? "max-h-none overflow-visible"
                  : "max-h-78 overflow-y-auto scrollbar-thin sm:max-h-78",
              )}
            >
              <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <For each={chapters()}>
                  {(chapter) => (
                    <ChapterCard
                      ref={(el) => chapterRefs.set(chapter.slug, el)}
                      chapter={chapter}
                      active={activeChapterSlug() === chapter.slug}
                      completedCount={
                        chapter.modules.filter((module) =>
                          isCompleted(module.moduleId),
                        ).length
                      }
                      resolvedBackground={resolveChapterBackground(
                        chapter.slug,
                      )}
                      hasOverride={hasChapterBackground({
                        pathId: activePathId(),
                        chapterSlug: chapter.slug,
                      })}
                      onSelect={() =>
                        setPreference("activeChapter", chapter.slug)
                      }
                      onReset={() =>
                        resetChapterBackground({
                          pathId: activePathId(),
                          chapterSlug: chapter.slug,
                        })
                      }
                      onEdit={() =>
                        openEditor({
                          pathId: activePathId(),
                          chapterSlug: chapter.slug,
                        })
                      }
                    />
                  )}
                </For>
              </div>
            </div>
            <Show when={chapters().length > 4}>
              <button
                type="button"
                onClick={() => setChaptersExpanded((expanded) => !expanded)}
                class="group absolute inset-x-0 top-full flex w-full cursor-pointer flex-col items-center"
                aria-expanded={chaptersExpanded()}
              >
                <div class="h-px w-full bg-border/70 lg:hidden dark:bg-white/10" />
                <ChevronDown
                  class={cn(
                    "mt-2 size-5 text-muted-foreground/50 transition-all duration-200 group-hover:text-muted-foreground lg:size-4 dark:text-white/20 dark:group-hover:text-white/40",
                    chaptersExpanded() && "rotate-180",
                  )}
                />
              </button>
            </Show>
          </div>
        </div>
      </Show>

      <Suspense>
        <Show when={editTarget()}>
          {(target) => (
            <BackgroundAssignmentDialog
              open={isDialogOpen()}
              onOpenChange={(open) => {
                setIsDialogOpen(open)
                if (!open) setEditTarget(null)
              }}
              contextLabel={getEditContextLabel(target())}
              target={target()}
              getPathLabel={getPathLabel}
            />
          )}
        </Show>
      </Suspense>
    </section>
  )
}

function LearningPathHeaderSkeleton() {
  return (
    <div class="flex flex-col gap-5 lg:flex-row lg:items-start">
      <Skeleton class="h-24 rounded-2xl lg:h-40 lg:w-56 lg:shrink-0" />
      <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap lg:border-l lg:border-border/70 lg:pl-5 dark:lg:border-white/10">
        <Skeleton class="h-32 rounded-2xl sm:w-44" />
        <Skeleton class="h-32 rounded-2xl sm:w-44" />
        <Skeleton class="h-32 rounded-2xl sm:w-44" />
        <Skeleton class="h-32 rounded-2xl sm:w-44" />
      </div>
    </div>
  )
}

function PathPreviewBackground(props: { pathId: string }) {
  const { preferences } = useLearningPath()
  const resolved = () =>
    resolveBackground(
      props.pathId,
      getDefaultChapterSlugForPath(props.pathId),
      preferences().backgroundOverrides,
    ).background

  return (
    <div class="relative h-24 lg:h-40">
      <BackgroundPreviewMedia
        item={resolved()}
        width={420}
        height={260}
        class="h-full w-full object-cover"
      />
    </div>
  )
}

function ChapterCard(props: {
  ref: (el: HTMLDivElement) => void
  chapter: LearningPathChapter
  active: boolean
  completedCount: number
  resolvedBackground: ReturnType<typeof resolveBackground>
  hasOverride: boolean
  onSelect: () => void
  onReset: () => void
  onEdit: () => void
}) {
  const total = () => props.chapter.modules.length
  const percent = () =>
    total() === 0 ? 0 : (props.completedCount / total()) * 100
  const background = () => props.resolvedBackground.background

  return (
    <div
      ref={props.ref}
      class="group relative min-w-0 scroll-mt-2 overflow-hidden rounded-2xl sm:w-44 sm:shrink-0"
    >
      <button
        type="button"
        onClick={props.onSelect}
        class={cn(
          "block w-full overflow-hidden rounded-2xl border text-left transition-colors",
          props.active
            ? "border-2 border-dynamic-accent/80"
            : "border-border/40 hover:border-dynamic-accent/25 dark:border-white/10 dark:hover:border-white/20",
        )}
      >
        <div class="relative h-32">
          <BackgroundPreviewMedia
            item={background()}
            width={260}
            height={170}
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <Show when={props.active}>
            <div class="absolute left-2 top-2 rounded-full bg-dynamic-accent/90 px-2 py-0.5 text-[10px] font-medium text-black">
              Active
            </div>
          </Show>
          <div class="absolute inset-x-0 bottom-0 p-3">
            <div class="truncate text-xs font-semibold uppercase tracking-[0.16em] text-white">
              {props.chapter.title}
            </div>
            <div class="mt-2 flex items-center gap-2">
              <div class="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                <div
                  class="h-full rounded-full bg-emerald-400"
                  style={{ width: `${percent()}%` }}
                />
              </div>
              <span class="font-mono text-[10px] text-white/55">
                {props.completedCount}/{total()}
              </span>
            </div>
          </div>
        </div>
      </button>
      <div class="absolute right-1.5 top-1.5 flex items-center gap-1">
        <BackgroundOverrideActions
          label={`chapter ${getChapterDisplayNumber(props.chapter.slug)}`}
          hasOverride={props.hasOverride}
          onReset={props.onReset}
          onEdit={props.onEdit}
        />
      </div>
    </div>
  )
}

interface BackgroundOverrideActionsProps {
  label: string
  hasOverride: boolean
  onReset: () => void
  onEdit: () => void
}

function BackgroundOverrideActions(props: BackgroundOverrideActionsProps) {
  return (
    <>
      <Show when={props.hasOverride}>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={(e) => {
            e.stopPropagation()
            props.onReset()
          }}
          aria-label={`Reset background image for ${props.label}`}
          class="text-white/75 hover:bg-white/10 hover:text-white"
        >
          <RotateCcw class="size-3.5" />
        </Button>
      </Show>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={(e) => {
          e.stopPropagation()
          props.onEdit()
        }}
        aria-label={`Change background image for ${props.label}`}
        class="text-white/80 hover:bg-white/10 hover:text-white"
      >
        <Wallpaper />
      </Button>
    </>
  )
}
