import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute(
  "/lessons/_chapter-5/wa-comparisons",
)({
  component: WaComparisons,
})

function WaComparisons() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        The Hidden Meaning of <span class="font-japanese text-sky-400">は</span>
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <YouTubeVideo
          videoId="qrjHT8FAuWY"
          title="The difference between は and が particle part 1"
          credit="Miku Real Japanese"
          timestamps={[
            { label: "は vs が", time: 0 },
            { label: "は for comparisons", time: 472 },
          ]}
        />
        <p>
          If you remember from the not-so-distant past, in the が lesson, we
          said we'd look at が again in the future. Well here we are, in the
          future.
        </p>
        <p>
          The above video serves as a great review of が, and also demonstrates
          some ways that that は has an implicit comparison effect. Don't skip
          it.
        </p>

        <h3 class="!mt-9 text-2xl font-bold">
          Understanding Through Literal Translation
        </h3>
        <p>
          First, let's remember the purpose of は: it's for marking a new topic
          being brought up. But if you recall, Japanese speakers will most often
          omit the topic if it's obvious. So what happens if you choose to
          include it anyway?
        </p>
        <p>
          Here, it's actually useful to recall the way は is literally
          translated. Take this statement directed towards a woman:
        </p>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            今日<span class="font-medium text-sky-400">は</span>きれいです
          </p>
          <p class="text-lg">→ "As for today, you're beautiful"</p>
          <p class="">
            "As for today..." <span class="font-black">Today?</span> What about{" "}
            <span class="font-black">yesterday</span>? Saying "as for today"
            sounds rather rude in English, and the woman wouldn't likely take it
            too kindly in Japanese either.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">
          Understanding Through Particles
        </h3>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-lg border p-4">
            <p class="font-japanese text-xl">今日きれいです</p>
            <p class="text-base">→ "You're beautiful today"</p>
            <p class="text-sm text-muted-foreground">neutral statement</p>
          </div>
          <div class="rounded-lg border p-4">
            <p class="font-japanese text-xl">
              今日<span class="font-medium text-sky-400">は</span>きれいです
            </p>
            <p class="text-base">→ "As for today, you're beautiful"</p>
            <p class="text-sm text-muted-foreground">
              implying contrast with other days
            </p>
          </div>
          <div class="rounded-lg border p-4">
            <p class="font-japanese text-xl">
              今日<span class="text-rose-400">が</span>きれいです
            </p>
            <p class="text-base">→ ✗ not grammatical</p>
            <p class="text-sm text-muted-foreground">
              the day itself isn't what's beautiful in this instance
            </p>
          </div>
        </div>
        <p class="!mt-2 text-base text-muted-foreground">
          *Remember, が only marks the subject of a sentence. In this instance,
          きれい is describing the person, not the day.
        </p>

        <p>Compare this with describing weather:</p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-lg border p-4">
            <p class="font-japanese text-xl">今日寒いです</p>
            <p class="text-base">→ "It's cold today"</p>
            <p class="text-sm text-muted-foreground">neutral statement</p>
          </div>
          <div class="rounded-lg border p-4">
            <p class="font-japanese text-xl">
              今日<span class="font-medium text-sky-400">は</span>寒いです
            </p>
            <p class="text-base">→ "As for today, it's cold"</p>
            <p class="text-sm text-muted-foreground">
              implying contrast with other days
            </p>
          </div>
          <div class="rounded-lg border p-4">
            <p class="font-japanese text-xl">
              今日<span class="text-rose-400">が</span>寒いです
            </p>
            <p class="text-base">→ "TODAY is the cold one"</p>
            <p class="text-sm text-muted-foreground">
              technically grammatical but weird*
            </p>
          </div>
        </div>

        <p class="!mt-2 text-base text-muted-foreground">
          *While 今日が寒いです is not grammatically incorrect, you'll likely
          never hear hear it. However, if someone specifically asked "which day
          is cold?", it might make sense to say 今日が寒いです. However, that's
          so contrived that most Japanese speakers would just tell you that
          今日が寒いです is wrong.
        </p>

        <p>This helps us understand why:</p>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            私<span class="font-medium text-sky-400">は</span>猫が好きです
          </p>
          <p class="text-lg">→ "As for me, I like cats"</p>
          <p class="text-base text-muted-foreground">
            Implication: "...but I can't speak for anyone else"
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">
          Multiple は Creates Multiple Contrasts
        </h3>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            私<span class="font-medium text-sky-400">は</span>今日
            <span class="font-medium text-sky-400">は</span>東京へ行きます
          </p>
          <p class="text-lg">→ "As for me, as for today, I'm going to Tokyo"</p>
          <p class="text-base text-muted-foreground">
            Creating contrasts with both other people and other days
          </p>
          <p class="text-base italic text-muted-foreground">
            *Kinda weird, but you might come across something similar.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">
          Using は For Explicit Comparisons
        </h3>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            スポーツ
            <span class="font-medium text-sky-400">は</span>好きですが、 勉強
            <span class="font-medium text-sky-400">は</span>嫌いです
          </p>
          <p class="text-lg">
            → "As for sports I like them, but as for studying I hate it"
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">A more difficult example:</h3>
        <div class="space-y-2">
          <p class="font-japanese text-xl">
            静かな男の人はあまり好きじゃありません。
          </p>
          <p class="text-lg">I don't really like quiet guys.</p>
          <p class="text-base text-muted-foreground">
            In this case, the particle は is used because it sets "quiet men" as
            the topic of the sentence. This use of は often indicates contrast,
            even implicitly. The sentence implies that while the speaker may
            like other types of men or people, they don't particularly like
            "quiet men." This is similar to how は is used in the sentence
            "スポーツは好きですが、勉強はきらいです。" to show a contrast
            between likes and dislikes.
          </p>
          <p class="text-base text-muted-foreground">
            If が were used instead, it would focus specifically on "quiet men"
            as the grammatical subject and would not carry the same contrastive
            or general tone. Thus, は is appropriate here to express a general
            opinion with an implied contrast.
          </p>
          <p class="text-base text-muted-foreground">
            An odd sounding English version that gets closer to the underlying
            meaning of this Japanese sentence would be:
          </p>
          <p class="pl-6 text-base text-muted-foreground">
            Quiet guys? Mmm, I don't really like...
          </p>
          <p class="text-base text-muted-foreground">As compared to:</p>
          <p class="pl-6 text-base text-muted-foreground">
            I don't really like <span class="italic underline">quiet guys</span>
            .
          </p>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>

        <p>
          Your friend looks nice today. How would you compliment them WITHOUT
          implying they usually don't?
        </p>
        <SelectText
          answer="今日きれいですね。"
          a="今日はきれいですね。"
          b="今日きれいですね。"
          c="今日がきれいですね。"
          class="text-xl"
        />
        {/* <p class="text-base text-muted-foreground">
          *Using は would create a contrast with other days. Just 今日 makes it
          a simple statement about today.
        </p> */}

        {/* <p>What does this sentence imply? 「私は魚は食べません。」</p>
        <SelectText
          answer="I don't eat fish (but I might eat other things)"
          a="I don't eat fish (simple statement)"
          b="I don't eat fish (but I might eat other things)"
          c="I don't eat fish (but other people do)"
          class="text-xl"
        />
        <p class="text-base text-muted-foreground">
          *The は after 魚 creates a contrast with other foods, while the first
          は contrasts "me" with others
        </p> */}

        <p>Which sentence is grammatically correct to say "Today is cold"?</p>
        <SelectText
          answer={["今日は寒いです。", "今日が寒いです。"]}
          a="今日は寒いです。"
          b="今日が寒いです。"
          c="今日を寒いです。"
          class="text-xl"
        />
        <p class="text-base text-muted-foreground">
          *Both は and が are grammatical here, but they carry different
          nuances. 99% of the time, 今日は寒いです is the better choice. But
          someone might also ask you "which day is cold?" In that case,
          今日が寒いです might make more sense.
        </p>
      </div>
    </div>
  )
}
