import { Show } from 'solid-js'
import { X } from 'lucide-solid'

interface SelectionIndicatorProps {
  selectedKanji: string | null
  selectedRadical: string | null
  onClear: () => void
}

export function SelectionIndicator(props: SelectionIndicatorProps) {
  return (
    <div class="mx-4 flex items-center justify-between rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">
      <div class="text-sm text-indigo-300">
        <Show when={props.selectedKanji}>
          Filtering by kanji: <span class="font-bold">{props.selectedKanji}</span>
        </Show>
        <Show when={props.selectedRadical}>
          Filtering by radical: <span class="font-bold">{props.selectedRadical}</span>
        </Show>
      </div>
      <button
        type="button"
        onClick={props.onClear}
        class="rounded-md p-1 text-indigo-300 hover:bg-indigo-500/20"
        title="Clear selection"
      >
        <X class="h-4 w-4" />
      </button>
    </div>
  )
}
