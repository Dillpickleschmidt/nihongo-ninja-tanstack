import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-5/suki-kirai")({
  component: SukiKirai,
})

function SukiKirai() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        好
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={
          <>
            <span class="font-japanese text-green-400">好き</span> and{" "}
            <span class="font-japanese text-red-400">嫌い</span>
          </>
        }
        subtitle="Likes, dislikes, and why these adjectives are special."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-green-400">好き</span>{" "}
          (like) and{" "}
          <span class="font-japanese font-semibold text-red-400">嫌い</span>{" "}
          (dislike) with が
        </OverviewItem>
        <OverviewItem>Particle switching: が vs は for contrast</OverviewItem>
        <OverviewItem>大好き, 大嫌い, and cultural nuance</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            In Japanese, most adjectives simply describe things (like{" "}
            <span class="font-japanese text-xl">静か</span>/quiet). However,{" "}
            <span class="font-japanese text-xl">好き</span> (like) and{" "}
            <span class="font-japanese text-xl">嫌い</span> (dislike) are
            special, requiring both someone who feels the emotion and something
            that emotion is directed towards.
          </p>

          <GlowBox>
            <div class="space-y-3 text-center">
              <p class="text-xl">
                <span class="text-base font-light text-white/50">
                  (person)
                </span>{" "}
                は{" "}
                <span class="text-base font-light text-white/50">(thing)</span>{" "}
                が{" "}
                <span class="font-medium text-green-400">好き</span>・
                <span class="font-medium text-red-400">嫌い</span>
                です
              </p>
              <p class="text-white/50">
                <span class="text-sm font-light">(person)</span> likes/dislikes{" "}
                <span class="text-sm font-light">(thing)</span>
              </p>
              <p class="text-sm text-white/30">
                Literally: "As for (person), (thing) is likeable/unlikeable"
              </p>
            </div>
          </GlowBox>
        </div>

        {/* Basic Usage */}
        <div class="space-y-4">
          <SectionLabel>Basic usage</SectionLabel>
          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-white/90">
                <span class="text-white/40">(私は)</span>音楽が
                <span class="font-bold text-green-400">好き</span>です。
              </p>
              <p class="mt-1 text-white/50">I like music.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-white/90">
                弟は野菜が
                <span class="font-bold text-red-400">嫌い</span>です。
              </p>
              <p class="mt-1 text-white/50">
                My little brother dislikes vegetables.
              </p>
            </div>
          </div>
        </div>

        {/* Particle Usage */}
        <div class="space-y-4">
          <SectionLabel>Particle usage</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Normal statements use が:
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              <span class="text-white/40">(私は)</span>音楽が好きです。
            </p>
            <p class="mt-1 text-sm text-white/40">I like music</p>
          </div>

          <p class="leading-relaxed text-white/70">
            When contrasting likes/dislikes (for the same person), use は:
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              <span class="text-white/40">(私は)</span>
              スポーツは好きですが、勉強はきらいです。
            </p>
            <p class="mt-1 text-sm text-white/40">
              I like sports, but I hate studying
            </p>
          </div>
          <p class="text-sm italic text-white/40">
            *We'll cover more about using は for comparisons in the next lesson
          </p>
        </div>

        {/* な Noun Modification */}
        <div class="space-y-4">
          <SectionLabel>
            <span class="font-japanese text-xs">な</span> noun modification
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            When describing nouns directly, 好き and 嫌い act like any other
            な-adjective. And like always, don't forget to use な to connect them
            to nouns:
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <div class="space-y-1">
                <p class="flex items-baseline justify-between">
                  <span class="font-japanese text-lg text-white/80">
                    A: 今何聴いてるの？
                  </span>
                  <span class="text-sm text-white/40">
                    What are you listening to now?
                  </span>
                </p>
                <p class="flex items-baseline justify-between">
                  <span class="font-japanese text-lg text-white/80">
                    B: 私の好きな音楽、クラシック。
                  </span>
                  <span class="text-sm text-white/40">
                    My favorite music, classical.
                  </span>
                </p>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <div class="space-y-1">
                <p class="flex items-baseline justify-between">
                  <span class="font-japanese text-lg text-white/80">
                    A: 妹さん、何が嫌い？
                  </span>
                  <span class="text-sm text-white/40">
                    What does your sister dislike?
                  </span>
                </p>
                <p class="flex items-baseline justify-between">
                  <span class="font-japanese text-lg text-white/80">
                    B: 妹の嫌いな食べ物はトマト。
                  </span>
                  <span class="text-sm text-white/40">
                    My sister's least favorite food is tomato.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adding Intensity */}
        <div class="space-y-4">
          <SectionLabel>Adding intensity</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Add 大 (だい) to express stronger feelings:
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              <Furigana furigana={<span class="text-xs">じょうし</span>}>
                上司
              </Furigana>
              は
              <Furigana furigana={<span class="text-xs">ざんぎょう</span>}>
                残業
              </Furigana>
              が<span class="text-green-400">大好き</span>ですが、 私はお金が
              <span class="text-green-400">大好き</span>です。
            </p>
            <p class="mt-1 text-white/50">
              My boss loves overtime, but I love money.
            </p>
          </div>
          <p class="leading-relaxed text-white/70">
            嫌い already has a pretty strong sense of dislike, and can sometimes
            be translated as "hate" without 大. Therefore, adding 大 would be
            reserved for things that you absolutely detest.
          </p>
        </div>

        {/* Being Neutral */}
        <div class="space-y-4">
          <SectionLabel>Being neutral</SectionLabel>
          <div class="rounded-lg bg-white/[0.04] p-4 text-center">
            <p class="font-japanese text-xl text-white/90">
              好き<span class="underline underline-offset-2">でも</span>きらい
              <span class="underline underline-offset-2">でもない</span>です。
            </p>
            <p class="mt-1 text-white/50">
              I neither like nor dislike it.
            </p>
          </div>
        </div>

        {/* Cultural Note */}
        <div class="space-y-4">
          <SectionLabel>Cultural note</SectionLabel>

          <div class="space-y-6 rounded-xl bg-white/[0.04] p-6">
            <div>
              <p class="text-lg font-bold text-white/90">
                好き can be powerful.
              </p>
              <p class="mt-2 leading-relaxed text-white/70">
                When using <span class="font-japanese">好き</span> towards{" "}
                <u>people</u>, it carries stronger feelings than the English
                "like" and almost always implies romantic interest. The 大 isn't
                even needed. Saying "
                <Furigana furigana={<span class="text-[10px]">はるとくん</span>}>
                  大翔君
                </Furigana>
                が好きです" is practically an omission of love to your crush,
                Haruto. If you add 大, you're essentially obsessed with them.
              </p>
            </div>

            <div>
              <p class="text-lg font-bold text-white/90">
                嫌い is kinda harsh.
              </p>
              <div class="mt-2 space-y-3">
                <div class="rounded-lg bg-white/[0.04] p-4">
                  <div class="space-y-1 text-sm leading-relaxed">
                    <p>
                      <span class="font-japanese text-base text-white/80">
                        A：おすしを食べませんか。
                      </span>
                      <span class="ml-2 text-white/40">
                        Do you want to go out and eat sushi?
                      </span>
                    </p>
                    <p>
                      <span class="font-japanese text-base text-white/80">
                        B：いいえ、おすしは好きじゃありません。嫌いです。
                      </span>
                      <span class="ml-2 text-white/40">
                        No I don't like sushi, I hate sushi.
                      </span>
                    </p>
                    <p class="text-white/40">A：... (Silence)</p>
                    <p>
                      <span class="font-japanese text-base text-white/80">
                        B：あ、ごめんね。おすしはちょっと…
                      </span>
                      <span class="ml-2 text-white/40">
                        Oh, sorry. Sushi is just not my thing...
                      </span>
                    </p>
                  </div>
                </div>
                <p class="leading-relaxed text-white/70">
                  Saying such a thing is pretty blunt/rude, and most people
                  would think you don't want to talk anymore after that. It's so
                  blunt that there's really nowhere left for the conversation to
                  go. They might also think you're weird.{" "}
                  <span class="font-japanese">おすしはちょっと…</span> is a
                  better, more socially acceptable answer.
                </p>
                <p class="text-sm text-white/40">
                  You might want to explain why though... I mean, who doesn't
                  like sushi?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            *Choose the correct form for each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "I like sushi"?
              </p>
              <SelectText
                answer="おすしが好きです。"
                a="おすしを好きです。"
                b="おすしが好きです。"
                c="おすしは好きです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You want to say "I like sports but hate studying." Which
                particle pattern is correct?
              </p>
              <SelectText
                answer="スポーツは好きですが、勉強はきらいです。"
                a="スポーツが好きですが、勉強がきらいです。"
                b="スポーツは好きですが、勉強はきらいです。"
                c="スポーツが好きですが、勉強はきらいです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Your teacher asks what kind of books you like. How would you
                describe "books I like"? (ex: the books I like/my favorite books
                are ...)
              </p>
              <SelectText
                answer="私の好きな本"
                a="私の好きの本"
                b="私が好きな本"
                c="私の好きな本"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Your friend really loves cats. They've turned their entire house
                into a cat jungle gym. How would they state their affection for
                cats?
              </p>
              <SelectText
                answer="猫が大好きです。"
                a="猫を大好きです。"
                b="猫が大好きです。"
                c="猫は大好きです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you describe "the movies I like"?
              </p>
              <SelectText
                answer="私の好きな映画"
                a="私の好きの映画"
                b="私が好きな映画"
                c="私の好きな映画"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Someone asks about horror movies, but you feel neutral about
                them. How would you respond?
              </p>
              <SelectText
                answer="好きでもきらいでもないです。"
                a="好きでもきらいでもです。"
                b="好きでもきらいでもないです。"
                c="好きじゃないです。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            (person) は (thing) が 好き/嫌い です
          </SummaryItem>
          <SummaryItem>
            Use が normally, switch to は when contrasting
          </SummaryItem>
          <SummaryItem>
            大好き = love, 大嫌い = absolutely detest
          </SummaryItem>
          <SummaryItem>
            好き towards people implies romantic interest
          </SummaryItem>
          <SummaryItem>
            嫌い is blunt — ちょっと… is softer for declining
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
