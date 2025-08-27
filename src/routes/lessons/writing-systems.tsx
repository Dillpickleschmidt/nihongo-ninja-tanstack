// routes/lessons/writing-systems.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Route = createFileRoute("/lessons/writing-systems")({
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
    <>
      <div class="-mt-2 h-48 w-full border-b border-black">
        <img src="/img/chapter-0/brushes.jpg" alt="japanese brushstrokes" />
      </div>
      <h2 class="mt-24 px-12 pt-10 pb-14 text-4xl font-medium lg:px-24 lg:text-5xl">
        Let's take a closer look at the Japanese writing systems.
      </h2>
      <div class="space-y-9 px-8 sm:px-24 lg:px-12">
        <div class="border-muted bg-card mr-24 flex gap-4 rounded-2xl border-2 p-4 shadow-md">
          <Avatar>
            <AvatarImage src="/img/student.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <p>
            Wise Sensei, what's this I'm hearing about more than one writing
            system? Is this some kind of joke?
          </p>
        </div>
        <div class="border-muted bg-card ml-24 rounded-2xl border-2 p-4 shadow-md">
          <Avatar class="float-end">
            <AvatarImage src="/img/guru.png" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <p>
            <em>*finishing his calligraphy strokes*</em> Japanese has three
            writing systems, and we often use all of them in a single sentence,
            like this masterpiece:
          </p>
        </div>
        <div>
          <p class="mb-2 text-center text-2xl">
            <span class="font-japanese">
              <span class="text-green-500 saturate-[25%]">テレビ</span>
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
              <div class="inline-flex h-3 w-3 rounded-full bg-green-500 saturate-[25%]" />{" "}
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
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">
                  Three writing systems? That seems... excessive.
                </p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <p class="text-sm">
                  Think of it like having different tools in an artist's kit.
                  Each has its purpose, and together they create something
                  rather beautiful. Let me show you each one.
                </p>
              </div>
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div class="mt-6 space-y-4">
            <p>
              First, meet Hiragana, the foundational writing system. These
              curved characters can represent every sound in Japanese:
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
                <strong>Sensei:</strong> Observe their rounded shapes, smooth
                like the stones in a Zen garden.
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
                There are 46 of these elegant characters - think of them as the
                Japanese ABCs, if ABCs were actually logical and consistent.
              </p>
            </div>
          </div>
        </div>
        {/* Katakana Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-green-500">
            Katakana - The Sharp Cousin
          </h3>

          <div class="mb-6 space-y-4">
            <div class="flex items-start gap-4">
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">And the other two systems?</p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                <p class="text-sm">
                  <em class="text-green-600 dark:text-green-400">
                    *SLAMS HANDS ON TABLE*
                  </em>{" "}
                  AH! NOW IT GETS EXCITING! <em>*tea splashes*</em> Next we have
                  Katakana, Hiragana's more angular cousin!{" "}
                  <em>*straightens robes*</em>
                </p>
              </div>
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/guru.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div class="space-y-4">
            <p>Same sounds, different style:</p>

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
              <p class="mb-2">
                <strong>Sensei:</strong> Notice their sharp, decisive forms -
                like the blade of a katana!
              </p>
              <div class="mb-4 flex justify-center">
                <div class="h-10 w-10">
                  <img
                    src="/img/chapter-0/katana-leafs.png"
                    alt="katana-sword-icon"
                  />
                </div>
              </div>
            </div>

            <div class="text-muted-foreground space-y-3">
              <p>
                We use Katakana for foreign words, scientific terms, and when we
                want text to <em>STAND OUT</em>. Like how English uses italics
                or bold for emphasis.
              </p>

              <div class="flex items-start gap-4">
                <Avatar class="flex-shrink-0">
                  <AvatarImage src="/img/student.png" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                  <p class="text-sm">
                    These seem to make the same sounds... why have both?
                  </p>
                </div>
              </div>

              <p>
                <strong>Sensei:</strong> Good question. Katakana is perfect for
                writing foreign words, sound effects in manga, and making things
                pop in advertisements.
              </p>

              <p class="bg-background/50 rounded p-3 text-sm italic">
                Got a loanword from English? Write it in Katakana. Heard an
                onomatopoeia that mimics sounds? Katakana's got you covered.
                It's also the go-to for emphasis, kind of like how we use
                italics or ALL CAPS. Plus, it's the script of choice for sci-fi
                and tech names, giving everything a futuristic vibe.
              </p>
            </div>
          </div>
        </div>
        {/* Kanji Section */}
        <div class="border-border rounded-lg border bg-gradient-to-br from-red-500/10 to-pink-500/5 p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold text-red-500">
            Kanji - The Ancient Power
          </h3>

          <div class="mb-6 space-y-4">
            <div class="flex items-start gap-4">
              <Avatar class="flex-shrink-0">
                <AvatarImage src="/img/student.png" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="flex-1 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                <p class="text-sm">And the final system?</p>
              </div>
            </div>
            <div class="flex items-start justify-end gap-4">
              <div class="max-w-md flex-1 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                <p class="text-sm">
                  <em class="text-red-600 dark:text-red-400">
                    *leaning forward with villainous delight*
                  </em>{" "}
                  Behold, minion... <em>*adjusts glasses*</em>
                </p>
              </div>
              <Avatar class="flex-shrink-0">
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
                Why use Kanji? One symbol can replace several Hiragana
                characters, making writing more efficient. And more
                importantly... <em>*leans in conspiratorially*</em> it makes you
                look incredibly sophisticated when you can read them.
              </p>

              <p>
                These characters are inherited from the neighbors in China. For
                example, the word kanji is actually written as{" "}
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
                kept them unchanged, like preserved artifacts of an ancient
                time.
              </p>

              <p>
                <strong>Student:</strong> Hmm, how should I get started, oh
                impeccable one?
              </p>
              <p>
                <strong>Sensei:</strong> Begin with Hiragana, your foundation.
                Master its sounds and strokes, and the rest will follow.
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
              <Avatar class="flex-shrink-0">
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
                  Romaji is just Japanese written with Latin letters—like{" "}
                  <code class="bg-background/50 rounded-sm px-1 py-0.25">
                    konnichiwa
                  </code>{" "}
                  instead of <span class="font-japanese">こんにちは</span>.
                </p>
              </div>
              <Avatar class="flex-shrink-0">
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
              <strong>Sensei:</strong> Exactly. Helpful at first, but not
              something to depend on. That’s why we’ll only use Romaji in this
              first chapter.
            </p>
            <p>
              <strong>Student:</strong> Got it. I’ll start learning the real
              scripts soon.
            </p>
            <p>
              <strong>Sensei:</strong> <em>*mumbles*</em> If only I had become a
              hermit… <em>*smiles*</em> Wise choice, young one.
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
                  Smooth characters primarily used for native Japanese words and
                  grammatical elements. It is the core of the Japanese writing
                  system.
                </span>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="font-japanese text-xl text-green-500">ア</span>
              <div>
                <span class="font-semibold">Katakana - </span>
                <span class="text-muted-foreground">
                  Angular characters that primarily represent loanwords/foreign
                  words. It is the energetic sibling of Hiragana and is often
                  used in commercials.
                </span>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="font-japanese text-xl text-red-500">日</span>
              <div>
                <span class="font-semibold">Kanji - </span>
                <span class="text-muted-foreground">
                  Ancient Chinese characters that represent entire words or
                  ideas.
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
    </>
  )
}
