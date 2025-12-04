// routes/lessons/_chapter-3/kanji-radicals.tsx
import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import Romaji from "@/components/text/Romaji"

export const Route = createFileRoute("/_home/lessons/_chapter-3/kanji-radicals")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/learn/chapter-3/chapter-1-kanji-part-1",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* --- Simple Header (Chapter 2 style) --- */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Breaking Down Kanji
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-[#EA5348]" />
        <p class="text-muted-foreground text-lg">
          Learning kanji is easier once you understand their building blocks —
          called radicals. Instead of thousands of characters, you only need
          ~443 parts to break most kanji down.
        </p>
      </header>

      {/* --- Main Content --- */}
      <main class="mx-auto max-w-3xl space-y-12 px-6 leading-relaxed">
        <section>
          <p>
            2,136 kanji is a <strong>lot</strong> better than 50,000 kanji. But
            what if I told you we can do better? How about:
          </p>
          <h2 class="mt-3 text-center text-3xl font-bold text-[#EA5348]">
            443 Kanji
          </h2>
          <p class="text-center font-bold">Seems impossible? Well, read on.</p>
        </section>

        <section>
          <YouTubeVideo
            videoId="DRbVBwzc6Ww"
            title="The Anatomy of a Japanese Kanji"
            credit="ToKini Andy"
          />
        </section>

        <section>
          <h2 class="mb-3 text-center text-3xl font-bold text-[#EA5348]">
            Kanji Radicals
          </h2>
          <p>
            Kanji radicals are the building blocks of kanji characters. Think of
            them as the roots or foundational elements that provide meaning and
            structure to kanji. Each kanji is made up of one or more radicals,
            and each radical can give us clues about the kanji&apos;s meaning
            and pronunciation.
          </p>
        </section>

        {/* Semantic Clues */}
        <section>
          <h3 class="text-xl font-semibold text-[#EA5348]">
            1. Semantic Clues
          </h3>
          <ul class="mt-3 ml-9 list-disc space-y-2">
            <li>
              Radicals often indicate the general meaning of a kanji. For
              example, the radical <span class="font-japanese text-xl">水</span>{" "}
              means <strong>water</strong> and appears in kanji related to
              liquids, like <span class="font-japanese text-xl">泉</span>{" "}
              meaning <strong>spring</strong> or <strong>fountain</strong>.
            </li>
          </ul>
        </section>

        {/* Structural Understanding */}
        <section>
          <h3 class="text-xl font-semibold text-[#EA5348]">
            2. Structural Understanding
          </h3>
          <ul class="mt-3 ml-9 list-disc space-y-2">
            <li>
              Knowing radicals helps break down complex kanji into manageable
              parts. This makes it easier to memorize and write kanji correctly.
              For example, the kanji{" "}
              <span class="font-japanese text-xl">働</span> meaning{" "}
              <strong>work</strong> can be broken down into the radicals{" "}
              <span class="font-japanese text-xl">亻</span> (person) and{" "}
              <span class="font-japanese text-xl">動</span> (move).
            </li>
          </ul>
          <div class="mt-4 flex justify-center text-4xl">
            <div class="flex items-center gap-4">
              <Romaji romaji="person">亻</Romaji>
              <span>+</span>
              <Romaji romaji="move">動</Romaji>
              <span>{"->"}</span>
              <Romaji romaji="work">働</Romaji>
            </div>
          </div>
          <p class="text-muted-foreground mt-2 text-base italic">
            *<span class="font-japanese text-lg not-italic">動</span> (move) is
            not a radical, but it is a kanji that can be broken down into other
            radicals.
          </p>
        </section>

        <p>
          By learning radicals, you can make educated guesses about unfamiliar
          kanji, making the learning process more efficient.
        </p>

        {/* Types of Radicals */}
        <section class="space-y-3">
          <h3 class="text-xl font-bold text-[#EA5348]">
            Types of Kanji Radicals
          </h3>
          <p>
            Kanji radicals are categorized based on their position within a
            kanji:
          </p>
          <p class="text-muted-foreground text-base italic">
            *There's no need to memorize the positions, they're just nice to
            know for general reference purposes.
          </p>
        </section>

        {/* Full Radicals List */}
        <ol class="mt-3 ml-6 list-decimal space-y-6 font-semibold">
          <li>
            Left-hand Radicals – Hen (編)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals positioned on the left side of a kanji.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">亻</span> (person),{" "}
                <span class="font-japanese text-2xl">扌</span> (hand)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">何</span> (what),{" "}
                <span class="font-japanese text-2xl">指</span> (finger)
              </li>
            </ul>
          </li>

          <li>
            Right-hand Radicals – Tsukuri (旁)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals found on the right side of a kanji.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">刂</span> (knife),{" "}
                <span class="font-japanese text-2xl">⻏</span> (village)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">別</span> (separate),{" "}
                <span class="font-japanese text-2xl">都</span> (metropolis)
              </li>
            </ul>
          </li>

          <li>
            Crown Radicals – Kanmuri (冠)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals placed on top of kanji.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">宀</span> (roof),{" "}
                <span class="font-japanese text-2xl">⺌</span> (light rays)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">家</span> (house),{" "}
                <span class="font-japanese text-2xl">堂</span> (hall)
              </li>
            </ul>
          </li>

          <li>
            Legs/Feet Radicals – Ashi (脚)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals placed at the bottom of kanji.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">儿</span> (legs),{" "}
                <span class="font-japanese text-2xl">灬</span> (fire sparks)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">兄</span> (older brother),{" "}
                <span class="font-japanese text-2xl">黒</span> (black)
              </li>
            </ul>
          </li>

          <li>
            Enclosure Radicals – Kamae (構え)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals that enclose kanji on at least two sides.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">門</span> (gate),{" "}
                <span class="font-japanese text-2xl">冂</span> (box)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">聞</span> (hear),{" "}
                <span class="font-japanese text-2xl">高</span> (tall/expensive)
              </li>
            </ul>
          </li>

          <li>
            Hang-off Radicals – Tare (垂れ)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals that hang over the top and left side of a kanji.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">广</span> (house on a
                cliff),
                <span class="font-japanese ml-2 text-2xl">尸</span> (corpse)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">度</span> (degrees),{" "}
                <span class="font-japanese text-2xl">屋</span> (roof)
              </li>
            </ul>
          </li>

          <li>
            Left-to-Bottom Enclosure Radicals – Nyou (繞)
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>Radicals wrapping around left and bottom of kanji.</li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">⻌</span> (road),{" "}
                <span class="font-japanese text-2xl">龰</span> (footsteps)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">運</span> (carry),{" "}
                <span class="font-japanese text-2xl">足</span> (foot)
              </li>
            </ul>
          </li>

          <li>
            Whole Kanji Radicals
            <ul class="mt-2 ml-9 list-disc space-y-1 font-normal">
              <li>
                Entire kanji that <strong>also</strong> serve as radicals.
              </li>
              <li>
                <span class="font-semibold">Examples:</span>{" "}
                <span class="font-japanese text-2xl">大</span> (big),{" "}
                <span class="font-japanese text-2xl">木</span> (tree)
              </li>
              <li>
                <span class="font-semibold">Appear in:</span>{" "}
                <span class="font-japanese text-2xl">太</span> (plump),{" "}
                <span class="font-japanese text-2xl">森</span> (forest)
              </li>
            </ul>
          </li>
        </ol>

        <section>
          <p>
            There are 214 <strong>official</strong> radicals, and James Heisig{" "}
            <span class="text-muted-foreground text-base">
              (author of the book <em>Remembering The Kanji</em>)
            </span>{" "}
            popularized the use of 229 additional <strong>unofficial</strong>{" "}
            radicals he calls <em>primitives</em>, totaling 443 essential kanji
            parts you'll need to know to put together almost any kanji word.
          </p>

          <p class="text-muted-foreground mt-2 text-base italic">
            *You'll encounter both the official and RTK radicals in{" "}
            <strong>jpdb.io</strong>, with some added tweaks that further
            improve RTK's primitives.
          </p>

          <p class="mt-4">
            So yeah, technically, there's still over 2,000 kanji to learn if you
            want to match Japanese adults. But after learning these 443
            radicals, all you have to do is mash together what you already know
            to create new kanji. That way, the remaining kanji will come{" "}
            <strong>much</strong> more quickly.
          </p>
        </section>

        {/* Videos */}
        <section class="space-y-8">
          <div>
            <h3 class="pb-2 text-xl font-bold text-[#EA5348]">
              How Japanese Kids Learn Kanji
            </h3>
            <YouTubeVideo
              videoId="EykWxB_sqOM"
              title="How Japanese Kids Learn Kanji"
              credit="That Japanese Man Yuta"
            />
            <p class="text-muted-foreground text-base">
              This is just to demystify how kids actually learn kanji in Japan.
              However, they have the advantage of already knowing the words, so
              I wouldn't recommend learning in exactly the same way as they do
              if you're going for efficiency.
            </p>
          </div>

          <div>
            <h3 class="pb-2 text-xl font-bold text-[#EA5348]">
              Can Japanese People Actually Write Kanji?
            </h3>
            <YouTubeVideo
              videoId="sJNxPRBvRQg"
              title="Can Japanese Actually Write Japanese Kanji?"
              credit="That Japanese Man Yuta"
            />
            <p class="text-muted-foreground text-base">
              Fun fact: Remembering how to read kanji is much easier than
              remembering how to write it. Even Japanese people sometimes
              struggle!
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
