// src/features/kana-quiz/components/CharacterBox.tsx
import { JSX } from "solid-js"
import { SmoothCard } from "@/features/learn-page/components/shared/SmoothCard"

type CharacterBoxProps = {
  character: string
  userInput: string
  onInputChange: (newUserInput: string) => void
  disabled: boolean
  isCorrect?: boolean
  isIncorrect?: boolean
  showResults?: boolean
}

export default function CharacterBox(props: CharacterBoxProps) {
  const handleInputChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    e,
  ) => props.onInputChange(e.currentTarget.value)

  // One clean background per state
  const getBackground = () => {
    if (props.isCorrect) return "bg-emerald-500/20"
    if (props.isIncorrect) return "bg-rose-500/20"
    return "bg-card/70"
  }

  return (
    <SmoothCard
      width={149}
      height={195}
      cornerRadius={20}
      cornerSmoothing={1}
      class={`flex flex-col items-center justify-center ${getBackground()} p-4 shadow-md backdrop-blur-sm transition-all duration-200`}
    >
      {/* Kana character */}
      <div class="font-japanese text-foreground mb-4 text-4xl font-semibold select-none">
        {props.character}
      </div>

      {/* Input box inside */}
      <SmoothCard
        width={112}
        height={56}
        cornerRadius={12}
        cornerSmoothing={1}
        class="bg-background/70 p-0 backdrop-blur-sm"
      >
        <input
          type="text"
          value={props.userInput}
          onInput={handleInputChange}
          disabled={props.disabled}
          placeholder="..."
          class={`text-foreground placeholder-muted-foreground h-full w-full bg-transparent text-center text-xl font-medium outline-none ${
            props.disabled ? "cursor-not-allowed opacity-60" : ""
          }`}
          style={{ "font-family": "inherit" }}
        />
      </SmoothCard>
    </SmoothCard>
  )
}
