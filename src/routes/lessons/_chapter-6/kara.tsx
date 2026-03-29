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

export const Route = createFileRoute("/lessons/_chapter-6/kara")({
  component: Kara,
})

function Kara() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        因
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            Expressing Reasons with{" "}
            <span class="font-japanese text-orange-500">から</span>
          </>
        }
        subtitle='Connecting cause and effect with "so" and "because."'
      >
        <OverviewItem>
          X{" "}
          <span class="font-japanese font-semibold text-orange-500">から</span>{" "}
          Y = "X, so Y"
        </OverviewItem>
        <OverviewItem>から at the end = afterthought reason</OverviewItem>
        <OverviewItem>How から differs from だから</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            Remember だから from Chapter 1? The{" "}
            <span class="font-japanese font-medium text-orange-500">から</span>{" "}
            particle works similarly but is smoother and more flexible. While
            だから always comes at the start of a new sentence, から can be used
            in the middle to join two sentences into one smooth sentence. It can
            also be used at the end, giving you more natural ways to express
            your reasoning.
          </p>
        </div>

        {/* Core Pattern */}
        <div class="space-y-4">
          <SectionLabel>The core pattern</SectionLabel>
          <GlowBox>
            <div class="flex items-center justify-center gap-4 text-xl">
              <p class="font-japanese">
                X <span class="font-medium text-orange-500">から</span> Y
              </p>
              <span class="font-bold text-white/40">=</span>
              <p class="text-white/50">X, so Y</p>
            </div>
            <p class="mt-2 text-center text-sm text-white/40">
              When you see から joining two parts of a sentence, think of it as
              "so" - it's connecting a reason to what happens because of it.
            </p>
          </GlowBox>
        </div>

        {/* だから vs から */}
        <div class="space-y-4">
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-white/50">
                Before (with だから)
              </p>
              <p class="font-japanese text-lg text-white/80">
                タクシーは高いです。
                <span class="font-medium text-orange-500">だから</span>
                、バスに乗りましょう。
              </p>
              <p class="mt-1 text-sm text-white/40">
                Taxis are expensive. Therefore, let's take the bus.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-white/50">
                After (with から, smooth!)
              </p>
              <p class="font-japanese text-lg text-white/80">
                タクシーは高いです
                <span class="font-medium text-orange-500">から</span>
                、バスに乗りましょう。
              </p>
              <p class="mt-1 text-sm text-white/40">
                Taxis are expensive, so let's take the bus.
              </p>
            </div>
          </div>

          <div class="space-y-2">
            <p class="text-sm font-medium text-white/40">More examples</p>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                あしたテストがあります
                <span class="font-medium text-orange-500">から</span>
                、今晩勉強します。
              </p>
              <p class="mt-1 text-sm text-white/40">
                We have a test tomorrow, so I will study tonight.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                頭が痛いです
                <span class="font-medium text-orange-500">から</span>
                、早く寝ます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I have a headache, so I'll go to bed early.
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Pattern */}
        <div class="space-y-4">
          <SectionLabel>Alternative pattern</SectionLabel>
          <p class="leading-relaxed text-white/70">
            You can also split it into two sentences, with から at the end of
            your reason:
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                バスに乗りましょう。タクシーは高いです
                <span class="font-medium text-orange-500">から</span>。
              </p>
              <p class="mt-1 text-sm text-white/40">
                Let's take the bus. (Because taxis are expensive)
              </p>
              <p class="mt-1 text-sm italic text-white/30">
                This pattern is more conversational, like adding the reason as
                an afterthought.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                今晩勉強します。あしたテストがあります
                <span class="font-medium text-orange-500">から</span>。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I will study tonight. (Because we have a test tomorrow)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                早く寝ます。頭が痛いです
                <span class="font-medium text-orange-500">から</span>。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I'll go to bed early. (Because I have a headache)
              </p>
            </div>
          </div>
        </div>

        {/* Key Rule */}
        <AsideBlock>
          <p class="text-sm leading-relaxed text-white/60">
            <span class="font-medium text-orange-500">から</span> is always
            attached to the <u>end</u> of the <u>reason clause</u>, just like
            particles are attached to the end of their respective words.
          </p>
          <p class="mt-2 text-sm text-white/40">
            Ex. You wouldn't say 水飲みますを. を must be paired with 水.
          </p>
        </AsideBlock>

        {/* Easy Mistakes */}
        <div class="space-y-4">
          <SectionLabel>Easy mistakes</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Don't switch the cause and effect - keep them in logical order:
          </p>

          <div class="space-y-4">
            <div class="space-y-2">
              <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Incorrect
                </p>
                <p class="font-japanese text-base text-white/50">
                  ❌ 勉強します
                  <span class="font-medium text-orange-500">から</span>
                  、テストがあります。
                </p>
                <p class="mt-1 text-sm text-white/30">
                  This says "I study, so there's a test."
                </p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Correct
                </p>
                <p class="font-japanese text-base text-white/80">
                  テストがあります
                  <span class="font-medium text-orange-500">から</span>
                  、勉強します。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  This says "I have a test, so I study."
                </p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Also correct
                </p>
                <p class="font-japanese text-base text-white/80">
                  勉強します。テストがあります
                  <span class="font-medium text-orange-500">から</span>。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  This says "I study. (Because there's a test)"
                </p>
              </div>
              <p class="text-sm text-white/40">
                *The test is the reason why you study, not the other way around!
              </p>
            </div>

            <div class="space-y-2">
              <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Incorrect
                </p>
                <p class="font-japanese text-base text-white/50">
                  ❌ 病院に行きます
                  <span class="font-medium text-orange-500">から</span>
                  、頭が痛いです。
                </p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Correct
                </p>
                <p class="font-japanese text-base text-white/80">
                  頭が痛いです
                  <span class="font-medium text-orange-500">から</span>
                  、病院に行きます。
                </p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Also correct
                </p>
                <p class="font-japanese text-base text-white/80">
                  病院に行きます。頭が痛いです
                  <span class="font-medium text-orange-500">から</span>。
                </p>
              </div>
              <p class="text-sm text-white/40">
                *The headache is the reason for going to the hospital, not vice
                versa!
              </p>
            </div>

            <p class="text-sm italic text-white/40">
              Remember: The first part (before から) should explain WHY you're
              doing the second part.
            </p>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            *Choose the correct answers*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Which is correct for "It's hot, so I opened the window"?
              </p>
              <SelectText
                answer="暑いから、窓を開けました。"
                a="暑い。窓を開けましたから。"
                b="暑いから、窓を開けました。"
                c="窓を開けましたから、暑いです。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            X から Y = "X, so Y" (reason + result in one sentence)
          </SummaryItem>
          <SummaryItem>
            Y。Xから。= result first, reason as afterthought
          </SummaryItem>
          <SummaryItem>
            から always attaches to the end of the reason clause
          </SummaryItem>
          <SummaryItem>
            Don't mix up cause and effect — reason comes before から
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
