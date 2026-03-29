import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-5/counters")({
  component: Counters,
})

function Counters() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        数
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={<>Counters</>}
        subtitle="Generic counters, ～枚, and how Japanese counts things."
      >
        <OverviewItem>Generic counters with ～つ (1–10)</OverviewItem>
        <OverviewItem>New counter: ～枚 for flat objects</OverviewItem>
        <OverviewItem>Why Japanese always needs a counter</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            It makes sense to get early exposure to these generic counters—
            they're really useful to know, and you'll be using them a lot.
          </p>
        </div>

        {/* Introduction to Generic Counters */}
        <div class="space-y-4">
          <SectionLabel>Introduction to generic counters</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Japanese uses counters to quantify things. While English sometimes
            uses counter words{" "}
            <span class="italic text-white/40">
              (3 <u>sheets</u> of paper, 2 <u>pieces</u> of bread)
            </span>
            , it more often doesn't{" "}
            <span class="italic text-white/40">
              (ex. 4 <u>plates</u>)
            </span>
            . However, Japanese{" "}
            <span class="font-black text-white/90">always</span> uses specific
            counter words to indicate the type or shape of objects being
            counted, with the generic counter <b>～つ</b> as the baseline.
          </p>
          <p class="leading-relaxed text-white/70">
            Generic counters like <b>～つ</b> are versatile and can count many
            types of objects that don't fit neatly into a specific category.
          </p>
        </div>

        {/* Generic Counters Chart */}
        <GenericCounters />

        {/* Example Sentences */}
        <div class="space-y-4">
          <SectionLabel>Example sentences using counters</SectionLabel>
          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                りんごを
                <Furigana furigana={<span class="text-xs">み</span>}>
                  <strong>三</strong>
                </Furigana>
                つ食べました
              </span>
              <span class="ml-3 text-sm text-white/40">
                I ate three apples.
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                <Furigana furigana={<span class="text-xs">かみ</span>}>
                  紙
                </Furigana>
                を
                <Furigana furigana={<span class="text-xs">ごまい</span>}>
                  <strong>五枚</strong>
                </Furigana>
                買いました
              </span>
              <span class="ml-3 text-sm text-white/40">
                I bought five sheets of paper.
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                本を
                <Furigana furigana={<span class="text-xs">ごさつ</span>}>
                  <strong>五冊</strong>
                </Furigana>
                読みました
              </span>
              <span class="ml-3 text-sm text-white/40">
                I read five books.
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                お
                <Furigana furigana={<span class="text-xs">さら</span>}>
                  皿
                </Furigana>
                は<strong>いくつ</strong>ありますか?
              </span>
              <span class="ml-3 text-sm text-white/40">
                How many plates are there?
              </span>
            </div>
          </div>
        </div>

        {/* ～枚 Counter */}
        <div class="space-y-4">
          <SectionLabel>
            New counter: ～<span class="font-japanese text-xs">枚</span>
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            The counter <b>～枚 (まい)</b> is used for counting flat, thin
            objects like paper, tickets, or plates. Unlike <b>～つ</b>, it
            applies to more specific categories of items. Here are a few
            examples:
          </p>
          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                <strong>一枚の紙</strong>
              </span>
              <span class="ml-2 text-sm text-white/40">
                (いちまいのかみ) → one sheet of paper
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                <strong>三枚のチケット</strong>
              </span>
              <span class="ml-2 text-sm text-white/40">
                (さんまいのチケット) → three tickets
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/80">
                <strong>二枚のお皿</strong>
              </span>
              <span class="ml-2 text-sm text-white/40">
                (にまいのおさら) → two plates
              </span>
            </div>
          </div>
        </div>

        {/* English vs Japanese Comparison */}
        <div class="space-y-4">
          <SectionLabel>Comparing counters in English and Japanese</SectionLabel>
          <p class="leading-relaxed text-white/70">
            English sometimes uses counters too, though not as systematically as
            Japanese. For example:
          </p>
          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-sm text-white/60">
              <span class="font-semibold text-white/80">
                Three sheets of paper
              </span>{" "}
              → uses "sheets" as a counter, similar to <b>～枚</b> in Japanese.
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-sm text-white/60">
              <span class="font-semibold text-white/80">
                Two pieces of bread
              </span>{" "}
              → uses "pieces" to indicate the quantity of individual slices. We
              wouldn't say "two breads" or "two bread."
            </div>
          </div>
          <p class="leading-relaxed text-white/70">
            However, unlike Japanese, English often omits the counter
            altogether. For example:
          </p>
          <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-sm text-white/60">
            <em>Two plates</em> doesn't need "sheets" or "pieces" because
            "plates" already conveys the idea.
          </div>
          <p class="leading-relaxed text-white/70">
            In Japanese, you cannot omit the counter. Each number needs one to
            clarify the object's category or type.
          </p>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            ～つ is the generic counter for 1–10 (ひとつ, ふたつ...)
          </SummaryItem>
          <SummaryItem>いくつ = "how many?"</SummaryItem>
          <SummaryItem>
            ～枚 (まい) counts flat/thin objects (paper, tickets, plates)
          </SummaryItem>
          <SummaryItem>
            Japanese always requires a counter — you can't just say a number +
            noun
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function GenericCounters() {
  const items = [
    { kanji: "一つ", reading: "ひとつ", en: "1 thing" },
    { kanji: "二つ", reading: "ふたつ", en: "2 things" },
    { kanji: "三つ", reading: "みつ", en: "3 things" },
    { kanji: "四つ", reading: "よつ", en: "4 things" },
    { kanji: "五つ", reading: "いつつ", en: "5 things" },
    { kanji: "六つ", reading: "むっつ", en: "6 things" },
    { kanji: "七つ", reading: "ななつ", en: "7 things" },
    { kanji: "八つ", reading: "やっつ", en: "8 things" },
    { kanji: "九つ", reading: "ここのつ", en: "9 things" },
    { kanji: "十", reading: "とお", en: "10 things" },
  ]

  return (
    <div class="rounded-lg bg-white/[0.04] p-4">
      <div class="space-y-0">
        {items.map((item) => (
          <div class="flex items-center justify-between border-b border-white/5 py-2">
            <div class="flex gap-6">
              <span class="font-japanese text-xl font-semibold text-white/90 w-12">
                {item.kanji}
              </span>
              <span class="font-japanese text-xl text-white/60">
                {item.reading}
              </span>
            </div>
            <span class="text-sm text-white/40">{item.en}</span>
          </div>
        ))}
        <div class="flex items-center justify-between pt-2">
          <span class="font-japanese text-xl font-semibold text-sky-500">
            いくつ
          </span>
          <span class="text-sm text-white/40">How many?</span>
        </div>
      </div>
    </div>
  )
}
