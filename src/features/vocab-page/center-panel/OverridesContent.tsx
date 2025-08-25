import { createSignal } from "solid-js"
import { StackEditor } from "./overrides/StackEditor"
import { getDefaultVocabularyStacks } from "@/features/resolvers/vocabulary/stacking"
import { getDefaultKanjiStacks } from "@/features/resolvers/kanji/stacking"
import type { Stack } from "@/features/resolvers/types"

export function OverridesContent() {
  // Initialize with default stacks
  const [vocabularyStacks, setVocabularyStacks] = createSignal<Stack[]>(
    getDefaultVocabularyStacks(),
  )
  const [kanjiStacks, setKanjiStacks] = createSignal<Stack[]>(
    getDefaultKanjiStacks(),
  )

  return (
    <div class="space-y-8">
      {/* Header (compact, left-aligned) */}
      <div class="space-y-2">
        <h1 class="text-2xl font-semibold">Override Settings</h1>
        <p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
          Configure how vocabulary and kanji data sources are prioritized and
          merged during practice sessions. Higher priority sources (lower
          numbers) override lower priority ones.
        </p>
      </div>

      {/* Stack Editors */}
      <div class="grid items-stretch gap-8 lg:grid-cols-2">
        <div class="border-card-foreground/70 bg-background/40 flex flex-col rounded-lg border p-6 backdrop-blur-sm">
          <StackEditor
            title="Vocabulary Overrides"
            stacks={vocabularyStacks()}
            onChange={setVocabularyStacks}
          />
        </div>

        <div class="border-card-foreground/70 bg-background/40 flex flex-col rounded-lg border p-6 backdrop-blur-sm">
          <StackEditor
            title="Kanji Overrides"
            stacks={kanjiStacks()}
            onChange={setKanjiStacks}
          />
        </div>
      </div>

      {/* Help Text (slightly larger than before, but still subtle) */}
      <div class="text-muted-foreground mx-auto max-w-2xl space-y-1 text-center text-sm leading-relaxed">
        <p>
          <strong>Priority:</strong> Lower numbers have higher priority (100
          beats 200)
        </p>
        <p>
          <strong>Locked items:</strong> Cannot be disabled or reordered (🔒)
        </p>
        <p>
          <strong>Drag to reorder:</strong> Only unlocked items can be moved
        </p>
        <p>
          <strong>Enable/disable:</strong> Toggle unlocked items on or off
        </p>
      </div>
    </div>
  )
}
