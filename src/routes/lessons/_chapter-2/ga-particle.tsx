import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-2/ga-particle")({
  component: GaParticle,
})

function GaParticle() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        が
      </span>

      <LessonHeader
        chapter="Chapter 2 · Grammar"
        title={
          <>
            The <span class="text-green-400">が</span> Particle
          </>
        }
        subtitle="Marking the subject, and how it differs from は."
      >
        <OverviewItem>
          The difference between{" "}
          <span class="font-japanese font-semibold text-sky-400">は</span> and{" "}
          <span class="font-japanese font-semibold text-green-400">が</span>
        </OverviewItem>
        <OverviewItem>How emphasis shifts depending on which you use</OverviewItem>
        <OverviewItem>WH-questions and が</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            In this lesson, we'll delve into the{" "}
            <span class="font-japanese text-xl">が</span> (ga) particle, its use
            cases, and how it differs from the{" "}
            <span class="font-japanese text-xl">は</span> (wa) particle. You've
            learned how to define{" "}
            <span class="font-semibold text-sky-400">topics</span> with{" "}
            <span class="font-japanese text-xl font-bold text-sky-400">は</span>
            ; now it's time to understand how to define{" "}
            <span class="font-semibold text-green-400">subjects</span> with{" "}
            <span class="font-japanese text-xl font-bold text-green-400">
              が
            </span>
            .
          </p>
          <p class="mt-4">
            First, let's review our understanding of{" "}
            <span class="font-japanese text-xl">は</span>.
          </p>
        </div>

        {/* は particle */}
        <div class="space-y-4">
          <div class="flex justify-center">
            <Romaji romaji={<span class="text-xs text-muted-foreground/70 dark:text-white/30">Wa</span>}>
              <span class="font-japanese text-2xl font-semibold leading-none text-sky-400">は</span>
            </Romaji>
          </div>
          <ul class="space-y-2 leading-relaxed text-foreground/75 dark:text-white/70">
            <li>
              <span class="font-semibold text-foreground dark:text-white/90">Function: </span>Marks
              the <span class="font-semibold text-sky-400">topic</span> of the
              sentence, indicating what the sentence is about, and emphasizing
              what comes after it.
            </li>
            <li>
              <span class="font-semibold text-foreground dark:text-white/90">Example: </span>
              <span class="font-japanese text-xl">
                これ<span class="font-bold text-sky-400">は</span>
                <Furigana furigana={<span class="text-sm">おおき</span>}>
                  大木
                </Furigana>
                <Furigana furigana={<span class="text-sm">いぬ</span>}>
                  犬
                </Furigana>
                です。
              </span>
              {" ->"} As for this,{" "}
              <span class="font-bold italic">it's a big dog.</span>
            </li>
          </ul>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            All of the emphasis is placed on{" "}
            <span class="font-bold italic">it's a big dog</span>, while quickly
            indicating that it's{" "}
            <span class="font-japanese text-xl">これ</span> that we're referring
            to.
          </p>
        </div>

        {/* が particle */}
        <div class="space-y-4">
          <div class="flex justify-center">
            <Romaji romaji={<span class="text-xs text-muted-foreground/70 dark:text-white/30">Ga</span>}>
              <span class="font-japanese text-2xl font-semibold leading-none text-green-400">が</span>
            </Romaji>
          </div>
          <ul class="space-y-2 leading-relaxed text-foreground/75 dark:text-white/70">
            <li>
              <span class="font-semibold text-foreground dark:text-white/90">Function: </span>Marks
              the <span class="font-semibold text-green-400">subject</span> of
              the sentence (emphasizing the subject).
            </li>
            <li>
              <span class="font-semibold text-foreground dark:text-white/90">Example: </span>
              <span class="font-japanese text-xl">
                これ<span class="font-bold text-green-500">が</span>
                <Furigana furigana={<span class="text-sm">おおき</span>}>
                  大木
                </Furigana>
                <Furigana furigana={<span class="text-sm">いぬ</span>}>
                  犬
                </Furigana>
                です。
              </span>
              {" ->"} As for <span class="font-bold italic">this</span>, it's a
              big dog.
            </li>
          </ul>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The emphasis here is placed on{" "}
            <span class="font-bold italic">this</span>. In this case,{" "}
            <span class="font-japanese text-xl">これ</span> is much more
            important.
          </p>
        </div>

        {/* Video + notes */}
        <div class="space-y-4">
          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *Please note that the above examples are taken from Andy's YouTube
            video where he explains the differences between{" "}
            <span class="font-japanese not-italic">は</span> and{" "}
            <span class="font-japanese not-italic">が</span>. We recommend
            watching his video for further understanding:
          </p>
          <YouTubeVideo
            videoId="ytjRoTwWnzw"
            title="Japanese は and が Particles in 2 Minutes | (WA) vs (GA)"
            credit="ToKini Andy"
          />
          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *The comparison aspect of{" "}
            <span class="font-japanese not-italic">は</span> will be covered in
            later chapters.
          </p>
        </div>

        {/* More examples */}
        <div class="space-y-4">
          <SectionLabel>Another example</SectionLabel>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                これ<span class="font-bold text-sky-400">は</span>ペンです。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                This is a <span class="font-bold italic">pen.</span>
              </p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <span class="font-semibold text-foreground/80 dark:text-white/80">Context: </span>Use
                when you want to introduce "pen" as the topic of discussion.
              </p>
              <p class="mt-1 text-xs text-muted-foreground dark:text-white/40">
                Situation: Showing items one by one in a demonstration.
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                これ<span class="font-bold text-green-500">が</span>ペンです。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                <span class="font-bold italic">This</span> is a pen.
              </p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <span class="font-semibold text-foreground/80 dark:text-white/80">Context: </span>Use
                when emphasizing "this" as the subject.
              </p>
              <p class="mt-1 text-xs text-muted-foreground dark:text-white/40">
                Situation: Someone searches among many objects; you clarify "this
                one specifically is the pen."
              </p>
            </div>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            For now, this is enough to get started with{" "}
            <span class="font-japanese">が</span>. For more, see{" "}
            <a
              href="https://8020japanese.com/wa-vs-ga/"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              this clearer article
            </a>{" "}
            (best revisited in Chapter 3 when verbs/particles are familiar).
          </p>
        </div>

        {/* WH Questions */}
        <div class="space-y-6">
          <SectionLabel>
            WH questions and{" "}
            <span class="font-japanese text-green-400">が</span>
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            WH-words (who, what, where, when, why, which) like{" "}
            <span class="font-japanese">だれ</span>,{" "}
            <span class="font-japanese">なに</span>,{" "}
            <span class="font-japanese">どこ</span>,{" "}
            <span class="font-japanese">どれ</span>,{" "}
            <span class="font-japanese">どの</span>+noun, etc. are always marked
            by{" "}
            <span class="font-japanese font-bold text-green-500">が</span> when
            they're the subject of a sentence.
          </p>

          {/* Incorrect vs Correct */}
          <div class="space-y-3">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-xl text-muted-foreground dark:text-white/50 line-through">
                どれは田中さんのペンですか。
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                どれ<span class="font-bold text-green-500">が</span>
                田中さんのペンですか。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Which one is Tanaka's pen?
              </p>
            </div>
          </div>

          <ul class="space-y-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              This emphasizes{" "}
              <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                どれ
              </span>{" "}
              (which one) as the subject.
            </li>
            <li>
              Example: Standing at a desk with several pens and asking which
              belongs to Tanaka.
            </li>
          </ul>

          {/* Alternative using は */}
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
              Also correct
            </p>
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              田中さんのペン<span class="font-bold text-sky-400">は</span>
              どれですか。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              Which one is Tanaka's pen?
            </p>
          </div>

          <ul class="space-y-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              This places 「田中さんのペン」 as the topic. Then asks: among
              these, which one is it?
            </li>
            <li>
              Example: You know one pen belongs to Tanaka; you need to identify
              which.
            </li>
          </ul>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *There may be more than 1 correct answer*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You are showing your friend different items in your room. How
                would you say "This is a pen"?
              </p>
              <SelectText
                answer="これはペンです。"
                a="これはペンです。"
                b="これがペンです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend is looking for their notebook among several on the
                table. How would you say "This one's your notebook"?
              </p>
              <SelectText
                answer="これが[name]のノートです。"
                a="これは[name]のノートです。"
                b="これが[name]のノートです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Someone asks, "Who has this?" How would you say "Taro has it"?
              </p>
              <SelectText
                answer="たろうがもっています。"
                a="たろうはもっています。"
                b="たろうがもっています。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Which sentence(s) correctly ask(s), "What is that?"
              </p>
              <p class="text-sm text-muted-foreground dark:text-white/40">
                *<span class="font-japanese">何</span> {"->"} なん・なに
              </p>
              <SelectText
                answer="それは何ですか。"
                a="何がそれですか。"
                b="何はそれですか。"
                c="それは何ですか。"
                d="それが何ですか。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Choose the correct sentence(s) to ask, "Which one is Takashi's
                notebook?"
              </p>
              <SelectText
                answer={[
                  "隆さんのノートはどれですか。",
                  "どれが隆さんのノートですか。",
                ]}
                a="隆さんのノートはどれですか。"
                b="どれは隆さんのノートですか。"
                c="どれが隆さんのノートですか。"
                d="隆さんのノートがどれですか。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            は marks the topic (emphasizes what comes after)
          </SummaryItem>
          <SummaryItem>
            が marks the subject (emphasizes what comes before)
          </SummaryItem>
          <SummaryItem>
            WH-words as subjects always use が, never は
          </SummaryItem>
          <SummaryItem>
            Same sentence with は vs が shifts emphasis, not meaning
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
