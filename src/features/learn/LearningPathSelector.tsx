import { For, Show, createSignal } from "solid-js"
import { ChevronRight, RotateCcw, Wallpaper, X } from "lucide-solid"
import { useMutation } from "convex-solidjs"
import { api } from "convex/_generated/api"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import {
  clearAssignedBackgroundId,
  getAssignedBackgroundId,
  setAssignedBackgroundId,
  type BackgroundScope,
} from "@/features/backgrounds/overrides"
import { BackgroundAssignmentDialog } from "@/features/backgrounds/components/BackgroundAssignmentDialog"
import { BackgroundContextRow } from "@/features/backgrounds/components/BackgroundContextRow"
import { resolveBackground } from "@/features/backgrounds/resolveBackground"
import { getDefaultChapterSlugForPath } from "@/features/learning-path/selection"
import { useLearningPath } from "./context/learning-path"

export function LearningPathSelector() {
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const [editTarget, setEditTarget] = createSignal<BackgroundScope | null>(null)
  const [deletingPathId, setDeletingPathId] = createSignal<string | null>(null)

  const { query, preferences, setPreference, selectedPathId, switchPath } =
    useLearningPath()
  const deletePathMutation = useMutation(
    api.api.learning_paths.deleteCustomLearningPath,
  )

  const activePathId = () => preferences().activeLearningPath
  const currentChapterSlug = () => preferences().activeChapter
  const backgroundOverrides = () => preferences().backgroundOverrides
  const paths = () => query.data()?.paths ?? []
  const chapters = () => query.data()?.chapters ?? []

  const openEditor = (target: BackgroundScope) => {
    setEditTarget(target)
    setIsPopoverOpen(false)
    setIsDialogOpen(true)
  }

  const getPathLabel = (pathId: string) =>
    paths().find((p) => p.id === pathId)?.shortName ?? pathId

  const resolvePathBackground = (pathId: string) =>
    resolveBackground(
      pathId,
      getDefaultChapterSlugForPath(pathId),
      backgroundOverrides(),
    )

  const resolveChapterBackground = (chapterSlug: string) =>
    resolveBackground(activePathId(), chapterSlug, backgroundOverrides())

  const getEditContextLabel = (scope: BackgroundScope) => {
    if (scope.type === "path") return getPathLabel(scope.pathId)
    return `${getPathLabel(scope.pathId)} · Chapter ${getChapterDisplayNumber(scope.chapterSlug)}`
  }

  const getPreviewChapterSlug = (scope: BackgroundScope) =>
    scope.type === "path"
      ? getDefaultChapterSlugForPath(scope.pathId)
      : scope.chapterSlug

  const hasAssignedBackground = (scope: BackgroundScope) =>
    !!getAssignedBackgroundId(backgroundOverrides(), scope)

  const resetBackgroundOverride = (scope: BackgroundScope) => {
    setPreference(
      "backgroundOverrides",
      clearAssignedBackgroundId(backgroundOverrides(), scope),
    )
  }

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

    const confirmed = window.confirm(
      `Delete "${path.name}"? This will also delete all vocabulary decks generated for this learning path.`,
    )
    if (!confirmed) return

    setDeletingPathId(path.id)
    try {
      await deletePathMutation.mutate({ pathId: path.id })
      setIsPopoverOpen(false)
    } catch (error) {
      console.error("Failed to delete learning path:", error)
      alert("Failed to delete learning path. Please try again.")
    } finally {
      setDeletingPathId(null)
    }
  }

  return (
    <>
      <Popover open={isPopoverOpen()} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer">
          Change path
          <ChevronRight class="size-4" />
        </PopoverTrigger>
        <PopoverContent
          class="w-[440px] max-w-[calc(100vw-2rem)] max-h-[70vh] overflow-y-auto rounded-xl border border-dynamic-accent/20 p-4 text-white shadow-xl backdrop-blur-2xl"
          style={{
            "background-color":
              "color-mix(in srgb, var(--dynamic-accent) 12%, rgb(10 10 10 / 0.78))",
          }}
        >
          <div class="space-y-4">
            <div class="space-y-2">
              <PopoverGroupLabel>Learning Paths</PopoverGroupLabel>
              <Show when={paths().length > 0}>
                <div class="grid grid-cols-2 gap-2">
                  <For each={paths()}>
                    {(path) => (
                      <BackgroundContextRow
                        title={path.shortName}
                        aspect="16 / 9"
                        resolvedBackground={resolvePathBackground(path.id)}
                        active={selectedPathId() === path.id}
                        onSelect={() => {
                          if (path.id !== activePathId()) {
                            switchPath(path.id)
                          }
                          setIsPopoverOpen(false)
                        }}
                        actions={
                          <>
                            <BackgroundOverrideActions
                              label={path.shortName}
                              hasOverride={hasAssignedBackground({
                                type: "path",
                                pathId: path.id,
                              })}
                              onReset={() =>
                                resetBackgroundOverride({
                                  type: "path",
                                  pathId: path.id,
                                })
                              }
                              onEdit={() =>
                                openEditor({
                                  type: "path",
                                  pathId: path.id,
                                })
                              }
                            />
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
                          </>
                        }
                      />
                    )}
                  </For>
                </div>
              </Show>
            </div>

            <Show when={chapters().length > 0}>
              <div class="space-y-2">
                <PopoverGroupLabel>Chapters</PopoverGroupLabel>
                <div class="grid grid-cols-2 gap-2">
                  <For each={chapters()}>
                    {(chapter) => (
                      <BackgroundContextRow
                        title={`Chapter ${getChapterDisplayNumber(chapter.slug)}`}
                        resolvedBackground={resolveChapterBackground(
                          chapter.slug,
                        )}
                        active={currentChapterSlug() === chapter.slug}
                        onSelect={() => {
                          if (chapter.slug !== preferences().activeChapter) {
                            setPreference("activeChapter", chapter.slug)
                          }
                          setIsPopoverOpen(false)
                        }}
                        actions={
                          <BackgroundOverrideActions
                            label={`chapter ${getChapterDisplayNumber(chapter.slug)}`}
                            hasOverride={hasAssignedBackground({
                              type: "chapter",
                              pathId: activePathId(),
                              chapterSlug: chapter.slug,
                            })}
                            onReset={() =>
                              resetBackgroundOverride({
                                type: "chapter",
                                pathId: activePathId(),
                                chapterSlug: chapter.slug,
                              })
                            }
                            onEdit={() =>
                              openEditor({
                                type: "chapter",
                                pathId: activePathId(),
                                chapterSlug: chapter.slug,
                              })
                            }
                          />
                        }
                      />
                    )}
                  </For>
                </div>
              </div>
            </Show>
          </div>
        </PopoverContent>
      </Popover>

      <Show when={editTarget()}>
        {(target) => (
          <BackgroundAssignmentDialog
            open={isDialogOpen()}
            onOpenChange={(open) => {
              setIsDialogOpen(open)
              if (!open) setEditTarget(null)
            }}
            contextLabel={getEditContextLabel(target())}
            scope={target()}
            previewPathId={target().pathId}
            previewChapterSlug={getPreviewChapterSlug(target())}
            overrides={backgroundOverrides()}
            onAssignBackground={(backgroundId) =>
              setPreference(
                "backgroundOverrides",
                setAssignedBackgroundId(
                  backgroundOverrides(),
                  target(),
                  backgroundId,
                ),
              )
            }
            onClearOverride={() =>
              setPreference(
                "backgroundOverrides",
                clearAssignedBackgroundId(backgroundOverrides(), target()),
              )
            }
          />
        )}
      </Show>
    </>
  )
}

function PopoverGroupLabel(props: { children: string }) {
  return (
    <div class="px-2 pt-1.5 pb-1 text-[11px] uppercase tracking-widest text-white/45">
      {props.children}
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
