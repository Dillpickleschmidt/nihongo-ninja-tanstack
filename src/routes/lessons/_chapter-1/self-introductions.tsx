import type { JSX } from "solid-js"
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
  "/lessons/_chapter-1/self-introductions",
)({
  component: SelfIntroductions,
})

function SelfIntroductions() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        私
      </span>

      <LessonHeader
        chapter="Chapter 1 · Getting Started"
        title={<>Self-Introductions</>}
        subtitle="How to say who you are, and the many ways to say 'I'."
      >
        <OverviewItem>First-person pronouns and when to use them</OverviewItem>
        <OverviewItem>Building a self-introduction</OverviewItem>
        <OverviewItem>Dropping pronouns when context is clear</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* First-Person Pronouns */}
        <div class="space-y-4">
          <SectionLabel>First-person pronouns</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japanese, there are several pronouns that you can use to refer to
            yourself, each with its own nuance and level of formality. Unlike
            English, which primarily uses "I," Japanese pronouns can reflect
            gender, formality, and personal style.
          </p>

          <div class="mt-2">
            <YouTubeVideo
              videoId="MNR0egvK_oQ"
              title="Nuances of Japanese First-Person Pronouns by Kaname Naito, Mar 26 2023"
              credit="Kaname Naito"
            />
          </div>
        </div>

        {/* Individual Pronoun Sections */}
        <PronounSection
          jp="私"
          roman="Watashi"
          furigana="わたし"
          description={[
            {
              label: "Usage",
              text: "Gender-neutral. The safe default.",
            },
            {
              label: "Context",
              text: "Men use it in polite or formal situations, but tend to switch to 僕 or even 俺 among friends. Women use it in virtually any setting.",
            },
          ]}
          story={{
            title: "Business introductions",
            characters:
              "He (Osaka branch transfer), She (Suzuki, account manager)",
            text: [
              `"I don't think we've met. I'm with the Osaka branch." He extends his hand. "I just transferred last month."`,
              "",
              `"I'm Suzuki. I'll be handling your account going forward. Yamada-san brought me up to speed before she left."`,
            ],
          }}
        />

        <PronounSection
          jp="僕"
          roman="Boku"
          furigana="ぼく"
          description={[
            {
              label: "Usage",
              text: "Casual, predominantly male.",
            },
            {
              label: "Context",
              text: "Common among boys and men in everyday conversation. Modest and relaxed, but too casual for formal settings.",
            },
          ]}
          story={{
            title: "After practice",
            characters: "Him, Kenji, teammates",
            text: [
              `"Pass it to me next time, not Kenji." He's toweling off after practice. "I was wide open the whole second half."`,
            ],
          }}
        />

        <PronounSection
          jp="俺"
          roman="Ore"
          furigana="おれ"
          description={[
            {
              label: "Usage",
              text: "Very casual, predominantly male.",
            },
            {
              label: "Context",
              text: "Used among close friends and peers. Can come across as rude in the wrong setting.",
            },
          ]}
          story={{
            title: "Game night",
            characters: "Him, his friends",
            text: [
              `"I carried last game and nobody said anything."`,
              `"Because you also threw the game before that."`,
              `"...That was lag."`,
            ],
          }}
          footnote="Some guys still prefer 僕 even in casual settings. It's personal choice."
        />

        <PronounSection
          jp="私"
          roman="Watakushi"
          furigana="わたくし"
          description={[
            {
              label: "Usage",
              text: "Very formal, gender-neutral. (Same kanji as わたし)",
            },
            {
              label: "Context",
              text: "Used in highly formal settings (speeches, ceremonies, speaking to higher status).",
            },
          ]}
          story={{
            title: "Press conference",
            characters: "Him, press corps",
            text: [
              `"I take full responsibility for the delay." He adjusts the microphone. Cameras flash. "I will personally ensure this does not happen again."`,
            ],
          }}
        />

        <PronounSection
          jp="あたし"
          roman="Atashi"
          description={[
            {
              label: "Usage",
              text: "Informal, typically used by females. Often written in hiragana but shares kanji 私.",
            },
            {
              label: "Context",
              text: "Used casually by women/girls. A softer, more feminine version of わたし.",
            },
          ]}
          story={{
            title: "Exam day",
            characters: "Her, her friend",
            text: [
              `"I swear I studied for this one." She's flipping through her notes outside the exam room. "I just forgot everything."`,
            ],
          }}
        />

        <PronounSection
          jp="うち"
          roman="Uchi"
          description={[
            {
              label: "Usage",
              text: "Used by young women, especially Kansai region.",
            },
            {
              label: "Context",
              text: "Common in Osaka/Kansai. Sounds modest, casual, feminine.",
            },
          ]}
          story={{
            title: "Lunch break",
            characters: "Her, her friends",
            text: [
              `"Hang on, that's not what happened." She holds up a hand, mouth still full. Her friend keeps talking anyway.`,
              `"I'm serious! Ask her." She points her chopsticks across the table. "Tell her I'm right."`,
            ],
          }}
        />

        <PronounSection
          jp="儂"
          roman="Washi"
          furigana="わし"
          description={[
            { label: "Usage", text: "Informal, older men." },
            {
              label: "Context",
              text: "Used mainly by elderly men, Hiroshima dialect, or anime. Conveys wisdom/age.",
            },
          ]}
          story={{
            title: "Back in my day",
            characters: "Grandpa, his grandson",
            text: [
              `"Back in my day, I walked to school uphill. Both directions."`,
              `"That's not how hills work, grandpa."`,
              `"Barefoot. In the snow. And I was grateful."`,
            ],
          }}
        />

        {/* Plural First-Person */}
        <div class="space-y-4">
          <SectionLabel>Plural first-person</SectionLabel>
          <div class="grid gap-2 sm:grid-cols-2">
            <PluralItem kana="私たち" label="Plural of わたし" />
            <PluralItem kana="僕たち" label="Plural of ぼく" />
            <PluralItem kana="俺たち" label="Plural of おれ" />
            <PluralItem kana="あたしたち" label="Plural of あたし" />
            <PluralItem kana="うちたち" label="Plural of うち" />
          </div>
        </div>

        <PronounSection
          jp="我々"
          roman="Wareware"
          furigana="われわれ"
          description={[
            {
              label: "Usage",
              text: "Formal, often in speeches/literary contexts.",
            },
            {
              label: "Context",
              text: "Refers to group with strong sense of unity.",
            },
          ]}
          story={{
            title: "Conference room",
            characters: "Department head, employees",
            text: [
              `"We will not be the department that missed the deadline." He's standing at the front of the conference room. Nobody's checking their phone.`,
              `"We will deliver. On time."`,
            ],
          }}
        />

        {/* Introducing Yourself */}
        <div class="space-y-5">
          <SectionLabel>Introducing yourself</SectionLabel>

          <YouTubeVideo
            videoId="t1iTJK31UYw"
            title="First-time Greeting in Japanese for Beginners by Kaname Naito, Jun 15 2024"
            credit="Kaname Naito"
            timestamps={[
              { time: 0, label: "First-time Greetings" },
              { time: 256, label: "How to Ask for Someone's Name" },
            ]}
          />

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            We've learned the <span class="font-semibold text-foreground dark:text-white/90">X</span>
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">は</span>
            <span class="font-semibold text-foreground dark:text-white/90">Y</span>
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">です</span>{" "}
            structure. So you can say:
          </p>

          <p class="text-center font-japanese text-xl font-semibold text-foreground dark:text-white/90">
            私は [Your name] です。
          </p>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            But note: Japanese often omits pronouns when obvious from context.
            Overusing 私 can feel redundant. Instead, it's smoother to just say:
          </p>

          <GlowBox>
            <p class="text-center text-2xl font-bold text-foreground dark:text-white/90">
              [your name] + です。
            </p>
          </GlowBox>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            A richer self-introduction includes greetings and やさしい phrases:
          </p>

          <div class="rounded-xl bg-card/60 dark:bg-white/[0.04] p-6">
            <p class="font-japanese text-lg font-semibold leading-relaxed text-foreground dark:text-white/90">
              こんにちは！はじめまして！ [your name] です。 [info]
              です。どうぞよろしくお<Furigana furigana={<span class="text-xs">ねが</span>}>願</Furigana>いします。
            </p>
          </div>

          <div class="py-2">
            <AsideBlock>
              <ul class="space-y-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <li>
                  <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                    こんにちは
                  </span>{" "}
                  – Hello
                </li>
                <li>
                  <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                    はじめまして
                  </span>{" "}
                  – "Nice to meet you"
                </li>
                <li>
                  [Info]です – Add role/info (学生です, 専攻は英語です…)
                </li>
                <li>
                  <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
                    どうぞよろしくお<Furigana furigana={<span class="text-[10px]">ねが</span>}>願</Furigana>いします
                  </span>{" "}
                  – Polite closure, wishing goodwill.
                </li>
              </ul>
            </AsideBlock>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            私 (わたし) is the safe default, but pronoun choice reflects
            formality, gender, and context
          </SummaryItem>
          <SummaryItem>
            [name] + です is the simplest self-introduction
          </SummaryItem>
          <SummaryItem>
            Full pattern: はじめまして → [name] です → [info] です →
            どうぞよろしくお<Furigana furigana={<span class="text-[10px]">ねが</span>}>願</Furigana>いします
          </SummaryItem>
          <SummaryItem>
            Japanese often drops pronouns when context makes them obvious
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function PronounSection(props: {
  jp: string
  roman: string
  furigana?: string
  footnote?: string
  description?: { label: string; text: string }[]
  story?: { title: string; characters: string; text: string[] }
}) {
  return (
    <div class="space-y-4">
      <div class="flex items-baseline gap-3">
        <h3 class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
          {props.furigana ? (
            <Furigana furigana={props.furigana}>{props.jp}</Furigana>
          ) : (
            props.jp
          )}
        </h3>
        <span class="text-lg font-medium text-muted-foreground dark:text-white/40">{props.roman}</span>
      </div>

      {props.description && (
        <ul class="space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
          {props.description.map((d) => (
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">{d.label}:</span>{" "}
              {d.text}
            </li>
          ))}
        </ul>
      )}

      {props.story && (
        <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
          <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
            {props.story.title}
          </p>
          <p class="mb-2 text-xs text-muted-foreground/70 dark:text-white/30">
            {props.story.characters}
          </p>
          <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            {props.story.text.map((line) => (
              <p>{line}</p>
            ))}
          </div>
          {props.footnote && (
            <p class="mt-3 text-sm italic text-muted-foreground dark:text-white/40">
              {props.footnote}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

function PluralItem(props: { kana: string; label: string }) {
  return (
    <div class="flex items-baseline gap-3 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
      <span class="font-japanese text-lg font-semibold text-foreground/80 dark:text-white/80">
        {props.kana}
      </span>
      <span class="text-sm text-muted-foreground dark:text-white/40">{props.label}</span>
    </div>
  )
}
