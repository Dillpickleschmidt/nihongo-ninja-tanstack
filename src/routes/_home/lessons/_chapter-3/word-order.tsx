// routes/lessons/_chapter-3/word-order.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import Romaji from "@/components/text/Romaji"

export const Route = createFileRoute("/_home/lessons/_chapter-3/word-order")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/learn/chapter-3/practice-particles",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div class="space-y-2 pt-8 pl-8">
        <h4 class="text-xl font-medium">Lesson Resources:</h4>
        <ul class="list-inside list-disc">
          <li>
            <a
              class="text-sky-400 underline"
              href="https://8020japanese.com/japanese-word-order/"
              target="_blank"
            >
              Japanese Word Order - 80/20 Japanese
            </a>
          </li>
        </ul>
      </div>

      <h1 class="px-6 pt-6 pb-6 text-center text-4xl font-semibold sm:px-12 sm:pt-12 lg:px-28 lg:pt-24">
        The Flexibility of Japanese Word Order
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          One of the most fascinating aspects of Japanese is its flexible word
          order. Unlike English, where the order of words is crucial for
          conveying meaning, Japanese allows for much more freedom in how you
          arrange your sentence. This flexibility can be both liberating and
          confusing for learners. Let's dive into how Japanese word order works
          and how you can use it effectively.
        </p>

        {/* <YouTubeVideo
          videoId="VIDEO_ID_HERE"
          title="Japanese Basic Sentence Structure"
          credit="Japanese Ammo with Misa"
        /> */}

        <h2 class="text-2xl font-bold">The Basics</h2>
        <p>
          In Japanese, verbs are like the caboose on a train—they always come
          last. Everything else? Feel free to play musical chairs with them.
          This is of course is made possible by particles, those small but
          mighty grammatical markers that show the function of each word in the
          sentence.
        </p>

        <h2 class="text-2xl font-bold">Topic-Comment: A Simple Concept</h2>
        <YouTubeVideo
          videoId="U2q5GsB0swQ"
          title="Basic Sentence Structure in Japanese"
          credit="Kaname Naito"
        />
        <p>
          Here's how it goes: you pick a topic, slap a "は" on it, and then
          comment away. Like this:
        </p>
        <p>
          <span class="font-japanese text-center text-2xl">
            コーヒーはおいしいです。
          </span>
          - <span class="text-xl">Coffee, right? Delicious</span>.
        </p>
        <p>
          In other words, <span class="font-bold italic">coffee</span> is the
          topic, and <span class="font-bold italic">it's delicious</span> is the
          comment. Essentially, you introduce your subject like you're showing
          off your latest gadget, then you give your hot take on it.
        </p>

        <h2 class="text-2xl font-bold">Word Order Patterns</h2>
        <p>
          While word order is flexible, some patterns are more common and
          natural-sounding than others. Here are a few general guidelines:
        </p>
        <ol class="list-decimal space-y-4 pl-6">
          <li>
            <span class="font-semibold">Topic</span> (+
            <span class="font-japanese">は</span>) often comes{" "}
            <strong>first</strong>{" "}
            <span class="text-muted-foreground text-base">
              (if it's even needed)
            </span>
            .
          </li>
          <li>
            <span class="font-semibold">Time expressions</span> often come{" "}
            <strong>early</strong> in the sentence.
          </li>
          <li>
            <span class="font-semibold">Place expressions</span>{" "}
            <strong>often follow</strong> time expressions.
          </li>
          <li>
            <span class="font-semibold">The object</span> (+
            <span class="font-japanese">を</span>) usually comes{" "}
            <span class="font-semibold">before the verb</span>
          </li>
          <li>
            <span class="font-semibold">The verb</span> almost always comes{" "}
            <strong>last</strong>.
          </li>
        </ol>

        <h3 class="text-xl font-semibold">Example:</h3>
        <p class="font-japanese text-xl">私は明日東京でラーメンを食べます。</p>
        <p class="!mt-2">(As for me, I'll eat ramen in Tokyo tomorrow.)</p>

        <p>You could rearrange this to:</p>
        <p class="font-japanese text-xl">明日東京で私はラーメンを食べます。</p>
        <p class="!mt-2">(Tomorrow in Tokyo, I will eat ramen.)</p>

        <p>
          Both are grammatically correct, but the emphasis changes slightly.
        </p>
        <p class="text-muted-foreground mx-6 !mt-4 text-center">
          *Remember, particles pair with the end of nouns. Move the noun, and
          the particle follows.
        </p>

        <h2 class="text-2xl font-bold">Emphasis and New Information</h2>
        <p>
          In Japanese, important or new information tends to be placed closer to
          the end of the sentence, just before the verb. This is different from
          English, where we often emphasize important information by putting it
          at the beginning of a sentence.
        </p>
        <p class="text-muted-foreground text-base">
          *The topic being an exception, which often gets placed first.
        </p>

        <h2 class="text-2xl font-bold">Omission</h2>
        <div>
          <p>
            In conversational Japanese, it's common to omit parts of the
            sentence that are clear from context. This includes topics,
            subjects, objects, and even particles sometimes. For example,
            instead of saying:
          </p>
          <p class="mt-2 ml-2">
            <span class="font-japanese text-xl">
              私はコーヒーが
              <Furigana furigana={<span class="text-sm">す</span>}>好</Furigana>
              きです。
            </span>
            {"->"} I like coffee.
          </p>
          <p class="mt-2">you'd more likely say:</p>
          <p class="mt-2 ml-2">
            <span class="font-japanese text-xl">コーヒーが好きです。</span>
            {"->"} Like coffee.
          </p>
          <p class="mt-2">You might even just say:</p>
          <p class="mt-2 ml-2">
            <span class="font-japanese text-xl">好き。</span>
            {"->"} Like.
          </p>
        </div>

        <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p>Try rearranging these sentences to create different nuances:</p>
        <ol class="list-decimal pl-6">
          <li>
            <p class="font-japanese text-xl">私は毎朝図書館で読みます。</p>
            <p>(I read at the library every morning.)</p>
          </li>
          <li>
            <p class="font-japanese text-xl">
              田中さんは
              <span class="text-center">
                <Romaji romaji="every week">
                  毎
                  <Furigana furigana={<span class="text-sm">しゅう</span>}>
                    週
                  </Furigana>
                </Romaji>
              </span>
              日曜日の
              <Furigana furigana={<span class="text-sm">よる</span>}>
                夜
              </Furigana>
              にアメリカンアイドルを見ます。
            </p>
            <p>(Mr. Tanaka watches American Idol every Sunday evening.)</p>
          </li>
        </ol>
        <p>
          Remember, while these rearrangements are grammatically correct, some
          might sound more natural than others to native speakers.
        </p>

        <YouTubeVideo
          videoId="ed4rmIY4mL0"
          title="【N5】Genki 1 Lesson 3 Grammar Made Clear | ます CONJUGATION SIMPLIFIED"
          credit="ToKini Andy"
          startTime={3091}
          timestamps={[
            { label: "Word Order", time: 3091 },
            { label: "More about は", time: 3360 },
          ]}
        />

        <h2 class="text-2xl font-bold">Conclusion</h2>
        <p>
          Japanese word order flexibility allows for nuanced expression, but it
          can take time to develop an ear for what sounds most natural. Keep
          practicing, listening to native speakers, and don't be afraid to
          experiment with word order in your own Japanese sentences!
        </p>

        <p class="text-base italic">
          If you're looking for an alternative explanation{" "}
          <span class="text-sm">
            (or just want to further improve your understanding of Japanese word
            order and particles)
          </span>
          ,{" "}
          <a
            target="_blank"
            href="https://8020japanese.com/japanese-word-order/"
            class="font-bold text-sky-400 underline"
          >
            this article
          </a>{" "}
          is a great resource.
        </p>
      </div>
    </>
  )
}
