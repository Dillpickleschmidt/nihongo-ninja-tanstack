import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
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

export const Route = createFileRoute("/lessons/_chapter-0/hiragana")({
  loader: () => ({
    contentBox: { nextButtonLink: "/vocab?import=hiragana" },
  }),
  component: Hiragana,
})

function Hiragana() {
  return (
    <div class="relative pb-32">
      <span class="pointer-events-none absolute top-8 left-24 sm:top-11 sm:left-auto sm:right-8 select-none font-japanese text-[10rem] sm:text-[11rem] leading-none text-white/[0.03]">
        あ
      </span>
      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>Hiragana</>}
        subtitle="46 characters that each map to exactly one sound."
      >
        <OverviewItem>
          The five vowels that everything else builds on
        </OverviewItem>
        <OverviewItem>
          How consonant + vowel = a row of characters
        </OverviewItem>
        <OverviewItem>
          The few pronunciation quirks worth knowing
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Why this is easier than English */}
        <div class="leading-relaxed text-white/70">
          <SectionLabel>Why this is easier than English</SectionLabel>
          <p class="mt-4">
            If English spelling has ever thrown you off (read vs. read [past
            tense], though vs. through vs. tough), here's the good news:
            Japanese doesn't do that. Every hiragana character maps to exactly
            one sound, every time.
          </p>
        </div>

        {/* The five vowels */}
        <div class="space-y-4">
          <SectionLabel>The five vowels</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Everything starts here. Five short, steady vowels. Keep them crisp:
          </p>
          <GlowBox>
            <div class="grid gap-3 sm:grid-cols-5">
              <VowelCard kana="あ" romaji="a" hint={`"ah" as in father`} />
              <VowelCard kana="い" romaji="i" hint={`"ee" as in machine`} />
              <VowelCard kana="う" romaji="u" hint={`"oo" as in scoop`} />
              <VowelCard kana="え" romaji="e" hint={`"eh" as in bent`} />
              <VowelCard kana="お" romaji="o" hint={`"oh" as in oh`} />
            </div>
          </GlowBox>
          <p class="text-sm text-white/40">
            Every other hiragana character is just a consonant placed in front of
            one of these.
          </p>
        </div>

        {/* Building rows */}
        <div class="space-y-4">
          <SectionLabel>Building rows</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Put a consonant in front of each vowel, and you get a whole row of
            new characters:
          </p>
          <div class="grid gap-3 sm:grid-cols-5">
            <KanaCard kana="か" romaji="ka" hint="car" />
            <KanaCard kana="き" romaji="ki" hint="key" />
            <KanaCard kana="く" romaji="ku" hint="coupon" />
            <KanaCard kana="け" romaji="ke" hint="kept" />
            <KanaCard kana="こ" romaji="ko" hint="corner" />
          </div>
          <p class="text-sm text-white/40">
            That's the whole system. One consonant × five vowels = one row. Do
            this for each consonant and you get all 46 characters.
          </p>
        </div>

        {/* The full chart */}
        <div class="space-y-4">
          <SectionLabel>The full chart</SectionLabel>
          <div class="overflow-x-auto">
            <LeatherKanaChart />
          </div>
        </div>

        {/* Pronunciation quirks */}
        <AsideBlock label="Pronunciation quirks">
          <p class="mt-2 leading-relaxed text-white/70">
            Most characters are exactly what you'd expect. A few aren't:
          </p>
          <div class="mt-3 space-y-1.5 text-sm leading-relaxed text-white/60">
            <p>
              <span class="font-japanese font-semibold text-dynamic-accent">
                し
              </span>{" "}
              → "shi" (not "si")
            </p>
            <p>
              <span class="font-japanese font-semibold text-dynamic-accent">
                ち
              </span>{" "}
              → "chi",{" "}
              <span class="font-japanese font-semibold text-dynamic-accent">
                つ
              </span>{" "}
              → "tsu"
            </p>
            <p>
              <span class="font-japanese font-semibold text-dynamic-accent">
                ふ
              </span>{" "}
              → a soft "fu," like blowing air over the lid of a bottle
            </p>
            <p>
              <span class="font-japanese font-semibold text-dynamic-accent">
                ん
              </span>{" "}
              → the only standalone consonant. Can sound like "n" or "m."
            </p>
            <p>
              <span class="font-japanese font-semibold text-dynamic-accent">
                を
              </span>{" "}
              → written "wo," usually pronounced "o"
            </p>
          </div>
        </AsideBlock>

        {/* Try reading */}
        <div class="space-y-4">
          <SectionLabel>Try reading</SectionLabel>
          <div class="grid gap-4 sm:grid-cols-3">
            <WordCard kana="ねこ" romaji="ne + ko" gloss="cat" />
            <WordCard kana="すし" romaji="su + shi" gloss="sushi" />
            <WordCard kana="はな" romaji="ha + na" gloss="flower" />
          </div>
          <p class="text-sm text-white/40">
            Try these too:{" "}
            <span class="font-japanese text-white/60">
              たこ, うみ, みせ, またね, こころ
            </span>
          </p>
        </div>

        {/* Video */}
        <RevealBlock closedLabel="Feeling nervous about pronunciation?">
          <YouTubeVideo
            videoId="vQFaPMth2kw"
            title="Hiragana in 1 Hour"
            credit="Tamako Sensei"
          />
        </RevealBlock>

        {/* How to learn them */}
        <div class="space-y-4">
          <SectionLabel>How to learn them</SectionLabel>
          <p class="leading-relaxed text-white/70">
            You don't need to memorize the chart right now. When you're ready,
            use{" "}
            <a
              href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              Tofugu's Free Hiragana PDF
            </a>
            . It teaches each character with mnemonics and practice sheets. A
            lot of people get through all 46 in a few days.
          </p>
        </div>

        {/* Additional Resources */}
        <div class="rounded-lg bg-white/[0.03] p-6 ring-1 ring-white/[0.06]">
          <SectionLabel>Additional resources</SectionLabel>
          <div class="mt-4 space-y-3 text-sm">
            <div>
              <a
                href="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png"
                target="_blank"
                class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                Hiragana & Katakana Chart
              </a>
              <p class="mt-0.5 text-white/40">Quick visual reference.</p>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=_wZHqOghvSs"
                target="_blank"
                class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                Learn Hiragana + Katakana in 2 Hours
              </a>
              <p class="mt-0.5 text-white/40">JapanesePod101 on YouTube.</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>Every hiragana = one sound, always</SummaryItem>
          <SummaryItem>
            Five vowels (
            <span class="font-japanese font-semibold text-white/80">
              あいうえお
            </span>
            ) are the foundation
          </SummaryItem>
          <SummaryItem>
            Consonant + vowel = one row of characters
          </SummaryItem>
          <SummaryItem>46 characters total</SummaryItem>
          <SummaryItem>
            A few quirks (
            <span class="font-japanese text-white/80">
              し, ち, つ, ふ, ん, を
            </span>
            ) but the system is consistent
          </SummaryItem>
        </LessonSummary>

        {/* Sensei wisdom */}
        <div class="space-y-5">
          <div class="flex items-center gap-4">
            <img
              src="/img/guru.png"
              alt="sensei"
              class="size-12 rounded-full ring-1 ring-white/10"
            />
            <SectionLabel>A note from Sensei</SectionLabel>
          </div>
          <p class="text-sm leading-relaxed text-white/50 italic">
            Hiragana feels huge at first, but think of it like collecting tea
            cups —{" "}
            <span class="text-white/30">
              *pulls out absolutely massive tea cup set from nowhere*
            </span>{" "}
            — learn a few every day, and before long, you'll have the full set.
          </p>
          <div class="max-w-md">
            <YouTubeVideo
              videoId="GuDyQYkdyio"
              title="Sensei's Wisdom"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const kanaRows: [string, ([string, string] | null)[]][] = [
  ["", [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]]],
  ["k", [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]]],
  ["s", [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]]],
  ["t", [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]]],
  ["n", [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]]],
  ["h", [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]]],
  ["m", [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]]],
  ["y", [["や", "ya"], null, ["ゆ", "yu"], null, ["よ", "yo"]]],
  ["r", [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]]],
  ["w", [["わ", "wa"], null, null, null, ["を", "wo"]]],
  ["", [null, null, ["ん", "n"], null, null]],
]

