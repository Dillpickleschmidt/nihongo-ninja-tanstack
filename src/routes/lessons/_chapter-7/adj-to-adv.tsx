import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-7/adj-to-adv")({
  component: AdjToAdv,
})

function AdjToAdv() {
  return (
    <div class="mb-32">
      <div class="space-y-6 px-4 sm:px-12 md:px-20">
        <div class="mb-6 mt-28 w-full border-b py-6">
          <h1 class="text-center text-4xl font-semibold">
            Converting Adjectives into Adverbs
          </h1>
        </div>

        <div class="rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
          <p>
            Just like in English where we can turn "quick" into "quickly",
            Japanese lets you turn adjectives into adverbs to describe how
            actions are performed. Each type of adjective has its own conversion
            rule.
          </p>
        </div>
        <div class="space-y-2">
          <p>Part 1:</p>
          <YouTubeVideo
            videoId="VrDWfzfSkpQ"
            title="How to change Adjectives into Adverbial usage of adjective in Japanese (Part1)"
            credit="Miku Real Japanese"
          />
        </div>
        <div class="space-y-2">
          <p>Part 2:</p>
          <YouTubeVideo
            videoId="JLmJJgr-CiY"
            title="How to change Adjectives into Adverbial usage of adjective in Japanese (Part2)"
            credit="Miku Real Japanese"
          />
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          {/* い-Adjectives */}
          <div class="rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6">
            <h2 class="text-center text-2xl font-bold">
              <span class="text-teal-400">い</span>-Adjectives
            </h2>
            <p class="mt-2">Replace い with く</p>

            <div class="mt-4 space-y-4">
              <div class="rounded-lg bg-background/60 p-4">
                <div class="font-japanese text-xl">早い → 早く</div>
                <div class="mt-2 space-y-2">
                  <div class="rounded-lg border px-3 py-2">
                    <p class="font-japanese text-xl">早く起きます。</p>
                    <p class="text-muted-foreground">I wake up early.</p>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-background/60 p-4">
                <div class="font-japanese text-xl">楽しい → 楽しく</div>
                <div class="mt-2 space-y-2">
                  <div class="rounded-lg border px-3 py-2">
                    <p class="font-japanese text-xl">楽しく勉強します。</p>
                    <p class="text-muted-foreground">I study enjoyably.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* な-Adjectives */}
          <div class="rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6">
            <h2 class="text-center text-2xl font-bold">
              <span class="text-yellow-400">な</span>-Adjectives
            </h2>
            <p class="mt-2">Replace な with に</p>

            <div class="mt-4 space-y-4">
              <div class="rounded-lg bg-background/60 p-4">
                <div class="font-japanese text-xl">静か → 静かに</div>
                <div class="mt-2 space-y-2">
                  <div class="rounded-lg border px-3 py-2">
                    <p class="font-japanese text-xl">静かに話します。</p>
                    <p class="text-muted-foreground">I speak quietly.</p>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-background/60 p-4">
                <div class="font-japanese text-xl">上手 → 上手に</div>
                <div class="mt-2 space-y-2">
                  <div class="rounded-lg border px-3 py-2">
                    <p class="font-japanese text-xl">上手に料理を作ります。</p>
                    <p class="text-muted-foreground">I cook skillfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">Common Examples</h2>

          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl font-bold">速く走る</p>
              <p class="text-base">run fast</p>
              <div class="mt-2 rounded-lg border px-3 py-2">
                <p class="font-japanese text-lg">彼は速く走ります。</p>
                <p class="text-sm text-muted-foreground">He runs fast.</p>
              </div>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl font-bold">優しく話す</p>
              <p class="text-base">speak kindly</p>
              <div class="mt-2 rounded-lg border px-3 py-2">
                <p class="font-japanese text-lg">先生は優しく話します。</p>
                <p class="text-sm text-muted-foreground">
                  The teacher speaks kindly.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl font-bold">丁寧に書く</p>
              <p class="text-base">write carefully</p>
              <div class="mt-2 rounded-lg border px-3 py-2">
                <p class="font-japanese text-lg">漢字を丁寧に書きます。</p>
                <p class="text-sm text-muted-foreground">
                  I write kanji carefully.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-japanese text-xl font-bold">自由に話す</p>
              <p class="text-base">speak freely</p>
              <div class="mt-2 rounded-lg border px-3 py-2">
                <p class="font-japanese text-lg">自由に話してください。</p>
                <p class="text-sm text-muted-foreground">
                  Please speak freely.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <div class="rounded-lg bg-gradient-to-br from-yellow-500/10 to-red-500/10 p-6">
          <h2 class="text-center text-2xl font-bold">Important Notes</h2>

          <div class="mt-4 space-y-4">
            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-bold text-red-500">Common Mistake:</p>
              <p class="mt-2">Don't add に to い-adjectives:</p>
              <div class="mt-2 flex w-full items-center">
                <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl line-through">
                    早くに起きます。
                  </span>
                </p>
              </div>
              <div class="flex w-full items-center">
                <p class="w-1/4 font-bold text-green-600">Correct</p>
                <p class="w-3/4">
                  <span class="font-japanese text-xl">早く起きます。</span>
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-background/60 p-4">
              <p class="font-bold">Position in Sentence:</p>
              <p class="mt-2">
                Like in English, adverbs usually come before the verb they
                modify:
              </p>
              <div class="mt-2 space-y-2">
                <div class="rounded-lg border px-3 py-2">
                  <p class="font-japanese text-lg">
                    ゆっくり
                    <span class="underline decoration-green-500">歩きます</span>
                    。
                  </p>
                  <p class="text-sm text-muted-foreground">
                    I walk slowly. (The adverb ゆっくり modifies 歩きます)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>

        <p>How would you say "Please speak slowly"?</p>
        <SelectText
          answer="ゆっくり話してください。"
          a="ゆっくりに話してください。"
          b="ゆっくり話してください。"
          c="ゆっくりな話してください。"
          class="text-xl"
        />

        <p>You want to say "I wake up early"</p>
        <SelectText
          answer="早く起きます。"
          a="早い起きます。"
          b="早くに起きます。"
          c="早く起きます。"
          class="text-xl"
        />

        <p>How would you say "Let's study quietly"?</p>
        <SelectText
          answer="静かに勉強しましょう。"
          a="静かく勉強しましょう。"
          b="静かに勉強しましょう。"
          c="静か勉強しましょう。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
