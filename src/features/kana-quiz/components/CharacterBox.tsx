// src/features/kana-quiz/components/CharacterBox.tsx
import { SmoothCard } from "@/components/SmoothCard"
import { TextField, TextFieldInput } from "@/components/ui/text-field"

type CharacterBoxProps = {
  character: string
  registerRef: (el: HTMLInputElement) => void
  disabled: boolean
  isCorrect?: boolean
  isIncorrect?: boolean
}

export default function CharacterBox(props: CharacterBoxProps) {
  const getBorderClass = () => {
    if (props.isCorrect) return "stroke-emerald-500/60 [stroke-width:1.5]"
    if (props.isIncorrect) return "stroke-rose-500/50 [stroke-width:1.5]"
    return "stroke-white/[0.08] [stroke-width:0.75]"
  }

  const getBackground = () => {
    if (props.isCorrect) return "bg-emerald-500/15"
    if (props.isIncorrect) return "bg-rose-500/15"
    return "bg-card/70"
  }

  return (
    <SmoothCard
      width={149}
      height={195}
      cornerRadius={20}
      cornerSmoothing={1}
      border={true}
      borderClass={getBorderClass()}
      class={`flex flex-col items-center justify-center ${getBackground()} p-4 backdrop-blur-sm transition-all duration-300`}
    >
      <div class="font-japanese mb-4 text-4xl font-semibold text-white/90 select-none">
        {props.character}
      </div>

      <TextField disabled={props.disabled} class="w-28">
        <TextFieldInput
          ref={props.registerRef}
          maxLength={4}
          placeholder="..."
          class={`h-14 rounded-xl border border-white/8 bg-background/70 text-center text-xl font-medium text-white/90 placeholder:text-white/20 backdrop-blur-sm transition-all focus:border-dynamic-accent/40 focus:bg-background/80 ${
            props.disabled ? "cursor-not-allowed disabled:opacity-80" : ""
          }`}
        />
      </TextField>
    </SmoothCard>
  )
}
