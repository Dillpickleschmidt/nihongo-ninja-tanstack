import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-5/wa-comparisons")({
  component: WaComparisons,
})

function WaComparisons() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        比
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={
          <>
            The Hidden Meaning of{" "}
            <span class="font-japanese text-sky-400">は</span>
          </>
        }
        subtitle="Why は implies contrast, and how that changes your sentences."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-sky-400">は</span>{" "}
          creates implicit comparisons
        </OverviewItem>
        <OverviewItem>No particle vs は vs が on the same word</OverviewItem>
        <OverviewItem>Using multiple は for explicit contrasts</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Video + Intro */}
        <div class="space-y-4">
          <YouTubeVideo
            videoId="qrjHT8FAuWY"
            title="The difference between は and が particle part 1"
            credit="Miku Real Japanese"
            timestamps={[
              { label: "は vs が", time: 0 },
              { label: "は for comparisons", time: 472 },
            ]}
          />
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            If you remember from the not-so-distant past, in the が lesson, we
            said we'd look at が again in the future. Well here we are, in the
            future.
          </p>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The above video serves as a great review of が, and also
            demonstrates some ways that that は has an implicit comparison
            effect. Don't skip it.
          </p>
        </div>

        {/* Literal Translation */}
        <div class="space-y-4">
          <SectionLabel>Understanding through literal translation</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            First, let's remember the purpose of は: it's for marking a new
            topic being brought up. But if you recall, Japanese speakers will
            most often omit the topic if it's obvious. So what happens if you
            choose to include it anyway?
          </p>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Here, it's actually useful to recall the way は is literally
            translated. Take this statement directed towards a woman:
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              今日<span class="font-medium text-sky-400">は</span>きれいです
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">"As for today, you're beautiful"</p>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            "As for today..."{" "}
            <span class="font-black text-foreground dark:text-white/90">Today?</span> What about{" "}
            <span class="font-black text-foreground dark:text-white/90">yesterday</span>? Saying "as
            for today" sounds rather rude in English, and the woman wouldn't
            likely take it too kindly in Japanese either.
          </p>
        </div>

        {/* Understanding Through Particles */}
        <div class="space-y-4">
          <SectionLabel>Understanding through particles</SectionLabel>
          <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">今日きれいです</p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">"You're beautiful today"</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">neutral statement</p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                今日<span class="font-medium text-sky-400">は</span>きれいです
              </p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">"As for today, you're beautiful"</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                implying contrast with other days
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                今日<span class="text-rose-400">が</span>きれいです
              </p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">✗ not grammatical</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                the day itself isn't what's beautiful in this instance
              </p>
            </div>
          </div>
          <p class="text-sm text-muted-foreground dark:text-white/40">
            *Remember, が only marks the subject of a sentence. In this
            instance, きれい is describing the person, not the day.
          </p>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Compare this with describing weather:
          </p>
          <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">今日寒いです</p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">"It's cold today"</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">neutral statement</p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                今日<span class="font-medium text-sky-400">は</span>寒いです
              </p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">"As for today, it's cold"</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                implying contrast with other days
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                今日<span class="text-rose-400">が</span>寒いです
              </p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">"TODAY is the cold one"</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                technically grammatical but weird*
              </p>
            </div>
          </div>
          <p class="text-sm text-muted-foreground dark:text-white/40">
            *While 今日が寒いです is not grammatically incorrect, you'll likely
            never hear hear it. However, if someone specifically asked "which
            day is cold?", it might make sense to say 今日が寒いです. However,
            that's so contrived that most Japanese speakers would just tell you
            that 今日が寒いです is wrong.
          </p>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            This helps us understand why:
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              私<span class="font-medium text-sky-400">は</span>猫が好きです
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">"As for me, I like cats"</p>
            <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
              Implication: "...but I can't speak for anyone else"
            </p>
          </div>
        </div>

        {/* Multiple は */}
        <div class="space-y-4">
          <SectionLabel>Multiple は creates multiple contrasts</SectionLabel>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              私<span class="font-medium text-sky-400">は</span>今日
              <span class="font-medium text-sky-400">は</span>東京へ行きます
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">
              "As for me, as for today, I'm going to Tokyo"
            </p>
            <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
              Creating contrasts with both other people and other days
            </p>
          </div>
          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *Kinda weird, but you might come across something similar.
          </p>
        </div>

        {/* Explicit Comparisons */}
        <div class="space-y-4">
          <SectionLabel>
            Using <span class="font-japanese text-xs text-sky-400">は</span> for
            explicit comparisons
          </SectionLabel>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              スポーツ
              <span class="font-medium text-sky-400">は</span>好きですが、 勉強
              <span class="font-medium text-sky-400">は</span>嫌いです
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">
              "As for sports I like them, but as for studying I hate it"
            </p>
          </div>
        </div>

        {/* More difficult example */}
        <div class="space-y-4">
          <SectionLabel>A more difficult example</SectionLabel>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              静かな男の人はあまり好きじゃありません。
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">I don't really like quiet guys.</p>
          </div>
          <div class="space-y-3 leading-relaxed text-foreground/75 dark:text-white/70">
            <p>
              In this case, the particle は is used because it sets "quiet men"
              as the topic of the sentence. This use of は often indicates
              contrast, even implicitly. The sentence implies that while the
              speaker may like other types of men or people, they don't
              particularly like "quiet men." This is similar to how は is used
              in the sentence "スポーツは好きですが、勉強はきらいです。" to show
              a contrast between likes and dislikes.
            </p>
            <p>
              If が were used instead, it would focus specifically on "quiet
              men" as the grammatical subject and would not carry the same
              contrastive or general tone. Thus, は is appropriate here to
              express a general opinion with an implied contrast.
            </p>
            <p>
              An odd sounding English version that gets closer to the underlying
              meaning of this Japanese sentence would be:
            </p>
            <p class="pl-6 text-muted-foreground dark:text-white/50">Quiet guys? I don't really like...</p>
            <p>As compared to:</p>
            <p class="pl-6 text-muted-foreground dark:text-white/50">
              I really don't like{" "}
              <span class="italic underline">quiet guys</span>.
            </p>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend looks nice today. How would you compliment them
                WITHOUT implying they usually don't?
              </p>
              <SelectText
                answer="今日きれいですね。"
                a="今日はきれいですね。"
                b="今日きれいですね。"
                c="今日がきれいですね。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Which sentence is grammatically correct to say "Today is cold"?
              </p>
              <SelectText
                answer={["今日は寒いです。", "今日が寒いです。"]}
                a="今日は寒いです。"
                b="今日が寒いです。"
                c="今日を寒いです。"
                class="text-xl"
              />
              <p class="text-sm text-muted-foreground dark:text-white/40">
                *Both は and が are grammatical here, but they carry different
                nuances. 99% of the time, 今日は寒いです is the better choice.
                But someone might also ask you "which day is cold?" In that
                case, 今日が寒いです might make more sense.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            は implicitly contrasts the topic with alternatives
          </SummaryItem>
          <SummaryItem>
            No particle = neutral, は = "as for this (not that)", が = subject
            focus
          </SummaryItem>
          <SummaryItem>
            Multiple は in one sentence = multiple contrasts
          </SummaryItem>
          <SummaryItem>
            Be careful using は with compliments (今日はきれい implies "only
            today")
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
