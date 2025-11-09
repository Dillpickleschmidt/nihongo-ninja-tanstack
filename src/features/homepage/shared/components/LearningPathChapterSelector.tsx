// features/learn-page-v2/components/shared/LearningPathChapterSelector.tsx
import { createSignal, For, Show, JSX, createEffect } from "solid-js"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { LearningPathChapter } from "@/data/types"
import type { QueryClient } from "@tanstack/solid-query"
import { cn } from "@/utils"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { allLearningPathsQueryOptions } from "@/query/query-options"
import { applyUserSettingsUpdate } from "@/query/utils/user-settings"

interface LearningPathChapterSelectorProps {
  children: JSX.Element
  activeLearningPathId: string
  activeChapter: LearningPathChapter
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  queryClient: QueryClient
  userId: string | null
  onChapterSelect: (learningPathId: string, chapterSlug: string) => void
  popoverWidth?: string
}

export function LearningPathChapterSelector(
  props: LearningPathChapterSelectorProps,
) {
  const [selectedLearningPathId, setSelectedLearningPathId] = createSignal<
    string | null
  >(null)

  let activeLearningPathRef: HTMLButtonElement | undefined

  const pathsQuery = useCustomQuery(() =>
    allLearningPathsQueryOptions(props.userId),
  )

  const displayedLearningPathId = () =>
    selectedLearningPathId() || props.activeLearningPathId

  // Focus active learning path when popover opens
  createEffect(() => {
    if (props.isOpen) {
      console.log(
        "Popover opened, activeLearningPathRef:",
        activeLearningPathRef,
      )
      activeLearningPathRef?.focus()
    }
  })

  const handleLearningPathSelect = (learningPathId: string) => {
    setSelectedLearningPathId(learningPathId)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedLearningPathId(null)
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
          <Show
            when={!pathsQuery.isPending}
            fallback={
              <div class="bg-card/40 border-card-foreground/70 flex items-center justify-center rounded-xl border p-8">
                <span class="text-muted-foreground text-sm">
                  Loading learning paths…
                </span>
              </div>
            }
          >
            <div class="grid grid-cols-[1fr_2fr]">
              <div class="border-primary/10 border-r p-1">
                <For each={pathsQuery.data || []}>
                  {(path) => (
                    <button
                      ref={(el) => {
                        if (props.activeLearningPathId === path.id) {
                          activeLearningPathRef = el
                        }
                      }}
                      onClick={() => handleLearningPathSelect(path.id)}
                      class={cn(
                        "hover:bg-primary/15 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-medium",
                        displayedLearningPathId() === path.id &&
                          "bg-primary/10",
                      )}
                    >
                      <span class="flex items-center gap-2">
                        <span>{path.short_name || path.name}</span>
                        <Show when={path.isUserCreated}>
                          <span class="text-muted-foreground text-xs">
                            (Custom)
                          </span>
                        </Show>
                      </span>
                    </button>
                  )}
                </For>
              </div>
              <div class="p-1">
                <For each={pathsQuery.data || []}>
                  {(path) => (
                    <Show when={displayedLearningPathId() === path.id}>
                      <For each={path.chapters}>
                        {(chapter) => (
                          <button
                            onClick={async () => {
                              await applyUserSettingsUpdate(
                                props.userId,
                                props.queryClient,
                                {
                                  "active-learning-path": path.id,
                                  "active-chapter": chapter.slug,
                                },
                              )
                              props.onChapterSelect(path.id, chapter.slug)
                              props.onOpenChange(false)
                            }}
                            class={cn(
                              "hover:bg-card-foreground/40 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal",
                              props.activeLearningPathId === path.id &&
                                props.activeChapter.slug === chapter.slug &&
                                "bg-primary/10 hover:bg-primary/15 font-semibold",
                            )}
                          >
                            <span>{chapter.title}</span>
                            <Show
                              when={props.activeLearningPathId === path.id &&
                                props.activeChapter.slug === chapter.slug}
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
                    </Show>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </PopoverContent>
      </Popover>
    </div>
  )
}
