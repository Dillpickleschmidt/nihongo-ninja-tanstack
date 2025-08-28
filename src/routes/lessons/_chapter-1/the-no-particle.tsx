// routes/lessons/the-no-particle.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/_chapter-1/the-no-particle")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/worksheet-1",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* HEADER */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Mastering the <span class="font-japanese text-orange-500">の</span>{" "}
          Particle in Japanese
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      {/* MAIN */}
      <main class="mx-auto max-w-3xl space-y-14 px-6 leading-relaxed">
        {/* Introduction */}
        <section>
          <p>
            Today, we&apos;re gonna make our first step towards making longer
            and more complex sentences. Say hello to{" "}
            <span class="font-japanese text-xl font-bold">の</span>
            <span class="text-muted-foreground">(no)</span> — the particle which
            connects nouns.
          </p>
        </section>

        {/* Video */}
        <YouTubeVideo
          videoId="MFPOPg34INI"
          title="The Japanese の Particle in 2 minutes!"
          credit="ToKini Andy"
        />

        {/* Basics */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            The Basics: Possession with{" "}
            <span class="font-japanese text-orange-500">の</span>
          </h2>
          <p>
            The <span class="font-japanese">の</span> particle is used to
            connect two nouns, indicating possession or a close relationship.
            It&apos;s similar to the apostrophe-s (&apos;s) in English.
          </p>

          <p class="mt-4">
            Example: <br />
            <span class="font-japanese">
              たけしさん<span class="text-orange-500">の</span>
            </span>
            <Furigana furigana={<span class="text-sm">でんわばんごう</span>}>
              電話番号
            </Furigana>{" "}
            (Takeshi-san no denwa bangou) <br />
            <span class="font-bold">Takeshi&apos;s phone number</span>
          </p>

          <p class="mt-4">Here&apos;s the structure:</p>
          <h3 class="py-3 text-center text-[1.75rem] font-medium">
            [Noun 1] + <span class="font-japanese text-orange-500">の</span> +
            [Noun 2]
          </h3>
          <p class="text-muted-foreground text-center text-sm">
            *Noun 1 is the owner, and Noun 2 is the possessed
          </p>

          <p class="mt-6">More Examples:</p>
          <ul class="ml-6 list-disc space-y-2">
            <li>
              <span class="font-japanese text-xl">
                わたしの
                <Furigana furigana={<span class="text-sm">ほん</span>}>
                  本
                </Furigana>
              </span>{" "}
              - <span class="font-bold">My book</span>
            </li>
            <li>
              <span class="font-japanese text-xl">
                せんせいの
                <Furigana furigana={<span class="text-sm">くるま</span>}>
                  車
                </Furigana>
              </span>{" "}
              - <span class="font-bold">Teacher&apos;s car</span>
            </li>
            <li>
              <span class="font-japanese text-xl">
                ともだちの
                <Furigana furigana={<span class="text-sm">とけい</span>}>
                  時計
                </Furigana>
              </span>{" "}
              - <span class="font-bold">Friend&apos;s watch</span>
            </li>
          </ul>
        </section>

        {/* Practical Examples */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            More Practical Examples
          </h2>
          <p>
            Since you&apos;ve recently learned family terms, countries, majors,
            and occupations, let&apos;s use these topics for more examples.
          </p>

          <ul class="ml-6 list-disc space-y-2">
            <li>
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-sm">さとう</span>}>
                  佐藤
                </Furigana>
                さんのおかあさん
              </span>{" "}
              - <span class="font-bold">Satou&apos;s mother</span>
            </li>
            <li>
              <span class="font-japanese text-xl">
                おとうさんの
                <Furigana furigana={<span class="text-sm">くるま</span>}>
                  車
                </Furigana>
              </span>{" "}
              - <span class="font-bold">Father&apos;s car</span>
            </li>
            <li>
              <span class="font-japanese text-xl">おかあさんのせんこう</span> -{" "}
              <span class="font-bold">Mother&apos;s major</span>
            </li>
            <li>
              <span class="font-japanese text-xl">
                おにいさんの
                <Furigana
                  furigana={<span class="text-sm">こんぴゅーたー</span>}
                >
                  コンピューター
                </Furigana>
              </span>{" "}
              - <span class="font-bold">Older brother&apos;s computer</span>
            </li>
            <li>
              <span class="font-japanese text-xl">
                いもうとの
                <Furigana furigana={<span class="text-sm">ほん</span>}>
                  本
                </Furigana>
              </span>{" "}
              - <span class="font-bold">Younger sister&apos;s book</span>
            </li>
            <li>
              <span class="font-japanese text-xl">
                ともだちの
                <Furigana furigana={<span class="text-sm">けいたい</span>}>
                  携帯
                </Furigana>
              </span>{" "}
              - <span class="font-bold">Friend&apos;s cellphone</span>
            </li>
          </ul>
        </section>

        {/* Multiple NO */}
        <section>
          <p class="font-bold">
            You can connect more than just two nouns in a single sentence:
          </p>
          <ul class="mt-3 ml-6 list-disc space-y-2">
            <li>
              アメリカ<span class="text-orange-500">の</span>ともだち
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">かめら</span>}>
                カメラ
              </Furigana>{" "}
              - <span class="font-bold">American friend&apos;s camera</span>
            </li>
            <li>
              日本語<span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">せんせい</span>}>
                先生
              </Furigana>
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">とけい</span>}>
                時計
              </Furigana>{" "}
              - <span class="font-bold">Japanese teacher&apos;s watch</span>
            </li>
            <li>
              フランス<span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">がくせい</span>}>
                学生
              </Furigana>
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">のーと</span>}>
                ノート
              </Furigana>{" "}
              - <span class="font-bold">French student&apos;s notebook</span>
            </li>
          </ul>

          <p class="pt-6">
            And that&apos;s it! In the future, you&apos;ll encounter a couple
            more uses for the <span class="font-japanese">の</span> particle,
            but you can worry about them in later chapters. For now, try to link
            nouns to show possession.
          </p>
        </section>

        {/* Activity */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">
            Activity: Who Owns What?
          </h2>
          <p>
            Let&apos;s play a quick game to reinforce what we&apos;ve learned.
            Connect the following pictures using{" "}
            <span class="font-japanese text-xl">の</span>.
          </p>

          {/* Q1 */}
          <div class="mt-8">
            <h3 class="font-japanese text-center text-2xl font-medium">
              <Romaji
                romaji={
                  <span class="font-inter text-muted-foreground">Who</span>
                }
              >
                <Furigana furigana={<span class="text-base">だれ</span>}>
                  誰
                </Furigana>
              </Romaji>
              の
              <Furigana furigana={<span class="text-base">ほん</span>}>
                本
              </Furigana>
              ですか。
            </h3>
            <ActivityInput />
          </div>

          {/* Q2 */}
          <div class="mt-8">
            <h3 class="font-japanese text-center text-2xl font-medium">
              <Furigana furigana={<span class="text-base">だれ</span>}>
                誰
              </Furigana>
              の
              <Furigana
                furigana={<span class="text-base">こんぴゅーたー</span>}
              >
                コンピューター
              </Furigana>
              ですか。
            </h3>
            <ActivityInput />
          </div>
        </section>

        {/* Summary */}
        <section>
          <h2 class="mb-4 text-center text-2xl font-semibold">Summary</h2>
          <p>
            By now, you should feel more comfortable using{" "}
            <span class="font-japanese">の</span> to show possession and make
            your sentences richer in detail. If not, don&apos;t worry —
            you&apos;ll practice creating more sentences in the next lesson.
          </p>
        </section>
      </main>
    </div>
  )
}

/* --- Activity Input Block --- */
function ActivityInput() {
  return (
    <div class="mt-6">
      <div class="flex items-center justify-center">
        <div class="bg-card h-48 w-48 rounded-md"></div>
        <div class="mx-12 text-4xl">+</div>
        <div class="bg-card h-48 w-48 rounded-md"></div>
      </div>
      <div class="mt-4 flex w-full max-w-sm justify-center">
        <TextField class="w-full">
          <TextFieldInput placeholder="" />
        </TextField>
      </div>
    </div>
  )
}
