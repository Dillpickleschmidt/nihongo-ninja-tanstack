import { For, Show } from "solid-js"
import { DueBadge } from "../review/DueBadge"
import { useFsrsDueDate } from "@/features/vocab-practice/hooks/useFsrsDueDate"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"

type SimpleVocabularyListProps = {
  vocabularyData: any[]
  fsrsMap: Map<string, any>
  activeService: () => "local" | "anki" | "wanikani" | "jpdb"
  fsrsCardsQuery: UseQueryResult<any, DefaultError>
}

export function SimpleVocabularyList(props: SimpleVocabularyListProps) {
  return (
    <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4">
      <Show
        when={props.vocabularyData && props.vocabularyData.length > 0}
        fallback={
          <p class="text-muted-foreground text-sm">No vocabulary to display.</p>
        }
      >
        <div class="space-y-3">
          <For each={props.vocabularyData}>
            {(vocabItem) => {
              const fsrsData = () =>
                props.fsrsMap.get(`vocabulary:${vocabItem.word}`)
              const { isDue, dueDate } = useFsrsDueDate(fsrsData)

              return (
                <div class="border-card-foreground/40 rounded-lg border p-3">
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <div class="text-primary text-base font-semibold">
                        {vocabItem.word}
                      </div>
                    </div>

                    {/* Due badge */}
                    <Show when={props.activeService() === "local"}>
                      <DueBadge
                        isDue={isDue()}
                        dueDate={dueDate()}
                        isLoading={props.fsrsCardsQuery.isPending}
                        variant="indigo"
                      />
                    </Show>
                  </div>
                </div>
              )
            }}
          </For>
        </div>
      </Show>
    </div>
  )
}
