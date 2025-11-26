// routes/lessons/_chapter-1/telling-time.tsx
import { createFileRoute, Link } from "@tanstack/solid-router"
import { createMediaQuery } from "@solid-primitives/media"
import { Button } from "@/components/ui/button"
import TimeChart from "@/components/charts/TimeChart"
import YouTubeVideo from "@/features/youtube/YouTube"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"

export const Route = createFileRoute("/_home/lessons/_chapter-1/telling-time")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/_chapter-1/occupations-majors",
      size: "lg",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const isDesktop = createMediaQuery("(min-width: 1024px)")

  return (
    <div class="mb-32">
      {/* Page Header */}
      <h1 class="mb-12 px-4 pt-16 text-center text-3xl leading-tight font-medium sm:text-4xl">
        Telling Time
      </h1>

      {/* Responsive grid */}
      <div class="mx-auto grid w-full max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-start lg:px-12">
        {/* Left: TimeChart in Collapsible */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={isDesktop() ? true : false}
            class="border-border bg-card/70 rounded-xl border shadow backdrop-blur-sm"
          >
            <CollapsibleTrigger class="text-foreground p-4 text-lg font-semibold">
              Hours in Japanese (Time Chart)
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <TimeChart />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Right: Explanations */}
        <div class="text-foreground space-y-12 leading-relaxed">
          <h2 class="text-2xl font-bold">
            To say the time in Japanese, simply use the number hour followed by
            じ.
          </h2>

          <ul class="list-disc space-y-2 pl-6">
            <li>
              4 o’clock is only pronounced{" "}
              <span class="font-japanese font-semibold underline">よじ</span>,
              not よんじ or しじ.
            </li>
            <li>
              7 o’clock is only pronounced{" "}
              <span class="font-japanese font-semibold underline">しちじ</span>,
              not ななじ.
            </li>
            <li>
              9 o’clock is only pronounced{" "}
              <span class="font-japanese font-semibold underline">くじ</span>,
              not きゅうじ.
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

          <p class="text-muted-foreground text-sm italic">
            Thanks again Kaname for your awesome free videos. :) Everyone go
            subscribe to his channel if you like his content!
          </p>

          <ul class="list-disc space-y-2 pl-6">
            <li>
              The accent is typically right before じ, with さんじ and じゅうじ
              being exceptions.
            </li>
            <li>
              In Japan, time is written either with Western digits or a kanji
              number + 時.
            </li>
            <li class="ml-5">
              Ex: 二時 → 2 o’clock
              <br />
              Ex: ２時 → 2 o’clock
            </li>
            <li>
              Japanese people typically use the 12‑hour clock conversationally,
              but the 24‑hour system is common in formal schedules (trains,
              buses, timetables).
            </li>
          </ul>
        </div>
      </div>

      {/* Half hours + Quarter past/to */}
      <div class="mx-auto mt-20 w-full max-w-3xl space-y-10 px-6 lg:px-12">
        <h2 class="text-center text-2xl font-bold">
          For half hours, use <span class="font-japanese">はん</span>{" "}
          <span class="text-muted-foreground">(half)</span>.
        </h2>
        <ul class="list-disc space-y-2 pl-6">
          <li>
            <span class="font-japanese">はん</span> usually written with kanji{" "}
            <span class="font-japanese">半</span>.
          </li>
        </ul>

        <h3 class="text-xl font-bold">Examples:</h3>
        <ul class="ml-6 list-disc space-y-1">
          <li>一時半 – 1:30</li>
          <li>十二時半 – 12:30</li>
        </ul>

        <h2 class="text-center text-2xl font-bold">
          Quarter Past and Quarter To
        </h2>
        <p>
          There isn’t a direct equivalent in Japanese. You either specify exact
          minutes, or use “a little before X” / “a little after X” with{" "}
          <span class="font-japanese">まえ</span> and{" "}
          <span class="font-japanese">すぎ</span>.
        </p>

        <h3 class="text-xl font-bold">Examples:</h3>
        <ul class="ml-6 list-disc space-y-1">
          <li>Quarter‑to‑10 → じゅうじまえ</li>
          <li>Quarter‑past‑10 → じゅうじすぎ</li>
        </ul>
      </div>

      {/* Times of Day */}
      <div class="mx-auto mt-20 w-full max-w-3xl space-y-10 px-6 lg:px-12">
        <h2 class="text-center text-3xl font-bold">Times of Day</h2>
        <p>
          The basic way to say a.m. and p.m. is ごぜん and ごご, written 午前 /
          午後. They go before the time.
        </p>

        <ul class="list-disc space-y-2 pl-6">
          <li>12:30 a.m. → ごぜん じゅうに はん → 午前十二半</li>
          <li>12:30 p.m. → ごご じゅうに はん → 午後十二半</li>
        </ul>

        <p>
          Conversationally, most people prefer saying “in the morning” / “at
          night” instead.
        </p>
        <ul class="ml-6 list-disc space-y-1">
          <li>あさのくじ – 9 in the morning</li>
          <li>よるのくじ – 9 at night</li>
        </ul>

        <h4 class="text-center text-lg font-bold">
          Japanese people generally divide a day into four slots:
        </h4>
        <ul class="font-japanese space-y-3 text-center text-xl font-semibold">
          <li>🌄 あさ → Morning (Sunrise – ~10 a.m.)</li>
          <li>🌤️ ひる → Midday (~10 a.m. – 2/3 p.m.)</li>
          <li>🌇 ゆうがた → Evening (3/4 p.m. – 7 p.m.)</li>
          <li>🌒 よる → Night (7 p.m. – Sunrise)</li>
        </ul>

        <p class="text-sm italic">
          *あさ and よる are the most common to clarify AM vs PM
        </p>
      </div>

      {/* Asking the Time */}
      <div class="mx-auto mt-20 w-full max-w-3xl space-y-8 px-6 lg:px-12">
        <h2 class="text-center text-3xl font-bold">Asking The Time</h2>

        <h3 class="font-japanese text-3xl font-medium">
          今 (いま) — right now / current time
        </h3>
        <p>To ask “What time is it?”, say:</p>
        <h3 class="font-japanese text-center text-2xl font-semibold">
          いま、なんじですか。
        </h3>

        <div>
          <h3 class="mt-8 mb-2 text-xl font-semibold">
            Scenario 1: Asking for The Time
          </h3>
          <ul class="list-disc space-y-2 pl-6">
            <li>A: いま なんじですか。 → What time is it?</li>
            <li>B: じゅういちじ はんです。 → It’s 11:30.</li>
          </ul>
        </div>

        <div>
          <h3 class="mt-8 mb-2 text-xl font-semibold">
            Scenario 2: Setting a Meeting Time
          </h3>
          <ul class="list-disc space-y-2 pl-6">
            <li>A: かいぎ は なんじですか。 → What time is the meeting?</li>
            <li>B: さんじ はんです。 → It’s at 3:30.</li>
          </ul>
        </div>

        <div>
          <h3 class="mt-8 mb-2 text-xl font-semibold">
            Scenario 3: Scheduling an Appointment
          </h3>
          <ul class="list-disc space-y-2 pl-6">
            <li>
              A: いしゃの よやく は なんじですか。 → What time’s the
              appointment?
            </li>
            <li>B: ごぜん じゅうじです。 → It’s at 10 a.m.</li>
          </ul>
        </div>
      </div>

      {/* Bonus */}
      <div class="mx-auto mt-20 w-full max-w-3xl space-y-6 px-6 lg:px-12">
        <h2 class="text-center text-3xl font-bold italic">
          <span class="not-italic">Bonus</span> — History of Japanese Time
        </h2>
        <YouTubeVideo
          videoId="1BJmnEa6YGE"
          title="Traditional Japanese Time Was Very Different by Linfamy - Nov 21, 2022"
          credit="Linfamy"
        />
      </div>

      {/* Next Lesson Button */}
      <div class="fixed right-10 bottom-10">
        <Link to="/lessons/_chapter-1/practice/telling-time">
          <Button>Next Lesson →</Button>
        </Link>
      </div>
    </div>
  )
}
