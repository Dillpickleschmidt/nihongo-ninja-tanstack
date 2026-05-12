import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-5/suru-vs-yaru",
)({
  component: SuruVsYaru,
})

function SuruVsYaru() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        為
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={
          <>
            <span class="font-japanese">する</span> vs.{" "}
            <span class="font-japanese">やる</span>
          </>
        }
        subtitle='Two ways to "do" in Japanese, and when to use each.'
      >
        <OverviewItem>する for neutral/professional actions</OverviewItem>
        <OverviewItem>やる for casual/determined actions</OverviewItem>
        <OverviewItem>Key differences and compound verbs</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japanese, there are two main verbs used to express the concept of{" "}
            <span class="font-semibold text-foreground dark:text-white/90">doing</span> something:{" "}
            <span class="font-japanese text-xl font-medium text-foreground dark:text-white/90">
              する
            </span>{" "}
            and{" "}
            <span class="font-japanese text-xl font-medium text-foreground dark:text-white/90">
              やる
            </span>
            . While both can often be translated as{" "}
            <span class="font-semibold text-foreground dark:text-white/90">to do</span> in English,
            they have different nuances and uses that are important to
            understand. Many Japanese textbooks focus heavily on{" "}
            <span class="font-japanese text-xl font-medium">する</span> while
            neglecting{" "}
            <span class="font-japanese text-xl font-medium">やる</span>.{" "}
            <span class="font-semibold text-foreground dark:text-white/90">
              We're here to fix that
            </span>
            , as you'll hear{" "}
            <span class="font-japanese text-xl font-medium">やる</span>{" "}
            frequently used in everyday conversations, pop culture, and casual
            settings.
          </p>

          <YouTubeVideo
            videoId="ALFAOoRhBVY"
            title="How to Use やる Yaru"
            credit="Kaname Naito"
          />
        </div>

        {/* する */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              する
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Suru</span>
          </div>

          <ul class="space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage:</span> More
              neutral, often used for everyday actions
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Context:</span> Used in
              business settings, polite conversations, or when describing
              routine activities
            </li>
          </ul>

          <AsideBlock>
            <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              Remember, <span class="font-japanese">する</span> has a{" "}
              <span class="font-japanese">ます</span> stem of{" "}
              <span class="font-japanese">し</span> because it's an irregular
              verb.
            </p>
          </AsideBlock>

          {/* する Story */}
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
              The Overachiever's Dilemma
            </p>
            <p class="mb-3 text-xs text-muted-foreground/70 dark:text-white/30">
              Tanaka (the overachiever), his colleagues
            </p>
            <p class="mb-4 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              Tanaka, known for his impeccable work ethic, arrives at the office
              at 7 AM sharp, as usual. His colleagues, barely awake, watch in
              mild amusement as he meticulously organizes his desk.
            </p>
            <div class="space-y-3 text-sm">
              <DialogueLine speaker="Colleague A">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  おはよう、田中さん。今日も早いね。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Ohayou, Tanaka-san. Kyou mo hayai ne.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "Morning, Tanaka. Early as always, huh?"
                </p>
              </DialogueLine>
              <DialogueLine speaker="Tanaka">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  はい、
                  <Furigana furigana={<span class="text-xs">しごと</span>}>
                    仕事
                  </Furigana>
                  をしに来ました。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Hai, shigoto wo shi ni kimashita.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">"Yes, I came to do work."</p>
              </DialogueLine>
              <DialogueLine speaker="Colleague B">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  えっ、僕たちは
                  <Furigana furigana={<span class="text-xs">あそ</span>}>
                    遊
                  </Furigana>
                  びに来たと
                  <Furigana furigana={<span class="text-xs">おも</span>}>
                    思
                  </Furigana>
                  ってたよ。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (E, bokutachi wa asobi ni kita to omotteta yo.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "Oh? We thought we came here to play."
                </p>
              </DialogueLine>
              <DialogueLine speaker="Tanaka" note="(missing the sarcasm)">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  いいえ、私は
                  <Furigana furigana={<span class="text-xs">しごと</span>}>
                    仕事
                  </Furigana>
                  をします。
                  <Furigana furigana={<span class="text-xs">あそ</span>}>
                    遊
                  </Furigana>
                  びませんよ。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Iie, watashi wa shigoto wo shimasu. Asobimasen yo.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">"No, I do work. I don't play."</p>
              </DialogueLine>
            </div>
            <p class="mt-4 text-sm italic text-muted-foreground/70 dark:text-white/30">
              The colleagues exchange glances, realizing that humor is lost on
              Tanaka. They shrug and return to their desks, leaving Tanaka to
              his beloved work.
            </p>
          </div>
        </div>

        {/* やる */}
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <span class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              やる
            </span>
            <span class="text-lg font-medium text-muted-foreground dark:text-white/40">Yaru</span>
          </div>

          <ul class="space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Usage:</span>
              <ul class="ml-4 mt-1 space-y-1">
                <li>
                  More casual, typically used for concrete or physical actions
                </li>
                <li>
                  States a willful action to do something, thus it can only be
                  used for voluntary actions{" "}
                  <span class="text-muted-foreground dark:text-white/40">
                    (as opposed to involuntary actions like breathing)
                  </span>
                </li>
                <li>
                  Sounds more determined/significant than{" "}
                  <span class="font-japanese">する</span>
                </li>
              </ul>
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">Context:</span> Used
              among friends, in casual settings, or when emphasizing
              determination
            </li>
          </ul>

          {/* やる Story */}
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
              The Reluctant Volunteer
            </p>
            <p class="mb-3 text-xs text-muted-foreground/70 dark:text-white/30">
              Keiko (the reluctant volunteer), her friend Yuki, and a group of
              classmates
            </p>
            <p class="mb-4 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              It's cleaning day at school. Keiko, hoping to avoid any
              responsibility, tries to blend into the wall. Her friend Yuki,
              however, has other plans.
            </p>
            <div class="space-y-3 text-sm">
              <DialogueLine speaker="Yuki">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  ねえ、
                  <Furigana furigana={<span class="text-xs">そうじ</span>}>
                    掃除
                  </Furigana>{" "}
                  (を) やろうよ。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Nee, souji yarou yo.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">"Hey, let's do some cleaning."</p>
              </DialogueLine>
              <DialogueLine speaker="Keiko">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  えー、やりたくないな。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Ee, yaritakunai na.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">"Eh, I don't want to do it."</p>
              </DialogueLine>
              <DialogueLine speaker="Classmate A">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  誰かトイレ
                  <Furigana furigana={<span class="text-xs">そうじ</span>}>
                    掃除
                  </Furigana>{" "}
                  (を) やってくれない？
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Dare ka toire souji yatte kurenai?)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "Can someone do the toilet cleaning?"
                </p>
              </DialogueLine>
              <p class="italic text-muted-foreground/70 dark:text-white/30">
                Silence falls over the room. Keiko tries to make herself even
                smaller.
              </p>
              <DialogueLine
                speaker="Yuki"
                note="(with a mischievous grin)"
              >
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  慶子がやるって。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Keiko ga yaru tte.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">"Keiko says she'll do it."</p>
              </DialogueLine>
              <DialogueLine speaker="Keiko" note="(panicking)">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  えっ？私がやるの？冗談でしょ？
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (E? Watashi ga yaru no? Joudan desho?)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "What? I'm doing it? You're joking, right?"
                </p>
              </DialogueLine>
              <DialogueLine speaker="Classmate B">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  じゃあ、決まり！慶子がトイレ
                  <Furigana furigana={<span class="text-xs">そうじ</span>}>
                    掃除
                  </Furigana>{" "}
                  (を) やって。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Jaa, kimari! Keiko ga toire souji yatte.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "Then it's decided! Keiko's doing the toilet cleaning."
                </p>
              </DialogueLine>
              <DialogueLine
                speaker="Keiko"
                note="(resigned to her fate)"
              >
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  はぁ...わかった。やるよ、やる。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Haa... wakatta. Yaru yo, yaru.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "Sigh... Fine. I'll do it, I'll do it."
                </p>
              </DialogueLine>
              <p class="italic text-muted-foreground/70 dark:text-white/30">
                As Keiko trudges off to clean the toilets, Yuki calls out:
              </p>
              <DialogueLine speaker="Yuki">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  がんばってね！
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">(Ganbatte ne!)</p>
                <p class="text-muted-foreground dark:text-white/60">"Do your best!"</p>
              </DialogueLine>
              <p class="italic text-muted-foreground/70 dark:text-white/30">
                Keiko mutters under her breath:
              </p>
              <DialogueLine speaker="Keiko">
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  友達なんかやめてやる。
                </p>
                <p class="text-xs italic text-muted-foreground/70 dark:text-white/30">
                  (Tomodachi nanka yamete yaru.)
                </p>
                <p class="text-muted-foreground dark:text-white/60">
                  "I'm so done with having friends."
                </p>
              </DialogueLine>
            </div>
          </div>
        </div>

        {/* Key Differences */}
        <div class="space-y-4">
          <SectionLabel>Key differences</SectionLabel>
          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-semibold text-foreground/80 dark:text-white/80">Determination</p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/60">
                <span class="font-japanese">する</span> is generally more
                neutral while <span class="font-japanese">やる</span> is more
                determined.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-semibold text-foreground/80 dark:text-white/80">Emphasis</p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/60">
                <span class="font-japanese">やる</span> can express more
                determination or willingness to take on a task.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-semibold text-foreground/80 dark:text-white/80">Compound Verbs</p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/60">
                <span class="font-japanese">する</span> is often used in
                compound verbs (noun +{" "}
                <span class="font-japanese">する</span>), while{" "}
                <span class="font-japanese">やる</span> typically stands alone.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-semibold text-foreground/80 dark:text-white/80">Nuance</p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/60">
                <span class="font-japanese">する</span> often implies a more
                routine or professional action, while{" "}
                <span class="font-japanese">やる</span> can suggest a more
                active or physical engagement with the task.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            する for neutral, professional, or abstract actions
          </SummaryItem>
          <SummaryItem>
            やる for casual, concrete tasks, or when emphasizing determination
          </SummaryItem>
          <SummaryItem>
            する forms compound verbs (noun + する), やる stands alone
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

import type { JSX } from "solid-js"

function DialogueLine(props: {
  speaker: string
  note?: string
  children: JSX.Element
}) {
  return (
    <div>
      <p class="font-semibold text-foreground/75 dark:text-white/70">
        {props.speaker}
        {props.note && (
          <span class="ml-1 font-normal text-muted-foreground/70 dark:text-white/30">{props.note}</span>
        )}
        :
      </p>
      <div class="ml-4 mt-0.5">{props.children}</div>
    </div>
  )
}
