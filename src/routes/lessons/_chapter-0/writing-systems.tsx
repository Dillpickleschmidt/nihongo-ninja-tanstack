import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  StudentBubble,
  SenseiBubble,
} from "@/features/lessons/components/DialogueBubbles"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"
import type { JSX } from "solid-js"

export const Route = createFileRoute("/lessons/_chapter-0/writing-systems")({
  loader: () => ({
    maxWidth: "max-w-4xl",
  }),
  component: WritingSystems,
})

function WritingSystems() {
  return (
    <div class="relative pb-32">
      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>The Three Writing Systems</>}
        subtitle="A high-level overview (yes, there are three)."
      >
        <OverviewItem>Hiragana</OverviewItem>
        <OverviewItem>Katakana</OverviewItem>
        <OverviewItem>Kanji</OverviewItem>
        <OverviewItem>Bonus: Romaji</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-6">
          <SenseiBubble>
            Japanese has three writing systems, and we often use all of them in
            a single sentence, like this:
          </SenseiBubble>

          <div class="text-center">
            <p class="font-japanese mb-3 text-2xl">
              <span class="text-emerald-400/80">テレビ</span>
              <span class="text-sky-400/80">を</span>
              <span class="text-red-400/80">見</span>
              <span class="text-sky-400/80">ます</span>
            </p>
            <p class="mb-4 text-sm text-white/40">
              (terebi o mimasu) - I watch television
            </p>
            <div class="flex justify-center gap-6 text-xs text-white/50">
              <span class="flex items-center gap-1.5">
                <div class="size-2 rounded-full bg-emerald-400/80" /> Katakana
              </span>
              <span class="flex items-center gap-1.5">
                <div class="size-2 rounded-full bg-sky-400/80" /> Hiragana
              </span>
              <span class="flex items-center gap-1.5">
                <div class="size-2 rounded-full bg-red-400/80" /> Kanji
              </span>
            </div>
          </div>
        </div>

        {/* Hiragana */}
        <WritingSystemSection
          color="sky"
          label="Hiragana — The Foundation"
          character="あ"
        >
          <StudentBubble>
            Three writing systems? That seems excessive.
          </StudentBubble>
          <SenseiBubble>
            Each one does a different job. You'll see why once we get into it.
          </SenseiBubble>

          <p class="leading-relaxed text-white/70">
            Hiragana is where you start. These curved characters can represent
            every sound in Japanese:
          </p>

          <div class="font-japanese space-y-1 rounded-lg bg-white/[0.04] p-4 text-center text-2xl font-medium text-white/90">
            <p>あ a</p>
            <p>い i</p>
            <p>う u</p>
            <p>え e</p>
            <p>お o</p>
          </div>

          <div class="flex justify-end">
            <div class="flex items-center gap-4 sm:max-w-[80%] sm:gap-6">
              <img
                src="/img/chapter-0/stones-smooth.png"
                alt="smooth stones"
                class="size-10 shrink-0 opacity-60"
              />
              <div class="flex items-end gap-3 justify-end">
                <div class="rounded-2xl rounded-br-sm bg-dynamic-accent/10 px-4 py-2.5 text-sm leading-relaxed text-white/70">
                  Smooth, rounded shapes. Like stones polished by a river.
                </div>
                <Avatar class="size-7 shrink-0 ring-1 ring-white/10">
                  <AvatarImage src="/img/guru.png" alt="sensei" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <p class="text-sm text-white/50">
            There are 46 of them. Unlike English, they're actually consistent —
            each one always makes the same sound.
          </p>
        </WritingSystemSection>

        {/* Katakana */}
        <WritingSystemSection
          color="emerald"
          label="Katakana — Sharp Strokes"
          character="ア"
        >
          <StudentBubble>And the next one?</StudentBubble>
          <div class="flex justify-end">
            <div class="flex items-center gap-4 sm:max-w-[80%] sm:gap-6">
              <img
                src="/img/chapter-0/katana-leafs.png"
                alt="katana"
                class="size-10 shrink-0 opacity-60"
              />
              <div class="flex items-end gap-3 justify-end">
                <div class="rounded-2xl rounded-br-sm bg-dynamic-accent/10 px-4 py-2.5 text-sm leading-relaxed text-white/70">
                  Same sounds, sharper strokes. Where hiragana looks like river
                  stones, katakana looks like a katana.
                </div>
                <Avatar class="size-7 shrink-0 ring-1 ring-white/10">
                  <AvatarImage src="/img/guru.png" alt="sensei" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <div class="font-japanese space-y-1 rounded-lg bg-white/[0.04] p-4 text-center text-2xl font-medium text-white/90">
            <p>ア a</p>
            <p>イ i</p>
            <p>ウ u</p>
            <p>エ e</p>
            <p>オ o</p>
          </div>

          <p class="leading-relaxed text-white/70">
            Katakana is for borrowed words, sound effects, and emphasis. English
            borrowed "sushi" from Japanese; Japanese borrowed テレビ (terebi)
            from "television." Katakana is how they write those.
          </p>

          <p class="text-sm leading-relaxed text-white/40 italic">
            Loanwords from English? Katakana. Onomatopoeia and sound effects?
            Katakana. Emphasis, like italics or ALL CAPS? Also katakana. You'll
            also see it a lot in sci-fi and tech names.
          </p>
        </WritingSystemSection>

        {/* Kanji */}
        <WritingSystemSection
          color="red"
          label="Kanji — The Borrowed Characters"
          character="日"
        >
          <StudentBubble>And the last one?</StudentBubble>
          <SenseiBubble>Behold, minion...</SenseiBubble>

          <p class="leading-relaxed text-white/70">
            These characters, borrowed from Chinese, are like little pictures
            with meaning. Look closely:
          </p>

          <div class="rounded-lg bg-white/[0.04] p-6 text-center">
            <p class="font-japanese mb-2 text-5xl text-white/90">日</p>
            <p class="text-lg text-white/60">(hi/nichi) - the sun!</p>
          </div>

          <div class="space-y-3 leading-relaxed text-white/50">
            <p>
              One kanji can replace several hiragana characters, making writing
              more compact. These characters are inherited from the neighbors in
              China. The word kanji itself is actually written as{" "}
              <span class="font-japanese text-xl text-white/80">漢字</span>{" "}
              which literally means:
            </p>

            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <span class="font-japanese mr-1 text-xl text-white/80">漢</span>{" "}
              (Han Chinese){" "}
              <span class="font-japanese mx-1 text-xl text-white/80">字</span>{" "}
              (Characters)
            </div>

            <p>
              While China has simplified many of their characters, Japan has
              kept them unchanged.
            </p>
          </div>
        </WritingSystemSection>

        {/* Romaji */}
        <WritingSystemSection
          color="amber"
          label="Bonus — Romaji"
          character="A"
          characterFont={false}
        >
          <StudentBubble>
            Sensei, I've seen Romaji used a lot. What exactly is it?
          </StudentBubble>
          <SenseiBubble>
            Romaji is just Japanese written with Latin letters, like
            "konnichiwa" instead of{" "}
            <span class="font-japanese">こんにちは</span>.
          </SenseiBubble>

          <StudentBubble>So... like training wheels?</StudentBubble>
          <SenseiBubble>
            Exactly. We'll only use it in this first chapter.
          </SenseiBubble>
        </WritingSystemSection>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            <span class="font-japanese font-semibold text-sky-400/80">あ</span>{" "}
            Hiragana — curved characters for native Japanese words and grammar
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese font-semibold text-emerald-400/80">
              ア
            </span>{" "}
            Katakana — angular characters for borrowed words, sound effects, and
            emphasis
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese font-semibold text-red-400/80">日</span>{" "}
            Kanji — Chinese-origin characters that carry meaning
          </SummaryItem>
          <SummaryItem>
            <span class="font-semibold text-amber-400/80">ABC</span> Romaji —
            your Latin alphabet crutch, helping you limp along until you can run
            with the big boys
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

const colorMap = {
  sky: {
    border: "border-sky-400/20",
    glow: "rgba(56, 189, 248, 0.06)",
    text: "text-sky-400/80",
    char: "text-sky-400/10",
  },
  emerald: {
    border: "border-emerald-400/20",
    glow: "rgba(52, 211, 153, 0.06)",
    text: "text-emerald-400/80",
    char: "text-emerald-400/10",
  },
  red: {
    border: "border-red-400/20",
    glow: "rgba(248, 113, 113, 0.06)",
    text: "text-red-400/80",
    char: "text-red-400/10",
  },
  amber: {
    border: "border-amber-400/20",
    glow: "rgba(251, 191, 36, 0.06)",
    text: "text-amber-400/80",
    char: "text-amber-400/10",
  },
}

function WritingSystemSection(props: {
  color: keyof typeof colorMap
  label: string
  character: string
  characterFont?: boolean
  children: JSX.Element
}) {
  const c = () => colorMap[props.color]

  return (
    <div
      class={`relative overflow-hidden rounded-xl border ${c().border} p-6 space-y-5`}
      style={{ background: c().glow }}
    >
      {/* Background character */}
      <span
        class={`pointer-events-none absolute -right-4 -bottom-6 select-none text-[10rem] leading-none ${c().char} ${props.characterFont !== false ? "font-japanese" : ""}`}
      >
        {props.character}
      </span>

      <SectionLabel class={c().text}>{props.label}</SectionLabel>

      <div class="relative space-y-5">{props.children}</div>
    </div>
  )
}

