import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-6/te-form-connection",
)({
  component: TeFormConnection,
})

function TeFormConnection() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        繋
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            Connecting Activities with{" "}
            <span class="font-japanese text-green-500">て</span>
          </>
        }
        subtitle="Chain actions together to tell stories and describe routines."
      >
        <OverviewItem>て to sequence events ("did X and then Y")</OverviewItem>
        <OverviewItem>て to show method/means</OverviewItem>
        <OverviewItem>
          Tense is set by the final verb, not the て-forms
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            Want to tell a story in Japanese? The て form is your best friend
            for connecting multiple actions, and is your first step towards
            creating much more sophisticated Japanese sentences. You're
            graduating preschool and entering kindergarden. Let's begin.
          </p>
        </div>

        {/* Sequence of Events */}
        <div class="space-y-4">
          <SectionLabel>Sequence of events</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Use て to list actions in sequence ("I did X and then Y"):
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                図書館に
                <span class="underline decoration-green-500 underline-offset-4">
                  行って
                </span>
                、 本を借ります。
              </p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">
                I'll go to the library and borrow books.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                六時に
                <span class="underline decoration-green-500 underline-offset-4">
                  起きて
                </span>
                、 勉強しました。
              </p>
              <p class="mt-1 text-muted-foreground dark:text-white/50">I woke up at 6 and studied.</p>
            </div>
          </div>
        </div>

        {/* Method/Means */}
        <div class="space-y-4">
          <SectionLabel>Method / means</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Use て to show how an action is done:
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              バスに
              <span class="underline decoration-green-500 underline-offset-4">
                乗って
              </span>
              、 会社に行きます。
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">I take the bus and go to work.</p>
          </div>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="text-sm font-semibold text-muted-foreground dark:text-white/50">
              You could also say:
            </p>
            <p class="mt-1 font-japanese text-lg text-foreground/80 dark:text-white/80">
              バスで会社に行きます。
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">I go to work by bus.</p>
          </div>

          <p class="text-sm text-muted-foreground dark:text-white/40">
            *The first one casually mentions the method, the second emphasizes
            it.
          </p>
        </div>

        {/* Tense Note */}
        <AsideBlock label="Important note">
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            The tense at the end of the sentence applies to all actions:
          </p>
          <div class="mt-3 space-y-4">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                本を
                <span class="underline decoration-green-500 underline-offset-4">
                  読んで
                </span>
                、
                <span class="underline decoration-green-500 underline-offset-4">
                  書いて
                </span>
                、テストを
                <span class="font-bold">
                  しま
                  <span class="underline decoration-orange-400 underline-offset-4">
                    した
                  </span>
                </span>
                。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I read, wrote, and took the test (all in the past).
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                学校に
                <span class="underline decoration-green-500 underline-offset-4">
                  行って
                </span>
                、 友だちと
                <span class="underline decoration-green-500 underline-offset-4">
                  会って
                </span>
                、昼ご飯を
                <span class="font-bold">
                  食べま
                  <span class="underline decoration-orange-400 underline-offset-4">
                    す
                  </span>
                </span>
                。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I'll go to school, meet friends, and eat lunch (all in the
                present/future).
              </p>
            </div>
          </div>
        </AsideBlock>

        {/* Common Mistake */}
        <div class="space-y-4">
          <SectionLabel>Easy mistake</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Don't use と to connect verbs - it's for nouns only:
          </p>
          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                食べると、寝ます
              </p>
              <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                (this means something else entirely which you'll learn in
                Chapter 18)
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                食べて、寝ます
              </p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "I'll go to the cafeteria and eat lunch"?
              </p>
              <SelectText
                answer="食堂に行って、昼ご飯を食べます。"
                a="食堂に行くと、昼ご飯を食べます。"
                b="食堂に行って、昼ご飯を食べます。"
                c="食堂で行って、昼ご飯を食べます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You want to say "I take a train to school." How would you
                express this?
              </p>
              <SelectText
                answer="電車に乗って、学校に行きます。"
                a="電車と乗って、学校に行きます。"
                b="電車に乗って、学校に行きます。"
                c="電車で乗る、学校に行きます。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Verb て、Verb = "do X and then Y" (sequence)
          </SummaryItem>
          <SummaryItem>
            て also shows method/means (バスに乗って行く)
          </SummaryItem>
          <SummaryItem>
            The final verb's tense applies to the whole chain
          </SummaryItem>
          <SummaryItem>
            Use て (not と) to connect verbs
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
