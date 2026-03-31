import { X, SquareCheck, SquareX } from "lucide-solid"

interface PracticeHeaderProps {
  currentIndex: number
  totalItems: number
  correctCount?: number
  wrongCount?: number
  onQuit?: () => void
}

export function PracticeHeader(props: PracticeHeaderProps) {
  const progress = () =>
    props.totalItems > 0
      ? ((props.currentIndex + 1) / props.totalItems) * 100
      : 0

  return (
    <div class="-mb-2 flex w-full flex-col md:w-2/3 lg:w-1/2">
      {/* Header: quit + progress bar */}
      <div class="flex w-full items-center gap-3 md:gap-4">
        <button
          type="button"
          onClick={props.onQuit}
          class="text-white/30 transition-transform duration-200 hover:scale-125 hover:text-white/60"
        >
          <X size={28} />
        </button>
        <div class="relative h-3.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            class="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress()}%`,
              background: "linear-gradient(to right, var(--dynamic-accent), color-mix(in srgb, var(--dynamic-accent) 70%, white))",
            }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div class="flex w-full items-center justify-end gap-3 py-2 text-sm">
        <span class="flex items-center gap-1 text-white/50">
          <SquareCheck class="size-4 text-emerald-400" />
          <span>{props.correctCount ?? 0}</span>
        </span>
        <span class="flex items-center gap-1 text-white/50">
          <SquareX class="size-4 text-rose-400" />
          <span>{props.wrongCount ?? 0}</span>
        </span>
        <span class="text-white/30">
          {props.currentIndex + 1}/{props.totalItems}
        </span>
      </div>
    </div>
  )
}
