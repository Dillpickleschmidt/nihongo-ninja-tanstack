import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-4/to-particle")({
  component: ToParticle,
})

function ToParticle() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        と
      </span>

      <LessonHeader
        chapter="Chapter 4 · Grammar"
        title={
          <>
            The <span class="font-japanese text-purple-500">と</span> Particle
          </>
        }
        subtitle='Connecting nouns with "and" and doing things together.'
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-purple-500">と</span> as
          "and" to connect nouns
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-purple-500">と</span> as
          "with" for joint actions
        </OverviewItem>
        <OverviewItem>
          Comparing{" "}
          <span class="font-japanese font-semibold text-purple-500">と</span>{" "}
          and{" "}
          <span class="font-japanese font-semibold text-green-500">に</span>
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            In Japanese, the{" "}
            <span class="font-japanese text-xl">と</span> particle has several
            uses, but today we'll focus on two essential functions: connecting
            nouns (like "<span class="font-semibold text-foreground dark:text-white/90">and</span>")
            and indicating who you do something{" "}
            <span class="font-semibold text-foreground dark:text-white/90">with</span>.
          </p>
        </div>

        {/* 1. Connecting Nouns */}
        <div class="space-y-4">
          <SectionLabel>
            1. Connecting nouns with{" "}
            <span class="font-japanese text-purple-500">と</span>
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When connecting nouns,{" "}
            <span class="font-japanese text-xl">と</span> works like "
            <span class="font-semibold text-foreground dark:text-white/90">and</span>" in English.
            You put it after each item except the last one:
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              <Furigana furigana={<span class="text-xs">ねこ</span>}>
                猫
              </Furigana>
              <span class="text-purple-500">と</span>
              <Furigana furigana={<span class="text-xs">いぬ</span>}>
                犬
              </Furigana>
              がいます。
            </p>
            <p class="mt-1 text-muted-foreground dark:text-white/50">I have a cat and dog.</p>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            You can connect more than 2 nouns with{" "}
            <span class="font-japanese text-xl">と</span> as well. Just keep
            adding <span class="font-japanese text-xl">と</span> after each
            item to create a list:
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                パン<span class="text-purple-500">と</span>バター
                <span class="text-purple-500">と</span>ジャムを買いました。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I bought bread, butter, and jam.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                ケーキ<span class="text-purple-500">と</span>クッキー
                <span class="text-purple-500">と</span>
                チョコレートは高いです。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Cake, cookies, and chocolate are expensive.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Doing Things Together */}
        <div class="space-y-4">
          <SectionLabel>
            2. Doing things together with{" "}
            <span class="font-japanese text-purple-500">と</span>
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When <span class="font-japanese text-xl">と</span> means "
            <span class="font-semibold text-foreground dark:text-white/90">with</span>," it
            indicates that both parties are equally involved in the action:
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Furigana furigana={<span class="text-xs">じょうし</span>}>
                  上司
                </Furigana>
                <span class="text-purple-500">と</span>ビールを
                <Furigana furigana={<span class="text-xs">の</span>}>
                  飲
                </Furigana>
                みます。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I drink beer with my boss.
              </p>
              <p class="mt-1 text-sm italic text-muted-foreground/70 dark:text-white/30">
                (Both people willingly participate... hopefully)
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Furigana furigana={<span class="text-xs">かのじょ</span>}>
                  彼女
                </Furigana>
                <span class="text-purple-500">と</span>
                <Furigana furigana={<span class="text-xs">けんか</span>}>
                  喧嘩
                </Furigana>
                しました。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I had a fight with my girlfriend.
              </p>
              <p class="mt-1 text-sm italic text-muted-foreground/70 dark:text-white/30">
                (Both actively participated in the argument)
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Furigana furigana={<span class="text-xs">ともだち</span>}>
                  友達
                </Furigana>
                <span class="text-purple-500">と</span>
                <Furigana furigana={<span class="text-xs">いっしょ</span>}>
                  一緒
                </Furigana>
                に
                <Furigana furigana={<span class="text-xs">しゅくだい</span>}>
                  宿題
                </Furigana>
                をしました。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I did homework together with my friend.
              </p>
              <p class="mt-1 text-sm italic text-muted-foreground/70 dark:text-white/30">
                (reality: copied each other's answers while panicking about the
                deadline on the following day)
              </p>
            </div>
          </div>
        </div>

        {/* と一緒に */}
        <div class="space-y-4">
          <SectionLabel>
            Using <span class="font-japanese">と一緒に</span> (together with)
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            While と by itself can mean doing something with someone, adding
            一緒に (いっしょに) emphasizes that you're doing it together. Think
            of it as the difference between "with" and "together with":
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                田中さんと勉強します。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I'll study with Tanaka.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                田中さんと
                <Furigana furigana={<span class="text-xs">いっしょ</span>}>
                  一緒
                </Furigana>
                に勉強します。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I'll study together with Tanaka.
              </p>
              <p class="mt-1 text-sm italic text-muted-foreground/70 dark:text-white/30">
                (Emphasizes you're studying as a group/pair rather than just
                happening to study at the same time/place)
              </p>
            </div>
          </div>

          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *Note: Both versions are correct and commonly used. Adding 一緒に
            just puts more emphasis on the "togetherness" of the action.
          </p>
        </div>

        {/* と vs に */}
        <div class="space-y-4">
          <SectionLabel>
            Comparing{" "}
            <span class="font-japanese text-purple-500">と</span> and{" "}
            <span class="font-japanese text-green-500">に</span>
          </SectionLabel>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Furigana furigana={<span class="text-xs">せんぱい</span>}>
                  先輩
                </Furigana>
                <span class="font-semibold text-purple-500">と</span>
                <Furigana furigana={<span class="text-xs">はな</span>}>
                  話
                </Furigana>
                します。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I'll talk <u>with</u> my senior (mutual conversation)
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Furigana furigana={<span class="text-xs">せんぱい</span>}>
                  先輩
                </Furigana>
                <span class="font-semibold text-green-500">に</span>
                <Furigana furigana={<span class="text-xs">はな</span>}>
                  話
                </Furigana>
                します。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I'll talk <u>to</u> my senior (one-sided, like reporting
                something)
              </p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the most natural particle for each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're ordering at a café. How would you say "Coffee and milk
                please"?
              </p>
              <SelectText
                answer="コーヒーと牛乳をください。"
                a="コーヒーと牛乳をください。"
                b="コーヒーに牛乳をください。"
                c="コーヒーも牛乳をください。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend asks who you're going to the concert with. How would
                you say "I'm going with Tanaka"?
              </p>
              <SelectText
                answer="田中さんと行きます。"
                a="田中さんに行きます。"
                b="田中さんと行きます。"
                c="田中さんで行きます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're planning a study session. How would you say "I'll study
                with Yuki and Mari"?
              </p>
              <SelectText
                answer="ゆきさんとまりさんと勉強します。"
                a="ゆきさんとまりさんに勉強します。"
                b="ゆきさんとまりさんと勉強します。"
                c="ゆきさんにまりさんに勉強します。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're telling a friend about your weekend plans. How would you
                say "I'll watch a movie with my sister"?
              </p>
              <SelectText
                answer="姉と映画を見ます。"
                a="姉に映画を見ます。"
                b="姉と映画を見ます。"
                c="姉で映画を見ます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You want to say that you talked with both Tanaka and Yamada.
                Which is correct?
              </p>
              <SelectText
                answer="田中さんと山田さんと話しました。"
                a="田中さんと山田さんを話しました。"
                b="田中さんと山田さんと話しました。"
                c="田中さんと山田さんに話しました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "I watched a movie with my friend and my
                younger brother"?
              </p>
              <SelectText
                answer="友達と弟と映画を見ました。"
                a="友達と弟は映画を見ました。"
                b="友達と弟を映画を見ました。"
                c="友達と弟と映画を見ました。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            と connects nouns like "and": AとBとC
          </SummaryItem>
          <SummaryItem>
            と means "with" for joint actions (both parties participate)
          </SummaryItem>
          <SummaryItem>
            と一緒に emphasizes "together with"
          </SummaryItem>
          <SummaryItem>
            と = mutual action ("talk with"), に = directed action ("talk to")
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
