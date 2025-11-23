// features/explore/components/ui/combobox/singlecombo.tsx
import * as Combobox from "@kobalte/core/combobox"
import { cn } from "@/utils"

interface FilterFormat {
  value: string
  label: string
}

interface SingleComboboxProps {
  items: readonly FilterFormat[]
  value: FilterFormat[]
  onChange: (value: FilterFormat[]) => void
  placeholder?: string
  class?: string
}

export function SingleCombobox(props: SingleComboboxProps) {
  return (
    <Combobox.Root<FilterFormat>
      multiple={false}
      options={props.items}
      optionValue="value"
      optionLabel="label"
      optionTextValue="label"
      value={props.value[0] ?? null}
      onChange={(value) => {
        // Convert single value to array for consistency with MultiCombobox interface
        props.onChange(value ? [value] : [])
      }}
      defaultFilter="contains"
      placeholder={props.placeholder || "Any"}
      itemComponent={(itemProps) => (
        <Combobox.Item
          item={itemProps.item}
          class={cn(
            "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          )}
        >
          <Combobox.ItemLabel>
            {itemProps.item.rawValue.label}
          </Combobox.ItemLabel>
          <Combobox.ItemIndicator class="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </Combobox.ItemIndicator>
        </Combobox.Item>
      )}
    >
      <Combobox.Control
        class={cn(
          "bg-background flex h-10 items-center rounded-md border border-0 px-3 shadow-sm",
          props.class,
        )}
      >
        <Combobox.Input
          placeholder={props.placeholder || "Any"}
          class="placeholder:text-muted-foreground flex size-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Combobox.Trigger class="size-4 opacity-50">
          <Combobox.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="m7 15 5 5 5 -5" />
              <path d="m7 9 5 -5 5 5" />
            </svg>
          </Combobox.Icon>
        </Combobox.Trigger>
      </Combobox.Control>

      <Combobox.Content class="bg-popover text-popover-foreground data-[expanded]:animate-in data-[collapsed]:animate-out data-[collapsed]:fade-out-0 data-[expanded]:fade-in-0 data-[collapsed]:zoom-out-95 data-[expanded]:zoom-in-95 relative z-50 max-h-60 min-w-[8rem] overflow-hidden rounded-md border border-0 shadow-md">
        <Combobox.Listbox class="m-0 max-h-60 overflow-y-auto p-1" />
      </Combobox.Content>
    </Combobox.Root>
  )
}
