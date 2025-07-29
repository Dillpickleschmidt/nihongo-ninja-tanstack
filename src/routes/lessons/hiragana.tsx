import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/lessons/hiragana")({
  loader: async () => {
    return {
      contentBox: {
        nextButtonLink: "/lessons/practice/hiragana",
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-8">
      {/* Hero Section */}
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 px-4 py-16">
        <div class="absolute inset-0 opacity-30">
          <div class="flex h-full items-center justify-center">
            <img
              src="/img/chapter-0/あ.png"
              alt="あ character"
              class="h-32 w-32 opacity-50"
            />
          </div>
        </div>
        <div class="relative text-center">
          <h1 class="mb-4 text-4xl leading-tight font-bold text-white">
            Hiragana: The{" "}
            <span class="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              ABCs
            </span>{" "}
            of Japanese
          </h1>
          <p class="text-lg leading-relaxed text-slate-300">
            Master the foundational writing system that unlocks all of Japanese.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-4xl space-y-12 px-4 py-12">
        {/* Resources Section */}
        <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
          <h3 class="mb-4 text-lg font-semibold">Essential Resources</h3>
          <ul class="space-y-3">
            <li>
              <a
                class="text-sky-400 underline hover:text-sky-300"
                href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
                target="_blank"
              >
                Tofugu's Learn Hiragana PDF
              </a>
            </li>
            <li>
              <a
                class="text-sky-400 underline hover:text-sky-300"
                href="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png"
                target="_blank"
              >
                Hiragana & Katakana Chart by IREAL
              </a>
            </li>
            <li>
              <a
                class="text-sky-400 underline hover:text-sky-300"
                href="https://www.youtube.com/watch?v=_wZHqOghvSs"
                target="_blank"
              >
                Learn Hiragana + Katakana in 2 Hours by JapanesePod101
              </a>
              <p class="text-muted-foreground mt-1 ml-4 text-sm">
                ↳ For when you want to dedicate serious time
              </p>
            </li>
          </ul>
        </div>

        {/* What is Hiragana */}
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="mb-4 text-3xl font-bold">What is Hiragana?</h2>
            <div class="mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          </div>

          <div class="space-y-6 text-lg leading-relaxed">
            <p>
              Hiragana is the foundational writing system of Japanese—one of
              three scripts alongside Katakana and Kanji. It's used for{" "}
              <strong class="text-blue-400">native Japanese words</strong> and{" "}
              <strong class="text-blue-400">grammatical elements</strong> that
              connect words into sentences.
            </p>

            <p>
              There are{" "}
              <strong class="text-blue-400">46 Hiragana characters</strong>{" "}
              total. That might sound like a lot, but they're all built from the
              same 5 vowels you already know:
            </p>
          </div>

          {/* Prominent vowel display */}
          <div class="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center dark:from-blue-950/30 dark:to-cyan-950/30">
            <div class="font-japanese mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">
              <div class="flex justify-center gap-8">
                <span>あ</span>
                <span>い</span>
                <span>う</span>
                <span>え</span>
                <span>お</span>
              </div>
            </div>
            <div class="mb-2 text-xl font-semibold text-blue-700 dark:text-blue-300">
              a • i • u • e • o
            </div>
            <p class="font-medium text-blue-600 dark:text-blue-400">
              Remember this pattern—memorize this and the rest becomes much
              easier!
            </p>
          </div>
        </div>

        {/* Building Characters */}
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="mb-4 text-3xl font-bold">Building Characters</h2>
            <div class="mx-auto h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-400"></div>
          </div>

          <div class="grid items-center gap-8 lg:grid-cols-2">
            <div class="space-y-4 pl-8">
              <p class="text-lg leading-relaxed">
                Next, we add consonants to each vowel. Adding the 'k' sound
                gives us five new characters that follow the same vowel pattern:
              </p>
              <p class="text-muted-foreground">
                This pattern continues for all consonant sounds, giving you the
                complete set of 46 characters.
              </p>
            </div>

            <div>
              <div class="rounded-xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800/50 dark:from-green-950/20 dark:to-emerald-950/20">
                <div class="space-y-3">
                  <div class="bg-background/50 grid grid-cols-3 items-center gap-4 rounded-lg p-3">
                    <span class="font-japanese text-xl font-bold text-green-700 dark:text-green-300">
                      か
                    </span>
                    <span class="text-center text-lg font-medium">ka</span>
                    <span class="text-muted-foreground text-right italic">
                      <span class="font-bold">ca</span>r
                    </span>
                  </div>
                  <div class="bg-background/50 grid grid-cols-3 items-center gap-4 rounded-lg p-3">
                    <span class="font-japanese text-xl font-bold text-green-700 dark:text-green-300">
                      き
                    </span>
                    <span class="text-center text-lg font-medium">ki</span>
                    <span class="text-muted-foreground text-right italic">
                      <span class="font-bold">ke</span>y
                    </span>
                  </div>
                  <div class="bg-background/50 grid grid-cols-3 items-center gap-4 rounded-lg p-3">
                    <span class="font-japanese text-xl font-bold text-green-700 dark:text-green-300">
                      く
                    </span>
                    <span class="text-center text-lg font-medium">ku</span>
                    <span class="text-muted-foreground text-right italic">
                      <span class="font-bold">cou</span>pon
                    </span>
                  </div>
                  <div class="bg-background/50 grid grid-cols-3 items-center gap-4 rounded-lg p-3">
                    <span class="font-japanese text-xl font-bold text-green-700 dark:text-green-300">
                      け
                    </span>
                    <span class="text-center text-lg font-medium">ke</span>
                    <span class="text-muted-foreground text-right italic">
                      <span class="font-bold">ke</span>pt
                    </span>
                  </div>
                  <div class="bg-background/50 grid grid-cols-3 items-center gap-4 rounded-lg p-3">
                    <span class="font-japanese text-xl font-bold text-green-700 dark:text-green-300">
                      こ
                    </span>
                    <span class="text-center text-lg font-medium">ko</span>
                    <span class="text-muted-foreground text-right italic">
                      <span class="font-bold">co</span>rner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Cases */}
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="mb-4 text-3xl font-bold">The Exceptions</h2>
            <div class="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-amber-400"></div>
          </div>

          <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <Avatar class="mt-1 flex-shrink-0">
                  <AvatarImage src="/img/student.png" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div class="flex-1 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                  <p class="text-sm">
                    But wait, <span class="font-japanese text-lg">し</span>{" "}
                    sounds like 'she' instead of 'see'! And what about{" "}
                    <span class="font-japanese text-lg">ん？</span>
                  </p>
                </div>
              </div>
              <div class="flex items-start justify-end gap-4">
                <div class="max-w-md flex-1 rounded-xl bg-amber-100 p-4 dark:bg-amber-900/40">
                  <p class="text-sm">
                    Good eye! Japanese likes to keep you on your toes. Some
                    characters veer <em>slightly</em> off the pattern, but
                    they're nothing you haven't pronounced before in English.
                  </p>
                </div>
                <Avatar class="mt-1 flex-shrink-0">
                  <AvatarImage src="/img/guru.png" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Special characters grid */}
          <div class="grid gap-6 md:grid-cols-2">
            <div class="rounded-xl border border-amber-200 bg-amber-50 p-7 text-center dark:border-amber-600/70 dark:bg-amber-900/10">
              <div class="font-japanese mb-3 text-4xl font-bold text-orange-600 dark:text-orange-400">
                ん
              </div>
              <h4 class="mb-3 text-lg font-semibold">The Lone "N"</h4>
              <p class="text-muted-foreground text-sm leading-relaxed">
                The only syllable that ends with a consonant. Pronounce it like
                you're about to say "no" but got distracted mid-word.
              </p>
            </div>

            <div class="rounded-xl border border-amber-200 bg-amber-50 p-7 text-center dark:border-amber-600/70 dark:bg-amber-900/10">
              <div class="font-japanese mb-3 text-4xl font-bold text-orange-600 dark:text-orange-400">
                を
              </div>
              <h4 class="mb-3 text-lg font-semibold">The Tricky "Wo"</h4>
              <p class="text-muted-foreground text-sm leading-relaxed">
                Technically "wo," but usually pronounced as "o". Don't overthink
                this one!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Strategy */}
        <div class="space-y-8">
          <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <Avatar class="mt-1 flex-shrink-0">
                  <AvatarImage src="/img/student.png" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div class="flex-1 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                  <p class="text-sm">
                    Sensei, these characters... they're like scribbles! And
                    remembering <span class="font-semibold">46 of them?</span> I
                    might need a brain upgrade.
                  </p>
                </div>
              </div>
              <div class="flex items-start justify-end gap-4">
                <div class="max-w-md flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                  <p class="text-sm">
                    Fear not, for the ✨internet✨ has come to your rescue!
                  </p>
                </div>
                <Avatar class="mt-1 flex-shrink-0">
                  <AvatarImage src="/img/guru.png" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Prominent CTA */}
          <div class="rounded-2xl border-2 border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 p-8 text-center dark:border-sky-800 dark:from-sky-950/30 dark:to-blue-950/30">
            <h4 class="mb-4 text-2xl font-bold text-sky-700 dark:text-sky-300">
              <a
                class="hover:underline"
                href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
                target="_blank"
              >
                Tofugu's Learn Hiragana PDF
              </a>
            </h4>
            <p class="mx-auto max-w-2xl text-sky-600 dark:text-sky-400">
              So effective, we're outsourcing your hiragana introduction to
              them. Master all 46 characters within days (or hours). Completely
              free—no signup required!
            </p>
          </div>

          <div class="bg-card/50 border-border rounded-lg border p-6 shadow-lg">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <Avatar class="mt-1 flex-shrink-0">
                  <AvatarImage src="/img/student.png" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div class="flex-1 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                  <p class="text-sm">
                    I'll check that out. What comes after mastering these
                    squiggles?
                  </p>
                </div>
              </div>
              <div class="flex items-start justify-end gap-4">
                <div class="max-w-md flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                  <p class="text-sm">
                    Once you've learned the characters, we'll practice Japanese
                    greetings. Don't worry about perfection—we'll ease you in
                    with romaji this time. But next chapter? You're on your own,
                    kid.
                  </p>
                </div>
                <Avatar class="mt-1 flex-shrink-0">
                  <AvatarImage src="/img/guru.png" />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <div class="flex justify-center py-4">
            <div class="bg-background/50 border-muted flex h-20 w-20 items-center justify-center rounded-full border-2">
              <img
                src="/img/shocked-child.png"
                alt="shocked student"
                class="h-16 w-16 overflow-hidden rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Sensei's Wisdom */}
        <div class="border-border space-y-8 border-t pt-12">
          <div class="text-center">
            <div class="bg-background/50 border-muted mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2">
              <img
                src="/img/guru.png"
                alt="sensei"
                class="h-16 w-16 rounded-full"
              />
            </div>
            <h3 class="mb-4 text-2xl font-semibold">A Note from Sensei</h3>
          </div>

          <div class="mx-auto max-w-3xl space-y-6 text-center">
            <div class="bg-card/30 border-border rounded-xl border p-8">
              <p class="text-muted-foreground mb-4 leading-relaxed italic">
                Think of Hiragana like my collection of vintage tea cups—
                <em class="text-purple-400">
                  pulls out absolutely massive tea cup collection from nowhere
                </em>
                —start with one, add another, and before you know it, you'll
                have a collection worth showing off.
              </p>
              <p class="text-muted-foreground text-lg leading-relaxed italic">
                <em class="text-purple-400">arranges cups precisely</em>{" "}
                Practice daily, and you'll be surprised how quickly they add up.
              </p>
            </div>
          </div>

          <div class="flex justify-center">
            <div class="w-full max-w-md">
              <YouTubeVideo
                videoId="GuDyQYkdyio"
                title="35 years mug collection destroyed"
                credit=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
