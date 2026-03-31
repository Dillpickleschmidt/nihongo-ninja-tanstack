import { Show } from "solid-js"
import { cn } from "@/utils"
import { Button3D } from "@/components/Button3D"
import { playClickSound } from "../utils/select-sound"

export type ActionBarState = "check" | "correct" | "wrong" | "idle"

interface PracticeActionBarProps {
  state: ActionBarState
  onAction: () => void
  canCheck?: boolean
  feedbackText?: string
  label?: string
  color?: string
}

const STATE_COLORS: Record<ActionBarState, string> = {
  check: "rgb(6,182,212)",
  correct: "rgb(16,185,129)",
  wrong: "rgb(244,63,94)",
  idle: "rgb(139,92,246)",
}

const STATE_LABELS: Record<ActionBarState, string> = {
  check: "Check",
  correct: "Next",
  wrong: "Next",
  idle: "Continue",
}

export function PracticeActionBar(props: PracticeActionBarProps) {
  const color = () => props.color ?? STATE_COLORS[props.state]
  const label = () => props.label ?? STATE_LABELS[props.state]
  const disabled = () => props.state === "check" && props.canCheck === false

  return (
    <div
      class={cn(
        "fixed bottom-16 left-0 right-0 z-30",
        "xl:left-48 min-[1700px]:left-72",
        "md:right-80",
        "border-t border-white/5 backdrop-blur-xl",
        "px-4 py-4 md:px-12",
        "flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6",
      )}
    >
      {/* Feedback text */}
      <Show when={props.state !== "check" && props.state !== "idle" && props.feedbackText}>
        <div class="flex items-center gap-2 text-sm sm:w-1/2 sm:justify-center">
          <Show when={props.state === "correct"}>
            <span class="text-emerald-400">Correct!</span>
          </Show>
          <Show when={props.state === "wrong"}>
            <span class="text-rose-400">Correct answer:</span>
          </Show>
          <span class="font-japanese text-white/70">{props.feedbackText}</span>
        </div>
      </Show>

      {/* Action button */}
      <div class="w-full sm:w-auto sm:min-w-48">
        <Button3D
          color={color()}
          disabled={disabled()}
          onClick={() => {
            playClickSound()
            props.onAction()
          }}
        >
          {label()}
        </Button3D>
      </div>
    </div>
  )
}
