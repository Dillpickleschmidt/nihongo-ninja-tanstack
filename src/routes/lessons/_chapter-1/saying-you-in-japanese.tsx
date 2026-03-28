import type { JSX } from "solid-js"
import { Show } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
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
  "/lessons/_chapter-1/saying-you-in-japanese",
)({
  component: SayingYouInJapanese,
})

function SayingYouInJapanese() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        君
      </span>

      <LessonHeader
        chapter="Chapter 1 · Getting Started"
        title={<>Saying "You"</>}
        subtitle="Why Japanese avoids direct pronouns, and what to do instead."
      >
        <OverviewItem>Why "you" is often rude in Japanese</OverviewItem>
        <OverviewItem>Using names and titles instead</OverviewItem>
        <OverviewItem>Asking someone's name politely</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Opening */}
        <div class="leading-relaxed text-white/70">
          <p>
            In Japanese, saying "you" directly is{" "}
            <span class="font-semibold text-white/90">often avoided</span>.
            Unlike English, using direct pronouns can come across as{" "}
            <span class="font-semibold text-white/90">
              rude or overly direct
            </span>
            . Instead, Japanese speakers use names and titles, as you learned in
            the previous lesson.
          </p>
        </div>

        {/* Video */}
        <div>
          <YouTubeVideo
            videoId="8KTvBdGt_vg"
            title="Saying 'You' in Japanese by Kaname Naito, Nov 12 2023"
            credit="Kaname Naito"
          />
        </div>

        {/* Pronouns */}
        <div class="space-y-4">
          <SectionLabel>
            Second-person pronouns you might've heard
          </SectionLabel>
          <p class="leading-relaxed italic text-white/50">
            The following second-person pronouns should not be used unless
            you've reached a near-native level of Japanese speaking ability and
            can fully grasp the situations in which they would be appropriate.
          </p>
        </div>

        {/* Anata */}
        <PronounBlock
          jp="あなた"
          romaji="Anata"
          usage="General term for 'you,' but often sounds rude or overly familiar."
          context="Okay in some contexts, but avoid with strangers or superiors. Better to use a name once you know it."
          example="あなたは学生ですか。"
          translation="Are you a student?"
        />

        {/* Kimi */}
        <PronounBlock
          jp={
            <Furigana furigana={<span class="text-sm">きみ</span>}>
              君
            </Furigana>
          }
          romaji="Kimi"
          usage="Informal term for 'you.' Often used by men toward someone younger/lower status, or by women for children or close friends."
          context="Can sound affectionate or condescending depending on context. More common casually, but risky with strangers or superiors."
          example="君はどう思う？"
          translation="What do you think?"
        />

        {/* Omae */}
        <PronounBlock
          jp={
            <>
              お
              <Furigana furigana={<span class="text-sm">まえ</span>}>
                前
              </Furigana>
            </>
          }
          romaji="Omae"
          usage="Very informal and direct term, often used by men."
          context="Okay with very close friends or in confrontations. Extremely rude toward strangers or superiors."
          example="お前は何をしているんだ？"
          translation="What the hell are you doing?"
        />

        {/* Temee */}
        <PronounBlock
          jp="てめえ"
          romaji="Temee"
          usage="Extremely informal, confrontational, often heard in anime for dramatic effect."
          context="Highly disrespectful/aggressive. Avoid completely in real-life speech; mostly for fights or fiction."
          example="てめえ、覚悟しろ！"
          translation="Get ready, you bastard!"
        />

        {/* Kisama */}
        <PronounBlock
          jp={
            <Furigana furigana={<span class="text-sm">きさま</span>}>
              貴様
            </Furigana>
          }
          romaji="Kisama"
          usage="Archaic and very rude."
          context="Almost always insulting/confrontational. Not used in polite modern Japanese. Avoid unless in historical media or deliberately offensive."
          example="貴様、許さん！"
          translation="I won't forgive you [offensive]."
        />

        {/* Anata-sama */}
        <PronounBlock
          jp={
            <>
              あなた
              <Furigana furigana={<span class="text-sm">さま</span>}>
                様
              </Furigana>
            </>
          }
          romaji="Anata-sama"
          usage="Very respectful honorific form."
          context="Used in polite, deferential contexts (e.g. customer service)."
          example="あなた様のお名前は？"
          translation="What is your name, sir/madam?"
        />

        {/* Unknown name */}
        <div class="space-y-4">
          <SectionLabel>But what if you don't know their name?</SectionLabel>

          <YouTubeVideo
            videoId="t1iTJK31UYw"
            title="First-time Greeting in Japanese for Beginners by Kaname Naito, Jun 15 2024"
            startTime={256}
            credit="Kaname Naito"
            timestamps={[
              { time: 0, label: "First-time Greetings" },
              { time: 256, label: "How to Ask for Someone's Name" },
            ]}
          />

          <GlowBox>
            <p class="text-center font-japanese text-2xl font-medium text-white/90">
              <Furigana furigana={<span class="text-sm">しつれい</span>}>
                失礼
              </Furigana>
              ですが、お
              <Furigana furigana={<span class="text-sm">なまえ</span>}>
                名前
              </Furigana>
              は？
            </p>
          </GlowBox>

          <ul class="space-y-2 leading-relaxed text-white/70">
            <li>
              <span class="font-japanese font-semibold text-white/90">
                失礼です
              </span>{" "}
              - "Excuse me / pardon me" (literally "rude")
            </li>
            <li>
              <span class="font-japanese font-semibold text-white/90">
                が
              </span>{" "}
              - "but"{" "}
              <span class="text-sm text-white/40">(we'll revisit later)</span>
            </li>
            <li>
              <span class="font-japanese font-semibold text-white/90">
                お
              </span>{" "}
              - Polite prefix
            </li>
            <li>
              <span class="font-japanese font-semibold text-white/90">
                名前
              </span>{" "}
              - "Name"
            </li>
            <li>
              <span class="font-japanese font-semibold text-white/90">
                は？
              </span>{" "}
              - Topic particle
            </li>
          </ul>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Avoid saying "you" directly; use names with honorifics instead
          </SummaryItem>
          <SummaryItem>
            あなた is the "safest" pronoun but still often sounds rude
          </SummaryItem>
          <SummaryItem>
            君, お前, てめえ, 貴様 range from casual to hostile
          </SummaryItem>
          <SummaryItem>
            失礼ですが、お名前は？ to politely ask someone's name
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

/* --- Pronoun Block --- */
function PronounBlock(props: {
  jp: JSX.Element
  romaji: string
  usage: string
  context: string
  example: string
  translation: string
}) {
  return (
    <div class="space-y-4">
      <div class="flex items-baseline gap-3">
        <h3 class="font-japanese text-2xl font-bold text-white/90">
          {props.jp}
        </h3>
        <span class="text-lg font-medium text-white/40">{props.romaji}</span>
      </div>

      <ul class="space-y-1.5 text-sm leading-relaxed text-white/60">
        <li>
          <span class="font-semibold text-white/80">Usage:</span> {props.usage}
        </li>
        <li>
          <span class="font-semibold text-white/80">Context:</span>{" "}
          {props.context}
        </li>
      </ul>

      <div class="rounded-lg bg-white/[0.04] p-4">
        <p class="font-japanese text-lg text-white/80">{props.example}</p>
        <p class="mt-1 text-sm text-white/40">{props.translation}</p>
      </div>
    </div>
  )
}
