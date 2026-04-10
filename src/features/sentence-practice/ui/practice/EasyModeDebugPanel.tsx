// ui/practice/EasyModeDebugPanel.tsx
import { For, Show, createMemo } from "solid-js"
import type { ProcessedQuestion } from "../../core/types"
import { getEasyModeBlankVariations } from "./selectors/easyModeVariations"

interface EasyModeDebugPanelProps {
  currentQuestion: ProcessedQuestion
}

export default function EasyModeDebugPanel(props: EasyModeDebugPanelProps) {
  const blankVariations = createMemo(() =>
    getEasyModeBlankVariations(props.currentQuestion),
  )

  return (
    <div class="border-border bg-card mt-4 rounded-lg border p-4">
      <div class="grid grid-cols-3">
        <div />
        <h3 class="text-muted-foreground mb-3 text-center font-bold">
          Possible Answers
        </h3>
        <p class="text-right text-xs italic text-neutral-500">
          We may be missing some.
          <br />
          Let us know on Discord!
        </p>
      </div>
      <div class="space-y-4 text-sm">
        <For each={blankVariations()}>
          {(blank, index) => (
            <Show
              when={blank.variations.length > 1}
              fallback={
                <div class="text-muted-foreground font-semibold">
                  {blank.variations[0]}
                </div>
              }
            >
              <div>
                <div class="text-muted-foreground mb-1 font-semibold">
                  Blank {index() + 1} ({blank.word}):
                </div>
                <div class="ml-4 space-y-1">
                  <For each={blank.variations}>
                    {(variation) => (
                      <div class="text-muted-foreground/90">{variation}</div>
                    )}
                  </For>
                </div>
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  )
}
