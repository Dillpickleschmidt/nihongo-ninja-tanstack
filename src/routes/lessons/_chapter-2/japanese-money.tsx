import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-2/japanese-money",
)({
  component: JapaneseMoney,
})

function JapaneseMoney() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        円
      </span>

      <LessonHeader
        chapter="Chapter 2 · Culture"
        title={<>Japanese Money</>}
        subtitle="Enough to read a price tag and buy something."
      >
        <OverviewItem>Japanese coins and bills</OverviewItem>
        <OverviewItem>How prices are written and spoken</OverviewItem>
        <OverviewItem>Common phrases for shopping</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro + Videos */}
        <div class="space-y-4">
          <SectionLabel>Introduction to Japanese currency</SectionLabel>

          <YouTubeVideo
            videoId="Qpp-q_LIPK0"
            title="Japan - How to #17 - Japanese Money"
            credit="TheJapanChannelDcom"
          />
          <YouTubeVideo
            videoId="IleeKRiuQ70"
            title="Comprehensible Japanese (beginner) - Japanese Money 日本のお金　にほんのおかね"
            credit="Nihongo-Learning"
          />

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japan, the currency used is the Japanese{" "}
            <span class="font-semibold text-foreground dark:text-white/90">Yen</span>{" "}
            <span class="text-sm text-muted-foreground dark:text-white/40">
              (pronounced <span class="font-semibold">En</span> in Japanese)
            </span>
            , abbreviated as <span class="font-semibold text-foreground dark:text-white/90">¥</span>{" "}
            or sometimes <span class="font-semibold text-foreground dark:text-white/90">JPY</span>.
            The symbol{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">円</span> (
            <span class="font-japanese">えん</span>) is also commonly used.
          </p>
        </div>

        {/* Coins */}
        <div class="space-y-4">
          <SectionLabel>Coins</SectionLabel>
          <div class="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {[
              {
                src: "/img/chapter-2/japanese-money/1-yen-coin.png",
                label: "¥1",
                alt: "¥1 coin",
              },
              {
                src: "/img/chapter-2/japanese-money/5-yen-coin.png",
                label: "¥5",
                alt: "¥5 coin",
              },
              {
                src: "/img/chapter-2/japanese-money/10-yen-coin.png",
                label: "¥10",
                alt: "¥10 coin",
              },
              {
                src: "/img/chapter-2/japanese-money/50-yen-coin.png",
                label: "¥50",
                alt: "¥50 coin",
              },
              {
                src: "/img/chapter-2/japanese-money/100-yen-coin.png",
                label: "¥100",
                alt: "¥100 coin",
              },
              {
                src: "/img/chapter-2/japanese-money/500-yen-coin.png",
                label: "¥500",
                alt: "¥500 coin",
              },
            ].map((coin) => (
              <div class="flex flex-col items-center">
                <div class="w-full max-w-40">
                  <img
                    src={coin.src}
                    alt={coin.alt}
                    class="aspect-square object-contain"
                  />
                </div>
                <p class="mt-3 text-xl font-bold text-foreground dark:text-white/90">
                  {coin.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bills */}
        <div class="space-y-6">
          <SectionLabel>Bills</SectionLabel>
          <div class="mx-auto flex flex-col items-center space-y-6 lg:w-2/3">
            <img
              src="/img/chapter-2/japanese-money/one-thousand-japanese-yen.jpg"
              alt="One-thousand-yen-note"
              class="overflow-hidden rounded-lg ring-1 ring-border dark:ring-white/10"
            />
            <img
              src="/img/chapter-2/japanese-money/five-thousand-japanese-yen.jpg"
              alt="Five-thousand-yen-note"
              class="overflow-hidden rounded-lg ring-1 ring-border dark:ring-white/10"
            />
            <img
              src="/img/chapter-2/japanese-money/ten-thousand-japanese-yen.jpg"
              alt="Ten-thousand-yen-note"
              class="overflow-hidden rounded-lg ring-1 ring-border dark:ring-white/10"
            />
          </div>
        </div>

        {/* Prices */}
        <div class="space-y-4">
          <SectionLabel>Writing and saying prices</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When writing prices, Japanese people tend to use either the{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">¥</span> in
            front, or{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">円</span>{" "}
            after. When spoken, however, they always use
            <span class="font-semibold text-foreground dark:text-white/90">
              {" "}
              <Furigana furigana={<span class="text-sm">えん</span>}>
                円
              </Furigana>
            </span>
            , the same as saying dollars or cents in English.
          </p>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            While they often use double-width characters in writing, they more
            frequently use single-width digits for prices ([０] vs [0]).
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3 text-center font-japanese text-xl text-foreground dark:text-white/90">
              ¥1,000
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3 text-center font-japanese text-xl text-foreground dark:text-white/90">
              1000円
            </div>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Kanji numbers are rarely used on modern price tags. Most shops
            prefer Arabic numerals, though kanji numbers may still appear in
            traditional stores or cultural contexts.
          </p>
        </div>

        {/* Shop Phrases */}
        <div class="space-y-4">
          <SectionLabel>Common phrases in Japanese shops</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The first thing you might hear when you enter a Japanese shop is:
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                いらっしゃいませ
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Welcome to our store
              </p>
              <p class="mt-1 text-xs text-muted-foreground dark:text-white/40">
                This is the standard greeting when entering many stores.
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">いくらですか</p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">How much is it?</p>
              <p class="mt-2 text-xs text-muted-foreground dark:text-white/40">
                Example:{" "}
                <span class="font-japanese text-sm text-muted-foreground dark:text-white/60">
                  すみません、この
                  <Furigana furigana={<span class="text-[10px]">とけい</span>}>
                    時計
                  </Furigana>
                  はいくらですか。
                </span>
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                これをください
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                I'll take this, please.
              </p>
              <p class="mt-1 text-xs text-muted-foreground dark:text-white/40">
                Use this when you've decided to buy an item.
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                クレジットカードは
                <Furigana furigana={<span class="text-sm">つか</span>}>
                  使
                </Furigana>
                えますか
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Can I use a credit card?
              </p>
              <p class="mt-1 text-xs text-muted-foreground dark:text-white/40">
                Use this to ask if credit cards are accepted.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Japanese currency is the Yen (円 / ¥), no smaller denominations
          </SummaryItem>
          <SummaryItem>
            Coins: ¥1, ¥5, ¥10, ¥50, ¥100, ¥500
          </SummaryItem>
          <SummaryItem>
            Prices written with ¥ before or 円 after, spoken as えん
          </SummaryItem>
          <SummaryItem>
            いくらですか to ask price, これをください to buy
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
