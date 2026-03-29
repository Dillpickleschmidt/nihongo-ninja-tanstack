import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import CheckboxQuestion from "@/components/CheckboxQuestion"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-2/janai")({
  component: Janai,
})

function Janai() {
  const questions = [
    "あそこ",
    "傘[かさ]",
    "新聞[しんぶん]",
    "これ",
    "高い[たかい]",
    "野菜[やさい]",
    "おいしい",
    "誰[だれ]",
    "私の本[わたしのほん]",
    "高い本[たかいほん]",
  ]

  const correctQuestions = [
    "傘[かさ]",
    "新聞[しんぶん]",
    "野菜[やさい]",
    "私の本[わたしのほん]",
    "高い本[たかいほん]",
  ]

  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        否
      </span>

      <LessonHeader
        chapter="Chapter 2 · Grammar"
        title={
          <>
            <span class="font-japanese text-orange-400">じゃない</span> — Negation
          </>
        }
        subtitle='How to say "is not" in Japanese.'
      >
        <OverviewItem>
          Negating nouns with{" "}
          <span class="font-japanese font-semibold text-orange-400">
            じゃないです
          </span>
        </OverviewItem>
        <OverviewItem>Three levels of formality</OverviewItem>
        <OverviewItem>Using じゃない to confirm ("isn't it?")</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro & Formula */}
        <div class="space-y-4 leading-relaxed text-white/70">
          <p>
            The{" "}
            <span class="font-japanese text-xl font-semibold text-orange-400">
              じゃない
            </span>{" "}
            construction in Japanese is used to negate statements, much like
            saying <span class="font-black text-white/90">is not</span> in
            English. This lesson will explore its basic usage, variations, and
            some common conversational uses.
          </p>

          <div class="relative mx-auto md:w-[450px]">
            <div
              class="absolute -inset-px rounded-xl"
              style={{
                background: `linear-gradient(135deg, var(--dynamic-accent), transparent 50%)`,
                opacity: 0.2,
              }}
            />
            <div class="relative rounded-xl border-2 border-orange-400 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div class="space-y-3">
                <div class="flex items-center">
                  <p class="w-56 text-2xl md:w-64">
                    X{" "}
                    <span class="font-japanese font-bold text-sky-400">は</span>{" "}
                    Y <span class="font-japanese">です。</span>
                  </p>
                  <p class="mx-3 text-xl text-white/50">→</p>
                  <p class="text-xl text-white/50">X is Y.</p>
                </div>
                <div class="flex items-center">
                  <p class="w-56 text-2xl md:w-64">
                    X{" "}
                    <span class="font-japanese font-bold text-sky-400">は</span>{" "}
                    Y{" "}
                    <span class="font-japanese font-semibold text-orange-400">
                      じゃないです。
                    </span>
                  </p>
                  <p class="mx-3 text-xl text-white/50">→</p>
                  <p class="text-xl text-white/50">
                    X <span class="font-bold text-orange-400">is not</span> Y.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Usage */}
        <div class="space-y-4">
          <SectionLabel>Basic usage</SectionLabel>
          <p class="leading-relaxed text-white/70">
            The basic form of negating a noun sentence in Japanese involves
            replacing <span class="font-japanese text-xl text-white/90">です</span>{" "}
            with{" "}
            <span class="font-japanese text-xl text-white/90">じゃないです</span>
            .
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-white/90">
                これはペンです。
              </p>
              <p class="mt-1 text-sm text-white/40">This is a pen.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-white/90">
                これはペン
                <span class="font-semibold text-orange-400">じゃないです</span>
                。
              </p>
              <p class="mt-1 text-sm text-white/40">
                This <span class="font-bold">is not</span> a pen.
              </p>
            </div>
          </div>
        </div>

        {/* Variations */}
        <div class="space-y-4">
          <SectionLabel>Variations of negation</SectionLabel>
          <p class="leading-relaxed font-semibold text-white/90">
            There are three common ways to form negative sentences in Japanese:
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Colloquial
              </p>
              <p class="font-japanese text-xl font-semibold text-white/90">
                じゃないです
              </p>
              <p class="mt-1 text-sm text-white/40">
                Commonly used in daily speech.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Polite
              </p>
              <p class="font-japanese text-xl font-semibold text-white/90">
                じゃありません
              </p>
              <p class="mt-1 text-sm text-white/40">
                Slightly more formal, still polite.{" "}
                <span class="font-japanese">じゃ</span> is a contraction of{" "}
                <span class="font-japanese">では</span> (de-wa).
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Formal
              </p>
              <p class="font-japanese text-xl font-semibold text-white/90">
                ではありません
              </p>
              <p class="mt-1 text-sm text-white/40">
                Used in writing or very polite speech.
              </p>
            </div>
          </div>

          <p class="text-center text-sm italic text-white/40">
            *Notice 2 & 3 don't include <span class="font-japanese">です</span>
            .
          </p>

          <div class="space-y-2">
            <p class="text-sm font-medium text-white/40">Examples</p>
            <div class="space-y-3">
              <div class="rounded-lg bg-white/[0.04] p-4">
                <div class="space-y-1 text-sm leading-relaxed text-white/60">
                  <p>
                    <span class="font-japanese text-base text-white/80">
                      <Furigana furigana={<span class="text-xs">たなか</span>}>
                        田中
                      </Furigana>
                      さんは
                      <Furigana
                        furigana={<span class="text-xs">がくせい</span>}
                      >
                        学生
                      </Furigana>
                      じゃないです。
                    </span>{" "}
                    <span class="italic text-white/40">Colloquial</span>
                  </p>
                  <p>
                    <span class="font-japanese text-base text-white/80">
                      田中さんは 学生 じゃありません。
                    </span>{" "}
                    <span class="italic text-white/40">Polite</span>
                  </p>
                  <p>
                    <span class="font-japanese text-base text-white/80">
                      田中さんは 学生 ではありません。
                    </span>{" "}
                    <span class="italic text-white/40">Formal</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div class="space-y-4">
          <SectionLabel>
            Using{" "}
            <span class="font-japanese text-orange-400">じゃない</span> to
            confirm
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            In addition to negating statements,{" "}
            <span class="font-japanese text-xl font-bold text-orange-400">
              じゃない
            </span>{" "}
            can be used to ask someone to confirm, similar to{" "}
            <span class="font-semibold text-white/90">isn't it?</span> in
            English.
          </p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-white/90">
              これは田中さんの
              <Furigana furigana={<span class="text-sm">ほん</span>}>
                本
              </Furigana>
              じゃないですか。
            </p>
            <p class="mt-1 text-sm text-white/40">
              Isn't this Tanaka's book?
            </p>
          </div>

          <p class="leading-relaxed text-white/70">
            Literally, it's just a negative statement plus{" "}
            <span class="font-japanese text-xl font-semibold text-red-500">
              か
            </span>{" "}
            to form a question.
          </p>
          <p class="text-center font-semibold text-white/70">
            It is not → Is it not?
          </p>

          <div class="space-y-2">
            <p class="text-sm font-medium text-white/40">
              A response might look like
            </p>
            <div class="space-y-3">
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="font-japanese text-lg text-white/80">
                  はい、田中さんの
                  <Furigana furigana={<span class="text-sm">ほん</span>}>
                    本
                  </Furigana>
                  です。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  Yes, that's Tanaka's book.
                </p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="font-japanese text-lg text-white/80">
                  いいえ、田中さんの
                  <Furigana furigana={<span class="text-sm">ほん</span>}>
                    本
                  </Furigana>
                  じゃないです。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  No, that's not Tanaka's book.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adjective Rules */}
        <div class="space-y-4">
          <SectionLabel>Only negates nouns (and na-adjectives)</SectionLabel>
          <p class="leading-relaxed text-white/70">
            The{" "}
            <span class="font-japanese text-xl font-bold text-orange-400">
              じゃないです
            </span>{" "}
            form works for nouns and na-adjectives{" "}
            <span class="text-sm text-white/40">
              (adjective conjugation comes in Chapter 5)
            </span>
            . It cannot be used with i-adjectives or verbs.
          </p>
          <p class="leading-relaxed text-white/70">
            For example, you'll later see adjectives like{" "}
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">たか</span>}>
                高
              </Furigana>
              い
            </span>{" "}
            (expensive) and{" "}
            <span class="font-japanese text-xl">おいしい</span> (delicious).
            These do not use{" "}
            <span class="font-japanese text-xl">じゃないです</span> but follow
            their own rules.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-xl text-white/50 line-through">
                おいしいじゃないです。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Correct
              </p>
              <p class="font-japanese text-xl text-white/90">
                おいしく<span class="text-orange-400">ない</span>です。
              </p>
              <p class="mt-1 text-sm text-white/40">It's not delicious.</p>
            </div>
          </div>

          <div class="space-y-3">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-xl text-white/50 line-through">
                <Furigana furigana={<span class="text-sm">たか</span>}>
                  高
                </Furigana>
                いじゃないです。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Correct
              </p>
              <p class="font-japanese text-xl text-white/90">
                <Furigana furigana={<span class="text-sm">たか</span>}>
                  高
                </Furigana>
                <span class="text-orange-400">くない</span>です。
              </p>
              <p class="mt-1 text-sm text-white/40">It's not expensive.</p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center leading-relaxed text-white/70">
            Check the words that{" "}
            <span class="font-bold underline underline-offset-2">can</span> be
            negated with{" "}
            <span class="font-japanese text-xl font-bold text-orange-400">
              じゃないです。
            </span>
          </p>
          <div class="flex justify-center">
            <CheckboxQuestion
              questions={questions}
              correctQuestions={correctQuestions}
              horizontal
              furiganaSize="0.75rem"
            />
          </div>
        </div>

        {/* Video */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            Though a bit advanced, this video will give you a general idea of
            the other ways you'll hear{" "}
            <span class="font-japanese text-orange-400">じゃない</span> in
            conversations. Besides, Kaname's examples are always hilarious!
          </p>
          <YouTubeVideo
            videoId="mapbKTJ9aBs"
            title="How to Use じゃない"
            credit="Kaname Naito"
          />
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Replace です with じゃないです to negate nouns
          </SummaryItem>
          <SummaryItem>
            Three forms: じゃないです (casual), じゃありません (polite),
            ではありません (formal)
          </SummaryItem>
          <SummaryItem>
            じゃないですか = "isn't it?" (confirmation)
          </SummaryItem>
          <SummaryItem>
            Does not work with i-adjectives or verbs
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
