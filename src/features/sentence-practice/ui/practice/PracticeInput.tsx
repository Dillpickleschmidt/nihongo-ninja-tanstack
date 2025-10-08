// ui/practice/PracticeInput.tsx
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import type { JSX } from "solid-js"

interface PracticeInputProps {
  value: string
  onInput: (value: string) => void
  onKeyPress?: (e: KeyboardEvent) => void
  autofocus?: boolean
  class?: string
  placeholder?: string
}

export default function PracticeInput(props: PracticeInputProps) {
  return (
    <WanakanaWrapper enabled={true} watch={props.value}>
      <TextField value={props.value} onChange={props.onInput}>
        <TextFieldInput
          type="text"
          onKeyDown={props.onKeyPress}
          autofocus={props.autofocus}
          class={props.class}
          placeholder={props.placeholder}
        />
      </TextField>
    </WanakanaWrapper>
  )
}
