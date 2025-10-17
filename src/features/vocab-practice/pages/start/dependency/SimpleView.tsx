import { For, Show } from "solid-js"
import { DueBadge } from "../review/DueBadge"
import { useFsrsDueDate } from "@/features/vocab-practice/hooks/useFsrsDueDate"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { hasKanji, extractHiragana } from "@/data/utils/vocab"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { PracticeMode } from "@/features/vocab-practice/types"

type SimpleVocabularyListProps = {
  vocabularyData: any[]
  fsrsMap: Map<string, FSRSCardData>
  fsrsCardsQuery: UseQueryResult<any, DefaultError>
  mode: PracticeMode
}

export function SimpleVocabularyList(props: SimpleVocabularyListProps) {
  const { activeService } = useVocabPracticeContext()
  // Filter vocabulary for spellings mode (only show words with kanji)
  const displayVocab = () => {
    if (props.mode === "spellings") {
      return props.vocabularyData.filter((v) => hasKanji(v.word))
    }
    return props.vocabularyData
  }

  return (
    <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4">
      <Show
        when={displayVocab() && displayVocab().length > 0}
        fallback={
          <p class="text-muted-foreground text-sm">No vocabulary to display.</p>
        }
      >
        <div class="space-y-3">
          <For each={displayVocab()}>
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
                        <Show when={props.mode === "spellings"}>
                          <span class="text-muted-foreground ml-2 font-normal">
                            {extractHiragana(vocabItem.furigana)}
                          </span>
                        </Show>
                      </div>
                    </div>

                    {/* Due badge */}
                    <Show when={activeService() === "local"}>
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
