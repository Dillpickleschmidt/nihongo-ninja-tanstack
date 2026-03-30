import { createSignal, For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { GraduationCap, ChevronRight } from "lucide-solid"
import { extractHiragana } from "@/data/utils/text/furigana"

interface TranscriptLine {
  line_id: number
  text: string
  english: string
  timestamp?: string
}

interface VocabItem {
  word: string
  furigana?: string
  english?: string
}

interface ModuleDetailVocabularyProps {
  transcriptGroups: TranscriptLine[][]
  vocabularyItems: VocabItem[]
  linkTo: string
}

export function ModuleDetailVocabulary(props: ModuleDetailVocabularyProps) {
  const [focusedIndex, setFocusedIndex] = createSignal(0)

  const focusedWord = () => props.vocabularyItems[focusedIndex()]

  return (
    <div class="space-y-6">
      {/* Word selector */}
      <div>
        <p class="mb-2 text-sm font-medium text-white/40">Words</p>
        <div class="flex flex-wrap gap-2">
        <For each={props.vocabularyItems}>
          {(word, index) => (
            <button
              type="button"
              onClick={() => setFocusedIndex(index())}
              class={`rounded-full px-3.5 py-1 text-sm font-medium transition-colors duration-200 ${
                focusedIndex() === index()
                  ? "bg-orange-500/15 text-orange-300 ring-1 ring-orange-400/25"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white/60"
              }`}
            >
              <span class="font-japanese">{word.word}</span>
            </button>
          )}
        </For>
        </div>
      </div>

      {/* Selected word detail */}
      <Show when={focusedWord()}>
        {(word) => (
          <div class="space-y-5">
            {/* Word heading — gradient card */}
            <div class="rounded-lg border border-card-foreground/70 bg-gradient-to-br backdrop-blur-sm dark:from-neutral-600/15 dark:to-gray-600/10 p-5">
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                  <GraduationCap class="size-5 shrink-0 text-orange-400" />
                  <p class="font-japanese text-xl text-white/90">
                    {word().word}
                    <Show when={word().furigana}>
                      {(furigana) => (
                        <span class="text-muted-foreground ml-1.5 text-sm">
                          （{extractHiragana(furigana())}）
                        </span>
                      )}
                    </Show>
                  </p>
                </div>
                <Link
                  to={props.linkTo}
                  class="flex items-center gap-1.5 shrink-0 rounded-lg bg-orange-500/15 px-3 py-1.5 text-sm font-medium text-orange-300 ring-1 ring-orange-400/25 transition-colors hover:bg-orange-500/25 hover:text-orange-200"
                >
                  Continue
                  <ChevronRight class="size-4" />
                </Link>
              </div>
              <Show when={word().english}>
                {(english) => (
                  <p class="mt-2 text-sm text-white/55">{english()}</p>
                )}
              </Show>
            </div>

            {/* Context sentences — bare list with left border */}
            <Show
              when={
                (props.transcriptGroups[focusedIndex()] || []).length > 0
              }
            >
              <div>
                <p class="mb-3 text-xs font-medium uppercase tracking-wider text-white/25">
                  Context
                </p>
                <div class="space-y-2">
                  <For each={props.transcriptGroups[focusedIndex()] || []}>
                    {(sentence) => (
                      <div class="rounded-lg border border-card-foreground/50 bg-card/40 px-4 py-3 backdrop-blur-sm">
                        <p class="font-japanese text-sm leading-relaxed text-white/75">
                          {sentence.text}
                        </p>
                        <p class="text-muted-foreground mt-1 text-xs">
                          {sentence.english || "[English translation]"}
                        </p>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </Show>
          </div>
        )}
      </Show>
    </div>
  )
}
