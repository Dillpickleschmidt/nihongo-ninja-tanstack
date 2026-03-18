// routes/lessons/writing-systems.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Route = createFileRoute(
  "/lessons/_chapter-0/writing-systems",
)({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/hiragana",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      <div class="-mt-2 h-48 w-full border-b border-black">
        <img src="/img/chapter-0/brushes.jpg" alt="japanese brushstrokes" />
      </div>
      <h2 class="mt-24 px-12 pt-10 pb-14 text-4xl font-medium lg:px-24 lg:text-5xl">
        Let's take a closer look at the Japanese writing systems.
      </h2>
      <div class="space-y-9 px-8 sm:px-24 lg:px-12">
        <div class="border-muted bg-card ml-24 rounded-2xl border-2 p-4 shadow-md">
          <Avatar class="float-end">
            <AvatarImage src="/img/guru.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <p>
            Japanese has three writing systems, and we often use all of them in
            a single sentence, like this:
          </p>
        </div>
        <div>
          <p class="mb-2 text-center text-2xl">
            <span class="font-japanese">
              <span class="text-green-500 saturate-25">テレビ</span>
              <span class="dark:text-background-secondary text-sky-500 saturate-50 dark:saturate-100">
                を
              </span>
              <span class="text-red-500">見</span>
              <span class="dark:text-background-secondary text-sky-500 saturate-50 dark:saturate-100">
                ます
              </span>
            </span>
            <span class="text-sm">(terebi o mimasu)</span> - I watch television
          </p>
          <ul class="mt-2 flex w-full justify-center space-x-6 pb-4">
            <li>
              <div class="inline-flex h-3 w-3 rounded-full bg-green-500 saturate-25" />{" "}
              - Katakana
            </li>
            <li>
              <div class="dark:bg-background-secondary inline-flex h-3 w-3 rounded-full bg-sky-500 saturate-50 dark:saturate-100" />{" "}
              - Hiragana
            </li>
            <li>
              <div class="inline-flex h-3 w-3 rounded-full bg-red-500" /> -
              Kanji
            </li>
          </ul>
        </div>
      </div>

      <div class="space-y-8 px-4 py-8">
        {/* Hiragana Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-blue-500">
            Hiragana - The Foundation
          </h3>

          <div class="mb-6 space-y-4">
            <div class="flex items-start gap-4">
              <Avatar class="shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">
                  Three writing systems? That seems excessive.
                </p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <p class="text-sm">
                  Each one does a different job. You'll see why once we get into
                  it.
                </p>
              </div>
              <Avatar class="shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div class="space-y-4">
            <p>
              Hiragana is where you start. These curved characters can represent
              every sound in Japanese:
            </p>

            <div class="font-japanese bg-background/50 rounded-lg p-4 text-center text-2xl font-medium">
              <div class="space-y-1">
                <p>あ a</p>
                <p>い i</p>
                <p>う u</p>
                <p>え e</p>
                <p>お o</p>
              </div>
            </div>

            <div class="text-center">
              <p class="mb-2">
                <strong>Sensei:</strong> Smooth, rounded shapes. Like stones
                polished by a river.
              </p>
              <div class="mb-4 flex justify-center">
                <div class="h-10 w-10">
                  <img
                    src="/img/chapter-0/stones-smooth.png"
                    alt="smooth stones"
                  />
                </div>
              </div>
              <p class="text-muted-foreground">
                There are 46 of them. Unlike English, they're actually
                consistent — each one always makes the same sound.
              </p>
            </div>
          </div>
        </div>

        {/* Katakana Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-green-500">
            Katakana - Sharp Strokes
          </h3>

          <div class="mb-6 space-y-4">
            <div class="flex items-start gap-4">
              <Avatar class="shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">And the next one?</p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                <p class="text-sm">
                  Same sounds, sharper strokes. Where hiragana looks like river
                  stones, katakana looks like a katana.
                </p>
              </div>
              <Avatar class="shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div class="space-y-4">
            <div class="font-japanese bg-background/50 rounded-lg p-4 text-center text-2xl font-medium">
              <div class="space-y-1">
                <p>ア a</p>
                <p>イ i</p>
                <p>ウ u</p>
                <p>エ e</p>
                <p>オ o</p>
              </div>
            </div>

            <div class="text-center">
              <div class="mb-4 flex justify-center">
                <div class="h-10 w-10">
                  <img
                    src="/img/chapter-0/katana-leafs.png"
                    alt="katana-sword-icon"
                  />
                </div>
              </div>
            </div>

            <p>
              Katakana is for borrowed words, sound effects, and emphasis.
              English borrowed "sushi" from Japanese; Japanese borrowed テレビ
              (terebi) from "television." Katakana is how they write those.
            </p>

            <p class="text-muted-foreground bg-background/50 rounded p-3 text-sm italic">
              Loanwords from English? Katakana. Onomatopoeia and sound effects?
              Katakana. Emphasis, like italics or ALL CAPS? Also katakana.
              You'll also see it a lot in sci-fi and tech names.
            </p>
          </div>
        </div>

        {/* Kanji Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-red-500/10 to-pink-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-red-500">
            Kanji - The Borrowed Characters
          </h3>

          <div class="mb-6 space-y-4">
            <div class="flex items-start gap-4">
              <Avatar class="shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">And the last one?</p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                <p class="text-sm">Behold, minion...</p>
              </div>
              <Avatar class="shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div class="space-y-4">
            <p>
              These characters, borrowed from Chinese, are like little pictures
              with meaning. Look closely:
            </p>

            <div class="bg-background/50 rounded-lg p-6 text-center">
              <p class="font-japanese mb-2 text-5xl">日</p>
              <p class="text-lg">(hi/nichi) - the sun!</p>
            </div>

            <div class="text-muted-foreground space-y-3">
              <p>
                One kanji can replace several hiragana characters, making
                writing more compact. These characters are inherited from the
                neighbors in China. The word kanji itself is actually written
                as{" "}
                <span class="font-japanese text-xl">漢字</span> which literally
                means:
              </p>

              <div class="bg-background/50 rounded-lg p-4 text-center">
                <div class="flex items-end justify-center">
                  <span class="font-japanese mr-1 mb-0.5 text-xl">漢</span> (Han
                  Chinese)
                  <span class="font-japanese mx-1 mb-0.5 text-xl">字</span>{" "}
                  (Characters)
                </div>
              </div>

              <p>
                While China has simplified many of their characters, Japan has
                kept them unchanged.
              </p>
            </div>
          </div>
        </div>

        {/* Romaji Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-yellow-500/10 to-orange-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-orange-500">
            Bonus - Romaji
          </h3>

          <div class="mb-6 space-y-6">
            <div class="flex items-start gap-4">
              <Avatar class="shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">
                  Sensei, I've seen Romaji used a lot. What exactly is it?
                </p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-orange-100 p-3 dark:bg-orange-900/30">
                <p class="text-sm">
                  Romaji is just Japanese written with Latin letters, like{" "}
                  <code class="bg-background/50 rounded-sm px-1 py-px">
                    konnichiwa
                  </code>{" "}
                  instead of <span class="font-japanese">こんにちは</span>.
                </p>
              </div>
              <Avatar class="shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div class="text-muted-foreground space-y-3">
            <p>
              <strong>Student:</strong> So... like training wheels?
            </p>
            <p>
              <strong>Sensei:</strong> Exactly. We'll only use it in this
              first chapter.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold">Summary</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="font-japanese text-xl text-blue-500">あ</span>
              <div>
                <span class="font-semibold">Hiragana - </span>
                <span class="text-muted-foreground">
                  Curved characters for native Japanese words and grammar. The
                  foundation of the writing system.
                </span>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="font-japanese text-xl text-green-500">ア</span>
              <div>
                <span class="font-semibold">Katakana - </span>
                <span class="text-muted-foreground">
                  Angular characters for borrowed words, sound effects, and
                  emphasis.
                </span>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="font-japanese text-xl text-red-500">日</span>
              <div>
                <span class="font-semibold">Kanji - </span>
                <span class="text-muted-foreground">
                  Chinese-origin characters that carry meaning. One symbol can
                  replace several hiragana.
                </span>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="font-semibold text-orange-400">ABC</span>
              <div>
                <span class="font-semibold">Bonus: Romaji - </span>
                <span class="text-muted-foreground">
                  Your Latin alphabet crutch, helping you limp along until you
                  can run with the big boys.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
