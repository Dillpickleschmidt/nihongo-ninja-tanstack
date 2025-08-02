// features/vocab-page/center-panel/CenterPanel.tsx
import { Show } from "solid-js"
import { DefaultContent } from "./DefaultContent"
import { VocabularyPreview } from "./VocabularyPreview"
// UserDeck type is now global from global.d.ts

interface CenterPanelProps {
  selectedUserDeck: UserDeck | null
}

export function CenterPanel(props: CenterPanelProps) {
  return (
    <div class="flex flex-1 items-center justify-center px-8 pb-16">
      <Show when={props.selectedUserDeck} fallback={<DefaultContent />}>
        {(deck) => <VocabularyPreview selectedDeck={deck()} />}
      </Show>
    </div>
  )
}
