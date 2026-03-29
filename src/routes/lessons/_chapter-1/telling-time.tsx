import { createFileRoute } from "@tanstack/solid-router"
import { useBreakpoints } from "@/hooks/useBreakpoints"
import TimeChart from "@/components/charts/TimeChart"
import YouTubeVideo from "@/features/youtube/YouTube"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-1/telling-time")({
  loader: () => ({ maxWidth: "max-w-5xl" }),
  component: TellingTime,
})

function TellingTime() {
  const bp = useBreakpoints()

  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        時
      </span>

      <LessonHeader
        chapter="Chapter 1 · Getting Started"
        title={<>Telling Time</>}
        subtitle="Hours, half hours, and how to ask what time it is."
      >
        <OverviewItem>
          Saying hours with{" "}
          <span class="font-japanese font-semibold text-white/60">じ</span>
        </OverviewItem>
        <OverviewItem>Half hours, quarter-past, and quarter-to</OverviewItem>
        <OverviewItem>Times of day and asking the time</OverviewItem>
      </LessonHeader>

      {/* 2-column: TimeChart + Explanations */}
      <div class="grid w-full gap-12 px-8 lg:grid-cols-2 lg:items-start">
        {/* Left: TimeChart in Collapsible */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={bp.lg()}
            class="rounded-xl bg-white/[0.04] ring-1 ring-white/10"
          >
            <CollapsibleTrigger class="p-4 text-lg font-semibold text-white/80">
              Hours in Japanese (Time Chart)
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <TimeChart />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Right: Explanations */}
        <div class="space-y-8 leading-relaxed">
          <p class="text-xl font-bold text-white/90">
            To say the time in Japanese, simply use the number hour followed by
            じ.
          </p>

          <ul class="space-y-2 text-white/70">
            <li>
              4 o'clock is only pronounced{" "}
              <span class="font-japanese font-semibold text-white/90 underline underline-offset-2">
                よじ
              </span>
              , not よんじ or しじ.
            </li>
            <li>
              7 o'clock is only pronounced{" "}
              <span class="font-japanese font-semibold text-white/90 underline underline-offset-2">
                しちじ
              </span>
              , not ななじ.
            </li>
            <li>
              9 o'clock is only pronounced{" "}
              <span class="font-japanese font-semibold text-white/90 underline underline-offset-2">
                くじ
              </span>
              , not きゅうじ.
            </li>
          </ul>

          <YouTubeVideo
            title="Talking about Time by Kaname Naito - Sep 28, 2023"
            videoId="LGmfMlnEGz4"
            credit="Kaname Naito"
            timestamps={[
              { time: 0, label: "Introduction" },
              { time: 20, label: "Hours" },
              { time: 83, label: "Quarter-Past and Quarter-To" },
              { time: 205, label: "a.m./p.m." },
              { time: 232, label: "Times of Day" },
              { time: 288, label: "Various Other Times" },
              { time: 462, label: "Example Conversations" },
              { time: 581, label: "Advanced Topics" },
            ]}
          />

          <p class="text-sm italic text-white/40">
            Thanks again Kaname for your awesome free videos. :) Everyone go
            subscribe to his channel if you like his content!
          </p>

          <ul class="space-y-2 text-white/70">
            <li>
              The accent is typically right before じ, with さんじ and じゅうじ
              being exceptions.
            </li>
            <li>
              In Japan, time is written either with Western digits or a kanji
              number + 時.
            </li>
            <li class="ml-5 text-white/50">
              Ex: 二時 → 2 o'clock
              <br />
              Ex: ２時 → 2 o'clock
            </li>
            <li>
              Japanese people typically use the 12‑hour clock conversationally,
              but the 24‑hour system is common in formal schedules (trains,
              buses, timetables).
            </li>
          </ul>
        </div>
      </div>

      {/* Remaining sections: max-w-3xl centered */}
      <div class="mx-auto mt-20 max-w-3xl space-y-14 px-8">
        {/* Half hours */}
        <div class="space-y-4">
          <SectionLabel>Half hours</SectionLabel>
          <p class="leading-relaxed text-white/70">
            For half hours, use{" "}
            <span class="font-japanese font-semibold text-white/90">はん</span>{" "}
            <span class="text-white/40">(half)</span>. Usually written with
            kanji{" "}
            <span class="font-japanese font-semibold text-white/90">半</span>.
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">一時半</span>
              <span class="ml-3 text-sm text-white/40">1:30</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">十二時半</span>
              <span class="ml-3 text-sm text-white/40">12:30</span>
            </div>
          </div>
        </div>

        {/* Quarter past/to */}
        <div class="space-y-4">
          <SectionLabel>Quarter past and quarter to</SectionLabel>
          <p class="leading-relaxed text-white/70">
            There isn't a direct equivalent in Japanese. You either specify
            exact minutes, or use "a little before X" / "a little after X" with{" "}
            <span class="font-japanese font-semibold text-white/90">まえ</span>{" "}
            and{" "}
            <span class="font-japanese font-semibold text-white/90">すぎ</span>
            .
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="text-sm text-white/40">Quarter‑to‑10</p>
              <p class="font-japanese text-lg text-white/90">じゅうじまえ</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="text-sm text-white/40">Quarter‑past‑10</p>
              <p class="font-japanese text-lg text-white/90">じゅうじすぎ</p>
            </div>
          </div>
        </div>

        {/* Times of Day */}
        <div class="space-y-6">
          <div class="space-y-4">
            <SectionLabel>Times of day</SectionLabel>
            <p class="leading-relaxed text-white/70">
              The basic way to say a.m. and p.m. is ごぜん and ごご, written
              午前 / 午後. They go before the time.
            </p>
          </div>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="text-sm text-white/40">12:30 a.m.</p>
              <p class="font-japanese text-lg text-white/90">
                ごぜん じゅうに はん
              </p>
              <p class="font-japanese text-sm text-white/50">午前十二半</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="text-sm text-white/40">12:30 p.m.</p>
              <p class="font-japanese text-lg text-white/90">
                ごご じゅうに はん
              </p>
              <p class="font-japanese text-sm text-white/50">午後十二半</p>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            Conversationally, most people prefer saying "in the morning" / "at
            night" instead.
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">あさのくじ</p>
              <p class="text-sm text-white/40">9 in the morning</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">よるのくじ</p>
              <p class="text-sm text-white/40">9 at night</p>
            </div>
          </div>

          <p class="text-center text-sm font-medium text-white/50">
            Japanese people generally divide a day into four slots:
          </p>

          <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <p class="text-lg">🌄</p>
              <p class="font-japanese text-lg font-semibold text-white/90">
                あさ
              </p>
              <p class="text-xs text-white/40">Sunrise – ~10 a.m.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <p class="text-lg">🌤️</p>
              <p class="font-japanese text-lg font-semibold text-white/90">
                ひる
              </p>
              <p class="text-xs text-white/40">~10 a.m. – 2/3 p.m.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <p class="text-lg">🌇</p>
              <p class="font-japanese text-lg font-semibold text-white/90">
                ゆうがた
              </p>
              <p class="text-xs text-white/40">3/4 p.m. – 7 p.m.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <p class="text-lg">🌒</p>
              <p class="font-japanese text-lg font-semibold text-white/90">
                よる
              </p>
              <p class="text-xs text-white/40">7 p.m. – Sunrise</p>
            </div>
          </div>

          <p class="text-sm italic text-white/40">
            *あさ and よる are the most common to clarify AM vs PM
          </p>
        </div>

        {/* Asking the Time */}
        <div class="space-y-6">
          <div class="space-y-4">
            <SectionLabel>Asking the time</SectionLabel>

            <AsideBlock>
            <p class="leading-relaxed text-white/70">
              <span class="font-japanese font-semibold text-white/90">
                今 (いま)
              </span>{" "}
              — right now / current time
            </p>
          </AsideBlock>
          </div>

          <p class="leading-relaxed text-white/70">
            To ask "What time is it?", say:
          </p>

          <GlowBox>
            <p class="text-center font-japanese text-2xl font-semibold text-white/90">
              いま、なんじですか。
            </p>
          </GlowBox>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Scenario 1: Asking for the time
              </p>
              <div class="space-y-1 text-sm leading-relaxed text-white/60">
                <p>
                  A:{" "}
                  <span class="font-japanese text-base text-white/80">
                    いま なんじですか。
                  </span>{" "}
                  → What time is it?
                </p>
                <p>
                  B:{" "}
                  <span class="font-japanese text-base text-white/80">
                    じゅういちじ はんです。
                  </span>{" "}
                  → It's 11:30.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Scenario 2: Setting a meeting time
              </p>
              <div class="space-y-1 text-sm leading-relaxed text-white/60">
                <p>
                  A:{" "}
                  <span class="font-japanese text-base text-white/80">
                    かいぎ は なんじですか。
                  </span>{" "}
                  → What time is the meeting?
                </p>
                <p>
                  B:{" "}
                  <span class="font-japanese text-base text-white/80">
                    さんじ はんです。
                  </span>{" "}
                  → It's at 3:30.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Scenario 3: Scheduling an appointment
              </p>
              <div class="space-y-1 text-sm leading-relaxed text-white/60">
                <p>
                  A:{" "}
                  <span class="font-japanese text-base text-white/80">
                    いしゃの よやく は なんじですか。
                  </span>{" "}
                  → What time's the appointment?
                </p>
                <p>
                  B:{" "}
                  <span class="font-japanese text-base text-white/80">
                    ごぜん じゅうじです。
                  </span>{" "}
                  → It's at 10 a.m.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus */}
        <div class="space-y-4">
          <SectionLabel>
            Bonus — history of Japanese time
          </SectionLabel>
          <YouTubeVideo
            videoId="1BJmnEa6YGE"
            title="Traditional Japanese Time Was Very Different by Linfamy - Nov 21, 2022"
            credit="Linfamy"
          />
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            [number] + じ for hours, with irregular readings for 4, 7, and 9
          </SummaryItem>
          <SummaryItem>
            はん (半) for half hours, まえ/すぎ for quarter-to/past
          </SummaryItem>
          <SummaryItem>
            ごぜん / ごご for a.m./p.m., or あさ / よる conversationally
          </SummaryItem>
          <SummaryItem>
            いま、なんじですか to ask "What time is it?"
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
