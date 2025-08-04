import { For } from "solid-js"
import { Plus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { VocabItemEditor } from "./VocabItemEditor"

interface VocabItemsListProps {
  vocabIds: () => number[]
  onAddItem: () => void
  onRemoveItem: (id: number) => void
}

export function VocabItemsList(props: VocabItemsListProps) {
  return (
    <div class="space-y-4">
      <For each={props.vocabIds()}>
        {(id, index) => (
          <VocabItemEditor
            index={index()}
            onRemove={() => props.onRemoveItem(id)}
          />
        )}
      </For>

      <div class="mt-6 flex justify-center">
        <Button variant="secondary" onClick={props.onAddItem}>
          <Plus class="mr-2 size-4" />
          Add Item
        </Button>
      </div>
    </div>
  )
}
