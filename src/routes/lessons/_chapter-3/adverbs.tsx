import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-3/adverbs")({
  component: Adverbs,
})

function Adverbs() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Using <span class="text-sky-400">Adverbs</span> in Japanese
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          Adverbs add detail to sentences by modifying verbs, adjectives, or
          even other adverbs. They can describe how often something happens, the
          degree of intensity, or the manner of an action.
        </p>

        <div class="pt-4">
          <YouTubeVideo
            videoId="Cw1NqcHrVQA"
            title="What's different about Japanese adverbs of frequency and infrequency?"
            credit="ToKini Andy"
          />
        </div>

        {/* <h3 class="!mt-9 text-center text-2xl font-bold">Chapter 3 Adverbs</h3> */}
        <div class="flex w-full justify-center">
          <ul class="ml-6 space-y-2">
            <li>
              <span class="font-japanese text-2xl font-medium">たいてい</span>{" "}
              {"->"} Usually
            </li>
            <li>
              <span class="font-japanese text-2xl font-medium">時々</span>{" "}
              {"->"} Sometimes
            </li>
            <li>
              <span class="font-japanese text-2xl font-medium">よく</span>{" "}
              {"->"} Often
            </li>
            <li>
              <span class="font-japanese text-2xl font-medium">いつも</span>{" "}
              {"->"} Always
            </li>
            <li>
              <span class="font-japanese text-2xl font-medium">ちょっと</span>{" "}
              {"->"} A little
            </li>
            <li>
              <span class="font-japanese text-2xl font-medium">あまり</span>{" "}
              {"->"} Not very
            </li>
            <li>
              <span class="font-japanese text-2xl font-medium">全然</span>{" "}
              {"->"} Not at all
            </li>
          </ul>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Modifying Verbs</h3>
        <p>
          Adverbs modifying verbs can be placed flexibly in the sentence. While
          they often appear immediately before the verb, they can also appear
          anywhere between the topic and the verb.
        </p>
        <div class="space-y-2 text-center">
          <p class="font-japanese text-2xl">
            田中さんは<span class="font-bold text-sky-400">よく</span>
            本を読みます。
          </p>
          <p class="text-lg">
            Tanaka-san reads books <span class="italic">often</span>.
          </p>
          <p class="pt-2 font-japanese text-2xl">
            田中さんは本を<span class="font-bold text-sky-400">よく</span>
            読みます。
          </p>
          <p class="text-lg">
            Tanaka-san <span class="italic">often</span> reads books.
          </p>
        </div>
        <p>
          Both sentences are correct and have the same meaning, with slight
          differences in emphasis, just like English adverb placements.
        </p>

        <h3 class="!mt-9 text-2xl font-bold">Modifying Adjectives</h3>
        <p>
          When an adverb modifies an adjective, it usually appears immediately
          before the adjective. This placement emphasizes or describes the
          degree of the adjective.
        </p>
        <div class="space-y-2 text-center">
          <p class="pt-2 font-japanese text-2xl">
            このケーキは<span class="font-bold text-sky-400">ちょっと</span>
            <Furigana furigana={<span class="text-xs">あま</span>}>甘</Furigana>
            いです。
          </p>
          <p class="text-lg">This cake is a little sweet.</p>
        </div>
        <p class="text-base text-muted-foreground">
          *It's not a hard rule that they must be placed immediately before
          adjectives, but anywhere else would be far less common as it would
          generally add confusion. Just keep in mind that there might be a few
          situations where the adverb could appear slightly earlier.
        </p>

        <h3 class="!mt-9 text-2xl font-bold">
          Special Notes on Negative Adverbs
        </h3>
        <p>
          Adverbs like <span class="font-japanese text-xl">あまり</span> and{" "}
          <span class="font-japanese text-xl">全然</span> are used exclusively
          with negative verbs or adjectives.
        </p>
        <div class="space-y-2 text-center">
          <p class="font-japanese text-2xl">
            アリ君はムスリムだから
            <span class="font-bold text-sky-400">全然</span>
            お酒を飲みません。
          </p>
          <p class="text-lg">
            Ali is Muslim, therefore he doesn't drink at all.
          </p>
          <p class="pt-2 font-japanese text-2xl">
            <span class="font-bold text-sky-400">あまり</span>
            時間がありません。
          </p>
          <p class="text-lg">I don't have much time.</p>
        </div>

        <h4 class="!mt-9 text-2xl font-bold">Common Pitfalls</h4>
        <div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold text-red-500">Incorrect</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl text-muted-foreground">
                私はあまり映画を見ます。
              </span>
            </p>
          </div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold">Correct</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl">
                私はあまり映画を見ません。
              </span>
              {"->"} I rarely see movies.
            </p>
          </div>
          <p class="text-base text-muted-foreground">
            *あまり needs to be followed by a negative form.
          </p>
        </div>

        <div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold text-red-500">Incorrect</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl text-muted-foreground">
                トムさんは全然肉を食べます。
              </span>
            </p>
          </div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold">Correct</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl">
                トムさんは全然肉を食べません。
              </span>
              {"->"} Tom doesn't eat any meat.
            </p>
          </div>
          <p class="text-base text-muted-foreground">
            *<span class="font-japanese">全然</span> needs to be followed by a
            negative form.
          </p>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-24 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct sentence for each question*
        </p>
        <p>How would you say "I sometimes eat cake"?</p>
        <SelectText
          answer="私は時々ケーキを食べます。"
          a="私は全然ケーキを食べます。"
          b="私はたいていケーキを食べます。"
          c="私は時々ケーキを食べます。"
          class="text-xl"
        />

        <p>How would you say "Mr. Yamada never watches movies"?</p>
        <SelectText
          answer="山田さんは映画を全然見ません。"
          a="山田さんは映画を全然見ます。"
          b="山田さんは映画を時々見ます。"
          c="山田さんは映画を全然見ません。"
          class="text-xl"
        />

        <p>How would you say "Ms. Tanaka sometimes eats Japanese food"?</p>
        <SelectText
          answer="田中さんは日本料理を時々食べます。"
          a="田中さんは日本料理を時々食べます。"
          b="田中さんは日本料理をたいてい食べます。"
          c="田中さんは日本料理を全然食べません。"
          class="text-xl"
        />

        <p>How would you say "Mr. Sato doesn’t eat sweets at all"?</p>
        <SelectText
          answer="佐藤さんはお菓子を全然食べません。"
          a="佐藤さんはお菓子を全然食べます。"
          b="佐藤さんはお菓子をたいてい食べます。"
          c="佐藤さんはお菓子を全然食べません。"
          class="text-xl"
        />

        <p>How would you say "I sometimes watch anime"?</p>
        <SelectText
          answer="私はアニメを時々見ます。"
          a="私はアニメをよく見ます。"
          b="私はアニメを時々見ます。"
          c="私はアニメをたいてい見ます。"
          class="text-xl"
        />

        <p>How would you say "Ms. Suzuki usually drinks tea"?</p>
        <SelectText
          answer="鈴木さんはお茶をたいてい飲みます。"
          a="鈴木さんはお茶をぜんぜん飲みません。"
          b="鈴木さんはお茶をたいてい飲みます。"
          c="鈴木さんはお茶を時々飲みます。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
