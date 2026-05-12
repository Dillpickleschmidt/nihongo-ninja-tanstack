import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/ui/custom/CustomTextArea"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-3/saying-and-so-but",
)({
  component: SayingAndSoBut,
})

function SayingAndSoBut() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        接
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={<>Saying And, So, and But</>}
        subtitle="Five words for connecting ideas in Japanese."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">
            そして・それから
          </span>{" "}
          for "and" / "and then"
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">
            でも・けど・が
          </span>{" "}
          for "but"
        </OverviewItem>
        <OverviewItem>
          Using けど to introduce topics and soften requests
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            In this lesson, we'll learn how to connect ideas in Japanese using
            words that mean{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              and
            </span>
            ,{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              so
            </span>
            , and{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              but
            </span>
            . We'll focus on five important words:{" "}
            <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
              そして、それから、でも、けど、
            </span>
            and{" "}
            <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
              が
            </span>
            .
          </p>
        </div>

        {/* Saying "And" */}
        <div class="space-y-4">
          <SectionLabel>Saying "and"</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Both <span class="font-japanese">そして</span> and{" "}
            <span class="font-japanese">それから</span> mean{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              and
            </span>{" "}
            or{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              and then
            </span>
            . They're used to connect sentences or ideas.
          </p>
        </div>

        {/* そして */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              そして
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Soshite</span>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Used to add information or show a sequence of events.
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              私は朝ごはんを食べます。そして、学校に行きます。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              I eat breakfast. And then, I go to school.
            </p>
          </div>
        </div>

        {/* それから */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              それから
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Sorekara</span>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Similar to <span class="font-japanese">そして</span>, but often
            implies a longer time gap between events.
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              私は宿題をします。それから、テレビを見ます。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              I do my homework. After that, I watch TV.
            </p>
          </div>
        </div>

        {/* Saying "But" */}
        <div class="space-y-4">
          <SectionLabel>Saying "but"</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            These words are used to show contrast or introduce a contradicting
            idea.
          </p>
        </div>

        {/* でも */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              でも
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Demo</span>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Used at the beginning of a sentence to mean{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              but
            </span>{" "}
            or{" "}
            <span class="font-semibold text-foreground dark:text-white/90 underline underline-offset-[3px]">
              however
            </span>
            .
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              日本語は難しいです。でも、楽しいです。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              Japanese is difficult. But it's fun.
            </p>
          </div>

          <AsideBlock>
            <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              <span class="font-semibold text-foreground/80 dark:text-white/80">Important:</span>{" "}
              <span class="font-japanese">でも</span> can{" "}
              <span class="font-semibold text-foreground/80 dark:text-white/80">only</span> appear at
              the beginning of the sentence. Don't use a comma after{" "}
              <span class="font-japanese">です</span>,{" "}
              <span class="font-japanese">ます</span>, etc. when{" "}
              <span class="font-japanese">でも</span> follows:
            </p>
          </AsideBlock>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                たいていうちで勉強します、でも、ときどき本を読みます。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                たいていうちで勉強します。でも、ときどき本を読みます。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I usually study at home. But sometimes I read books.
              </p>
            </div>
          </div>
        </div>

        {/* けど */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              けど
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Kedo</span>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Used to connect two contrasting ideas within a sentence. More casual
            than <span class="font-japanese">が</span>.
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              映画は面白かったけど、長かったです。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              The movie was interesting, but it was long.
            </p>
          </div>
        </div>

        {/* けど - Topic introduction */}
        <div class="space-y-4">
          <SectionLabel>
            Using けど to bring up new topics
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            <span class="font-japanese">けど</span> is often used to introduce a
            new topic or provide background information before the main point.
            This is a common conversational strategy in Japanese:
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              あのう、週末ですけど、映画を見ませんか。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              Um, regarding this weekend, would you like to see a movie?
            </p>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In this usage, <span class="font-japanese">けど</span> doesn't
            necessarily express contrast. Instead, it serves to:
          </p>
          <ol class="space-y-2 leading-relaxed text-foreground/75 dark:text-white/70">
            <li>
              <span class="font-semibold text-foreground dark:text-white/90">1.</span> Smooth the
              conversation by providing context before the main point.
            </li>
            <li>
              <span class="font-semibold text-foreground dark:text-white/90">2.</span> Make requests
              or suggestions sound less direct and more polite.
            </li>
          </ol>

          <p class="text-center text-sm italic text-muted-foreground dark:text-white/50">
            Here's an excellent video that explains this usage of{" "}
            <span class="font-japanese not-italic">けど</span> in more detail:
          </p>

          <YouTubeVideo
            videoId="gPlFnVKqfv4"
            title="けど Is Not Always But"
            credit="Kaname Naito"
          />
        </div>

        {/* けど - Softening */}
        <div class="space-y-4">
          <SectionLabel>
            Softening requests with けど
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In casual speech, <span class="font-japanese">けど</span> is often
            used at the end of a sentence to soften a request or statement:
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              ちょっと暑いんですけど。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              It's a bit hot in here. (Implying: Could you turn on the AC?)
            </p>
          </div>
        </div>

        {/* が */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              が
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Ga</span>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Similar to <span class="font-japanese">けど</span>, but more formal
            and often used in writing.
          </p>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
              日本語を勉強していますが、まだ上手ではありません。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              I'm studying Japanese, but I'm not good at it yet.
            </p>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Both <span class="font-japanese">けど</span> and{" "}
            <span class="font-japanese">が</span> can be used to connect
            contrasting ideas, introduce new topics, or provide background
            information. Their functions and usages are essentially the same in
            all aspects. The main difference lies in their level of formality:
          </p>

          <AsideBlock>
            <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              While <span class="font-japanese">が</span> and{" "}
              <span class="font-japanese">けど</span> function similarly,{" "}
              <span class="font-japanese">が</span> is more commonly used in
              formal speech or writing, whereas{" "}
              <span class="font-japanese">けど</span> is more common in
              everyday conversation.
            </p>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              *Notice that this usage of <span class="font-japanese">が</span>{" "}
              is totally different from the subject marker,{" "}
              <span class="font-japanese">が</span>.
            </p>
          </AsideBlock>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Try using these connectives in your own sentences to make your
            Japanese more natural and expressive.
          </p>

          <div class="space-y-6">
            <div class="space-y-2">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                <span class="font-semibold text-foreground dark:text-white/90">1.</span> Connect two
                activities you do daily using{" "}
                <span class="font-japanese">そして</span> or{" "}
                <span class="font-japanese">それから</span>:
              </p>
              <WanakanaWrapper enabled={true} watch={null}>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
            <div class="space-y-2">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                <span class="font-semibold text-foreground dark:text-white/90">2.</span> Express a
                contrasting idea about a hobby or food using{" "}
                <span class="font-japanese">でも</span> or{" "}
                <span class="font-japanese">けど</span>:
              </p>
              <WanakanaWrapper enabled={true} watch={null}>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
            <div class="space-y-2">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                <span class="font-semibold text-foreground dark:text-white/90">3.</span> Try
                introducing a new topic using{" "}
                <span class="font-japanese">けど</span>, then make a suggestion
                or ask a question:
              </p>
              <WanakanaWrapper enabled={true} watch={null}>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
          </div>
        </div>

        <p class="italic text-muted-foreground dark:text-white/40">
          By incorporating these connectives into your Japanese, you'll be able
          to express more complex ideas and have more natural conversations.
        </p>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            そして / それから = "and then" (それから implies more time)
          </SummaryItem>
          <SummaryItem>
            でも = "but" (start of sentence only, full stop before it)
          </SummaryItem>
          <SummaryItem>
            けど = "but" within a sentence, also introduces topics and softens
            requests
          </SummaryItem>
          <SummaryItem>
            が = formal version of けど (different from が the subject marker)
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
