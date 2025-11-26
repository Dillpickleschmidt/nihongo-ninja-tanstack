import { createSignal, Show } from "solid-js"
import { PencilLine } from "lucide-solid"
import type { TranscriptLine } from "@/features/supabase/db/learning-paths"

interface GrammarModuleContentProps {
  sentences: TranscriptLine[][]
  moduleId: string
}

export default function GrammarModuleContent(props: GrammarModuleContentProps) {
  const [expanded, setExpanded] = createSignal(false)

  // Get first sentence from first group
  const firstSentence = () => props.sentences?.[0]?.[0]

  return (
    <div class="space-y-4">
      {/* Main example sentence */}
      <Show when={firstSentence()}>
        {(sentence) => (
          <div class="space-y-2">
            <div class="p-4 bg-muted rounded-lg">
              <p class="text-lg font-medium text-foreground">
                {sentence().text}
              </p>
              <p class="text-sm text-muted-foreground mt-2">
                [Placeholder: English translation]
              </p>
            </div>
          </div>
        )}
      </Show>

      {/* Show more button */}
      <button
        onClick={() => setExpanded(!expanded())}
        class="text-sm text-info-foreground hover:text-info-foreground/80 font-medium py-2"
      >
        {expanded() ? "Show less" : "Show more"}
      </button>

      {/* Expanded example sentences */}
      <Show when={expanded()}>
        <div class="h-1/2 overflow-y-auto border border-border rounded-lg p-4 space-y-3">
          {props.sentences.map((group) =>
            group.map((sentence) => (
              <div class="pb-3 border-b border-border last:border-b-0">
                <p class="text-sm text-foreground">{sentence.text}</p>
                <p class="text-xs text-muted-foreground mt-1">
                  [Placeholder: English translation]
                </p>
              </div>
            )),
          )}
        </div>
      </Show>

      {/* Grammar description section */}
      <div class="pt-4 border-t border-border space-y-2">
        <div class="flex items-center gap-2">
          <PencilLine class="w-5 h-5 text-yellow-500" />
          <span class="font-medium text-foreground">
            {props.moduleId}
          </span>
        </div>
        <p class="text-sm text-muted-foreground">
          [Placeholder: 1-sentence grammar description]
        </p>
      </div>
    </div>
  )
}
