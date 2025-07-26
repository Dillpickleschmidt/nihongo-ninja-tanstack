import { For } from "solid-js"
import { BookOpen } from "lucide-solid"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { ChapterSection } from "./ChapterSection"
import type { Textbook, BuiltInDeck } from "./types"

interface TextbookSectionProps {
  textbook: Textbook
  isExpanded: boolean
  onToggle: () => void
  expandedChapters: Set<string>
  onToggleChapter: (chapterId: string) => void
  onImportDeck: (deck: BuiltInDeck) => void
  onPlayDeck: (deck: BuiltInDeck) => void
}

export function TextbookSection(props: TextbookSectionProps) {
  return (
    <div class="mb-4">
      <Collapsible
        open={props.isExpanded}
        onOpenChange={() => props.onToggle()}
      >
        <CollapsibleTrigger class="h-auto w-full justify-start p-2 text-sm font-medium">
          <BookOpen class="h-4 w-4" />
          <span class="truncate">{props.textbook.shortName}</span>
        </CollapsibleTrigger>

        <CollapsibleContent class="mt-2 ml-6 space-y-2">
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
