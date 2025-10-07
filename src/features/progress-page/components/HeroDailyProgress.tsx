// features/progress-page/components/HeroDailyProgress.tsx
import { For } from "solid-js"

interface HeroDailyProgressProps {
  minutesToday: number
  dailyGoal: number
  streak: number
  weekData: number[] // Normalized 0-100 percentages
  percentChange: number
}

export function HeroDailyProgress(props: HeroDailyProgressProps) {
  const completion = () =>
    Math.min(100, (props.minutesToday / props.dailyGoal) * 100)

  return (
    <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-transparent p-6 shadow-inner backdrop-blur-md">
      <div class="mb-5 flex items-center justify-between">
        <div>
          <p class="text-muted-foreground text-xs tracking-wide uppercase">
            Today's Goal
          </p>
          <h2 class="text-4xl font-bold text-white">
            {Math.floor(props.minutesToday)} / {props.dailyGoal} min
          </h2>
          <p class="mt-1 text-sm font-medium text-emerald-300">
            {completion() >= 100
              ? "Goal complete! Great work 🔥"
              : completion() >= 50
                ? "Halfway there — keep going!"
                : "You're off to a good start!"}
          </p>
        </div>

        <div
          class="relative h-24 w-24 rounded-full border-4 border-neutral-700"
          style={{
            background: `conic-gradient(var(--emerald-400) ${completion()}%, transparent ${completion()}%)`,
          }}
        >
          <div class="bg-card/80 absolute inset-2 flex items-center justify-center rounded-full text-2xl font-semibold text-emerald-300">
            {Math.round(completion())}%
          </div>
        </div>
      </div>

      <div class="mt-3 flex h-16 items-end justify-between">
        <For each={props.weekData}>
          {(h, i) => (
            <div
              class={`w-3 rounded ${
                i() === props.weekData.length - 1
                  ? "bg-emerald-400/90"
                  : "bg-emerald-400/50"
              }`}
              style={{ height: `${h}%` }}
            />
          )}
        </For>
      </div>
      <p class="text-muted-foreground mt-1 text-xs">
        {props.streak}‑day streak ·
        <span
          class={
            props.percentChange >= 0 ? "text-emerald-400" : "text-rose-400"
          }
        >
          {props.percentChange >= 0 ? "+" : ""}
          {props.percentChange} %
        </span>{" "}
        vs yesterday
      </p>
    </div>
  )
}
