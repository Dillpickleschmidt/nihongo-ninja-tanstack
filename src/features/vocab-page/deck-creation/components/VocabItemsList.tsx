import { For } from "solid-js"
import { Plus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { useDeckCreationStore } from "../hooks/useDeckCreationStore"
import { VocabItemEditor } from "./VocabItemEditor"

export function VocabItemsList() {
  const { store, actions } = useDeckCreationStore()

  return (
    <div class="space-y-4">
      <For each={store.vocabItems.activeIds}>
        {(id, index) => (
          <VocabItemEditor
            itemId={id}
            index={index()}
            isFirstItem={index() === 0}
            onRemove={() => actions.removeVocabItem(id)}
          />
        )}
      </For>

      <div class="mt-6 flex justify-center">
        <Button variant="secondary" onClick={actions.addVocabItem}>
          <Plus class="mr-2 size-4" />
          Add Item
        </Button>
      </div>
    </div>
  )
}