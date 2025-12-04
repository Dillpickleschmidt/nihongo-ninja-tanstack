// routes/lessons/japanese-pronunciation.tsx
import KanaChart from "@/components/charts/KanaChart"
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute(
  "/_home/lessons/_chapter-0/japanese-pronunciation",
)({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/writing-systems",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Japanese Pronunciation
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-emerald-400" />
        <p class="text-muted-foreground mb-6 text-lg">
          Simple rules, consistent sounds. Once you get them down, you can
          pronounce any word you see with confidence.
        </p>
        <div class="font-japanese flex justify-center space-x-3 text-xl">
          <span class="rounded-md bg-emerald-500/20 px-3 py-1">あ</span>
          <span class="rounded-md bg-emerald-500/20 px-3 py-1">い</span>
          <span class="rounded-md bg-emerald-500/20 px-3 py-1">う</span>
          <span class="rounded-md bg-emerald-500/20 px-3 py-1">え</span>
          <span class="rounded-md bg-emerald-500/20 px-3 py-1">お</span>
        </div>
      </header>

      <main class="mx-auto max-w-3xl space-y-12 px-6 leading-relaxed">
        {/* Opening Callout */}
        <section class="bg-muted/20 text-muted-foreground rounded-md p-4 text-sm italic">
          If English spelling has ever thrown you off—read vs. read (past
          tense), or though / through / tough—here’s the good news: Japanese
          doesn’t do that. Every character = one sound, every time.
        </section>

        {/* Why It's Simpler */}
        <section>
          <h2 class="mb-3 text-2xl font-semibold">
            Why Pronunciation Seems Hard (But Isn’t)
          </h2>
          <p>
            English makes you deal with silent letters, shifting vowels, and
            words that look identical but sound completely different. It’s no
            wonder learners hesitate.
          </p>
          <p class="mt-4">
            Japanese is designed differently: sounds are predictable. Once you
            learn the handful of rules, you can comfortably rely on them.
          </p>
        </section>

        {/* Vowels + Kana Grid */}
        <section>
          <h2 class="mb-3 text-2xl font-semibold">The Sound System</h2>
          <p class="mb-4">
            Everything starts with five vowels. Put a consonant in front, and
            you have five new valid sounds.
          </p>

          <div class="flex flex-col space-y-8 lg:grid lg:grid-cols-[auto,1fr] lg:gap-12 lg:space-y-0">
            {/* Five Vowels */}
            <section class="rounded-lg p-6">
              <h2 class="mb-3 text-2xl font-semibold">
                The Foundation: Five Vowels
              </h2>
              <p class="mb-4">
                Everything starts with five short, steady vowels. Keep them
                crisp:
              </p>
              <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                <div class="rounded-md bg-emerald-500/15 p-3 text-center">
                  <p class="font-japanese text-xl text-emerald-300">あ (a)</p>
                  <p class="mt-0.5 text-xs text-emerald-200/90">
                    “ah” • father
                  </p>
                </div>
                <div class="rounded-md bg-emerald-500/15 p-3 text-center">
                  <p class="font-japanese text-xl text-emerald-300">い (i)</p>
                  <p class="mt-0.5 text-xs text-emerald-200/90">
                    “ee” • machine
                  </p>
                </div>
                <div class="rounded-md bg-emerald-500/15 p-3 text-center">
                  <p class="font-japanese text-xl text-emerald-300">う (u)</p>
                  <p class="mt-0.5 text-xs text-emerald-200/90">“oo” • scoop</p>
                </div>
                <div class="rounded-md bg-emerald-500/15 p-3 text-center">
                  <p class="font-japanese text-xl text-emerald-300">え (e)</p>
                  <p class="mt-0.5 text-xs text-emerald-200/90">“eh” • bent</p>
                </div>
                <div class="rounded-md bg-emerald-500/15 p-3 text-center">
                  <p class="font-japanese text-xl text-emerald-300">お (o)</p>
                  <p class="mt-0.5 text-xs text-emerald-200/90">“oh” • oh</p>
                </div>
              </div>
            </section>

            {/* Kana Grid */}
            <div class="flex-1 overflow-x-auto">
              <KanaChart type="base-kana" />
            </div>
          </div>

          {/* Bridge explanation text */}
          <p class="text-muted-foreground mt-6 text-sm">
            See how neat this is? Each column is one of those five vowels, and
            each row is a consonant pairing with them. Don't see the pattern? It
            might take a minute to click.
          </p>

          <p class="text-muted-foreground mt-4 text-sm">
            Variations worth noting include: <br />・ し = “shi” not “si”
            <br />・ ち = “chi,” つ = “tsu”
            <br />・ ふ = soft “fu,” like blowing air
            <br />・ を is more often pronounced “o”
            <br />・ ん can be "n" or "m"
          </p>
        </section>

        {/* Wrap-up Confidence Booster */}
        <section class="mt-8">
          <div class="space-y-3 rounded-md border border-green-600/40 bg-green-900/20 p-5">
            <p class="leading-relaxed font-medium text-green-200">
              Look at that — with just these patterns, you can already see what
              makes up most Japanese words. English never gives you this level
              of consistency.
            </p>
            <p class="text-sm text-green-300">
              Don’t worry about memorizing the full chart yet—we're just looking
              at the patterns right now. Now let's take a look at some real
              words.
            </p>
          </div>
        </section>

        {/* Example Words */}
        <section class="space-y-6">
          <h2 class="mb-5 text-2xl font-semibold">
            Let’s put it together{" "}
            <span class="text-muted-foreground ml-3 text-base">
              (Read left to right)
            </span>
          </h2>
          {/* <p class="mb-4">Let’s put it together. Read left to right:</p> */}
          <div class="grid gap-4 sm:grid-cols-3">
            <WordCard jp="ねこ" romaji="ne + ko" gloss="“neh-koh” (cat)" />
            <WordCard jp="すし" romaji="su + shi" gloss="“soo-shee” (sushi)" />
            <WordCard jp="かみ" romaji="ka + mi" gloss="“kah-mee” (paper)" />
          </div>
        </section>

        <p class="text-muted-foreground mx-auto max-w-2xl text-sm">
          In the next lesson, we'll take a look at the major writing systems in
          Japanese, and how they all fit together.
        </p>
      </main>
    </div>
  )
}

/* Word example cards */
function WordCard(props: { jp: string; romaji: string; gloss: string }) {
  return (
    <div class="bg-card/50 font-japanese rounded-lg p-4 text-center">
      <p class="mb-1 text-2xl font-semibold">{props.jp}</p>
      <p class="text-muted-foreground text-sm">{props.romaji}</p>
      <p class="text-sm">{props.gloss}</p>
    </div>
  )
}
