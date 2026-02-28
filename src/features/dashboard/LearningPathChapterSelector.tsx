import { createSignal, For, Show, createEffect } from "solid-js"
import type { JSX } from "solid-js"
import { X } from "lucide-solid"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useConvexQuery } from "@/lib/convex-query"
import { useMutation } from "convex-solidjs"
import { api } from "../../../convex/_generated/api"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { cn } from "@/utils"

// Infer LearningPath from props (comes from Convex query)
type LearningPath = {
  id: string
  name: string
  shortName: string
  isUserCreated: boolean
}

interface LearningPathChapterSelectorProps {
  children: JSX.Element
  learningPaths: LearningPath[]
  activePathId: string
  activeChapter: { slug: string }
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onChapterSelect: (pathId: string, chapter: { slug: string }) => void
  popoverWidth?: string
  class?: string
}

export function LearningPathChapterSelector(
  props: LearningPathChapterSelectorProps,
) {
  const [selectedPathId, setSelectedPathId] = createSignal<string | null>(null)
  const [deletingPathId, setDeletingPathId] = createSignal<string | null>(null)
  const deletePathMutation = useMutation(api.api.learning_paths.deleteCustomLearningPath)

  let activePathRef: HTMLElement | undefined

  // Split paths into built-in textbooks and user-created
  const builtInTextbooks = () =>
    props.learningPaths.filter((p) => !p.isUserCreated)
  const userPaths = () => props.learningPaths.filter((p) => p.isUserCreated)

  const displayedPathId = () => selectedPathId() || props.activePathId

  // Fetch chapters for the displayed path (works for both static and user paths)
  const chaptersQuery = useConvexQuery(
    api.api.learning_paths.getPathChapters,
    () => ({ pathId: displayedPathId()! }),
    () => ({ enabled: !!displayedPathId() }),
  )

  const displayedChapters = () => chaptersQuery.data() ?? []

  // Focus active path when popover opens
  createEffect(() => {
    if (props.isOpen) {
      activePathRef?.focus()
    }
  })

  const handlePathSelect = (pathId: string) => {
    setSelectedPathId(pathId)
  }

  const handlePathSelectKeyDown = (event: KeyboardEvent, pathId: string) => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    handlePathSelect(pathId)
  }

  const handleDeletePath = async (event: MouseEvent, path: LearningPath) => {
    event.preventDefault()
    event.stopPropagation()

    const confirmed = window.confirm(
      `Delete "${path.name}"? This will also delete all vocabulary decks generated for this learning path.`,
    )
    if (!confirmed) return

    setDeletingPathId(path.id)
    try {
      const result = await deletePathMutation.mutate({ pathId: path.id })

      if (props.activePathId === path.id) {
        props.onChapterSelect(result.fallbackPathId, {
          slug: result.fallbackChapterSlug,
        })
      }

      if (selectedPathId() === path.id) {
        setSelectedPathId(result.fallbackPathId)
      }
    } catch (error) {
      console.error("Failed to delete learning path:", error)
      alert("Failed to delete learning path. Please try again.")
    } finally {
      setDeletingPathId(null)
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedPathId(null)
    }
    props.onOpenChange(open)
  }

  return (
    <Popover open={props.isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger id="deck-selection-popover-trigger" class={props.class}>
        {props.children}
      </PopoverTrigger>
      <PopoverContent
        class={cn(
          "border-card-foreground p-2 backdrop-blur-2xl",
          props.popoverWidth || "w-[400px] md:w-[450px]",
        )}
        style={{
          "background-color":
            "color-mix(in srgb, var(--accent) 15%, rgb(10 10 10 / 0.7))",
        }}
      >
        <div class="grid grid-cols-[2fr_3fr]">
          <div class="border-primary/10 border-r p-1">
            {/* Built-in Textbooks */}
            <For each={builtInTextbooks()}>
              {(path) => (
                <button
                  ref={(el) => {
                    if (props.activePathId === path.id) {
                      activePathRef = el
                    }
                  }}
                  onClick={() => handlePathSelect(path.id)}
                  class={cn(
                    "hover:bg-primary/15 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-medium",
                    displayedPathId() === path.id && "bg-primary/10",
                  )}
                >
                  <span class="flex items-center gap-2">
                    <span>{path.shortName}</span>
                  </span>
                </button>
              )}
            </For>

            {/* User Learning Paths */}
            <Show when={userPaths().length > 0}>
              <div class="border-primary/10 my-2 border-t pt-2">
                <span class="px-2 text-xs text-neutral-500">
                  Your Learning Paths
                </span>
              </div>
              <For each={userPaths()}>
                {(path) => (
                  <div
                    ref={(el) => {
                      if (props.activePathId === path.id) {
                        activePathRef = el
                      }
                    }}
                    class={cn(
                      "hover:bg-primary/15 flex w-full items-center justify-between gap-2 rounded-md p-2 text-left text-sm font-medium",
                      displayedPathId() === path.id && "bg-primary/10",
                    )}
                  >
                    <div
                      role="button"
                      tabindex={0}
                      onClick={() => handlePathSelect(path.id)}
                      onKeyDown={(event) => handlePathSelectKeyDown(event, path.id)}
                      class="min-w-0 flex-1 cursor-pointer"
                    >
                      <span class="flex items-center gap-2">
                        <span class="truncate">{path.shortName}</span>
                      </span>
                    </div>
                    <button
                      type="button"
                      aria-label={`Delete learning path ${path.name}`}
                      disabled={deletingPathId() === path.id}
                      onClick={(event) => void handleDeletePath(event, path)}
                      class="hover:bg-white/10 rounded p-1 text-white/50 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Show
                        when={deletingPathId() === path.id}
                        fallback={<X class="size-3.5" />}
                      >
                        <span class="inline-block size-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                      </Show>
                    </button>
                  </div>
                )}
              </For>
            </Show>
          </div>
          <div class="max-h-[480px] overflow-y-auto p-1">
            <For each={displayedChapters()}>
              {(chapter) => (
                <button
                  onClick={() => {
                    props.onChapterSelect(displayedPathId(), chapter)
                    props.onOpenChange(false)
                  }}
                  class={cn(
                    "hover:bg-card-foreground/40 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal",
                    props.activePathId === displayedPathId() &&
                      props.activeChapter.slug === chapter.slug &&
                      "bg-primary/10 hover:bg-primary/15 font-semibold",
                  )}
                >
                  <span>Chapter {getChapterDisplayNumber(chapter.slug)}</span>
                  <Show
                    when={
                      props.activePathId === displayedPathId() &&
                      props.activeChapter.slug === chapter.slug
                    }
                  >
                    <svg class="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </Show>
                </button>
              )}
            </For>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
