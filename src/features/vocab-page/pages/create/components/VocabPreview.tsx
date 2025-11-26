import { For, Show } from "solid-js"
import type { VocabularyItem } from "@/data/types"
import { VocabularyCard } from "@/features/vocab-page/pages/main/components/VocabularyCard"

interface VocabPreviewProps {
  vocabularyItems: VocabularyItem[]
}

export function VocabPreview(props: VocabPreviewProps) {
  return (
    <Show
      when={props.vocabularyItems.length > 0}
      fallback={
        <div class="text-muted-foreground p-6 text-center">
          <p class="text-sm">No vocabulary items to preview yet.</p>
          <p class="mt-2 text-xs">
            Add some vocabulary items to see them displayed here.
          </p>
        </div>
      }
    >
      <div class="space-y-4">
        <For each={props.vocabularyItems}>
          {(item, index) => <VocabularyCard item={item} index={index()} />}
        </For>
      </div>
    </Show>
  )
}
