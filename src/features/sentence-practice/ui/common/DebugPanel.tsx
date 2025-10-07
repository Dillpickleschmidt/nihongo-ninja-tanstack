import { For } from "solid-js"
import type { PracticeQuestion } from "../../core/answer-processing/types"
import { TextProcessor } from "../../core/text/TextProcessor"

const textProcessor = new TextProcessor()

interface DebugPanelProps {
  question: PracticeQuestion
}

export function DebugPanel(props: DebugPanelProps) {
  return (
    <div class="border-border bg-card mt-8 rounded-lg border p-4">
      <h3 class="text-muted-foreground mb-3 font-bold">Debug: Valid Answers</h3>
      <div class="space-y-1 font-mono text-sm">
        <For each={props.question.answers}>
          {(answer) => (
            <div class="text-muted-foreground">
              {answer.segments
                .map((seg) =>
                  typeof seg === "string"
                    ? textProcessor.removeFurigana(seg)
                    : textProcessor.removeFurigana(seg.word),
                )
                .join("")}
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
