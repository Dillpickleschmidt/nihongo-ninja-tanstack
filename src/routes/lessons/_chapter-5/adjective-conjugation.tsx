import { createFileRoute, Link } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"
import {
  StudentBubble,
  SenseiBubble,
} from "@/features/lessons/components/DialogueBubbles"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-5/adjective-conjugation",
)({
  component: AdjectiveConjugation,
})

function AdjectiveConjugation() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        形
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={
          <>
            Japanese Adjectives:{" "}
            <span class="font-japanese text-teal-400">い</span> and{" "}
            <span class="font-japanese text-yellow-400">な</span>
          </>
        }
        subtitle="Two types of adjectives, four conjugations each."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-teal-400">い</span>
          -adjectives and{" "}
          <span class="font-japanese font-semibold text-yellow-400">な</span>
          -adjectives
        </OverviewItem>
        <OverviewItem>Present and past tense conjugation</OverviewItem>
        <OverviewItem>Special cases: いい, きれい, 嫌い</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            Japanese adjectives come in two varieties - each type follows its
            own rules for conjugation and modifying nouns.
          </p>
        </div>

        {/* Overview Chart */}
        <GlowBox>
          <div class="flex justify-around gap-4 font-japanese text-lg lg:text-xl">
            <div class="flex flex-col items-start space-y-1">
              <div class="mb-2 w-full text-center font-bold">
                <span class="font-japanese text-teal-400">い</span>-Adjectives
              </div>
              <div>
                寒い<span class="font-medium text-teal-400">です</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">くないです</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">かったです</span>
              </div>
              <div>
                寒
                <span class="font-medium text-teal-400">くなかったです</span>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-1">
              <div class="mb-2 w-full text-center font-bold">
                <span class="font-japanese text-yellow-400">な</span>
                -Adjectives
              </div>
              <div>
                静か<span class="font-medium text-yellow-400">です</span>
              </div>
              <div>
                静か
                <span class="font-medium text-yellow-400">じゃないです</span>
              </div>
              <div>
                静か<span class="font-medium text-yellow-400">でした</span>
              </div>
              <div>
                静か
                <span class="font-medium text-yellow-400">
                  じゃなかったです
                </span>
              </div>
            </div>
          </div>
        </GlowBox>

        <div>
          <YouTubeVideo
            videoId="SAXtJwgj71U"
            title="The Most Common Mistake for Japanese Beginners"
            credit="ToKini Andy"
          />
        </div>

        {/* Adjective Types */}
        <div class="grid gap-4 md:grid-cols-2">
          <div class="relative rounded-xl bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-teal-500/15 before:to-transparent before:content-['']">
            <h2 class="text-xl font-bold">
              <span class="text-teal-400">い</span>-Adjectives
            </h2>
            <div class="mt-3 grid grid-cols-3 gap-3">
              <div class="rounded-lg bg-white/[0.04] p-3 text-center">
                <span class="font-japanese text-lg text-white/90">高い</span>
                <p class="text-sm text-white/40">tall</p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-3 text-center">
                <span class="font-japanese text-lg text-white/90">安い</span>
                <p class="text-sm text-white/40">cheap</p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-3 text-center">
                <span class="font-japanese text-lg text-white/90">寒い</span>
                <p class="text-sm text-white/40">cold</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-xl bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-yellow-500/15 before:to-transparent before:content-['']">
            <h2 class="text-xl font-bold">
              <span class="text-yellow-400">な</span>-Adjectives
            </h2>
            <div class="mt-3 grid grid-cols-3 gap-3">
              <div class="rounded-lg bg-white/[0.04] p-3 text-center">
                <span class="font-japanese text-lg text-white/90">静か</span>
                <p class="text-sm text-white/40">quiet</p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-3 text-center">
                <span class="font-japanese text-lg text-white/90">元気</span>
                <p class="text-sm text-white/40">healthy, energetic</p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-3 text-center">
                <span class="font-japanese text-lg text-white/90">*きれい</span>
                <p class="text-sm text-white/40">beautiful, clean</p>
              </div>
            </div>
            <p class="mt-3 text-sm text-white/40">
              Fun fact: many な-adjectives originally come from China/other
              countries.
            </p>
          </div>
        </div>

        {/* Present Tense */}
        <div class="space-y-4">
          <SectionLabel>Present tense conjugation</SectionLabel>

          <div class="grid gap-4 md:grid-cols-2">
            {/* い Present */}
            <div class="space-y-3 relative rounded-xl bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-teal-500/15 before:to-transparent before:content-['']">
              <h3 class="text-xl font-bold">
                <span class="text-teal-400">い</span>-Adjectives
              </h3>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-green-500">+</span>
                  <span class="font-semibold text-white/90">Positive:</span>
                  <span class="text-sm text-white/60">
                    Just add です (for polite form)
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  寒い → 寒い
                  <span class="font-medium text-teal-400">です</span>
                </p>
                <p class="mt-1 text-sm text-white/40">It's cold</p>
              </div>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-red-500">-</span>
                  <span class="font-semibold text-white/90">Negative:</span>
                  <span class="text-sm text-white/60">
                    Replace い with くない
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  寒い → 寒
                  <span class="font-medium text-teal-400">くないです</span>
                </p>
                <p class="mt-1 text-sm text-white/40">It's not cold</p>
                <p class="mt-2 text-sm text-white/30">
                  Extra formal:{" "}
                  <span class="font-japanese">寒くありません</span>
                </p>
              </div>
            </div>

            {/* な Present */}
            <div class="space-y-3 relative rounded-xl bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-yellow-500/15 before:to-transparent before:content-['']">
              <h3 class="text-xl font-bold">
                <span class="text-yellow-400">な</span>-Adjectives
              </h3>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-green-500">+</span>
                  <span class="font-semibold text-white/90">Positive:</span>
                  <span class="text-sm text-white/60">
                    Just add です (for polite form)
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">です</span>
                </p>
                <p class="mt-1 text-sm text-white/40">I'm healthy</p>
              </div>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-red-500">-</span>
                  <span class="font-semibold text-white/90">Negative:</span>
                  <span class="text-sm text-white/60">Add じゃない</span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">じゃないです</span>
                </p>
                <p class="mt-1 text-sm text-white/40">I'm not healthy</p>
                <p class="mt-2 text-sm text-white/30">
                  Extra formal:{" "}
                  <span class="font-japanese">元気ではありません</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Past Tense */}
        <div class="space-y-4">
          <SectionLabel>Past tense conjugation</SectionLabel>

          <div class="grid gap-4 md:grid-cols-2">
            {/* い Past */}
            <div class="space-y-3 relative rounded-xl bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-teal-500/15 before:to-transparent before:content-['']">
              <h3 class="text-xl font-bold">
                <span class="text-teal-400">い</span>-Adjectives
              </h3>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-green-500">+</span>
                  <span class="font-semibold text-white/90">Positive:</span>
                  <span class="text-sm text-white/60">
                    Replace い with かった
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  寒い → 寒
                  <span class="font-medium text-teal-400">かったです</span>
                </p>
                <p class="mt-1 text-sm text-white/40">It was cold</p>
              </div>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-red-500">-</span>
                  <span class="font-semibold text-white/90">Negative:</span>
                  <span class="text-sm text-white/60">
                    Replace い with くなかった
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  寒い → 寒
                  <span class="font-medium text-teal-400">くなかったです</span>
                </p>
                <p class="mt-1 text-sm text-white/40">It wasn't cold</p>
                <p class="mt-2 text-sm text-white/30">
                  Extra formal:{" "}
                  <span class="font-japanese">寒くありませんでした</span>
                </p>
                <div class="mt-3 border-t border-white/5 pt-3 text-sm leading-relaxed text-white/60">
                  <p>
                    Another way to think about past tense negative conjugation
                    is to stack the present-negative with the past-positive.
                  </p>
                  <p class="mt-1">
                    (寒い → 寒
                    <span class="font-medium text-teal-400">くない</span>)
                  </p>
                  <p class="mt-1">
                    Then use the past tense positive rule on the い of{" "}
                    <span class="text-nowrap font-medium text-teal-400">
                      くない
                    </span>
                    :
                  </p>
                  <p class="mt-1">
                    寒くない → 寒くな
                    <span class="font-medium text-teal-400">かった</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* な Past */}
            <div class="space-y-3 relative rounded-xl bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-yellow-500/15 before:to-transparent before:content-['']">
              <h3 class="text-xl font-bold">
                <span class="text-yellow-400">な</span>-Adjectives
              </h3>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-green-500">+</span>
                  <span class="font-semibold text-white/90">Positive:</span>
                  <span class="text-sm text-white/60">
                    Replace です with でした
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">でした</span>
                </p>
                <p class="mt-1 text-sm text-white/40">I was healthy</p>
              </div>

              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="flex items-center gap-2">
                  <span class="text-2xl font-bold text-red-500">-</span>
                  <span class="font-semibold text-white/90">Negative:</span>
                  <span class="text-sm text-white/60">
                    Replace です with じゃなかったです
                  </span>
                </div>
                <p class="mt-3 font-japanese text-lg text-white/80">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">
                    じゃなかったです
                  </span>
                </p>
                <p class="mt-1 text-sm text-white/40">I wasn't healthy</p>
                <p class="mt-2 text-sm text-white/30">
                  Extra formal:{" "}
                  <span class="font-japanese">元気ではありませんでした</span>
                </p>
                <div class="mt-3 border-t border-white/5 pt-3 text-sm leading-relaxed text-white/60">
                  <p>
                    Another way to think about past tense negative conjugation
                    is to stack the present-negative with the past-positive.
                  </p>
                  <p class="mt-1">
                    (元気 → 元気
                    <span class="font-medium text-yellow-400">じゃない</span>)
                  </p>
                  <p class="mt-1">
                    Treat じゃない like an い-adj to use the past tense positive
                    rule on the い of{" "}
                    <span class="text-nowrap font-medium text-teal-400">
                      じゃない
                    </span>
                    :
                  </p>
                  <p class="mt-1">
                    元気じゃない → 元気じゃな
                    <span class="font-medium text-teal-400">かった</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning: Not all い words */}
        <AsideBlock label="Not all words ending in い are い-adjectives!">
          <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-white/60">
            <li>
              <span class="font-japanese text-white/80">きれい</span> (pretty)
              → な-adjective
            </li>
            <li>
              <span class="font-japanese text-white/80">嫌い</span> (dislike) →
              な-adjective
            </li>
          </ul>
          <p class="mt-3 text-sm leading-relaxed text-white/60">
            You'll just have to memorize which words are い-adjectives and which
            are な-adjectives. If it doesn't end in い, you can at least safely
            say it's not an い-Adjective.
          </p>
        </AsideBlock>

        {/* Special: いい */}
        <div class="space-y-4">
          <SectionLabel>Special note about いい (good)</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Pro tip: <span class="font-japanese">いい</span> is actually the
            conversational, plain form of{" "}
            <span class="font-japanese">良い</span> (よい). Why does this
            matter? Because all conjugations use よ- as the base:
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm text-white/40">Present</p>
              <p class="mt-1 font-japanese text-lg text-white/80">
                いい / よい
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm text-white/40">Negative</p>
              <p class="mt-1 font-japanese text-lg text-white/80">よくない</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm text-white/40">Past</p>
              <p class="mt-1 font-japanese text-lg text-white/80">よかった</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm text-white/40">Past Negative</p>
              <p class="mt-1 font-japanese text-lg text-white/80">
                よくなかった
              </p>
            </div>
          </div>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-white/50 line-through">
                天気はいくないです。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-white/80">
                天気は
                <Furigana furigana={<span class="text-xs">よ</span>}>
                  良
                </Furigana>
                くないです。
              </p>
              <p class="mt-1 text-sm text-white/40">
                The weather isn't good.
              </p>
            </div>
          </div>
        </div>

        {/* Dialogue */}
        <div class="space-y-5">
          <StudentBubble>
            Why are な-adjectives called な-adjectives? I don't see any なs
            being used!
          </StudentBubble>
          <SenseiBubble>
            <p>
              You'll see in the next lesson where you'll learn to{" "}
              <Link
                to="/lessons/adj-modifying-nouns"
                class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                modify nouns
              </Link>{" "}
              with adjectives!
            </p>
          </SenseiBubble>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            *Choose the correct answer in each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "This movie is interesting"?
              </p>
              <SelectText
                answer="この映画はおもしろいです。"
                a="この映画はおもしろです。"
                b="この映画はおもしろいだ。"
                c="この映画はおもしろいです。"
                d="この映画はおもしろでした。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "That room isn't quiet"?
              </p>
              <SelectText
                answer="あの部屋は静かじゃないです。"
                a="あの部屋は静かじゃです。"
                b="あの部屋は静かくないです。"
                c="あの部屋は静かじゃないです。"
                d="あの部屋は静かではないです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "Today is cold"?
              </p>
              <SelectText
                answer="今日は寒いです。"
                a="今日は寒です。"
                b="今日は寒いだ。"
                c="今日は寒いです。"
                d="今日は寒でした。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                If something was cold yesterday, how would you say it?
              </p>
              <SelectText
                answer="寒かったです。"
                a="寒いでした。"
                b="寒かったです。"
                c="寒いました。"
                d="寒でした。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "I'm not busy today"?
              </p>
              <SelectText
                answer="今日は忙しくないです。"
                a="今日は忙しいじゃないです。"
                b="今日は忙しくないです。"
                c="今日は忙しないです。"
                d="今日は忙しではないです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "That person wasn't kind"?
              </p>
              <SelectText
                answer="あの人は親切じゃなかったです。"
                a="あの人は親切くなかったです。"
                b="あの人は親切じゃなかったです。"
                c="あの人は親切でわなかったです。"
                d="あの人は親切ないでした。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "This cake was delicious"?
              </p>
              <SelectText
                answer="このケーキはおいしかったです。"
                a="このケーキはおいしいでした。"
                b="このケーキはおいしかったです。"
                c="このケーキはおいしでした。"
                d="このケーキはおいしいました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "Japanese wasn't difficult"?
              </p>
              <SelectText
                answer="日本語は難しくなかったです。"
                a="日本語は難しいじゃなかったです。"
                b="日本語は難しくなかったです。"
                c="日本語は難しかないです。"
                d="日本語は難しいくないでした。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            い-adj positive: add です / negative: い → くないです
          </SummaryItem>
          <SummaryItem>
            い-adj past: い → かったです / past neg: い → くなかったです
          </SummaryItem>
          <SummaryItem>
            な-adj positive: add です / negative: じゃないです
          </SummaryItem>
          <SummaryItem>
            な-adj past: でした / past neg: じゃなかったです
          </SummaryItem>
          <SummaryItem>
            いい conjugates from よ- (よくない, よかった, よくなかった)
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
