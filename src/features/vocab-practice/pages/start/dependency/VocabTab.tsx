import { For, Show } from "solid-js"
import { Loader2 } from "lucide-solid"
import { Chip } from "./Chip"
import { DueBadge } from "../review/DueBadge"
import { useFsrsDueDate } from "@/features/vocab-practice/hooks/useFsrsDueDate"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { hasKanji, extractHiragana } from "@/data/utils/vocab"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { VocabularyItem } from "@/data/types"

type VocabularyTabContentProps = {
  vocabularyQuery: UseQueryResult<any, DefaultError>
  vocabList: () => any[] | undefined
  fsrsMap: Map<string, FSRSCardData>
  vocabularyMap: Map<string, VocabularyItem>
  fsrsCardsQuery: UseQueryResult<any, DefaultError>
  selectedKanji: () => string | null
  toggleKanji: (k: string) => void
}

export function VocabularyTabContent(props: VocabularyTabContentProps) {
  const { mode, activeService } = useVocabPracticeContext()

  // Filter vocabulary for spellings mode (only show words with kanji)
  const displayVocab = () => {
    const list = props.vocabList()
    if (!list) return undefined
    if (mode === "spellings") {
      return list.filter((v) => hasKanji(v.word))
    }
    return list
  }

  return (
    <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4 backdrop-blur-sm">
      <Show
        when={!props.vocabularyQuery.isPending}
        fallback={
          <div class="flex items-center justify-center py-8">
            <Loader2 class="text-muted-foreground/50 h-8 w-8 animate-spin" />
          </div>
        }
      >
        <Show
          when={displayVocab() && displayVocab()!.length > 0}
          fallback={
            <p class="text-muted-foreground text-sm">
              No vocabulary to display.
            </p>
          }
        >
          <div class="space-y-3">
            <For each={displayVocab()}>
              {(vocabItem) => {
                const fsrsData = () =>
                  props.fsrsMap.get(`vocabulary:${vocabItem.word}`)
                const { isDue, dueDate } = useFsrsDueDate(fsrsData)
                const fullVocab = () => props.vocabularyMap.get(vocabItem.word)

                return (
                  <div class="border-card-foreground/40 rounded-lg border p-3">
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <div class="text-primary text-base font-semibold">
                          {vocabItem.word}
                          <Show when={mode === "meanings" && fullVocab()?.english}>
                            <span class="text-muted-foreground ml-2 font-normal">
                              - {fullVocab()!.english.join(", ")}
                            </span>
                          </Show>
                          <Show when={mode === "spellings" && fullVocab()?.furigana}>
                            <span class="text-muted-foreground ml-2 font-normal">
                              {extractHiragana(fullVocab()!.furigana)}
                            </span>
                          </Show>
                        </div>
                        <Show when={mode === "meanings"}>
                          <div class="mt-2 flex flex-wrap gap-1.5">
                            <For each={vocabItem.kanjiComponents || []}>
                              {(k) => (
                                <Chip
                                  label={k}
                                  color="indigo"
                                  selected={props.selectedKanji() === k}
                                  onClick={() => props.toggleKanji(k)}
                                />
                              )}
                            </For>
                            <Show when={!vocabItem.kanjiComponents?.length}>
                              <span class="text-muted-foreground text-xs">
                                No kanji
                              </span>
                            </Show>
                          </div>
                        </Show>
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
      </Show>
    </div>
  )
}
