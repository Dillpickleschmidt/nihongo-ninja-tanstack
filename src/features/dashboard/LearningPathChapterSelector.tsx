import { createSignal, For, Show, createEffect } from "solid-js"
import type { JSX } from "solid-js"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "../../../convex/_generated/api"
import type { LearningPathChapter } from "@/data/chapters"
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
  activeChapter: LearningPathChapter
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onChapterSelect: (pathId: string, chapter: LearningPathChapter) => void
  popoverWidth?: string
}

export function LearningPathChapterSelector(
  props: LearningPathChapterSelectorProps,
) {
  const [selectedPathId, setSelectedPathId] = createSignal<string | null>(null)

  let activePathRef: HTMLButtonElement | undefined

  // Split paths into built-in textbooks and user-created
  const builtInTextbooks = () =>
    props.learningPaths.filter((p) => !p.isUserCreated)
  const userPaths = () => props.learningPaths.filter((p) => p.isUserCreated)

  const displayedPathId = () => selectedPathId() || props.activePathId

  // Fetch chapters for the displayed path (works for both static and user paths)
  const chaptersQuery = useConvexQuery(
    api.api.learning_paths.getPathChapters,
    () => ({ pathId: displayedPathId()! }),
    () => ({ enabled: !!displayedPathId() })
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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedPathId(null)
    }
    props.onOpenChange(open)
  }

  return (
    <div>
      <Popover open={props.isOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger id="deck-selection-popover-trigger">
          {props.children}
        </PopoverTrigger>
        <PopoverContent
          class={cn(
            "border-card-foreground bg-neutral-950/70 p-2 backdrop-blur-2xl",
            props.popoverWidth || "w-[480px]",
          )}
        >
          <div class="grid grid-cols-[1fr_2fr]">
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
              </Show>
            </div>
            <div class="max-h-[400px] overflow-y-auto p-1">
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
                    <span>{chapter.title}</span>
                    <Show
                      when={
                        props.activePathId === displayedPathId() &&
                        props.activeChapter.slug === chapter.slug
                      }
                    >
                      <svg
                        class="size-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
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
    </div>
  )
}
