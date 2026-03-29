import type { JSX } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-1/anou-etto")({
  component: AnouEtto,
})

function AnouEtto() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        え
      </span>

      <LessonHeader
        chapter="Chapter 1 · Getting Started"
        title={<>Filler Words</>}
        subtitle="The sounds that make your pauses sound natural."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-white/60">あのう</span>{" "}
          and{" "}
          <span class="font-japanese font-semibold text-white/60">えっと</span>{" "}
          for hesitation
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-white/60">まあ</span>,{" "}
          <span class="font-japanese font-semibold text-white/60">
            そうですね
          </span>
          , and{" "}
          <span class="font-japanese font-semibold text-white/60">なんか</span>
        </OverviewItem>
        <OverviewItem>When and how to use each one</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <SectionLabel>Let's face it...</SectionLabel>
          <p class="leading-relaxed text-white/70">
            No matter what language proficiency level you're at, you're going to
            pause, you're going to hesitate, and you're certainly going to make
            mistakes. It's all part of the learning process. But what if I told
            you that there's a way to make even your pauses sound more natural
            and fluent? That's where filler words come in.
          </p>
          <p class="leading-relaxed text-white/70">
            Japanese has many common filler words such as{" "}
            <span class="font-japanese font-semibold text-white/90">あのう</span>{" "}
            (anou),{" "}
            <span class="font-japanese font-semibold text-white/90">えっと</span>{" "}
            (etto),{" "}
            <span class="font-japanese font-semibold text-white/90">まあ</span>{" "}
            (maa), and{" "}
            <span class="font-japanese font-semibold text-white/90">
              そうですね
            </span>{" "}
            (sou desu ne), to name a few. Using these appropriately can help you
            sound more like a native speaker.
          </p>
        </div>

        {/* あのう */}
        <FillerSection jp="あのう" romaji="Anou">
          <p class="leading-relaxed text-white/70">
            A very common word used to politely interrupt someone. It's also
            used when you need to buy time to think, similar to um or uh in
            English.
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              あのう、すみません。
            </p>
          </div>
          <p class="text-sm leading-relaxed text-white/50">
            Unlike in English, using あのう before asking for help or
            interrupting someone can actually be polite and considerate, showing
            that you are being thoughtful.
          </p>
        </FillerSection>

        {/* えっと */}
        <FillerSection jp="えっと" romaji="Etto">
          <p class="leading-relaxed text-white/70">
            A very common filler word to buy time to think, similar to um or uh
            in English.
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              えっと、つぎになにをするべきでしょうか。
            </p>
            <p class="mt-1 text-sm text-white/40">
              Well, what should we do next?
            </p>
          </div>
          <p class="text-sm leading-relaxed text-white/50">
            あのう is generally used more often than えっと when politely
            interrupting someone, but both are equally preferred when meaning
            um/uh. The choice comes down to personal preference.
          </p>
        </FillerSection>

        {/* まあ */}
        <FillerSection jp="まあ" romaji="Maa">
          <p class="leading-relaxed text-white/70">
            Can be used to show hesitation or to soften a statement, as well as
            to express annoyance, resignation, or amazement, depending on
            context and intonation.
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              まあ、いいんじゃないかな。
            </p>
            <p class="mt-1 text-sm text-white/40">
              Well, I guess that's fine.
            </p>
          </div>
        </FillerSection>

        {/* そうですね */}
        <FillerSection jp="そうですね" romaji="Sou desu ne">
          <p class="leading-relaxed text-white/70">
            Used to agree with someone or to show you're considering something,
            similar to "I see" or "that's right" in English.
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              そうですね、そうしましょう。
            </p>
            <p class="mt-1 text-sm text-white/40">I see, let's do that.</p>
          </div>
        </FillerSection>

        {/* なんか */}
        <FillerSection jp="なんか" romaji="Nanka">
          <p class="leading-relaxed text-white/70">
            Used when you can't find the right word, similar to "like" or "you
            know" in English.
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              なんか、ちょっと変だね。
            </p>
            <p class="mt-1 text-sm text-white/40">
              Like, it's a bit strange, you know.
            </p>
          </div>
        </FillerSection>

        {/* Wrap-up */}
        <div class="space-y-4">
          <SectionLabel>Getting a feel for it...</SectionLabel>
          <p class="leading-relaxed text-white/70">
            The best way you can learn these words is to listen to lots of
            native material. Watching Japanese content <em>without</em> English
            subtitles is always preferred, but you'll be able to pick up these
            filler words even with subtitles if you listen/watch enough.
          </p>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            あのう for polite interruptions, えっと to buy thinking time
          </SummaryItem>
          <SummaryItem>
            まあ softens statements or expresses various emotions
          </SummaryItem>
          <SummaryItem>
            そうですね to agree or show you're considering something
          </SummaryItem>
          <SummaryItem>
            なんか when you can't find the right word ("like" / "you know")
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

/* --- Filler Word Section --- */
function FillerSection(props: {
  jp: string
  romaji: string
  children: JSX.Element
}) {
  return (
    <div class="space-y-4">
      <div class="flex items-baseline gap-3">
        <h3 class="font-japanese text-2xl font-bold text-white/90">
          {props.jp}
        </h3>
        <span class="text-lg font-medium text-white/40">{props.romaji}</span>
      </div>
      {props.children}
    </div>
  )
}
