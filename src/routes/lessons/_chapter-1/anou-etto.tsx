// routes/lessons/_chapter-1/filler-words.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"

export const Route = createFileRoute("/lessons/_chapter-1/anou-etto")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/_chapter-1/kikusasaizu-1-1",
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
          <em>Fill</em> the Gaps: Master Your Japanese Filler Words
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      {/* Main content */}
      <main class="mx-auto max-w-3xl space-y-14 px-6 leading-relaxed">
        {/* Intro */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Let&apos;s face it...
          </h2>
          <p>
            No matter what language proficiency level you&apos;re at,
            you&apos;re going to pause, you&apos;re going to hesitate, and
            you&apos;re certainly going to make mistakes. It&apos;s all part of
            the learning process. But what if I told you that there&apos;s a way
            to make even your pauses sound more natural and fluent? That&apos;s
            where filler words come in.
          </p>
          <p class="mt-4">
            Japanese has many common filler words such as{" "}
            <span class="font-japanese text-xl">あのう</span> (anou),{" "}
            <span class="font-japanese text-xl">えっと</span> (etto),{" "}
            <span class="font-japanese text-xl">まあ</span> (maa), and{" "}
            <span class="font-japanese text-xl">そうですね</span> (sou desu ne),
            to name a few. Using these appropriately can help you sound more
            like a native speaker.
          </p>
        </section>

        {/* あのう */}
        <FillerWord
          jp="あのう"
          romaji="anou"
          points={[
            "A very common word used to politely interrupt someone. It's also used when you need to buy time to think, similar to um or uh in English.",
            "Example: あのう、すみません。",
            "Unlike in English, using あのう before asking for help or interrupting someone can actually be polite and considerate, showing that you are being thoughtful.",
          ]}
        />

        {/* えっと */}
        <FillerWord
          jp="えっと"
          romaji="etto"
          points={[
            "A very common filler word to buy time to think, similar to um or uh in English.",
            "Example: えっと、次になにをするべきでしょうか。 -> Well, what should we do next?",
            "あのう is generally used more often than えっと when politely interrupting someone, but both are equally preferred when meaning um/uh. The choice comes down to personal preference.",
          ]}
        />

        {/* まあ */}
        <section>
          <h3 class="font-japanese pt-12 text-3xl font-medium">
            まあ - <span class="font-honk text-4xl">maa</span>
          </h3>
          <ul class="mt-3 list-inside list-disc space-y-2">
            <li>
              Can be used to show hesitation or to soften a statement, as well
              as to express annoyance, resignation, or amazement, depending on
              context and intonation.
            </li>
            <li>
              <span class="font-bold">Annoyance:</span>
            </li>
            <li>
              <span class="font-bold">Resignation:</span>
            </li>
            <li>
              <span class="font-bold">Surprise or Amazement:</span>
            </li>
            <li>
              <span class="font-bold">Hesitation/Softening: </span>
              <span class="font-japanese text-xl">
                まあ、いいんじゃないかな。
              </span>
            </li>
          </ul>
        </section>

        {/* そうですね */}
        <FillerWord
          jp="そうですね"
          romaji="sou desu ne"
          points={[
            "Used to agree with someone or to show you're considering something, similar to 'I see' or 'that's right' in English.",
            "Example: そうですね、そうしましょう。 -> I see, let's do that.",
          ]}
        />

        {/* なんか */}
        <FillerWord
          jp="なんか"
          romaji="nanka"
          points={[
            'Used when you can\'t find the right word, similar to "like" or "you know" in English.',
            "Example: なんか、ちょっと変だね。 -> Like, it's a bit strange, you know.",
          ]}
        />

        {/* Wrap-up */}
        <section>
          <h2 class="pt-6 text-center text-2xl font-semibold">
            Getting a feel for it...
          </h2>
          <p>
            The best way you can learn these words is to listen to lots of
            native material. Watching Japanese content <em>without</em> English
            subtitles is always preferred, but you&apos;ll be able to pick up
            these filler words even with subtitles if you listen/watch enough.
          </p>
        </section>
      </main>
    </div>
  )
}

/* --- Reusable filler word block --- */
function FillerWord(props: { jp: string; romaji: string; points: string[] }) {
  return (
    <section>
      <h3 class="font-japanese pt-12 text-3xl font-medium">
        {props.jp} - <span class="font-honk text-4xl">{props.romaji}</span>
      </h3>
      <ul class="mt-3 list-inside list-disc space-y-2">
        {props.points.map((p) => (
          <li innerHTML={p} />
        ))}
      </ul>
    </section>
  )
}
