import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import SelectText from "@/components/text/MultipleChoiceText"
import CustomTextArea from "@/components/ui/custom/CustomTextArea"
import Romaji from "@/components/text/Romaji"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-3/o-de-ni-e-particles",
)({
  component: ODeNiEParticles,
})

function ODeNiEParticles() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        助
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={
          <>
            <span class="font-japanese text-[#ef4444]">を</span>,{" "}
            <span class="font-japanese text-orange-400">で</span>,{" "}
            <span class="font-japanese text-green-500">に</span>,{" "}
            <span class="font-japanese text-sky-400">へ</span> Particles
          </>
        }
        subtitle="How particles replace word order to define sentence roles."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-[#ef4444]">を</span>{" "}
          marks the direct object
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-orange-400">で</span>{" "}
          for means, location of action, or cause
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-green-500">に</span>/
          <span class="font-japanese font-semibold text-sky-400">へ</span> for
          direction and specific time
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro: Why particles matter */}
        <div class="space-y-4 leading-relaxed text-white/70">
          <p>
            Many language learners find Japanese sentence structure confusing and
            difficult to grasp. This is understandable, as:
          </p>
          <p class="text-center text-xl text-white/80">
            "The main thing that differentiates Japanese from most other
            languages is its use of particles"{" "}
            <span class="text-sm text-white/40">(80/20 Japanese)</span>.
          </p>
          <p>
            Let's start by looking at how English sentences work. In English,
            word order is crucial. We typically follow a Subject-Verb-Object
            (SVO) structure:
          </p>

          <p class="text-center text-lg font-semibold text-white/90">
            I eat sushi.
          </p>

          <ul class="space-y-1 text-white/60">
            <li>
              <span class="font-semibold text-white/80">I</span> - the subject
              (who's doing the action)
            </li>
            <li>
              <span class="font-semibold text-white/80">eat</span> - the verb
              (the action itself)
            </li>
            <li>
              <span class="font-semibold text-white/80">sushi</span> - the
              object (what's being acted upon)
            </li>
          </ul>

          <p>
            The order of these words tells us who is doing what to whom. If we
            change the order to "Sushi eat I," the sentence no longer makes
            sense.
          </p>

          <div class="relative w-full">
            <p class="absolute font-bold text-[#ef4444]">Incorrect</p>
            <p class="text-center">
              <span class="text-lg line-through">Sushi eat I.</span>
            </p>
          </div>

          <p>
            Japanese, however, works differently. Instead of relying on word
            order, Japanese uses special markers called particles to show the
            role of each word in a sentence. These particles are short words
            (often 1-2 characters) that attach to nouns and other elements to
            indicate their function.
          </p>
          <p>Let's look at the same sentence in Japanese:</p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-center text-xl text-white/90">
              <Furigana furigana={<span class="text-xs">わたし</span>}>
                私
              </Furigana>
              は
              <Furigana furigana={<span class="text-xs">すし</span>}>
                寿司
              </Furigana>
              を
              <Furigana furigana={<span class="text-xs">た</span>}>食</Furigana>
              べます。
            </p>
            <ul class="mt-3 space-y-1 text-sm text-white/60">
              <li>
                <span class="font-japanese font-semibold text-white/80">
                  私
                </span>{" "}
                - I
              </li>
              <li>
                <span class="font-japanese font-semibold text-white/80">
                  は
                </span>{" "}
                - topic marker particle
              </li>
              <li>
                <span class="font-japanese font-semibold text-white/80">
                  寿司
                </span>{" "}
                - sushi
              </li>
              <li>
                <span class="font-japanese font-semibold text-white/80">
                  を
                </span>{" "}
                - object marker particle
              </li>
              <li>
                <span class="font-japanese font-semibold text-white/80">
                  食べます
                </span>{" "}
                - eat
              </li>
            </ul>
          </div>

          <p>
            This sentence has two particles:{" "}
            <span class="font-japanese text-xl font-semibold text-white/90">
              は
            </span>{" "}
            <span class="text-sm">(which we've seen)</span> and our first new
            particle in this lesson,{" "}
            <span class="font-japanese text-xl font-semibold text-white/90">
              を
            </span>
            .
          </p>
        </div>

        {/* を Particle */}
        <div class="space-y-4">
          <SectionLabel>
            1.{" "}
            <span class="font-japanese text-[#ef4444]">を</span> - The direct
            object particle
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            The <span class="font-japanese text-xl">を</span> particle marks the
            direct object of an action verb. It indicates what or who is
            receiving the action.
          </p>
          <p class="leading-relaxed text-white/70">
            <span class="font-semibold text-white/90">Usage:</span> Place{" "}
            <span class="font-japanese text-xl">を</span> directly after the
            noun that is the object of the action.
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">
                <span class="underline underline-offset-4">
                  本<span class="font-bold text-[#ef4444]">を</span>
                </span>
                読みます。
              </span>
              <span class="ml-3 text-sm text-white/40">I read a book.</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">
                <span class="underline underline-offset-4">
                  水<span class="font-bold text-[#ef4444]">を</span>
                </span>
                飲みます。
              </span>
              <span class="ml-3 text-sm text-white/40">I drink water.</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">
                <span class="underline underline-offset-4">
                  日本語<span class="font-bold text-[#ef4444]">を</span>
                </span>
                勉強します。
              </span>
              <span class="ml-3 text-sm text-white/40">I study Japanese.</span>
            </div>
          </div>

          <p class="text-center text-sm font-semibold text-white/70">
            While written as を, this particle is pronounced as "o" in modern
            Japanese.
          </p>
          <p class="text-xs italic text-white/40">
            Also, the particle <span class="font-japanese">を</span> is written
            as "wo" in romaji even though it's pronounced "o". Kind of
            confusing, but you hopefully won't be reading romaji anyway.
          </p>

          <YouTubeVideo
            videoId="k2lJ87F10Co"
            title="The を Particle in Japanese"
            credit="ToKini Andy"
          />

          <p class="text-sm italic text-white/50">
            While the{" "}
            <span class="font-japanese text-base not-italic">を</span> particle
            is fairly straightforward, it's important to note that{" "}
            <span class="underline underline-offset-2">
              not all verbs can be used with a{" "}
              <span class="font-semibold not-italic">
                noun+<span class="font-japanese text-base">を</span>
              </span>
            </span>
            , instead, they may require a different particle. For more
            information on this, check out{" "}
            <a
              href="https://8020japanese.com/particle-wo/"
              target="_blank"
              class="text-dynamic-accent not-italic underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              this article by 80/20 Japanese on the を particle
            </a>
            . We'll cover this in more detail in later lessons, though.
          </p>
        </div>

        {/* Word order explanation */}
        <div class="space-y-4 leading-relaxed text-white/70">
          <p>
            Now, let's return to word order. In English, saying "sushi eat I" or
            "sushi eat me" sounds like sushi has the capability to swallow you
            for breakfast, rediculous!
          </p>
          <p class="text-center text-lg text-white/80">
            Changing word order in English changes the object being acted upon by
            the verb.
          </p>
          <p>
            Japanese is different. No matter where the object is placed in a
            sentence, so long as{" "}
            <span class="font-japanese text-xl">を</span> is attached to the end
            of it, it's the object receiving action.
          </p>
          <p>
            Here's two grammatically correct ways of writing the same Japanese
            sentence:
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-center text-xl text-white/90">
                <Furigana furigana={<span class="text-xs">わたし</span>}>
                  私
                </Furigana>
                は
                <Furigana furigana={<span class="text-xs">すし</span>}>
                  寿司
                </Furigana>
                を
                <Furigana furigana={<span class="text-xs">た</span>}>
                  食
                </Furigana>
                べます。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-center text-xl text-white/90">
                <Furigana furigana={<span class="text-xs">すし</span>}>
                  寿司
                </Furigana>
                を
                <Furigana furigana={<span class="text-xs">わたし</span>}>
                  私
                </Furigana>
                は
                <Furigana furigana={<span class="text-xs">た</span>}>
                  食
                </Furigana>
                べます。
              </p>
            </div>
          </div>

          <ul class="space-y-1.5 text-sm text-white/60">
            <li>
              Because{" "}
              <span class="font-japanese text-base text-white/80">寿司</span> is
              paired with{" "}
              <span class="font-japanese text-base text-white/80">を</span>, we
              know it's the object being acted upon.
            </li>
            <li>
              Because{" "}
              <span class="font-japanese text-base text-white/80">私</span> is
              paired with{" "}
              <span class="font-japanese text-base text-white/80">は</span>, we
              know it's the topic of the sentence.
            </li>
          </ul>
          <p class="text-xs italic text-white/40">
            Note: While both are grammatically correct, the first one is more
            common for reasons described in the next lesson.
          </p>
        </div>

        {/* Particle placement note */}
        <AsideBlock label="A note on particle placement">
          <p class="mt-2 text-sm leading-relaxed text-white/60">
            <span class="font-semibold text-white/80">
              Particles are always attached to the end of words.
            </span>{" "}
            Always ensure the correct particle is paired to the end of the
            correct word. Often, particles are attached to the end of nouns.
          </p>
          <p class="mt-2 text-xs text-white/40">
            <span class="font-japanese not-italic">ゆっくり</span> → slowly
          </p>
          <div class="mt-3 space-y-2">
            <div class="rounded-lg bg-red-500/5 p-3 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-white/50 line-through">
                私は本ゆっくり
                <span class="font-bold text-[#ef4444]">を</span>読みます。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-3">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-white/80">
                私は本<span class="font-bold text-[#ef4444]">を</span>
                ゆっくり読みます。
              </p>
              <p class="mt-1 text-xs text-white/40">
                I read books slowly.
              </p>
            </div>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-white/60">
            Notice how <span class="font-japanese">を</span> is incorrectly
            attached to <span class="font-japanese">ゆっくり</span>{" "}
            <span class="text-xs text-white/40">(slowly)</span> instead of{" "}
            <span class="font-japanese">本</span> in the first example. That's
            like saying "I read{" "}
            <span class="font-semibold underline">slowlys</span>" as opposed to
            "I read <span class="font-semibold underline">books</span>" since{" "}
            <span class="font-japanese">を</span> is incorrectly paired with{" "}
            <span class="font-japanese">ゆっくり</span> instead of{" "}
            <span class="font-japanese">本</span>. The same rule applies for all
            other particles.
          </p>
        </AsideBlock>

        <p class="font-semibold text-white/70">
          Now that you have a general idea of how particles function, let's
          learn a few more.
        </p>

        {/* で Particle */}
        <div class="space-y-4">
          <SectionLabel>
            2.{" "}
            <span class="font-japanese text-orange-400">で</span> - The
            utilization particle
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            The <span class="font-japanese text-xl">で</span> particle has
            multiple uses, primarily indicating the means by which an action is
            performed or the location where an action takes place.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Means or method
              </p>
              <p class="text-sm text-white/60">
                Place <span class="font-japanese">で</span> after the noun that
                describes how the action is done.
              </p>
              <p class="mt-2 font-japanese text-lg text-white/80">
                ペン<span class="font-bold text-orange-400">で</span>
                書きます。
              </p>
              <p class="mt-1 text-sm text-white/40">I write with a pen.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Location of action
              </p>
              <p class="text-sm text-white/60">
                Place <span class="font-japanese">で</span> after the noun that
                indicates where the action occurs.
              </p>
              <p class="mt-2 font-japanese text-lg text-white/80">
                図書館<span class="font-bold text-orange-400">で</span>
                勉強します。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I study at the library.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Reason or cause
              </p>
              <p class="text-sm text-white/60">
                <span class="font-japanese">で</span> can also indicate the
                reason for something.
              </p>
              <p class="mt-2 font-japanese text-lg text-white/80">
                <Romaji romaji="work" class="text-xs">
                  <Furigana furigana={<span class="text-xs">しごと</span>}>
                    仕事
                  </Furigana>
                </Romaji>
                <span class="font-bold text-orange-400">で</span>
                <Romaji romaji="(I) will be delayed" class="text-xs">
                  <Furigana furigana={<span class="text-xs">おく</span>}>
                    遅
                  </Furigana>
                  れます。
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">
                I'll be late due to work.
              </p>
            </div>
          </div>

          <YouTubeVideo
            videoId="a4Ia0ha5l7Q"
            title="The で Particle in Japanese"
            credit="ToKini Andy"
          />
        </div>

        {/* に and へ Particles */}
        <div class="space-y-4">
          <SectionLabel>
            3.{" "}
            <span class="font-japanese text-green-500">に</span> - Direction,
            time, and more
          </SectionLabel>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Direction
              </p>
              <p class="text-sm leading-relaxed text-white/60">
                The <span class="font-japanese">に</span> and{" "}
                <span class="font-japanese">へ</span> particles are often used
                interchangeably to indicate direction or destination. Place{" "}
                <span class="font-japanese">に</span> or{" "}
                <span class="font-japanese">へ</span> after the noun that
                represents the destination.
              </p>
              <div class="mt-3 space-y-2 text-sm text-white/60">
                <p>
                  <span class="font-japanese text-base text-white/80">
                    学校<span class="font-bold text-green-500">に</span>
                    行きます。
                  </span>{" "}
                  /{" "}
                  <span class="font-japanese text-base text-white/80">
                    学校<span class="font-bold text-sky-400">へ</span>
                    行きます。
                  </span>{" "}
                  - I go to school.
                </p>
                <p>
                  <span class="font-japanese text-base text-white/80">
                    毎日、ここ
                    <span class="font-bold text-green-500">に</span>
                    来ます。
                  </span>{" "}
                  /{" "}
                  <span class="font-japanese text-base text-white/80">
                    毎日、ここ<span class="font-bold text-sky-400">へ</span>
                    来ます。
                  </span>{" "}
                  - I come here every day.
                </p>
              </div>
              <p class="mt-2 text-xs italic text-white/30">
                Note: While often interchangeable, に tends to emphasize the
                final point of arrival, while へ focuses more on the direction
                of movement. But in most cases, the choice between に and へ is
                a matter of personal preference or style.
              </p>
            </div>

            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Specific point in time
              </p>
              <p class="text-sm text-white/60">
                Place <span class="font-japanese">に</span> after the noun that
                represents the specific time.
              </p>
              <div class="mt-3 space-y-2">
                <p>
                  <span class="font-japanese text-base text-white/80">
                    七時<span class="font-bold text-green-500">に</span>
                    起きます。
                  </span>
                  <span class="ml-2 text-sm text-white/40">
                    I wake up at 7 o'clock.
                  </span>
                </p>
                <p>
                  <span class="font-japanese text-base text-white/80">
                    一時半<span class="font-bold text-green-500">に</span>
                    昼ご飯を食べます。
                  </span>
                  <span class="ml-2 text-sm text-white/40">
                    I'll eat lunch at 1:30.
                  </span>
                </p>
              </div>
              <p class="mt-2 text-xs italic text-white/30">
                Note: Unlike direction, へ cannot be used for time. Only に.
              </p>
            </div>
          </div>
        </div>

        {/* Time complication */}
        <div class="space-y-4 leading-relaxed text-white/70">
          <p>
            There's one complication that trips up beginners when describing
            time, and that's that{" "}
            <span class="font-japanese text-xl">に</span> is only needed when
            describing a <span class="font-semibold text-white/90">specific</span>{" "}
            time, whereas times relavent to the present don't use{" "}
            <span class="font-japanese text-xl">に</span>. Take this example:
          </p>
          <p class="text-xs text-white/40">
            <span class="font-japanese text-sm">明日</span> → tomorrow
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-white/50 line-through">
                明日<span class="font-bold text-green-500">に</span>
                お父さんはヘリで仕事に行きます。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-white/80">
                明日、お父さんはヘリで仕事に行きます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                Tomorrow, dad will go to work by hellicopter.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Also correct
              </p>
              <p class="font-japanese text-base text-white/80">
                お父さんは明日ヘリで仕事に行きます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                Dad will go to work by hellicopter tomorrow.
              </p>
            </div>
          </div>

          <p>
            Tomorrow is entirely dependent on the present. Tomorrow would mean
            different days if I said it yesterday, in 1080 B.C., etc.
          </p>
          <p>
            Here's a hack. In English, when describing specific times, we always
            use prepositions - words like{" "}
            <span class="font-semibold italic text-white/90">on</span>{" "}
            <span class="text-sm">(on the 25th of April)</span>,{" "}
            <span class="font-semibold italic text-white/90">at</span>{" "}
            <span class="text-sm">(at 12:00)</span>,{" "}
            <span class="font-semibold italic text-white/90">in</span>{" "}
            <span class="text-sm">(bad things happened in 2020)</span>. It's the
            same for Japanese with{" "}
            <span class="font-japanese text-xl font-semibold">に</span>.
          </p>
          <p>
            We wouldn't say "Dad will go to work by hellicopter on tomorrow."
          </p>
          <p>
            But there are more grey areas that you'll certainly come across,
            like "Saturday." —This Saturday? Next Saturday? Actually, you'll
            still want to use <span class="font-japanese text-xl">に</span> for
            that:
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-base text-white/80">
                <Romaji romaji="next week" class="text-xs">
                  <Furigana furigana={<span class="text-xs">らいしゅう</span>}>
                    来週
                  </Furigana>
                  の
                </Romaji>
                <span class="ml-2">
                  <Romaji romaji="saturday" class="mr-4 text-xs">
                    <Furigana furigana={<span class="text-xs">どようび</span>}>
                      土曜日
                    </Furigana>
                    に
                  </Romaji>
                </span>
                <Romaji romaji="pool" class="text-xs">
                  プール
                </Romaji>
                に行きます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I'll go to the pool next Saturday.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                *Literally: "On the Saturday of next week, I'll go to the pool."
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-base text-white/80">
                <span class="ml-2">
                  <Romaji romaji="saturday" class="mr-4 text-xs">
                    <Furigana furigana={<span class="text-xs">どようび</span>}>
                      土曜日
                    </Furigana>
                    に
                  </Romaji>
                </span>
                <Romaji romaji="pool" class="text-xs">
                  プール
                </Romaji>
                に行きます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I'll go to the pool Saturday.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                *Like in English, we understand they're specifically talking
                about the upcoming Saturday unless we know otherwise from
                context.
              </p>
            </div>
          </div>

          <p>
            What about chaining together times? "On a Wednesday on the 25th of
            August at 12:45p.m." →{" "}
            <span class="font-japanese text-base">
              八月水曜日午後12時45分に
            </span>{" "}
            😧
          </p>
          <p>
            For these situations and more, we recommend you read{" "}
            <a
              href="https://8020japanese.com/time-expressions/"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              this fantastic article from 80/20 Japanese
            </a>{" "}
            explaining when <span class="font-japanese text-xl">に</span> is
            (and isn't) needed.
          </p>
          <p class="text-sm italic text-white/40">
            *There are even more uses of{" "}
            <span class="font-japanese text-base not-italic">に</span> but we'll
            cover them in later chapters.
          </p>
        </div>

        <div>
          <YouTubeVideo
            videoId="dExn1AygbpQ"
            title="The に and へ Particles in Japanese"
            credit="ToKini Andy"
          />
        </div>

        {/* Key Differences */}
        <div class="space-y-4">
          <SectionLabel>Key differences</SectionLabel>
          <p class="leading-relaxed text-white/70">
            But wait, you said{" "}
            <span class="font-japanese text-orange-400">で</span> can be the
            location of action, and{" "}
            <span class="font-japanese text-green-500">に</span>・
            <span class="font-japanese text-sky-400">へ</span> can indicate
            direction or destination, what's the difference?
          </p>

          <p class="text-sm font-semibold text-white/70">
            Understanding{" "}
            <span class="font-japanese text-orange-400">で</span> as
            "utilization":
          </p>
          <p class="leading-relaxed text-white/70">
            A helpful way to distinguish between{" "}
            <span class="font-japanese text-xl font-semibold text-green-500">
              に
            </span>
            ・
            <span class="font-japanese text-xl font-semibold text-sky-400">
              へ
            </span>{" "}
            and{" "}
            <span class="font-japanese text-xl font-semibold text-orange-400">
              で
            </span>{" "}
            for locations is to think about whether you're{" "}
            <span class="font-semibold text-white/90">"utilizing"</span> the
            place to perform an action. If you can rephrase the sentence as{" "}
            <span class="font-semibold text-white/90">
              "I utilize A to do B,"
            </span>{" "}
            then{" "}
            <span class="font-japanese text-xl font-semibold text-orange-400">
              で
            </span>{" "}
            is likely the correct particle to use.
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                図書館<span class="font-bold text-orange-400">で</span>
                勉強します。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I study at the library.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                Think: "I utilize the library for studying."
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                レストラン<span class="font-bold text-orange-400">で</span>
                食べます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I eat at the restaurant.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                Think: "I utilize the restaurant for eating."
              </p>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            In contrast, when using{" "}
            <span class="font-japanese text-xl font-semibold text-green-500">
              に
            </span>{" "}
            or{" "}
            <span class="font-japanese text-xl font-semibold text-sky-400">
              へ
            </span>
            , you're typically indicating a destination or the end point of
            movement, not a place being utilized for an action:
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                図書館<span class="font-bold text-green-500">に</span>
                行きます。
              </p>
              <p class="mt-1 text-sm text-white/40">I go to the library.</p>
              <p class="mt-1 text-xs italic text-white/30">
                (You can't say "I utilize the library for going.")
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                レストラン<span class="font-bold text-sky-400">へ</span>
                <Furigana furigana={<span class="text-xs">む</span>}>
                  向
                </Furigana>
                かいます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I head towards the restaurant.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                (You can't say "I utilize the restaurant for heading.")
              </p>
            </div>
          </div>

          <p class="text-xs italic text-white/40">
            *You can use{" "}
            <span class="font-japanese font-semibold not-italic">に・へ</span>{" "}
            interchangably in these two sentences.
          </p>
        </div>

        {/* Practice: Multiple Choice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm font-semibold text-white/50">
            Choose the sentences with the correct particles.
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                I drink coffee every day.
              </p>
              <SelectText
                answer="毎日コーヒーを飲みます。"
                a="毎日コーヒーを飲みます。"
                b="毎日コーヒーで飲みます。"
                c="毎日コーヒーに飲みます。"
                d="毎日コーヒーへ飲みます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">I study at school</p>
              <SelectText
                answer="学校で勉強します。"
                a="学校を勉強します。"
                b="学校に勉強します。"
                c="学校へ勉強します。"
                d="学校で勉強します。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                I wake up at 7:00 every morning.
              </p>
              <SelectText
                answer="毎朝7時に起きます。"
                a="毎朝7時を起きます。"
                b="毎朝7時で起きます。"
                c="毎朝7時に起きます。"
                d="毎朝7時へ起きます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                I will not study today.
              </p>
              <SelectText
                answer="今日、勉強しません。"
                a="今日、勉強します。"
                b="今日、勉強にしません。"
                c="今日、勉強しません。"
                d="今日、勉強をしません。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Practice: Sentence Writing */}
        <div class="space-y-5">
          <SectionLabel>Sentence writing</SectionLabel>
          <p class="text-center text-sm font-semibold text-white/50">
            Try creating sentences using 1 or more of these particles.
          </p>

          <div class="space-y-6">
            <div class="space-y-2">
              <p class="leading-relaxed text-white/70">
                1. Describe eating sushi at a restaurant.
              </p>
              <div class="space-y-0.5">
                <p class="text-xs text-white/40">
                  <span class="font-japanese text-sm">レストラン</span> →
                  restaurant
                </p>
                <p class="text-xs text-white/40">
                  <span class="font-japanese text-sm">すし</span> → sushi
                </p>
              </div>
              <CustomTextArea
                class="font-japanese h-28 w-full resize-none text-xl"
                spacing={14}
              />
            </div>

            <div class="space-y-2">
              <p class="leading-relaxed text-white/70">
                2. Talk about going to school at 8 AM.
              </p>
              <CustomTextArea
                class="font-japanese h-28 w-full resize-none text-xl"
                spacing={14}
              />
            </div>

            <div class="space-y-2">
              <p class="leading-relaxed text-white/70">
                3. Tell your friend that you watch movies at home.
              </p>
              <CustomTextArea
                class="font-japanese h-28 w-full resize-none text-xl"
                spacing={14}
              />
            </div>

            <div class="space-y-2">
              <p class="leading-relaxed text-white/70">
                4. Describe traveling towards the mountains.
              </p>
              <p class="text-xs text-white/40">
                <span class="font-japanese text-sm">
                  <Furigana furigana={<span class="text-[10px]">やま</span>}>
                    山
                  </Furigana>
                </span>{" "}
                → mountain
              </p>
              <CustomTextArea
                class="font-japanese h-28 w-full resize-none text-xl"
                spacing={14}
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            <span class="font-japanese text-[#ef4444]">を</span> marks the
            direct object of a verb
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese text-orange-400">で</span> for means,
            location of action, or reason
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese text-green-500">に</span>/
            <span class="font-japanese text-sky-400">へ</span> for direction and
            specific time points
          </SummaryItem>
          <SummaryItem>
            Particles attach to the end of the word they mark
          </SummaryItem>
          <SummaryItem>
            に for specific times only (not relative ones like 明日)
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
