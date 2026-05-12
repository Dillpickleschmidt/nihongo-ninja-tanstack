import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import Romaji from "@/components/text/Romaji"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import RevealBlock from "@/features/lessons/components/RevealBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-3/kanji-radicals",
)({
  component: KanjiRadicals,
})

function KanjiRadicals() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        部
      </span>

      <LessonHeader
        chapter="Chapter 3 · Writing"
        title={<>Breaking Down Kanji</>}
        subtitle="The ~443 building blocks behind every kanji character."
      >
        <OverviewItem>What radicals are and why they help</OverviewItem>
        <OverviewItem>The 8 positions radicals can appear in</OverviewItem>
        <OverviewItem>214 official + 229 unofficial = 443 parts</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Hook */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            2,136 kanji is a{" "}
            <span class="font-semibold text-foreground dark:text-white/90">lot</span> better than
            50,000 kanji. But what if I told you we can do better? How about:
          </p>

          <p class="text-center text-3xl font-bold text-[#EA5348]">
            ~443 parts
          </p>
          <p class="text-center font-semibold text-foreground/75 dark:text-white/70">
            Seems impossible? Well, read on.
          </p>
        </div>

        {/* Video */}
        <div>
          <YouTubeVideo
            videoId="DRbVBwzc6Ww"
            title="The Anatomy of a Japanese Kanji"
            credit="ToKini Andy"
          />
        </div>

        {/* What are radicals */}
        <div class="space-y-4">
          <SectionLabel>Kanji radicals</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Radicals are the building blocks of kanji. Each kanji is made up of
            one or more radicals, and knowing them gives you clues about a
            kanji's meaning and pronunciation.
          </p>
        </div>

        {/* Semantic Clues */}
        <div class="space-y-4">
          <SectionLabel class="text-[#EA5348]">
            1. Semantic clues
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Radicals often indicate the general meaning of a kanji. For example,
            the radical <span class="font-japanese text-xl text-foreground dark:text-white/90">水</span>{" "}
            means <span class="font-semibold text-foreground dark:text-white/90">water</span> and
            appears in kanji related to liquids, like{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90">泉</span> meaning{" "}
            <span class="font-semibold text-foreground dark:text-white/90">spring</span> or{" "}
            <span class="font-semibold text-foreground dark:text-white/90">fountain</span>.
          </p>
        </div>

        {/* Structural Understanding */}
        <div class="space-y-4">
          <SectionLabel class="text-[#EA5348]">
            2. Structural understanding
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Knowing radicals lets you break down complex kanji into parts you
            recognize. For example, the kanji{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90">働</span> meaning{" "}
            <span class="font-semibold text-foreground dark:text-white/90">work</span> can be broken
            down into the radicals{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90">亻</span> (person)
            and{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90">動</span> (move).
          </p>

          <GlowBox>
            <div class="flex items-center justify-center gap-4 font-japanese text-4xl">
              <Romaji romaji="person">亻</Romaji>
              <span class="text-muted-foreground dark:text-white/40">+</span>
              <Romaji romaji="move">動</Romaji>
              <span class="text-muted-foreground dark:text-white/40">→</span>
              <Romaji romaji="work">働</Romaji>
            </div>
          </GlowBox>

          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *<span class="font-japanese text-lg not-italic">動</span> (move) is
            not a radical, but it is a kanji that can be broken down into other
            radicals.
          </p>
        </div>

        <p class="leading-relaxed text-foreground/75 dark:text-white/70">
          Once you know the common radicals, unfamiliar kanji stop looking
          random.
        </p>

        {/* Types of Radicals */}
        <div class="space-y-4">
          <SectionLabel>Types of kanji radicals</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Kanji radicals are categorized based on their position within a
            kanji:
          </p>
          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *There's no need to memorize the positions, they're just nice to
            know.
          </p>
        </div>

        {/* Radicals Grid */}
        <div class="grid gap-3 sm:grid-cols-2">
          <RadicalCard
            title="Left-hand Radicals"
            jp="Hen (編)"
            description="Radicals positioned on the left side of a kanji."
            examples={["亻 (person)", "扌 (hand)"]}
            appearIn={["何 (what)", "指 (finger)"]}
          />
          <RadicalCard
            title="Right-hand Radicals"
            jp="Tsukuri (旁)"
            description="Radicals found on the right side of a kanji."
            examples={["刂 (knife)", "⻏ (village)"]}
            appearIn={["別 (separate)", "都 (metropolis)"]}
          />
          <RadicalCard
            title="Crown Radicals"
            jp="Kanmuri (冠)"
            description="Radicals placed on top of kanji."
            examples={["宀 (roof)", "⺌ (light rays)"]}
            appearIn={["家 (house)", "堂 (hall)"]}
          />
          <RadicalCard
            title="Legs/Feet Radicals"
            jp="Ashi (脚)"
            description="Radicals placed at the bottom of kanji."
            examples={["儿 (legs)", "灬 (fire sparks)"]}
            appearIn={["兄 (older brother)", "黒 (black)"]}
          />
          <RadicalCard
            title="Enclosure Radicals"
            jp="Kamae (構え)"
            description="Radicals that enclose kanji on at least two sides."
            examples={["門 (gate)", "冂 (box)"]}
            appearIn={["聞 (hear)", "高 (tall/expensive)"]}
          />
          <RadicalCard
            title="Hang-off Radicals"
            jp="Tare (垂れ)"
            description="Radicals that hang over the top and left side of a kanji."
            examples={["广 (house on a cliff)", "尸 (corpse)"]}
            appearIn={["度 (degrees)", "屋 (roof)"]}
          />
          <RadicalCard
            title="Left-to-Bottom Enclosure"
            jp="Nyou (繞)"
            description="Radicals wrapping around left and bottom of kanji."
            examples={["⻌ (road)", "龰 (footsteps)"]}
            appearIn={["運 (carry)", "足 (foot)"]}
          />
          <RadicalCard
            title="Whole Kanji Radicals"
            description="Entire kanji that also serve as radicals."
            examples={["大 (big)", "木 (tree)"]}
            appearIn={["太 (plump)", "森 (forest)"]}
          />
        </div>

        {/* 443 explanation */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            There are 214{" "}
            <span class="font-semibold text-foreground dark:text-white/90">official</span> radicals,
            and James Heisig{" "}
            <span class="text-sm text-muted-foreground dark:text-white/40">
              (author of the book <em>Remembering The Kanji</em>)
            </span>{" "}
            popularized the use of 229 additional{" "}
            <span class="font-semibold text-foreground dark:text-white/90">unofficial</span> radicals
            he calls <em>primitives</em>, totaling 443 essential kanji parts
            you'll need to know to put together almost any kanji word.
          </p>

          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *You'll encounter both the official and RTK radicals in{" "}
            <span class="font-semibold">jpdb.io</span>, with some added tweaks
            that further improve RTK's primitives.
          </p>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            So yeah, technically, there's still over 2,000 kanji to learn if you
            want to match Japanese adults. But after learning these 443
            radicals, all you have to do is mash together what you already know
            to create new kanji. That way, the remaining kanji will come{" "}
            <span class="font-semibold text-foreground dark:text-white/90">much</span> more quickly.
          </p>
        </div>

        {/* Videos */}
        <div class="space-y-4">
          <SectionLabel>How Japanese kids learn kanji</SectionLabel>
          <YouTubeVideo
            videoId="EykWxB_sqOM"
            title="How Japanese Kids Learn Kanji"
            credit="That Japanese Man Yuta"
          />
          <p class="text-sm text-muted-foreground dark:text-white/40">
            This is just to demystify how kids actually learn kanji in Japan.
            However, they have the advantage of already knowing the words, so I
            wouldn't recommend learning in exactly the same way as they do if
            you're going for efficiency.
          </p>
        </div>

        <RevealBlock closedLabel="Can Japanese people actually write kanji?">
          <YouTubeVideo
            videoId="sJNxPRBvRQg"
            title="Can Japanese Actually Write Japanese Kanji?"
            credit="That Japanese Man Yuta"
          />
          <p class="mt-4 text-sm text-muted-foreground dark:text-white/40">
            Fun fact: Remembering how to read kanji is much easier than
            remembering how to write it. Even Japanese people sometimes
            struggle!
          </p>
        </RevealBlock>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Radicals are the building blocks of kanji characters
          </SummaryItem>
          <SummaryItem>
            214 official + 229 unofficial = ~443 parts to learn
          </SummaryItem>
          <SummaryItem>
            Radicals hint at meaning (水 = water-related) and structure
          </SummaryItem>
          <SummaryItem>
            8 positions: left, right, top, bottom, enclosure, hang-off, wrap,
            whole
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function RadicalCard(props: {
  title: string
  jp?: string
  description: string
  examples: string[]
  appearIn: string[]
}) {
  return (
    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
      <p class="font-semibold text-[#EA5348]">{props.title}</p>
      {props.jp && (
        <p class="text-xs text-muted-foreground/70 dark:text-white/30">{props.jp}</p>
      )}
      <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">{props.description}</p>
      <div class="mt-3 space-y-1 text-sm">
        <p class="text-muted-foreground dark:text-white/40">
          <span class="font-semibold text-muted-foreground dark:text-white/60">Examples:</span>{" "}
          <span class="font-japanese text-base">
            {props.examples.join(", ")}
          </span>
        </p>
        <p class="text-muted-foreground dark:text-white/40">
          <span class="font-semibold text-muted-foreground dark:text-white/60">Appear in:</span>{" "}
          <span class="font-japanese text-base">
            {props.appearIn.join(", ")}
          </span>
        </p>
      </div>
    </div>
  )
}
