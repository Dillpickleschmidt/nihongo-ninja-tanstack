import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-2/dare")({
  component: Dare,
})

function Dare() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        誰
      </span>

      <LessonHeader
        chapter="Chapter 2 · Grammar"
        title={
          <>
            Asking Who with{" "}
            <span class="font-japanese text-red-500">だれ</span>
          </>
        }
        subtitle='How to ask "who" and "whose" in Japanese.'
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-white/60">だれ</span>{" "}
          for asking "who"
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-white/60">だれの</span>{" "}
          for asking "whose"
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro video */}
        <div>
          <YouTubeVideo
            videoId="UYzsulvocL0"
            title="Japanese Lesson #105 Question! Who? だれ (dare)"
            credit="Onigiri Nihongo Club"
          />
        </div>

        {/* だれ = Who */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-3xl">
              <Furigana furigana={<span class="text-lg">だれ</span>}>
                誰
              </Furigana>
            </p>
            <SectionLabel class="mt-2 text-white/30">Who</SectionLabel>
          </div>

          <ul class="space-y-2 leading-relaxed text-white/70">
            <li>
              <span class="font-semibold text-white/90">Function: </span>
              <span class="font-japanese">だれ</span> is used to ask{" "}
              <span class="font-black text-white/90">who</span> in Japanese.
            </li>
            <li>
              <span class="font-semibold text-white/90">Usage: </span>Use{" "}
              <span class="font-japanese">だれ</span> when you want to know the
              identity of someone.
            </li>
          </ul>

          <div class="space-y-3">
            <p class="text-sm font-medium text-white/40">Example sentences</p>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs text-white/40">
                A new student is sitting across the room:
              </p>
              <p class="mt-2 font-japanese text-xl text-white/90">
                あの
                <Furigana furigana={<span class="text-sm">がくせい</span>}>
                  学生
                </Furigana>
                はだれですか。
              </p>
              <p class="mt-1 text-sm text-white/50">
                Who is that student?
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs text-white/40">
                Your young teacher is hard to identify among peers:
              </p>
              <p class="mt-2 font-japanese text-xl text-white/90">
                あのう、だれが
                <Furigana furigana={<span class="text-sm">せんせい</span>}>
                  先生
                </Furigana>
                ですか。
              </p>
              <p class="mt-1 text-sm text-white/50">
                Um... who is the teacher?
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs text-white/40">
                You hear a knock on the door:
              </p>
              <p class="mt-2 font-japanese text-xl text-white/90">
                だれですか。
              </p>
              <p class="mt-1 text-sm text-white/50">Who is it?</p>
            </div>
          </div>
        </div>

        {/* だれの = Whose */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-3xl">
              <Furigana furigana={<span class="text-lg">だれ</span>}>
                誰
              </Furigana>
              の
            </p>
            <SectionLabel class="mt-2 text-white/30">Whose</SectionLabel>
          </div>

          <ul class="space-y-2 leading-relaxed text-white/70">
            <li>
              <span class="font-semibold text-white/90">Function: </span>
              <span class="font-japanese">だれの</span> = "whose". It combines{" "}
              <span class="font-japanese">だれ</span> (who) with{" "}
              <span class="font-japanese">の</span> (possessive particle) to
              inquire about ownership.
            </li>
            <li>
              <span class="font-semibold text-white/90">Usage: </span>Use{" "}
              <span class="font-japanese">だれの</span> when you want to
              identify the owner of an item.
            </li>
          </ul>

          <div class="space-y-3">
            <p class="text-sm font-medium text-white/40">Example sentences</p>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs text-white/40">A wallet is on the floor:</p>
              <p class="mt-2 font-japanese text-xl text-white/90">
                これはだれの
                <Furigana furigana={<span class="text-sm">さいふ</span>}>
                  財布
                </Furigana>
                ですか。
              </p>
              <p class="mt-1 text-sm text-white/50">
                Whose wallet is this?
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs text-white/40">
                You see a bag left on your desk:
              </p>
              <p class="mt-2 font-japanese text-xl text-white/90">
                これはだれの
                <Furigana furigana={<span class="text-sm">かばん</span>}>
                  鞄
                </Furigana>
                ですか。
              </p>
              <p class="mt-1 text-sm text-white/50">Whose bag is this?</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs text-white/40">A sombrero is left behind:</p>
              <p class="mt-2 font-japanese text-xl text-white/90">
                えっと。。。だれの
                <Furigana furigana={<span class="text-sm">ぼうし</span>}>
                  帽子
                </Furigana>
                ですか。
              </p>
              <p class="mt-1 text-sm text-white/50">
                Uh... whose hat is this?
              </p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You notice a skinny old man at the gym lift twice your max. You
                whisper to your friend:
              </p>
              <SelectText
                answer="あのおじいさんはだれですか。"
                a="あのおじいさんはだれのですか。"
                b="そのおじいさんはだれですか。"
                c="あのおじさんはだれですか。"
                d="あのおじいさんはだれですか。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Someone crazy-looking proclaims to be your long-lost brother.
                You're at least willing to hear them out…
              </p>
              <SelectText
                answer="あのう、すみませんが、だれですか。"
                a="あのう、だれのか。"
                b="あのう、すみませんが、だれですか。"
                c="あのう、だれの。"
                d="あのう、すみませんが、だれのか。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Someone left their umbrella in the stand, and your shop is
                closing:
              </p>
              <SelectText
                answer="だれのかさですか。"
                a="このかさはだれですか。"
                b="だれのかさですか。"
                c="かさはだれですか。"
                d="これはだれですか。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            だれ asks "who" — used to identify a person
          </SummaryItem>
          <SummaryItem>
            だれの asks "whose" — だれ + の (possessive)
          </SummaryItem>
          <SummaryItem>
            だれ as the subject uses が (だれがせんせいですか)
          </SummaryItem>
          <SummaryItem>
            だれ as the topic complement uses は (あの人はだれですか)
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
