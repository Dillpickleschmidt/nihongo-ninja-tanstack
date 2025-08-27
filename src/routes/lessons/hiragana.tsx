// routes/lessons/hiragana.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import YouTubeVideo from "@/features/youtube/YouTube"
import KanaChart from "@/components/charts/KanaChart"

export const Route = createFileRoute("/lessons/hiragana")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/practice/hiragana" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-12">
      {/* --- Hero --- */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 px-6 py-20">
        <div class="absolute inset-0 flex items-center justify-center opacity-30">
          <img
            src="/img/chapter-0/あ.png"
            alt="あ character"
            class="h-32 w-32 opacity-50"
          />
        </div>
        <div class="relative text-center">
          <h1 class="mb-4 text-4xl leading-tight font-extrabold text-white">
            Hiragana: The{" "}
            <span class="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              ABCs
            </span>{" "}
            of Japanese
          </h1>
          <p class="text-lg text-slate-300">
            Master the foundational writing system that unlocks all of Japanese.
          </p>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 py-12">
        <ResourceSection />

        {/* What is Hiragana */}
        <section class="space-y-8">
          <div class="text-center">
            <h2 class="mb-4 text-3xl font-bold">What is Hiragana?</h2>
            <div class="mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          </div>

          <div class="space-y-6 text-lg leading-relaxed">
            <p>
              Hiragana is one of the three writing systems of Japanese—used
              alongside Katakana and Kanji. It’s mainly for{" "}
              <strong class="text-blue-400">native Japanese words</strong> and{" "}
              <strong class="text-blue-400">grammatical elements</strong> that
              connect words into sentences.
            </p>

            <p>
              There are{" "}
              <strong class="text-blue-400">46 Hiragana characters</strong>. But
              don’t panic—all of them are built from the{" "}
              <em>same five vowels</em> you already met in our pronunciation
              lesson:
            </p>
          </div>
        </section>

        {/* Vowels */}
        <section>
          <div class="rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 p-8 text-center dark:from-blue-950/30 dark:to-sky-950/30">
            <div class="font-japanese mb-4 text-4xl font-bold text-sky-600 dark:text-sky-400">
              あ　い　う　え　お
            </div>
            <div class="mb-2 text-xl font-semibold text-sky-300">
              a • i • u • e • o
            </div>
            <p class="font-medium text-blue-600 dark:text-blue-400">
              These are the foundation. Every other Hiragana character builds on
              them.
            </p>
          </div>
        </section>

        <section class="space-y-8">
          <Dialogue
            speaker="student"
            text="So if I learn hiragana, I can start reading real Japanese?"
          />
          <Dialogue
            speaker="sensei"
            text="Exactly. That’s why it’s the first step in your learning journey."
          />
        </section>

        {/* Building Rows */}
        <section class="space-y-6">
          <h2 class="text-2xl font-semibold">Building a Row</h2>
          <p>
            Put a consonant in front of each vowel, and you unlock a{" "}
            <strong>whole row</strong> of new sounds:
          </p>
          <Attachment speaker="sensei">
            <p class="mb-3">Here’s the k‑row:</p>
            <KanaRow consonant="k" />
            <p class="mt-3 text-center text-[0.8rem] opacity-90">
              One consonant × five vowels = a predictable row of Hiragana.
            </p>
          </Attachment>
          <Attachment speaker="sensei">
            <p class="mb-3">…and here’s the r‑row:</p>
            <KanaRow consonant="r" />
          </Attachment>
        </section>

        {/* Full Chart */}
        <section class="space-y-6">
          <h2 class="text-2xl font-semibold">The Full Chart</h2>
          <div class="flex-1 overflow-x-auto">
            <KanaChart />
          </div>
          <p class="text-muted-foreground text-sm">
            Forty‑six characters in all—enough to write anything in Japanese.
          </p>
        </section>

        {/* Exceptions */}
        <section class="space-y-6">
          <h2 class="text-2xl font-semibold">The Exceptions</h2>
          <p>
            Japanese is wonderfully consistent—but there are a{" "}
            <strong>handful of quirks</strong> you should know:
          </p>

          <div class="rounded-md border border-blue-700/40 bg-blue-900/20 p-4 text-sm leading-relaxed text-blue-200">
            <p>
              <span class="font-japanese mr-2 text-sky-200">し</span>→ “shi”
            </p>
            <p>
              <span class="font-japanese mr-2 text-sky-200">ち</span>→ “chi”
              <span class="font-japanese mx-2 text-sky-200">つ</span>→ “tsu”
            </p>
            <p>
              <span class="font-japanese mr-2 text-sky-200">ふ</span>→ soft “fu”
              (gentle breath)
            </p>
            <p>
              <span class="font-japanese mr-2 text-sky-200">ん</span>→ the only
              consonant, “n” or “m”
            </p>
            <p>
              <span class="font-japanese mr-2 text-sky-200">を</span>→ written
              “wo”, usually pronounced “o”
            </p>
          </div>
        </section>

        {/* Resources (restore original dialogue here) */}
        <section class="space-y-8">
          <h2 class="text-2xl font-semibold">How to Actually Learn These</h2>
          <Dialogue
            speaker="student"
            text="Sensei… there are 46 of these squiggles. I’ll never remember them all!"
          />
          <Dialogue
            speaker="sensei"
            text="Fear not—the internet has come to rescue you!"
          />
          <Attachment speaker="sensei">
            <a
              href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
              target="_blank"
              class="block font-semibold hover:underline"
            >
              📄 Tofugu’s Free Hiragana PDF
            </a>
            <p class="mt-1 text-xs opacity-90">
              Mnemonics + practice sheets. Many learners master all 46 kana in
              days.
            </p>
          </Attachment>

          <Dialogue
            speaker="student"
            text="I'll check that out. What comes after mastering these squiggles?"
          />
          <Dialogue
            speaker="sensei"
            text="Once you’ve learned the characters, we’ll practice Japanese greetings. Don’t worry about perfection—we’ll ease you in with romaji this time. But next chapter? You’re on your own, kid."
          />
        </section>

        {/* Practice Words */}
        <section class="space-y-6">
          <h2 class="text-2xl font-semibold">Your First Words</h2>
          <p>
            Let’s put this into practice! Here are a few simple words spelled
            entirely in Hiragana:
          </p>
          <div class="grid gap-4 sm:grid-cols-3">
            <WordCard jp="ねこ" romaji="ne + ko" gloss="cat" />
            <WordCard jp="すし" romaji="su + shi" gloss="sushi" />
            <WordCard jp="はな" romaji="ha + na" gloss="flower" />
          </div>
          <div class="mt-4 rounded-md bg-blue-950/30 p-4 text-sm text-blue-300">
            Try sounding out these too: たこ, うみ, みせ, またね, こころ
          </div>
        </section>

        {/* Sensei Wisdom */}
        <section class="space-y-6">
          <div class="text-center">
            <div class="bg-background/50 border-muted mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full border-2">
              <img
                src="/img/guru.png"
                alt="sensei"
                class="h-14 w-14 rounded-full"
              />
            </div>
            <h3 class="mb-4 text-2xl font-semibold">A Note from Sensei</h3>
          </div>

          <Attachment speaker="sensei">
            <p class="text-sm leading-relaxed italic">
              Hiragana feels huge at first, but think of it like collecting tea
              cups—{" "}
              <em class="text-purple-200">
                pulls out absolutely massive tea cup set from nowhere
              </em>{" "}
              —learn a few every day, and before long, you’ll have the full set.
            </p>
          </Attachment>

          <div class="flex justify-center">
            <div class="w-full max-w-md">
              <YouTubeVideo
                videoId="GuDyQYkdyio"
                title="Sensei’s Wisdom"
                credit=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ResourceSection() {
  return (
    <section class="border-border bg-card/50 space-y-3 rounded-lg border p-6">
      <h3 class="text-lg font-semibold">Essential Resources</h3>
      <ul class="space-y-2">
        <li>
          <a
            class="text-sky-400 hover:underline"
            href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
            target="_blank"
          >
            Tofugu’s Learn Hiragana PDF
          </a>
        </li>
        <li>
          <a
            class="text-sky-400 hover:underline"
            href="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png"
            target="_blank"
          >
            Hiragana & Katakana Chart
          </a>
        </li>
        <li>
          <a
            class="text-sky-400 hover:underline"
            href="https://www.youtube.com/watch?v=_wZHqOghvSs"
            target="_blank"
          >
            Learn Hiragana + Katakana in 2 Hours (JapanesePod101)
          </a>
        </li>
      </ul>
    </section>
  )
}

function KanaRow({ consonant }: { consonant: string }) {
  let items = [[""]]
  switch (consonant) {
    case "k":
      items = [
        ["か", "ka", "ca·r"],
        ["き", "ki", "ke·y"],
        ["く", "ku", "co·upon"],
        ["け", "ke", "ke·pt"],
        ["こ", "ko", "co·rner"],
      ]
      break
    case "r":
      items = [
        ["ら", "ra", "ra·w"],
        ["り", "ri", "re·ap"],
        ["る", "ru", "roo·m"],
        ["れ", "re", "re·d"],
        ["ろ", "ro", "ro·w"],
      ]
      break
  }
  return (
    <div class="grid gap-4 sm:grid-cols-5">
      {items.map(([jp, romaji, hint]) => (
        <div class="w-20 rounded-lg border border-sky-200/50 bg-gradient-to-br from-sky-50 to-blue-50 p-4 text-center dark:border-sky-700/50 dark:from-sky-950/40 dark:to-blue-950/40">
          <p class="font-japanese text-2xl font-bold text-sky-700 dark:text-sky-300">
            {jp}
          </p>
          <p class="text-md font-medium">{romaji}</p>
          <p class="text-muted-foreground text-xs italic">{hint}</p>
        </div>
      ))}
    </div>
  )
}

function Dialogue({
  speaker,
  text,
}: {
  speaker: "student" | "sensei"
  text: string
}) {
  const isStudent = speaker === "student"

  return (
    <div
      class={`flex items-end gap-2 ${isStudent ? "justify-start" : "justify-end"}`}
    >
      {isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/student.png" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      )}
      <div
        class={`max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
          isStudent
            ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
            : "bg-sky-500 text-white dark:bg-sky-600"
        }`}
      >
        {text}
      </div>
      {!isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/guru.png" />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

function Attachment({
  speaker,
  children,
}: {
  speaker: "student" | "sensei"
  children: any
}) {
  const isStudent = speaker === "student"
  return (
    <div
      class={`flex items-start gap-2 ${
        isStudent ? "justify-start" : "justify-end"
      }`}
    >
      {isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/student.png" alt="Student" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
      )}
      <div
        class={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isStudent
            ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
            : "bg-sky-500 text-white dark:bg-sky-600"
        }`}
      >
        {children}
      </div>
      {!isStudent && (
        <Avatar class="h-8 w-8 flex-shrink-0">
          <AvatarImage src="/img/guru.png" alt="Sensei" />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

function WordCard(props: { jp: string; romaji: string; gloss: string }) {
  return (
    <div class="bg-card/50 font-japanese rounded-lg p-4 text-center">
      <p class="mb-1 text-2xl font-semibold">{props.jp}</p>
      <p class="text-muted-foreground text-sm">{props.romaji}</p>
      <p class="text-sm">{props.gloss}</p>
    </div>
  )
}