function LeatherKanaChart() {
  return (
    <div
      class="grid"
      style={{
        "grid-template-columns": "auto repeat(5, minmax(64px, 1fr))",
      }}
    >
      {kanaRows.map((row, rowIdx) => (
        <>
          <div class="flex w-8 items-center justify-end pr-3 text-base text-white/30">
            {row[0]}
          </div>
          {row[1].map((cell, colIdx) => {
            const isDark = (rowIdx + colIdx) % 2 === 0
            return (
              <div
                class="p-3 text-center"
                style={{
                  background: isDark
                    ? "rgba(45, 30, 18, 0.5)"
                    : "rgba(60, 40, 24, 0.35)",
                  "box-shadow": "inset 0 0 0 0.5px rgba(0,0,0,0.3)",
                }}
              >
                {cell ? (
                  <>
                    <p class="font-japanese text-2xl text-white/90">
                      {cell[0]}
                    </p>
                    <p class="text-xs text-white/40">{cell[1]}</p>
                  </>
                ) : null}
              </div>
            )
          })}
        </>
      ))}
    </div>
  )
}

function VowelCard(props: { kana: string; romaji: string; hint: string }) {
  return (
    <div class="text-center">
      <p class="font-japanese text-2xl font-bold text-dynamic-accent">
        {props.kana}{" "}
        <span class="text-base font-normal text-white/50">({props.romaji})</span>
      </p>
      <p class="mt-1 text-xs text-white/40">{props.hint}</p>
    </div>
  )
}

function KanaCard(props: { kana: string; romaji: string; hint: string }) {
  return (
    <div class="rounded-lg bg-white/[0.04] p-4 text-center">
      <p class="font-japanese text-2xl font-bold text-white/90">{props.kana}</p>
      <p class="text-sm font-medium text-white/60">{props.romaji}</p>
      <p class="text-xs text-white/30 italic">{props.hint}</p>
    </div>
  )
}

function WordCard(props: { kana: string; romaji: string; gloss: string }) {
  return (
    <div class="relative">
      <div
        class="absolute -inset-px rounded-xl opacity-10"
        style={{
          background: `linear-gradient(135deg, var(--dynamic-accent), transparent 50%)`,
        }}
      />
      <div class="relative rounded-xl bg-white/[0.04] p-4 text-center backdrop-blur-sm">
        <p class="font-japanese mb-1 text-2xl font-semibold text-white/90">
          {props.kana}
        </p>
        <p class="text-sm text-white/50">{props.romaji}</p>
        <p class="text-sm text-white/70">{props.gloss}</p>
      </div>
    </div>
  )
}
