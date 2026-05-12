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

export const Route = createFileRoute("/lessons/_chapter-6/te-mo-ii-desu")({
  component: TeMoIiDesu,
})

function TeMoIiDesu() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        許
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            Asking Permission with{" "}
            <span class="font-japanese text-teal-400">てもいいです</span>
          </>
        }
        subtitle={`"May I...?" and "It's okay to..."`}
      >
        <OverviewItem>
          Statement:{" "}
          <span class="font-japanese font-semibold text-teal-400">
            てもいいです
          </span>{" "}
          = "it's okay to"
        </OverviewItem>
        <OverviewItem>
          Question:{" "}
          <span class="font-japanese font-semibold text-yellow-400">
            てもいいですか
          </span>{" "}
          = "may I?"
        </OverviewItem>
        <OverviewItem>
          Extra polite:{" "}
          <span class="font-japanese font-semibold text-purple-400">
            てもいいでしょうか
          </span>
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            <span class="font-japanese text-xl">てもいいです</span> has two main
            uses: as a statement meaning "it's okay to..." or "you can...", and
            as a question meaning "may I...?" or "is it okay if...?". It's one
            of the most common ways to both give and ask for permission in
            Japanese.
          </p>
        </div>

        {/* Pattern */}
        <div class="space-y-4">
          <SectionLabel>Basic pattern</SectionLabel>
          <GlowBox>
            <p class="text-center font-japanese text-xl text-foreground dark:text-white/90">
              Verb (て-form) + もいいです
            </p>
          </GlowBox>
        </div>

        {/* Three forms */}
        <div class="space-y-4">
          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                Statement
              </p>
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                これを食べて
                <span class="font-medium text-teal-400">もいいです</span>
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">It's okay to eat this.</p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">Question</p>
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                食べて
                <span class="font-medium text-yellow-400">もいいですか</span>
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">May I eat this?</p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">You just add か.</p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                More polite
              </p>
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                食べて
                <span class="font-medium text-purple-400">
                  もいいでしょうか
                </span>
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Would it be alright if I eat this?
              </p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                Replace です with でしょうか.
              </p>
            </div>
          </div>
        </div>

        {/* Common Examples */}
        <div class="space-y-4">
          <SectionLabel>Common examples</SectionLabel>
          <div class="space-y-2">
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                食べてもいいですか。
              </span>
              <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                May I eat this?
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                ここで写真を撮ってもいいですか。
              </span>
              <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                May I take photos here?
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                トイレに行ってもいいですか。
              </span>
              <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                May I go to the bathroom?
              </span>
            </div>
          </div>
        </div>

        {/* How to Respond */}
        <div class="space-y-4">
          <SectionLabel>How to respond</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When someone asks for permission:
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                Giving permission
              </p>
              <div class="space-y-2">
                <div>
                  <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                    はい、いいですよ。
                  </p>
                  <p class="text-sm text-muted-foreground dark:text-white/40">Yes, that's fine.</p>
                </div>
                <div>
                  <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">どうぞ。</p>
                  <p class="text-sm text-muted-foreground dark:text-white/40">Please go ahead.</p>
                </div>
              </div>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                Indirectly declining
              </p>
              <div class="space-y-2">
                <div>
                  <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                    すみません、ちょっと...
                  </p>
                  <p class="text-sm text-muted-foreground dark:text-white/40">Sorry, um...</p>
                </div>
                <div>
                  <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                    ちょっと難しいです。
                  </p>
                  <p class="text-sm text-muted-foreground dark:text-white/40">
                    That's a bit difficult...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p class="text-sm text-muted-foreground dark:text-white/50">
            For directly saying "<strong>you may not</strong>," see the next
            lesson.
          </p>
        </div>

        {/* Easy Mistakes */}
        <div class="space-y-4">
          <SectionLabel>Easy mistakes</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The て-form must be part of a verb - you can't use it by itself or
            attach it directly to nouns or other particles.
          </p>

          <div class="space-y-4">
            <div class="space-y-2">
              <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Incorrect
                </p>
                <p class="font-japanese text-base text-muted-foreground dark:text-white/50">
                  ❌ トイレにてもいいです。
                </p>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Correct
                </p>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  トイレに行ってもいいです。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                  *You need the actual verb 行く in て-form
                </p>
              </div>
            </div>

            <div class="space-y-2">
              <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Incorrect
                </p>
                <p class="font-japanese text-base text-muted-foreground dark:text-white/50">
                  ❌ 電車にもいいです。
                </p>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Correct
                </p>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  電車に乗ってもいいです。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                  *You need a verb like 乗る in て-form
                </p>
              </div>
            </div>

            <div class="space-y-2">
              <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Incorrect
                </p>
                <p class="font-japanese text-base text-muted-foreground dark:text-white/50">
                  ❌ ここてもいいです。
                </p>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Correct
                </p>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  ここに座ってもいいです。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                  *You need a verb like 座る in て-form
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Polite */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl font-semibold leading-none text-purple-400">
              てもいいでしょうか
            </p>
            <SectionLabel class="mt-3">Extra polite</SectionLabel>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When you need to be extra polite (like asking your professor or
            boss), use{" "}
            <span class="font-japanese text-xl">てもいいでしょうか</span>{" "}
            instead:
          </p>
          <div class="space-y-2">
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                先生、質問してもいいでしょうか。
              </span>
              <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                Professor, may I ask a question?
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                明日休んでもいいでしょうか。
              </span>
              <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                Would it be alright if I take tomorrow off?
              </span>
            </div>
          </div>
        </div>

        {/* Real Life Examples */}
        <div class="space-y-4">
          <SectionLabel>Real life examples</SectionLabel>
          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                At a Temple
              </p>
              <div class="space-y-1 text-sm">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    A: すみません、中に入ってもいいでしょうか。
                  </span>
                  <span class="ml-2 text-muted-foreground dark:text-white/40">
                    Excuse me, would it be alright to enter?
                  </span>
                </p>
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    B: はい、どうぞ。
                  </span>
                  <span class="ml-2 text-muted-foreground dark:text-white/40">Yes, please do.</span>
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                During Class
              </p>
              <div class="space-y-1 text-sm">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    A: 窓を開けてもいいですか。
                  </span>
                  <span class="ml-2 text-muted-foreground dark:text-white/40">
                    May I open the window?
                  </span>
                </p>
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    B: はい、いいですよ。
                  </span>
                  <span class="ml-2 text-muted-foreground dark:text-white/40">Yes, that's fine.</span>
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-muted-foreground dark:text-white/50">
                At a Fancy Restaurant
              </p>
              <div class="space-y-1 text-sm">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    A: このステーキを手で食べてもいいですか。
                  </span>
                  <span class="ml-2 text-muted-foreground dark:text-white/40">
                    May I eat this steak with my hands?
                  </span>
                </p>
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    B: えっと、それは...
                  </span>
                  <span class="ml-2 text-muted-foreground dark:text-white/40">
                    Uh, that would be...{" "}
                    <span class="text-muted-foreground/70 dark:text-white/30">(weird)</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the correct way to ask for permission in each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You want to take a photo in a museum. How would you ask if it's
                allowed?
              </p>
              <SelectText
                answer="写真を撮ってもいいですか。"
                a="写真てもいいですか。"
                b="写真を撮ってもいいですか。"
                c="写真もいいですか。"
                d="撮るてもいいですか。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're meeting with your professor and want to ask a question
                very politely.
              </p>
              <SelectText
                answer="質問してもいいでしょうか。"
                a="質問していいです。"
                b="質問てもいいでしょうか。"
                c="質問してもいいでしょうか。"
                d="質問もいいでしょうか。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend asks to borrow your pen. How would you give
                permission?
              </p>
              <SelectText
                answer={["はい、いいですよ。", "どうぞ。"]}
                a="はい、いいですよ。"
                b="どうぞ。"
                c="ペンてもいいです。"
                d="はい、ペンもいいです。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Verb て + もいいです = "it's okay to..."
          </SummaryItem>
          <SummaryItem>
            Add か for questions: てもいいですか = "may I...?"
          </SummaryItem>
          <SummaryItem>
            てもいいでしょうか for extra politeness
          </SummaryItem>
          <SummaryItem>
            Must use a verb in て-form (can't attach to nouns directly)
          </SummaryItem>
          <SummaryItem>
            Respond with いいですよ / どうぞ, or decline with ちょっと...
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
