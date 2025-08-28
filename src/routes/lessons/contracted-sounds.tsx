// routes/lessons/contracted-sounds.tsx

import { createFileRoute } from "@tanstack/solid-router"
import { ChatBubble } from "@/components/ChatBubble"

export const Route = createFileRoute("/lessons/contracted-sounds")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/vocab?import=contracted-sounds" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Contracted Sounds (拗音, Yōon)
        </h1>
        <div class="mx-auto mb-4 h-1 w-16 rounded bg-fuchsia-400"></div>
        <p class="text-muted-foreground text-lg leading-relaxed">
          In Japanese, some hiragana combine with smaller versions of{" "}
          <span class="font-japanese">や</span>,{" "}
          <span class="font-japanese">ゆ</span>, and{" "}
          <span class="font-japanese">よ</span> to form shortened, smoother
          syllables. These are called <strong>contracted sounds</strong>, or{" "}
          <span class="font-japanese">拗音 (yōon)</span>.
        </p>
      </header>

      <div class="space-y-9 px-8 sm:px-24">
        <h3 class="mt-6 -mb-6 text-center font-semibold">
          Contracted Sounds (拗音, Yōon): The Team-Up in Japanese:
        </h3>
        <div class="flex flex-row items-center justify-center !pb-0">
          <div class="![&>*]:py-0 pr-6 pl-2 text-center text-xl font-bold">
            <em>
              <p>C</p>
              <p>o</p>
              <p>n</p>
              <p>t</p>
              <p>r</p>
              <p>a</p>
              <p>c</p>
              <p>t</p>
              <p>e</p>
              <p>d</p>
              <br />
              <p>S</p>
              <p>o</p>
              <p>u</p>
              <p>n</p>
              <p>d</p>
              <p>s</p>
            </em>
          </div>
          <div>
            <p>
              Some hiragana combine with smaller kana to produce a single,
              smoother sound. Instead of sounding out two separate syllables,
              their voices blend, contracting into one syllable/mora.
            </p>
            <br />
            <p>
              Take <span class="font-japanese">じゃ</span> (<em>ja</em>) for
              example. Here, <span class="font-japanese">じ</span> (<em>ji</em>)
              pairs with a small <span class="font-japanese">ゃ</span> (
              <em>ya</em>). Instead of pronouncing{" "}
              <span class="font-japanese">じや</span> (<em>jiya</em>) in two
              beats, Japanese contracts it into{" "}
              <span class="font-japanese">じゃ</span> (<em>ja</em>). You’ll see
              this often in words like{" "}
              <span class="font-japanese">じゃあね</span> (jaane, “see you”).
            </p>
            <br />
            <p>
              The most common small kana used this way are{" "}
              <span class="font-japanese">ゃ</span>,{" "}
              <span class="font-japanese">ゅ</span>, and{" "}
              <span class="font-japanese">ょ</span>. The reduced size indicates
              their role: they don’t stand alone, but modify the preceding
              syllable to create a new contracted sound. Why are they small?
              Probably because they were willing to reduce their egos for a
              greater cause. Truly, they're like the special agents of the
              Hiragana world, teaming up with others to create these smooth,
              blended sounds.
            </p>
          </div>
        </div>

        {/* Why */}
        <h3 class="text-center text-3xl font-bold">Why These Sounds?</h3>
        <p>
          Contracted sounds make Japanese speech more{" "}
          <strong>efficient and natural</strong>. Instead of longer combinations
          like “ji‑ya,” speakers shorten them to “ja”{" "}
          <span class="text-muted-foreground text-sm">
            (could also be spelled “jya”)
          </span>
          . This keeps the rhythm of spoken Japanese smooth and fluid.
        </p>

        {/* Examples */}
        <div class="mt-6">
          <p class="mb-4 font-medium">Here are a few example words:</p>
          <div class="mx-auto grid max-w-2xl grid-cols-3 gap-x-6 gap-y-2">
            <div>し + ゃ = しゃ</div>
            <div class="font-japanese">しゃしん</div>
            <div class="text-muted-foreground">photograph</div>

            <div>じ + ゅ = じゅ</div>
            <div class="font-japanese">じゅんび</div>
            <div class="text-muted-foreground">preparation</div>

            <div>き + ょ = きょ</div>
            <div class="font-japanese">きょねん</div>
            <div class="text-muted-foreground">last year</div>
          </div>
        </div>

        <ChatBubble
          speaker="sensei"
          text="The more Japanese you hear, the more natural they'll sound."
        />
        <ChatBubble speaker="student" text="Huh, these really aren't so bad." />
      </div>
    </div>
  )
}
