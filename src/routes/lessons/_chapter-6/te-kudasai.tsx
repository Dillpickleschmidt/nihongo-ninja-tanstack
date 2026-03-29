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

export const Route = createFileRoute("/lessons/_chapter-6/te-kudasai")({
  component: TeKudasai,
})

function TeKudasai() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        頼
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            Making Requests with{" "}
            <span class="font-japanese text-teal-500">てください</span>
          </>
        }
        subtitle='"Please do X" — the polite request pattern.'
      >
        <OverviewItem>Verb て-form + ください = polite request</OverviewItem>
        <OverviewItem>Common classroom phrases</OverviewItem>
        <OverviewItem>Politeness levels and what you can't attach</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            When you need to ask someone to do something in Japanese - whether
            it's "please sit down", "pass the salt" or "please be quiet" -{" "}
            <span class="font-japanese text-white/90">てください</span> is your
            go-to pattern. It's the polite equivalent of saying "please do X" in
            English.
          </p>
        </div>

        {/* Formula */}
        <div class="space-y-4">
          <SectionLabel>The formula</SectionLabel>
          <GlowBox>
            <div class="space-y-2 text-center text-lg text-white/70">
              <p>1. Take any verb</p>
              <p>2. Convert it to て form</p>
              <p>
                3. Add{" "}
                <span class="font-japanese font-semibold text-teal-500">
                  ください
                </span>
              </p>
            </div>
          </GlowBox>
        </div>

        {/* Classroom Phrases */}
        <div class="space-y-4">
          <SectionLabel>Common classroom phrases</SectionLabel>
          <p class="leading-relaxed text-white/70">
            You'll hear these a lot in Japanese classes:
          </p>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">見てください</p>
              <p class="text-sm text-white/40">Please look</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">聞いてください</p>
              <p class="text-sm text-white/40">Please listen</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">読んでください</p>
              <p class="text-sm text-white/40">Please read</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">書いてください</p>
              <p class="text-sm text-white/40">Please write</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 sm:col-span-2">
              <p class="font-japanese text-lg text-white/90">教えてください</p>
              <p class="text-sm text-white/40">Please teach me / tell me</p>
            </div>
          </div>
        </div>

        {/* Example Sentences */}
        <div class="space-y-4">
          <SectionLabel>Example sentences</SectionLabel>
          <div class="space-y-2">
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">
                ちょっと待ってください。
              </span>
              <span class="shrink-0 text-sm text-white/40">
                Please wait a moment.
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">
                教科書を持ってきてください。
              </span>
              <span class="shrink-0 text-sm text-white/40">
                Please bring the textbook.
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">
                お母さんに電話をしてください。
              </span>
              <span class="shrink-0 text-sm text-white/40">
                Please call your mother.
              </span>
            </div>
          </div>
        </div>

        {/* Politeness */}
        <div class="space-y-6">
          <SectionLabel>The art of (not) being polite</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Adding ください makes a request polite... usually. But some verbs
            are inherently confrontational:
          </p>

          <AsideBlock label="Casual requests">
            <p class="mt-2 text-sm leading-relaxed text-white/60">
              With close friends or family, a bare て form can work as a casual
              request:
            </p>
            <div class="mt-3 rounded-lg bg-white/[0.04] p-3">
              <p class="font-japanese text-base text-white/80">
                窓を開けて。
              </p>
              <p class="mt-1 text-sm text-white/40">Open the window.</p>
              <p class="mt-1 text-sm italic text-red-400/70">
                Only use this with people you're close to!
              </p>
            </div>
          </AsideBlock>

          <div class="space-y-3">
            <p class="text-sm font-semibold text-white/50">
              The politeness progression
            </p>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <div class="space-y-4">
                <div>
                  <p class="font-japanese text-lg text-white/80">
                    <Furigana furigana={<span class="text-xs">だま</span>}>
                      黙
                    </Furigana>
                    って
                  </p>
                  <p class="text-sm text-white/50">
                    Shut up (Plain command, quite rude)
                  </p>
                  <p class="text-sm italic text-white/30">
                    When addressing that one friend who won't stop talking
                    during the movie
                  </p>
                </div>

                <div class="border-t border-white/5 pt-4">
                  <p class="font-japanese text-lg text-white/80">
                    黙ってください
                  </p>
                  <p class="text-sm text-white/50">
                    Please shut up (Polite form, but... still pretty rude)
                  </p>
                  <p class="text-sm italic text-white/30">
                    When addressing that same friend, but now your teacher is
                    watching (she'll still give you a good scolding)
                  </p>
                </div>

                <p class="border-t border-white/5 pt-4 text-sm text-white/60">
                  You're not expected to know any of the below yet{" "}
                  <span class="text-white/30">
                    (it's turning adjectives into verbs)
                  </span>
                  , but here's a preview of what's possible:
                </p>

                <div>
                  <p class="font-japanese text-lg text-white/80">
                    静かにしてください
                  </p>
                  <p class="text-sm text-white/50">
                    Please be quiet (Could be polite, depending on context)
                  </p>
                  <p class="text-sm italic text-white/30">
                    You're a tired mom that is attempting to control her
                    five-year-old in a library.
                  </p>
                </div>

                <div class="border-t border-white/5 pt-4">
                  <p class="font-japanese text-lg text-white/80">
                    ちょっと静かにしてください
                  </p>
                  <p class="text-sm text-white/50">
                    Please be a bit quiet (Even more polite)
                  </p>
                  <p class="text-sm italic text-white/30">
                    When addressing your upstairs neighbor at 2am
                  </p>
                </div>

                <div class="border-t border-white/5 pt-4">
                  <p class="font-japanese text-lg text-white/80">
                    申し訳ありませんが、静かにしていただけませんでしょうか。
                  </p>
                  <p class="text-sm text-white/50">
                    I'm terribly sorry, but would you mind being quiet? (Ultra
                    polite, possibly even passive-aggressive) (uses advanced
                    grammar you'll learn later)
                  </p>
                  <p class="text-sm italic text-white/30">
                    When it's 3am and your upstairs neighbor is still doing
                    jumping jacks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div class="space-y-4">
          <SectionLabel>Things you can't do</SectionLabel>

          <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
            <p class="text-sm font-semibold text-white/60">
              For negative requests ("please don't..."), you'll need a
              different grammar pattern that we'll cover later. There's no such
              thing as:
            </p>
            <p class="mt-2 font-japanese text-base text-white/50">
              ❌ ～なくてください
            </p>
          </div>

          <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
            <p class="text-sm font-semibold text-white/60">
              You <span class="text-white/80">cannot</span> add から after
              てください:
            </p>
            <p class="mt-2 font-japanese text-base text-white/50">
              ❌ 食べてくださいから
            </p>
            <p class="mt-1 text-sm text-white/30">
              ("Please eat, therefore..." makes no sense)
            </p>
          </div>

          <div>
            <div class="rounded-t-lg border border-b-0 border-red-500/20 bg-red-500/5 p-4">
              <p class="text-sm font-semibold text-white/60">
                You <span class="text-white/80">cannot</span> add けど after
                てください:
              </p>
              <p class="mt-2 font-japanese text-base text-white/50">
                ❌ 座ってくださいけど、静かにしてください。
              </p>
            </div>
            <div class="rounded-b-lg border-t border-white/10 bg-white/[0.04] p-4">
              <p class="text-sm text-white/50">Instead:</p>
              <p class="mt-1 font-japanese text-base text-white/70">
                ✅ 座って、静かにしてください。
              </p>
              <p class="mt-2 text-sm text-white/50">Or:</p>
              <p class="mt-1 font-japanese text-base text-white/70">
                ✅ 静かに座ってください
              </p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Your friend is taking forever to get ready. How would you
                politely ask them to hurry up?
              </p>
              <SelectText
                answer="急いでください。"
                a="急いでください。"
                b="急いでくださいから。"
                c="急いで。"
                d="急ぐください。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You want to politely ask your teacher to speak more slowly.
              </p>
              <SelectText
                answer="ゆっくり話してください。"
                a="ゆっくり話して。"
                b="ゆっくり話すください。"
                c="ゆっくり話してください。"
                d="ゆっくり話してくださいけど。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Verb て-form + ください = "please do X"
          </SummaryItem>
          <SummaryItem>
            Bare て-form alone = casual request (close friends only)
          </SummaryItem>
          <SummaryItem>
            ください doesn't fix inherently rude verbs (黙ってください is still
            rude)
          </SummaryItem>
          <SummaryItem>
            Can't attach から or けど after てください
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
