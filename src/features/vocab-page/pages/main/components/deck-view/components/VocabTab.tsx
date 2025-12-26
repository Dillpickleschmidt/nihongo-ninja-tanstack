import { For, Show } from "solid-js"
import { LoaderCircle } from "lucide-solid"
import type { VocabularyItem } from "convex/validators"
import { VocabularyCard } from "../VocabularyCard"

interface VocabTabProps {
  vocabulary?: VocabularyItem[]
}

export function VocabTab(props: VocabTabProps) {
  return (
    <Show
      when={props.vocabulary !== undefined}
      fallback={
        <div class="flex items-center justify-center py-12">
          <LoaderCircle class="text-muted-foreground/50 h-8 w-8 animate-spin" />
        </div>
      }
    >
      <Show
        when={props.vocabulary?.length}
        fallback={
          <p class="text-muted-foreground py-8 text-center text-sm">
            No vocabulary items to display.
          </p>
        }
      >
        <div class="space-y-4">
          <For each={props.vocabulary}>
            {(item, index) => <VocabularyCard item={item} index={index()} />}
          </For>
        </div>
      </Show>
    </Show>
  )
}
