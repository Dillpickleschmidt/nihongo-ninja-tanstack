import { Show } from "solid-js"
import { StackEditor } from "./overrides/StackEditor"
import type { Stack } from "@/features/resolvers/types"
import { useSettings } from "@/context/SettingsContext"
import type { User } from "@supabase/supabase-js"

interface OverridesContentProps {
  user: User | null
}

export function OverridesContent(props: OverridesContentProps) {
  const { userPreferences, updateUserPreferences } = useSettings()

  const handleVocabularyStacksChange = async (newStacks: Stack[]) => {
    await updateUserPreferences({
      "override-settings": {
        ...userPreferences()["override-settings"],
        vocabularyOverrides: newStacks,
      },
    })
  }

  const handleKanjiStacksChange = async (newStacks: Stack[]) => {
    await updateUserPreferences({
      "override-settings": {
        ...userPreferences()["override-settings"],
        kanjiOverrides: newStacks,
      },
    })
  }

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

      <Show
        when={props.user}
        fallback={
          <div class="border-card-foreground/70 bg-background/40 flex flex-col items-center justify-center rounded-lg border p-8 text-center backdrop-blur-sm">
            <h2 class="mb-2 text-xl font-medium">Sign in Required</h2>
            <p class="text-muted-foreground max-w-md text-sm leading-relaxed">
              Override settings are only available for signed-in users.
            </p>
          </div>
        }
      >
        {/* Stack Editors */}
        <div class="grid items-stretch gap-8 lg:grid-cols-2">
          <div class="border-card-foreground/70 bg-background/40 flex flex-col rounded-lg border p-6 backdrop-blur-sm">
            <StackEditor
              title="Vocabulary Overrides"
              stacks={
                userPreferences()["override-settings"].vocabularyOverrides
              }
              onChange={handleVocabularyStacksChange}
            />
          </div>

          <div class="border-card-foreground/70 bg-background/40 flex flex-col rounded-lg border p-6 backdrop-blur-sm">
            <StackEditor
              title="Kanji Overrides"
              stacks={userPreferences()["override-settings"].kanjiOverrides}
              onChange={handleKanjiStacksChange}
            />
          </div>
        </div>
      </Show>

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
