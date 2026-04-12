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
    <div class="fixed bottom-16 left-0 right-0 z-30 flex justify-center px-4">
      <div class="w-full max-w-sm sm:w-auto sm:min-w-48">
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
