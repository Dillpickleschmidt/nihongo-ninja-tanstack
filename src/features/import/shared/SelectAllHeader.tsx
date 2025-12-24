import { Checkbox, CheckboxInput, CheckboxLabel } from "@/components/ui/checkbox"

export function SelectAllHeader(props: {
  level: string
  category: "vocabulary" | "kanji"
  selectedCount: number
  allSelected: boolean
  onToggle: (checked: boolean) => void
}) {
  return (
    <div class="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
      <Checkbox
        checked={props.allSelected}
        onChange={props.onToggle}
        class="flex items-center gap-3"
      >
        <CheckboxInput class="border-white/30 bg-white/10 data-checked:bg-(--accent) data-checked:text-white" />
        <CheckboxLabel class="text-white">
          Select all {props.level} {props.category}
        </CheckboxLabel>
      </Checkbox>
      <span class="text-sm text-white/40">{props.selectedCount} selected</span>
    </div>
  )
}
