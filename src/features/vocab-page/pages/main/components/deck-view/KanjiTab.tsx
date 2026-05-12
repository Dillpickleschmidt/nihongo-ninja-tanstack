import { For, Show } from "solid-js"
import { LoaderCircle } from "lucide-solid"
import { Chip } from "./Chip"
import { DueBadge } from "./DueBadge"
import type { KanjiEntry } from "convex/validators"

type KanjiTabProps = {
  kanjiEntries?: KanjiEntry[]
  kanjiToVocab?: Map<string, string[]>
  skippedKanji?: string[]
  selectedKanji: () => string | null
  toggleKanji: (k: string) => void
  toggleRadical: (r: string) => void
}

export function KanjiTab(props: KanjiTabProps) {
  return (
    <div class="bg-card/40 border-border/60 dark:border-card-foreground/70 rounded-xl border p-4 backdrop-blur-sm">
      <Show
        when={props.kanjiEntries !== undefined}
        fallback={
          <div class="flex items-center justify-center py-8">
            <LoaderCircle class="text-muted-foreground/50 h-8 w-8 animate-spin" />
          </div>
        }
      >
        <Show
          when={props.kanjiEntries?.length}
          fallback={
            <Show
              when={props.skippedKanji?.length}
              fallback={
                <p class="text-muted-foreground text-sm">
                  No kanji to display.
                </p>
              }
            >
              {/* Only skipped kanji, no marked kanji */}
              <div class="space-y-4">
                <p class="text-muted-foreground text-sm">
                  No marked kanji found.
                </p>
                <div class="border-t border-border/50 dark:border-card-foreground/20 pt-4">
                  <div class="text-muted-foreground text-xs mb-2">
                    Unmarked (will skip):
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <For each={props.skippedKanji}>
                      {(kanji) => (
                        <span class="text-muted-foreground/60 text-lg">
                          {kanji}
                        </span>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </Show>
          }
        >
          <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
            <For each={props.kanjiEntries}>
              {(kanjiEntry) => {
                const usedIn = () =>
                  props.kanjiToVocab?.get(kanjiEntry.kanji)?.length || 0

                return (
                  <div class="border-border/50 dark:border-card-foreground/40 rounded-lg border p-3">
                    <div class="flex items-center justify-between gap-2">
                      <button
                        class={`cursor-pointer rounded-md px-2 py-1 text-left text-lg font-bold ${
                          props.selectedKanji() === kanjiEntry.kanji
                            ? "bg-indigo-500/15 text-indigo-400"
                            : "text-primary ease-instant-hover-150 hover:bg-primary/5"
                        }`}
                        onClick={() => props.toggleKanji(kanjiEntry.kanji)}
                        title="Toggle select Kanji"
                      >
                        {kanjiEntry.kanji}
                      </button>

                      <div class="flex flex-col items-end gap-1">
                        <div class="text-muted-foreground text-xs">
                          Used in {usedIn()} {usedIn() === 1 ? "word" : "words"}
                        </div>

                        {/* Placeholder for future FSRS due badge */}
                        <DueBadge
                          isDue={false}
                          isLoading={false}
                          variant="purple"
                        />
                      </div>
                    </div>

                    <div class="mt-2">
                      <div class="text-muted-foreground text-xs">Radicals:</div>
                      <div class="mt-1 flex flex-wrap gap-1.5">
                        <For each={kanjiEntry.radicalComponents}>
                          {(r) => (
                            <Chip
                              label={r}
                              color="purple"
                              selected={false}
                              onClick={() => props.toggleRadical(r)}
                            />
                          )}
                        </For>
                        <Show when={kanjiEntry.radicalComponents.length === 0}>
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

          {/* Skipped kanji section */}
          <Show when={props.skippedKanji?.length}>
            <div class="mt-6 border-t border-border/50 dark:border-card-foreground/20 pt-4">
              <div class="text-muted-foreground text-xs mb-2">
                Unmarked (will skip):
              </div>
              <div class="flex flex-wrap gap-2">
                <For each={props.skippedKanji}>
                  {(kanji) => (
                    <span class="text-muted-foreground/60 text-lg">
                      {kanji}
                    </span>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </Show>
      </Show>
    </div>
  )
}
