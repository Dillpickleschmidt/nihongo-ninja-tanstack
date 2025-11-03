// features/learn-page-v2/components/shared/LearningPathChapterSelector.tsx
import { createSignal, For, Show, JSX, createEffect } from "solid-js"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Deck, TextbookIDEnum } from "@/data/types"
import type { QueryClient } from "@tanstack/solid-query"
import { cn } from "@/utils"
import { getMinifiedTextbookEntries } from "@/data/utils/core"
import { applyUserSettingsUpdate } from "@/features/main-cookies/query/query-options"

interface LearningPathChapterSelectorProps {
  children: JSX.Element
  activeLearningPathId: string
  activeChapter: Deck
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  queryClient: QueryClient
  userId: string | null
  onChapterSelect: (learningPathId: string, chapterSlug: string) => void
  popoverWidth?: string
}

export function LearningPathChapterSelector(props: LearningPathChapterSelectorProps) {
  const [selectedLearningPathId, setSelectedLearningPathId] =
    createSignal<string | null>(null)

  let activeLearningPathRef: HTMLButtonElement | undefined

  const textbookEntries = getMinifiedTextbookEntries()

  const displayedLearningPathId = () =>
    selectedLearningPathId() || props.activeLearningPathId

  // Focus active learning path when popover opens
  createEffect(() => {
    if (props.isOpen) {
      console.log("Popover opened, activeLearningPathRef:", activeLearningPathRef)
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
          <div class="grid grid-cols-[1fr_2fr]">
            <div class="border-primary/10 border-r p-1">
              <For each={textbookEntries}>
                {([learningPathId, textbook]) => (
                  <button
                    ref={(el) => {
                      if (props.activeLearningPathId === learningPathId) {
                        activeLearningPathRef = el
                      }
                    }}
                    onClick={() => handleLearningPathSelect(learningPathId)}
                    class={cn(
                      "hover:bg-primary/15 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-medium",
                      displayedLearningPathId() === learningPathId && "bg-primary/10",
                    )}
                  >
                    <span>{textbook.short_name || textbook.name}</span>
                  </button>
                )}
              </For>
            </div>
            <div class="p-1">
              <For each={textbookEntries}>
                {([learningPathId, textbook]) => (
                  <Show when={displayedLearningPathId() === learningPathId}>
                    <For each={textbook.chapters}>
                      {(chapter) => (
                        <button
                          onClick={async () => {
                            await applyUserSettingsUpdate(
                              props.userId,
                              props.queryClient,
                              {
                                "active-learning-path": learningPathId,
                                "active-chapter": chapter.slug,
                              },
                            )
                            props.onChapterSelect(learningPathId, chapter.slug)
                            props.onOpenChange(false)
                          }}
                          class={cn(
                            "hover:bg-card-foreground/40 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal",
                            props.activeChapter.slug === chapter.slug &&
                              "bg-primary/10 hover:bg-primary/15 font-semibold",
                          )}
                        >
                          <span>{chapter.title}</span>
                          <Show when={props.activeChapter.slug === chapter.slug}>
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
        </PopoverContent>
      </Popover>
    </div>
  )
}
