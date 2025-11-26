// routes/lessons/_chapter-2/japanese-money.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-2/japanese-money")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-2/practice-money" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* --- Header --- */}
      <header class="mx-auto max-w-4xl px-6 py-14 text-center">
        <h1 class="mb-3 text-5xl font-extrabold tracking-tight">
          Japanese Money
        </h1>
        <div class="mx-auto mb-6 h-1 w-24 rounded bg-emerald-400" />
      </header>

      <main class="mx-auto max-w-3xl space-y-20 px-6 leading-relaxed">
        {/* Intro + Videos */}
        <section class="mx-auto max-w-xl space-y-8">
          <h2 class="text-center text-3xl font-bold">
            Introduction to Japanese Currency
          </h2>

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

          <p>
            In Japan, the currency used is the Japanese <strong>Yen</strong>{" "}
            <span class="text-muted-foreground text-base">
              (pronounced <strong>En</strong> in Japanese)
            </span>
            , abbreviated as <strong>¥</strong> or sometimes{" "}
            <strong>JPY</strong>. The symbol{" "}
            <span class="font-japanese font-semibold">円</span> (
            <span class="font-japanese">えん</span>) is also commonly used.
          </p>
        </section>

        {/* Coins */}
        <section class="space-y-6">
          <h2 class="text-center text-3xl font-bold">Coins</h2>
          <div class="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {[
              {
                src: "/img/chapter-2/japanese-money/1-yen-coin.png",
                label: "¥1",
              },
              {
                src: "/img/chapter-2/japanese-money/5-yen-coin.png",
                label: "¥5",
              },
              {
                src: "/img/chapter-2/japanese-money/10-yen-coin.png",
                label: "¥10",
              },
              {
                src: "/img/chapter-2/japanese-money/50-yen-coin.png",
                label: "¥50",
              },
              {
                src: "/img/chapter-2/japanese-money/100-yen-coin.png",
                label: "¥100",
              },
              {
                src: "/img/chapter-2/japanese-money/500-yen-coin.png",
                label: "¥500",
              },
            ].map((coin) => (
              <div class="flex flex-col items-center">
                <div class="w-full max-w-40">
                  <img
                    src={coin.src}
                    alt={coin.label}
                    class="aspect-square object-contain"
                  />
                </div>
                <p class="mt-3 text-xl font-bold">{coin.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bills */}
        <section class="space-y-12">
          <h2 class="text-center text-3xl font-bold">Bills</h2>
          <div class="mx-auto flex flex-col items-center space-y-12 lg:w-2/3">
            <img
              src="/img/chapter-2/japanese-money/one-thousand-japanese-yen.jpg"
              alt="One-thousand-yen-note"
              class="overflow-hidden rounded-lg shadow"
            />
            <img
              src="/img/chapter-2/japanese-money/five-thousand-japanese-yen.jpg"
              alt="Five-thousand-yen-note"
              class="overflow-hidden rounded-lg shadow"
            />
            <img
              src="/img/chapter-2/japanese-money/ten-thousand-japanese-yen.jpg"
              alt="Ten-thousand-yen-note"
              class="overflow-hidden rounded-lg shadow"
            />
          </div>
        </section>

        {/* Prices */}
        <section class="space-y-6">
          <h2 class="text-center text-3xl font-bold">
            Writing and Saying Prices
          </h2>
          <p>
            When writing prices, Japanese people tend to use either the{" "}
            <span class="font-japanese font-semibold">¥</span> in front, or{" "}
            <span class="font-japanese font-semibold">円</span> after. When
            spoken, however, they always use
            <span class="font-semibold">
              <Furigana furigana={<span class="text-sm">えん</span>}>
                円
              </Furigana>
            </span>
            , the same as saying dollars or cents in English.
          </p>
          <p>
            While they often use double-width characters in writing, they more
            frequently use single-width digits for prices ([０] vs [0]).
          </p>
          <div class="mt-3 flex justify-center text-xl">
            <ul class="list-disc space-y-2">
              <li>¥1,000</li>
              <li>1000円</li>
            </ul>
          </div>
          <p>
            Kanji numbers are rarely used on modern price tags. Most shops
            prefer Arabic numerals, though kanji numbers may still appear in
            traditional stores or cultural contexts.
          </p>
        </section>

        {/* Shop Phrases */}
        <section class="space-y-8">
          <h2 class="text-center text-3xl font-bold">
            Common Phrases in Japanese Shops
          </h2>
          <p>
            The first thing you might hear when you enter a Japanese shop is:
          </p>

          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">いらっしゃいませ</span> —
            Welcome to our store
          </h3>
          <ul class="ml-6 list-disc">
            <li>This is the standard greeting when entering many stores.</li>
          </ul>

          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">いくらですか</span> — How much
            is it?
          </h3>
          <ul class="ml-6 list-disc">
            <li>Use this to ask the price of an item.</li>
            <li>
              <strong>Example: </strong>
              <span class="font-japanese text-xl">
                すみません、この
                <Furigana furigana={<span class="text-sm">とけい</span>}>
                  時計
                </Furigana>
                はいくらですか。
              </span>
            </li>
          </ul>

          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">これをください</span> — I'll
            take this, please.
          </h3>
          <ul class="ml-6 list-disc">
            <li>Use this when you’ve decided to buy an item.</li>
          </ul>

          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">
              クレジットカードは
              <Furigana furigana={<span class="text-sm">つか</span>}>
                使
              </Furigana>
              えますか
            </span>{" "}
            — Can I use a credit card?
          </h3>
          <ul class="ml-6 list-disc">
            <li>Use this to ask if credit cards are accepted.</li>
          </ul>
        </section>

        {/* Wrap-up */}
        <section>
          <p>
            In the next lesson, we'll practice reading and asking the price of
            items with practical examples.
          </p>
        </section>
      </main>
    </div>
  )
}
