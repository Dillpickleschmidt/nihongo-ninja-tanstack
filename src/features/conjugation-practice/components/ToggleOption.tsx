import {
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { cn } from "@/utils"
import { JSX } from "solid-js"

type ToggleOptionProps = {
  checked: () => boolean
  onChange: (checked: boolean) => void
  label: JSX.Element
  class?: string
}

export default function ToggleOption({
  checked,
  onChange,
  label,
  class: className,
}: ToggleOptionProps) {
  return (
    <Checkbox
      class="items-top group relative flex space-x-2"
      checked={checked()}
      onChange={onChange}
    >
      <CheckboxInput class="border-card-foreground hover:cursor-pointer" />
      <CheckboxLabel
        class={cn(
          "text-lg leading-none hover:cursor-pointer hover:opacity-50 lg:text-[1.2rem]",
          "ease-instant-hover-300",
          className,
        )}
      >
        {label}
      </CheckboxLabel>
    </Checkbox>
  )
}
