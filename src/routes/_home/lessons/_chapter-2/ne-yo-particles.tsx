// routes/lessons/_chapter-2/ne-yo-particles.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-2/ne-yo-particles")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-2/kikusasaizu-2-2" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Understanding the Particles{" "}
          <span class="font-japanese text-yellow-400">ね</span> and{" "}
          <span class="font-japanese text-green-600">よ</span>
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      <main class="mx-auto max-w-3xl space-y-16 px-6 leading-relaxed">
        {/* Intro */}
        <section class="space-y-6">
          <p>
            In Japanese, the particles{" "}
            <span class="font-japanese text-xl font-semibold text-yellow-400">
              ね
            </span>{" "}
            (ne) and{" "}
            <span class="font-japanese text-xl font-semibold text-green-600">
              よ
            </span>{" "}
            (yo) are essential for conveying nuance and context in
            conversations. These particles help express shared experiences,
            agreement, or new information.
          </p>

          <YouTubeVideo
            videoId="Snk9eCUqJSo"
            title="Using Ending Particle ね in Japanese"
            credit="Kaname Naito"
          />
          <YouTubeVideo
            videoId="T1FfatXVH_U"
            title="How to Use いい"
            credit="Kaname Naito"
            startTime={220}
            timestamps={[
              { label: "using いい", time: 0 },
              { label: "よ・ね particles", time: 220 },
            ]}
          />
        </section>

        {/* The Particle ね */}
        <section>
          <h3 class="text-2xl font-bold">
            The Particle <span class="font-japanese text-yellow-400">ね</span>{" "}
            (ne)
          </h3>
          <p>
            The particle{" "}
            <span class="font-japanese text-xl font-semibold text-yellow-400">
              ね
            </span>{" "}
            is used to confirm shared knowledge, seek agreement, or express
            empathy. It's similar to saying{" "}
            <span class="font-black">isn't it?</span> or{" "}
            <span class="font-black">right?</span> in English.
          </p>
          <ol class="mt-4 ml-6 list-decimal space-y-2">
            <li>
              <span class="font-bold">Confirming Shared Experience:</span>
              <p class="ml-4">
                Use{" "}
                <span class="font-japanese text-xl font-semibold text-yellow-400">
                  ね
                </span>{" "}
                when both you and the listener can perceive the same thing.
              </p>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    このラーメンはおいしいですね。
                  </span>{" "}
                  {"->"} This ramen is tasty, isn't it?
                  <p class="text-muted-foreground text-sm">
                    *Context: You and your friend are both eating the ramen.
                  </p>
                </li>
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    あの
                    <Romaji romaji={<span class="text-sm">movie</span>}>
                      映画
                    </Romaji>
                    は
                    <Romaji
                      romaji={<span class="text-sm">was interesting</span>}
                    >
                      面白かった
                    </Romaji>
                    ね。
                  </span>{" "}
                  (Ano eiga wa omoshirokatta ne.) — That movie was interesting,
                  wasn't it?
                  <p class="text-muted-foreground text-sm">
                    *Context: You watched the movie together and are reflecting.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <span class="font-bold">Discussing the Present Situation:</span>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    <Romaji romaji={<span class="text-sm">today</span>}>
                      今日
                    </Romaji>
                    はいい
                    <Romaji romaji={<span class="text-sm">weather</span>}>
                      天気
                    </Romaji>
                    ですね。
                  </span>{" "}
                  (Kyō wa ii tenki desu ne.) — It's nice weather today, isn't
                  it?
                  <p class="text-muted-foreground text-sm">
                    *Context: Both of you can perceive the weather.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* The Particle よ */}
        <section>
          <h3 class="text-2xl font-bold">
            The Particle <span class="font-japanese text-green-600">よ</span>{" "}
            (yo)
          </h3>
          <p>
            The particle{" "}
            <span class="font-japanese text-xl font-semibold text-green-600">
              よ
            </span>{" "}
            is used to provide new information, assert something with
            confidence, or emphasize a point. It's like saying{" "}
            <span class="font-black">you know</span> or{" "}
            <span class="font-black">I tell you</span> in English.
          </p>
          <ol class="mt-4 ml-6 list-decimal space-y-2">
            <li>
              <span class="font-bold">Providing New Information:</span>
              <p class="ml-4">
                Use{" "}
                <span class="font-japanese text-xl font-semibold text-green-600">
                  よ
                </span>{" "}
                when informing the listener of something they might not know.
              </p>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    これは私の本ですよ。 — This is my book, you know.
                  </span>
                  <p class="text-muted-foreground text-sm">
                    *Context: You assert ownership to someone looking at it.
                  </p>
                </li>
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    その
                    <Romaji romaji={<span class="text-sm">movie</span>}>
                      映画
                    </Romaji>
                    は
                    <Romaji romaji={<span class="text-sm">interesting</span>}>
                      面白い
                    </Romaji>
                    ですよ。
                  </span>{" "}
                  (Sono eiga wa omoshiroi desu yo.) — That movie is interesting,
                  you know.
                  <p class="text-muted-foreground text-sm">
                    *Context: Telling someone who hasn’t seen that film.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Emphasizing a Point:</span>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    いいえ、それは違いますよ。 — No, that’s not correct.
                  </span>
                  <p class="text-muted-foreground text-sm">
                    *Context: Correcting someone’s misunderstanding.
                  </p>
                </li>
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    このレストランは本当にいいですよ。 — This restaurant is
                    really good, you know.
                  </span>
                  <p class="text-muted-foreground text-sm">
                    *Context: Recommending a restaurant to a friend.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* よね */}
        <section>
          <h3 class="text-2xl font-bold">
            Combining <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-green-600">よ</span>:{" "}
            <span class="font-japanese text-orange-500">よね</span> (yone)
          </h3>
          <p>
            When you want to confirm information and seek agreement
            simultaneously, combine{" "}
            <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-green-600">よ</span> into{" "}
            <span class="font-japanese text-orange-500">よね</span> (yone).
          </p>
          <ol class="mt-4 ml-6 list-decimal space-y-2">
            <li>
              <span class="font-bold">Confirming and Seeking Agreement:</span>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    田中さんは
                    <Furigana furigana={<span class="text-sm">がくせい</span>}>
                      学生
                    </Furigana>
                    ですよね。 — Tanaka is a student, right?
                  </span>
                  <p class="text-muted-foreground text-sm">
                    *Context: Confirming with someone who knows Tanaka.
                  </p>
                </li>
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    あの
                    <Romaji romaji={<span class="text-sm">movie</span>}>
                      映画
                    </Romaji>
                    は
                    <Romaji
                      romaji={<span class="text-sm">was interesting</span>}
                    >
                      面白かった
                    </Romaji>
                    ですよね。
                  </span>{" "}
                  (Ano eiga wa omoshirokatta desu yone.) — That movie was
                  interesting, wasn't it?
                  <p class="text-muted-foreground text-sm">
                    *Context: You both watched it and are checking agreement.
                  </p>
                </li>
              </ul>
            </li>
          </ol>

          <p>
            In many cases, choosing between{" "}
            <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-orange-500">よね</span> is just a
            matter of personal choice. You'll develop a natural sense by
            listening.
          </p>
        </section>

        {/* Practice */}
        <section>
          <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
          <p class="text-muted-foreground text-center text-base italic">
            *There may be more than 1 correct answer*
          </p>

          <p>
            Someone points at a library:{" "}
            <span class="font-japanese text-xl">
              あれは
              <Furigana furigana={<span class="text-sm">なん</span>}>
                何
              </Furigana>
              ですか。
            </span>
          </p>
          <p class="text-muted-foreground text-base">* ビル → building</p>
          <p class="text-muted-foreground text-base">
            * 図書館 (としょかん) → library
          </p>
          <SelectText
            answer={["あのビルは図書館ですよ。", "あのビルは図書館です。"]}
            a="あのビルは図書館ですよ。"
            b="あのビルは図書館です。"
            c="あのビルは図書館ですね。"
            d="あのビルは図書館ですよね。"
            class="text-xl"
          />

          <p>Hiking a mountain taking longer than expected:</p>
          <p class="text-muted-foreground text-base">* 山 (やま) → mountain</p>
          <p class="text-muted-foreground text-base">* 高い (たかい) → tall</p>
          <SelectText
            answer={["この山は高いですね。", "この山は高いですよね。"]}
            a="この山は高いですよ。"
            b="この山は高いですね。"
            c="この山は高いですよね。"
            class="text-xl"
          />

          <p>Your friend is unaware of a great café:</p>
          <p class="text-muted-foreground text-base">
            * 本当に (ほんとに) → really
          </p>
          <p class="text-muted-foreground text-base">* いい → good</p>
          <SelectText
            answer="このカフェは本当にいいですよ。"
            a="このカフェは本当にいいですね。"
            b="このカフェは本当にいいですよ。"
            c="このカフェは本当にいいですよね。"
            class="text-xl"
          />

          <p>At a new レストラン, everything's expensive. You’d say:</p>
          <p class="text-muted-foreground text-base">
            * 高い (たかい) → expensive
          </p>
          <SelectText
            answer={[
              "このレストランは高いですね。",
              "このレストランは高いですよね。",
            ]}
            a="このレストランは高いですよ。"
            b="このレストランは高いですね。"
            c="このレストランは高いですよね。"
            class="text-xl"
          />
        </section>

        {/* Summary */}
        <section>
          <h2 class="pt-10 text-center text-2xl font-bold">Summary</h2>
          <ul class="mt-3 ml-6 list-disc space-y-2">
            <li>
              <span class="font-japanese text-yellow-400">ね</span> → confirms
              shared knowledge / seeks agreement
            </li>
            <li>
              <span class="font-japanese text-green-600">よ</span> → gives new
              info / adds emphasis / correction
            </li>
            <li>
              <span class="font-japanese text-orange-500">よね</span> → asserts
              *and* confirms, seeks agreement strongly
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
