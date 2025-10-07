// features/progress-page/components/ProgressSummary.tsx

interface ProgressSummaryProps {
  vocab: { total: number; week: number }
  kanji: { total: number; week: number }
  avgDay: number
  totalHours: number
  streak: number
  personalBest: number
}

export function ProgressSummary(props: ProgressSummaryProps) {
  return (
    <section class="bg-card/20 text-foreground mt-7 rounded-xl px-7 py-7 text-sm backdrop-blur-md">
      {/* ─── Metrics row ─── */}
      <div class="grid grid-cols-3 items-start gap-10">
        {/* Knowledge Growth */}
        <div>
          <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
            Knowledge
          </h4>
          <p class="text-lg font-semibold text-white">
            <span class="text-xl">{props.vocab.total.toLocaleString()}</span>{" "}
            Vocab
          </p>
          <p class="text-base font-semibold text-white">
            {props.kanji.total.toLocaleString()} Kanji
          </p>
          <p class="mt-1 text-xs text-emerald-400">
            +{props.vocab.week} V · +{props.kanji.week} K this week
          </p>
        </div>

        {/* Consistency — centered column */}
        <div class="flex justify-center">
          <div>
            <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
              Consistency
            </h4>
            <p class="text-lg font-semibold text-white">
              Avg Day <span class="text-sky-400">{props.avgDay} min</span>
            </p>
            <p class="mt-1.5 text-base font-semibold text-white">
              {props.totalHours} h total
            </p>
          </div>
        </div>

        {/* Streak */}
        <div class="text-right">
          <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
            Streak
          </h4>
          <p class="text-2xl leading-none font-bold text-amber-400">
            {props.streak} days
          </p>
          <p class="text-muted-foreground mt-2 text-xs">
            Personal best: {props.personalBest}
          </p>
        </div>
      </div>

      {/* ─── Buttons row ─── */}
      <div class="mt-3 grid grid-cols-3 gap-10 text-xs font-medium">
        <button class="border-foreground/10 bg-card/30 justify-self-start rounded-md border px-4 py-1.5 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300">
          See Knowledge
        </button>

        <button class="border-foreground/10 bg-card/30 justify-self-center rounded-md border px-4 py-1.5 text-[9px] transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-300">
          Adjust Target?
        </button>

        <button class="border-foreground/10 bg-card/30 justify-self-end rounded-md border px-4 py-1.5 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300">
          View History
        </button>
      </div>
    </section>
  )
}
