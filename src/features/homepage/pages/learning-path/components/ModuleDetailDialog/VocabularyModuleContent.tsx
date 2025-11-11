import { createSignal, For, Show } from "solid-js"
import { GraduationCap } from "lucide-solid"
import type { TranscriptLine } from "@/features/supabase/db/learning-paths"

interface VocabItem {
  word: string
  furigana?: string
  english?: string
}

interface VocabularyModuleContentProps {
  sentences: TranscriptLine[][]
  vocabularyItems: VocabItem[]
  moduleId: string
}

export default function VocabularyModuleContent(
  props: VocabularyModuleContentProps,
) {
  const [focusedIndex, setFocusedIndex] = createSignal(0)

  // Get the focused word
  const focusedWord = () => props.vocabularyItems[focusedIndex()]

  return (
    <div class="space-y-4">
      {/* Scrollable sentence box with word badges */}
      <div class="border-border relative max-h-[50vh] overflow-y-auto rounded-lg border p-4">
        {/* Render each word group with badge */}
        <For each={props.vocabularyItems}>
          {(word, index) => (
            <div class="mb-6">
              {/* Word badge - floating above */}
              <button
                onClick={() => setFocusedIndex(index())}
                class={`mx-auto mb-3 block rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  focusedIndex() === index()
                    ? "bg-primary text-primary-foreground ring-primary/30 ring-2"
                    : "bg-accent text-muted-foreground hover:bg-accent/80"
                }`}
              >
                {word.word}
                <Show when={word.furigana}>
                  {(furigana) => (
                    <span class="ml-1 text-xs opacity-75">({furigana()})</span>
                  )}
                </Show>
              </button>

              {/* Sentences for this word */}
              <div
                class={`space-y-2 transition-opacity ${
                  focusedIndex() === index() ? "opacity-100" : "opacity-50"
                }`}
              >
                <For each={props.sentences[index()] || []}>
                  {(sentence) => (
                    <div class="bg-muted rounded p-2 text-xs">
                      <p class="text-foreground">{sentence.text}</p>
                      <p class="text-muted-foreground mt-1">
                        [Placeholder: English translation]
                      </p>
                    </div>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Word information section */}
      <div class="border-border space-y-3 border-t pt-4">
        {/* Word with icon */}
        <div class="flex items-center gap-2">
          <GraduationCap class="text-warning-foreground h-5 w-5" />
          <Show when={focusedWord()}>
            {(word) => (
              <span class="text-foreground font-medium">
                {word().word}
                <Show when={word().furigana}>
                  {(furigana) => (
                    <span class="ml-2 text-sm">({furigana()})</span>
                  )}
                </Show>
              </span>
            )}
          </Show>
        </div>

        {/* Definition and summary */}
        <div class="space-y-1">
          <Show when={focusedWord()?.english}>
            {(english) => (
              <p class="text-muted-foreground text-sm">
                <strong>Definition:</strong> {english()}
              </p>
            )}
          </Show>
          <p class="text-muted-foreground text-sm">
            <strong>Context:</strong> [Placeholder: AI-generated context
            summary]
          </p>
        </div>
      </div>
    </div>
  )
}
