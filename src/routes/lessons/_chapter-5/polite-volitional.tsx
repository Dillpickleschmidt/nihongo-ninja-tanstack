import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import Romaji from "@/components/text/Romaji"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-5/polite-volitional")({
  component: PoliteVolitional,
})

function PoliteVolitional() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        誘
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={
          <>
            <span class="font-japanese text-violet-400">ましょう</span> &{" "}
            <span class="font-japanese text-indigo-200">ましょうか</span>
          </>
        }
        subtitle="Polite suggestions and 'shall we?' invitations."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-indigo-200">
            ましょうか
          </span>{" "}
          = "shall we?"
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-violet-400">
            ましょう
          </span>{" "}
          = "let's"
        </OverviewItem>
        <OverviewItem>
          Comparing with{" "}
          <span class="font-japanese font-semibold text-teal-400">
            ませんか
          </span>
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            You've already learned how to extend an invitation with{" "}
            <span class="font-japanese text-xl font-semibold text-teal-400">
              ませんか
            </span>
            , but what if you want to be a little more suggestive? Introducing{" "}
            <span class="font-japanese text-xl font-semibold text-indigo-200">
              ましょうか
            </span>
            , meaning <span class="font-black text-foreground dark:text-white/90">shall we?</span>.
          </p>
          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            There are relevant rap passages at the end of the lesson!
          </p>
        </div>

        {/* ましょうか */}
        <div class="space-y-4">
          <SectionLabel>
            1.{" "}
            <span class="font-japanese text-xs text-indigo-200">
              ましょうか
            </span>
          </SectionLabel>

          <GlowBox>
            <p class="text-center text-xl text-foreground dark:text-white/90">
              ます Verb Stem +{" "}
              <span class="font-japanese font-semibold text-indigo-200">
                ましょうか
              </span>
            </p>
          </GlowBox>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center font-japanese text-xl">
            <div class="space-y-1 text-muted-foreground dark:text-white/60">
              <p>行きます</p>
              <p>行き</p>
              <p class="text-foreground dark:text-white/90">
                行き
                <span class="font-semibold text-indigo-200">ましょうか</span>
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              映画を見
              <span class="font-semibold text-indigo-200">ましょうか</span>。
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">Shall we go watch a movie?</p>
          </div>
        </div>

        {/* Comparison */}
        <div class="space-y-4">
          <SectionLabel>
            Comparing{" "}
            <span class="font-japanese text-xs text-teal-400">ませんか</span>{" "}
            and{" "}
            <span class="font-japanese text-xs text-indigo-200">
              ましょうか
            </span>
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In the context of asking someone on a date, デートに行きませんか
            feels slightly more formal and could be better for a first-time
            invitation, while デートに行きましょうか feels more casual and might
            be better used between people who are already somewhat familiar with
            each other.
          </p>
          <p class="text-sm text-muted-foreground dark:text-white/40">
            Similar to the English counterparts of "would you like to go on a
            date?" and "shall we go on a date?"—one makes sense for a first-time
            invitation, while the other indicates that you're already pretty
            comfortable dating (or maybe you're just really confident).
          </p>
        </div>

        {/* More examples */}
        <div class="space-y-4">
          <SectionLabel>More examples</SectionLabel>
          <div class="space-y-3">
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                  今晩
                  <Romaji romaji="together" class="text-xs">
                    <Furigana furigana={<span class="text-xs">いっしょ</span>}>
                      一緒
                    </Furigana>
                    に
                  </Romaji>
                  食べ
                  <span class="font-semibold text-teal-400">ませんか</span>。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                  Would you like to eat together tonight?
                </p>
                <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                  You're thinking about cooking dinner for the family, and
                  you're asking your father what he thinks.
                </p>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                  じゃあ、一緒に食べ
                  <span class="font-semibold text-indigo-200">ましょうか</span>
                  。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                  Well then, shall we eat together?
                </p>
                <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                  Dinner's ready. Everyone usually eats separately, but you're
                  feeling a little festive today.
                </p>
              </div>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                  コンビニに行き
                  <span class="font-semibold text-teal-400">ませんか</span>。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                  Would you like to go to the convenience store (with me)?
                </p>
                <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                  You heard that your colleague wanted to buy some snacks, and
                  you happen to be leaving for the convenience store.
                </p>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                  コンビニに行き
                  <span class="font-semibold text-indigo-200">ましょうか</span>
                  。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                  Shall we go to the convenience store?
                </p>
                <p class="mt-1 text-sm text-muted-foreground/70 dark:text-white/30">
                  A new coworker looks tired during overtime work, and you want
                  to suggest getting coffee together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ましょう */}
        <div class="space-y-4">
          <SectionLabel>
            2.{" "}
            <span class="font-japanese text-xs text-violet-400">ましょう</span>
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            If you don't really want them to decline, drop the か to make it a
            suggestion instead of a question.{" "}
            <span class="font-japanese font-semibold text-violet-400">
              ましょう
            </span>{" "}
            means <span class="font-black text-foreground dark:text-white/90">let's</span> (do
            something).
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                映画を見
                <span class="font-semibold text-violet-400">ましょう</span>。
              </span>
              <span class="ml-3 text-sm text-muted-foreground dark:text-white/40">
                Let's watch a movie.
              </span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Romaji romaji="together" class="text-xs">
                  <Furigana furigana={<span class="text-xs">いっしょ</span>}>
                    一緒
                  </Furigana>
                  に
                </Romaji>
                食べ
                <span class="font-semibold text-violet-400">ましょう</span>。
              </span>
              <span class="ml-3 text-sm text-muted-foreground dark:text-white/40">
                Let's eat together.
              </span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                コンビニに行き
                <span class="font-semibold text-violet-400">ましょう</span>。
              </span>
              <span class="ml-3 text-sm text-muted-foreground dark:text-white/40">
                Let's go to the convenience store.
              </span>
            </div>
          </div>
        </div>

        {/* Rap Passages */}
        <div class="space-y-6">
          <SectionLabel>Rap passages</SectionLabel>
          <p class="text-sm italic text-muted-foreground dark:text-white/50">
            Inspired by my unhealthy Chris Turner binge watching:
          </p>
          <YouTubeVideo
            title="British Rapper's Freestyle skills will SURPRISE you..."
            videoId="l0G757AvCbE"
            credit="Chris Turner"
          />

          <div class="space-y-3 text-sm">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
