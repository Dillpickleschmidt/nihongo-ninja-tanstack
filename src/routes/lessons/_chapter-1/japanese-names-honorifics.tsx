import type { JSX } from "solid-js"
import { Show } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import { Button } from "@/components/ui/button"
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
  "/lessons/_chapter-1/japanese-names-honorifics",
)({
  component: JapaneseNamesHonorifics,
})

function JapaneseNamesHonorifics() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        様
      </span>

      <LessonHeader
        chapter="Chapter 1 · Getting Started"
        title={<>Names & Honorifics</>}
        subtitle="How Japanese names work, and the suffixes that define your relationship to someone."
      >
        <OverviewItem>Japanese name order and structure</OverviewItem>
        <OverviewItem>Common honorific suffixes</OverviewItem>
        <OverviewItem>Choosing the right level of formality</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Structure of Names */}
        <div class="space-y-4">
          <SectionLabel>Structure of Japanese names</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Japanese names typically consist of a family name (surname) followed
            by a given name. This order is the{" "}
            <span class="font-semibold text-white/90">opposite</span> of
            Western naming conventions where the given name usually comes first.
          </p>

          <div class="rounded-xl bg-white/[0.04] p-6 text-center">
            <p class="font-japanese text-2xl">
              <Furigana furigana={<span class="text-sm">たなか</span>}>
                田中
              </Furigana>{" "}
              <Furigana furigana={<span class="text-sm">たろう</span>}>
                太郎
              </Furigana>{" "}
              <span class="text-[1.375rem] text-white/60">(Tanaka Tarou)</span>
            </p>
            <p class="mt-1 text-sm text-white/40">(last—first)</p>
          </div>

          <ul class="space-y-2 leading-relaxed text-white/70">
            <li>
              <span class="font-semibold text-white/90">Family Name: </span>
              <span class="font-japanese">田中</span> (Tanaka) - Means{" "}
              <em>within rice fields</em>.
            </li>
            <li>
              <span class="font-semibold text-white/90">Given Name: </span>
              <span class="font-japanese">太郎</span> (Tarou) - Means{" "}
              <em>great son</em>.
            </li>
          </ul>
          <p class="text-sm italic text-white/40">
            *Family names often refer to geographical features or parts of
            nature.
          </p>

          <div class="rounded-xl bg-white/[0.04] p-6 text-center">
            <p class="mb-3 leading-relaxed text-white/70">
              Foreign names are usually written in katakana and in their native
              order.
            </p>
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">とむ</span>}>
                トム
              </Furigana>
              ・
              <Furigana furigana={<span class="text-sm">くるーず</span>}>
                クルーズ
              </Furigana>{" "}
              <span class="text-lg text-white/60">(Tom Cruise)</span>
            </p>
            <p class="mt-3 text-sm italic text-white/40">
              (more on katakana in the next chapter)
            </p>
          </div>
        </div>

        {/* Cultural Differences */}
        <div class="space-y-6">
          <SectionLabel>
            Cultural differences in addressing people
          </SectionLabel>

          <p class="leading-relaxed text-white/70">
            In Japan, people address each other by family name, not given name.
            Using someone's given name without permission is considered{" "}
            <span class="font-semibold text-white/90">
              very rude and presumptuous
            </span>
            . It implies a level of intimacy that is not appropriate in most
            social and professional settings.
          </p>

          <GlowBox>
            <p class="text-center text-lg font-semibold text-white/90">
              Always use the family name with the appropriate honorific unless
              you have been explicitly invited to use the given name.
            </p>
          </GlowBox>
        </div>

        {/* Honorifics */}
        <div class="space-y-4">
          <SectionLabel>Honorifics: politeness in address</SectionLabel>

          <YouTubeVideo
            videoId="5rOHpkpYMIM"
            title="Re:Zero's Japanese Honorifics (Sama, San, Kun, Chan, Tan, Dono) Explained"
            credit="That Japanese Man Yuta"
          />

          <p class="leading-relaxed text-white/70">
            Honorifics are suffixes added to names to convey respect, formality,
            and the relationship between the speaker and the person being
            addressed.
          </p>
        </div>

        {/* Individual Honorific Sections */}
        <HonorificSection
          jp="さん"
          en="San"
          description={[
            {
              label: "Usage",
              text: "Most common honorific, gender-neutral.",
            },
            {
              label: "Context",
              text: 'Used in most polite interactions, similar to "Mr./Ms." in English.',
            },
          ]}
          story={{
            title: "Office setting",
            characters: "Her, Nakamura (coworker)",
            text: [
              `"Is Nakamura-san in today?" She leans into the office. "I need her sign-off before three."`,
            ],
          }}
        />

        <HonorificSection
          jp="ちゃん"
          en="Chan"
          description={[
            {
              label: "Usage",
              text: "Informal, affectionate, typically used for children, close friends, or significant others.",
            },
            {
              label: "Context",
              text: "Conveys endearment and closeness.",
            },
          ]}
          story={{
            title: "Family gathering",
            characters: "Her, Sakura (her niece)",
            text: [
              `"Sakura-chan, come look at this!" She crouches down and holds out her phone. "There's a cat outside that looks just like yours."`,
            ],
          }}
        />

        <HonorificSection
          jp="君"
          en="Kun"
          furigana="くん"
          description={[
            {
              label: "Usage",
              text: "Informal, typically used for boys and young men.",
            },
            {
              label: "Context",
              text: "Used among friends, classmates, or by superiors addressing male subordinates.",
            },
          ]}
          story={{
            title: "School setting",
            characters: "Him, Tarou (his classmate)",
            text: [
              `"Nice shot, Tarou-kun!" He's still catching his breath on the sideline. "Do that again and we actually win this one."`,
            ],
          }}
          video={{
            videoId: "beRayxTGDKY",
            title:
              "The Japanese honorific くん -kun: How, why, when it is used",
            credit: "Kyota Ko",
          }}
        />

        <HonorificSection
          jp="先生"
          en="Sensei"
          description={[
            {
              label: "Usage",
              text: "For teachers, doctors, or masters of a craft.",
            },
            {
              label: "Context",
              text: "Conveys respect for expertise and authority.",
            },
          ]}
          story={{
            title: "Classroom setting",
            characters: "Her, Yamada (her teacher)",
            text: [
              `"Yamada-sensei, I don't understand number seven." She flips her worksheet around and slides it across the desk. "I keep getting a different answer."`,
            ],
          }}
        />

        <HonorificSection
          jp="先輩"
          en="Senpai"
          description={[
            {
              label: "Usage",
              text: "For senior colleagues or upperclassmen. Commonly used in both hiragana (せんぱい) and kanji (先輩).",
            },
            {
              label: "Context",
              text: "Shows respect for someone who is more experienced.",
            },
          ]}
          story={{
            title: "Club activity",
            characters: "Her (new member), Takahashi (senior member)",
            text: [
              `"Takahashi-senpai, is this grip right?" She holds up the racket. He tilts his head. "Close. Rotate your wrist a little more."`,
            ],
          }}
        />

        <HonorificSection
          jp="様"
          en="Sama"
          description={[
            { label: "Usage", text: "Very formal, respectful." },
            {
              label: "Context",
              text: "Used in business settings, for customers, or in very polite contexts.",
            },
          ]}
          story={{
            title: "Customer service",
            characters: "Her (hostess), Tanaka (guest)",
            text: [
              `"Tanaka-sama, your reservation is ready." She gestures toward the private dining room. "Right this way, please."`,
            ],
          }}
        />

        <HonorificSection
          jp="殿"
          en="Dono"
          furigana="どの"
          description={[
            { label: "Usage", text: "Very formal, archaic." },
            {
              label: "Context",
              text: "Not used in modern Japanese, but appears in period settings.",
            },
          ]}
          story={{
            title: "Historical drama",
            characters: "Him (a samurai), Lord Oda",
            text: [
              <>
                "Oda-dono, I bring a question from the monks." He unrolls the
                scroll. "What... is the{" "}
                <a
                  href="https://www.youtube.com/watch?v=uio1J2PKzLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline underline-offset-2 transition-colors hover:text-white/80"
                >
                  airspeed velocity of an unladen swallow
                </a>
                ?"
              </>,
            ],
          }}
          video={{
            videoId: "F6uVxd8nTA8",
            title: "What is the Japanese honorific -dono all about?",
            credit: "Kyota Ko",
          }}
        />

        {/* Additional Titles */}
        <div class="space-y-4">
          <SectionLabel>Additional titles based on occupation</SectionLabel>
          <p class="leading-relaxed text-white/70">
            In addition to the common honorifics, certain titles are used to
            address people based on their occupation or position. You're not
            expected to memorize these now, but here are some examples:
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <TitleCard
              jp="社長"
              romaji="Shachou"
              meaning="President or CEO of a company"
              example="田中社長 (Tanaka-shachou)"
            />
            <TitleCard
              jp="部長"
              romaji="Buchou"
              meaning="Department manager or head"
              example="佐藤部長 (Satou-buchou)"
            />
            <TitleCard
              jp="課長"
              romaji="Kachou"
              meaning="Section manager"
              example="鈴木課長 (Suzuki-kachou)"
            />
            <TitleCard
              jp="主任"
              romaji="Shunin"
              meaning="Chief of a smaller group"
              example="山田主任 (Yamada-shunin)"
            />
            <TitleCard
              jp="隊長"
              romaji="Taichou"
              meaning="Captain / leader of a team or unit"
              example="鈴木隊長 (Suzuki-taichou)"
            />
          </div>
        </div>

        {/* Practice Section */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm font-medium text-white/40">
            Put the descriptions in the correct order [wip]
          </p>
          <div class="flex flex-col gap-4 md:flex-row">
            <ul class="font-japanese flex flex-1 flex-col space-y-2 *:text-xl">
              <Button variant="outline">さん</Button>
              <Button variant="outline">ちゃん</Button>
              <Button variant="outline">くん</Button>
              <Button variant="outline">さま</Button>
              <Button variant="outline">せんせい</Button>
              <Button variant="outline">せんぱい</Button>
            </ul>
            <ul class="flex-1 space-y-2 *:justify-start *:text-start *:text-[1.125rem]">
              <Button variant="outline">
                Used for young boys or male friends
              </Button>
              <Button variant="outline">Used for teachers or doctors</Button>
              <Button variant="outline">
                General polite term, similar to Mr./Ms.
              </Button>
              <Button variant="outline">
                Used for senior colleagues or upperclassmen
              </Button>
              <Button variant="outline">
                Very formal, used in business settings or for customers
              </Button>
              <Button variant="outline">
                Affectionate, used for children or close friends
              </Button>
            </ul>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            さん for general politeness, the safest default
          </SummaryItem>
          <SummaryItem>
            先生 for teachers and experts, せんぱい for seniors
          </SummaryItem>
          <SummaryItem>
            ちゃん for affection (kids, close friends), くん for boys/young
            men
          </SummaryItem>
          <SummaryItem>
            様 (さま) for addressing those of high status (superiors,
            customers, royalty)
          </SummaryItem>
          <SummaryItem>
            Never use honorifics when referring to yourself
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

/* --- Honorific Section --- */
function HonorificSection(props: {
  jp: string
  en: string
  furigana?: string
  description: { label: string; text: string }[]
  story: { title: string; characters: string; text: (string | JSX.Element)[] }
  video?: { videoId: string; title: string; credit: string }
}) {
  return (
    <div class="space-y-4">
      <div class="flex items-baseline gap-3">
        <h3 class="font-japanese text-2xl font-bold text-white/90">
          {props.furigana ? (
            <Furigana furigana={props.furigana}>{props.jp}</Furigana>
          ) : (
            props.jp
          )}
        </h3>
        <span class="text-lg font-medium text-white/40">{props.en}</span>
      </div>

      <Show when={props.video}>
        {(video) => (
          <YouTubeVideo
            videoId={video().videoId}
            title={video().title}
            credit={video().credit}
          />
        )}
      </Show>

      <ul class="space-y-1.5 text-sm leading-relaxed text-white/60">
        {props.description.map((d) => (
          <li>
            <span class="font-semibold text-white/80">{d.label}:</span> {d.text}
          </li>
        ))}
      </ul>

      <div class="rounded-lg bg-white/[0.04] p-4">
        <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
          {props.story.title}
        </p>
        <p class="mb-2 text-xs text-white/30">{props.story.characters}</p>
        <div class="space-y-1 text-sm leading-relaxed text-white/60">
          {props.story.text.map((line) => (
            <p>{line}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

/* --- Title Card --- */
function TitleCard(props: {
  jp: string
  romaji: string
  meaning: string
  example: string
}) {
  return (
    <div class="rounded-lg bg-white/[0.04] p-4">
      <div class="flex items-baseline gap-2">
        <span class="font-japanese text-xl font-bold text-white/90">
          {props.jp}
        </span>
        <span class="text-sm text-white/40">({props.romaji})</span>
      </div>
      <p class="mt-1 text-sm text-white/60">{props.meaning}</p>
      <p class="mt-1 text-xs text-white/40">
        Ex: <span class="font-japanese">{props.example}</span>
      </p>
    </div>
  )
}
