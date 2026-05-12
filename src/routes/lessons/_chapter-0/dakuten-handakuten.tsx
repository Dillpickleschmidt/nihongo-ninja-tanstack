import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import KanaChart from "@/components/charts/KanaChart"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/custom/collapsible"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import RevealBlock from "@/features/lessons/components/RevealBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-0/dakuten-handakuten",
)({

  component: DakutenHandakuten,
})

function DakutenHandakuten() {
  return (
    <div class="relative pb-32">
      <span class="pointer-events-none absolute top-8 left-24 sm:top-11 sm:left-auto sm:right-8 select-none font-japanese text-[10rem] sm:text-[11rem] leading-none text-foreground/[0.04] dark:text-white/[0.03]">
        が
      </span>
      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>Dakuten & Handakuten</>}
        subtitle="Two small marks that add a whole set of new sounds."
      >
        <OverviewItem>
          What dakuten (
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">゛</span>)
          does to a sound
        </OverviewItem>
        <OverviewItem>
          What handakuten (
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">゜</span>)
          does to a sound
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* What are these marks? */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <SectionLabel>What are these marks?</SectionLabel>
          <p class="mt-4">
            Dakuten (
            <span class="font-japanese font-semibold text-dynamic-accent">
              ゛
            </span>
            ) and handakuten (
            <span class="font-japanese font-semibold text-dynamic-accent">
              ゜
            </span>
            ) are small marks added to kana you already know. Between them, they
            open up dozens of new sounds without inventing any new characters.
          </p>
        </div>

        {/* Dakuten — voicing a sound */}
        <div class="space-y-6">
          <SectionLabel>Dakuten — voicing a sound</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Dakuten are two small strokes added to the top-right of a kana. They
            make the sound a little more muffled or dampened
            compared to the sharper base form. "K" sounds become "G" sounds. "S"
            becomes "Z." The base character stays the same.
          </p>

          {/* K → G */}
          <div class="space-y-2">
            <p class="text-sm font-medium text-muted-foreground dark:text-white/40">K → G</p>
            <ComparisonChart
              top={[
                ["か", "ka"],
                ["き", "ki"],
                ["く", "ku"],
                ["け", "ke"],
                ["こ", "ko"],
              ]}
              bottom={[
                ["が", "ga"],
                ["ぎ", "gi"],
                ["ぐ", "gu"],
                ["げ", "ge"],
                ["ご", "go"],
              ]}
            />
          </div>

          {/* S → Z */}
          <div class="space-y-2">
            <p class="text-sm font-medium text-muted-foreground dark:text-white/40">S → Z</p>
            <ComparisonChart
              top={[
                ["さ", "sa"],
                ["し", "shi"],
                ["す", "su"],
                ["せ", "se"],
                ["そ", "so"],
              ]}
              bottom={[
                ["ざ", "za"],
                ["じ", "ji*"],
                ["ず", "zu"],
                ["ぜ", "ze"],
                ["ぞ", "zo"],
              ]}
            />
            <p class="mt-2 text-xs text-muted-foreground/70 dark:text-white/30">
              * じ is pronounced "ji," not "zi"
            </p>
          </div>
        </div>

        {/* Sensei wisdom */}
        <div class="flex gap-5">
          <div class="flex flex-col items-center pt-1">
            <Avatar class="size-9 shrink-0 ring-1 ring-border dark:ring-white/10">
              <AvatarImage src="/img/guru.png" alt="sensei" />
            </Avatar>
            <div
              class="mt-3 w-0.5 flex-1 rounded-full"
              style={{
                "background-color":
                  "color-mix(in srgb, var(--dynamic-accent) 50%, transparent)",
              }}
            />
          </div>
          <div>
            <SectionLabel>A note from Sensei</SectionLabel>
            <p class="mt-3 leading-relaxed text-muted-foreground dark:text-white/50 italic">
              You thought you'd mastered hiragana, and you were feeling pretty
              good about it. Then Japanese taps you on the shoulder and goes,{" "}
              <span class="text-foreground/75 dark:text-white/70">"Not so fast, Squidward."</span>
            </p>
          </div>
        </div>

        {/* Full dakuten chart */}
        <div class="space-y-4">
          <SectionLabel>Full dakuten chart</SectionLabel>
          <div class="overflow-x-auto">
            <KanaChart type="dakuten" />
          </div>
        </div>

        {/* About ぢ and づ */}
        <AsideBlock label="About ぢ and づ">
          <p class="mt-2 leading-relaxed text-foreground/75 dark:text-white/70">
            <span class="font-japanese font-semibold text-dynamic-accent">
              ぢ
            </span>{" "}
            sounds the same as{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">じ</span>,
            and{" "}
            <span class="font-japanese font-semibold text-dynamic-accent">
              づ
            </span>{" "}
            sounds the same as{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">ず</span>.
            You'll rarely see them. When in doubt, use じ and ず.
          </p>
        </AsideBlock>

        {/* Handakuten */}
        <div class="space-y-4">
          <SectionLabel>Handakuten — the は-row only</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Handakuten is a small circle (
            <span class="font-japanese font-semibold text-dynamic-accent">
              ゜
            </span>
            ) that only applies to the H-row. It turns "h" sounds into crisp "p" sounds.
          </p>
        </div>

        {/* Full handakuten chart */}
        <div class="space-y-4">
          <SectionLabel>Full handakuten chart</SectionLabel>
          <div class="overflow-x-auto">
            <KanaChart type="handakuten" />
          </div>
        </div>

        {/* Try it */}
        <div class="space-y-4">
          <SectionLabel>Try it</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Using what you've learned, try to sound out "the po-po have come" in
            hiragana.
          </p>
          <Collapsible>
            <CollapsibleTrigger
              class="rounded-lg bg-card/70 dark:bg-white/[0.06] px-4 py-2 text-sm text-muted-foreground dark:text-white/50 transition-colors hover:bg-card dark:hover:bg-white/[0.1] hover:text-foreground/75 dark:text-white/70"
              chevronEnd
            >
              Reveal answer
            </CollapsibleTrigger>
            <CollapsibleContent class="overflow-hidden data-[closed]:animate-[collapsible-collapse_200ms_ease] data-[expanded]:animate-[collapsible-expand_200ms_ease]">
              <p class="mt-4 font-japanese text-2xl font-bold text-foreground dark:text-white/90">
                づぽぽはぶかむ
              </p>
              <p class="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-white/50">
                This is actually how English words get absorbed into Japanese.
                Words like "Christmas" become{" "}
                <span class="font-japanese text-foreground/75 dark:text-white/70">くりすます</span>,
                "television" becomes{" "}
                <span class="font-japanese text-foreground/75 dark:text-white/70">てれび</span>, and
                "bus" becomes{" "}
                <span class="font-japanese text-foreground/75 dark:text-white/70">ばす</span>. Japanese
                maps foreign sounds onto its own syllable system.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Video */}
        <RevealBlock closedLabel="Feeling nervous about pronunciation?">
          <YouTubeVideo
            videoId="vQFaPMth2kw"
            title="Hiragana in 1 Hour"
            credit="Tamako Sensei"
          />
          <p class="mt-4 text-sm text-muted-foreground dark:text-white/40">
            Trust me, you'll have a much easier time pronouncing Japanese than
            they have pronouncing English.
          </p>
        </RevealBlock>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Dakuten (
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">゛</span>)
            makes a sound more muffled (K→G, S→Z, T→D, H→B)
          </SummaryItem>
          <SummaryItem>
            Handakuten (
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">゜</span>)
            turns H into crisp P sounds
          </SummaryItem>
          <SummaryItem>Only 4 rows use dakuten (K, S, T, H)</SummaryItem>
          <SummaryItem>
            Only the H-row uses handakuten
          </SummaryItem>
        </LessonSummary>

      </div>
    </div>
  )
}

function ComparisonChart(props: {
  top: [string, string][]
  bottom: [string, string][]
}) {
  return (
    <div class="grid grid-cols-5 gap-3">
      {props.top.map(([jp, romaji]) => (
        <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
          <p class="font-noto-sans-jp text-2xl text-muted-foreground dark:text-white/50">{jp}</p>
          <p class="text-xs text-muted-foreground/70 dark:text-white/30">{romaji}</p>
        </div>
      ))}
      {props.bottom.map(([jp, romaji]) => (
        <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
          <p class="font-noto-sans-jp text-2xl text-foreground dark:text-white/90">{jp}</p>
          <p class="text-xs text-muted-foreground dark:text-white/40">{romaji}</p>
        </div>
      ))}
    </div>
  )
}
