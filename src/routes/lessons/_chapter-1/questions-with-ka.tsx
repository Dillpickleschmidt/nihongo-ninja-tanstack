import { createFileRoute } from "@tanstack/solid-router"
import Romaji from "@/components/text/Romaji"
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

export const Route = createFileRoute(
  "/lessons/_chapter-1/questions-with-ka",
)({
  component: QuestionsWithKa,
})

function QuestionsWithKa() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        か
      </span>

      <LessonHeader
        chapter="Chapter 1 · Grammar"
        title={
          <>
            Questions with <span class="text-dynamic-accent">か</span>
          </>
        }
        subtitle="How one particle turns any statement into a question."
      >
        <OverviewItem>
          Forming yes/no questions with{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">か</span>
        </OverviewItem>
        <OverviewItem>
          Question words:{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">
            なん・なに
          </span>
        </OverviewItem>
        <OverviewItem>Rising vs. falling intonation</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro Video */}
        <div>
          <YouTubeVideo
            videoId="_bG8RWRAaJM"
            title="か (ka) #9 Ultimate Japanese Particle Guide"
            credit="JapanesePod101.com"
            startTime={7}
          />
        </div>

        {/* Yes/No Questions */}
        <div class="space-y-4">
          <SectionLabel>Forming yes/no questions</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            To form a yes/no question in Japanese, simply add{" "}
            <span class="font-japanese font-semibold text-dynamic-accent">
              か
            </span>{" "}
            to the end of a statement.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Statement
              </p>
              <p class="mt-1 font-japanese text-xl font-semibold text-foreground dark:text-white/90">
                がくせいです。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                <span class="text-muted-foreground dark:text-white/40">(I am)</span> a student.
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Question
              </p>
              <p class="mt-1 font-japanese text-xl font-semibold text-foreground dark:text-white/90">
                がくせいです
                <span class="text-dynamic-accent">か</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Are <span class="text-muted-foreground dark:text-white/40">(you)</span> a student?
              </p>
            </div>
          </div>

          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            Notice that in Japanese, it is not customary to use a question mark
            when the <span class="font-japanese">か</span> particle is present,
            though it is sometimes used in casual writing for clarity.
          </p>
        </div>

        {/* Question Words */}
        <div class="space-y-4">
          <SectionLabel>Question words</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In addition to yes/no questions, Japanese questions often use
            specific question words, such as:
          </p>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <QuestionWordCard jp="なん / なに" en="what" />
            <QuestionWordCard jp="どこ" en="where" />
            <QuestionWordCard jp="だれ" en="who" />
            <QuestionWordCard jp="いつ" en="when" />
            <QuestionWordCard jp="どう" en="how" />
            <QuestionWordCard jp="なぜ" en="why" />
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            These question words are typically followed by{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">か</span> to
            form a complete question.
          </p>
          <p class="leading-relaxed italic text-muted-foreground dark:text-white/50">
            In this lesson, we'll focus on using{" "}
            <span class="font-japanese not-italic text-foreground/75 dark:text-white/70">なん・なに</span>{" "}
            with the{" "}
            <span class="font-japanese not-italic text-foreground/75 dark:text-white/70">か</span>{" "}
            particle.
          </p>
        </div>

        {/* Example breakdown */}
        <div class="space-y-4">
          <GlowBox>
            <p class="text-center font-japanese text-2xl font-semibold text-foreground dark:text-white/90">
              せんこうはなんですか。
            </p>
          </GlowBox>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <ul class="space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              <li>
                <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                  せんこう
                </span>{" "}
                - major
              </li>
              <li>
                <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">は</span>{" "}
                - topic particle
              </li>
              <li>
                <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                  なん
                </span>{" "}
                - what
              </li>
              <li>
                <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                  です
                </span>{" "}
                - is
              </li>
              <li>
                <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">か</span>{" "}
                - question particle
              </li>
            </ul>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Literally:{" "}
            <span class="font-semibold text-foreground dark:text-white/90">
              As for your major, what is it?
            </span>
          </p>

          <div class="space-y-2">
            <p class="text-sm font-medium text-muted-foreground dark:text-white/40">Responses</p>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                せんこうはえいごです。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">My major is English.</p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">えいごです。</p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">It's English.</p>
            </div>
          </div>
        </div>

        {/* なん vs なに */}
        <div class="space-y-6">
          <SectionLabel>
            <span class="font-japanese text-dynamic-accent">なん</span> vs{" "}
            <span class="font-japanese text-dynamic-accent">なに</span>
          </SectionLabel>
          <p class="text-center font-japanese text-3xl text-dynamic-accent">
            何 <span class="text-xl text-muted-foreground dark:text-white/40">(なん / なに)</span>
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-dynamic-accent">
                なに
              </p>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">Stands on its own.</p>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/40">
                <span class="font-japanese text-foreground/75 dark:text-white/70">
                  <Romaji romaji={<span class="text-xs text-muted-foreground dark:text-white/40">何</span>} class="-mt-1 leading-none">なに</Romaji>をしますか。
                </span>{" "}
                - What will you do?
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-dynamic-accent">
                なん
              </p>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">
                Before words beginning with d / n / t sounds, and with counters.
              </p>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/40">
                <span class="font-japanese text-foreground/75 dark:text-white/70"><Romaji romaji={<span class="text-xs text-muted-foreground dark:text-white/40">何</span>} class="-mt-1 leading-none">なん</Romaji>ですか。</span> -
                What is it?
              </p>
            </div>
          </div>

          <AsideBlock label="Quick tips">
            <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              <li>Use なん before d, n, t sounds, and counters.</li>
              <li>Use なに in other cases.</li>
              <li>
                Don't overthink — you'll naturally pick it up with practice.
              </li>
            </ul>
          </AsideBlock>
        </div>

        {/* Example Sentences */}
        <div class="space-y-4">
          <SectionLabel>
            <span class="font-japanese text-muted-foreground dark:text-white/50">か</span> example
            sentences
          </SectionLabel>
          <div class="space-y-3">
            <ExampleQA
              q="いまなんじですか。"
              a="くじです。"
              gloss="It is nine o'clock."
              title="What time is it now?"
            />
            <ExampleQA
              q="ゆきさんはなんさいですか。"
              a="じゅうきゅうさいです。"
              gloss="I'm nineteen years old."
              title="How old are you, Yuki?"
            />
            <ExampleQA
              q="なんねんせいですか。"
              a="にねんせいです。"
              gloss="I'm a sophomore."
              title="What year are you in college?"
            />
            <ExampleQA
              q="でんわばんごうはなんばんですか。"
              a="はちろくななごさんぜろきゅうです。"
              gloss="It is 867-5309."
              title="What is your telephone number?"
            />
          </div>
        </div>

        {/* Non-Question Uses */}
        <div class="space-y-4">
          <SectionLabel>
            Non-question uses of{" "}
            <span class="font-japanese text-muted-foreground dark:text-white/50">か</span>
          </SectionLabel>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-foreground/80 dark:text-white/80">
                Saying "or"
              </p>
              <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                日本人か韓国人 - Japanese or Korean. Here, か works like "or."
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-foreground/80 dark:text-white/80">
                Expressing surprise / uncertainty
              </p>
              <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                そうですか - "Is that so?" / "Oh, really?" with nuance of mild
                surprise.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-foreground/80 dark:text-white/80">
                Polite confirmations
              </p>
              <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>そうですね。- That's right.</p>
                <p>
                  そうですか。- I see. / Is that so? Indicates attentiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intonation */}
        <div class="space-y-6">
          <SectionLabel>Intonation</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Intonation plays a crucial role with{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">か</span>.
            Rising or falling tones can change whether you are seeking
            information, politely confirming, or showing realization.
          </p>

          {/* Rising */}
          <div class="space-y-4">
            <p class="text-center text-lg font-semibold text-foreground/80 dark:text-white/80">
              Rising Intonation (
              <span class="text-yellow-400">↑</span>)
            </p>
            <p class="leading-relaxed text-foreground/75 dark:text-white/70">
              Rising intonation is often used in direct questions, especially
              when seeking new information or confirmation — just like in
              English.
            </p>
            <div class="space-y-3">
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Example 1
                </p>
                <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  <p>
                    Q:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      いまなんじですか
                    </span>
                    <span class="text-yellow-400">↑</span>。 – What time is it
                    now?
                  </p>
                  <p>
                    A:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      くじです。
                    </span>{" "}
                    – It is nine o'clock.
                  </p>
                </div>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Example 2
                </p>
                <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  <p>
                    Q:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      さとうさんはがくせいですか
                    </span>
                    <span class="text-yellow-400">↑</span>。 – Are you (Satou)
                    a student?
                  </p>
                  <p>
                    A:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      はい、がくせいです。
                    </span>{" "}
                    – Yes, I am a student.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Falling */}
          <div class="space-y-4">
            <p class="text-center text-lg font-semibold text-foreground/80 dark:text-white/80">
              Falling Intonation (
              <span class="text-indigo-400">↓</span>)
            </p>
            <p class="leading-relaxed text-foreground/75 dark:text-white/70">
              Falling intonation is more common when confirming information you
              just heard, showing realization, or mild surprise.
            </p>
            <div class="space-y-3">
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Example 1
                </p>
                <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  <p>
                    A:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      あのう、いまなんじですか
                    </span>
                    <span class="text-yellow-400">↑</span>。 – Excuse me, what
                    time is it?
                  </p>
                  <p>
                    B:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      いま、１０じです。
                    </span>{" "}
                    – Right now it's 10 o'clock.
                  </p>
                  <p>
                    A:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      あ、１０じですか
                    </span>
                    <span class="text-indigo-400">↓</span>
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      。ありがとうございます。
                    </span>{" "}
                    – Oh, it's 10 o'clock. Thank you.
                  </p>
                </div>
              </div>
              <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                  Example 2
                </p>
                <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  <p>
                    A:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      はじめまして。Aです。
                    </span>{" "}
                    – Nice to meet you. I'm A.
                  </p>
                  <p>
                    B:{" "}
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      ああ、Aさんですか
                    </span>
                    <span class="text-indigo-400">↓</span>
                    <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                      。はじめまして。Bです。
                    </span>{" "}
                    – Oh, you're A? Nice to meet you. I'm B.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Add か to the end of a statement to make it a question
          </SummaryItem>
          <SummaryItem>
            なん before d/n/t sounds and counters, なに otherwise
          </SummaryItem>
          <SummaryItem>
            Rising intonation (↑) asks, falling (↓) confirms
          </SummaryItem>
          <SummaryItem>か between two options means "or"</SummaryItem>
          <SummaryItem>
            そうですか expresses mild surprise or acknowledgment
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

/* --- Question Word Card --- */
function QuestionWordCard(props: { jp: string; en: string }) {
  return (
    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3 text-center">
      <p class="font-japanese text-xl font-semibold text-foreground dark:text-white/90">
        {props.jp}
      </p>
      <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">{props.en}</p>
    </div>
  )
}

/* --- Example Q/A --- */
function ExampleQA(props: {
  q: string
  a: string
  gloss: string
  title: string
}) {
  return (
    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
        {props.title}
      </p>
      <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
        <p>
          A:{" "}
          <span class="font-japanese text-base text-foreground/80 dark:text-white/80">{props.q}</span>
        </p>
        <p>
          B:{" "}
          <span class="font-japanese text-base text-foreground/80 dark:text-white/80">{props.a}</span> –{" "}
          {props.gloss}
        </p>
      </div>
    </div>
  )
}
