// features/learn-page-v2/components/content/HeroDailyProgress.tsx
import { For, Show } from "solid-js"
import { Loader2 } from "lucide-solid"
import { useLearnPageContext } from "@/features/learn-page-v2/context/LearnPageContext"

export function HeroDailyProgress() {
  const context = useLearnPageContext()

  const completion = () => {
    const minutes = context.minutesToday()
    if (minutes.isPending || minutes.isError) return undefined
    return Math.min(100, ((minutes.data ?? 0) / context.dailyGoal) * 100)
  }

  return (
    <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600/15 via-emerald-500/5 to-neutral-200/5 px-5 py-4 shadow-inner backdrop-blur-md">
      <div class="mb-5 flex items-center justify-between">
        <div>
          <p class="text-muted-foreground text-xs tracking-wide uppercase">
            Today's Goal
          </p>
          <h2 class="text-3xl font-semibold text-neutral-200">
            <Show
              when={
                !context.minutesToday().isPending &&
                !context.minutesToday().isError
              }
              fallback={
                context.minutesToday().isPending ? (
                  <Loader2 class="inline h-7.5 w-7.5 animate-spin" />
                ) : (
                  "Error"
                )
              }
            >
              {Math.floor(context.minutesToday().data ?? 0)}
            </Show>{" "}
            / {context.dailyGoal} min
          </h2>
          <p class="mt-0.5 text-sm font-medium text-emerald-300/90">
            <Show
              when={completion() !== undefined}
              fallback={
                context.minutesToday().isPending
                  ? "Loading your progress..."
                  : "Error loading progress"
              }
            >
              {completion()! >= 100
                ? "Goal complete! Great work 🔥"
                : completion()! >= 50
                  ? "Halfway there — keep going!"
                  : "You're off to a good start!"}
            </Show>
          </p>
        </div>

        <Show
          when={completion() !== undefined}
          fallback={
            <div class="relative h-22 w-22 rounded-full border-4 border-neutral-700">
              <div class="bg-card/80 absolute inset-2 flex items-center justify-center rounded-full">
                {context.minutesToday().isPending ? (
                  <Loader2 class="h-8 w-8 animate-spin text-emerald-400" />
                ) : (
                  <span class="text-destructive text-xs">Error</span>
                )}
              </div>
            </div>
          }
        >
          <div
            class="relative h-22 w-22 rounded-full border-4 border-neutral-700"
            style={{
              background: `conic-gradient(var(--emerald-400) ${completion()!}%, transparent ${completion()!}%)`,
            }}
          >
            <div class="bg-card/80 absolute inset-2 flex items-center justify-center rounded-full text-xl font-semibold text-emerald-300">
              {Math.round(completion()!)}%
            </div>
          </div>
        </Show>
      </div>

      <div class="mt-3 flex h-16 items-end justify-between">
        <For each={context.weekData()}>
          {(h, i) => (
            <div
              class={`w-3 rounded ${
                i() === context.weekData().length - 1
                  ? "bg-emerald-400/90"
                  : "bg-emerald-400/50"
              }`}
              style={{ height: `${h}%` }}
            />
          )}
        </For>
      </div>
      <p class="text-muted-foreground mt-1 text-xs">
        <Show
          when={!context.streak().isPending && !context.streak().isError}
          fallback={
            context.streak().isPending ? (
              <Loader2 class="inline h-3 w-3 animate-spin" />
            ) : (
              "Error"
            )
          }
        >
          {context.streak().data}
        </Show>
        ‑day streak ·{" "}
        <Show
          when={
            !context.percentChange().isPending &&
            !context.percentChange().isError
          }
          fallback={
            context.percentChange().isPending ? (
              <Loader2 class="inline h-3 w-3 animate-spin" />
            ) : (
              "Error"
            )
          }
        >
          <span
            class={
              (context.percentChange().data ?? 0) >= 0
                ? "text-emerald-400"
                : "text-rose-400"
            }
          >
            {(context.percentChange().data ?? 0) >= 0 ? "+" : ""}
            {context.percentChange().data} %
          </span>
        </Show>{" "}
        vs yesterday
      </p>
    </div>
  )
}
