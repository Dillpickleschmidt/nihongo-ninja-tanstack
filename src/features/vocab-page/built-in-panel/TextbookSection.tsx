// features/vocab-page/built-in-panel/TextbookSection.tsx
import { For } from "solid-js"
import { BookOpen } from "lucide-solid"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { ChapterSection } from "./ChapterSection"
import type { VocabBuiltInDeck, VocabTextbook } from "../types"

interface TextbookSectionProps {
  textbook: VocabTextbook
  isExpanded: boolean
  onToggle: () => void
  expandedChapters: Set<string>
  onToggleChapter: (chapterId: string) => void
  onImportDeck: (deck: VocabBuiltInDeck) => void
  onPlayDeck: (deck: VocabBuiltInDeck) => void
  onSelectDeck?: (deck: VocabBuiltInDeck) => void
  selectedBuiltInDeck?: VocabBuiltInDeck | null
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
          <span class="truncate">{props.textbook.short_name}</span>
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
                onSelectDeck={props.onSelectDeck}
                selectedBuiltInDeck={props.selectedBuiltInDeck}
              />
            )}
          </For>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
