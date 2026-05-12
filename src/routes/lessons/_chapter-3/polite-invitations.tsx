import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/ui/custom/CustomTextArea"
import Romaji from "@/components/text/Romaji"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
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
  "/lessons/_chapter-3/polite-invitations",
)({
  component: PoliteInvitations,
})

function PoliteInvitations() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        誘
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={
          <>
            Polite Invitations with{" "}
            <span class="font-japanese text-teal-400">ませんか</span>
          </>
        }
        subtitle="Suggesting things politely, and how to accept or decline."
      >
        <OverviewItem>
          Making invitations with{" "}
          <span class="font-japanese font-semibold text-teal-400">
            ませんか
          </span>
        </OverviewItem>
        <OverviewItem>
          Accepting with いいですね / declining with ちょっと
        </OverviewItem>
        <OverviewItem>
          The many uses of ちょっと and 大丈夫
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro & Structure */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japanese, one common way to make polite invitations is by using
            the <span class="font-japanese text-xl">ませんか</span> form. This
            form is polite and sounds softer than directly asking someone to do
            something.
          </p>

          <GlowBox>
            <p class="text-center text-xl text-foreground dark:text-white/90">
              Verb (negative{" "}
              <span class="font-japanese">ます</span> form) +{" "}
              <span class="font-japanese">か</span>
            </p>
          </GlowBox>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              映画を見<span class="text-teal-400">ませんか</span>。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              Would you like to watch a movie?
            </p>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            This form essentially means "Won't you...?" or "Why don't we...?"
            in English. It's a polite way to suggest doing something together.
          </p>

          <div class="space-y-2">
            <p class="text-sm font-medium text-muted-foreground dark:text-white/40">More examples</p>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                <Romaji romaji="together" class="text-xs">
                  <Furigana furigana={<span class="text-xs">いっしょ</span>}>
                    一緒
                  </Furigana>
                  に
                </Romaji>
                食べ<span class="text-teal-400">ませんか</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Would you like to eat together?
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                デートに行き<span class="text-teal-400">ませんか</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Would you like to go on a date?
              </p>
            </div>
          </div>
        </div>

        {/* Accepting */}
        <div class="space-y-4">
          <SectionLabel>Accepting an invitation</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            To accept an invitation, you can use{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90">いいです</span>{" "}
            with particles like{" "}
            <span class="font-japanese text-xl text-yellow-400">ね</span> or{" "}
            <span class="font-japanese text-xl text-green-600">よ</span> for
            emphasis:
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <div class="space-y-1 font-japanese text-lg text-foreground/80 dark:text-white/80">
              <p>
                A: 映画を見<span class="text-teal-400">ませんか</span>。
              </p>
              <p>
                B: はい、いいです
                <span class="text-yellow-400">ね</span>。 / いいです
                <span class="text-green-600">よ</span>。
              </p>
            </div>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Literally, the adjective{" "}
            <span class="font-japanese text-xl font-medium text-foreground dark:text-white/90">
              いい
            </span>{" "}
            means <span class="font-semibold text-foreground dark:text-white/90">good</span> or{" "}
            <span class="font-semibold text-foreground dark:text-white/90">fine</span>. It's an
            extremely versatile word in Japanese and can be used in many
            contexts.
          </p>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When used to accept an invitation, it's a polite way to say "That
            sounds good" or "I'm fine with that."
          </p>

          <p class="text-center text-sm italic text-muted-foreground dark:text-white/50">
            Here's a more thorough explanation of using{" "}
            <span class="font-japanese not-italic">いいですよ</span>.
          </p>

          <YouTubeVideo
            videoId="5s04gJYRPM4"
            title="How to Use いいですよ"
            credit="Kaname Naito"
          />
          <YouTubeVideo
            videoId="T1FfatXVH_U"
            title="How to Use いい"
            credit="Kaname Naito"
          />

          <AsideBlock>
            <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              You may occasionally see this word in some form of{" "}
              <span class="font-japanese text-base not-italic">
                <Furigana furigana={<span class="text-xs">よ</span>}>
                  良
                </Furigana>
                い
              </span>
              . <span class="font-japanese text-base">いい</span> is the
              colloquial form of{" "}
              <span class="font-japanese text-base">良い</span>, and you'll
              almost never see{" "}
              <span class="font-japanese text-base">良い</span> used by itself.
              However, when conjugated (e.g.{" "}
              <span class="font-japanese text-base">よかった</span>), it{" "}
              <span class="font-semibold text-foreground/80 dark:text-white/80">always</span> uses the{" "}
              <span class="font-japanese text-base">よい</span> form as its
              stem. More in Chapter 5.
            </p>
          </AsideBlock>
        </div>

        {/* Declining */}
        <div class="space-y-4">
          <SectionLabel>Declining an invitation</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japanese culture, directly refusing an invitation can be seen as
            impolite. Instead, people often use indirect methods to decline. Two
            of the most common words for this are{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90">ちょっと</span>{" "}
            and{" "}
            <span class="font-japanese text-xl text-foreground dark:text-white/90"><Furigana furigana={<span class="text-xs">だいじょうぶ</span>}>大丈夫</Furigana></span>.
          </p>
        </div>

        {/* ちょっと */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-orange-500">ちょっと</p>
          </div>

          <ul class="space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Literal meaning:</span>{" "}
              a little / slightly
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 1:</span>{" "}
              Describing a small amount or short duration
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 2:</span>{" "}
              Indirect refusal
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 3:</span>{" "}
              Getting someone's attention politely
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 4:</span> "Wait a
              minute"
            </li>
          </ul>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 1: Describing an amount
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">Characters: You, shopkeeper</p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                You're at a local market eyeing some strawberries. The
                shopkeeper asks. You reply:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  はい、<span class="text-orange-500">ちょっと</span>
                  だけください。
                </span>{" "}
                (Yes, just a little please.)
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 2: Declining an invitation
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">Characters: You & Yuki</p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                After class Yuki asks:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  映画を見<span class="text-teal-400">ませんか</span>
                </span>{" "}
                (Want to watch a movie?) You respond:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  あ、今日は<span class="text-orange-500">ちょっと</span>...
                </span>{" "}
                (Ah, today's a bit…). Yuki understands your polite refusal.
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 3: Getting attention
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">Characters: You & stranger</p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                You're lost and ask politely:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  すみません、<span class="text-orange-500">ちょっと</span>
                  いいですか。
                </span>{" "}
                (Excuse me, do you have a moment?)
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 4: Wait a minute
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">Characters: You & your boss</p>
              <div class="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-semibold text-foreground/80 dark:text-white/80">Boss:</span>{" "}
                  <span class="font-japanese text-foreground/80 dark:text-white/80">
                    仕事、命賭けでやってくれ。
                  </span>{" "}
                  (I need you to do this job like your life depends on it.)
                </p>
                <p>
                  <span class="font-semibold text-foreground/80 dark:text-white/80">You:</span>{" "}
                  <span class="font-japanese text-foreground/80 dark:text-white/80">
                    はい、分かりました。
                    <span class="text-orange-500">ちょっと</span>まって。
                  </span>{" "}
                  (Yes, I understand. Wait a moment.)
                </p>
                <p>
                  <span class="font-semibold text-foreground/80 dark:text-white/80">You:</span>{" "}
                  <span class="font-japanese text-foreground/80 dark:text-white/80">
                    じゃあ、遺書を書いてきます。
                  </span>{" "}
                  (I'll go write my will then.)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 大丈夫 */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-green-500">
              <Furigana furigana={<span class="text-sm">だいじょうぶ</span>}>
                大丈夫
              </Furigana>
            </p>
          </div>

          <ul class="space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Literal meaning:</span>{" "}
              OK / all right
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 1:</span> Asking
              if someone is fine
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 2:</span>{" "}
              Confirming acceptability
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage 3:</span> Polite
              refusal
            </li>
          </ul>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 1: Checking on someone
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">
                Characters: You & elderly person
              </p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Someone stumbles, you ask:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  <span class="text-green-500">大丈夫</span>ですか。
                </span>{" "}
                (Are you OK?)
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 2: Confirming acceptability
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">Characters: You & waiter</p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Your first choice isn't available. Waiter suggests another dish.
                You say:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  はい、それで<span class="text-green-500">大丈夫</span>です。
                </span>{" "}
                (Yes, that's fine.)
              </p>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Story 3: Declining politely
              </p>
              <p class="text-xs text-muted-foreground/70 dark:text-white/30">Characters: You & Hiroshi</p>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                Hiroshi invites you:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  一緒に食べ<span class="text-teal-400">ませんか</span>
                </span>{" "}
                You reply:{" "}
                <span class="font-japanese text-foreground/80 dark:text-white/80">
                  ありがとうございます。でも、
                  <span class="text-green-500">大丈夫</span>です。
                </span>{" "}
                (Thanks, but I'm fine.)
              </p>
            </div>
          </div>

          <p class="text-sm font-semibold text-foreground/75 dark:text-white/70">
            Both <span class="font-japanese">ちょっと</span> and{" "}
            <span class="font-japanese">大丈夫</span> are very versatile.
            You'll hear them everywhere in conversation.
          </p>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-2">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                <span class="font-semibold text-foreground dark:text-white/90">
                  1. Create an invitation:
                </span>{" "}
                Invite your classmate,{" "}
                <span class="font-japanese">
                  <Furigana furigana={<span class="text-xs">さとう</span>}>
                    佐藤
                  </Furigana>
                  さん
                </span>
                , to play tennis tonight.
              </p>
              <WanakanaWrapper enabled={true} watch="">
                <CustomTextArea
                  spacing={14}
                  class="font-japanese h-28 w-full resize-none text-xl"
                />
              </WanakanaWrapper>
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                <span class="font-semibold text-foreground dark:text-white/90">
                  2. Respond to an invitation:
                </span>{" "}
                Your classmate has invited you for lunch tomorrow. How would you
                respond?
              </p>
              <div class="space-y-2">
                <p class="text-sm text-muted-foreground dark:text-white/50">a) Accepting:</p>
                <WanakanaWrapper enabled={true} watch="">
                  <CustomTextArea
                    spacing={14}
                    class="font-japanese h-28 w-full resize-none text-xl"
                  />
                </WanakanaWrapper>
              </div>
              <div class="space-y-2">
                <p class="text-sm text-muted-foreground dark:text-white/50">
                  b) Declining politely and suggesting an alternative:
                </p>
                <WanakanaWrapper enabled={true} watch="">
                  <CustomTextArea
                    spacing={14}
                    class="font-japanese h-28 w-full resize-none text-xl"
                  />
                </WanakanaWrapper>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            ませんか = "Won't you...?" / "Why don't we...?"
          </SummaryItem>
          <SummaryItem>
            Accept with いいですね / いいですよ
          </SummaryItem>
          <SummaryItem>
            ちょっと... (trailing off) = polite indirect refusal
          </SummaryItem>
          <SummaryItem>
            大丈夫です = "I'm fine" (can mean OK or no thanks)
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
