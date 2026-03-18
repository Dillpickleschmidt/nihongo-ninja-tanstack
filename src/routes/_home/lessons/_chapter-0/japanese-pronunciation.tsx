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
          Five vowels. Predictable consonants. Every character maps to exactly
          one sound.
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
          If English spelling has ever thrown you off (read vs. read [past
          tense], though vs. through vs. tough), here’s the good news: Japanese
          doesn’t do that. Every character is one sound, every time.
        </section>

        {/* Why It's Simpler */}
        <section>
          <h2 class="mb-3 text-2xl font-semibold">How Japanese Sounds Work</h2>
          <p>
            English makes you deal with silent letters, shifting vowels, and
            words that look identical but sound completely different.
          </p>
          <p class="mt-4">
            Japanese works on a grid. Five vowels, a set of consonants, and each
            consonant pairs with each vowel to make a syllable. That’s the whole
            system.
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
            Each column is one of those five vowels, and each row is a consonant
            pairing with them.
          </p>

          <p class="text-muted-foreground mt-4 text-sm">
            Variations worth noting include: <br />・ し = “shi” not “si”
            <br />・ ち = “chi,” つ = “tsu”
            <br />・ ふ = soft “fu,” like blowing air over the lid of a bottle
            <br />・ を is more often pronounced “o”
            <br />・ ん can be "n" or "m"
          </p>
        </section>

        {/* Wrap-up Confidence Booster */}
        <section class="mt-8">
          <div class="space-y-3 rounded-md border border-green-600/40 bg-green-900/20 p-5">
            <p class="leading-relaxed font-medium text-green-200">
              With just these patterns, you can read most of what makes up
              Japanese words. English never gave you anything this consistent.
            </p>
            <p class="text-sm text-green-300">
              You don’t need to memorize the chart yet. We’re just looking at
              patterns. Now let’s try some real words.
            </p>
          </div>
        </section>

        {/* Example Words */}
        <section class="space-y-6">
          <h2 class="mb-5 text-2xl font-semibold">
            Put it together{" "}
            <span class="text-muted-foreground ml-3 text-base">
              (Read left to right)
            </span>
          </h2>
          {/* <p class="mb-4">Let’s put it together. Read left to right:</p> */}
          <div class="grid gap-4 sm:grid-cols-3">
            <WordCard jp="すし" romaji="su + shi" gloss="“soo-shee” (sushi)" />
            <WordCard jp="ねこ" romaji="ne + ko" gloss="“neh-koh” (cat)" />
            <WordCard jp="かみ" romaji="ka + mi" gloss="“kah-mee” (paper)" />
          </div>
        </section>

        <p class="text-muted-foreground mx-auto max-w-2xl text-sm">
          Next up: the major writing systems in Japanese and how they fit
          together.
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
