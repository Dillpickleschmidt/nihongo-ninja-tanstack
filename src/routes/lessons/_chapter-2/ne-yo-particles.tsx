import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-2/ne-yo-particles",
)({
  component: NeYoParticles,
})

function NeYoParticles() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        ね
      </span>

      <LessonHeader
        chapter="Chapter 2 · Grammar"
        title={
          <>
            The Particles{" "}
            <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-green-600">よ</span>
          </>
        }
        subtitle="Adding nuance to the end of your sentences."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-yellow-400">ね</span>{" "}
          for shared experience and agreement
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-green-600">よ</span>{" "}
          for new information and emphasis
        </OverviewItem>
        <OverviewItem>
          Combining them:{" "}
          <span class="font-japanese font-semibold text-orange-500">よね</span>
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro + Videos */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japanese, the particles{" "}
            <span class="font-japanese text-xl font-semibold text-yellow-400">
              ね
            </span>{" "}
            (ne) and{" "}
            <span class="font-japanese text-xl font-semibold text-green-600">
              よ
            </span>{" "}
            (yo) are essential for conveying nuance and context in
            conversations. These particles help express shared experiences,
            agreement, or new information.
          </p>

          <YouTubeVideo
            videoId="Snk9eCUqJSo"
            title="Using Ending Particle ね in Japanese"
            credit="Kaname Naito"
          />
          <YouTubeVideo
            videoId="T1FfatXVH_U"
            title="How to Use いい"
            credit="Kaname Naito"
            startTime={220}
            timestamps={[
              { label: "using いい", time: 0 },
              { label: "よ・ね particles", time: 220 },
            ]}
          />
        </div>

        {/* The Particle ね */}
        <div class="space-y-4">
          <SectionLabel>
            The particle{" "}
            <span class="font-japanese text-yellow-400">ね</span> (ne)
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The particle{" "}
            <span class="font-japanese text-xl font-semibold text-yellow-400">
              ね
            </span>{" "}
            is used to confirm shared knowledge, seek agreement, or express
            empathy. It's similar to saying{" "}
            <span class="font-black text-foreground dark:text-white/90">isn't it?</span> or{" "}
            <span class="font-black text-foreground dark:text-white/90">right?</span> in English.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Confirming shared experience
              </p>
              <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Use{" "}
                <span class="font-japanese font-semibold text-yellow-400">
                  ね
                </span>{" "}
                when both you and the listener can perceive the same thing.
              </p>
              <div class="mt-3 space-y-3 border-t border-border/50 dark:border-white/5 pt-3">
                <div>
                  <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    このラーメンはおいしいですね。
                  </p>
                  <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                    This ramen is tasty, isn't it?
                  </p>
                  <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                    *Context: You and your friend are both eating the ramen.
                  </p>
                </div>
                <div>
                  <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    あの
                    <Romaji romaji={<span class="text-sm">movie</span>}>
                      映画
                    </Romaji>
                    は
                    <Romaji
                      romaji={<span class="text-sm">was interesting</span>}
                    >
                      面白かった
                    </Romaji>
                    ね。
                  </p>
                  <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                    (Ano eiga wa omoshirokatta ne.) — That movie was
                    interesting, wasn't it?
                  </p>
                  <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                    *Context: You watched the movie together and are reflecting.
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Discussing the present situation
              </p>
              <div class="mt-3">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  <Romaji romaji={<span class="text-sm">today</span>}>
                    今日
                  </Romaji>
                  はいい
                  <Romaji romaji={<span class="text-sm">weather</span>}>
                    天気
                  </Romaji>
                  ですね。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                  (Kyō wa ii tenki desu ne.) — It's nice weather today, isn't
                  it?
                </p>
                <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                  *Context: Both of you can perceive the weather.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Particle よ */}
        <div class="space-y-4">
          <SectionLabel>
            The particle{" "}
            <span class="font-japanese text-green-600">よ</span> (yo)
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The particle{" "}
            <span class="font-japanese text-xl font-semibold text-green-600">
              よ
            </span>{" "}
            is used to provide new information, assert something with
            confidence, or emphasize a point. It's like saying{" "}
            <span class="font-black text-foreground dark:text-white/90">you know</span> or{" "}
            <span class="font-black text-foreground dark:text-white/90">I tell you</span> in
            English.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Providing new information
              </p>
              <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Use{" "}
                <span class="font-japanese font-semibold text-green-600">
                  よ
                </span>{" "}
                when informing the listener of something they might not know.
              </p>
              <div class="mt-3 space-y-3 border-t border-border/50 dark:border-white/5 pt-3">
                <div>
                  <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    これは私の本ですよ。
                  </p>
                  <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                    This is my book, you know.
                  </p>
                  <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                    *Context: You assert ownership to someone looking at it.
                  </p>
                </div>
                <div>
                  <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    その
                    <Romaji romaji={<span class="text-sm">movie</span>}>
                      映画
                    </Romaji>
                    は
                    <Romaji romaji={<span class="text-sm">interesting</span>}>
                      面白い
                    </Romaji>
                    ですよ。
                  </p>
                  <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                    (Sono eiga wa omoshiroi desu yo.) — That movie is
                    interesting, you know.
                  </p>
                  <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                    *Context: Telling someone who hasn't seen that film.
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Emphasizing a point
              </p>
              <div class="mt-3 space-y-3">
                <div>
                  <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    いいえ、それは違いますよ。
                  </p>
                  <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                    No, that's not correct.
                  </p>
                  <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                    *Context: Correcting someone's misunderstanding.
                  </p>
                </div>
                <div>
                  <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    このレストランは本当にいいですよ。
                  </p>
                  <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                    This restaurant is really good, you know.
                  </p>
                  <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                    *Context: Recommending a restaurant to a friend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* よね */}
        <div class="space-y-4">
          <SectionLabel>
            Combining{" "}
            <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-green-600">よ</span>:{" "}
            <span class="font-japanese text-orange-500">よね</span> (yone)
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When you want to confirm information and seek agreement
            simultaneously, combine{" "}
            <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-green-600">よ</span> into{" "}
            <span class="font-japanese text-orange-500">よね</span> (yone).
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
              Confirming and seeking agreement
            </p>
            <div class="mt-3 space-y-3 border-t border-border/50 dark:border-white/5 pt-3">
              <div>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  田中さんは
                  <Furigana furigana={<span class="text-xs">がくせい</span>}>
                    学生
                  </Furigana>
                  ですよね。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                  Tanaka is a student, right?
                </p>
                <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                  *Context: Confirming with someone who knows Tanaka.
                </p>
              </div>
              <div>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  あの
                  <Romaji romaji={<span class="text-sm">movie</span>}>
                    映画
                  </Romaji>
                  は
                  <Romaji
                    romaji={<span class="text-sm">was interesting</span>}
                  >
                    面白かった
                  </Romaji>
                  ですよね。
                </p>
                <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                  (Ano eiga wa omoshirokatta desu yone.) — That movie was
                  interesting, wasn't it?
                </p>
                <p class="mt-1 text-xs text-muted-foreground/70 dark:text-white/30">
                  *Context: You both watched it and are checking agreement.
                </p>
              </div>
            </div>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In many cases, choosing between{" "}
            <span class="font-japanese text-yellow-400">ね</span> and{" "}
            <span class="font-japanese text-orange-500">よね</span> is just a
            matter of personal choice. You'll develop a natural sense by
            listening.
          </p>
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
                Someone points at a library:{" "}
                <span class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                  あれは
                  <Furigana furigana={<span class="text-xs">なん</span>}>
                    何
                  </Furigana>
                  ですか。
                </span>
              </p>
              <div class="space-y-0.5">
                <p class="text-sm text-muted-foreground dark:text-white/40">* ビル → building</p>
                <p class="text-sm text-muted-foreground dark:text-white/40">
                  * 図書館 (としょかん) → library
                </p>
              </div>
              <SelectText
                answer={[
                  "あのビルは図書館ですよ。",
                  "あのビルは図書館です。",
                ]}
                a="あのビルは図書館ですよ。"
                b="あのビルは図書館です。"
                c="あのビルは図書館ですね。"
                d="あのビルは図書館ですよね。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Hiking a mountain taking longer than expected:
              </p>
              <div class="space-y-0.5">
                <p class="text-sm text-muted-foreground dark:text-white/40">* 山 (やま) → mountain</p>
                <p class="text-sm text-muted-foreground dark:text-white/40">* 高い (たかい) → tall</p>
              </div>
              <SelectText
                answer={[
                  "この山は高いですね。",
                  "この山は高いですよね。",
                ]}
                a="この山は高いですよ。"
                b="この山は高いですね。"
                c="この山は高いですよね。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend is unaware of a great café:
              </p>
              <div class="space-y-0.5">
                <p class="text-sm text-muted-foreground dark:text-white/40">
                  * 本当に (ほんとに) → really
                </p>
                <p class="text-sm text-muted-foreground dark:text-white/40">* いい → good</p>
              </div>
              <SelectText
                answer="このカフェは本当にいいですよ。"
                a="このカフェは本当にいいですね。"
                b="このカフェは本当にいいですよ。"
                c="このカフェは本当にいいですよね。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                At a new レストラン, everything's expensive. You'd say:
              </p>
              <p class="text-sm text-muted-foreground dark:text-white/40">
                * 高い (たかい) → expensive
              </p>
              <SelectText
                answer={[
                  "このレストランは高いですね。",
                  "このレストランは高いですよね。",
                ]}
                a="このレストランは高いですよ。"
                b="このレストランは高いですね。"
                c="このレストランは高いですよね。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            <span class="font-japanese text-yellow-400">ね</span> confirms
            shared knowledge or seeks agreement ("isn't it?")
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese text-green-600">よ</span> gives new
            info, adds emphasis, or corrects ("you know")
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese text-orange-500">よね</span> asserts and
            confirms at the same time ("right?")
          </SummaryItem>
          <SummaryItem>
            Choosing between ね and よね is often personal preference
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
