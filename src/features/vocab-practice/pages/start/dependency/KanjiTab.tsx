import { For, Show } from "solid-js"
import { Loader2, Info } from "lucide-solid"
import { Chip } from "./Chip"
import { useFsrsDueDate } from "@/features/vocab-practice/hooks/useFsrsDueDate"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"

type KanjiRadicalsTabContentProps = {
  moduleAllQuery: UseQueryResult<any, DefaultError>
  filteredKanji: () => string[]
  kanjiToRadicals: Map<string, string[]>
  kanjiToVocab: Map<string, string[]>
  fsrsMap: Map<string, FSRSCardData>
  fsrsCardsQuery: UseQueryResult<any, DefaultError>
  selectedKanji: () => string | null
  toggleKanji: (k: string) => void
  toggleRadical: (r: string) => void
}

export function KanjiRadicalsTabContent(props: KanjiRadicalsTabContentProps) {
  const { activeService } = useVocabPracticeContext()
  return (
    <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4 backdrop-blur-sm">
      <Show
        when={!props.moduleAllQuery.isPending}
        fallback={
          <div class="flex items-center justify-center py-8">
            <Loader2 class="text-muted-foreground/50 h-8 w-8 animate-spin" />
          </div>
        }
      >
        <Show
          when={props.filteredKanji().length > 0}
          fallback={
            <p class="text-muted-foreground text-sm">No kanji to display.</p>
          }
        >
          <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
            <For each={props.filteredKanji()}>
              {(k) => {
                const radicals = props.kanjiToRadicals.get(k) || []
                const usedIn = props.kanjiToVocab.get(k)?.length || 0
                const fsrsData = () => props.fsrsMap.get(`kanji:${k}`)
                const { isDue } = useFsrsDueDate(fsrsData)
                const isSkipped = () => !isDue() && fsrsData()?.fsrs_card?.due

                return (
                  <div
                    class={`border-card-foreground/40 rounded-lg border p-3 ${
                      isSkipped() ? "opacity-50" : ""
                    }`}
                  >
                    <div class="flex items-center justify-between gap-2">
                      <button
                        class={`cursor-pointer rounded-md px-2 py-1 text-left text-lg font-bold ${
                          props.selectedKanji() === k
                            ? "bg-indigo-500/15 text-indigo-400"
                            : "text-primary ease-instant-hover-150 hover:bg-primary/5"
                        }`}
                        onClick={() => props.toggleKanji(k)}
                        title="Toggle select Kanji"
                      >
                        {k}
                      </button>

                      <div class="flex flex-col items-end gap-1">
                        <div class="text-muted-foreground text-xs">
                          Used in {usedIn} {usedIn === 1 ? "word" : "words"}
                        </div>

                        {/* Due/Skip indicator */}
                        <Show when={activeService() === "local"}>
                          <div class="flex h-full flex-col justify-between">
                            <Show
                              when={!props.fsrsCardsQuery.isPending}
                              fallback={
                                <span class="inline-flex h-5 w-10 rounded-full bg-purple-500/20" />
                              }
                            >
                              <Show
                                when={isDue()}
                                fallback={
                                  <Show when={isSkipped()}>
                                    <div class="text-muted-foreground flex items-center gap-1.5 text-[11px]">
                                      <span>Skipping</span>
                                      <Popover>
                                        <PopoverTrigger>
                                          <Info class="h-3.5 w-3.5" />
                                        </PopoverTrigger>
                                        <PopoverContent class="bg-card border-card-foreground w-64 p-3">
                                          <p class="text-sm">
                                            Kanji & Radical dependencies are
                                            skipped for the current lesson if
                                            you've seen them before and they
                                            aren't due so you can focus on
                                            vocabulary.
                                          </p>
                                        </PopoverContent>
                                      </Popover>
                                    </div>
                                  </Show>
                                }
                              >
                                <span class="inline-flex items-center rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-300 uppercase">
                                  Due
                                </span>
                              </Show>
                            </Show>
                          </div>
                        </Show>
                      </div>
                    </div>

                    <div class="mt-2">
                      <div class="text-muted-foreground text-xs">Radicals:</div>
                      <div class="mt-1 flex flex-wrap gap-1.5">
                        <For each={radicals}>
                          {(r) => (
                            <Chip
                              label={r}
                              color="purple"
                              selected={false}
                              onClick={() => props.toggleRadical(r)}
                            />
                          )}
                        </For>
                        <Show when={radicals.length === 0}>
                          <span class="text-muted-foreground text-xs">
                            None
                          </span>
                        </Show>
                      </div>
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
