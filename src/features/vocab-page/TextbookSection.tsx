import { For, Show } from "solid-js"
import { ChevronDown, ChevronRight, BookOpen } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { ChapterSection } from "./ChapterSection"
import type { Textbook, DeckPart } from "./types"

interface TextbookSectionProps {
  textbook: Textbook
  isExpanded: boolean
  onToggle: () => void
  expandedChapters: Set<string>
  onToggleChapter: (chapterId: string) => void
  onImportDeck: (deck: DeckPart) => void
  onPlayDeck: (deck: DeckPart) => void
}

export function TextbookSection(props: TextbookSectionProps) {
  return (
    <div class="mb-4">
      <Button
        variant="ghost"
        class="h-auto w-full justify-start p-2 text-sm font-medium"
        onClick={props.onToggle}
      >
        <div class="flex items-center gap-2">
          {props.isExpanded ? (
            <ChevronDown class="h-4 w-4" />
          ) : (
            <ChevronRight class="h-4 w-4" />
          )}
          <BookOpen class="h-4 w-4" />
          <span class="truncate">{props.textbook.shortName}</span>
        </div>
      </Button>

      <Show when={props.isExpanded}>
        <div class="mt-2 ml-6 space-y-2">
          <For each={props.textbook.chapters}>
            {(chapter) => (
              <ChapterSection
                chapter={chapter}
                isExpanded={props.expandedChapters.has(chapter.id)}
                onToggle={() => props.onToggleChapter(chapter.id)}
                onImportDeck={props.onImportDeck}
                onPlayDeck={props.onPlayDeck}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
