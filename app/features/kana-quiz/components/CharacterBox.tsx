// app/features/kana-quiz/components/CharacterBox.tsx
import { JSX } from "solid-js"
import { SmoothCard } from "@/features/dashboard/components/shared/SmoothCard"

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
    event,
  ) => {
    props.onInputChange(event.currentTarget.value)
  }

  // Border colors based on answer state
  const getBorderColor = () => {
    if (props.isCorrect) return "bg-green-400"
    if (props.isIncorrect) return "bg-rose-400"
    return "bg-gray-600"
  }

  // Input field styling based on answer state
  const getInputColors = () => {
    if (props.isIncorrect) return "text-red-300 placeholder-red-400"
    if (props.isCorrect) return "text-white placeholder-green-200"
    return "text-white placeholder-gray-400"
  }

  const getInputBackground = () => {
    return props.isCorrect
      ? "bg-gray-900/40"
      : "bg-gray-700/50 backdrop-blur-sm"
  }

  return (
    <div class="relative flex items-center justify-center">
      {/* Border Layer - colored border that's slightly larger */}
      <SmoothCard
        width={149}
        height={195}
        cornerRadius={20}
        cornerSmoothing={1}
        class={`absolute ${getBorderColor()} transition-all duration-200`}
      >
        <div />
      </SmoothCard>

      {/* Main Card - content container with base styling */}
      <SmoothCard
        width={144}
        height={191}
        cornerRadius={20}
        cornerSmoothing={1}
        class="relative z-10 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-3 transition-all duration-200"
      >
        {/* Success Tint - subtle green overlay for correct answers */}
        {props.isCorrect && (
          <div class="absolute inset-0 rounded-[20px] bg-green-500/25" />
        )}

        {/* Content Layer - character and input field */}
        <div class="relative z-10 flex h-full w-full flex-col items-center justify-center">
          {/* Character Display */}
          <div class="font-japanese mb-4 text-5xl font-medium text-[#F8F5E9] select-none">
            {props.character}
          </div>

          {/* Input Field */}
          <div class="w-full">
            <SmoothCard
              width={112}
              height={56}
              cornerRadius={12}
              cornerSmoothing={1}
              class={`mx-auto ${getInputBackground()}`}
            >
              <input
                type="text"
                value={props.userInput}
                onInput={handleInputChange}
                disabled={props.disabled}
                placeholder="..."
                class={`h-full w-full border-none bg-transparent text-center text-2xl font-medium outline-none ${getInputColors()} ${
                  props.disabled ? "cursor-not-allowed" : ""
                }`}
                style={{ "font-family": "inherit" }}
              />
            </SmoothCard>
          </div>
        </div>
      </SmoothCard>
    </div>
  )
}
