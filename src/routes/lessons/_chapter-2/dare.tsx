// routes/lessons/_chapter-2/dare.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-2/dare")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-2/mo-particle" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* --- Consistent Header --- */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Asking Who with <span class="font-japanese text-red-500">だれ</span>
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
        <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
          Learn how to ask “who” (<span class="font-japanese">だれ</span>) and
          “whose” (<span class="font-japanese">だれの</span>) in Japanese.
        </p>
      </header>

      {/* --- Main Content --- */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 leading-relaxed">
        {/* Intro video */}
        <YouTubeVideo
          videoId="UYzsulvocL0"
          title="Japanese Lesson #105 Question! Who? だれ (dare)"
          credit="Onigiri Nihongo Club"
        />

        {/* --- だれ = Who --- */}
        <section class="space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold">
              <span class="font-japanese text-3xl">
                <Furigana furigana={<span class="text-lg">だれ</span>}>
                  誰
                </Furigana>
              </span>{" "}
              – Who
            </h3>
            <div class="mx-auto mt-1 h-1 w-20 bg-gradient-to-r from-red-400 to-pink-400" />
          </div>

          <ul class="list-inside list-disc space-y-2">
            <li>
              <strong>Function: </strong>
              <span class="font-japanese">だれ</span> is used to ask{" "}
              <span class="font-black">who</span> in Japanese.
            </li>
            <li>
              <strong>Usage: </strong>Use{" "}
              <span class="font-japanese">だれ</span> when you want to know the
              identity of someone.
            </li>
          </ul>

          <h4 class="text-xl font-bold">Example Sentences</h4>
          <ol class="ml-6 list-decimal space-y-4">
            <li>
              A new student is sitting across the room:
              <p class="mt-2">
                <span class="font-japanese text-xl">
                  あの
                  <Furigana furigana={<span class="text-sm">がくせい</span>}>
                    学生
                  </Furigana>
                  はだれですか。
                </span>{" "}
                {"->"} Who is that student?
              </p>
            </li>
            <li>
              Your young teacher is hard to identify among peers:
              <p class="mt-2">
                <span class="font-japanese text-xl">
                  あのう、だれが
                  <Furigana furigana={<span class="text-sm">せんせい</span>}>
                    先生
                  </Furigana>
                  ですか。
                </span>{" "}
                {"->"} Um... who is the teacher?
              </p>
            </li>
            <li>
              You hear a knock on the door:
              <p class="mt-2">
                <span class="font-japanese text-xl">だれですか。</span> {"->"}{" "}
                Who is it?
              </p>
            </li>
          </ol>
        </section>

        {/* --- だれの = Whose --- */}
        <section class="space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold">
              <span class="font-japanese text-3xl">
                <Furigana furigana={<span class="text-lg">だれ</span>}>
                  誰
                </Furigana>
              </span>
              の – Whose
            </h3>
            <div class="mx-auto mt-1 h-1 w-20 bg-gradient-to-r from-red-400 to-pink-400" />
          </div>

          <ul class="list-inside list-disc space-y-2">
            <li>
              <strong>Function: </strong>
              <span class="font-japanese">だれの</span> = “whose”. It combines{" "}
              <span class="font-japanese">だれ</span> (who) with{" "}
              <span class="font-japanese">の</span> (possessive particle) to
              inquire about ownership.
            </li>
            <li>
              <strong>Usage: </strong>Use{" "}
              <span class="font-japanese">だれの</span> when you want to
              identify the owner of an item.
            </li>
          </ul>

          <h4 class="text-xl font-bold">Example Sentences</h4>
          <ol class="ml-6 list-decimal space-y-4">
            <li>
              A wallet is on the floor:
              <p class="mt-2">
                <span class="font-japanese text-xl">
                  これはだれの
                  <Furigana furigana={<span class="text-sm">さいふ</span>}>
                    財布
                  </Furigana>
                  ですか。
                </span>{" "}
                {"->"} Whose wallet is this?
              </p>
            </li>
            <li>
              You see a bag left on your desk:
              <p class="mt-2">
                <span class="font-japanese text-xl">
                  これはだれの
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  ですか。
                </span>{" "}
                {"->"} Whose bag is this?
              </p>
            </li>
            <li>
              A sombrero is left behind:
              <p class="mt-2">
                <span class="font-japanese text-xl">
                  えっと。。。だれの
                  <Furigana furigana={<span class="text-sm">ぼうし</span>}>
                    帽子
                  </Furigana>
                  ですか。
                </span>{" "}
                {"->"} Uh... whose hat is this?
              </p>
            </li>
          </ol>
        </section>

        {/* --- Practice Section --- */}
        <PracticeSection />
      </main>
    </div>
  )
}

function PracticeSection() {
  return (
    <section class="space-y-8">
      <h3 class="text-center text-3xl font-bold">Practice</h3>
      <div class="space-y-10">
        {/* Q1 */}
        <div>
          <p>
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

        {/* Q2 */}
        <div>
          <p>
            Someone crazy-looking proclaims to be your long-lost brother.
            You&apos;re at least willing to hear them out…
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

        {/* Q3 */}
        <div>
          <p>
            Someone left their umbrella in the stand, and your shop is closing:
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
    </section>
  )
}