<div class="space-y-0.5 leading-6 text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    It's Friday night, what we gonna do?
                  </span>{" "}
                  <span class="font-japanese text-xs text-indigo-200">
                    (今晩何をしましょうか？)
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Let's not just sit here, let's watch a movie too
                  </span>{" "}
                  <span class="font-japanese text-xs text-violet-400">
                    (映画を見ましょう)
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Forget the usual, let's find something weird,
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Shall we watch a film about a samurai beard?
                  </span>{" "}
                  <span class="font-japanese text-xs text-indigo-200">
                    (サムライの髭の映画を見ましょうか？)
                  </span>
                </p>
              </div>
            </div>

            {/* <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <div class="space-y-0.5 leading-6 text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Midnight hunger, can't ignore the call,
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Let's hit the konbini, before we fall
                  </span>{" "}
                  <span class="font-japanese text-xs text-violet-400">
                    (コンビニに行きましょう)
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Shall we find the craziest snack in Japan?
                  </span>{" "}
                  <span class="font-japanese text-xs text-indigo-200">
                    (一番おかしなスナックを見つけましょうか？)
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Onigiri, pocky, or melon pan?
                  </span>
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <div class="space-y-0.5 leading-6 text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Guys, we're all here, let's not eat alone,
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Shall we dine together, make it a zone?
                  </span>{" "}
                  <span class="font-japanese text-xs text-indigo-200">
                    (一緒に食べましょうか？)
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Let's cook something wild, something we've never tried,
                  </span>
                </p>
                <p>
                  <span class="font-kite_one font-semibold text-foreground/75 dark:text-white/70">
                    Let's make tonight epic, let's not be shy
                  </span>{" "}
                  <span class="font-japanese text-xs text-violet-400">
                    (今夜を盛大にしましょう)
                  </span>
                </p>
              </div>
            </div> */}
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Now, either that was midly amusing and you learned some contexts you
            could use volitional form in, or you{" "}
            <span class="text-lg font-medium text-foreground dark:text-white/90">
              suddenly have an urge to jump off a bridge after reading such
              cringe
            </span>
            . <span class="text-sm">Sorry, not sorry :P</span>
          </p>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            ましょうか = "shall we?" (suggestive question)
          </SummaryItem>
          <SummaryItem>
            ましょう = "let's" (suggestion, not a question)
          </SummaryItem>
          <SummaryItem>
            ませんか is more formal/first-time, ましょうか is more
            casual/familiar
          </SummaryItem>
          <SummaryItem>All three attach to the ます verb stem</SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
